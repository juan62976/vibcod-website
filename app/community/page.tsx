'use client';

import React, { useState, useRef } from 'react';
import NavBarTriangular from '@/components/NavBarTriangular';
import Footer from '@/components/Footer';
import FondoAnimado from '@/components/FondoAnimado';
import { CheckCircle2 } from 'lucide-react';

const CommunityPage = () => {
  const academyFeatures = [
    {
      title: 'Free Online Classes',
      description: 'Dive deep into the world of MCP and A2A with our expert-led sessions. Learn the fundamentals, explore advanced techniques, and discover best practices for building powerful automations.',
    },
    {
      title: 'Hands-on Workshops',
      description: 'Get practical experience with our interactive workshops. Our team will guide you step-by-step, showing you how to translate your natural language ideas into seamless workflows on the VibCod playground.',
    },
    {
      title: 'Getting Started Guides',
      description: 'From your first automation to optimizing complex multi-agent systems, our comprehensive guides will provide clear instructions and helpful tips to ensure your success.',
    },
    {
      title: 'Live Q&A Sessions',
      description: 'Directly engage with the VibCod team and get your questions answered in real-time. Learn from our experts and connect with fellow users.',
    },
  ];

  const events = [
      {
        date: 'June 15, 2025',
        title: 'VibCod Launch Webinar',
        description: 'Join us for the official launch of VibCod. Learn about our platform, features, and roadmap.',
      },
      {
        date: 'June 22, 2025',
        title: 'AI Agent Building Workshop',
        description: 'Learn how to build your first AI agent using VibCod. Hands-on workshop for beginners.',
      },
      {
        date: 'July 5, 2025',
        title: 'Community Showcase',
        description: 'Community members showcase their projects built with VibCod. Get inspired and share your work.',
      },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <NavBarTriangular />
      <div className="py-20 px-4 relative">
        <FondoAnimado />
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-slate-200 to-slate-300 bg-clip-text text-transparent mb-6">
              VibCod Community
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Join our growing community of developers, creators, and AI enthusiasts. Connect, collaborate, and create the future together.
            </p>
          </div>

          {/* VibCod Academy Section */}
          <div className="max-w-5xl mx-auto mb-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Learn and Grow with VibCod Academy</h2>
              <p className="text-lg text-slate-400 max-w-3xl mx-auto">
                We believe in empowering you to get the most out of AI-powered automation. That's why we're building the VibCod Academy, a completely free resource designed to help you master our platform and unlock its full potential.
              </p>
            </div>
            <p className="text-center text-xl font-semibold text-white mb-8">Here's what's coming soon:</p>
            <div className="grid md:grid-cols-2 gap-8">
              {academyFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#3bbced]/20 flex items-center justify-center mt-1 flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-[#3bbced]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-lg mb-2">{feature.title}</h3>
                    <p className="text-slate-400 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Community Platforms Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-24 max-w-4xl mx-auto">
  {/* --- Community Forums Card with Mouse Aura --- */}
  <CardWithAura
    title="Community Forums"
    description="Engage in discussions, share ideas, ask questions, and get help from other VibCod users and our team."
    button={{ text: 'Coming Soon', className: 'w-full bg-gradient-to-r from-[#3bbced]/80 to-[#2d86c4]/80 text-white py-3 rounded-xl font-medium transition-all duration-300 shadow-lg border border-[#3BACB6]/30' }}
  />
  {/* --- Discord Server Card with Mouse Aura --- */}
  <CardWithAura
    title="Discord Server"
    description="Join our Discord community for real-time discussions, events, and to connect with other VibCod enthusiasts."
    button={{ text: 'Join Discord', className: 'w-full bg-gradient-to-r from-[#3bbced] to-[#2d86c4] text-white py-3 rounded-xl font-medium transition-all duration-300 shadow-lg border border-[#3BACB6]/30 hover:shadow-cyan-500/50' }}
  />
            
          </div>

          {/* Upcoming Events Section */}
          <div className="max-w-4xl mx-auto mb-24">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Upcoming Community Events</h2>
              <ul className="space-y-6">
                {events.map((event, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    {/* Viñeta estilo PriceCard */}
                    <div className="w-5 h-5 rounded-full bg-[#3bbced]/20 flex items-center justify-center mt-1 flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-[#3bbced]"></div>
                    </div>
                    <div>
                      <div className="text-[#3bbced] font-semibold text-sm mb-1">{event.date}</div>
                      <div className="text-white font-bold text-base mb-1">{event.title}</div>
                      <div className="text-slate-400 text-sm leading-relaxed">{event.description}</div>
                    </div>
                  </li>
                ))}
              </ul>
          </div>

          {/* Stay Connected Section */}
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">Stay Connected</h2>
            <p className="text-[#E0F7FA]/80 mb-6">
              ¡Pronto anunciaremos nuestras clases y eventos en nuestras redes sociales! Síguenos y mantente pendiente para no perderte ninguna novedad de la comunidad VibCod.
            </p>
            <div className="flex justify-center gap-6 mt-4">
              <a
                href="https://reddit.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group transition-transform transform-gpu hover:scale-110 hover:shadow-lg duration-200 focus:outline-none"
                aria-label="Reddit"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-8 w-8 text-white transition-colors duration-200 group-hover:text-[#3bbced] group-focus:text-[#3bbced]">
                  <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group transition-transform transform-gpu hover:scale-110 hover:shadow-lg duration-200 focus:outline-none"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-8 w-8 text-white transition-colors duration-200 group-hover:text-[#3bbced] group-focus:text-[#3bbced]">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-1.337-.025-3.065-1.868-3.065-1.868 0-2.154 1.459-2.154 2.968v5.701h-3v-11h2.881v1.501h.041c.401-.76 1.379-1.561 2.838-1.561 3.036 0 3.597 2.001 3.597 4.599v6.461z" />
                </svg>
              </a>
              <a
                href="https://twitter.com/vibcod"
                target="_blank"
                rel="noopener noreferrer"
                className="group transition-transform transform-gpu hover:scale-110 hover:shadow-lg duration-200 focus:outline-none"
                aria-label="Twitter"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-8 w-8 text-white transition-colors duration-200 group-hover:text-[#3bbced] group-focus:text-[#3bbced]">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://discord.com/invite/XXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="group transition-transform transform-gpu hover:scale-110 hover:shadow-lg duration-200 focus:outline-none"
                aria-label="Discord"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white transition-colors duration-200 group-hover:text-[#3bbced] group-focus:text-[#3bbced]">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
};

// --- CardWithAura Component ---
const CardWithAura = ({ title, description, button }: { title: string, description: string, button: { text: string, className: string } }) => {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [isHover, setIsHover] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  return (
    <div
      ref={cardRef}
      className="relative p-8 rounded-2xl bg-black/90 border border-[#3BACB6]/30 shadow-2xl backdrop-blur-md text-center group overflow-hidden transition-all duration-300 hover:scale-[1.025] hover:shadow-cyan-500/40"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      style={{ cursor: 'pointer' }}
    >
      {/* Aura/Glow background */}
      <div className="absolute inset-0 z-0 opacity-50 rounded-2xl overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-[10%] w-[60%] h-[40%] rounded-full blur-[50px] bg-[#3bbced] opacity-20"></div>
        <div className="absolute bottom-[20%] right-[5%] w-[40%] h-[40%] rounded-full blur-[50px] bg-[#30a2d9] opacity-30"></div>
      </div>
      <div
        className="absolute inset-0 rounded-2xl transition-opacity duration-300 pointer-events-none"
        style={{
          opacity: isHover ? 0.15 : 0,
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, white, transparent 55%)`
        }}
      ></div>
      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
        <p className="text-[#E0F7FA]/80 mb-6">{description}</p>
        <button className={button.className}>{button.text}</button>
      </div>
    </div>
  );
};

// --- Mejor diseño para Upcoming Community Events ---
const TimelineEvent = ({ date, title, description, isLast }: { date: string, title: string, description: string, isLast: boolean }) => (
  <div className="flex items-start relative group mb-8 md:mb-12">
    {/* Timeline vertical line */}
    <div className="flex flex-col items-center mr-8 min-w-[40px]">
      {/* Círculo con gradiente, glow e ícono */}
      <div className="relative z-10 flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-[#3bbced] via-[#30a2d9] to-[#1e90c6] border-4 border-white/20 shadow-[0_0_16px_3px_rgba(59,188,237,0.4)] transition-transform duration-300 group-hover:scale-110">
        <svg className="w-4 h-4 text-white drop-shadow" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <rect x="3" y="5" width="18" height="16" rx="2" className="stroke-current"/>
          <path d="M16 3v4M8 3v4M3 9h18" className="stroke-current"/>
        </svg>
        <span className="absolute w-12 h-12 rounded-full bg-[#3bbced]/30 blur-2xl opacity-60 pointer-events-none"></span>
      </div>
      {/* Línea vertical con gradiente y glow */}
      {!isLast && (
        <div className="w-1 flex-1 min-h-[40px] bg-gradient-to-b from-[#3bbced]/70 via-[#30a2d9]/30 to-transparent mt-1 mb-1 shadow-[0_0_8px_2px_rgba(59,188,237,0.15)]"></div>
      )}
    </div>
    {/* Card de evento */}
    <div className="flex-1 bg-black/80 border border-[#3BACB6]/20 rounded-xl p-6 shadow-lg transition-all group-hover:border-[#3bbced]">
      <div className="text-[#3bbced] font-semibold mb-1 flex items-center gap-2">
        <svg className="w-4 h-4 text-[#3bbced]/80" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <rect x="3" y="5" width="18" height="16" rx="2" className="stroke-current"/>
          <path d="M16 3v4M8 3v4M3 9h18" className="stroke-current"/>
        </svg>
        {date}
      </div>
      <div className="text-white text-lg font-bold mb-2">{title}</div>
      <div className="text-slate-400">{description}</div>
    </div>
  </div>
);

export default CommunityPage;

