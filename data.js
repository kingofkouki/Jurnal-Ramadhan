const ramadhanData = [
    { 
      title: "Menyambut dengan Niat Tulus", 
      desc: "Bulan penuh rahmat telah tiba. Perbarui niat bahwa puasa ini murni karena Allah, bukan karena kebiasaan atau paksaan. Niat yang tulus adalah fondasi setiap ibadah.", 
      quran: "Juz 1 (Al-Fatihah 1 - Al-Baqarah 141)", 
      doa: "Allahumma ahillahu 'alaina bil amni wal iman, was salamati wal islam.\n(Ya Allah, jadikanlah bulan ini membawa keamanan, keimanan, keselamatan, dan keislaman bagi kami).", 
      shalawat: "Shalawat Jibril (100x)\nصَلَّى اللهُ عَلَى مُحَمَّد\n(Shallallahu 'ala Muhammad)", 
      action: "Ucapkan niat puasa di dalam hati dengan penuh kesadaran malam ini." 
    },
    { 
      title: "Menjaga Lisan", 
      desc: "Puasa bukan hanya menahan lapar dan haus, tetapi juga menahan lisan dari kebohongan, gosip, dan kata-kata kotor. Lisan yang dijaga akan menjaga pahala puasa.", 
      quran: "Juz 2 (Al-Baqarah 142 - 252)", 
      doa: "Ya Allah, lindungilah lisanku dari menyakiti orang lain dan dari perkataan yang sia-sia.", 
      shalawat: "Shalawat Ibrahimiyyah (10x)\nاللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ\n(Allahumma shalli 'ala Muhammad wa 'ala ali Muhammad)", 
      action: "Jika ada yang memancing amarah, katakan dalam hati, 'Inni sha-im' (Sesungguhnya aku sedang berpuasa)." 
    },
    { 
      title: "Sabar dan Menahan Diri", 
      desc: "Rasa lapar dan haus melatih kita untuk bersabar. Jadikan momen ini untuk melatih empati terhadap mereka yang kurang beruntung setiap harinya.", 
      quran: "Juz 3 (Al-Baqarah 253 - Ali 'Imran 92)", 
      doa: "Rabbana afrigh 'alaina shabran wa tawaffana muslimin.\n(Ya Tuhan kami, limpahkanlah kesabaran kepada kami).", 
      shalawat: "Shalawat Thibbil Qulub (10x)\nاللَّهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ طِبِّ الْقُلُوْبِ وَدَوَائِهَا\n(Allahumma shalli 'ala sayyidina Muhammadin thibbil qulubi wa dawa-iha)", 
      action: "Tahan keluhan Anda saat merasa lapar atau haus hari ini." 
    },
    { 
      title: "Keajaiban Sedekah", 
      desc: "Sedekah di bulan Ramadhan pahalanya dilipatgandakan. Tidak harus besar, yang penting rutin dan ikhlas.", 
      quran: "Juz 4 (Ali 'Imran 93 - An-Nisa 23)", 
      doa: "Ya Allah, luaskanlah rezekiku agar aku bisa menjadi jalan kebaikan bagi hamba-hamba-Mu yang lain.", 
      shalawat: "Shalawat Nariyah (11x)\nاللَّهُمَّ صَلِّ صَلَاةً كَامِلَةً وَسَلِّمْ سَلَامًا تَامًّا عَلَى سَيِّدِنَا مُحَمَّدٍ\n(Allahumma shalli shalatan kamilatan wa sallim salaman tamman 'ala sayyidina Muhammadin)", 
      action: "Sisihkan sebagian harta hari ini untuk kotak amal atau beri makan orang yang berpuasa." 
    },
    { 
      title: "Berdialog dengan Al-Qur'an", 
      desc: "Ramadhan adalah bulan Al-Qur'an. Jadikan membaca Al-Qur'an sebagai rutinitas harian, bukan beban. Bacalah dengan perlahan dan resapi maknanya.", 
      quran: "Juz 5 (An-Nisa 24 - 147)", 
      doa: "Allahummarhamni bil quran.\n(Ya Allah, rahmatilah aku dengan Al-Qur'an).", 
      shalawat: "Shalawat Munjiyat (7x)\nاللَّهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ صَلَاةً تُنْجِيْنَا بِهَا مِنْ جَمِيْعِ الْأَهْوَالِ\n(Allahumma shalli 'ala sayyidina Muhammadin shalatan tunjina biha min jami'il ahwali)", 
      action: "Baca terjemahan dari 3 ayat Al-Qur'an hari ini dan resapi maknanya." 
    },
    { 
      title: "Shalat Tepat Waktu", 
      desc: "Puasa akan kehilangan makna jika shalat wajib ditinggalkan. Jadikan adzan sebagai panggilan prioritas.", 
      quran: "Juz 6 (An-Nisa 148 - Al-Ma'idah 81)", 
      doa: "Rabbijalni muqimash-shalati wa min dzurriyyati.\n(Ya Tuhanku, jadikanlah aku dan anak cucuku orang-orang yang tetap mendirikan shalat).", 
      shalawat: "Shalawat Jibril (100x)\nصَلَّى اللهُ عَلَى مُحَمَّد\n(Shallallahu 'ala Muhammad)", 
      action: "Bersiaplah mengambil wudhu 5 menit sebelum waktu azan tiba." 
    },
    { 
      title: "Berbakti Kepada Orang Tua", 
      desc: "Ridha Allah ada pada ridha orang tua. Momen Ramadhan adalah waktu terbaik untuk meminta maaf dan mendoakan mereka.", 
      quran: "Juz 7 (Al-Ma'idah 82 - Al-An'am 110)", 
      doa: "Rabbighfirlii wa liwaalidayya warhamhumaa kamaa rabbayaanii shaghiiraa.\n(Ya Tuhanku, ampunilah aku dan kedua orang tuaku, sayangilah mereka).", 
      shalawat: "Shalawat Nuril Anwar (11x)\nاللَّهُمَّ صَلِّ عَلَى نُوْرِ الْأَنْوَارِ وَسِرِّ الْأَسْرَارِ\n(Allahumma shalli 'ala nuril anwari wa sirril asrari)", 
      action: "Hubungi atau peluk orang tua Anda, dan minta doa restu mereka hari ini." 
    },
    { 
      title: "Menahan Amarah", 
      desc: "Emosi yang tidak terkontrol dapat membakar pahala puasa seperti api memakan kayu kering.", 
      quran: "Juz 8 (Al-An'am 111 - Al-A'raf 87)", 
      doa: "Ya Allah, dinginkanlah hatiku dari amarah dan jadikan aku hamba-Mu yang pemaaf.", 
      shalawat: "Shalawat Ibrahimiyyah (10x)\nاللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ\n(Allahumma shalli 'ala Muhammad wa 'ala ali Muhammad)", 
      action: "Ambil wudhu jika Anda merasa emosi mulai terpancing hari ini." 
    },
    { 
      title: "Memperbanyak Istighfar", 
      desc: "Kita manusia tempatnya salah dan lupa. Basahi bibir dengan istighfar, terutama di waktu mustajab seperti menjelang berbuka.", 
      quran: "Juz 9 (Al-A'raf 88 - Al-Anfal 40)", 
      doa: "Astaghfirullahal 'azhiim, alladzi laa ilaaha illaa huwal hayyul qayyuumu wa atuubu ilaih.", 
      shalawat: "Shalawat Fatih (11x)\nاللَّهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ الْفَاتِحِ لِمَا أُغْلِقَ\n(Allahumma shalli 'ala sayyidina Muhammadinil fatihi lima ughliqa)", 
      action: "Ucapkan istighfar 100x sambil menunggu waktu berbuka." 
    },
    { 
      title: "Keberkahan Saat Berbuka", 
      desc: "Waktu berbuka adalah momen di mana doa tidak tertolak. Jangan terburu-buru makan sampai lupa memanjatkan doa terbaik Anda.", 
      quran: "Juz 10 (Al-Anfal 41 - At-Taubah 92)", 
      doa: "Dzahabazh zhama'u wabtallatil 'uruuqu wa tsabatal ajru insya Allah.", 
      shalawat: "Shalawat Jibril (100x)\nصَلَّى اللهُ عَلَى مُحَمَّد\n(Shallallahu 'ala Muhammad)", 
      action: "Berdoa untuk hajat terbesar Anda tepat 1 menit sebelum membatalkan puasa." 
    },
    { 
      title: "Menjaga Pandangan", 
      desc: "Puasa mata adalah menahan diri dari melihat hal-hal yang tidak halal dan membuang waktu.", 
      quran: "Juz 11 (At-Taubah 93 - Hud 5)", 
      doa: "Ya Allah, jadikanlah mataku melihat kebesaran-Mu dan butakan dari maksiat kepada-Mu.", 
      shalawat: "Shalawat Thibbil Qulub (10x)\nاللَّهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ طِبِّ الْقُلُوْبِ وَدَوَائِهَا\n(Allahumma shalli 'ala sayyidina Muhammadin thibbil qulubi wa dawa-iha)", 
      action: "Kurangi waktu buka media sosial selama 1 jam hari ini." 
    },
    { 
      title: "Membantu Sesama", 
      desc: "Meringankan beban orang lain akan mengundang rahmat Allah ke dalam hidup kita.", 
      quran: "Juz 12 (Hud 6 - Yusuf 52)", 
      doa: "Ya Allah, permudahlah urusanku dan jadikan aku perantara kemudahan bagi orang lain.", 
      shalawat: "Shalawat Nariyah (11x)\nاللَّهُمَّ صَلِّ صَلَاةً كَامِلَةً وَسَلِّمْ سَلَامًا تَامًّا عَلَى سَيِّدِنَا مُحَمَّدٍ\n(Allahumma shalli shalatan kamilatan wa sallim salaman tamman 'ala sayyidina Muhammadin)", 
      action: "Tawarkan bantuan sekecil apa pun kepada keluarga, teman, atau tetangga." 
    },
    { 
      title: "Menghidupkan Malam", 
      desc: "Shalat Tarawih adalah ibadah istimewa. Lakukanlah dengan tenang dan tuma'ninah, bukan sekadar menggugurkan kewajiban.", 
      quran: "Juz 13 (Yusuf 53 - Ibrahim 52)", 
      doa: "Ya Allah, berikan aku kekuatan untuk menghidupkan malam-malam Ramadhan dengan ibadah.", 
      shalawat: "Shalawat Ummi (100x)\nاللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ النَّبِيِّ الْأُمِّيِّ وَعَلَى آلِهِ وَسَلِّمْ\n(Allahumma shalli 'ala Muhammadinin nabiyyil ummiyyi wa 'ala alihi wa sallim)", 
      action: "Lakukan shalat Tarawih malam ini dengan penuh kesadaran dan kekhusyukan." 
    },
    { 
      title: "Menjauhi Ghibah", 
      desc: "Membicarakan keburukan orang lain saat berpuasa menggerogoti esensi ibadah kita. Lebih baik diam.", 
      quran: "Juz 14 (Al-Hijr 1 - An-Nahl 128)", 
      doa: "Ya Allah, sucikan hatiku dari kebencian dan lisanku dari membicarakan keburukan saudaraku.", 
      shalawat: "Shalawat Munjiyat (7x)\nاللَّهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ صَلَاةً تُنْجِيْنَا بِهَا مِنْ جَمِيْعِ الْأَهْوَالِ\n(Allahumma shalli 'ala sayyidina Muhammadin shalatan tunjina biha min jami'il ahwali)", 
      action: "Alihkan pembicaraan jika lingkungan Anda mulai bergosip." 
    },
    { 
      title: "Qana'ah dan Rasa Syukur", 
      desc: "Hindari pemborosan saat berbuka puasa. Bersyukurlah atas makanan sederhana yang terhidang.", 
      quran: "Juz 15 (Al-Isra' 1 - Al-Kahf 74)", 
      doa: "Alhamdulillahilladzi ath'amanaa wa saqaanaa wa ja'alanaa minal muslimiin.", 
      shalawat: "Shalawat Jibril (100x)\nصَلَّى اللهُ عَلَى مُحَمَّد\n(Shallallahu 'ala Muhammad)", 
      action: "Berbukalah dengan porsi secukupnya tanpa menyisakan/membuang makanan." 
    },
    { 
      title: "Mendoakan Saudara Seiman", 
      desc: "Doa rahasia untuk orang lain akan diaminkan oleh malaikat. Doakan kebaikan untuk orang-orang di sekitar Anda.", 
      quran: "Juz 16 (Al-Kahf 75 - Thaha 135)", 
      doa: "Ya Allah, berikanlah kesehatan, rezeki, dan jalan keluar bagi saudara/temanku (sebut nama).", 
      shalawat: "Shalawat Ibrahimiyyah (10x)\nاللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ\n(Allahumma shalli 'ala Muhammad wa 'ala ali Muhammad)", 
      action: "Sebutkan nama 3 orang teman dalam doa Anda hari ini." 
    },
    { 
      title: "Memahami Makna Al-Qur'an", 
      desc: "Luangkan waktu untuk membaca tafsir atau terjemahan agar kita mengerti pesan yang Allah sampaikan.", 
      quran: "Juz 17 (Al-Anbiya 1 - Al-Hajj 78)", 
      doa: "Ya Allah, jadikan Al-Qur'an sebagai penyejuk hati dan cahaya di dadaku.", 
      shalawat: "Shalawat Nuril Anwar (11x)\nاللَّهُمَّ صَلِّ عَلَى نُوْرِ الْأَنْوَارِ وَسِرِّ الْأَسْرَارِ\n(Allahumma shalli 'ala nuril anwari wa sirril asrari)", 
      action: "Baca terjemahan dari satu surat pendek yang sering Anda baca saat shalat." 
    },
    { 
      title: "Menyambung Silaturahmi", 
      desc: "Menyambung persaudaraan akan melapangkan rezeki dan memanjangkan umur.", 
      quran: "Juz 18 (Al-Mu'minun 1 - Al-Furqan 20)", 
      doa: "Ya Allah, lembutkan hati orang-orang di sekitarku dan satukan kami dalam kebaikan.", 
      shalawat: "Shalawat Fatih (11x)\nاللَّهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ الْفَاتِحِ لِمَا أُغْلِقَ\n(Allahumma shalli 'ala sayyidina Muhammadinil fatihi lima ughliqa)", 
      action: "Kirimkan pesan/telepon satu kerabat untuk sekadar menanyakan kabar." 
    },
    { 
      title: "Memperbaiki Kualitas Shalat", 
      desc: "Pahami bacaan shalat dari takbir hingga salam agar hati bisa benar-benar hadir saat menghadap-Nya.", 
      quran: "Juz 19 (Al-Furqan 21 - An-Naml 55)", 
      doa: "Ya Allah, karuniakan kepadaku shalat yang khusyuk dan diterima di sisi-Mu.", 
      shalawat: "Shalawat Thibbil Qulub (10x)\nاللَّهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ طِبِّ الْقُلُوْبِ وَدَوَائِهَا\n(Allahumma shalli 'ala sayyidina Muhammadin thibbil qulubi wa dawa-iha)", 
      action: "Cari tahu dan pelajari arti bacaan doa ketika ruku' dan sujud." 
    },
    { 
      title: "Fase Pembebasan dari Neraka", 
      desc: "Memasuki 10 hari terakhir, perbanyak muhasabah (introspeksi diri) di keheningan malam.", 
      quran: "Juz 20 (An-Naml 56 - Al-'Ankabut 45)", 
      doa: "Allahumma innaka 'afuwwun tuhibbul 'afwa fa'fu 'anni.\n(Ya Allah, Engkau Maha Pemaaf dan mencintai kemaafan).", 
      shalawat: "Shalawat Jibril (100x)\nصَلَّى اللهُ عَلَى مُحَمَّد\n(Shallallahu 'ala Muhammad)", 
      action: "Baca doa ampunan ini sebanyak-banyaknya mulai malam ini." 
    },
    { 
      title: "Memburu Lailatul Qadar", 
      desc: "Malam yang lebih baik dari seribu bulan. Hidupkan malam ganjil ini dengan shalat, dzikir, dan tobat.", 
      quran: "Juz 21 (Al-'Ankabut 46 - Al-Ahzab 30)", 
      doa: "Ya Allah, sampaikan usia hamba untuk menjumpai kemuliaan Lailatul Qadar tahun ini.", 
      shalawat: "Shalawat Munjiyat (7x)\nاللَّهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ صَلَاةً تُنْجِيْنَا بِهَا مِنْ جَمِيْعِ الْأَهْوَالِ\n(Allahumma shalli 'ala sayyidina Muhammadin shalatan tunjina biha min jami'il ahwali)", 
      action: "Tetap terjaga sejenak setelah shalat Isya/Tarawih untuk berdzikir khusus." 
    },
    { 
      title: "Kelembutan Hati", 
      desc: "Puasa seharusnya melembutkan hati yang keras. Jadilah pemaaf dan jangan mudah tersinggung.", 
      quran: "Juz 22 (Al-Ahzab 31 - Yasin 27)", 
      doa: "Ya Allah, cabutlah kesombongan dari hatiku dan gantikan dengan sifat kasih sayang.", 
      shalawat: "Shalawat Ibrahimiyyah (10x)\nاللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ\n(Allahumma shalli 'ala Muhammad wa 'ala ali Muhammad)", 
      action: "Maafkan satu kesalahan orang lain hari ini secara diam-diam sebelum Anda tidur." 
    },
    { 
      title: "Membersihkan Hati dari Iri", 
      desc: "Penyakit hati seperti iri dengki dapat menghapus kebaikan. Bersyukurlah atas nikmat Anda.", 
      quran: "Juz 23 (Yasin 28 - Az-Zumar 31)", 
      doa: "Ya Allah, bersihkan hatiku dari sifat dengki, riya, dan cinta dunia yang berlebihan.", 
      shalawat: "Shalawat Nariyah (11x)\nاللَّهُمَّ صَلِّ صَلَاةً كَامِلَةً وَسَلِّمْ سَلَامًا تَامًّا عَلَى سَيِّدِنَا مُحَمَّدٍ\n(Allahumma shalli shalatan kamilatan wa sallim salaman tamman 'ala sayyidina Muhammadin)", 
      action: "Ucapkan 'Masya Allah Tabarakallah' saat melihat kesuksesan/kebahagiaan orang lain." 
    },
    { 
      title: "Mengingat Kematian", 
      desc: "Beribadahlah seolah-olah ini adalah puasa dan shalat Tarawih terakhir dalam hidup kita.", 
      quran: "Juz 24 (Az-Zumar 32 - Fussilat 46)", 
      doa: "Ya Allah, matikanlah hamba dalam keadaan husnul khatimah dan sedang beribadah kepada-Mu.", 
      shalawat: "Shalawat Ummi (100x)\nاللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ النَّبِيِّ الْأُمِّيِّ وَعَلَى آلِهِ وَسَلِّمْ\n(Allahumma shalli 'ala Muhammadinin nabiyyil ummiyyi wa 'ala alihi wa sallim)", 
      action: "Lakukan satu amal kebaikan hari ini murni niat sebagai bekal pulang ke akhirat." 
    },
    { 
      title: "Memperbanyak Shalawat", 
      desc: "Jadikan Rasulullah sebagai teladan, dan kirimkan shalawat serta salam kepadanya sebagai bentuk cinta.", 
      quran: "Juz 25 (Fussilat 47 - Al-Jasiyah 37)", 
      doa: "Ya Allah, kumpulkan aku kelak di surga bersama Nabi Muhammad SAW.", 
      shalawat: "Shalawat Jibril (300x)\nصَلَّى اللهُ عَلَى مُحَمَّد\n(Shallallahu 'ala Muhammad)", 
      action: "Fokus bershalawat setiap kali tangan Anda sedang kosong/menganggur hari ini." 
    },
    { 
      title: "Menghindari Hal yang Sia-sia", 
      desc: "Waktu di penghujung Ramadhan sangat berharga. Kurangi hiburan yang melalaikan hati dari mengingat Allah.", 
      quran: "Juz 26 (Al-Ahqaf 1 - Az-Zariyat 30)", 
      doa: "Ya Allah, berkahilah waktuku dan jauhkan hamba dari perbuatan yang sia-sia.", 
      shalawat: "Shalawat Nuril Anwar (11x)\nاللَّهُمَّ صَلِّ عَلَى نُوْرِ الْأَنْوَارِ وَسِرِّ الْأَسْرَارِ\n(Allahumma shalli 'ala nuril anwari wa sirril asrari)", 
      action: "Ganti waktu santai/scroll sosmed hari ini dengan mendengarkan murattal Al-Qur'an." 
    },
    { 
      title: "Puncak Istighfar", 
      desc: "Menangislah karena Allah. Jika air mata tidak bisa keluar, buatlah hati Anda merasa sedih atas kelalaian diri.", 
      quran: "Juz 27 (Az-Zariyat 31 - Al-Hadid 29)", 
      doa: "Ya Allah, rahmat-Mu lebih luas dari dosaku. Ampunilah aku, kedua orang tuaku, dan seluruh kaum muslimin.", 
      shalawat: "Shalawat Fatih (11x)\nاللَّهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ الْفَاتِحِ لِمَا أُغْلِقَ\n(Allahumma shalli 'ala sayyidina Muhammadinil fatihi lima ughliqa)", 
      action: "Menyendiri 5 menit malam ini khusus untuk mengingat dosa dan memohon ampunan." 
    },
    { 
      title: "Menunaikan Zakat Fitrah", 
      desc: "Zakat fitrah berfungsi menyucikan jiwa dari perkataan kotor, serta sebagai makanan kaum miskin.", 
      quran: "Juz 28 (Al-Mujadilah 1 - At-Tahrim 12)", 
      doa: "Allahumma'jalha maghnaman wa laa taj'alha maghraman.\n(Ya Allah jadikan zakat ini sebagai tabungan, bukan denda/kerugian).", 
      shalawat: "Shalawat Thibbil Qulub (10x)\nاللَّهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ طِبِّ الْقُلُوْبِ وَدَوَائِهَا\n(Allahumma shalli 'ala sayyidina Muhammadin thibbil qulubi wa dawa-iha)", 
      action: "Pastikan Anda dan keluarga telah menyalurkan Zakat Fitrah kepada yang berhak." 
    },
    { 
      title: "Menjaga Istiqamah", 
      desc: "Keberhasilan Ramadhan dilihat dari perubahan sikap kita setelahnya. Niatkan mempertahankan minimal satu kebiasaan baik.", 
      quran: "Juz 29 (Al-Mulk 1 - Al-Mursalat 50)", 
      doa: "Ya muqallibal quluub, tsabbit qalbi 'alaa diinik.\n(Wahai Zat pembolak-balik hati, teguhkan hatiku di atas agama-Mu).", 
      shalawat: "Shalawat Ibrahimiyyah (10x)\nاللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ\n(Allahumma shalli 'ala Muhammad wa 'ala ali Muhammad)", 
      action: "Tulis di kertas satu kebiasaan baik Ramadhan yang berjanji akan terus Anda lakukan." 
    },
    { 
      title: "Menyambut Kemenangan", 
      desc: "Ucapkan selamat tinggal pada Ramadhan dengan hati bersih, saling memaafkan, dan bertakbir mengagungkan Allah.", 
      quran: "Juz 30 (An-Naba 1 - An-Nas 6)", 
      doa: "Taqabbalallahu minna wa minkum, shiyamana wa shiyamakum.\n(Semoga Allah menerima amal ibadah kami dan kalian).", 
      shalawat: "Shalawat Jibril (100x)\nصَلَّى اللهُ عَلَى مُحَمَّد\n(Shallallahu 'ala Muhammad)", 
      action: "Lantunkan takbir kemenangan dengan penuh haru dan syukuri selesainya ibadah 30 hari." 
    }
  ];