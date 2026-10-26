// --- NAVIGATION LOGIC ---
let jadwalInit = false;

function switchTab(tabId, element) {
  document.querySelectorAll('.tab-section').forEach(el => el.classList.remove('active'));
  document.getElementById('tab-' + tabId).classList.add('active');
  
  document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
  element.classList.add('active');

  const sub = document.getElementById('headerSub');
  if(tabId === 'jurnal') sub.textContent = "Membersihkan Hati & Meraih Berkah";
  if(tabId === 'jadwal') sub.textContent = "Jadwal Sholat Harian";

  if(tabId === 'jadwal' && !jadwalInit) {
    jadwalInit = true;
    loadProvinces();
    fetchJadwal();
  }
}

let selected = 0;
let done = new Set();
try { done = new Set(JSON.parse(localStorage.getItem("ramadhan30Done") || "[]")); } catch(e) {}
function save() { try { localStorage.setItem("ramadhan30Done", JSON.stringify([...done])); } catch(e) {} }

// --- PENGATURAN TEMA ---
function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  const isDark = theme === "dark";
  document.getElementById("themeIcon").textContent = isDark ? "☀️" : "🌙";
  document.getElementById("themeLabel").textContent = isDark ? "Light" : "Dark";
  
  const metaThemeColor = document.getElementById("metaThemeColor");
  if (metaThemeColor) metaThemeColor.content = isDark ? "#000000" : "#f2f2f7";
  try { localStorage.setItem("ramadhan30Theme", theme); } catch(e) {}
}
let currentTheme = "dark";
try { currentTheme = localStorage.getItem("ramadhan30Theme") || "dark"; } catch(e) {}
applyTheme(currentTheme);
document.getElementById("themeBtn").addEventListener("click", () => {
  currentTheme = currentTheme === "dark" ? "light" : "dark";
  applyTheme(currentTheme);
});

// --- LOGIKA JURNAL ---
function initDays() {
  const daysContainer = document.getElementById("days");
  ramadhanData.forEach((a,i) => {
    const b = document.createElement("button");
    b.id = "dayBtn-" + i;
    b.className = "day";
    b.textContent = i + 1;
    b.addEventListener("click", () => { selected=i; renderJurnal(); });
    daysContainer.appendChild(b);
  });
}
initDays();

function renderJurnal() {
  ramadhanData.forEach((a,i) => {
    const b = document.getElementById("dayBtn-" + i);
    if(b) b.className = "day" + (i===selected ? " active" : "") + (done.has(i) ? " done" : "");
  });

  const activeDay = document.getElementById("dayBtn-" + selected);
  if (activeDay) activeDay.scrollIntoView({behavior:"smooth", block:"nearest", inline:"center"});
  
  const a = ramadhanData[selected];
  document.getElementById("dayLabel").textContent = "PUASA HARI " + String(selected+1).padStart(2,"0");
  document.getElementById("title").textContent = a.title;
  document.getElementById("desc").textContent = a.desc;
  document.getElementById("quranTarget").textContent = a.quran;
  document.getElementById("doaTarget").textContent = a.doa;
  document.getElementById("shalawatTarget").textContent = a.shalawat;
  document.getElementById("actionTarget").textContent = a.action;
  
  document.getElementById("progress").value = done.size;
  document.getElementById("progressText").textContent = `${done.size} dari 30 selesai`;
  document.getElementById("progressPercent").textContent = Math.round((done.size/30)*100) + "%";
  
  const markBtn = document.getElementById("markBtn");
  if (done.has(selected)) {
    markBtn.textContent = "Batalkan Selesai";
    markBtn.style.background = "var(--button)";
    markBtn.style.color = "var(--ink)";
  } else {
    markBtn.textContent = "Tandai Selesai";
    markBtn.style.background = "var(--accent)";
    markBtn.style.color = "var(--accent-text)";
  }
}

document.getElementById("markBtn").addEventListener("click", () => {
  if(done.has(selected)) {
    done.delete(selected);
  } else {
    done.add(selected);
    if (typeof confetti === 'function') {
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 }, colors: ['#94ff00', '#538c04', '#ffffff'] });
    }
  }
  save(); renderJurnal();
});

document.getElementById("copyMotivasiBtn").addEventListener("click", async () => {
  const a = ramadhanData[selected];
  const content = `*Ramadhan Hari ${selected+1}: ${a.title}*\n\n${a.desc}\n\n🎯 Aksi Nyata: ${a.action}`;
  try { await navigator.clipboard.writeText(content); document.getElementById("copyMotivasiBtn").textContent = "Tersalin ✓"; setTimeout(() => document.getElementById("copyMotivasiBtn").textContent = "Salin Motivasi", 1600); }
  catch(e) { window.prompt("Salin teks berikut:", content); }
});

document.getElementById("copyDoaBtn").addEventListener("click", async () => {
  const a = ramadhanData[selected];
  const content = `*Amalan Ramadhan Hari ${selected+1}*\n\n📖 Target Al-Qur'an: ${a.quran}\n\n🤲 Doa Harian:\n${a.doa}\n\n📿 Shalawat:\n${a.shalawat}`;
  try { await navigator.clipboard.writeText(content); document.getElementById("copyDoaBtn").textContent = "Tersalin ✓"; setTimeout(() => document.getElementById("copyDoaBtn").textContent = "Salin Doa", 1600); }
  catch(e) { window.prompt("Salin teks berikut:", content); }
});

