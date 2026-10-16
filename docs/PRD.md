# PRODUCT REQUIREMENTS DOCUMENT (PRD)
# SIA USD Redesign — Sistem Informasi Akademik Mahasiswa
**Versi:** 1.0  
**Platform:** Web Desktop-First, Responsive  
**Framework:** Next.js App Router, React, TypeScript, Tailwind CSS  
**Status:** Implementasi frontend menggunakan data mahasiswa nyata dari screenshot SIA

---

## 1. PROJECT OVERVIEW

### 1.1 Latar Belakang
Sistem Informasi Akademik (SIA) Universitas Sanata Dharma menyediakan informasi akademik mahasiswa, tetapi tampilan lama memiliki tabel padat, navigasi sederhana, informasi yang kurang terstruktur, dan pengalaman penggunaan yang belum optimal.

Proyek ini bertujuan membangun ulang antarmuka SIA menjadi aplikasi web akademik yang lebih modern, terstruktur, mudah dipahami, dan profesional tanpa mengubah makna maupun nilai data akademik asli.

### 1.2 Tujuan
1. Memperbaiki UI/UX SIA USD berdasarkan prototype Figma yang telah dibuat.
2. Menampilkan data mahasiswa berdasarkan screenshot SIA asli.
3. Menyediakan dashboard akademik, jadwal, kehadiran, riwayat nilai, dan keuangan.
4. Mempermudah mahasiswa menemukan informasi penting.
5. Menyiapkan arsitektur agar nantinya dapat menggunakan database dan autentikasi multi-user.

### 1.3 Sumber Desain
Gunakan prototype Figma berikut sebagai referensi utama desain:

https://www.figma.com/design/iDGw3yy7tAdW1vuCJawHL7/TugasPrototype_245314114_TioAlanKurniawan?node-id=0-1&p=f&t=zTx5cANcnfldzNLs-0

**Aturan desain:** Periksa prototype dan project yang sudah ada terlebih dahulu. Jangan mengganti arah desain secara sepihak. Jika layer Figma tidak dapat dibaca, gunakan screenshot/export dari Figma atau tanyakan kepada pemilik proyek; jangan mengarang detail yang belum terlihat.

---

## 2. TECH STACK DAN BATASAN

Gunakan stack proyek yang sudah terpasang:

- Next.js App Router
- React
- TypeScript
- Tailwind CSS v4
- Local mock data untuk fase frontend
- React state atau Context bila diperlukan untuk autentikasi demo dan interaksi
- Komponen reusable untuk tabel, kartu statistik, navigasi, dan filter

Ketentuan:
- Jangan mengganti framework atau menginisialisasi ulang project.
- Jangan memasang library tambahan jika kebutuhan dapat dipenuhi dengan stack yang ada.
- Jangan menambahkan backend, database, atau API eksternal pada fase ini.
- Jangan menyimpan password SIA asli di source code.
- Jangan menghubungkan aplikasi ke akun SIA asli atau melakukan otomatisasi login ke situs kampus.
- Gunakan data lokal berdasarkan screenshot sebagai sumber data aplikasi.
- Jangan mengklaim login demo sebagai autentikasi produksi yang aman.

---

## 3. IDENTITAS MAHASISWA

Gunakan data berikut secara konsisten di seluruh halaman:

| Field | Nilai |
|---|---|
| Nama | Tio Alan Kurniawan |
| NIM | 245314114 |
| Program studi | Informatika |
| Perguruan tinggi | Universitas Sanata Dharma |
| Tahun akademik aktif | 2026/2027 |
| Semester aktif | Gasal |
| Semester studi | 5 |
| IPK kumulatif | 3.55 |
| Jumlah kredit kumulatif | 86 |
| Jumlah SKS lulus | 86 |

Angka IPK, kredit kumulatif, dan SKS lulus berasal dari halaman Nilai Per Semester pada screenshot. Pertahankan nilai tersebut persis.

Jangan menghitung ulang IPK dari nilai mata kuliah yang terlihat sebagian. IPK resmi yang terlihat pada SIA adalah 3.55.

---

## 4. INFORMATION ARCHITECTURE

Buat halaman dan navigasi berikut:

