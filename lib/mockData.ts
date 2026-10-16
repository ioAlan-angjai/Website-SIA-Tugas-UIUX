import {
  StudentProfile,
  JadwalItem,
  KehadiranItem,
  SemesterNilai,
  KeuanganRingkasan,
  KeuanganTransaksi,
  StatusLPKP,
  PengumumanItem,
} from '@/types/academic';

/**
 * Data Mahasiswa Resmi (Berdasarkan PRD & Screenshot SIA Asli)
 */
export const studentData: StudentProfile = {
  nama: 'Tio Alan Kurniawan',
  nim: '245314114',
  programStudi: 'Informatika',
  fakultas: 'Sains dan Teknologi',
  perguruanTinggi: 'Universitas Sanata Dharma',
  tahunAkademik: '2026/2027',
  semesterAktif: 'Gasal',
  semesterStudi: 5,
  ipkKumulatif: 3.55, // Nilai resmi terverifikasi pada screenshot SIA
  sksKumulatif: 86,
  sksLulus: 86,
  dosenPA: 'Dr.Ir. Iwan Binanto, M.Cs.',
  statusAkademik: 'Aktif',
  angkatan: '2024',
  emailKampus: '245314114@student.usd.ac.id',
  emailLain: 'kurniawantio8@gmail.com',
  emailOrtu: 'kusmiatun502@gmail.com',
  jenisKelamin: 'Laki-Laki',
  tempatTanggalLahir: 'Wonogiri, 13 September 2004',
  agama: 'Islam',
  alamatSekarang: 'TIMANG WETAN 002/001 WONOKERTO WONOGIRI JAWA TENGAH',
  alamatAsal: 'TIMANG WETAN 002/001 WONOKERTO WONOGIRI JAWA TENGAH',
  noHp: '08816516325',
  telpOrtu: '087816101337',
  jumlahAdik: 2,
  jumlahKakak: 0,
  statusRegistrasi: 'Sudah Registrasi',
};

/**
 * Data Jadwal Kuliah Semester 5 (Gasal 2026/2027)
 * Catatan: Jam perkiraan berdasarkan rekonstruksi blok screenshot SIA
 */
export const jadwalKuliahData: JadwalItem[] = [
  {
    id: 'jadwal-1',
    hari: 'Senin',
    jamPerkiraan: '07.00 – 10.00 WIB',
    jamMulai: '07:00',
    jamSelesai: '10:00',
    kode: 'INTS202',
    mataKuliah: 'Pemerolehan Informasi',
    ruang: 'Lab Jaringan Informasi',
    kelas: 'B',
    sks: 3,
    dosen: 'Ir. FX. Hendra Prasetya, M.T.',
    sesi: 'Sesi 1',
  },
  {
    id: 'jadwal-2',
    hari: 'Senin',
    jamPerkiraan: '10.00 – 13.00 WIB',
    jamMulai: '10:00',
    jamSelesai: '13:00',
    kode: 'SDEV202',
    mataKuliah: 'Pemrograman Perangkat Bergerak',
    ruang: 'Lab Basis Data',
    kelas: 'B',
    sks: 3,
    dosen: 'Y. Budi Sulistyo, S.T., M.Eng.',
    sesi: 'Sesi 2',
  },
  {
    id: 'jadwal-3',
    hari: 'Selasa',
    jamPerkiraan: '07.00 – 12.00 WIB',
    jamMulai: '07:00',
    jamSelesai: '12:00',
    kode: 'INMA109',
    mataKuliah: 'Analisis Proses Bisnis',
    ruang: 'LKD.A FST',
    kelas: 'C & CP',
    sks: 3,
    dosen: 'Emanuel Darmawan, S.Kom., M.T.',
    sesi: 'Sesi Pagi',
  },
  {
    id: 'jadwal-4',
    hari: 'Selasa',
    jamPerkiraan: '13.00 – 16.00 WIB',
    jamMulai: '13:00',
    jamSelesai: '16:00',
    kode: 'SDEV207',
    mataKuliah: 'Desain UI/UX',
    ruang: 'K.205',
    kelas: 'A',
    sks: 3,
    dosen: 'Stefanus Ardianto, S.Kom., M.Cs.',
    sesi: 'Sesi Siang',
  },
  {
    id: 'jadwal-5',
    hari: 'Rabu',
    jamPerkiraan: '13.00 – 16.00 WIB',
    jamMulai: '13:00',
    jamSelesai: '16:00',
    kode: 'SDEV204',
    mataKuliah: 'Algoritma Optimisasi',
    ruang: 'Lab Jaringan',
    kelas: 'C',
    sks: 3,
    dosen: 'Dr.Ir. Iwan Binanto, M.Cs.',
    sesi: 'Sesi Siang',
  },
  {
    id: 'jadwal-6',
    hari: 'Kamis',
    jamPerkiraan: '13.00 – 17.00 WIB',
    jamMulai: '13:00',
    jamSelesai: '17:00',
    kode: 'INFO118',
    mataKuliah: 'Proyek Informatika',
    ruang: 'Lab Basis Data',
    kelas: 'DP',
    sks: 2,
    dosen: 'Tim Dosen Pembimbing Proyek',
    sesi: 'Sesi Praktikum',
  },
  {
    id: 'jadwal-7',
    hari: 'Jumat',
    jamPerkiraan: '13.00 – 16.00 WIB',
    jamMulai: '13:00',
    jamSelesai: '16:00',
    kode: 'INFO117',
    mataKuliah: 'Kriptografi',
    ruang: 'K.207',
    kelas: 'D',
    sks: 3,
    dosen: 'Robertus Adi Nugroho, S.T., M.Kom.',
    sesi: 'Sesi Siang',
  },
];

