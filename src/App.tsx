/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ShieldPlus, ArrowRight, Activity, Calendar, Lock } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans selection:bg-teal-100 italic-none">
      {/* Navigation */}
      <nav className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#0F6E56] rounded-lg flex items-center justify-center text-white shadow-lg">
            <ShieldPlus className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-[#0F6E56] leading-tight">Imus Chemotherapy Center</h1>
            <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Excellence in Oncology Care</p>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm font-bold text-slate-600 hover:text-[#0F6E56] transition-colors">Our Services</a>
          <a href="#" className="text-sm font-bold text-slate-600 hover:text-[#0F6E56] transition-colors">Specialists</a>
          <a href="#" className="text-sm font-bold text-slate-600 hover:text-[#0F6E56] transition-colors">About</a>
          <a href="#" className="text-sm font-bold text-slate-600 hover:text-[#0F6E56] transition-colors">Contact</a>
          <a 
            href="/patient-portal.html" 
            className="flex items-center gap-2 bg-[#0F6E56] text-white px-6 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-teal-900/10 hover:bg-[#0d5f4a] transition-all"
          >
            Patient Portal <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 text-[#0F6E56] rounded-full text-xs font-bold uppercase tracking-wider">
              <Activity className="w-4 h-4" /> DOH Licensed Oncology Center
            </div>
            <h2 className="text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
              Personalized care for your <span className="text-[#0F6E56]">journey</span> to recovery.
            </h2>
            <p className="text-xl text-slate-500 leading-relaxed max-w-lg">
              At ICC, we combine world-class chemotherapy treatments with compassionate support, ensuring every patient feels seen, heard, and cared for.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="/patient-portal.html"
                className="px-8 py-4 bg-[#0F6E56] text-white rounded-2xl font-bold text-lg shadow-xl shadow-teal-900/20 hover:scale-[1.02] transition-all"
              >
                Access Patient Portal
              </a>
              <button className="px-8 py-4 bg-white border border-slate-200 text-slate-600 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all">
                Learn Our Approach
              </button>
            </div>
            
            <div className="flex items-center gap-8 pt-8 opacity-60">
                <div className="flex flex-col">
                    <span className="text-2xl font-extrabold text-slate-900">10+</span>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Specialists</span>
                </div>
                <div className="w-px h-10 bg-slate-200"></div>
                <div className="flex flex-col">
                    <span className="text-2xl font-extrabold text-slate-900">1000+</span>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Lives Touched</span>
                </div>
                <div className="w-px h-10 bg-slate-200"></div>
                <div className="flex flex-col">
                    <span className="text-2xl font-extrabold text-slate-900">2015</span>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Established</span>
                </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-[40px] bg-slate-200 overflow-hidden relative shadow-2xl">
                <img 
                    src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1000" 
                    alt="Chemotherapy Center" 
                    className="w-full h-full object-cover grayscale-[0.2] hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/40 to-transparent"></div>
            </div>
            
            {/* Floating Widget 1 */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-3xl shadow-2xl border border-slate-100 max-w-[240px]">
                <div className="w-10 h-10 bg-amber-100 text-[#EF9F27] rounded-xl flex items-center justify-center mb-4">
                    <Calendar className="w-6 h-6" />
                </div>
                <p className="font-bold text-slate-900">Easy Scheduling</p>
                <p className="text-xs text-slate-500 mt-1">Book your sessions online via the integrated portal.</p>
            </div>

            {/* Floating Widget 2 */}
            <div className="absolute -top-8 -right-8 bg-[#0F6E56] p-6 rounded-3xl shadow-2xl text-white max-w-[200px]">
                <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                        <Lock className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest">Secure</span>
                </div>
                <p className="text-sm font-bold">HIPAA Compliant Data Storage</p>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-12 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#0F6E56] rounded-lg"></div>
                <span className="font-bold text-slate-900 uppercase tracking-widest text-xs">Imus Chemotherapy Center</span>
            </div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest flex gap-8">
                <span>© 2025 ICC Philippines</span>
                <span>Privacy</span>
                <span>Terms</span>
            </div>
        </div>
      </footer>
    </div>
  );
}

