"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import Link from "next/link"
import Image from "next/image"
import FondoAnimado from "../components/FondoAnimado"
import NavBarTriangular from "../components/NavBarTriangular"
import Footer from "../components/Footer"
import UseCaseSection from "../components/UseCaseSection"
import {  MessageSquare, Brain, Users, Zap, GitBranch, GitCompare, RotateCcw, History  } from "lucide-react"

const PARTICLE_COUNT = 50

export default function VibCodHero() {
  const heroTitleRef = useRef<HTMLDivElement>(null)
  const [email, setEmail] = useState("")
  const [particles, setParticles] = useState<
    Array<{
      left: number
      top: number
      delay: number
      duration: number
    }>
  >([])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Thank you! ${email} has been added to the waitlist.`)
    setEmail("")
  }

  useEffect(() => {
    // Text scramble animation only
    const texts = [
      ["AI-POWERED", "AUTOMATION"],
      ["MCP AGENTS", "AVAILABLE"],
      ["SWITCH", "VERSIONS"],
    ]
    let currentTextIndex = 0

    // Scramble text function - Left to right reveal
    function scrambleText(element: Element | null | undefined, newText: string, duration = 1000) {
      if (!element) return

      const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      const originalText = element.textContent || ""
      const steps = 40
      let step = 0

      const interval = setInterval(() => {
        let scrambled = ""
        const progress = step / steps

        for (let i = 0; i < Math.max(originalText.length, newText.length); i++) {
          if (i < newText.length) {
            const letterRevealPoint = (i / newText.length) * 0.6 + 0.2
            if (progress > letterRevealPoint) {
              scrambled += newText[i]
            } else {
              scrambled += chars[Math.floor(Math.random() * chars.length)]
            }
          }
        }

        element.textContent = scrambled

        if (step >= steps) {
          clearInterval(interval)
          element.textContent = newText
        }
        step++
      }, duration / steps)
    }

    // Create text animation timeline
    const textTl = gsap.timeline({ repeat: -1 })

    // Initial pause
    textTl.to({}, { duration: 3 })

    // Animate to second text
    textTl.add(() => {
      currentTextIndex = 1
      const line1 = heroTitleRef.current?.querySelector(".scramble-line-1")
      const line2 = heroTitleRef.current?.querySelector(".scramble-line-2")
      scrambleText(line1, texts[1][0])
      scrambleText(line2, texts[1][1])
    })

    // Pause
    textTl.to({}, { duration: 3 })

    // Animate to third text
    textTl.add(() => {
      currentTextIndex = 2
      const line1 = heroTitleRef.current?.querySelector(".scramble-line-1")
      const line2 = heroTitleRef.current?.querySelector(".scramble-line-2")
      scrambleText(line1, texts[2][0])
      scrambleText(line2, texts[2][1])
    })

    // Pause
    textTl.to({}, { duration: 3 })

    // Animate back to first text
    textTl.add(() => {
      currentTextIndex = 0
      const line1 = heroTitleRef.current?.querySelector(".scramble-line-1")
      const line2 = heroTitleRef.current?.querySelector(".scramble-line-2")
      scrambleText(line1, texts[0][0])
      scrambleText(line2, texts[0][1])
    })

    return () => {
      textTl.kill()
    }
  }, [])

  useEffect(() => {
    const newParticles = Array(PARTICLE_COUNT)
      .fill(null)
      .map(() => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 3 + Math.random() * 4,
      }))
    setParticles(newParticles)
  }, [])

  return (
    <>
      <div className="bg-black text-white overflow-hidden">
        <NavBarTriangular />

        {/* Hero Section */}
        <div className="relative min-h-screen flex flex-col items-center justify-center">
          <FondoAnimado />

          {/* Hero Title */}
          <div ref={heroTitleRef} className="text-center relative z-30 mb-8">
            <h2 className="text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-bold tracking-[0.1em] uppercase leading-none text-white">
              <span className="block scramble-line-1">AI-POWERED</span>
              <span className="block scramble-line-2">AUTOMATION</span>
            </h2>
          </div>

          {/* Hero Subtitle */}
          <div className="text-center relative z-30 mb-12">
            <div
              className="inline-block px-10 py-5 rounded-2xl text-lg md:text-xl tracking-[0.12em] uppercase relative max-w-5xl backdrop-blur-sm"
              style={{
                background: `rgba(30, 87, 153, 0.15)`,
                boxShadow: `
                  0 8px 32px rgba(0, 0, 0, 0.3), 
                  inset 0 1px 0 rgba(224, 247, 250, 0.2),
                  0 0 20px rgba(59, 172, 182, 0.1)
                `,
                border: "1px solid rgba(59, 172, 182, 0.3)",
              }}
            >
              <span className="relative z-10 text-white font-medium">
                Flow with AI: Build, version, and deploy automations with natural language
              </span>
            </div>
          </div>

          {/* Waitlist Form */}
          <div className="text-center relative z-30">
            <div className="max-w-md mx-auto px-3">
              <div className="flex flex-col items-center">
                <Link
                  href="/waitlist"
                  className="w-full px-6 py-4 rounded-xl font-bold text-white text-xl transition-transform duration-300 hover:scale-105 relative overflow-hidden block"
                  style={{
                    boxShadow: `
                      0 0 15px rgba(59, 188, 237, 0.3),
                      0 0 30px rgba(59, 188, 237, 0.2),
                      inset 0 0 30px rgba(59, 188, 237, 0.1)
                    `,
                    border: "1px solid rgba(59, 188, 237, 0.5)",
                  }}
                >
                  {/* Fondo con gradiente */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#3bbced] via-[#30a2d9] via-[#2d86c4] via-[#2c4e95] to-[#30368d]"></div>
                  
                  {/* Efecto metalizado estático */}
                  <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent"></div>
                    {/* Reflejo brillante animado */}
                    <div className="absolute inset-0 animate-shine">
                      <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.4)_50%,transparent_100%)] skew-x-12 translate-x-[-100%]"></div>
                    </div>
                  </div>
                  
                  {/* Texto */}
                  <span className="relative z-10">Get early access</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section - Card 1 */}
        <div className="relative min-h-screen flex flex-col items-center justify-center py-20 bg-black">
          <FondoAnimado />

          <div className="text-center mb-12 relative z-30">
            <h2
              className="text-4xl md:text-5xl font-bold leading-tight mb-8 bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent"
              style={{
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Your Vibe, Your Flow
            </h2>
          </div>

          {/* Main Glass Card */}
          <div className="relative w-[60%] max-w-[1600px] aspect-[21/9] mx-auto rounded-3xl p-0.5 z-20 mb-12"
            style={{
              background: "linear-gradient(120deg, rgba(59,188,237,0.18) 0%, rgba(30,87,153,0.12) 100%)",
              boxShadow: "0 0 60px 12px rgba(59,188,237,0.18), 0 0 0 2.5px rgba(59,188,237,0.35)",
              border: "1px solid rgba(59,188,237,0.35)",
              backdropFilter: "blur(16px)",
            }}
          >
            <div className="w-full h-full rounded-3xl flex flex-col items-center justify-center px-4 py-4"
              style={{
                background: "linear-gradient(120deg, rgba(255,255,255,0.10) 0%, rgba(59,188,237,0.08) 100%)",
                backdropFilter: "blur(10px)",
              }}
            >
              {/* Video */}
              <div className="w-full h-full rounded-xl overflow-hidden mb-1 flex items-center justify-center">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-[100%] h-[100%] object-contain rounded-2xl"
                >
                  <source src="/videos/card_1.webm" type="video/webm" />
                </video>
              </div>


            </div>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full pb-4 max-w-7xl">
            {/* Feature 1 */}
            <div
              className="flex flex-col items-start min-w-[220px] flex-1 rounded-2xl transition-all duration-300 bg-slate-700/50 backdrop-blur-sm border border-[#47A8BD]/30 p-4 hover:border-[#47A8BD]/50 group"
            >
              {/* Icon: Chat bubble */}
              <MessageSquare className="w-6 h-6 mb-2 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
              <div className="font-semibold text-white text-base mb-1">Natural Language</div>
              <div className="text-slate-300 text-xs leading-snug">Communicate with your workflows using everyday language</div>
            </div>
            {/* Feature 2 */}
            <div
              className="flex flex-col items-start min-w-[220px] flex-1 rounded-2xl transition-all duration-300 bg-slate-700/50 backdrop-blur-sm border border-[#47A8BD]/30 p-4 hover:border-[#47A8BD]/50 group"
            >
              {/* Icon: AI/brain */}
              <Brain className="w-6 h-6 mb-2 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
              <div className="font-semibold text-white text-base mb-1">AI-Powered</div>
              <div className="text-slate-300 text-xs leading-snug">Advanced AI algorithms optimize your processes automatically</div>
            </div>
            {/* Feature 3 */}
            <div
              className="flex flex-col items-start min-w-[220px] flex-1 rounded-2xl transition-all duration-300 bg-slate-700/50 backdrop-blur-sm border border-[#47A8BD]/30 p-4 hover:border-[#47A8BD]/50 group"
            >
              {/* Icon: Users/agents */}
              <Users className="w-6 h-6 mb-2 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
              <div className="font-semibold text-white text-base mb-1">MCP Agents</div>
              <div className="text-slate-300 text-xs leading-snug">Multi-agent collaboration for complex task management</div>
            </div>
            {/* Feature 4 */}
            <div
              className="flex flex-col items-start min-w-[220px] flex-1 rounded-2xl transition-all duration-300 bg-slate-700/50 backdrop-blur-sm border border-[#47A8BD]/30 p-4 hover:border-[#47A8BD]/50 group"
            >
              {/* Icon: Lightning bolt */}
              <Zap className="w-6 h-6 mb-2 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
              <div className="font-semibold text-white text-base mb-1">Just Describe It</div>
              <div className="text-slate-300 text-xs leading-snug">Simply describe what you need and watch it come to life</div>
            </div>
          </div>
        </div>


        {/* Features Section - Card 2 */}
       

        <div className="relative min-h-screen flex flex-col items-center justify-center py-20 bg-black">
          <FondoAnimado />

          <div className="text-center mb-12 relative z-30">
            <h2
              className="text-4xl md:text-5xl font-bold leading-tight mb-8"
              style={{
                background: `linear-gradient(135deg, #47A8BD 0%, #2563EB 50%, #47A8BD 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Your History of Ideas
            </h2>
          </div>


          <div className="relative w-[60%] max-w-[1600px] aspect-[21/9] mx-auto rounded-3xl p-0.5 z-20 mb-12"
          style={{
            background: "linear-gradient(120deg, rgba(37,99,235,0.18) 0%, rgba(30,64,175,0.12) 100%)", // tonos derivados de #2563EB
            boxShadow: "0 0 60px 12px rgba(37,99,235,0.18), 0 0 0 2.5px rgba(37,99,235,0.35)",
            border: "1px solid rgba(37,99,235,0.35)",
            backdropFilter: "blur(16px)",
          }}
        >
          <div className="w-full h-full rounded-3xl flex flex-col items-center justify-center px-4 py-4"
            style={{
              background: "linear-gradient(120deg, rgba(255,255,255,0.10) 0%, rgba(37,99,235,0.08) 100%)",
              backdropFilter: "blur(10px)",
            }}
          >
            {/* Video */}
            <div className="w-full h-full rounded-xl overflow-hidden mb-1 flex items-center justify-center">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-[100%] h-[100%] object-contain rounded-2xl"
              >
                <source src="/videos/card_1.webm" type="video/webm" />
              </video>
            </div>
          </div>
        </div>

        

          {/* Feature highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full pb-4 max-w-7xl">
          <div className="flex flex-col items-start min-w-[220px] flex-1 rounded-2xl transition-all duration-300 bg-slate-700/50 backdrop-blur-sm border border-[#2563EB]/30 p-4 hover:border-[#2563EB]/50 group">
              <GitBranch className="w-6 h-6 mb-2 text-[#2563EB] group-hover:scale-110 transition-transform duration-300" />
              <div className="font-semibold text-white text-base mb-1">Version Control</div>
              <div className="text-slate-300 text-xs leading-snug">Keep track of all your workflow changes with ease</div>
            </div>
            <div className="flex flex-col items-start min-w-[220px] flex-1 rounded-2xl transition-all duration-300 bg-slate-700/50 backdrop-blur-sm border border-[#2563EB]/30 p-4 hover:border-[#2563EB]/50 group">
              <GitCompare className="w-6 h-6 mb-2 text-[#2563EB] group-hover:scale-110 transition-transform duration-300" />
              <div className="font-semibold text-white text-base mb-1">Switch Versions</div>
              <div className="text-slate-300 text-xs leading-snug">Easily switch between different workflow versions</div>
            </div>
            <div className="flex flex-col items-start min-w-[220px] flex-1 rounded-2xl transition-all duration-300 bg-slate-700/50 backdrop-blur-sm border border-[#2563EB]/30 p-4 hover:border-[#2563EB]/50 group">
              <RotateCcw className="w-6 h-6 mb-2 text-[#2563EB] group-hover:scale-110 transition-transform duration-300" />
              <div className="font-semibold text-white text-base mb-1">Rollback Easy</div>
              <div className="text-slate-300 text-xs leading-snug">Rollback to previous states with a single click</div>
            </div>
            <div className="flex flex-col items-start min-w-[220px] flex-1 rounded-2xl transition-all duration-300 bg-slate-700/50 backdrop-blur-sm border border-[#2563EB]/30 p-4 hover:border-[#2563EB]/50 group">
              <History className="w-6 h-6 mb-2 text-[#2563EB] group-hover:scale-110 transition-transform duration-300" />
              <div className="font-semibold text-white text-base mb-1">Track Changes</div>
              <div className="text-slate-300 text-xs leading-snug">Visualize and audit every change in your workflow</div>
            </div>
          </div>
        </div>


        {/* Use Case Section ahora justo después del hero */}
        <div className="relative min-h-screen bg-black text-white overflow-hidden w-full">
          <FondoAnimado />
          <div className="w-full overflow-x-auto">
            <UseCaseSection />
          </div>
        </div>

        {/* Automation Ecosystem Section */}
        <div className="relative min-h-screen bg-black text-white overflow-hidden flex items-center justify-center py-20">
          <FondoAnimado />

          <div className="container mx-auto px-6 z-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Side - Solar System Animation */}
              <div className="flex items-center justify-center">
                <div className="relative w-[600px] h-[600px]">
                  {/* Outer Orbit */}
                  <div className="absolute inset-0 rounded-full border-2"
                    style={{
                      borderColor: '#3bbced',
                      boxShadow: '0 0 20px rgba(59, 188, 237, 0.5), inset 0 0 20px rgba(59, 188, 237, 0.2)',
                      animation: 'orbit-rgb-glow 3s linear infinite'
                    }}>
                    {/* Outer Orbit Planets Container */}
                    <div className="absolute inset-0 animate-spin-clockwise">
                      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                        <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-xl border-2 border-white/20 p-1">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-8 h-8">
                            <path fill="#43a047" d="M37,45H11c-1.657,0-3-1.343-3-3V6c0-1.657,1.343-3,3-3h19l10,10v29C40,43.657,38.657,45,37,45z"/>
                            <path fill="#c8e6c9" d="M40 13L30 13 30 3z"/>
                            <path fill="#2e7d32" d="M30 13L40 23 40 13z"/>
                            <path fill="#e8f5e9" d="M31,23H17h-2v2v2v2v2v2v2v2h18v-2v-2v-2v-2v-2v-2v-2H31z M17,25h4v2h-4V25z M17,29h4v2h-4V29z M17,33h4v2h-4V33z M31,35h-8v-2h8V35z M31,31h-8v-2h8V31z M31,27h-8v-2h8V27z"/>
                          </svg>
                        </div>
                      </div>
                      <div className="absolute top-1/2 -right-6 transform -translate-y-1/2">
                        <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-xl border-2 border-white/20 p-1">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-8 h-8">
                            <path fill="#1e88e5" d="M38.59,39c-0.535,0.93-0.298,1.68-1.195,2.197C36.498,41.715,35.465,42,34.39,42H13.61 c-1.074,0-2.106-0.285-3.004-0.802C9.708,40.681,9.945,39.93,9.41,39l7.67-9h13.84L38.59,39z"/>
                            <path fill="#fbc02d" d="M27.463,6.999c1.073-0.002,2.104-0.716,3.001-0.198c0.897,0.519,1.66,1.27,2.197,2.201l10.39,17.996 c0.537,0.93,0.807,1.967,0.808,3.002c0.001,1.037-1.267,2.073-1.806,3.001l-11.127-3.005l-6.924-11.993L27.463,6.999z"/>
                            <path fill="#e53935" d="M43.86,30c0,1.04-0.27,2.07-0.81,3l-3.67,6.35c-0.53,0.78-1.21,1.4-1.99,1.85L30.92,30H43.86z"/>
                            <path fill="#4caf50" d="M5.947,33.001c-0.538-0.928-1.806-1.964-1.806-3c0.001-1.036,0.27-2.073,0.808-3.004l10.39-17.996 c0.537-0.93,1.3-1.682,2.196-2.2c0.897-0.519,1.929,0.195,3.002,0.197l3.459,11.009l-6.922,11.989L5.947,33.001z"/>
                            <path fill="#1565c0" d="M17.08,30l-6.47,11.2c-0.78-0.45-1.46-1.07-1.99-1.85L4.95,33c-0.54-0.93-0.81-1.96-0.81-3H17.08z"/>
                            <path fill="#2e7d32" d="M30.46,6.8L24,18L17.53,6.8c0.78-0.45,1.66-0.73,2.6-0.79L27.46,6C28.54,6,29.57,6.28,30.46,6.8z"/>
                          </svg>
                        </div>
                      </div>
                      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                        <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-xl border-2 border-white/20 p-1">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-8 h-8">
                            <path fill="#FFB300" d="M31.2,10.6l-6.6,2.3l-1.4-4.3c-0.6-1.8,0.3-3.8,2.2-4.4c1.8-0.6,3.8,0.3,4.4,2.2L31.2,10.6z M29.2,26.6l6.6-2.3l-2.3-7.1l-6.6,2.3L29.2,26.6z M32.6,36.8c0.5,1.4,1.9,2.4,3.3,2.4c0.4,0,0.8-0.1,1.1-0.2c1.8-0.6,2.8-2.6,2.2-4.4L38,31l-6.6,2.3L32.6,36.8z"/>
                            <path fill="#00BFA5" d="M17.2,15.5l-6.6,2.3l-1.4-4.2c-0.6-1.8,0.3-3.8,2.2-4.4c1.8-0.6,3.8,0.3,4.4,2.2L17.2,15.5z M18.6,41.8c0.5,1.4,1.9,2.4,3.3,2.4c0.4,0,0.8-0.1,1.1-0.2c1.8-0.6,2.8-2.6,2.2-4.4l-1.2-3.7l-6.6,2.3L18.6,41.8z M19.4,22.2l-6.6,2.3l2.3,7.1l6.6-2.3L19.4,22.2z"/>
                            <path fill="#00BCD4" d="M33.4,17.3l-2.2-6.6l4.1-1.4c1.8-0.6,3.8,0.3,4.4,2.2c0.6,1.8-0.3,3.8-2.2,4.4L33.4,17.3z M26.8,19.6l-2.2-6.6l-7.4,2.6l2.2,6.6L26.8,19.6z M6.4,19.3c-1.8,0.6-2.8,2.6-2.2,4.4c0.5,1.5,1.9,2.4,3.3,2.4c0.4,0,0.8-0.1,1.1-0.2l4.1-1.4l-2.2-6.6L6.4,19.3z"/>
                            <path fill="#E91E63" d="M15.1,31.5l2.2,6.6l-4.7,1.6c-0.4,0.1-0.8,0.2-1.1,0.2c-1.5,0-2.8-0.9-3.3-2.4c-0.6-1.8,0.3-3.8,2.2-4.4L15.1,31.5z M43.7,25.3c-0.6-1.8-2.6-2.8-4.4-2.2l-3.5,1.2L38,31l3.6-1.2C43.4,29.1,44.4,27.1,43.7,25.3z M21.7,29.2l2.2,6.6l7.4-2.6l-2.2-6.6L21.7,29.2z"/>
                          </svg>
                        </div>
                      </div>
                      <div className="absolute top-1/2 -left-6 transform -translate-y-1/2">
                        <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-xl border-2 border-white/20 p-1">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-8 h-8">
                            <path fill="#f2f2f2" d="M54.511,89.93c-5.485,0-9.947-4.464-9.947-9.95V61.611L17.405,74.658 c-1.352,0.652-2.811,0.985-4.327,0.985C7.521,75.644,3,71.18,3,65.693V38.541c0-2.656,1.089-5.162,3.068-7.062 c0.529-0.522,1.158-1.008,1.837-1.417c0.801-2.901,2.893-5.324,5.781-6.521l29.086-12.034c2.289-0.949,4.713-1.432,7.2-1.432 c2.483,0,4.906,0.481,7.201,1.431l29.081,12.034c2.788,1.154,4.835,3.451,5.695,6.22C94.974,31.475,97,34.726,97,38.42v28.93 c0,4.107-2.468,7.737-6.286,9.25L58.126,89.249C56.998,89.696,55.771,89.93,54.511,89.93z"/>
                            <path fill="#40396e" d="M87.343,33.479c0.035-0.232,0.055-0.47,0.057-0.71c0.015-2.026-1.186-3.835-3.057-4.609 l-29.08-12.034c-1.686-0.697-3.466-1.051-5.29-1.051c-1.826,0-3.607,0.354-5.289,1.052L15.601,28.159 c-1.871,0.775-3.07,2.585-3.055,4.61c0.002,0.288,0.029,0.572,0.079,0.85c-0.714,0.072-1.396,0.292-2.003,0.646 c-0.412,0.232-0.787,0.517-1.062,0.794C8.554,36.012,8,37.249,8,38.541v27.152c0,2.729,2.278,4.95,5.078,4.95 c0.759,0,1.488-0.167,2.162-0.492l34.323-16.489v26.317c0,2.729,2.219,4.95,4.947,4.95c0.625,0,1.239-0.117,1.806-0.342 L88.873,71.95C90.772,71.198,92,69.393,92,67.35V38.42C92,35.788,89.937,33.629,87.343,33.479z"/>
                            <path fill="#fcb400" d="M53.967,46.123c-2.566,1.018-5.423,1.018-7.989,0l-29.202-11.58 c-1.627-0.645-1.644-2.942-0.027-3.612L45.83,18.898l0,0c2.653-1.098,5.633-1.098,8.286,0l29.08,12.034 c1.618,0.669,1.6,2.966-0.026,3.611L53.967,46.123z"/>
                            <path fill="#18bfff" d="M86.334,36.609l-32.54,12.63c-0.743,0.295-1.23,1.012-1.23,1.811V79.98 c0,1.376,1.387,2.318,2.667,1.811L87.77,69.16c0.743-0.294,1.23-1.012,1.23-1.811V38.42C89,37.044,87.613,36.102,86.334,36.609z"/>
                            <path fill="#ba2048" d="M44.803,48.978L13.89,36.729c-0.591-0.234-1.286-0.156-1.772,0.137 c-0.181,0.1-0.347,0.224-0.494,0.37l10.942,11.199l12.092,9.061l10.308-4.952v0C46.497,51.803,46.374,49.602,44.803,48.978z"/>
                            <path fill="#f82b60" d="M11.624,37.236C11.624,37.236,11.623,37.236,11.624,37.236C11.266,37.574,11,38.022,11,38.541v27.152 c0,1.436,1.65,2.377,2.942,1.754l20.715-9.952L11.624,37.236z"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Inner Orbit */}
                  <div className="absolute inset-20 rounded-full border-2"
                    style={{
                      borderColor: '#30368d',
                      boxShadow: '0 0 15px rgba(48, 54, 141, 0.6), inset 0 0 15px rgba(48, 54, 141, 0.3)',
                      animation: 'orbit-rgb-glow-inner 2.5s linear infinite'
                    }}>
                    {/* Inner Orbit Planets Container */}
                    <div className="absolute inset-0 animate-spin-counter-clockwise">
                      <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-xl border-2 border-white/20 p-1">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-6 h-6">
                            <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"/>
                          </svg>
                        </div>
                      </div>
                      <div className="absolute top-1/2 -right-5 transform -translate-y-1/2">
                        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-xl border-2 border-white/20 p-1">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-6 h-6">
                            <path fill="#fff" d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"/>
                            <path fill="#fff" d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"/>
                            <path fill="#cfd8dc" d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.994-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"/>
                            <path fill="#40c351" d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"/>
                            <path fill="#fff" fill-rule="evenodd" d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z" clip-rule="evenodd"/>
                          </svg>
                        </div>
                      </div>
                      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-xl border-2 border-white/20 p-1">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-6 h-6">
                            <path d="M 31.494141 5.1503906 L 5.9277344 7.0019531 A 1.0001 1.0001 0 0 0 5.9042969 7.0039062 A 1.0001 1.0001 0 0 0 5.8652344 7.0097656 A 1.0001 1.0001 0 0 0 5.7929688 7.0214844 A 1.0001 1.0001 0 0 0 5.7636719 7.0292969 A 1.0001 1.0001 0 0 0 5.7304688 7.0371094 A 1.0001 1.0001 0 0 0 5.6582031 7.0605469 A 1.0001 1.0001 0 0 0 5.6113281 7.0800781 A 1.0001 1.0001 0 0 0 5.5839844 7.0917969 A 1.0001 1.0001 0 0 0 5.4335938 7.1777344 A 1.0001 1.0001 0 0 0 5.4082031 7.1933594 A 1.0001 1.0001 0 0 0 5.3476562 7.2421875 A 1.0001 1.0001 0 0 0 5.3359375 7.2539062 A 1.0001 1.0001 0 0 0 5.2871094 7.2988281 A 1.0001 1.0001 0 0 0 5.2578125 7.3320312 A 1.0001 1.0001 0 0 0 5.2148438 7.3828125 A 1.0001 1.0001 0 0 0 5.1992188 7.4023438 A 1.0001 1.0001 0 0 0 5.15625 7.4648438 A 1.0001 1.0001 0 0 0 5.1445312 7.484375 A 1.0001 1.0001 0 0 0 5.1074219 7.5488281 A 1.0001 1.0001 0 0 0 5.09375 7.5761719 A 1.0001 1.0001 0 0 0 5.0644531 7.6484375 A 1.0001 1.0001 0 0 0 5.0605469 7.65625 A 1.0001 1.0001 0 0 0 5.015625 7.8300781 A 1.0001 1.0001 0 0 0 5.0097656 7.8613281 A 1.0001 1.0001 0 0 0 5.0019531 7.9414062 A 1.0001 1.0001 0 0 0 5.0019531 7.9453125 A 1.0001 1.0001 0 0 0 5 8 L 5 33.738281 C 5 34.76391 5.3151542 35.766862 5.9042969 36.607422 A 1.0001 1.0001 0 0 0 5.953125 36.671875 L 12.126953 44.101562 A 1.0001 1.0001 0 0 0 12.359375 44.382812 L 12.75 44.851562 A 1.0006635 1.0006635 0 0 0 12.917969 45.011719 C 13.50508 45.581386 14.317167 45.917563 15.193359 45.861328 L 42.193359 44.119141 C 43.762433 44.017718 45 42.697027 45 41.125 L 45 15.132812 C 45 14.209354 44.565523 13.390672 43.904297 12.839844 A 1.0008168 1.0008168 0 0 0 43.748047 12.695312 L 43.263672 12.337891 A 1.0001 1.0001 0 0 0 43.0625 12.189453 L 34.824219 6.1132812 C 33.865071 5.4054876 32.682705 5.0641541 31.494141 5.1503906 z M 31.638672 7.1445312 C 32.352108 7.0927682 33.061867 7.29845 33.636719 7.7226562 L 39.767578 12.246094 L 14.742188 13.884766 C 13.880567 13.941006 13.037689 13.622196 12.425781 13.011719 L 12.423828 13.011719 L 8.2539062 8.8398438 L 31.638672 7.1445312 z M 7 10.414062 L 11.011719 14.425781 L 12 15.414062 L 12 40.818359 L 7.5390625 35.449219 C 7.1899317 34.947488 7 34.351269 7 33.738281 L 7 10.414062 z M 41.935547 14.134766 C 42.526748 14.096822 43 14.54116 43 15.132812 L 43 41.125 C 43 41.660973 42.59938 42.08847 42.064453 42.123047 L 15.064453 43.865234 C 14.770856 43.884078 14.506356 43.783483 14.314453 43.605469 A 1.0006635 1.0006635 0 0 0 14.3125 43.603516 C 14.3125 43.603516 14.310547 43.601562 14.310547 43.601562 C 14.306465 43.597733 14.304796 43.59179 14.300781 43.587891 A 1.0006635 1.0006635 0 0 0 14.289062 43.572266 C 14.112238 43.393435 14 43.149431 14 42.867188 L 14 16.875 C 14 16.337536 14.39999 15.911571 14.935547 15.876953 L 41.935547 14.134766 z M 38.496094 19 L 33.421875 19.28125 C 32.647875 19.36125 31.746094 19.938 31.746094 20.875 L 33.996094 21.0625 L 33.996094 31.753906 L 26.214844 19.751953 L 20.382812 20.080078 C 19.291812 20.160078 18.994141 20.970953 18.994141 22.001953 L 21.244141 22.001953 L 21.244141 37.566406 C 21.244141 37.566406 20.191844 37.850406 19.839844 37.941406 C 19.091844 38.134406 18.994141 38.784906 18.994141 39.253906 C 18.994141 39.253906 22.746656 39.065547 24.472656 38.935547 C 26.431656 38.785547 26.496094 37.472656 26.496094 37.472656 L 24.246094 37.003906 L 24.246094 25.470703 C 24.246094 25.470703 29.965844 34.660328 31.714844 37.361328 C 32.537844 38.630328 33.152375 38.878906 34.234375 38.878906 C 35.122375 38.878906 35.962141 38.616594 36.994141 38.058594 L 36.994141 20.697266 C 36.994141 20.697266 37.184203 20.687141 37.783203 20.494141 C 38.466203 20.273141 38.496094 19.656 38.496094 19 z"/>
                          </svg>
                        </div>
                      </div>
                      <div className="absolute top-1/2 -left-6 transform -translate-y-1/2">
                        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-xl border-2 border-white/20 p-1">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-6 h-6">
                            <path fill="#2196f3" d="M37,45H11c-1.657,0-3-1.343-3-3V6c0-1.657,1.343-3,3-3h19l10,10v29C40,43.657,38.657,45,37,45z"/>
                            <path fill="#bbdefb" d="M40 13L30 13 30 3z"/>
                            <path fill="#1565c0" d="M30 13L40 23 40 13z"/>
                            <path fill="#e3f2fd" d="M15 23H33V25H15zM15 27H33V29H15zM15 31H33V33H15zM15 35H25V37H15z"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Central VibCod Logo */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <div className="w-40 h-40 animate-pulse-glow-center">
                        <Image 
                          src="/images/vibcod-logo.png" 
                          alt="VibCod Logo" 
                          width={160}
                          height={160}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Text Content */}
              <div className="text-left">
                <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow mb-4">
                  Build Hundreds of Automations in Minutes
                </h1>
                <p className="text-xl text-[#E0F7FA]/80 mb-8 leading-relaxed">
                  Create powerful workflows that connect your favorite tools and services. From simple data transfers to complex multi-step processes, VibCod makes automation accessible to everyone.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#3bbced] rounded-full"></div>
                    <p className="text-[#E0F7FA]/70">Connect Google Drive, Sheets, Docs, and more</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#3bbced] rounded-full"></div>
                    <p className="text-[#E0F7FA]/70">Integrate with GitHub, Notion, and Slack</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#3bbced] rounded-full"></div>
                    <p className="text-[#E0F7FA]/70">Share and sell your automations in our community</p>
                  </div>
                </div>
                <div className="mt-8">
                  <button className="px-8 py-4 bg-gradient-to-r from-[#3bbced] to-[#30368d] text-white font-bold rounded-xl hover:scale-105 transition-transform duration-300 shadow-lg">
                    Get Early Access
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CSS Animations */}
        <style jsx>{`
          @keyframes shine {
            0% { transform: translateX(-100%) skewX(12deg); }
            100% { transform: translateX(200%) skewX(12deg); }
          }
          .animate-shine {
            animation: shine 3s infinite;
          }
          
          @keyframes spin-clockwise {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          
          @keyframes spin-counter-clockwise {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(-360deg); }
          }
          
          @keyframes orbit-rgb-glow {
            0% { 
              border-color: #3bbced;
              box-shadow: 0 0 20px rgba(59, 188, 237, 0.8), inset 0 0 20px rgba(59, 188, 237, 0.3);
            }
            33% { 
              border-color: #30368d;
              box-shadow: 0 0 20px rgba(48, 54, 141, 0.8), inset 0 0 20px rgba(48, 54, 141, 0.3);
            }
            66% { 
              border-color: #2d86c4;
              box-shadow: 0 0 20px rgba(45, 134, 196, 0.8), inset 0 0 20px rgba(45, 134, 196, 0.3);
            }
            100% { 
              border-color: #3bbced;
              box-shadow: 0 0 20px rgba(59, 188, 237, 0.8), inset 0 0 20px rgba(59, 188, 237, 0.3);
            }
          }
          
          @keyframes orbit-rgb-glow-inner {
            0% { 
              border-color: #30368d;
              box-shadow: 0 0 15px rgba(48, 54, 141, 0.8), inset 0 0 15px rgba(48, 54, 141, 0.4);
            }
            33% { 
              border-color: #2d86c4;
              box-shadow: 0 0 15px rgba(45, 134, 196, 0.8), inset 0 0 15px rgba(45, 134, 196, 0.4);
            }
            66% { 
              border-color: #3bbced;
              box-shadow: 0 0 15px rgba(59, 188, 237, 0.8), inset 0 0 15px rgba(59, 188, 237, 0.4);
            }
            100% { 
              border-color: #30368d;
              box-shadow: 0 0 15px rgba(48, 54, 141, 0.8), inset 0 0 15px rgba(48, 54, 141, 0.4);
            }
          }
          
          @keyframes pulse-glow-center {
            0% { 
              filter: drop-shadow(0 0 10px rgba(59, 188, 237, 0.6));
            }
            50% { 
              filter: drop-shadow(0 0 25px rgba(59, 188, 237, 1)) drop-shadow(0 0 35px rgba(48, 54, 141, 0.6));
            }
            100% { 
              filter: drop-shadow(0 0 10px rgba(59, 188, 237, 0.6));
            }
          }
          
          .animate-spin-clockwise {
            animation: spin-clockwise 20s linear infinite;
          }
          
          .animate-spin-counter-clockwise {
            animation: spin-counter-clockwise 15s linear infinite;
          }
          
          .animate-pulse-glow-center {
            animation: pulse-glow-center 2s ease-in-out infinite;
          }
        `}</style>
      </div>
      <Footer />
    </>
  )
}
