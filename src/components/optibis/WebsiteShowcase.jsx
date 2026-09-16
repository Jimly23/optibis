import React from "react";
import { motion } from "framer-motion";
import { Monitor, Smartphone, Tablet, LayoutDashboard, FileEdit, BarChart3, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSafeNav } from "@/hooks/useSafeNav";
import { useLanguage } from "@/lib/LanguageContext";
import SectionHeading from "@/components/optibis/SectionHeading";

const SHOWCASE_IMG = "https://media.base44.com/images/public/6a509ada7e3a9418172110a5/fc025153c_generated_99922c01.png";

const FEATURES = [
  { icon: FileEdit, text: "Mudah diperbarui" },
  { icon: LayoutDashboard, text: "Mudah digunakan tim" },
  { icon: BarChart3, text: "Mudah memantau leads" },
  { icon: Monitor, text: "Mudah melihat perkembangan" },
  { icon: Shield, text: "Aman dan responsif" },
];

export default function WebsiteShowcase() {
  const nav = useSafeNav();
  const { tr } = useLanguage();

  return (
    <section className="py-14 lg:py-20 relative bg-gradient-to-r from-magenta to-amethyst text-white overflow-hidden">
      {/* Gelembung (Bubbles) */}
      <div className="absolute -bottom-40 left-1/4 w-[30rem] h-[30rem] bg-white/10 rounded-full blur-[2px]" />
      <div className="absolute -top-32 -right-16 w-96 h-96 bg-white/10 rounded-full blur-[2px]" />
      <div className="absolute top-10 -left-20 w-64 h-64 bg-white/5 rounded-full blur-[2px]" />
      <div className="absolute bottom-20 right-1/4 w-48 h-48 bg-white/5 rounded-full blur-[2px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <SectionHeading
              eyebrow="Website Optibis"
              title={<>{tr("Website yang Tidak Hanya Menarik, tetapi Juga")} <span className="text-white">{tr("Mudah Digunakan")}</span></>}
              description="Kami membangun website yang tidak hanya cantik dilihat, tetapi juga mudah dikelola oleh tim Anda — lengkap dengan dashboard, CMS, dan sistem monitoring."
              align="left"
              light
              className="mb-8"
            />

            <div className="space-y-4 mb-8">
              {FEATURES.map((f, i) => (
                <motion.div
                  key={f.text}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <f.icon className="w-4 h-4 text-magenta" />
                  </div>
                  <span className="text-sm font-medium text-white/90">{tr(f.text)}</span>
                </motion.div>
              ))}
            </div>

            <Button onClick={() => nav("/website")} className="bg-magenta hover:bg-magenta-500 text-white rounded-full px-8 font-semibold shadow-xl shadow-black/10 group">
              {tr("Lihat Detail Website")}
              <ArrowRight className="w-4 h-4 ml-2 text-white transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <img src={SHOWCASE_IMG} alt="Contoh website premium Optibis" className="w-full h-auto" />
            </div>
            {/* Device indicators */}
            <div className="flex items-center justify-center gap-4 mt-6">
              {[
                { icon: Monitor, label: "Desktop" },
                { icon: Tablet, label: "Tablet" },
                { icon: Smartphone, label: "Mobile" },
              ].map((d) => (
                <div key={d.label} className="flex items-center gap-1.5 text-white/50 text-xs">
                  <d.icon className="w-4 h-4" />
                  {d.label}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