1. **Login Demo**
2. **Dashboard**
3. **Jadwal Kuliah**
4. **Kehadiran**
5. **Nilai / KHS**
6. **KRS / Mata Kuliah Semester Aktif**
7. **Keuangan Mahasiswa**
8. **Profil Mahasiswa**

Semua halaman harus memiliki navigasi yang konsisten, judul halaman, konteks semester/tahun akademik yang jelas, dan tampilan yang sesuai dengan prototype.

Menu yang belum memiliki data lengkap boleh ditampilkan sebagai halaman ringkasan atau status informatif. Jangan mengarang informasi KRS resmi, pembayaran individual, atau nilai yang belum keluar.

---

## 5. LOGIN DEMO DAN DATA MAHASISWA

Buat login demo sederhana untuk keperluan demonstrasi frontend.

Kriteria:
- Login menggunakan akun demo yang dijelaskan di README.
- Setelah login, aplikasi menampilkan data mahasiswa yang sesuai dengan akun demo.
- Sediakan tombol logout.
- Route halaman akademik harus memeriksa status login demo.
- Data mahasiswa dipisahkan dari komponen UI agar mudah diganti dengan API pada fase berikutnya.
- Jangan menggunakan NIM dan password SIA asli sebagai kredensial login.
- Jangan menyebut mekanisme ini sebagai autentikasi produksi.

Jika belum ada backend, data hanya tersimpan di sisi frontend dan tidak boleh dianggap aman untuk data sensitif.

---

## 6. DASHBOARD

Buat dashboard yang menampilkan ringkasan berikut:

### Kartu statistik
- IPK: **3.55**
- SKS lulus: **86**
- Semester aktif: **5**
- Tahun akademik: **2026/2027 Gasal**

### Ringkasan tambahan
- Jadwal kuliah minggu ini.
- Daftar mata kuliah semester aktif.
- Ringkasan persentase kehadiran.
- Ringkasan keuangan.
- Peringatan bahwa nilai semester 5 belum tersedia karena evaluasi pembelajaran belum diisi.

Gunakan tautan atau tombol yang mengarah ke halaman detail. Jangan membuat kartu statistik yang hanya dekoratif dan tidak berfungsi.

---

## 7. DATA JADWAL KULIAH

Gunakan data berikut dari screenshot jadwal. Jadwal merupakan rekonstruksi berdasarkan posisi blok pada tabel screenshot; jangan menganggap rentang jam yang tidak terverifikasi sebagai jadwal resmi final.

| Hari | Jam perkiraan | Kode | Mata kuliah | Ruang/lokasi terlihat | Kelas |
|---|---|---|---|---|---|
| Senin | 07.00–10.00 | INTS202 | Pemerolehan Informasi / Lab Jaringan Informasi | Lab Jaringan Informasi | B |
| Senin | 10.00–13.00 | SDEV202 | Pemrograman Perangkat Bergerak | Lab Basis Data | B |
| Selasa | 07.00–12.00 | INMA109 | Analisis Proses Bisnis | LKD.A FST | C dan CP |
| Selasa | 13.00–16.00 | SDEV207 | Desain UI/UX | K.205 | A |
| Rabu | 13.00–16.00 | SDEV204 | Algoritma Optimisasi | Lab Jaringan | C |
| Kamis | 13.00–17.00 | INFO118 | Proyek Informatika | Lab Basis Data | DP |
| Jumat | 13.00–16.00 | INFO117 | Kriptografi | K.207 | D |

PENTING:
- Screenshot jadwal menggunakan kolom per jam dan menampilkan blok kuliah bersebelahan.
- Jam di tabel ini hanya perkiraan dari screenshot dan perlu diverifikasi sebelum disebut jadwal final.
- Bila ada ketidakpastian, tampilkan label “Jam berdasarkan screenshot” atau simpan jam sebagai data yang mudah diperbaiki.
- Jangan membuat jadwal untuk hari Sabtu karena tidak ada blok kuliah yang terlihat.

Fitur:
- Tampilan jadwal mingguan.
- Filter hari.
- Daftar jadwal alternatif untuk aksesibilitas.
- Penanda mata kuliah dan kelas.
- Tampilan responsif tanpa tabel terpotong.

