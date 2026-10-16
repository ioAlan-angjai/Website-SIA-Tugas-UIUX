'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  IconHome,
  IconCalendar,
  IconChecklist,
  IconGraduationCap,
  IconFileText,
  IconReceipt,
  IconUser,
  IconX,
} from '@/components/icons';
import { useAuth } from '@/context/AuthContext';

interface AppSidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export function AppSidebar({ isOpen = false, onClose }: AppSidebarProps) {
  const pathname = usePathname();
  const { user } = useAuth();

  // Close drawer on ESC key
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape' && isOpen && onClose) {
        onClose();
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navigationItems = [
    {
      name: 'Dashboard',
      href: '/',
      activePatterns: ['/', '/dashboard'],
      icon: IconHome,
    },
    {
      name: 'Jadwal Kuliah',
      href: '/jadwal',
      activePatterns: ['/jadwal'],
      icon: IconCalendar,
    },
    {
      name: 'Presensi & Kehadiran',
      href: '/kehadiran',
      activePatterns: ['/kehadiran'],
      icon: IconChecklist,
    },
    {
      name: 'Nilai & KHS',
      href: '/nilai',
      activePatterns: ['/nilai'],
      icon: IconGraduationCap,
    },
    {
      name: 'KRS Semester Aktif',
      href: '/krs',
      activePatterns: ['/krs'],
      icon: IconFileText,
    },
    {
      name: 'Keuangan Mahasiswa',
      href: '/keuangan',
      activePatterns: ['/keuangan'],
      icon: IconReceipt,
    },
    {
      name: 'Profil Mahasiswa',
      href: '/profil',
      activePatterns: ['/profil'],
      icon: IconUser,
    },
  ];

  const isCurrentActive = (patterns: string[]) => {
    if (patterns.includes('/') && pathname === '/') return true;
    return patterns.some((p) => p !== '/' && pathname.startsWith(p));
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-2xs lg:hidden transition-opacity"
          aria-hidden="true"
        />
      )}

      {/* Sidebar Panel */}
      <aside
        id="portal-sidebar"
        aria-label="Navigasi Utama Portal Akademik"
        className={`fixed inset-y-0 left-0 z-50 w-64 max-w-[85vw] bg-white border-r border-slate-200 transform transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static lg:z-auto ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Sidebar Close Header */}
          <div className="flex items-center justify-between p-3.5 lg:hidden border-b border-slate-200">
            <span className="font-bold text-xs uppercase tracking-wider text-slate-800">Navigasi Portal</span>
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-md text-slate-500 hover:bg-slate-100 min-w-[36px] min-h-[36px] flex items-center justify-center"
              aria-label="Tutup navigasi"
            >
              <IconX size={18} />
            </button>
          </div>

          {/* Academic Portal Context */}
          <div className="px-5 py-3.5 border-b border-slate-100 hidden lg:block">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
              Menu Akademik
            </span>
          </div>

          {/* Nav List */}
          <nav className="flex-1 px-3 py-3 space-y-0.5 overflow-y-auto">
            {navigationItems.map((item) => {
              const active = isCurrentActive(item.activePatterns);
              const IconComponent = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => onClose && onClose()}
                  aria-current={active ? 'page' : undefined}
                  className={`flex items-center gap-3 px-3 py-2 rounded-md text-xs font-semibold transition-colors min-h-[40px] ${
                    active
                      ? 'bg-slate-100 text-slate-950 font-bold border-l-2 border-[#1B365D]'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  <IconComponent
                    size={17}
                    className={active ? 'text-[#1B365D] shrink-0' : 'text-slate-400 shrink-0'}
                  />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Bottom Student Academic Snapshot */}
          <div className="p-3.5 m-3 rounded-lg bg-slate-50 border border-slate-200 text-xs shrink-0">
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
              Status Akademik
            </div>
            <div className="space-y-1.5 text-[11px] text-slate-600">
              <div className="flex justify-between">
                <span>Dosen PA:</span>
                <span className="font-medium text-slate-900 truncate max-w-[125px]" title={user?.dosenPA}>
                  {user?.dosenPA}
                </span>
              </div>
              <div className="flex justify-between">
                <span>IPK Kumulatif:</span>
                <span className="font-bold text-slate-900 tabular-nums">{user?.ipkKumulatif.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>SKS Lulus:</span>
                <span className="font-bold text-slate-900 tabular-nums">{user?.sksLulus} SKS</span>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
