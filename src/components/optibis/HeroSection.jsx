import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Activity, User, TrendingUp, BarChart2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSafeNav } from "@/hooks/useSafeNav";
import { useLanguage } from "@/lib/LanguageContext";


const HERO_IMG = "https://media.base44.com/images/public/6a509ada7e3a9418172110a5/8ea72809d_generated_ba070f3e.png";

export default function HeroSection() {
  const nav = useSafeNav();
  const { tr } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-white pb-16 pt-24 transition-colors duration-300 dark:from-navy-900 dark:via-navy-800 dark:to-navy-700 lg:pb-24 lg:pt-32">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-magenta/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amethyst/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <div className="mb-7 flex items-center gap-2.5" aria-hidden="true">
              <span className="h-2.5 w-2.5 rounded-full bg-magenta" />
              <span className="h-2.5 w-2.5 rounded-full bg-amethyst" />
              <span className="h-2.5 w-2.5 rounded-full bg-navy" />
            </div>

            <h1 className="text-[2.55rem] font-semibold leading-[1.08] tracking-[-0.045em] text-navy sm:text-5xl lg:text-[3.45rem] xl:text-[3.8rem]">
              {tr("Bangun Brand,")} {" "}
              <span className="inline-block border border-magenta px-2.5 py-0.5 text-magenta dark:text-magenta-300">
                Website
              </span>
              , {tr("dan Pertumbuhan Digital Bisnis Anda!")}
            </h1>

            <p className="mt-6 max-w-lg text-sm leading-relaxed text-navy-300 sm:text-base lg:text-[1.05rem]">
              {tr("Optibis membantu bisnis tampil lebih profesional, mudah ditemukan, dan bertumbuh secara digital melalui solusi yang terintegrasi dan mudah dipahami.")}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button
                onClick={() => nav("#konsultasi")}
                size="lg"
                className="h-12 rounded-xl bg-magenta px-8 text-sm font-semibold text-white shadow-lg shadow-magenta/20 transition-all duration-300 hover:scale-105 hover:bg-magenta-500 hover:shadow-xl active:scale-95 group"
              >
                {tr("Konsultasi Gratis")}
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button
                onClick={() => nav("#pilar")}
                variant="outline"
                size="lg"
                className="h-12 rounded-xl border-magenta/40 px-8 text-sm font-semibold text-navy transition-all duration-300 hover:scale-105 hover:border-magenta hover:bg-magenta-50 active:scale-95 dark:border-white/25 dark:text-white dark:hover:bg-white/10"
              >
                {tr("Lihat Semua Solusi")}
              </Button>
            </div>

          </motion.div>

          {/* Right Visual - Dashboard UI Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative aspect-square sm:aspect-[4/3] lg:aspect-square flex items-center justify-center lg:ml-10"
          >
            {/* Background Elements */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[80%] h-[80%] bg-magenta/5 rounded-full blur-3xl absolute" />
              <div className="w-[60%] h-[60%] bg-amethyst/5 rounded-full blur-3xl absolute translate-x-10 translate-y-10" />
              <Sparkles className="absolute top-10 left-10 text-navy/10 w-8 h-8" />
              <Sparkles className="absolute bottom-20 right-10 text-magenta/10 w-12 h-12" />
              {/* Subtle background dots matching image */}
              <div className="absolute right-1/4 top-1/4 flex gap-4 opacity-20">
                <div className="w-1.5 h-1.5 rounded-full bg-navy"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-navy"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-navy"></div>
              </div>
              <div className="absolute bottom-1/4 right-1/4 grid grid-cols-3 gap-2 opacity-20">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-navy"></div>
                ))}
              </div>
            </div>

            {/* Card 1: Rekap Transaksi Bulan Ini (Top Right Wide) */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-4 right-0 w-[70%] sm:w-[65%] bg-white rounded-2xl shadow-xl shadow-navy/5 p-5 border border-gray-100 z-10"
            >
              <div className="text-sm font-bold text-navy mb-5">Rekap Transaksi Bulan Ini</div>
              <div className="relative h-24 w-full flex items-end">
                {/* Fake Line Chart */}
                <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 40">
                  <path d="M0,20 Q15,5 30,20 T70,20 T100,10" fill="none" stroke="currentColor" strokeWidth="2" className="text-navy opacity-80" />
                  <path d="M0,30 Q25,35 50,20 T100,30" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-magenta" />
                  {/* Point marker */}
                  <circle cx="50" cy="20" r="2.5" className="fill-magenta border-2 border-white" />
                  <line x1="50" y1="20" x2="50" y2="40" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2" className="text-magenta/50" />
                </svg>
                <div className="absolute bottom-0 left-0 w-full flex justify-between text-[8px] text-muted-foreground opacity-50 mt-1">
                  <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span>
                </div>
              </div>
              <div className="flex gap-4 mt-4 justify-center">
                <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-magenta"></div><span className="text-[9px] font-semibold text-muted-foreground">Transaksi Pending</span></div>
                <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-navy"></div><span className="text-[9px] font-semibold text-muted-foreground">Transaksi Sukses</span></div>
              </div>
            </motion.div>

            {/* Card 2: Transaksi Berhasil (Middle Left) */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-[20%] left-0 w-[55%] bg-white rounded-2xl shadow-xl shadow-navy/5 p-3 sm:p-4 border border-gray-100 z-20"
            >
              <div className="bg-gradient-to-r from-navy to-amethyst rounded-xl p-4 sm:p-5 text-white relative overflow-hidden mb-4">
                <div className="text-[10px] font-medium opacity-80 mb-1">Transaksi Berhasil</div>
                <div className="text-xl sm:text-2xl font-bold">Rp. 257 Jt.</div>
                <div className="absolute right-4 top-4 bg-white/10 p-1.5 rounded-lg backdrop-blur-sm"><Activity className="w-4 h-4 opacity-90" /></div>
                <svg className="absolute bottom-0 right-0 w-1/2 h-8" preserveAspectRatio="none" viewBox="0 0 100 20">
                  <path d="M0,15 Q25,5 50,15 T100,5" fill="none" stroke="white" strokeWidth="1.5" className="opacity-40" />
                </svg>
              </div>
              <div className="px-1 pb-1 space-y-4">
                <div className="text-[10px] font-semibold text-muted-foreground mb-2">Top Pengguna</div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-cyan-50 text-cyan-600 flex items-center justify-center"><User className="w-3.5 h-3.5" /></div>
                    <div><div className="text-[11px] font-bold text-navy leading-none">Adam Alis</div><div className="text-[9px] text-muted-foreground mt-1">Reseller</div></div>
                  </div>
                  <div className="text-[10px] font-bold text-navy">Rp. 19.972.121</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center"><User className="w-3.5 h-3.5" /></div>
                    <div><div className="text-[11px] font-bold text-navy leading-none">Udin Petot</div><div className="text-[9px] text-muted-foreground mt-1">Reseller</div></div>
                  </div>
                  <div className="text-[10px] font-bold text-navy">Rp. 17.812.719</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-orange-50 text-orange-500 flex items-center justify-center"><User className="w-3.5 h-3.5" /></div>
                    <div><div className="text-[11px] font-bold text-navy leading-none">Agung Nurdin</div><div className="text-[9px] text-muted-foreground mt-1">Reseller</div></div>
                  </div>
                  <div className="text-[10px] font-bold text-navy">Rp. 16.190.191</div>
                </div>
              </div>
            </motion.div>

            {/* Card 3: Area Chart Rp 710 Jt (Bottom Left) */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-16 left-4 sm:left-8 w-[60%] sm:w-[55%] bg-white rounded-2xl shadow-xl shadow-navy/5 p-4 border border-gray-100 z-10"
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <div className="text-lg font-bold text-navy leading-none">Rp. 710 Jt</div>
                  <div className="text-[10px] text-emerald-500 font-bold flex items-center mt-1.5"><TrendingUp className="w-3 h-3 mr-1" /> +0.94%</div>
                </div>
                <BarChart2 className="w-4 h-4 text-muted-foreground" />
              </div>
              <div className="h-16 w-full relative mt-3 flex items-end">
                {/* Fake Area Chart */}
                <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 40">
                  <defs>
                    <linearGradient id="gradArea" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#2b3a67', stopOpacity: 0.2 }} />
                      <stop offset="100%" style={{ stopColor: '#2b3a67', stopOpacity: 0 }} />
                    </linearGradient>
                  </defs>
                  <path d="M0,30 Q10,25 20,30 T40,25 T60,20 T80,10 T100,15 L100,40 L0,40 Z" fill="url(#gradArea)" />
                  <path d="M0,30 Q10,25 20,30 T40,25 T60,20 T80,10 T100,15" fill="none" stroke="currentColor" strokeWidth="2" className="text-navy" />
                  <circle cx="80" cy="10" r="3" className="fill-white stroke-navy stroke-2" />
                </svg>
                <div className="absolute top-0 right-[10%] bg-navy text-white text-[8px] font-semibold px-2 py-1 rounded-md shadow-md">Rp. 78 Jt</div>
              </div>
            </motion.div>

            {/* Card 4: Total Pendapatan (Bottom Right/Center) */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="absolute bottom-4 right-4 sm:right-10 bg-white rounded-2xl shadow-xl shadow-navy/5 p-4 sm:p-5 border border-gray-100 flex items-center gap-4 z-30"
            >
              <div className="w-12 h-12 rounded-full bg-navy/5 flex items-center justify-center text-navy">
                <BarChart2 className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground font-semibold">Total Pendapatan</div>
                <div className="text-xl sm:text-2xl font-extrabold text-navy leading-none mt-1.5">Rp. 982 Juta.</div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
