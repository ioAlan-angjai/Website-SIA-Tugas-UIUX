export interface StudentProfile {
  nama: string;
  nim: string;
  programStudi: string;
  fakultas: string;
  perguruanTinggi: string;
  tahunAkademik: string;
  semesterAktif: string;
  semesterStudi: number;
  ipkKumulatif: number;
  sksKumulatif: number;
  sksLulus: number;
  dosenPA: string;
  statusAkademik: string;
  angkatan: string;
  emailKampus: string;
  emailLain: string;
  emailOrtu: string;
  jenisKelamin: string;
  tempatTanggalLahir: string;
  agama: string;
  alamatSekarang: string;
  alamatAsal: string;
  noHp: string;
  telpOrtu: string;
  jumlahAdik: number;
  jumlahKakak: number;
  statusRegistrasi: string;
}

export interface JadwalItem {
  id: string;
  hari: 'Senin' | 'Selasa' | 'Rabu' | 'Kamis' | 'Jumat';
  jamPerkiraan: string;
  jamMulai: string;
  jamSelesai: string;
  kode: string;
  mataKuliah: string;
  ruang: string;
  kelas: string;
  sks: number;
  dosen: string;
  sesi?: string;
  isToday?: boolean;
}

export interface KehadiranItem {
  kode: string;
  mataKuliah: string;
  kelas: string;
  pertemuanSelesai: number;
  kehadiran: number;
  persentase: number;
  dosen?: string;
}

export interface MataKuliahNilai {
  kode: string;
  mataKuliah: string;
  sks: number;
  nilai: string;
  keterangan?: string;
}

export interface SemesterNilai {
  semester: number;
  tahunAkademik: string;
  ips: number;
  totalSks: number;
  status: 'Final' | 'Belum ditampilkan';
  catatan?: string;
  mataKuliah: MataKuliahNilai[];
}

export interface KeuanganRingkasan {
  totalTagihan: number;
  totalBayar: number;
  totalBelumBayar: number;
  ukBelumBayar: number;
  dendaBelumBayar: number;
  totalDispensasi: number;
  totalDeposit: number;
  statusTagihan: 'LUNAS' | 'BELUM LUNAS';
  tanggalUpdateTerakhir: string;
  keterangan: string;
}

export interface KeuanganTransaksi {
  id: string;
  jenisBiaya: string;
  tanggal: string;
  nominal: number;
  status: 'Lunas' | 'Pending';
  semester: string;
}

export interface StatusLPKP {
  status: '2 Pending' | 'Disetujui' | 'Ditolak';
  deadline: string;
  keterangan: string;
  catatanDosenPA?: string;
}

export interface PengumumanItem {
  id: string;
  judul: string;
  rentangWaktu: string;
  kategori: string;
  konten: string;
  isImportant?: boolean;
}