renderJurnal();

// --- LOGIKA JADWAL SHOLAT (DROPDOWN API) ---
let userProvinsi = localStorage.getItem("ramadhanProvinsi") || "Kalimantan Selatan";
let userKota = localStorage.getItem("ramadhanKota") || "Kota Banjarbaru";

const provSelect = document.getElementById("provinsiSelect");
const kotaSelect = document.getElementById("kotaSelect");

async function loadProvinces() {
  try {
    const res = await fetch("https://equran.id/api/v2/shalat/provinsi");
    const json = await res.json();
    
    if(json.code === 200) {
      provSelect.innerHTML = '<option value="">-- Pilih Provinsi --</option>';
      json.data.forEach(p => {
        const opt = document.createElement("option");
        opt.value = p;
        opt.textContent = p;
        if(p === userProvinsi) opt.selected = true;
        provSelect.appendChild(opt);
      });
      if(userProvinsi) {
        await loadCities(userProvinsi, userKota);
      }
    }
  } catch(e) {
    provSelect.innerHTML = '<option value="">Gagal memuat provinsi</option>';
  }
}

async function loadCities(provinsiName, selectedKota = "") {
  kotaSelect.innerHTML = '<option value="">Memuat Kota...</option>';
  try {
    const res = await fetch("https://equran.id/api/v2/shalat/kabkota", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ provinsi: provinsiName })
    });
    const json = await res.json();
    
    if(json.code === 200) {
      kotaSelect.innerHTML = '<option value="">-- Pilih Kota/Kabupaten --</option>';
      json.data.forEach(k => {
        const opt = document.createElement("option");
        opt.value = k;
        opt.textContent = k;
        if(k === selectedKota) opt.selected = true;
        kotaSelect.appendChild(opt);
      });
    }
  } catch(e) {
    kotaSelect.innerHTML = '<option value="">Gagal memuat kota</option>';
  }
}

provSelect.addEventListener("change", (e) => {
  const prov = e.target.value;
  if(prov) {
    loadCities(prov);
  } else {
    kotaSelect.innerHTML = '<option value="">Pilih Provinsi Dahulu</option>';
  }
});

document.getElementById("saveLocationBtn").addEventListener("click", () => {
  const prov = provSelect.value;
  const kota = kotaSelect.value;
  
  if(prov && kota) {
    userProvinsi = prov;
    userKota = kota;
    
    localStorage.setItem("ramadhanProvinsi", userProvinsi);
    localStorage.setItem("ramadhanKota", userKota);
    
    document.getElementById("jadwalList").innerHTML = `<div class="center-loader">Mencari jadwal untuk ${userKota}...</div>`;
    document.getElementById("jadwalDate").textContent = "Memuat jadwal...";
    
    fetchJadwal();
  } else {
    alert("Silakan pilih Provinsi dan Kota/Kabupaten terlebih dahulu!");
  }
});

async function fetchJadwal() {
  const listEl = document.getElementById("jadwalList");
  const dateEl = document.getElementById("jadwalDate");
  try {
    const response = await fetch("https://equran.id/api/v2/shalat", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "provinsi": userProvinsi,
        "kabkota": userKota
      })
    });
    
    const resData = await response.json();
    
    if (resData.code === 200 && resData.data && resData.data.jadwal.length > 0) {
      const data = resData.data;
      const today = new Date().getDate();
      
      const todayJadwal = data.jadwal.find(j => j.tanggal === today) || data.jadwal[0];
      
      dateEl.textContent = `${data.kabkota} - ${todayJadwal.tanggal} ${data.bulan_nama} ${data.tahun}`;
      
      listEl.innerHTML = `
        <div class="jadwal-item"><span>Imsak</span><span class="time">${todayJadwal.imsak}</span></div>
        <div class="jadwal-item"><span>Shubuh</span><span class="time">${todayJadwal.subuh}</span></div>
        <div class="jadwal-item"><span>Terbit</span><span class="time">${todayJadwal.terbit}</span></div>
        <div class="jadwal-item"><span>Dhuha</span><span class="time">${todayJadwal.dhuha}</span></div>
        <div class="jadwal-item"><span>Dzuhur</span><span class="time">${todayJadwal.dzuhur}</span></div>
        <div class="jadwal-item"><span>Ashar</span><span class="time">${todayJadwal.ashar}</span></div>
        <div class="jadwal-item"><span>Maghrib</span><span class="time">${todayJadwal.maghrib}</span></div>
        <div class="jadwal-item"><span>Isya</span><span class="time">${todayJadwal.isya}</span></div>
      `;
    } else {
      throw new Error("Kota tidak ditemukan atau format API berubah");
    }
  } catch (error) {
    listEl.innerHTML = `<div class="center-loader">Gagal memuat jadwal untuk lokasi ini.<br>Pastikan koneksi internet stabil.</div>`;
    dateEl.textContent = "Data tidak ditemukan";
  }
}

// SERVICE WORKER REGISTRATION
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}));
}