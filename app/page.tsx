'use client';

import React from 'react';
import Link from 'next/link';
import { PortalLayout } from '@/components/layout/PortalLayout';
import { useAuth } from '@/context/AuthContext';
import {
  IconGraduationCap,
  IconChecklist,
  IconCalendar,
  IconReceipt,
  IconClock,
  IconChevronRight,
  IconAlertCircle,
  IconMegaphone,
  IconFileText,
} from '@/components/icons';
import {
  keuanganRingkasanData,
  statusLPKPData,
  kehadiranData,
} from '@/lib/mockData';

export default function DashboardPage() {
  const { user } = useAuth();

  const lowAttendanceCount = kehadiranData.filter((k) => k.persentase < 75).length;
  const perfectAttendanceCount = kehadiranData.filter((k) => k.persentase === 100).length;

  return (
    <PortalLayout>
      <div className="space-y-6 max-w-5xl mx-auto">
        {/* 1. Profile Greeting & Academic Snapshot Area */}
        <div className="bg-white rounded-lg p-5 sm:p-6 border border-slate-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded bg-slate-800 text-white flex items-center justify-center font-bold text-base shrink-0 border border-slate-300">
                TA
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                    Selamat datang, {user?.nama?.split(' ')[0] || 'Tio'}!
                  </h1>
                  <span className="inline-block px-2 py-0.5 rounded text-[11px] font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                    {user?.statusRegistrasi || 'Sudah Registrasi'}
                  </span>
                </div>
                <p className="text-xs text-slate-600 mt-0.5">
                  {user?.nama} • <span className="font-mono font-bold text-slate-800">{user?.nim}</span> • {user?.programStudi} ({user?.semesterAktif} {user?.tahunAkademik})
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  Dosen Pembimbing Akademik: <span className="text-slate-900 font-medium">{user?.dosenPA}</span>
                </p>
              </div>
            </div>

            <Link
              href="/profil"
              className="text-xs font-semibold text-slate-700 hover:text-slate-900 self-start sm:self-center px-3 py-1.5 rounded border border-slate-300 hover:bg-slate-50 transition-colors"
            >
              Lihat Biodata Lengkap &rarr;
            </Link>
          </div>

          {/* Academic Stat Bar (Editorial Layout) */}
          <div className="mt-5 pt-4 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            <div className="border-r border-slate-200 pr-3">
              <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wider block">
                IPK Kumulatif
              </span>
              <span className="text-xl font-bold text-slate-900 mt-0.5 block tabular-nums">
                {user?.ipkKumulatif.toFixed(2)}
              </span>
              <span className="text-[11px] text-slate-500 block">Skala 4.00</span>
            </div>

            <div className="sm:border-r border-slate-200 pr-3">
              <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wider block">
                SKS Lulus
              </span>
              <span className="text-xl font-bold text-slate-900 mt-0.5 block tabular-nums">
                {user?.sksLulus}{' '}
                <span className="text-xs font-normal text-slate-500">/ 144 SKS</span>
              </span>
              <span className="text-[11px] text-slate-500 block">Minimal kelulusan</span>
            </div>

            <div className="border-r border-slate-200 pr-3">
              <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wider block">
                Status Tagihan
              </span>
              <span className="text-base font-bold text-emerald-800 mt-1 block">
                {keuanganRingkasanData.statusTagihan}
              </span>
              <span className="text-[11px] text-slate-500 block">Sisa Rp0</span>
            </div>

            <div>
              <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wider block">
                Status LPKP
              </span>
              <span className="text-base font-bold text-amber-900 mt-1 block">
                {statusLPKPData.status}
              </span>
              <span className="text-[11px] text-slate-500 block">Batas {statusLPKPData.deadline}</span>
            </div>
          </div>
        </div>

        {/* 2. Official Evaluation Warning Alert (PRD Section 9.6) */}
        <div className="bg-amber-50/80 border-l-3 border-amber-600 p-4 rounded text-xs text-amber-950 flex items-start gap-3">
          <IconAlertCircle size={18} className="text-amber-800 shrink-0 mt-0.5" />
          <div className="flex-1">
            <p className="font-bold">Peringatan Evaluasi Dosen Semester 5:</p>
            <p className="mt-0.5 leading-relaxed text-amber-900">
              Nilai Semester 5 belum dapat ditampilkan karena ada <strong>Evaluasi Pembelajaran</strong> yang belum diisi. Kuesioner wajib diselesaikan untuk membuka Kartu Hasil Studi (KHS).
            </p>
          </div>
          <Link
            href="/nilai"
            className="shrink-0 font-bold text-amber-900 hover:underline"
          >
            Buka KHS
          </Link>
        </div>

        {/* 3. Section: Jadwal Hari Ini / Kuliah Terdekat */}
        <div className="bg-white rounded-lg p-5 border border-slate-200">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
            <div className="flex items-center gap-2">
              <IconCalendar size={16} className="text-slate-500" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Jadwal Perkuliahan Hari Ini
              </span>
            </div>
            <span className="px-2 py-0.5 rounded text-xs font-semibold bg-slate-100 text-slate-700">
              Sesi 1
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Algoritma & Pemrograman (Ruang 302)
              </h3>
              <div className="flex items-center gap-2 mt-1 text-xs text-slate-600">
                <IconClock size={14} className="text-slate-400" />
                <span>08:00 – 10:30 WIB • Lab Komputer 2</span>
                <span className="text-slate-400">•</span>
                <span>Dosen: Dr.Ir. Iwan Binanto, M.Cs.</span>
              </div>
            </div>

            <Link
              href="/kehadiran"
              className="text-xs font-bold text-slate-800 hover:text-[#1B365D] inline-flex items-center gap-1 self-start sm:self-auto px-3 py-1.5 rounded border border-slate-200 hover:bg-slate-50 transition-colors"
            >
              <span>Presensi Kelas</span>
              <IconChevronRight size={14} />
            </Link>
          </div>
        </div>

        {/* 4. Layanan Mandiri (Quick Actions — Quiet & Professional) */}
        <div className="bg-white rounded-lg p-5 border border-slate-200">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
              Layanan Mandiri Mahasiswa
            </h2>
            <span className="text-xs text-slate-500">Pintasan Fitur</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <Link
              href="/krs"
              className="p-3 rounded border border-slate-200 hover:bg-slate-50 transition-colors block text-left"
            >
              <div className="text-slate-700 mb-1.5">
                <IconFileText size={20} />
              </div>
              <span className="text-xs font-bold text-slate-900 block">KRS Online</span>
              <span className="text-[11px] text-slate-500 block">7 Mata kuliah</span>
            </Link>

            <Link
              href="/nilai"
              className="p-3 rounded border border-slate-200 hover:bg-slate-50 transition-colors block text-left"
            >
              <div className="text-slate-700 mb-1.5">
                <IconGraduationCap size={20} />
              </div>
              <span className="text-xs font-bold text-slate-900 block">Transkrip / KHS</span>
              <span className="text-[11px] text-slate-500 block">Riwayat Smt 1–5</span>
            </Link>

            <Link
              href="/kehadiran"
              className="p-3 rounded border border-slate-200 hover:bg-slate-50 transition-colors block text-left"
            >
              <div className="text-slate-700 mb-1.5">
                <IconChecklist size={20} />
              </div>
              <span className="text-xs font-bold text-slate-900 block">Presensi Kuliah</span>
              <span className="text-[11px] text-slate-500 block">9 Kelas aktif</span>
            </Link>

            <Link
              href="/keuangan"
              className="p-3 rounded border border-slate-200 hover:bg-slate-50 transition-colors block text-left"
            >
              <div className="text-slate-700 mb-1.5">
                <IconReceipt size={20} />
              </div>
              <span className="text-xs font-bold text-slate-900 block">Kartu Keuangan</span>
              <span className="text-[11px] text-slate-500 block">Status Lunas</span>
            </Link>
          </div>
        </div>

        {/* 5. Summary Presensi & Masa Perubahan KRS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg p-4 border border-slate-200">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Rekap Kehadiran
              </span>
              <Link href="/kehadiran" className="text-xs font-semibold text-slate-600 hover:text-slate-900">
                Detail &rarr;
              </Link>
            </div>
            <div className="flex items-center justify-between text-xs py-1">
              <span className="text-slate-600">Kehadiran 100%:</span>
              <span className="font-bold text-slate-900 tabular-nums">{perfectAttendanceCount} Kelas</span>
            </div>
            <div className="flex items-center justify-between text-xs py-1">
              <span className="text-slate-600">Perlu Perhatian (&lt; 75%):</span>
              <span className="font-bold text-amber-800 tabular-nums">{lowAttendanceCount} Kelas</span>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 border border-slate-200 flex items-center justify-between">
            <div className="flex items-start gap-3">
              <IconMegaphone size={18} className="text-slate-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-xs font-bold text-slate-900">
                  Masa Perubahan KRS (KPRS)
                </h3>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  01 Sep – 07 Sep 2026 melalui portal akademik
                </p>
              </div>
            </div>
            <Link
              href="/krs"
              className="text-xs font-semibold text-slate-700 hover:text-slate-900 px-2.5 py-1 rounded border border-slate-200 hover:bg-slate-50"
            >
              Lihat KRS
            </Link>
          </div>
        </div>
      </div>
    </PortalLayout>
  );
}
