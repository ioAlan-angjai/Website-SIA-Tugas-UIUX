'use client';

import React, { useState } from 'react';
import { PortalLayout } from '@/components/layout/PortalLayout';
import {
  IconPrinter,
  IconAlertCircle,
} from '@/components/icons';
import { jadwalKuliahData, studentData } from '@/lib/mockData';

type DayFilter = 'Semua' | 'Senin' | 'Selasa' | 'Rabu' | 'Kamis' | 'Jumat';

export default function JadwalPage() {
  const [selectedDay, setSelectedDay] = useState<DayFilter>('Semua');
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('table');

  const daysList: DayFilter[] = ['Semua', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat'];

  const filteredJadwal = selectedDay === 'Semua'
    ? jadwalKuliahData
    : jadwalKuliahData.filter((item) => item.hari === selectedDay);

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  return (
    <PortalLayout>
      <div className="space-y-6 max-w-5xl mx-auto">
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-2 border-b border-slate-200">
          <div>
            <h1 className="text-xl font-bold text-slate-900 tracking-tight">
              Jadwal Kuliah Mingguan
            </h1>
            <p className="text-xs text-slate-500 mt-0.5">
              Semester {studentData.semesterAktif} {studentData.tahunAkademik} • Program Studi {studentData.programStudi}
            </p>
          </div>

          <div className="flex items-center gap-2 no-print self-start sm:self-auto">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-white hover:bg-slate-50 rounded border border-slate-300 transition-colors"
            >
              <IconPrinter size={15} className="text-slate-500" />
              <span>Cetak Jadwal</span>
            </button>
          </div>
        </div>

        {/* Academic Context Disclaimer */}
        <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-600 text-xs flex items-start gap-2.5">
          <IconAlertCircle size={16} className="text-slate-500 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Catatan Verifikasi:</strong> Rentang jam pada jadwal ini merupakan rekonstruksi berdasarkan posisi blok pada tangkapan layar SIA USD. Pastikan untuk selalu memeriksa pengumuman ruang dan sesi tatap muka dari dosen pengampu.
          </p>
        </div>

        {/* Controls: Day Filters & View Switcher */}
        <div className="bg-white rounded-lg border border-slate-200 p-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 no-print">
          {/* Filter Hari Tabs */}
          <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0">
            {daysList.map((day) => (
              <button
                key={day}
                type="button"
                onClick={() => setSelectedDay(day)}
                className={`px-3 py-1 rounded text-xs font-semibold transition-colors shrink-0 ${
                  selectedDay === day
                    ? 'bg-slate-900 text-white'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {day}
                {day !== 'Semua' && (
                  <span className="ml-1 opacity-70 text-[10px]">
                    ({jadwalKuliahData.filter((j) => j.hari === day).length})
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center rounded border border-slate-300 bg-slate-50 p-0.5 self-start sm:self-auto shrink-0 text-xs font-medium">
            <button
              type="button"
              onClick={() => setViewMode('table')}
              className={`px-2.5 py-1 rounded transition-colors ${
                viewMode === 'table' ? 'bg-white text-slate-900 font-bold shadow-2xs' : 'text-slate-600'
              }`}
            >
              Tabel Rapi
            </button>
            <button
              type="button"
              onClick={() => setViewMode('cards')}
              className={`px-2.5 py-1 rounded transition-colors ${
                viewMode === 'cards' ? 'bg-white text-slate-900 font-bold shadow-2xs' : 'text-slate-600'
              }`}
            >
              Kartu Detail
            </button>
          </div>
        </div>

        {/* View Mode 1: Table View (Default per institutional guidelines) */}
        {viewMode === 'table' ? (
          <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-700">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-semibold uppercase tracking-wider text-[11px]">
                  <tr>
                    <th scope="col" className="px-4 py-3">Hari</th>
                    <th scope="col" className="px-4 py-3">Jam Perkiraan</th>
                    <th scope="col" className="px-4 py-3">Kode</th>
                    <th scope="col" className="px-4 py-3">Mata Kuliah</th>
                    <th scope="col" className="px-3 py-3 text-center">Kelas</th>
                    <th scope="col" className="px-3 py-3 text-center">SKS</th>
                    <th scope="col" className="px-4 py-3">Ruang / Lokasi</th>
                    <th scope="col" className="px-4 py-3">Dosen Pengampu</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredJadwal.length === 0 ? (
                    <tr>
                      <td colSpan={8} className="px-4 py-8 text-center text-slate-500">
                        Tidak ada perkuliahan pada hari {selectedDay}.
                      </td>
                    </tr>
                  ) : (
                    filteredJadwal.map((row) => (
                      <tr key={row.id} className="hover:bg-slate-50/60 transition-colors">
                        <td className="px-4 py-3 font-bold text-slate-900">{row.hari}</td>
                        <td className="px-4 py-3 font-mono text-slate-600">{row.jamPerkiraan}</td>
                        <td className="px-4 py-3 font-mono font-bold text-slate-900">{row.kode}</td>
                        <td className="px-4 py-3 font-bold text-slate-900">{row.mataKuliah}</td>
                        <td className="px-3 py-3 text-center">
                          <span className="font-semibold text-slate-800">
                            {row.kelas}
                          </span>
                        </td>
                        <td className="px-3 py-3 text-center font-bold text-slate-900 tabular-nums">
                          {row.sks}
                        </td>
                        <td className="px-4 py-3 font-medium text-slate-800">{row.ruang}</td>
                        <td className="px-4 py-3 text-slate-600">{row.dosen}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          /* View Mode 2: Detail Cards */
          <div className="space-y-3">
            {filteredJadwal.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg p-4 border border-slate-200"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-slate-900 text-xs">{item.kode}</span>
                      <span className="text-slate-400">•</span>
                      <span className="text-xs font-semibold text-slate-700">Kelas {item.kelas}</span>
                      <span className="text-slate-400">•</span>
                      <span className="text-xs text-slate-600">{item.sks} SKS</span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mt-1">
                      {item.mataKuliah}
                    </h3>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Dosen: {item.dosen}
                    </p>
                  </div>

                  <div className="sm:text-right pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                    <div className="text-xs font-bold text-slate-900">
                      {item.hari}, {item.jamPerkiraan}
                    </div>
                    <div className="text-xs text-slate-600 mt-0.5">
                      Ruang: <span className="font-semibold text-slate-900">{item.ruang}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </PortalLayout>
  );
}
