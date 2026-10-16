'use client';

import React, { useState } from 'react';
import { PortalLayout } from '@/components/layout/PortalLayout';
import { IconSearch, IconAlertCircle } from '@/components/icons';
import { kehadiranData, studentData } from '@/lib/mockData';

export default function KehadiranPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState<'semua' | 'aman' | 'peringatan'>('semua');
  const [classFilter, setClassFilter] = useState<string>('semua');
  const [mobileViewMode, setMobileViewMode] = useState<'cards' | 'table'>('cards');

  const uniqueClasses = Array.from(new Set(kehadiranData.map((k) => k.kelas)));

  const filteredData = kehadiranData.filter((item) => {
    const matchesSearch =
      item.mataKuliah.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.kode.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.kelas.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus =
      filterStatus === 'semua'
        ? true
        : filterStatus === 'aman'
        ? item.persentase >= 75
        : item.persentase < 75;

    const matchesClass = classFilter === 'semua' ? true : item.kelas === classFilter;

    return matchesSearch && matchesStatus && matchesClass;
  });

  const totalClasses = kehadiranData.length;
  const safeCount = kehadiranData.filter((k) => k.persentase >= 75).length;
  const warningCount = kehadiranData.filter((k) => k.persentase < 75).length;
  const perfectCount = kehadiranData.filter((k) => k.persentase === 100).length;

  return (
    <PortalLayout>
      <div className="space-y-5 max-w-5xl mx-auto">
        {/* Page Title & Context */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 pb-2 border-b border-slate-200">
          <div>
            <h1 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
              Presensi & Rekap Kehadiran
            </h1>
            <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
              Rekapitulasi kehadiran perkuliahan Semester {studentData.semesterAktif} {studentData.tahunAkademik} • {studentData.programStudi}
            </p>
          </div>
          <div className="text-[11px] sm:text-xs text-slate-600 font-medium self-start sm:self-auto">
            Batas Minimum UAS: <span className="font-bold text-slate-900">75%</span>
          </div>
        </div>

        {/* 1. Unified Summary Strip (Responsive Stacking) */}
        <div className="bg-white rounded-lg border border-slate-200 p-3.5 sm:p-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 gap-3 sm:gap-0">
            <div className="sm:px-4 first:sm:pl-0">
              <span className="text-[10px] sm:text-[11px] font-medium text-slate-500 uppercase tracking-wider block">
                Total Kelas Kuliah
              </span>
              <div className="flex items-baseline gap-2 mt-0.5">
                <span className="text-xl sm:text-2xl font-bold text-slate-900 tabular-nums">
                  {totalClasses}
                </span>
                <span className="text-xs text-slate-500">Mata kuliah aktif</span>
              </div>
            </div>

            <div className="sm:px-4 pt-2.5 sm:pt-0">
              <span className="text-[10px] sm:text-[11px] font-medium text-slate-500 uppercase tracking-wider block">
                Memenuhi Batas (≥ 75%)
              </span>
              <div className="flex items-baseline gap-2 mt-0.5">
                <span className="text-xl sm:text-2xl font-bold text-slate-900 tabular-nums">
                  {safeCount}
                </span>
                <span className="text-xs text-slate-500">
                  Kelas aman ({perfectCount} kelas 100%)
                </span>
              </div>
            </div>

            <div className="sm:px-4 pt-2.5 sm:pt-0">
              <span className="text-[10px] sm:text-[11px] font-medium text-slate-500 uppercase tracking-wider block">
                Perlu Perhatian (&lt; 75%)
              </span>
              <div className="flex items-baseline gap-2 mt-0.5">
                <span className="text-xl sm:text-2xl font-bold text-amber-800 tabular-nums">
                  {warningCount}
                </span>
                <span className="text-xs text-amber-800">
                  Kelas belum memenuhi batas
                </span>
              </div>
            </div>
          </div>

          {/* Academic Policy Note */}
          <div className="mt-3.5 pt-3 border-t border-slate-100 flex items-start sm:items-center gap-2 text-[11px] sm:text-xs text-slate-600">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0 mt-1 sm:mt-0" />
            <p>
              Sesuai Buku Pedoman Akademik USD, mahasiswa yang persentase kehadirannya di bawah 75% tidak diperkenankan mengikuti Ujian Akhir Semester.
            </p>
          </div>
        </div>

        {/* 2. Integrated Responsive Toolbar */}
        <div className="bg-white rounded-lg border border-slate-200 p-3">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-2.5">
            {/* Search Input — Full width on mobile */}
            <div className="relative flex-1 min-w-0">
              <IconSearch size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Cari kode atau nama mata kuliah..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 text-xs rounded border border-slate-300 focus:outline-hidden focus:border-slate-500 text-slate-900 min-h-[36px]"
              />
            </div>

            {/* Filter Controls Group — Responsive Wrapping */}
            <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap">
              {/* Status Segmented Buttons */}
              <div className="flex items-center rounded border border-slate-300 bg-slate-50 p-0.5 text-xs flex-1 sm:flex-initial justify-between sm:justify-start">
                <button
                  type="button"
                  onClick={() => setFilterStatus('semua')}
                  className={`px-2.5 py-1 rounded transition-colors text-[11px] sm:text-xs flex-1 sm:flex-initial text-center ${
                    filterStatus === 'semua'
                      ? 'bg-white font-bold text-slate-900 shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Semua ({totalClasses})
                </button>
                <button
                  type="button"
                  onClick={() => setFilterStatus('aman')}
                  className={`px-2.5 py-1 rounded transition-colors text-[11px] sm:text-xs flex-1 sm:flex-initial text-center ${
                    filterStatus === 'aman'
                      ? 'bg-white font-bold text-slate-900 shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Aman ({safeCount})
                </button>
                <button
                  type="button"
                  onClick={() => setFilterStatus('peringatan')}
                  className={`px-2.5 py-1 rounded transition-colors text-[11px] sm:text-xs flex-1 sm:flex-initial text-center ${
                    filterStatus === 'peringatan'
                      ? 'bg-white font-bold text-amber-900 shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Perhatian ({warningCount})
                </button>
              </div>

              {/* Class Dropdown */}
              <select
                value={classFilter}
                onChange={(e) => setClassFilter(e.target.value)}
                className="px-2.5 py-1.5 rounded border border-slate-300 text-xs text-slate-700 bg-white focus:outline-hidden min-h-[36px]"
                aria-label="Pilih filter kelas"
              >
                <option value="semua">Semua Kelas</option>
                {uniqueClasses.map((cls) => (
                  <option key={cls} value={cls}>
                    Kelas {cls}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Mobile View Switcher Cue (Only on small screens) */}
        <div className="flex sm:hidden items-center justify-between px-1 text-[11px] text-slate-500">
          <span>Tampilan:</span>
          <div className="flex items-center gap-1 bg-slate-200/70 p-0.5 rounded text-xs">
            <button
              type="button"
              onClick={() => setMobileViewMode('cards')}
              className={`px-2 py-0.5 rounded ${
                mobileViewMode === 'cards' ? 'bg-white font-bold text-slate-900 shadow-2xs' : 'text-slate-600'
              }`}
            >
              Kartu Ringkas
            </button>
            <button
              type="button"
              onClick={() => setMobileViewMode('table')}
              className={`px-2 py-0.5 rounded ${
                mobileViewMode === 'table' ? 'bg-white font-bold text-slate-900 shadow-2xs' : 'text-slate-600'
              }`}
            >
              Tabel Geser
            </button>
          </div>
        </div>

        {/* 3A. Mobile Cards Representation (Default on screens < 640px when in card mode) */}
        <div className={`space-y-2.5 ${mobileViewMode === 'cards' ? 'block sm:hidden' : 'hidden'}`}>
          {filteredData.length === 0 ? (
            <div className="bg-white rounded-lg p-6 text-center text-slate-500 text-xs border border-slate-200">
              Tidak ada data presensi yang sesuai.
            </div>
          ) : (
            filteredData.map((item, idx) => {
              const isSafe = item.persentase >= 75;

              return (
                <div
                  key={`mobile-${item.kode}-${item.kelas}-${idx}`}
                  className="bg-white rounded-lg p-3.5 border border-slate-200 text-xs space-y-2"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="font-mono font-bold text-slate-900">{item.kode}</span>
                        <span className="text-slate-400">•</span>
                        <span className="font-semibold text-slate-700">Kelas {item.kelas}</span>
                      </div>
                      <h3 className="font-bold text-slate-900 text-sm mt-0.5 break-words">
                        {item.mataKuliah}
                      </h3>
                      {item.dosen && (
                        <p className="text-[11px] text-slate-500 mt-0.5 truncate">{item.dosen}</p>
                      )}
                    </div>

                    <div className="text-right shrink-0">
                      <span className="font-mono font-bold text-base text-slate-900 block tabular-nums">
                        {item.persentase.toFixed(2)}%
                      </span>
                      {isSafe ? (
                        <span className="text-[10px] font-semibold text-slate-600">
                          Memenuhi
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold text-amber-900 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">
                          &lt; 75%
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-600">
                    <div>
                      <span>Tatap Muka: </span>
                      <span className="font-semibold text-slate-900 tabular-nums">{item.pertemuanSelesai} sesi</span>
                    </div>
                    <div>
                      <span>Hadir: </span>
                      <span className="font-semibold text-slate-900 tabular-nums">{item.kehadiran} sesi</span>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* 3B. Desktop Table View (Always on desktop, selectable on mobile) */}
        <div className={`bg-white rounded-lg border border-slate-200 overflow-hidden ${mobileViewMode === 'table' ? 'block' : 'hidden sm:block'}`}>
          {/* Mobile Scroll Hint Cue */}
          <div className="sm:hidden px-3 py-1.5 bg-slate-50 border-b border-slate-200 text-[10px] text-slate-500 text-center">
            ← Geser tabel ke samping untuk melihat seluruh kolom →
          </div>

          <div className="overflow-x-auto w-full">
            <table className="w-full text-left text-xs text-slate-700 min-w-[560px] sm:min-w-full">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-semibold uppercase tracking-wider text-[11px]">
                <tr>
                  <th scope="col" className="px-3.5 sm:px-4 py-3">Kode</th>
                  <th scope="col" className="px-3.5 sm:px-4 py-3">Mata Kuliah & Dosen</th>
                  <th scope="col" className="px-2.5 sm:px-3 py-3 text-center">Kelas</th>
                  <th scope="col" className="px-2.5 sm:px-3 py-3 text-center">Tatap Muka</th>
                  <th scope="col" className="px-2.5 sm:px-3 py-3 text-center">Hadir</th>
                  <th scope="col" className="px-3.5 sm:px-4 py-3 text-right">Persentase</th>
                  <th scope="col" className="px-3.5 sm:px-4 py-3 text-center">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredData.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="px-4 py-8 text-center text-slate-500">
                      Tidak ada data presensi yang sesuai dengan kriteria filter.
                    </td>
                  </tr>
                ) : (
                  filteredData.map((item, idx) => {
                    const isSafe = item.persentase >= 75;

                    return (
                      <tr key={`${item.kode}-${item.kelas}-${idx}`} className="hover:bg-slate-50/60 transition-colors">
                        <td className="px-3.5 sm:px-4 py-3 font-mono font-bold text-slate-900">{item.kode}</td>
                        <td className="px-3.5 sm:px-4 py-3">
                          <span className="font-bold text-slate-900 block break-words">{item.mataKuliah}</span>
                          {item.dosen && (
                            <span className="text-[11px] text-slate-500 block mt-0.5 truncate max-w-xs">
                              {item.dosen}
                            </span>
                          )}
                        </td>
                        <td className="px-2.5 sm:px-3 py-3 text-center font-semibold text-slate-700">
                          {item.kelas}
                        </td>
                        <td className="px-2.5 sm:px-3 py-3 text-center font-medium text-slate-600 tabular-nums">
                          {item.pertemuanSelesai}
                        </td>
                        <td className="px-2.5 sm:px-3 py-3 text-center font-bold text-slate-900 tabular-nums">
                          {item.kehadiran}
                        </td>
                        <td className="px-3.5 sm:px-4 py-3 text-right">
                          <span className="font-mono font-bold text-slate-900 text-xs tabular-nums">
                            {item.persentase.toFixed(2)}%
                          </span>
                        </td>
                        <td className="px-3.5 sm:px-4 py-3 text-center">
                          {isSafe ? (
                            <span className="text-[11px] font-medium text-slate-600">
                              Memenuhi
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-900 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                              <IconAlertCircle size={11} className="shrink-0" />
                              &lt; 75%
                            </span>
                          )}
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </PortalLayout>
  );
}
