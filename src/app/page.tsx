'use client';

import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  const [message, setMessage] = useState<string>('Connecting to backend...');
  const [status, setStatus] = useState<'loading' | 'connected' | 'error'>('loading');

  useEffect(() => {
    fetch('http://localhost:5000/')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch');
        return res.json();
      })
      .then((data) => {
        setMessage(data.message);
        setStatus('connected');
      })
      .catch((err) => {
        console.error(err);
        setMessage('Backend server offline');
        setStatus('error');
      });
  }, []);

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen flex flex-col font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center text-center py-20 px-6 max-w-4xl mx-auto">
        <div className="mb-6">
          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
            status === 'connected' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 
            status === 'error' ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20' : 
            'bg-amber-500/10 text-amber-400 border border-amber-500/20'
          }`}>
            <span className={`w-2 h-2 rounded-full ${
              status === 'connected' ? 'bg-emerald-400 animate-pulse' : 
              status === 'error' ? 'bg-rose-400' : 
              'bg-amber-400 animate-bounce'
            }`} />
            {message}
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
          Plan Your Next Event <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">Effortlessly with Planora</span>
        </h1>

        <p className="text-lg text-slate-400 mb-8 max-w-2xl">
          A modern event management platform providing fast hosting, secure ticket checkouts, and seamless participant moderation.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a href="/events" className="px-8 py-3 bg-sky-500 hover:bg-sky-600 font-semibold rounded-lg shadow-lg hover:shadow-sky-500/10 transition-all">
            Explore Events
          </a>
          <a href="/dashboard/my-events/create" className="px-8 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 font-semibold rounded-lg transition-colors">
            Create Event
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-slate-900/50 border-y border-slate-900 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Core Platform Features</h2>
            <p className="text-slate-400 max-w-xl mx-auto">Everything you need to publish, scale, and review public or private events.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
              <div className="w-12 h-12 bg-sky-500/10 rounded-lg flex items-center justify-center text-sky-400 mb-4 font-bold text-xl">
                ⚡
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Event Hosting</h3>
              <p className="text-slate-400 text-sm">
                Create events with ease. Set venues, select type (Public/Private), and manage details instantly.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
              <div className="w-12 h-12 bg-indigo-500/10 rounded-lg flex items-center justify-center text-indigo-400 mb-4 font-bold text-xl">
                💳
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
              <p className="text-slate-400 text-sm">
                Integrated SSLCommerz and Stripe checkouts. Secure payment notifications, transactions, and refunds.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center text-emerald-400 mb-4 font-bold text-xl">
                👥
              </div>
              <h3 className="text-xl font-semibold mb-2">Participant Flow</h3>
              <p className="text-slate-400 text-sm">
                Take control of your attendance. Review registrations, approve incoming requests, and manage access dynamically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Organize Your Next Event?</h2>
        <p className="text-slate-400 mb-8">Sign up today and get started as a Host or explore events happening around you.</p>
        <a href="/signup" className="inline-block px-8 py-3 bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-600 hover:to-indigo-600 font-bold rounded-lg transition-all shadow-md">
          Get Started For Free
        </a>
      </section>

      <Footer />
    </div>
  );
}
