'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { USDLogo, IconBell, IconLogout, IconMenu, IconChevronDown, IconAlertCircle } from '@/components/icons';
import { pengumumanData } from '@/lib/mockData';

interface AppHeaderProps {
  onToggleSidebar?: () => void;
}

export function AppHeader({ onToggleSidebar }: AppHeaderProps) {
  const { user, logout } = useAuth();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const notifRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on outside click or ESC key
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (notifRef.current && !notifRef.current.contains(event.target as Node)) {
        setShowNotifications(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setShowProfileMenu(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setShowNotifications(false);
        setShowProfileMenu(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Brand & Campus Identity */}
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <button
              type="button"
              onClick={onToggleSidebar}
              className="lg:hidden p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors shrink-0 min-w-[36px] min-h-[36px] flex items-center justify-center"
              aria-label="Buka menu navigasi portal"
            >
              <IconMenu size={20} />
            </button>

            <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group focus:outline-hidden min-w-0">
              <USDLogo size={32} className="sm:w-9 sm:h-9" />
              <div className="flex flex-col min-w-0">
                <span className="text-xs sm:text-sm font-bold text-slate-900 tracking-tight leading-tight group-hover:text-[#1B365D] transition-colors truncate">
                  Portal Akademik
                </span>
                <span className="hidden xs:block text-[10px] sm:text-[11px] text-slate-500 font-medium leading-none truncate">
                  Universitas Sanata Dharma
                </span>
              </div>
            </Link>

            <div className="hidden md:inline-flex items-center ml-3 px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 text-slate-700 border border-slate-200 shrink-0">
              Gasal 2026/2027
            </div>
          </div>

          {/* Right Actions: Notifications & Student Profile */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            {/* Notification Bell */}
            <div className="relative" ref={notifRef}>
              <button
                type="button"
                onClick={() => {
                  setShowNotifications(!showNotifications);
                  setShowProfileMenu(false);
                }}
                className="relative p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-hidden min-w-[36px] min-h-[36px] flex items-center justify-center"
                aria-label="Pemberitahuan akademik (2 belum dibaca)"
                aria-expanded={showNotifications}
              >
                <IconBell size={18} />
                <span className="absolute top-1.5 right-1.5 w-3.5 h-3.5 bg-amber-700 text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                  2
                </span>
              </button>

              {/* Notification Dropdown Popover — Safe for mobile viewports */}
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-[calc(100vw-2rem)] max-w-sm sm:w-88 bg-white rounded-lg shadow-lg border border-slate-200 py-2 z-50">
                  <div className="px-4 pb-2 border-b border-slate-100 flex items-center justify-between">
                    <span className="font-semibold text-xs text-slate-900 uppercase tracking-wider">
                      Pemberitahuan Akademik
                    </span>
                    <span className="text-[11px] text-slate-500 font-medium">2 Baru</span>
                  </div>
                  <div className="divide-y divide-slate-100 max-h-72 overflow-y-auto">
                    {pengumumanData.map((item) => (
                      <div key={item.id} className="p-3 hover:bg-slate-50 transition-colors">
                        <div className="flex items-start gap-2.5">
                          <IconAlertCircle size={15} className="text-amber-800 shrink-0 mt-0.5" />
                          <div className="min-w-0">
                            <p className="text-xs font-bold text-slate-900">{item.judul}</p>
                            <p className="text-[11px] text-slate-600 mt-0.5 leading-relaxed">{item.konten}</p>
                            <span className="inline-block mt-1 text-[10px] text-slate-400 font-medium">
                              {item.rentangWaktu}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="pt-2 px-4 border-t border-slate-100 text-center">
                    <button
                      type="button"
                      onClick={() => setShowNotifications(false)}
                      className="text-xs text-slate-600 hover:text-slate-900 font-medium py-1"
                    >
                      Tutup
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Profile Menu Trigger */}
            <div className="relative" ref={profileRef}>
              <button
                type="button"
                onClick={() => {
                  setShowProfileMenu(!showProfileMenu);
                  setShowNotifications(false);
                }}
                className="flex items-center gap-2 p-1 rounded-md hover:bg-slate-100 transition-colors focus:outline-hidden min-h-[36px]"
                aria-label="Menu akun mahasiswa"
                aria-expanded={showProfileMenu}
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#1B365D] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  TA
                </div>
                <div className="hidden sm:flex flex-col text-left">
                  <span className="text-xs font-bold text-slate-900 leading-tight truncate max-w-[120px] lg:max-w-[160px]">
                    {user?.nama?.split(' ')[0] || 'Tio'}
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono leading-tight">
                    {user?.nim || '245314114'}
                  </span>
                </div>
                <IconChevronDown size={14} className="hidden sm:block text-slate-400" />
              </button>

              {/* Profile Dropdown */}
              {showProfileMenu && (
                <div className="absolute right-0 mt-2 w-56 max-w-[calc(100vw-2rem)] bg-white rounded-lg shadow-lg border border-slate-200 py-1.5 z-50">
                  <div className="px-4 py-2 border-b border-slate-100">
                    <p className="text-xs font-bold text-slate-900 truncate">{user?.nama}</p>
                    <p className="text-[11px] text-slate-500 font-mono">NIM: {user?.nim}</p>
                    <p className="text-[11px] text-slate-500 truncate">{user?.programStudi}</p>
                  </div>
                  <div className="py-1">
                    <Link
                      href="/profil"
                      onClick={() => setShowProfileMenu(false)}
                      className="block px-4 py-2 text-xs text-slate-700 hover:bg-slate-50"
                    >
                      Biodata & Data Pokok
                    </Link>
                    <Link
                      href="/keuangan"
                      onClick={() => setShowProfileMenu(false)}
                      className="block px-4 py-2 text-xs text-slate-700 hover:bg-slate-50"
                    >
                      Kartu Keuangan Mahasiswa
                    </Link>
                  </div>
                  <div className="pt-1 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={() => {
                        setShowProfileMenu(false);
                        logout();
                      }}
                      className="w-full flex items-center gap-2 px-4 py-2 text-xs text-slate-700 hover:bg-slate-50 hover:text-red-700 text-left"
                    >
                      <IconLogout size={14} />
                      Keluar
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
