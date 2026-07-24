'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-slate-900 border-b border-slate-800 text-slate-100 py-4 px-6 md:px-12 flex justify-between items-center sticky top-0 z-50">
      <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
        Planora
      </Link>
      <div className="hidden md:flex space-x-8 font-medium">
        <Link href="/events" className="hover:text-sky-400 transition-colors">Events</Link>
        <Link href="/dashboard" className="hover:text-sky-400 transition-colors">Dashboard</Link>
        <Link href="/dashboard/settings" className="hover:text-sky-400 transition-colors">Settings</Link>
      </div>
      <div className="flex space-x-4">
        <Link href="/login" className="px-4 py-2 text-sm font-medium hover:text-sky-400 transition-colors flex items-center">
          Login
        </Link>
        <Link href="/signup" className="px-4 py-2 text-sm font-medium bg-sky-500 hover:bg-sky-600 text-white rounded-lg transition-colors">
          Sign Up
        </Link>
      </div>
    </nav>
  );
}
