'use client';

import React from 'react';
import { PortalLayout } from '@/components/layout/PortalLayout';
import {
  IconShield,
  IconPrinter,
} from '@/components/icons';
import {
  keuanganRingkasanData,
  keuanganTransaksiData,
} from '@/lib/mockData';

export default function KeuanganPage() {
  const formatRupiah = (val: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(val);
  };

  const officialCategories = [
    'SPP Tetap & Variabel',
    'Jaket Almamater',
    'Inisiasi & Orientasi',
    'PPKM',
    'Perpustakaan',
    'WE Moral',
    'Kmh (Kegiatan Mahasiswa)',
    'Sos Mhs (Sosial Mahasiswa)',
    'KKN (Kuliah Kerja Nyata)',
    'Ujian Tugas Akhir (TA)',
    'Wisuda & Ijazah Legalitas',
    'DPP, SBS, dan DT',
  ];

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
              Kartu Keuangan Mahasiswa (KKM)
            </h1>
            <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
              Rekapitulasi status tagihan dan pembayaran perkuliahan Universitas Sanata Dharma
            </p>
          </div>

          <div className="flex items-center gap-2 no-print self-start sm:self-auto">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-white hover:bg-slate-50 rounded border border-slate-300 transition-colors min-h-[36px]"
            >
              <IconPrinter size={15} className="text-slate-500" />
              <span>Cetak Rekap KKM</span>
            </button>
          </div>
        </div>

        {/* Financial Summary Strip */}
        <div className="bg-white rounded-lg border border-slate-200 p-3.5 sm:p-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 gap-3 sm:gap-0">
            <div className="sm:px-4 first:sm:pl-0">
              <span className="text-[10px] sm:text-[11px] font-medium text-slate-500 uppercase tracking-wider block">
                Total Tagihan Kumulatif
              </span>
              <span className="text-lg sm:text-2xl font-bold text-slate-900 mt-0.5 block tabular-nums">
                {formatRupiah(keuanganRingkasanData.totalTagihan)}
              </span>
              <span className="text-[10px] sm:text-[11px] text-slate-500 block">Akumulasi seluruh semester</span>
            </div>

            <div className="sm:px-4 pt-2.5 sm:pt-0">
              <span className="text-[10px] sm:text-[11px] font-medium text-slate-500 uppercase tracking-wider block">
                Total Pembayaran Terverifikasi
              </span>
              <span className="text-lg sm:text-2xl font-bold text-slate-900 mt-0.5 block tabular-nums">
                {formatRupiah(keuanganRingkasanData.totalBayar)}
              </span>
              <span className="text-[10px] sm:text-[11px] text-slate-500 block">Tercatat lunas di bank & SIA</span>
            </div>

            <div className="sm:px-4 pt-2.5 sm:pt-0">
              <span className="text-[10px] sm:text-[11px] font-medium text-slate-500 uppercase tracking-wider block">
                Sisa Tagihan / Tunggakan
              </span>
              <div className="flex items-baseline gap-2 mt-0.5">
                <span className="text-lg sm:text-2xl font-bold text-slate-900 tabular-nums">
                  {formatRupiah(keuanganRingkasanData.totalBelumBayar)}
                </span>
                <span className="text-xs font-bold text-emerald-800">
                  (LUNAS)
                </span>
              </div>
              <span className="text-[10px] sm:text-[11px] text-slate-500 block">Tidak ada kewajiban tertunggak</span>
            </div>
          </div>

          {/* Secondary KKM Parameters Row */}
          <div className="mt-4 pt-3 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-slate-600">
            <div className="p-2 rounded bg-slate-50">
              <span className="text-slate-500 text-[10px] block">UK Belum Bayar:</span>
              <span className="font-bold text-slate-900">{keuanganRingkasanData.ukBelumBayar}</span>
            </div>
            <div className="p-2 rounded bg-slate-50">
              <span className="text-slate-500 text-[10px] block">Denda:</span>
              <span className="font-bold text-slate-900">{keuanganRingkasanData.dendaBelumBayar}</span>
            </div>
            <div className="p-2 rounded bg-slate-50">
              <span className="text-slate-500 text-[10px] block">Total Dispensasi:</span>
              <span className="font-bold text-slate-900">{formatRupiah(keuanganRingkasanData.totalDispensasi)}</span>
            </div>
            <div className="p-2 rounded bg-slate-50">
              <span className="text-slate-500 text-[10px] block">Total Deposit:</span>
              <span className="font-bold text-slate-900">{formatRupiah(keuanganRingkasanData.totalDeposit)}</span>
            </div>
          </div>
        </div>

        {/* Transactions Table / Mobile Cards */}
        <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
          <div className="px-4 sm:px-5 py-3 bg-slate-50 border-b border-slate-200">
            <h2 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
              Rincian Transaksi Pembayaran Terdata
            </h2>
            <p className="text-[11px] text-slate-500 mt-0.5">
              Pos pembayaran mahasiswa yang tercatat pada tangkapan layar SIA USD
            </p>
          </div>

          {/* Mobile view for transactions (<640px) */}
          <div className="block sm:hidden divide-y divide-slate-100">
            {keuanganTransaksiData.map((trx) => (
              <div key={`mob-trx-${trx.id}`} className="p-3 text-xs space-y-1">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="font-bold text-slate-900 block">{trx.jenisBiaya}</span>
                    <span className="text-[11px] text-slate-500 block">{trx.semester}</span>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-slate-900 text-sm block tabular-nums">
                      {formatRupiah(trx.nominal)}
                    </span>
                    <span className="text-[10px] font-medium text-emerald-800">{trx.status}</span>
                  </div>
                </div>
                <div className="text-[10px] text-slate-400 font-mono">
                  Tanggal: {trx.tanggal}
                </div>
              </div>
            ))}
          </div>

          {/* Desktop view for transactions (>=640px) */}
          <div className="hidden sm:block overflow-x-auto w-full">
            <table className="w-full text-left text-xs text-slate-700">
              <thead className="bg-white border-b border-slate-200 text-slate-500 font-semibold uppercase tracking-wider text-[11px]">
                <tr>
                  <th scope="col" className="px-4 py-3">Jenis Biaya</th>
                  <th scope="col" className="px-4 py-3">Semester</th>
                  <th scope="col" className="px-4 py-3">Tanggal Bayar</th>
                  <th scope="col" className="px-4 py-3 text-right">Nominal</th>
                  <th scope="col" className="px-4 py-3 text-center">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {keuanganTransaksiData.map((trx) => (
                  <tr key={trx.id} className="hover:bg-slate-50/60 transition-colors">
                    <td className="px-4 py-3 font-semibold text-slate-900">{trx.jenisBiaya}</td>
                    <td className="px-4 py-3 text-slate-600">{trx.semester}</td>
                    <td className="px-4 py-3 font-mono text-slate-600">{trx.tanggal}</td>
                    <td className="px-4 py-3 text-right font-bold text-slate-900 tabular-nums">
                      {formatRupiah(trx.nominal)}
                    </td>
                    <td className="px-4 py-3 text-center font-semibold text-slate-700">
                      {trx.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Institutional Fee Categories */}
        <div className="bg-white rounded-lg p-4 sm:p-5 border border-slate-200">
          <div className="flex items-center gap-2 mb-2">
            <IconShield size={16} className="text-slate-500" />
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800">
              Struktur Pos Keuangan Resmi SIA USD
            </h3>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed mb-3">
            Sesuai sistem informasi keuangan Universitas Sanata Dharma, pos biaya mahasiswa meliputi:
          </p>
          <div className="flex flex-wrap gap-1.5">
            {officialCategories.map((cat) => (
              <span
                key={cat}
                className="px-2.5 py-1 rounded text-[11px] font-medium bg-slate-100 text-slate-700 border border-slate-200"
              >
                {cat}
              </span>
            ))}
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 text-[10px] sm:text-[11px] text-slate-500">
            <strong>Catatan Demonstrasi:</strong> Data keuangan ini bersumber langsung dari tangkapan layar SIA USD asli milik mahasiswa. Antarmuka ini hanya bersifat demonstrasi visual dan tidak menyediakan gerbang pembayaran atau transaksi nyata.
          </div>
        </div>
      </div>
    </PortalLayout>
  );
}