/**
 * Data Kehadiran Mahasiswa (9 Baris Sesuai PRD Bagian 8)
 */
export const kehadiranData: KehadiranItem[] = [
  {
    kode: 'SDEV204',
    mataKuliah: 'Algoritma Optimisasi',
    kelas: 'C',
    pertemuanSelesai: 16,
    kehadiran: 16,
    persentase: 100.0,
    dosen: 'Dr.Ir. Iwan Binanto, M.Cs.',
  },
  {
    kode: 'INMA109',
    mataKuliah: 'Analisis Proses Bisnis',
    kelas: 'CP',
    pertemuanSelesai: 16,
    kehadiran: 15,
    persentase: 93.75,
    dosen: 'Emanuel Darmawan, S.Kom., M.T.',
  },
  {
    kode: 'INMA109',
    mataKuliah: 'Analisis Proses Bisnis',
    kelas: 'C',
    pertemuanSelesai: 16,
    kehadiran: 15,
    persentase: 93.75,
    dosen: 'Emanuel Darmawan, S.Kom., M.T.',
  },
  {
    kode: 'SDEV207',
    mataKuliah: 'Desain UI/UX',
    kelas: 'A',
    pertemuanSelesai: 6,
    kehadiran: 3,
    persentase: 50.0,
    dosen: 'Stefanus Ardianto, S.Kom., M.Cs.',
  },
  {
    kode: 'INFO117',
    mataKuliah: 'Kriptografi',
    kelas: 'D',
    pertemuanSelesai: 7,
    kehadiran: 4,
    persentase: 57.14,
    dosen: 'Robertus Adi Nugroho, S.T., M.Kom.',
  },
  {
    kode: 'INTS202',
    mataKuliah: 'Pemerolehan Informasi',
    kelas: 'B',
    pertemuanSelesai: 5,
    kehadiran: 4,
    persentase: 80.0,
    dosen: 'Ir. FX. Hendra Prasetya, M.T.',
  },
  {
    kode: 'SDEV202',
    mataKuliah: 'Pemrograman Perangkat Bergerak',
    kelas: 'B',
    pertemuanSelesai: 6,
    kehadiran: 5,
    persentase: 83.33,
    dosen: 'Y. Budi Sulistyo, S.T., M.Eng.',
  },
  {
    kode: 'INFO118',
    mataKuliah: 'Proyek Informatika',
    kelas: 'DP',
    pertemuanSelesai: 7,
    kehadiran: 7,
    persentase: 100.0,
    dosen: 'Tim Dosen Pembimbing Proyek',
  },
  {
    kode: 'INFO118',
    mataKuliah: 'Proyek Informatika',
    kelas: 'D',
    pertemuanSelesai: 7,
    kehadiran: 7,
    persentase: 100.0,
    dosen: 'Tim Dosen Pembimbing Proyek',
  },
];

/**
 * Data Riwayat Nilai per Semester (KHS) — Semester 1 s/d 5 (PRD Bagian 9)
 */
