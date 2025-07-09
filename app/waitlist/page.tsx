"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabaseClient"

export default function WaitlistPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [country, setCountry] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [processes, setProcesses] = useState("")
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    console.log("Sending to Supabase:", { name, email, processes, country })

    const { error, data } = await supabase.from("waitlist_vidcod").insert([
      {
        name,
        email,
        processes,
        country,
      },
    ])

    console.log("Supabase response:", { error, data })

    setLoading(false)

    if (!error) {
      setSuccess(true)
    } else {
      alert("There was an error saving your data. Please try again.")
    }
  }

  return (
    <div className="flex h-screen max-h-screen overflow-hidden">
      {/* Left side - Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-12 lg:px-20 py-6 bg-white overflow-y-auto">
        <div className="max-w-md mx-auto w-full">
          {/* Logo for mobile */}
          <div className="flex items-center gap-3 mb-8 lg:hidden">
            <Image src="/images/vibcod-logo.png" alt="VibCod Logo" width={40} height={40} />
            <h3 className="text-2xl font-light tracking-wider text-gray-800">VibCod</h3>
          </div>

          <h1 className="text-2xl font-bold mb-1 text-gray-900">Join the VibCod Waitlist</h1>
          <p className="text-gray-600 mb-4"> Effortlessly automate your MCP flows without code. Let AI handle the complexity while you focus on your ideas.</p>

          {success ? (
            <div className="bg-[#3BACB6]/10 border border-[#3BACB6]/30 rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-[#3BACB6]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-[#3BACB6]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">You’ve joined the waitlist!</h3>
              <p className="text-gray-600 mb-4">
              Thanks for joining VibCod — you’ll be among the first to access our beta. We’ll keep you posted with updates.
              </p>
              <Link href="/" className="inline-block text-[#3BACB6] hover:text-[#1E5799] font-medium transition-colors">
                Return to homepage
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3BACB6] focus:border-transparent transition-all"
                  placeholder="Name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3BACB6] focus:border-transparent transition-all"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="processes" className="block text-sm font-medium text-gray-700 mb-1">
                  What processes would you like to automate?
                </label>
                <input
                  id="processes"
                  type="text"
                  value={processes}
                  onChange={(e) => setProcesses(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3BACB6] focus:border-transparent transition-all"
                  placeholder="Describe your automation needs"
                  required
                />
              </div>

              <div>
                <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Country/Region
                </label>
                <div className="relative">
                  <select
                    id="country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3BACB6] focus:border-transparent transition-all appearance-none bg-white"
                    required
                  >
                    <option value="" disabled>
                      Select country
                    </option>
                    <option value="us">United States</option>
                    <option value="ca">Canada</option>
                    <option value="mx">Mexico</option>
                    <option value="uk">United Kingdom</option>
                    <option value="es">Spain</option>
                    <option value="fr">France</option>
                    <option value="de">Germany</option>
                    <option value="br">Brazil</option>
                    <option value="ar">Argentina</option>
                    <option value="co">Colombia</option>
                    <option value="other">Other</option>
                  </select>
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                <p className="mt-2 text-xs text-gray-500">
                  For compliance reasons, we're required to collect country information to send you occasional updates
                  and announcements.
                </p>
              </div>

              {/* Indicator with VibCod brand colors */}
              <div className="flex items-center gap-2 text-sm text-[#3BACB6]">
                <div className="w-5 h-5 bg-[#3BACB6]/10 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-[#3BACB6]" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span>Your workflow automation journey awaits</span>
              </div>

              <div className="pt-1">
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full px-6 py-4 rounded-xl font-bold text-white text-xl transition-transform duration-300 hover:scale-105 relative overflow-hidden ${
                    loading ? "bg-gray-400" : ""
                  }`}
                  style={!loading ? {
                    boxShadow: `
                      0 0 15px rgba(59, 188, 237, 0.3),
                      0 0 30px rgba(59, 188, 237, 0.2),
                      inset 0 0 30px rgba(59, 188, 237, 0.1)
                    `,
                    border: '1px solid rgba(59, 188, 237, 0.5)'
                  } : undefined}
                >
                  {!loading && (
                    <>
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
                    </>
                  )}
                  {loading ? (
                    <div className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Processing...
                    </div>
                  ) : (
                    <>
                      <div className="flex items-center justify-center gap-2 relative z-10">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>Join the Waitlist</span>
                      </div>
                      <style jsx>{`
                        @keyframes shine {
                          0% { transform: translateX(-100%) skewX(12deg); }
                          100% { transform: translateX(200%) skewX(12deg); }
                        }
                        .animate-shine {
                          animation: shine 3s infinite;
                        }
                      `}</style>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 pt-1">
                <span className="text-gray-500">Or continue with</span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  disabled
                  className="flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-400 cursor-not-allowed"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span>Login with GitHub</span>
                </button>
                <button
                  type="button"
                  disabled
                  className="flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-400 cursor-not-allowed"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                    <path d="M1 1h22v22H1z" fill="none" />
                  </svg>
                  <span>Login with Google</span>
                </button>
              </div>

              <div className="text-center text-xs text-gray-500 mt-2">
                <span>
                  Soon you will be able to sign in with your account. For now, you can only join the waitlist.
                </span>
              </div>

              <div className="text-center text-sm text-gray-600 mt-3">
                <p>
                  By creating your account, you agree to our{" "}
                  <Link href="#" className="text-[#3BACB6] hover:text-[#1E5799] font-medium">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="#" className="text-[#3BACB6] hover:text-[#1E5799] font-medium">
                    Privacy Notice
                  </Link>
                  .
                </p>
              </div>


            </form>
          )}
        </div>
      </div>

      {/* Right side - Gradient background with VibCod Copilot */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        {/* Dark background with dots */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundColor: '#0c0c0c',
            backgroundImage: `radial-gradient(#1c1c22 1px, transparent 1px)`,
            backgroundSize: '20px 20px',
          }}
        />

        {/* Animated Flow Background */}
        <div className="absolute inset-0 z-5">
          <div className="absolute inset-0 overflow-hidden z-10 pointer-events-none">
            {/* Flow Path 1 - Top */}
            <div
              className="flow-path absolute top-[5%] -left-[200px] w-[800px] h-[100px] opacity-30"
              style={{
                background: "linear-gradient(90deg, transparent 0%, #3BACB6 20%, #1E5799 50%, #4C63D2 80%, transparent 100%)",
                borderRadius: "60px",
                transform: "rotate(-5deg)",
                filter: "blur(2px)",
                animation: "flow-animation 20s linear infinite",
              }}
            />
            {/* Flow Path 2 - Upper Middle */}
            <div
              className="flow-path absolute top-[25%] -left-[300px] w-[600px] h-[80px] opacity-25"
              style={{
                background: "linear-gradient(90deg, transparent 0%, #E0F7FA 15%, #3BACB6 40%, #1E5799 70%, transparent 100%)",
                borderRadius: "40px",
                transform: "rotate(3deg)",
                filter: "blur(1.5px)",
                animation: "flow-animation 25s linear infinite",
                animationDelay: "5s",
              }}
            />
            {/* Flow Path 3 - Middle */}
            <div
              className="flow-path absolute top-[45%] -left-[150px] w-[500px] h-[60px] opacity-20"
              style={{
                background: "linear-gradient(90deg, transparent 0%, #47A8BD 25%, #2563EB 60%, #5B21B6 85%, transparent 100%)",
                borderRadius: "30px",
                transform: "rotate(-2deg)",
                filter: "blur(1px)",
                animation: "flow-animation 30s linear infinite",
                animationDelay: "10s",
              }}
            />
            {/* Flow Path 4 - Lower Middle */}
            <div
              className="flow-path absolute top-[65%] -left-[250px] w-[700px] h-[90px] opacity-25"
              style={{
                background: "linear-gradient(90deg, transparent 0%, #3BACB6 20%, #2563EB 60%, #5B21B6 85%, transparent 100%)",
                borderRadius: "50px",
                transform: "rotate(2deg)",
                filter: "blur(1.8px)",
                animation: "flow-animation 22s linear infinite",
                animationDelay: "3s",
              }}
            />
            {/* Flow Path 5 - Bottom */}
            <div
              className="flow-path absolute top-[85%] -left-[180px] w-[550px] h-[70px] opacity-30"
              style={{
                background: "linear-gradient(90deg, transparent 0%, #E0F7FA 15%, #3BACB6 40%, #1E5799 80%, transparent 100%)",
                borderRadius: "35px",
                transform: "rotate(-3deg)",
                filter: "blur(1.3px)",
                animation: "flow-animation 28s linear infinite",
                animationDelay: "8s",
              }}
            />
          </div>
        </div>

        {/* Logo and brand */}
        <div className="absolute top-6 right-6 flex items-center gap-2 z-20">
          <Image src="/images/vibcod-logo.png" alt="VibCod Logo" width={36} height={36} className="opacity-90" />
          <h3 className="text-xl font-light tracking-wider text-white">VibCod</h3>
        </div>

        {/* VibCod Copilot Chat Interface */}
        <div className="absolute inset-0 flex flex-col justify-center items-center z-20 px-12">
          <div className="w-full max-w-md">
            <div className="mb-4 flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <Image
                  src="/images/vibcod-logo.png"
                  alt="VibCod Copilot"
                  width={20}
                  height={20}
                  className="opacity-90"
                />
              </div>
              <span className="text-white font-medium">VibCod Copilot</span>
            </div>

            {/* Chat messages */}
            <div className="space-y-4">
              {/* Bot message */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center flex-shrink-0 mt-1 shadow-xl shadow-[#3BACB6]/10">
                  <Image
                    src="/images/vibcod-logo.png"
                    alt="VibCod Copilot"
                    width={20}
                    height={20}
                    className="opacity-90"
                  />
                </div>
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl rounded-tl-none p-4 text-white max-w-xs shadow-lg shadow-black/30 hover:shadow-[#3BACB6]/10 transition-all duration-300">
                  <p className="text-white/90 font-light">Welcome to VibCod! How can I help you automate your workflows today?</p>
                  <div className="text-xs text-white/50 mt-1">01:20 AM, 30 May 25</div>
                </div>
              </div>

              {/* User message */}
              <div className="flex items-start gap-3 justify-end">
                <div className="bg-white/10 backdrop-blur-md border border-[#3BACB6]/20 rounded-2xl rounded-tr-none p-4 text-white max-w-xs shadow-lg shadow-black/30 hover:shadow-[#3BACB6]/10 transition-all duration-300">
                  <p className="text-white/90 font-light">
                    I'd like to create an automation that monitors our customer support tickets and generates weekly summaries with insights on common issues using AI.
                  </p>
                  <div className="text-xs text-white/50 mt-1">01:22 AM, 30 May 25</div>
                </div>
                <div className="w-8 h-8 rounded-full border border-[#3BACB6]/30 bg-[#3BACB6]/10 backdrop-blur-md flex items-center justify-center flex-shrink-0 mt-1 shadow-xl shadow-[#3BACB6]/10">
                  <span className="text-white/90 text-sm">U</span>
                </div>
              </div>

              {/* Bot message */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center flex-shrink-0 mt-1 shadow-xl shadow-[#3BACB6]/10">
                  <Image
                    src="/images/vibcod-logo.png"
                    alt="VibCod Copilot"
                    width={20}
                    height={20}
                    className="opacity-90"
                  />
                </div>
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl rounded-tl-none p-4 text-white max-w-xs shadow-lg shadow-black/30 hover:shadow-[#3BACB6]/10 transition-all duration-300">
                  <p className="text-white/90 font-light">Perfect! I can help you build that with our MCP A2A platform. We'll use AI agents to analyze ticket sentiment, identify patterns, and generate concise reports automatically. Ready to get started?</p>
                  <div className="text-xs text-white/50 mt-1">01:22 AM, 30 May 25</div>
                </div>
              </div>
            </div>
          </div>


        </div>

        {/* Animation keyframes */}
        <style jsx>{`
          @keyframes flow-animation {
            0% {
              transform: translateX(-100%) var(--rotation, rotate(0deg));
            }
            100% {
              transform: translateX(100vw) var(--rotation, rotate(0deg));
            }
          }
        `}</style>
      </div>
    </div>
  )
}