---

## 8. DATA KEHADIRAN

Buat file data kehadiran yang memuat sembilan baris berikut:

| Kode | Mata kuliah | Kelas | Pertemuan selesai | Kehadiran | Persentase |
|---|---|---|---:|---:|---:|
| SDEV204 | Algoritma Optimisasi | C | 16 | 16 | 100% |
| INMA109 | Analisis Proses Bisnis | CP | 16 | 15 | 93.75% |
| INMA109 | Analisis Proses Bisnis | C | 16 | 15 | 93.75% |
| SDEV207 | Desain UI/UX | A | 6 | 3 | 50% |
| INFO117 | Kriptografi | D | 7 | 4 | 57.14% |
| INTS202 | Pemerolehan Informasi | B | 5 | 4 | 80% |
| SDEV202 | Pemrograman Perangkat Bergerak | B | 6 | 5 | 83.33% |
| INFO118 | Proyek Informatika | DP | 7 | 7 | 100% |
| INFO118 | Proyek Informatika | D | 7 | 7 | 100% |

Fitur:
- Tabel kehadiran.
- Pencarian berdasarkan nama atau kode mata kuliah.
- Filter berdasarkan kelas.
- Indikator persentase.
- Ringkasan kelas dengan persentase 100% dan kelas di bawah 75%.

Jangan menghapus baris mata kuliah yang memiliki kode sama karena kelasnya berbeda. Pertahankan nilai persentase sebagaimana tercantum pada screenshot.

---

## 9. DATA NILAI PER SEMESTER / KHS

Buat tampilan riwayat nilai per semester dengan ringkasan IPK kumulatif di bagian atas.

### 9.1 Ringkasan nilai kumulatif

| Field | Nilai |
|---|---:|
| IPK | 3.55 |
| Jumlah kredit kumulatif | 86 |
| Jumlah SKS lulus | 86 |

### 9.2 Semester 1

Tahun akademik: **2024/2025 Gasal**  
IPS: **3.54**  
Total SKS: **20**

| Kode | Mata kuliah | SKS | Nilai |
|---|---|---:|---|
| PPKMB 001 | Pendampingan Mahasiswa Baru 1 | 0 | — |
| INFO101 | Algoritma dan Pemrograman | 3 | A |
| MATE102 | Matematika Diskret | 3 | B |
| MATE101 | Logika Matematika | 2 | B |
| INFO103 | Informatika dan Dampak Sosialnya | 2 | B+ |
| BING 101 | Bahasa Inggris | 3 | A |
| BIND 101 | Bahasa Indonesia | 3 | A- |
| INFO102 | Sistem Digital | 2 | B |
| TEOL 101 | Pendidikan Agama | 2 | A |

### 9.3 Semester 2

Tahun akademik: **2024/2025 Genap**  
IPS: **3.50**  
Total SKS: **23**

| Kode | Mata kuliah | SKS | Nilai |
|---|---|---:|---|
| INFO108 | Dasar Komunikasi Komputer dan Jaringan | 2 | B- |
| FILS 105 | Filsafat Moral | 2 | A |
| INFO105 | Pemrograman Berorientasi Objek | 3 | A- |
| INFO106 | Pemrograman Analisis Data | 2 | A- |
| MATE103 | Kalkulus | 3 | A |
| INFO107 | Dasar Komputer dan Sistem Operasi | 3 | B- |
| INFO104 | Struktur Data Linier | 3 | B |
| MATE104 | Statistika dan Probabilitas | 3 | A |
| PPKMB002 | Pendampingan Mahasiswa Baru 2 | 0 | — |
| KEBN 101 | Pendidikan Pancasila | 2 | A- |

### 9.4 Semester 3

Tahun akademik: **2025/2026 Gasal**  
IPS: **3.49**  
Total SKS: **21**

