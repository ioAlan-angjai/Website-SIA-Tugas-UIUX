'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IconHome, IconCalendar, IconReceipt, IconUser } from '@/components/icons';

export function MobileNav() {
  const pathname = usePathname();

  const navTabs = [
    {
      name: 'Home',
      href: '/',
      activePatterns: ['/', '/dashboard'],
      icon: IconHome,
    },
    {
      name: 'Jadwal',
      href: '/jadwal',
      activePatterns: ['/jadwal'],
      icon: IconCalendar,
    },
    {
      name: 'Tagihan',
      href: '/keuangan',
      activePatterns: ['/keuangan'],
      icon: IconReceipt,
    },
    {
      name: 'Akun',
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
    <nav
      aria-label="Navigasi bawah mobile"
      className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 sm:px-6 py-1.5 shadow-md pb-[max(0.5rem,env(safe-area-inset-bottom))]"
    >
      <div className="flex items-center justify-around max-w-md mx-auto">
        {navTabs.map((tab) => {
          const active = isCurrentActive(tab.activePatterns);
          const IconComponent = tab.icon;

          return (
            <Link
              key={tab.name}
              href={tab.href}
              aria-current={active ? 'page' : undefined}
              className={`flex flex-col items-center justify-center flex-1 py-1 transition-colors min-h-[48px] touch-manipulation ${
                active ? 'text-[#1B365D]' : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              <div className="relative">
                <IconComponent
                  size={20}
                  className={active ? 'text-[#1B365D] stroke-[2.2]' : 'text-slate-500 stroke-[1.8]'}
                />
              </div>
              <span className={`text-[10px] sm:text-[11px] mt-0.5 leading-none ${active ? 'font-bold text-[#1B365D]' : 'font-medium text-slate-600'}`}>
                {tab.name}
              </span>
              {/* Active dot indicator from prototype */}
              {active && (
                <span className="w-1.5 h-1.5 bg-[#1B365D] rounded-full mt-1" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
