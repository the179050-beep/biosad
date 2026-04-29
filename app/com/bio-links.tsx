"use client";

import { motion, AnimatePresence } from "motion/react";
import {
  ShieldCheck,
  Calculator,
  Truck,
  Phone,
  FileText,
  ExternalLink,
  Car,
  X,
  Lock,
} from "lucide-react";
import { useState } from "react";

const links = [
  {
    name: "احصل على عرض سعر",
    url: "#",
    icon: <Calculator className="w-5 h-5" />,
    description: "احسب تكلفة تأمين سيارتك في ثوانٍ",
  },
  {
    name: "التأمين الشامل",
    url: "#",
    icon: <ShieldCheck className="w-5 h-5" />,
    description: "تغطية كاملة لك وللآخرين وللمركبة",
  },
  {
    name: "تأمين ضد الغير",
    url: "#",
    icon: <FileText className="w-5 h-5" />,
    description: "الخيار الاقتصادي والالتزام بالنظام",
  },
  {
    name: "المساعدة على الطريق",
    url: "#",
    icon: <Truck className="w-5 h-5" />,
    description: "نحن معك 24/7 في حال حدوث أي عطل",
  },
  {
    name: "تواصل معنا عبر واتساب",
    url: "https://wa.me/123456789",
    icon: <Phone className="w-5 h-5" />,
    description: "فريق الدعم جاهز للرد على استفساراتكم",
  },
];

export default function BioLinks() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  return (
    <div
      className="min-h-screen bg-[#080a0f] text-white font-sans selection:bg-blue-500/30 overflow-x-hidden"
      dir="rtl"
    >
      {/* Background Decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/10 rounded-full blur-[120px]" />
      </div>

      <main className="relative z-10 max-w-xl mx-auto px-6 pt-20 pb-24 flex flex-col items-center">
        {/* Profile Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <div className="relative inline-block group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative w-28 h-28 rounded-full border border-white/10 flex items-center justify-center bg-[#111] overflow-hidden">
              <img src="/favicon (1).png" alt="logo" />
            </div>
          </div>
          <h1 className="mt-6 t">تأمينك الذكي</h1>
          <p className="mt-2 text-blue-400/70 text-sm uppercase tracking-[0.1em] font-medium">
            حلول تأمينية شاملة وموثوقة
          </p>
        </motion.header>

        {/* Links List */}
        <ul className="w-full space-y-4">
          {links.map((link, index) => (
            <motion.li
              key={link.name}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <a
                href={link.url}
                className="group relative flex items-center p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.06] hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 text-blue-400">
                  {link.icon}
                </div>

                <div className="mr-4 flex-grow text-right">
                  <h2 className="text-base font-medium text-white/90 group-hover:text-white transition-colors">
                    {link.name}
                  </h2>
                  <p className="text-xs text-white/40 group-hover:text-white/60 transition-colors">
                    {link.description}
                  </p>
                </div>

                <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity pl-2 transform rotate-180">
                  <ExternalLink className="w-4 h-4 text-white/40" />
                </div>
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Privacy Policy Trigger */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          onClick={() => setIsPrivacyOpen(true)}
          className="mt-8 flex items-center gap-2 text-xs text-white/30 hover:text-blue-400 transition-colors"
        >
          <Lock className="w-3 h-3" />
          <span>سياسة الخصوصية وقواعد الأمان</span>
        </motion.button>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-12 text-center"
        >
          <div className="h-px w-12 bg-blue-500/20 mx-auto mb-6" />
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/30">
            &copy; {new Date().getFullYear()} تأمينك لخدمات الوساطة
          </p>
        </motion.footer>
      </main>

      {/* Privacy Policy Modal */}
      <AnimatePresence>
        {isPrivacyOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsPrivacyOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg bg-[#0d1117] border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
            >
              <div className="p-6 border-b border-white/10 flex items-center justify-between">
                <h2 className="text-xl font-serif italic text-blue-400">
                  سياسة الخصوصية والأمان
                </h2>
                <button
                  onClick={() => setIsPrivacyOpen(false)}
                  className="p-2 hover:bg-white/5 rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-white/50" />
                </button>
              </div>
              <div className="p-6 max-h-[60vh] overflow-y-auto text-right space-y-4 text-sm text-white/70 leading-relaxed">
                <section>
                  <h3 className="text-white font-medium mb-2">
                    1. جمع المعلومات
                  </h3>
                  <p>
                    نحن نجمع فقط المعلومات الضرورية لتقديم عروض أسعار دقيقة
                    لتأمين سيارتك، مثل نوع المركبة وتاريخ القيادة.
                  </p>
                </section>
                <section>
                  <h3 className="text-white font-medium mb-2">
                    2. حماية البيانات
                  </h3>
                  <p>
                    يتم تشفير جميع بياناتك باستخدام أحدث تقنيات الأمان (SSL)
                    وتخزينها في قواعد بيانات محمية بقواعد أمان صارمة.
                  </p>
                </section>
                <section>
                  <h3 className="text-white font-medium mb-2">
                    3. قواعد الأمان (Security Rules)
                  </h3>
                  <p>
                    نطبق قواعد وصول صارمة تمنع أي وصول غير مصرح به لبياناتك
                    الشخصية. لا يمكن لأي شخص الوصول إلى بياناتك إلا من خلال
                    القنوات الرسمية والمؤمنة.
                  </p>
                </section>
                <section>
                  <h3 className="text-white font-medium mb-2">
                    4. مشاركة المعلومات
                  </h3>
                  <p>
                    لا نقوم ببيع أو مشاركة بياناتك مع أطراف ثالثة لأغراض تسويقية
                    دون موافقتك الصريحة.
                  </p>
                </section>
              </div>
              <div className="p-6 border-t border-white/10 bg-white/[0.02]">
                <button
                  onClick={() => setIsPrivacyOpen(false)}
                  className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-medium transition-colors"
                >
                  فهمت ذلك
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
