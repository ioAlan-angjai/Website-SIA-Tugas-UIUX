'use client';

import React, { useState } from 'react';
import { AppHeader } from './AppHeader';
import { AppSidebar } from './AppSidebar';
import { MobileNav } from './MobileNav';

interface PortalLayoutProps {
  children: React.ReactNode;
}

export function PortalLayout({ children }: PortalLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      {/* Top Header */}
      <AppHeader onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

      {/* Main Body Shell */}
      <div className="flex-1 flex max-w-7xl w-full mx-auto">
        {/* Sidebar */}
        <AppSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        {/* Content Viewport */}
        <main className="flex-1 min-w-0 px-4 sm:px-6 lg:px-8 py-6 pb-24 lg:pb-12">
          {children}
        </main>
      </div>

      {/* Prototype Disclaimer Footer (Desktop) */}
      <footer className="hidden lg:block border-t border-slate-200 bg-white py-4 mt-auto">
        <div className="max-w-7xl mx-auto px-4 text-center text-xs text-slate-500">
          <p>
            Sistem Informasi Akademik (SIA) Universitas Sanata Dharma — Redesain Prototipe UI/UX Tugas Mahasiswa.
          </p>
          <p className="mt-0.5 text-[11px] text-slate-400">
            Data akademik berbasis screenshot resmi SIA USD. Mode demonstrasi frontend statis.
          </p>
        </div>
      </footer>

      {/* Mobile Bottom Navigation */}
      <MobileNav />
    </div>
  );
}