| Kode | Mata kuliah | SKS | Nilai |
|---|---|---:|---|
| RPLN102 | Bahasa Query | 1 | A |
| INFO109 | Struktur Data Non Linier | 3 | A |
| INFO110 | Pemrograman Berorientasi Objek Lanjut | 3 | A |
| MATE105 | Aljabar Linier | 3 | C+ |
| INFO111 | Sistem Cerdas | 3 | A- |
| INFO112 | Internet dan Aplikasinya | 3 | B+ |
| RPLN101 | Konsep dan Desain Basis Data | 3 | B+ |
| KEBN 102 | Pendidikan Kewarganegaraan | 2 | A- |

### 9.5 Semester 4

Tahun akademik: **2025/2026 Genap**  
IPS: **3.69**  
Total SKS: **22**

| Kode | Mata kuliah | SKS | Nilai |
|---|---|---:|---|
| RPLN104 | Rekayasa Perangkat Lunak | 3 | A |
| INFO114 | Komputasi Paralel dan Terdistribusi | 2 | C |
| INFO113 | Analisis dan Strategi Algoritma | 3 | A |
| INFO115 | Pembelajaran Mesin | 3 | A- |
| RPLN103 | Pemrograman Berbasis Platform | 3 | A |
| INFO116 | Manajemen Informasi | 2 | A |
| RPLN105 | Interaksi Manusia dan Komputer | 2 | B |
| KEWR101 | Kewirausahaan | 2 | A |
| PEPA060 | Pengolahan Pangan | 2 | A |

### 9.6 Semester 5 — Semester Aktif

Tahun akademik: **2026/2027 Gasal**  
IPS yang terlihat: **0.00**  
Status: **Nilai belum ditampilkan**

| Kode | Mata kuliah | SKS | Nilai |
|---|---|---:|---|
| INMA109 | Analisis Proses Bisnis | 3 | Belum tersedia |
| INFO117 | Kriptografi | 3 | Belum tersedia |
| INFO118 | Proyek Informatika | 2 | Belum tersedia |
| INTS202 | Pemerolehan Informasi | 3 | Belum tersedia |
| SDEV202 | Pemrograman Perangkat Bergerak | 3 | Belum tersedia |
| SDEV207 | Desain UI/UX | 3 | Belum tersedia |
| SDEV204 | Algoritma Optimisasi | 3 | Belum tersedia |

Catatan yang terlihat di SIA: **“Nilai belum tampil karena ada Evaluasi Pembelajaran yang belum diisi.”**

Ketentuan implementasi:
- Jangan mengubah nilai semester 5 menjadi nilai huruf.
- Jangan menganggap IPS 0.00 sebagai nilai akademik final; tampilkan konteks bahwa nilai belum tersedia.
- Jangan menjumlahkan ulang nilai atau mengubah IPK kumulatif resmi.
- Sediakan filter semester 1–5.
- Tampilkan IPS dan total SKS per semester.
- Nilai kosong harus memiliki label yang jelas.
- Kolom SWTS, Evaluasi, REPA, dan REPK hanya ditampilkan jika diperlukan oleh desain; jangan mengarang isi kolom tersebut.

---

## 10. DATA KEUANGAN MAHASISWA

Buat halaman Kartu Keuangan Mahasiswa (KKM).

### Ringkasan

| Field | Nilai |
|---|---:|
| Total tagihan | Rp65.255.000 |
| Total bayar | Rp65.255.000 |
| Total belum bayar | Rp0 |
| UK belum bayar | 0 |
| Denda belum bayar | 0 |
| Total dispensasi | Rp0 |
| Total deposit | Rp0 |

### Rincian yang terbaca

| Jenis biaya | Tanggal | Nominal |
|---|---|---:|
| Kmh | 01-08-2025 | Rp225.000 |
| Kmh | 27-01-2026 | Rp225.000 |
| Sos Mhs | 01-08-2025 | Rp35.000 |
| Sos Mhs | 27-01-2026 | Rp40.000 |

Kategori lain yang terlihat pada tabel: Jaket Al, Inisiasi, PPKM, Perpus, WE Moral, KKN, Ujian TA, Wisuda, Ijasah-Leg, DPP, SBS, dan DT.

Jangan membuat rincian pembayaran yang tidak terlihat. Data keuangan hanya digunakan untuk tampilan demonstrasi berdasarkan screenshot. Jangan menyediakan transaksi pembayaran nyata atau mengklaim status keuangan dapat diperbarui dari sistem kampus.

