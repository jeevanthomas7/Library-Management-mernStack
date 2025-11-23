import React from "react";

export default function Footer() {
  return (
    <footer id="contact" className="w-full bg-white/80 border-t border-slate-100 mt-12">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-slate-600">&copy; {new Date().getFullYear()} Book Library. All rights reserved.</div>
        <div className="flex items-center gap-4 text-sm">
          <a href="#" className="text-slate-600 hover:text-indigo-700">Privacy</a>
          <a href="#" className="text-slate-600 hover:text-indigo-700">Terms</a>
          <a href="#" className="text-slate-600 hover:text-indigo-700">Help</a>
        </div>
      </div>
    </footer>
  );
}
