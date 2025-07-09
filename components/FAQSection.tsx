"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs: FAQItem[] = [
    {
      question: "What's included in the free trial?",
      answer:
        "Our free trial includes access to all Pro Starter features for 14 days, including 1,000 automation executions, the visual editor, and community support.",
    },
    {
      question: "Can I change plans at any time?",
      answer:
        "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing adjustments.",
    },
    {
      question: "What happens if I exceed my execution limit?",
      answer:
        "If you exceed your monthly execution limit, your automations will be paused until the next billing cycle or you can upgrade to a higher plan.",
    },
    {
      question: "Do you offer custom enterprise solutions?",
      answer:
        "Yes, our Enterprise plan includes custom solutions, dedicated support, and on-premise deployment options. Contact our sales team for a personalized quote.",
    },
    {
      question: "Is there a setup fee?",
      answer: "No, there are no setup fees for any of our plans. You only pay the monthly or annual subscription fee.",
    },
  ]

  return (
    <div className="max-w-4xl mx-auto mt-24 px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
        <p className="text-slate-400 text-lg">Everything you need to know about our pricing and plans</p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="relative border border-[#3BACB6]/30 rounded-xl bg-black/90 backdrop-blur-md overflow-hidden shadow-2xl"
          >
            {/* Fondo decorativo blur y gradiente como CookieConsent */}
            <div className="absolute inset-0 z-0 opacity-50 rounded-xl overflow-hidden pointer-events-none">
              <div className="absolute top-0 left-[10%] w-[60%] h-[40%] rounded-full blur-[50px] bg-[#3bbced] opacity-20"></div>
              <div className="absolute bottom-[20%] right-[5%] w-[40%] h-[40%] rounded-full blur-[50px] bg-[#30a2d9] opacity-30"></div>
            </div>
            <button
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-[#0a0a20]/40 transition-colors relative z-10"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="text-white font-medium text-lg drop-shadow">{faq.question}</span>
              <motion.div animate={{ rotate: openIndex === index ? 180 : 0 }} transition={{ duration: 0.2 }}>
                <ChevronDown className="w-5 h-5 text-[#3bbced]" />
              </motion.div>
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-4 text-[#E0F7FA]/90 leading-relaxed relative z-10">{faq.answer}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FAQSection