---

## 11. KRS / MATA KULIAH SEMESTER AKTIF

Gunakan daftar mata kuliah semester 5 sebagai ringkasan mata kuliah aktif:

- INMA109 — Analisis Proses Bisnis — 3 SKS
- INFO117 — Kriptografi — 3 SKS
- INFO118 — Proyek Informatika — 2 SKS
- INTS202 — Pemerolehan Informasi — 3 SKS
- SDEV202 — Pemrograman Perangkat Bergerak — 3 SKS
- SDEV207 — Desain UI/UX — 3 SKS
- SDEV204 — Algoritma Optimisasi — 3 SKS

Catatan penting: jumlah SKS jika menjumlahkan baris yang terlihat adalah 20 SKS, sedangkan tabel screenshot menampilkan “Total SKS 0” untuk semester 5 karena status akademik belum final. Pertahankan fakta ini dan jangan menyebut angka 20 sebagai total SKS resmi yang sudah dikonfirmasi. Jika ditampilkan sebagai hitungan daftar, beri label “Jumlah SKS dari daftar mata kuliah”.

Fitur KRS pada fase frontend:
- Daftar mata kuliah semester aktif.
- Informasi kode, nama, dan SKS.
- Filter dan pencarian.
- Tidak perlu membuat tombol tambah/hapus KRS yang seolah terhubung ke SIA asli.

---

## 12. PROFIL MAHASISWA

Tampilkan:
- Nama mahasiswa.
- NIM.
- Program studi.
- Tahun akademik aktif.
- Semester aktif.
- IPK.
- Jumlah kredit kumulatif.
- Jumlah SKS lulus.

Gunakan placeholder jika foto mahasiswa belum tersedia sebagai aset lokal. Jangan mengunduh atau membuat ulang foto dari screenshot sebagai aset tanpa kebutuhan yang jelas.

---

## 13. DESIGN SYSTEM DAN UX

Gunakan desain resmi, tenang, dan profesional untuk sistem akademik universitas.

Arahan:
- Ikuti prototype Figma sebagai sumber visual utama.
- Gunakan tipografi yang jelas, hierarki informasi kuat, dan jarak antar elemen konsisten.
- Gunakan palet warna yang formal dan tidak menyilaukan.
- Gunakan kartu statistik seperlunya, tabel modern, label status, dan navigasi yang konsisten.
- Hindari tampilan neon, cyberpunk, gradient berlebihan, glassmorphism berlebihan, dan desain generik yang tidak sesuai prototype.
- Jangan menggunakan emoji sebagai ikon navigasi utama.
- Jangan membuat tampilan seperti landing page produk SaaS jika prototype menunjukkan portal akademik.
- Prioritaskan keterbacaan tabel, terutama pada halaman nilai dan kehadiran.
- Pastikan tampilan desktop tidak terpotong dan responsif pada layar kecil.
- Berikan loading, empty state, dan status error yang wajar jika diperlukan.

---

## 14. STRUKTUR FILE YANG DISARANKAN

Pertahankan struktur yang sudah ada jika proyek telah memiliki pola yang baik. Jika belum, gunakan struktur seperti berikut:

```text
src/
  app/
    page.tsx
    login/
      page.tsx
    dashboard/
      page.tsx
    jadwal/
      page.tsx
    kehadiran/
      page.tsx
    nilai/
      page.tsx
    krs/
      page.tsx
    keuangan/
      page.tsx
    profil/
      page.tsx
  components/
    layout/
      AppSidebar.tsx
      AppHeader.tsx
      PageContainer.tsx
    dashboard/
      StatCard.tsx
    akademik/
      ScheduleView.tsx
      AttendanceTable.tsx
      SemesterGrades.tsx
      CourseTable.tsx
    keuangan/
      FinanceSummary.tsx
  lib/
    mockData.ts
    utils.ts
  types/
    academic.ts
```

Jangan membuat seluruh aplikasi dalam satu file besar. Pisahkan data, tipe, komponen, dan halaman.

---

## 15. ACCEPTANCE CRITERIA

Implementasi dianggap selesai jika:

