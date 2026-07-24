export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Planora</h3>
          <p className="text-sm">
            Simplify your event planning, ticketing, and management with our advanced, comprehensive platform.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/events" className="hover:text-white transition-colors">Explore Events</a></li>
            <li><a href="/dashboard" className="hover:text-white transition-colors">Host Dashboard</a></li>
            <li><a href="/dashboard/settings" className="hover:text-white transition-colors">Profile Settings</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Contact & Support</h4>
          <p className="text-sm">Email: support@planora.com</p>
          <p className="text-sm mt-1">© {new Date().getFullYear()} Planora. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
