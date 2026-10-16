'use client';

import React from 'react';
import { PortalLayout } from '@/components/layout/PortalLayout';
import { useAuth } from '@/context/AuthContext';
import { IconLogout, USDLogo } from '@/components/icons';

export default function ProfilPage() {
  const { user, logout } = useAuth();

  if (!user) return null;

  return (
    <PortalLayout>
      <div className="space-y-5 max-w-4xl mx-auto">
        {/* Page Title & Breadcrumb */}
        <div className="flex items-center justify-between gap-2 pb-2 border-b border-slate-200">
          <div className="min-w-0">
            <h1 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight truncate">
              Profil & Biodata Mahasiswa
            </h1>
            <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 truncate">
              Data pokok mahasiswa terdaftar pada Pangkalan Data Pendidikan Tinggi & SIA USD
            </p>
          </div>
          <div className="shrink-0 hidden xs:block">
            <USDLogo size={28} />
          </div>
        </div>

        {/* 1. Identity Header Area — Single Cohesive Panel */}
        <div className="bg-white rounded-lg border border-slate-200 p-4 sm:p-5">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start sm:items-center gap-3.5 min-w-0 w-full sm:w-auto">
              {/* Photo Box — Formal 3:4 Academic Format */}
              <div className="w-12 h-16 sm:w-16 sm:h-20 rounded bg-slate-800 text-white flex flex-col items-center justify-center font-bold text-sm sm:text-base shrink-0 border border-slate-300 shadow-2xs">
                <span>TA</span>
                <span className="text-[8px] sm:text-[9px] font-normal opacity-70">FOTO</span>
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <h2 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight break-words">
                    {user.nama}
                  </h2>
                  <span className="inline-block px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-semibold bg-slate-100 text-slate-700 border border-slate-200 shrink-0">
                    {user.statusRegistrasi || 'Sudah Registrasi'}
                  </span>
                </div>
                <p className="text-xs text-slate-600 mt-0.5 break-words">
                  NIM: <span className="font-mono font-bold text-slate-900">{user.nim}</span> • Program Studi {user.programStudi}
                </p>
                <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 break-words">
                  {user.fakultas} • {user.perguruanTinggi}
                </p>
              </div>
            </div>

            {/* Logout — Proportional Secondary Action Button */}
            <button
              type="button"
              onClick={logout}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded border border-slate-300 transition-colors self-start sm:self-center shrink-0 min-h-[36px]"
            >
              <IconLogout size={14} className="text-slate-500" />
              <span>Keluar Sesi</span>
            </button>
          </div>

          {/* 2. Editorial Academic Summary (Responsive Grid) */}
          <div className="mt-4 pt-4 border-t border-slate-100 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-left">
            <div className="border-r border-slate-200 pr-2 sm:pr-4">
              <span className="text-[10px] sm:text-[11px] font-medium text-slate-500 uppercase tracking-wider block">
                IPK Kumulatif
              </span>
              <span className="text-lg sm:text-xl font-bold text-slate-900 mt-0.5 block tabular-nums">
                {user.ipkKumulatif.toFixed(2)}
              </span>
              <span className="text-[10px] sm:text-[11px] text-slate-500 block">Skala 4.00</span>
            </div>

            <div className="md:border-r border-slate-200 pr-2 sm:pr-4">
              <span className="text-[10px] sm:text-[11px] font-medium text-slate-500 uppercase tracking-wider block">
                SKS Lulus
              </span>
              <span className="text-lg sm:text-xl font-bold text-slate-900 mt-0.5 block tabular-nums">
                {user.sksLulus}{' '}
                <span className="text-xs font-normal text-slate-500">/ 144</span>
              </span>
              <span className="text-[10px] sm:text-[11px] text-slate-500 block">Syarat sarjana</span>
            </div>

            <div className="border-r border-slate-200 pr-2 sm:pr-4">
              <span className="text-[10px] sm:text-[11px] font-medium text-slate-500 uppercase tracking-wider block">
                Kredit Ditempuh
              </span>
              <span className="text-lg sm:text-xl font-bold text-slate-900 mt-0.5 block tabular-nums">
                {user.sksKumulatif} SKS
              </span>
              <span className="text-[10px] sm:text-[11px] text-slate-500 block">Total diambil</span>
            </div>

            <div>
              <span className="text-[10px] sm:text-[11px] font-medium text-slate-500 uppercase tracking-wider block">
                Semester Berjalan
              </span>
              <span className="text-sm sm:text-base font-bold text-slate-900 mt-1 block">
                Semester {user.semesterStudi} ({user.semesterAktif})
              </span>
              <span className="text-[10px] sm:text-[11px] text-slate-500 block">TA {user.tahunAkademik}</span>
            </div>
          </div>
        </div>

        {/* 3. Data Pokok Mahasiswa — Structured Key-Value Dossier */}
        <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
          {/* Section A: Identitas Diri */}
          <div className="px-4 sm:px-5 py-2.5 bg-slate-50 border-b border-slate-200">
            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
              A. Informasi Pribadi & Identitas Diri
            </h3>
          </div>
          <div className="p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-xs border-b border-slate-100">
            <div>
              <span className="text-slate-500 block mb-0.5">Nomor Induk Mahasiswa (NIM)</span>
              <span className="font-mono font-bold text-slate-900 text-sm">{user.nim}</span>
            </div>
            <div>
              <span className="text-slate-500 block mb-0.5">Nama Lengkap</span>
              <span className="font-bold text-slate-900">{user.nama}</span>
            </div>
            <div>
              <span className="text-slate-500 block mb-0.5">Jenis Kelamin</span>
              <span className="font-medium text-slate-900">{user.jenisKelamin}</span>
            </div>
            <div>
              <span className="text-slate-500 block mb-0.5">Tempat / Tanggal Lahir</span>
              <span className="font-medium text-slate-900">{user.tempatTanggalLahir}</span>
            </div>
            <div>
              <span className="text-slate-500 block mb-0.5">Agama</span>
              <span className="font-medium text-slate-900">{user.agama}</span>
            </div>
            <div>
              <span className="text-slate-500 block mb-0.5">Status Registrasi</span>
              <span className="font-semibold text-slate-900">{user.statusRegistrasi}</span>
            </div>
          </div>

          {/* Section B: Kontak & Alamat */}
          <div className="px-4 sm:px-5 py-2.5 bg-slate-50 border-b border-slate-200">
            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
              B. Kontak & Alamat Domisili
            </h3>
          </div>
          <div className="p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-xs border-b border-slate-100">
            <div className="sm:col-span-2">
              <span className="text-slate-500 block mb-0.5">Alamat Sekarang</span>
              <span className="font-medium text-slate-900 leading-relaxed break-words">{user.alamatSekarang}</span>
            </div>
            <div className="sm:col-span-2">
              <span className="text-slate-500 block mb-0.5">Alamat Asal</span>
              <span className="font-medium text-slate-900 leading-relaxed break-words">{user.alamatAsal}</span>
            </div>
            <div>
              <span className="text-slate-500 block mb-0.5">No. Handphone (bisa SMS/WA)</span>
              <span className="font-mono font-semibold text-slate-900">{user.noHp}</span>
            </div>
            <div>
              <span className="text-slate-500 block mb-0.5">No. Telepon Orang Tua / Wali</span>
              <span className="font-mono font-semibold text-slate-900">{user.telpOrtu}</span>
            </div>
            <div>
              <span className="text-slate-500 block mb-0.5">Jumlah Saudara</span>
              <span className="font-medium text-slate-900">
                {user.jumlahAdik} Adik • {user.jumlahKakak} Kakak
              </span>
            </div>
          </div>

          {/* Section C: Kontak Elektronik & Email */}
          <div className="px-4 sm:px-5 py-2.5 bg-slate-50 border-b border-slate-200">
            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
              C. Akun & Kontak Email
            </h3>
          </div>
          <div className="p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-xs border-b border-slate-100">
            <div>
              <span className="text-slate-500 block mb-0.5">Email Mahasiswa (Student USD)</span>
              <span className="font-mono font-semibold text-slate-900 break-all">{user.emailKampus}</span>
            </div>
            <div>
              <span className="text-slate-500 block mb-0.5">Email Pribadi / Lainnya</span>
              <span className="font-mono font-semibold text-slate-900 break-all">{user.emailLain}</span>
            </div>
            <div>
              <span className="text-slate-500 block mb-0.5">Email Orang Tua / Wali</span>
              <span className="font-mono font-semibold text-slate-900 break-all">{user.emailOrtu}</span>
            </div>
            <div>
              <span className="text-slate-500 block mb-0.5">Username Login SIA</span>
              <span className="font-mono font-bold text-slate-900">{user.nim}</span>
            </div>
          </div>

          {/* Section D: Data Pembimbingan Akademik */}
          <div className="px-4 sm:px-5 py-2.5 bg-slate-50 border-b border-slate-200">
            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
              D. Status Akademik & Pembimbingan
            </h3>
          </div>
          <div className="p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-xs">
            <div>
              <span className="text-slate-500 block mb-0.5">Dosen Pembimbing Akademik (DPA)</span>
              <span className="font-bold text-slate-900 break-words">{user.dosenPA}</span>
            </div>
            <div>
              <span className="text-slate-500 block mb-0.5">Tahun Masuk / Angkatan</span>
              <span className="font-semibold text-slate-900">{user.angkatan}</span>
            </div>
            <div>
              <span className="text-slate-500 block mb-0.5">Status Akademik</span>
              <span className="font-semibold text-slate-900">{user.statusAkademik}</span>
            </div>
            <div>
              <span className="text-slate-500 block mb-0.5">Program Studi / Fakultas</span>
              <span className="font-medium text-slate-900 break-words">
                {user.programStudi} — {user.fakultas}
              </span>
            </div>
          </div>

          {/* Official Administrative Disclaimer per SIA Portal */}
          <div className="px-4 py-3 bg-slate-50/90 border-t border-slate-200 text-center text-[10px] sm:text-[11px] text-slate-500 font-medium">
            — Hubungi Biro Administrasi Akademik (BAA) USD untuk mengajukan perubahan data pokok selain data kontak di atas —
          </div>
        </div>
      </div>
    </PortalLayout>
  );
}
