'use client';

import React, { useState } from 'react';
import { PortalLayout } from '@/components/layout/PortalLayout';
import {
  IconSearch,
  IconPrinter,
  IconAlertCircle,
} from '@/components/icons';
import { krsAktifData, studentData, statusLPKPData } from '@/lib/mockData';

export default function KRSPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileView, setMobileView] = useState<'cards' | 'table'>('cards');

  const filteredKrs = krsAktifData.filter(
    (item) =>
      item.mataKuliah.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.kode.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.dosen.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalSksHitungan = krsAktifData.reduce((acc, curr) => acc + curr.sks, 0);

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  return (
    <PortalLayout>
      <div className="space-y-5 max-w-5xl mx-auto">
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5 pb-2 border-b border-slate-200">
          <div>
            <h1 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
              Kartu Rencana Studi (KRS)
            </h1>
            <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
              Daftar mata kuliah aktif Semester {studentData.semesterAktif} {studentData.tahunAkademik} • {studentData.programStudi}
            </p>
          </div>

          <div className="flex items-center gap-2 no-print self-start sm:self-auto">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-white hover:bg-slate-50 rounded border border-slate-300 transition-colors min-h-[36px]"
            >
              <IconPrinter size={15} className="text-slate-500" />
              <span>Cetak KRS</span>
            </button>
          </div>
        </div>

        {/* Academic SKS Summary Strip */}
        <div className="bg-white rounded-lg border border-slate-200 p-3.5 sm:p-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 gap-3 sm:gap-0">
            <div className="sm:px-4 first:sm:pl-0">
              <span className="text-[10px] sm:text-[11px] font-medium text-slate-500 uppercase tracking-wider block">
                Mata Kuliah Terdaftar
              </span>
              <span className="text-xl sm:text-2xl font-bold text-slate-900 mt-0.5 block tabular-nums">
                {krsAktifData.length} MK
              </span>
              <span className="text-[10px] sm:text-[11px] text-slate-500 block">Paket kurikulum semester 5</span>
            </div>

            <div className="sm:px-4 pt-2.5 sm:pt-0">
              <span className="text-[10px] sm:text-[11px] font-medium text-slate-500 uppercase tracking-wider block">
                Jumlah SKS Terdaftar
              </span>
              <span className="text-xl sm:text-2xl font-bold text-slate-900 mt-0.5 block tabular-nums">
                {totalSksHitungan} SKS
              </span>
              <span className="text-[10px] sm:text-[11px] text-slate-500 block">Akumulasi 7 mata kuliah</span>
            </div>

            <div className="sm:px-4 pt-2.5 sm:pt-0">
              <span className="text-[10px] sm:text-[11px] font-medium text-slate-500 uppercase tracking-wider block">
                Status Bimbingan DPA
              </span>
              <span className="text-xs sm:text-sm font-bold text-amber-800 mt-1 block">
                {statusLPKPData.status} (Batas {statusLPKPData.deadline})
              </span>
              <span className="text-[10px] sm:text-[11px] text-slate-500 block truncate" title={studentData.dosenPA}>
                DPA: {studentData.dosenPA}
              </span>
            </div>
          </div>
        </div>

        {/* PRD SKS Notice (Section 11) */}
        <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-600 text-[11px] sm:text-xs flex items-start gap-2.5">
          <IconAlertCircle size={16} className="text-slate-500 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Catatan Status Sistem:</strong> Akumulasi dari 7 mata kuliah yang terdaftar adalah <strong>20 SKS</strong>. Pada data sistem SIA USD tercatat Total SKS 0 karena semester masih dalam status aktif berjalan dan belum difinalisasi pasca-evaluasi.
          </p>
        </div>

        {/* Search Toolbar & Mobile View Switcher */}
        <div className="bg-white rounded-lg border border-slate-200 p-3 no-print flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
          <div className="relative flex-1 max-w-md">
            <IconSearch size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Cari mata kuliah, kode, atau dosen..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 text-xs rounded border border-slate-300 focus:outline-hidden focus:border-slate-500 text-slate-900 min-h-[36px]"
            />
          </div>

          <div className="flex sm:hidden items-center justify-between pt-1 text-[11px] text-slate-500">
            <span>Tampilan:</span>
            <div className="flex items-center gap-1 bg-slate-100 p-0.5 rounded text-xs">
              <button
                type="button"
                onClick={() => setMobileView('cards')}
                className={`px-2 py-0.5 rounded ${
                  mobileView === 'cards' ? 'bg-white font-bold text-slate-900 shadow-2xs' : 'text-slate-600'
                }`}
              >
                Kartu
              </button>
              <button
                type="button"
                onClick={() => setMobileView('table')}
                className={`px-2 py-0.5 rounded ${
                  mobileView === 'table' ? 'bg-white font-bold text-slate-900 shadow-2xs' : 'text-slate-600'
                }`}
              >
                Tabel
              </button>
            </div>
          </div>
        </div>

        {/* 1. Mobile Cards View (<640px) */}
        <div className={`space-y-2.5 ${mobileView === 'cards' ? 'block sm:hidden' : 'hidden'}`}>
          {filteredKrs.length === 0 ? (
            <div className="bg-white rounded-lg p-6 text-center text-slate-500 text-xs border border-slate-200">
              Tidak ada mata kuliah yang cocok dengan pencarian Anda.
            </div>
          ) : (
            filteredKrs.map((item) => (
              <div
                key={`krs-mob-${item.kode}`}
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
                    <p className="text-[11px] text-slate-500 mt-0.5 truncate">{item.dosen}</p>
                  </div>
                  <span className="font-bold text-slate-900 text-xs tabular-nums shrink-0 px-2 py-0.5 bg-slate-100 rounded">
                    {item.sks} SKS
                  </span>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-600">
                  <span className="truncate max-w-[200px]">{item.jadwal} • {item.ruang}</span>
                  <span className="font-medium text-emerald-800 shrink-0">{item.status}</span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* 2. Desktop Table View */}
        <div className={`bg-white rounded-lg border border-slate-200 overflow-hidden ${mobileView === 'table' ? 'block' : 'hidden sm:block'}`}>
          <div className="overflow-x-auto w-full">
            <table className="w-full text-left text-xs text-slate-700 min-w-[560px] sm:min-w-full">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-semibold uppercase tracking-wider text-[11px]">
                <tr>
                  <th scope="col" className="px-3.5 sm:px-4 py-3 w-10 text-center">No</th>
                  <th scope="col" className="px-3.5 sm:px-4 py-3">Kode</th>
                  <th scope="col" className="px-3.5 sm:px-4 py-3">Mata Kuliah & Dosen</th>
                  <th scope="col" className="px-2.5 sm:px-3 py-3 text-center">SKS</th>
                  <th scope="col" className="px-2.5 sm:px-3 py-3 text-center">Kelas</th>
                  <th scope="col" className="px-3.5 sm:px-4 py-3">Jadwal & Ruang</th>
                  <th scope="col" className="px-3.5 sm:px-4 py-3 text-center">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredKrs.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="px-4 py-8 text-center text-slate-500">
                      Tidak ada mata kuliah yang cocok dengan pencarian Anda.
                    </td>
                  </tr>
                ) : (
                  filteredKrs.map((item, idx) => (
                    <tr key={item.kode} className="hover:bg-slate-50/60 transition-colors">
                      <td className="px-3.5 sm:px-4 py-3 text-slate-400 text-center">{idx + 1}</td>
                      <td className="px-3.5 sm:px-4 py-3 font-mono font-bold text-slate-900">{item.kode}</td>
                      <td className="px-3.5 sm:px-4 py-3">
                        <span className="font-bold text-slate-900 block break-words">{item.mataKuliah}</span>
                        <span className="text-[11px] text-slate-500 block mt-0.5 truncate max-w-xs">{item.dosen}</span>
                      </td>
                      <td className="px-2.5 sm:px-3 py-3 text-center font-bold text-slate-900 tabular-nums">
                        {item.sks}
                      </td>
                      <td className="px-2.5 sm:px-3 py-3 text-center font-semibold text-slate-700">
                        {item.kelas}
                      </td>
                      <td className="px-3.5 sm:px-4 py-3">
                        <div className="font-medium text-slate-900">{item.jadwal}</div>
                        <div className="text-[11px] text-slate-500">{item.ruang}</div>
                      </td>
                      <td className="px-3.5 sm:px-4 py-3 text-center">
                        <span className="text-[11px] font-medium text-slate-700">
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </PortalLayout>
  );
}
