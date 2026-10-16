'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { USDLogo, IconShield, IconAlertCircle } from '@/components/icons';
import { demoAuthCredentials } from '@/lib/mockData';

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();

  const [nim, setNim] = useState('245314114');
  const [password, setPassword] = useState('demo123');
  const [errorMsg, setErrorMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setIsSubmitting(true);

    try {
      const res = await login(nim, password);
      if (res.success) {
        router.push('/');
      } else {
        setErrorMsg(res.message || 'Login gagal.');
      }
    } catch {
      setErrorMsg('Terjadi kesalahan saat memproses login demo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleQuickFill = () => {
    setNim(demoAuthCredentials.nim);
    setPassword(demoAuthCredentials.passwordHint);
    setErrorMsg('');
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col justify-center py-8 sm:py-12 px-3 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <div className="flex justify-center mb-3">
          <USDLogo size={52} className="sm:w-16 sm:h-16" />
        </div>
        <h1 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900">
          Portal Akademik Mahasiswa
        </h1>
        <p className="mt-0.5 text-xs sm:text-sm text-slate-600 font-medium">
          Universitas Sanata Dharma Yogyakarta
        </p>
      </div>

      <div className="mt-6 sm:mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-6 sm:py-8 px-4 sm:px-10 border border-slate-200 rounded-lg shadow-xs">
          <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="nim" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                Nomor Induk Mahasiswa (NIM)
              </label>
              <div className="mt-1.5">
                <input
                  id="nim"
                  name="nim"
                  type="text"
                  required
                  value={nim}
                  onChange={(e) => setNim(e.target.value)}
                  placeholder="Contoh: 245314114"
                  className="block w-full px-3 py-2.5 rounded border border-slate-300 text-sm text-slate-900 focus:outline-hidden focus:border-[#1B365D] min-h-[42px]"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between flex-wrap gap-1">
                <label htmlFor="password" className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Kata Sandi Portal
                </label>
                <span className="text-[11px] text-slate-500 font-medium">
                  Sandi Demo: <span className="font-mono text-slate-700">demo123</span>
                </span>
              </div>
              <div className="mt-1.5">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Masukkan kata sandi demo"
                  className="block w-full px-3 py-2.5 rounded border border-slate-300 text-sm text-slate-900 focus:outline-hidden focus:border-[#1B365D] min-h-[42px]"
                />
              </div>
            </div>

            {errorMsg && (
              <div className="p-3 rounded bg-red-50 border border-red-200 text-red-700 text-xs flex items-start gap-2">
                <IconAlertCircle size={16} className="shrink-0 mt-0.5" />
                <span>{errorMsg}</span>
              </div>
            )}

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center py-2.5 px-4 rounded text-xs sm:text-sm font-bold text-white bg-[#1B365D] hover:bg-[#12243E] transition-colors disabled:opacity-50 min-h-[44px]"
              >
                {isSubmitting ? 'Memverifikasi...' : 'Masuk Portal Mahasiswa'}
              </button>
            </div>

            <div className="pt-1">
              <button
                type="button"
                onClick={handleQuickFill}
                className="w-full py-2 px-3 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded border border-slate-200 transition-colors min-h-[38px]"
              >
                Gunakan Akun Demo (Tio Alan Kurniawan)
              </button>
            </div>
          </form>

          {/* Prototype Security Disclaimer */}
          <div className="mt-5 pt-4 border-t border-slate-100">
            <div className="flex items-start gap-2 text-[11px] text-slate-500 bg-slate-50 p-3 rounded border border-slate-200">
              <IconShield size={16} className="text-slate-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-slate-700">Pemberitahuan Demo Prototipe:</p>
                <p className="mt-0.5 text-slate-500 leading-relaxed">
                  Aplikasi ini merupakan simulasi frontend statis untuk tugas kuliah UI/UX. Sistem tidak terhubung ke basis data atau server produksi resmi Universitas Sanata Dharma.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