export const nilaiPerSemesterData: SemesterNilai[] = [
  {
    semester: 1,
    tahunAkademik: '2024/2025 Gasal',
    ips: 3.54,
    totalSks: 20,
    status: 'Final',
    mataKuliah: [
      { kode: 'PPKMB 001', mataKuliah: 'Pendampingan Mahasiswa Baru 1', sks: 0, nilai: '—' },
      { kode: 'INFO101', mataKuliah: 'Algoritma dan Pemrograman', sks: 3, nilai: 'A' },
      { kode: 'MATE102', mataKuliah: 'Matematika Diskret', sks: 3, nilai: 'B' },
      { kode: 'MATE101', mataKuliah: 'Logika Matematika', sks: 2, nilai: 'B' },
      { kode: 'INFO103', mataKuliah: 'Informatika dan Dampak Sosialnya', sks: 2, nilai: 'B+' },
      { kode: 'BING 101', mataKuliah: 'Bahasa Inggris', sks: 3, nilai: 'A' },
      { kode: 'BIND 101', mataKuliah: 'Bahasa Indonesia', sks: 3, nilai: 'A-' },
      { kode: 'INFO102', mataKuliah: 'Sistem Digital', sks: 2, nilai: 'B' },
      { kode: 'TEOL 101', mataKuliah: 'Pendidikan Agama', sks: 2, nilai: 'A' },
    ],
  },
  {
    semester: 2,
    tahunAkademik: '2024/2025 Genap',
    ips: 3.50,
    totalSks: 23,
    status: 'Final',
    mataKuliah: [
      { kode: 'INFO108', mataKuliah: 'Dasar Komunikasi Komputer dan Jaringan', sks: 2, nilai: 'B-' },
      { kode: 'FILS 105', mataKuliah: 'Filsafat Moral', sks: 2, nilai: 'A' },
      { kode: 'INFO105', mataKuliah: 'Pemrograman Berorientasi Objek', sks: 3, nilai: 'A-' },
      { kode: 'INFO106', mataKuliah: 'Pemrograman Analisis Data', sks: 2, nilai: 'A-' },
      { kode: 'MATE103', mataKuliah: 'Kalkulus', sks: 3, nilai: 'A' },
      { kode: 'INFO107', mataKuliah: 'Dasar Komputer dan Sistem Operasi', sks: 3, nilai: 'B-' },
      { kode: 'INFO104', mataKuliah: 'Struktur Data Linier', sks: 3, nilai: 'B' },
      { kode: 'MATE104', mataKuliah: 'Statistika dan Probabilitas', sks: 3, nilai: 'A' },
      { kode: 'PPKMB002', mataKuliah: 'Pendampingan Mahasiswa Baru 2', sks: 0, nilai: '—' },
      { kode: 'KEBN 101', mataKuliah: 'Pendidikan Pancasila', sks: 2, nilai: 'A-' },
    ],
  },
  {
    semester: 3,
    tahunAkademik: '2025/2026 Gasal',
    ips: 3.49,
    totalSks: 21,
    status: 'Final',
    mataKuliah: [
      { kode: 'RPLN102', mataKuliah: 'Bahasa Query', sks: 1, nilai: 'A' },
      { kode: 'INFO109', mataKuliah: 'Struktur Data Non Linier', sks: 3, nilai: 'A' },
      { kode: 'INFO110', mataKuliah: 'Pemrograman Berorientasi Objek Lanjut', sks: 3, nilai: 'A' },
      { kode: 'MATE105', mataKuliah: 'Aljabar Linier', sks: 3, nilai: 'C+' },
      { kode: 'INFO111', mataKuliah: 'Sistem Cerdas', sks: 3, nilai: 'A-' },
      { kode: 'INFO112', mataKuliah: 'Internet dan Aplikasinya', sks: 3, nilai: 'B+' },
      { kode: 'RPLN101', mataKuliah: 'Konsep dan Desain Basis Data', sks: 3, nilai: 'B+' },
      { kode: 'KEBN 102', mataKuliah: 'Pendidikan Kewarganegaraan', sks: 2, nilai: 'A-' },
    ],
  },
  {
    semester: 4,
    tahunAkademik: '2025/2026 Genap',
    ips: 3.69,
    totalSks: 22,
    status: 'Final',
    mataKuliah: [
      { kode: 'RPLN104', mataKuliah: 'Rekayasa Perangkat Lunak', sks: 3, nilai: 'A' },
      { kode: 'INFO114', mataKuliah: 'Komputasi Paralel dan Terdistribusi', sks: 2, nilai: 'C' },
      { kode: 'INFO113', mataKuliah: 'Analisis dan Strategi Algoritma', sks: 3, nilai: 'A' },
      { kode: 'INFO115', mataKuliah: 'Pembelajaran Mesin', sks: 3, nilai: 'A-' },
      { kode: 'RPLN103', mataKuliah: 'Pemrograman Berbasis Platform', sks: 3, nilai: 'A' },
      { kode: 'INFO116', mataKuliah: 'Manajemen Informasi', sks: 2, nilai: 'A' },
      { kode: 'RPLN105', mataKuliah: 'Interaksi Manusia dan Komputer', sks: 2, nilai: 'B' },
      { kode: 'KEWR101', mataKuliah: 'Kewirausahaan', sks: 2, nilai: 'A' },
      { kode: 'PEPA060', mataKuliah: 'Pengolahan Pangan', sks: 2, nilai: 'A' },
    ],
  },
  {
    semester: 5,
    tahunAkademik: '2026/2027 Gasal',
    ips: 0.0,
    totalSks: 0, // Resmi 0 pada screenshot karena evaluasi belum lengkap
    status: 'Belum ditampilkan',
    catatan: 'Nilai belum tampil karena ada Evaluasi Pembelajaran yang belum diisi.',
    mataKuliah: [
      { kode: 'INMA109', mataKuliah: 'Analisis Proses Bisnis', sks: 3, nilai: 'Belum tersedia' },
      { kode: 'INFO117', mataKuliah: 'Kriptografi', sks: 3, nilai: 'Belum tersedia' },
      { kode: 'INFO118', mataKuliah: 'Proyek Informatika', sks: 2, nilai: 'Belum tersedia' },
      { kode: 'INTS202', mataKuliah: 'Pemerolehan Informasi', sks: 3, nilai: 'Belum tersedia' },
      { kode: 'SDEV202', mataKuliah: 'Pemrograman Perangkat Bergerak', sks: 3, nilai: 'Belum tersedia' },
      { kode: 'SDEV207', mataKuliah: 'Desain UI/UX', sks: 3, nilai: 'Belum tersedia' },
      { kode: 'SDEV204', mataKuliah: 'Algoritma Optimisasi', sks: 3, nilai: 'Belum tersedia' },
    ],
  },
];