1. Project berjalan dengan perintah `npm run dev`.
2. Login demo dan logout berfungsi.
3. Dashboard menampilkan identitas mahasiswa yang benar.
4. IPK kumulatif ditampilkan sebagai 3.55.
5. Kredit kumulatif dan SKS lulus ditampilkan sebagai 86.
6. Riwayat nilai semester 1–4 memuat data pada PRD ini tanpa perubahan.
7. Semester 5 menampilkan status nilai belum tersedia dan keterangan evaluasi belum diisi.
8. Jadwal memuat mata kuliah yang terlihat pada screenshot.
9. Kehadiran memuat sembilan baris dengan kelas dan persentase yang sesuai.
10. Ringkasan keuangan menampilkan total sesuai screenshot.
11. Navigasi antarhalaman berfungsi dan tidak ada tautan utama yang mati.
12. Filter, pencarian, dan pilihan semester yang ditampilkan benar-benar bekerja.
13. Data tidak tercampur dengan data mahasiswa lain.
14. Tidak ada password asli, token, atau rahasia yang disimpan dalam kode.
15. Tidak ada nilai, jadwal, atau transaksi yang dibuat-buat.
16. Tampilan mengikuti prototype Figma dan tidak menimbulkan overflow yang mengganggu.
17. TypeScript tidak menghasilkan error dan tidak ada error runtime utama.
18. README menjelaskan cara menjalankan aplikasi, akun demo, batasan data mock, dan fitur yang tersedia.

---

## 16. IMPLEMENTATION PLAN

Kerjakan secara bertahap:

**Phase 1 — Audit project**
- Baca package.json, app, layout, globals.css, dan struktur folder.
- Jangan menghapus file atau melakukan inisialisasi ulang.
- Periksa prototype Figma dan implementasi yang sudah ada.

**Phase 2 — Data**
- Buat tipe TypeScript.
- Masukkan seluruh data mahasiswa, nilai semester, kehadiran, jadwal, dan keuangan.
- Periksa ulang angka dan ejaan mata kuliah terhadap PRD.

**Phase 3 — Layout dan navigasi**
- Implementasikan layout utama.
- Tambahkan sidebar/header sesuai prototype.
- Pastikan navigasi antarrute bekerja.

**Phase 4 — Halaman**
- Login demo.
- Dashboard.
- Jadwal.
- Kehadiran.
- Nilai/KHS.
- KRS.
- Keuangan.
- Profil.

**Phase 5 — Quality assurance**
- Jalankan lint/type-check yang tersedia.
- Periksa semua rute dan interaksi.
- Periksa tabel, data, dan tampilan responsif.
- Perbaiki error sebelum menyatakan selesai.

**Phase 6 — Handover**
- Perbarui README.
- Ringkas file yang dibuat atau diubah.
- Laporkan fitur yang selesai dan keterbatasan yang masih ada.
- Jangan mengklaim tes yang belum benar-benar dijalankan.

---

## 17. INSTRUKSI FINAL UNTUK AI AGENT

Implementasikan PRD ini langsung ke project Next.js yang sedang terbuka di workspace. Prioritaskan kesesuaian data screenshot dan prototype Figma, bukan penambahan fitur yang tidak diminta.

Sebelum mengubah kode, periksa struktur project dan desain yang tersedia. Setelah itu, kerjakan implementasi sampai aplikasi dapat dijalankan. Jangan berhenti pada rencana atau pseudocode. Jangan mengarang data yang tidak tersedia. Jika ada informasi visual yang tidak dapat dibaca dari Figma, gunakan aset yang sudah tersedia atau minta klarifikasi, jangan membuat desain baru yang bertentangan dengan prototype.

Pada akhir pekerjaan, laporkan:
- Halaman yang berhasil dibuat.
- File penting yang dibuat atau diubah.
- Cara menjalankan aplikasi.
- Akun demo.
- Hasil pemeriksaan data dan pengujian.
- Data yang masih belum tersedia dari screenshot.

**Target akhir:** prototype SIA USD yang berfungsi sebagai demonstrasi frontend, menggunakan data mahasiswa yang benar dari screenshot, dengan tampilan lebih jelas dan profesional serta struktur yang siap dikembangkan ke backend pada tahap berikutnya.