"use client";

import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const phoneNumber = "923700802980";
  const message = "Hi! I would like to book a relaxing massage session at Best Spa Islamabad.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <aside aria-label="Customer support chat" className="fixed bottom-16 md:bottom-6 right-5 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            className="bg-white dark:bg-stone-900 rounded-2xl shadow-2xl overflow-hidden mb-2 w-72 sm:w-80 border border-emerald-200 dark:border-stone-700"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-emerald-700 to-teal-700 p-4 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-white/20 rounded-full flex items-center justify-center">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-bold text-sm">Best Spa Support</p>
                    <p className="text-xs text-emerald-100 flex items-center gap-1">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                      Online • Typically replies instantly
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Close WhatsApp chat popup"
                  className="text-white/80 hover:text-white p-1 rounded-md transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Chat Body */}
            <div className="p-4 bg-stone-50 dark:bg-stone-950/70 h-52 flex flex-col gap-3 overflow-y-auto">
              <div className="bg-white dark:bg-stone-800 p-3.5 rounded-2xl rounded-tl-sm shadow-sm text-xs sm:text-sm text-stone-700 dark:text-stone-200 self-start max-w-[90%] border border-stone-200 dark:border-stone-700 leading-relaxed">
                👋 Hello! Welcome to <strong>Best Spa Islamabad</strong>.<br />
                How can we help you relax today? We offer Swedish, Thai, Deep Tissue, and late-night sessions.
              </div>
              <div className="text-[10px] text-stone-400 text-center mt-auto">
                Open Mon-Fri until 4:40 AM | 24h Weekends
              </div>
            </div>

            {/* Footer Action */}
            <div className="p-3 bg-white dark:bg-stone-900 border-t border-stone-100 dark:border-stone-800">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Start WhatsApp conversation with Best Spa Islamabad"
                className="flex items-center justify-center gap-2 w-full bg-emerald-700 hover:bg-emerald-800 text-white font-medium py-2.5 px-4 rounded-full transition-all text-sm shadow-md active:scale-95"
              >
                <Send className="h-4 w-4" /> Start Direct WhatsApp Chat
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close WhatsApp Support" : "Open WhatsApp Support"}
        className="h-14 w-14 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-full shadow-xl flex items-center justify-center transition-all hover:scale-110 active:scale-95 border-2 border-white/20"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-7 w-7" />}
      </button>
    </aside>
  );
}