/**
 * Data KRS Semester 5 Aktif (PRD Bagian 11)
 * Catatan: Total SKS dari daftar adalah 20 SKS
 */
export const krsAktifData = [
  {
    kode: 'INMA109',
    mataKuliah: 'Analisis Proses Bisnis',
    sks: 3,
    kelas: 'C & CP',
    jadwal: 'Selasa, 07.00 – 12.00 WIB',
    ruang: 'LKD.A FST',
    dosen: 'Emanuel Darmawan, S.Kom., M.T.',
    status: 'Disetujui DPA',
  },
  {
    kode: 'INFO117',
    mataKuliah: 'Kriptografi',
    sks: 3,
    kelas: 'D',
    jadwal: 'Jumat, 13.00 – 16.00 WIB',
    ruang: 'K.207',
    dosen: 'Robertus Adi Nugroho, S.T., M.Kom.',
    status: 'Disetujui DPA',
  },
  {
    kode: 'INFO118',
    mataKuliah: 'Proyek Informatika',
    sks: 2,
    kelas: 'DP',
    jadwal: 'Kamis, 13.00 – 17.00 WIB',
    ruang: 'Lab Basis Data',
    dosen: 'Tim Dosen Pembimbing Proyek',
    status: 'Disetujui DPA',
  },
  {
    kode: 'INTS202',
    mataKuliah: 'Pemerolehan Informasi',
    sks: 3,
    kelas: 'B',
    jadwal: 'Senin, 07.00 – 10.00 WIB',
    ruang: 'Lab Jaringan Informasi',
    dosen: 'Ir. FX. Hendra Prasetya, M.T.',
    status: 'Disetujui DPA',
  },
  {
    kode: 'SDEV202',
    mataKuliah: 'Pemrograman Perangkat Bergerak',
    sks: 3,
    kelas: 'B',
    jadwal: 'Senin, 10.00 – 13.00 WIB',
    ruang: 'Lab Basis Data',
    dosen: 'Y. Budi Sulistyo, S.T., M.Eng.',
    status: 'Disetujui DPA',
  },
  {
    kode: 'SDEV207',
    mataKuliah: 'Desain UI/UX',
    sks: 3,
    kelas: 'A',
    jadwal: 'Selasa, 13.00 – 16.00 WIB',
    ruang: 'K.205',
    dosen: 'Stefanus Ardianto, S.Kom., M.Cs.',
    status: 'Disetujui DPA',
  },
  {
    kode: 'SDEV204',
    mataKuliah: 'Algoritma Optimisasi',
    sks: 3,
    kelas: 'C',
    jadwal: 'Rabu, 13.00 – 16.00 WIB',
    ruang: 'Lab Jaringan',
    dosen: 'Dr.Ir. Iwan Binanto, M.Cs.',
    status: 'Disetujui DPA',
  },
];

