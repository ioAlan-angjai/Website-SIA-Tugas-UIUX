# SIA USD — Sistem Informasi Akademik Universitas Sanata Dharma
**Redesain UI/UX Prototipe Mahasiswa Informatika**

Aplikasi ini adalah implementasi frontend web interaktif berbasis **Next.js App Router**, **TypeScript**, dan **Tailwind CSS v4** yang merekonstruksi serta memodernisasi Sistem Informasi Akademik (SIA) Universitas Sanata Dharma. Desain mengacu pada prototype Figma dan data resmi mahasiswa dari tangkapan layar SIA USD.

---

## Fitur & Halaman yang Tersedia

1. **Login Demo (`/login`)**
   - Simulasi autentikasi frontend dengan pengisian cepat akun demo.
   - Peringatan keamanan bahwa aplikasi ini adalah prototipe frontend dan tidak terhubung ke server produksi kampus.

2. **Dashboard Akademik (`/` & `/dashboard`)**
   - Kartu metrik utama: **IPK Kumulatif (3.55)**, **SKS Lulus (86 / 144 SKS)**, dan Semester Aktif (Gasal 2026/2027).
   - Card **Jadwal Hari Ini**: Mata kuliah aktif hari ini dengan sesi, ruang, dosen, dan tombol presensi langsung.
   - Card **Status Tagihan Semester**: Status **LUNAS** (Rp65.255.000 terverifikasi).
   - Card **Status LPKP**: Menampilkan **2 Pending** (Batas 15 Sep) menunggu persetujuan Dosen Pembimbing Akademik.
   - Menu **Layanan Mandiri**: Akses cepat ke KRS Online, Transkrip Nilai, Presensi Kuliah, dan Kartu Keuangan.
   - Banner **Pemberitahuan Evaluasi Pembelajaran**: Informasi resmi bahwa nilai Semester 5 belum tampil karena evaluasi dosen belum diisi.
   - Banner **Masa Perubahan KRS (KPRS)**.

3. **Jadwal Kuliah Mingguan (`/jadwal`)**
   - Rekonstruksi jadwal perkuliahan hari Senin hingga Jumat berdasarkan tangkapan layar SIA.
   - Filter hari (Semua, Senin, Selasa, Rabu, Kamis, Jumat).
   - Dua mode tampilan: **Kartu Detail** dan **Tabel Rapi**.
   - Tombol cetak jadwal perkuliahan.

4. **Presensi & Kehadiran Mahasiswa (`/kehadiran`)**
   - Rekap 9 baris mata kuliah/kelas aktif sesuai data tangkapan layar SIA.
   - Indikator persentase kehadiran dengan batas aman minimal 75%.
   - Ringkasan kelas 100% dan kelas yang memerlukan perhatian (&lt; 75%).
   - Pencarian instan dan filter berdasarkan status atau kelas.

5. **Kartu Hasil Studi / Riwayat Nilai (`/nilai`)**
   - Transkrip nilai per semester (Semester 1 s/d 5) dengan pemilih tab semester dan opsi "Semua Semester".
   - Ringkasan kumulatif resmi: IPK 3.55, Kredit 86 SKS, SKS Lulus 86 SKS.
   - Semester 5 menampilkan status otentik: *"Nilai belum tampil karena ada Evaluasi Pembelajaran yang belum diisi"*.
   - Tombol cetak KHS.

6. **KRS Semester Aktif (`/krs`)**
   - Daftar 7 mata kuliah aktif semester 5 (20 SKS terdaftar).
   - Penjelasan status SKS (keterangan bahwa sistem SIA mencatat Total SKS 0 karena semester berjalan belum difinalisasi pasca-evaluasi).
   - Status bimbingan dan konsultasi Dosen Pembimbing Akademik (Dr.Ir. Iwan Binanto, M.Cs.).

7. **Kartu Keuangan Mahasiswa / KKM (`/keuangan`)**
   - Ringkasan keuangan: Total tagihan Rp65.255.000, Total bayar Rp65.255.000, Sisa tagihan Rp0 (Lunas).
   - Rincian transaksi terbaca: Kmh dan Sos Mhs.
   - Informasi struktur pos keuangan resmi SIA USD.

8. **Profil Mahasiswa (`/profil`)**
   - Biodata lengkap mahasiswa: Tio Alan Kurniawan (NIM 245314114), Informatika, Fakultas Sains dan Teknologi.
   - Informasi Dosen Pembimbing Akademik dan email institusi.
   - Tombol logout demo.

---

## Kredensial Akun Demo

Untuk masuk ke dalam prototipe:
- **NIM**: `245314114` (atau username `tio`)
- **Kata Sandi**: `demo123` (atau klik tombol *"Gunakan Akun Demo"* pada form login)

> **Catatan Keamanan:** Autentikasi ini sepenuhnya berjalan di sisi peramban (client-side) untuk tujuan demonstrasi frontend. Jangan gunakan atau masukkan kata sandi asli portal universitas Anda.

---

## Cara Menjalankan Aplikasi Secara Lokal

1. Pastikan Node.js (v18+) dan npm telah terpasang.
2. Jalankan perintah instalasi dependensi (jika belum):
   ```bash
   npm install
   ```
3. Jalankan server pengembangan lokal:
   ```bash
   npm run dev
   ```
4. Buka peramban di [http://localhost:3000](http://localhost:3000).

Untuk menguji build produksi:
```bash
npm run build
npm run start
```
