'use client';

import React, { useState } from 'react';
import { PortalLayout } from '@/components/layout/PortalLayout';
import { IconPrinter, IconAlertCircle } from '@/components/icons';
import { nilaiPerSemesterData, studentData } from '@/lib/mockData';

export default function NilaiPage() {
  const [selectedSemester, setSelectedSemester] = useState<number | 'semua'>(5);
  const [mobileView, setMobileView] = useState<'cards' | 'table'>('cards');

  const displayedSemesters =
    selectedSemester === 'semua'
      ? nilaiPerSemesterData
      : nilaiPerSemesterData.filter((s) => s.semester === selectedSemester);

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
              Kartu Hasil Studi (KHS) & Riwayat Nilai
            </h1>
            <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
              Transkrip nilai per semester Program Studi {studentData.programStudi} Universitas Sanata Dharma
            </p>
          </div>

          <div className="flex items-center gap-2 no-print self-start sm:self-auto">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-white hover:bg-slate-50 rounded border border-slate-300 transition-colors min-h-[36px]"
            >
              <IconPrinter size={15} className="text-slate-500" />
              <span>Cetak KHS</span>
            </button>
          </div>
        </div>

        {/* Cumulative Stat Strip */}
        <div className="bg-white rounded-lg border border-slate-200 p-3.5 sm:p-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 gap-3 sm:gap-0">
            <div className="sm:px-4 first:sm:pl-0">
              <span className="text-[10px] sm:text-[11px] font-medium text-slate-500 uppercase tracking-wider block">
                IPK Kumulatif Resmi
              </span>
              <span className="text-xl sm:text-2xl font-bold text-slate-900 mt-0.5 block tabular-nums">
                {studentData.ipkKumulatif.toFixed(2)}
              </span>
              <span className="text-[10px] sm:text-[11px] text-slate-500 block">Skala 4.00 (Terverifikasi SIA)</span>
            </div>

            <div className="sm:px-4 pt-2.5 sm:pt-0">
              <span className="text-[10px] sm:text-[11px] font-medium text-slate-500 uppercase tracking-wider block">
                Jumlah Kredit Kumulatif
              </span>
              <span className="text-xl sm:text-2xl font-bold text-slate-900 mt-0.5 block tabular-nums">
                {studentData.sksKumulatif} SKS
              </span>
              <span className="text-[10px] sm:text-[11px] text-slate-500 block">Total beban ditempuh</span>
            </div>

            <div className="sm:px-4 pt-2.5 sm:pt-0">
              <span className="text-[10px] sm:text-[11px] font-medium text-slate-500 uppercase tracking-wider block">
                Jumlah SKS Lulus
              </span>
              <span className="text-xl sm:text-2xl font-bold text-slate-900 mt-0.5 block tabular-nums">
                {studentData.sksLulus} SKS
              </span>
              <span className="text-[10px] sm:text-[11px] text-slate-500 block">Syarat sarjana: 144 SKS</span>
            </div>
          </div>
        </div>

        {/* Semester Selector Tabs & Mobile Toggle */}
        <div className="bg-white rounded-lg border border-slate-200 p-2.5 sm:p-3 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 no-print">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
            <span className="text-xs font-semibold text-slate-500 mr-1 shrink-0">Semester:</span>
            {[1, 2, 3, 4, 5].map((smt) => (
              <button
                key={smt}
                type="button"
                onClick={() => setSelectedSemester(smt)}
                className={`px-2.5 py-1 rounded text-xs font-semibold transition-colors shrink-0 min-h-[32px] ${
                  selectedSemester === smt
                    ? 'bg-slate-900 text-white font-bold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                Smt {smt}
                {smt === 5 && ' (Aktif)'}
              </button>
            ))}
            <button
              type="button"
              onClick={() => setSelectedSemester('semua')}
              className={`px-2.5 py-1 rounded text-xs font-semibold transition-colors shrink-0 min-h-[32px] ${
                selectedSemester === 'semua'
                  ? 'bg-slate-900 text-white font-bold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Semua
            </button>
          </div>

          {/* Mobile view toggle cue */}
          <div className="flex sm:hidden items-center justify-between pt-2 border-t border-slate-100 text-[11px] text-slate-500">
            <span>Tampilan KHS:</span>
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

        {/* Semester Tables / Cards List */}
        <div className="space-y-5">
          {displayedSemesters.map((sem) => (
            <div
              key={sem.semester}
              className="bg-white rounded-lg border border-slate-200 overflow-hidden"
            >
              {/* Header Bar */}
              <div className="px-4 sm:px-5 py-3 bg-slate-50 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5">
                <div className="flex items-center gap-2 flex-wrap">
                  <h2 className="text-sm font-bold text-slate-900">
                    Semester {sem.semester}
                  </h2>
                  <span className="text-[11px] text-slate-500 font-medium">
                    ({sem.tahunAkademik})
                  </span>
                  {sem.semester === 5 && (
                    <span className="text-[10px] sm:text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-200 text-slate-800">
                      Semester Aktif
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-3 text-xs">
                  <div>
                    <span className="text-slate-500">Beban: </span>
                    <span className="font-bold text-slate-900 tabular-nums">
                      {sem.totalSks} SKS
                    </span>
                  </div>
                  <div className="h-3 w-px bg-slate-300" />
                  <div>
                    <span className="text-slate-500">IPS: </span>
                    <span className="font-bold text-slate-900 tabular-nums">
                      {sem.status === 'Belum ditampilkan' ? '0.00' : sem.ips.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Semester 5 Notice */}
              {sem.status === 'Belum ditampilkan' && sem.catatan && (
                <div className="p-3.5 bg-amber-50/80 border-b border-amber-200 text-xs text-amber-950 flex items-start gap-2.5">
                  <IconAlertCircle size={16} className="text-amber-800 shrink-0 mt-0.5" />
                  <p className="leading-relaxed text-[11px] sm:text-xs">
                    <strong>Status Penilaian:</strong> {sem.catatan} Angka IPS 0.00 merupakan status sistem sementara karena evaluasi pembelajaran belum selesai.
                  </p>
                </div>
              )}

              {/* Mobile View: Cards */}
              <div className={`divide-y divide-slate-100 ${mobileView === 'cards' ? 'block sm:hidden' : 'hidden'}`}>
                {sem.mataKuliah.map((mk, idx) => (
                  <div key={`mob-${mk.kode}-${idx}`} className="p-3 text-xs space-y-1">
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <span className="font-mono font-bold text-slate-900 text-[11px] block">{mk.kode}</span>
                        <span className="font-semibold text-slate-900 text-xs block break-words">{mk.mataKuliah}</span>
                      </div>
                      <div className="text-right shrink-0">
                        {mk.nilai === 'Belum tersedia' ? (
                          <span className="text-slate-400 font-normal italic text-[11px]">Belum keluar</span>
                        ) : (
                          <span className="font-mono text-sm font-bold text-slate-900">{mk.nilai}</span>
                        )}
                        <span className="block text-[10px] text-slate-500">{mk.sks} SKS</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Desktop Table View */}
              <div className={`overflow-x-auto ${mobileView === 'table' ? 'block' : 'hidden sm:block'}`}>
                <table className="w-full text-left text-xs text-slate-700 min-w-[500px] sm:min-w-full">
                  <thead className="bg-white border-b border-slate-200 text-slate-500 font-semibold uppercase tracking-wider text-[11px]">
                    <tr>
                      <th scope="col" className="px-3.5 py-2.5 w-10 text-center">No</th>
                      <th scope="col" className="px-3.5 py-2.5">Kode MK</th>
                      <th scope="col" className="px-3.5 py-2.5">Nama Mata Kuliah</th>
                      <th scope="col" className="px-2.5 py-2.5 text-center">SKS</th>
                      <th scope="col" className="px-3.5 py-2.5 text-center">Nilai</th>
                      <th scope="col" className="px-3.5 py-2.5">Keterangan</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {sem.mataKuliah.map((mk, idx) => (
                      <tr key={`${mk.kode}-${idx}`} className="hover:bg-slate-50/60 transition-colors">
                        <td className="px-3.5 py-2.5 text-slate-400 text-center">{idx + 1}</td>
                        <td className="px-3.5 py-2.5 font-mono font-bold text-slate-900">{mk.kode}</td>
                        <td className="px-3.5 py-2.5 font-semibold text-slate-900 break-words">{mk.mataKuliah}</td>
                        <td className="px-2.5 py-2.5 text-center font-semibold text-slate-800 tabular-nums">
                          {mk.sks}
                        </td>
                        <td className="px-3.5 py-2.5 text-center font-bold text-slate-900">
                          {mk.nilai === 'Belum tersedia' ? (
                            <span className="text-slate-400 font-normal italic">Belum keluar</span>
                          ) : (
                            <span className="font-mono text-sm">{mk.nilai}</span>
                          )}
                        </td>
                        <td className="px-3.5 py-2.5 text-slate-500 text-[11px]">
                          {mk.sks === 0
                            ? 'Non-kredit'
                            : mk.nilai === 'Belum tersedia'
                            ? 'Menunggu Evaluasi Pembelajaran'
                            : 'Lulus'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PortalLayout>
  );
}