/**
 * Data Keuangan Mahasiswa (KKM) — PRD Bagian 10
 */
export const keuanganRingkasanData: KeuanganRingkasan = {
  totalTagihan: 65255000,
  totalBayar: 65255000,
  totalBelumBayar: 0,
  ukBelumBayar: 0,
  dendaBelumBayar: 0,
  totalDispensasi: 0,
  totalDeposit: 0,
  statusTagihan: 'LUNAS',
  tanggalUpdateTerakhir: '24 Agu 2026',
  keterangan: 'SPP Tetap & Variabel Semester Gasal telah terbayar penuh.',
};

export const keuanganTransaksiData: KeuanganTransaksi[] = [
  {
    id: 'trx-1',
    jenisBiaya: 'Kmh (Kegiatan Mahasiswa)',
    tanggal: '01-08-2025',
    nominal: 225000,
    status: 'Lunas',
    semester: 'Gasal 2025/2026',
  },
  {
    id: 'trx-2',
    jenisBiaya: 'Sos Mhs (Sosial Mahasiswa)',
    tanggal: '01-08-2025',
    nominal: 35000,
    status: 'Lunas',
    semester: 'Gasal 2025/2026',
  },
  {
    id: 'trx-3',
    jenisBiaya: 'Kmh (Kegiatan Mahasiswa)',
    tanggal: '27-01-2026',
    nominal: 225000,
    status: 'Lunas',
    semester: 'Genap 2025/2026',
  },
  {
    id: 'trx-4',
    jenisBiaya: 'Sos Mhs (Sosial Mahasiswa)',
    tanggal: '27-01-2026',
    nominal: 40000,
    status: 'Lunas',
    semester: 'Genap 2025/2026',
  },
];

/**
 * Status LPKP (Konsultasi Akademik / Kartu Bimbingan)
 */
export const statusLPKPData: StatusLPKP = {
  status: '2 Pending',
  deadline: '15 Sep 2026',
  keterangan: 'Menunggu persetujuan Dosen Pembimbing Akademik.',
  catatanDosenPA: 'Rencana studi telah diperiksa, menunggu pengesahan akhir.',
};

/**
 * Pengumuman Resmi Portal Akademik
 */
export const pengumumanData: PengumumanItem[] = [
  {
    id: 'ann-1',
    judul: 'Masa Perubahan KRS (KPRS)',
    rentangWaktu: '01 Sep – 07 Sep 2026',
    kategori: 'Akademik',
    konten: 'Pengajuan perubahan mata kuliah (tambah/drop) dapat dilakukan melalui portal ini hingga batas waktu yang ditentukan.',
    isImportant: true,
  },
  {
    id: 'ann-2',
    judul: 'Wajib Pengisian Evaluasi Pembelajaran Semester Gasal',
    rentangWaktu: 'Batas akhir: 20 Sep 2026',
    kategori: 'Evaluasi',
    konten: 'Nilai Semester 5 belum dapat ditampilkan sebelum mahasiswa menyelesaikan evaluasi seluruh mata kuliah yang diambil.',
    isImportant: true,
  },
];

/**
 * Kredensial Demo Akun (Prototype Only — Bukan Autentikasi Produksi)
 */
export const demoAuthCredentials = {
  nim: '245314114',
  username: 'tio',
  passwordHint: 'demo123',
};
