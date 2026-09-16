import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Calendar } from "lucide-react";
import { useSafeNav } from "@/hooks/useSafeNav";
import { useLanguage } from "@/lib/LanguageContext";
import SectionHeading from "@/components/optibis/SectionHeading";

export default function FinalCTA() {
  const nav = useSafeNav();
  const { tr } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16" id="final-cta">
      <section className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-r from-magenta to-amethyst py-12 lg:py-16 shadow-2xl shadow-magenta/20">
        {/* Gelembung (Bubbles) */}
        <div className="absolute -bottom-40 left-1/4 w-[30rem] h-[30rem] bg-white/10 rounded-full blur-[2px]" />
        <div className="absolute -top-32 -right-16 w-96 h-96 bg-white/10 rounded-full blur-[2px]" />
        <div className="absolute top-10 -left-20 w-64 h-64 bg-white/5 rounded-full blur-[2px]" />
        <div className="absolute bottom-20 right-1/4 w-48 h-48 bg-white/5 rounded-full blur-[2px]" />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeading eyebrow="Mulai Bersama Optibis" title="Siap Membangun Brand, Website, dan Pertumbuhan Digital Bisnis Anda?" description="Konsultasikan kebutuhan bisnis Anda secara gratis dan dapatkan rekomendasi solusi yang sesuai." light className="mb-8" />

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button
                onClick={() => nav("#konsultasi")}
                size="lg"
                className="rounded-full px-8 text-sm font-semibold h-12 w-full sm:w-auto transition-all duration-300 hover:scale-105 active:scale-95 group bg-magenta text-white hover:bg-magenta-500 shadow-xl shadow-black/10"
              >
                {tr("Konsultasi Gratis")}
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1 text-white" />
              </Button>
              <a
                href="https://wa.me/6287772577020"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full bg-green-500 hover:bg-green-600 text-white text-sm font-semibold transition-all duration-300 hover:scale-105 shadow-xl shadow-black/10 active:scale-95 w-full sm:w-auto"
              >
                <MessageCircle className="w-4 h-4" />
                {tr("Chat via WhatsApp")}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
