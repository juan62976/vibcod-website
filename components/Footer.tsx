'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import CookieConsent from '@/components/CookieConsent';

const Footer: React.FC = () => {
  const [showCookieSettings, setShowCookieSettings] = useState(false);
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <footer className="relative w-full bg-black footer-container">
      <style jsx>{`
        .footer-container {
          position: relative;
          overflow: hidden;
        }
        
        .footer-content {
          position: relative;
          z-index: 1;
        }
        
        @keyframes illuminate {
          0% {
            background-position: -200% 0;
          }
          50% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }
        
        .vibcod-text {
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.1) 0%,
            rgba(255, 255, 255, 0.1) 30%,
            rgba(255, 255, 255, 0.8) 50%,
            rgba(255, 255, 255, 0.1) 70%,
            rgba(255, 255, 255, 0.1) 100%
          );
          background-size: 200% 100%;
          background-clip: text;
          -webkit-background-clip: text;
          animation: illuminate 4s infinite ease-in-out;
        }
      `}</style>
      {/* Gradient background (comentado por solicitud) */}
      {/**
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#000000] via-[#1a1a3a] to-[#2c4e95]"></div>
        <div className="absolute inset-0 opacity-80">
          <div className="absolute top-0 left-[10%] w-[60%] h-[40%] rounded-full blur-[80px] bg-[#3bbced] opacity-30"></div>
          <div className="absolute bottom-[20%] right-[5%] w-[40%] h-[40%] rounded-full blur-[80px] bg-[#30a2d9] opacity-40"></div>
          <div className="absolute top-[30%] right-[20%] w-[30%] h-[30%] rounded-full blur-[70px] bg-[#3bbced] opacity-30"></div>
          <div className="absolute bottom-[10%] left-[20%] w-[30%] h-[30%] rounded-full blur-[70px] bg-[#2d86c4] opacity-35"></div>
        </div>
      </div>
      */}

      {/* Main footer content */}
      <div className="relative z-10 w-full max-w-full px-4 sm:px-6 lg:px-8 py-20 md:py-28 footer-content">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-10 md:gap-x-20">
          {/* Column 1: Company & Logo */}
          <div className="space-y-6">
            <div className="flex items-center">
              <Image 
                src="/images/vibcod-logo.png" 
                alt="VibCod Logo" 
                width={48} 
                height={48} 
                className="mr-3" 
              />
              <span className="text-2xl font-bold text-white">VibCod</span>
            </div>
            <p className="text-[#E0F7FA]/80">Revolutionizing Automation with AI</p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a href="https://reddit.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#3bbced] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#3bbced] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#3bbced] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://discord.gg/vibcod"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#3bbced] transition-colors"
                aria-label="Discord"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Platform / Product */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Platform</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/" className={`text-white font-medium ${isActive('/') ? 'font-bold scale-105' : ''} transition-all`}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/pricing" className={`text-white font-medium ${isActive('/pricing') ? 'font-bold scale-105' : ''} transition-all`}>
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/waitlist" className={`text-white font-medium ${isActive('/waitlist') ? 'font-bold scale-105' : ''} transition-all`}>
                  Get Early Access
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Resources</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/resources" className={`text-white font-medium ${isActive('/resources') ? 'font-bold scale-105' : ''} transition-all`}>
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Company / Community */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Company</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/about" className={`text-white font-medium ${isActive('/about') ? 'font-bold scale-105' : ''} transition-all`}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/community" className={`text-white font-medium ${isActive('/community') ? 'font-bold scale-105' : ''} transition-all`}>
                  Community
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Sub-Footer */}
      <div className="relative z-10 border-t border-white/10 footer-content">
        <div className="w-full max-w-full px-4 sm:px-6 lg:px-8 py-6 md:py-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-[#E0F7FA]/60 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} VibCod. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm">
            <Link href="/privacy-policy" className={`text-white font-medium ${isActive('/privacy-policy') ? 'font-bold scale-105' : ''} transition-all`}>
              Privacy Policy
            </Link>
            <Link href="/terms-of-use" className={`text-white font-medium ${isActive('/terms-of-use') ? 'font-bold scale-105' : ''} transition-all`}>
              Terms of Use
            </Link>
            <Link href="/fair-use-policy" className={`text-white font-medium ${isActive('/fair-use-policy') ? 'font-bold scale-105' : ''} transition-all`}>
              Fair Use
            </Link>
            <button
  onClick={() => setShowCookieSettings(true)}
  aria-label="Cookie Settings"
  className="group"
  style={{ background: 'none', border: 'none', padding: 0, margin: 0, lineHeight: 0, cursor: 'pointer' }}
>
  <svg
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px" y="0px"
    viewBox="0 0 120.23 122.88"
    style={{ width: 28, height: 28, display: 'block' }}
    xmlSpace="preserve"
    className="transition-colors duration-200 fill-white group-hover:fill-[#3bbced]"
  >
    <style type="text/css">{`.st0{fill-rule:evenodd;clip-rule:evenodd;}`}</style>
    <g>
      <path
        className="st0"
        d="M98.18,0c3.3,0,5.98,2.68,5.98,5.98c0,3.3-2.68,5.98-5.98,5.98c-3.3,0-5.98-2.68-5.98-5.98 C92.21,2.68,94.88,0,98.18,0L98.18,0z M99.78,52.08c5.16,7.7,11.69,10.06,20.17,4.85c0.28,2.9,0.35,5.86,0.2,8.86 c-1.67,33.16-29.9,58.69-63.06,57.02C23.94,121.13-1.59,92.9,0.08,59.75C1.74,26.59,30.95,0.78,64.1,2.45 c-2.94,9.2-0.45,17.37,7.03,20.15C64.35,44.38,79.49,58.63,99.78,52.08L99.78,52.08z M30.03,47.79c4.97,0,8.99,4.03,8.99,8.99 s-4.03,8.99-8.99,8.99c-4.97,0-8.99-4.03-8.99-8.99S25.07,47.79,30.03,47.79L30.03,47.79z M58.35,59.25c2.86,0,5.18,2.32,5.18,5.18 c0,2.86-2.32,5.18-5.18,5.18c-2.86,0-5.18-2.32-5.18-5.18C53.16,61.57,55.48,59.25,58.35,59.25L58.35,59.25z M35.87,80.59 c3.49,0,6.32,2.83,6.32,6.32c0,3.49-2.83,6.32-6.32,6.32c-3.49,0-6.32-2.83-6.32-6.32C29.55,83.41,32.38,80.59,35.87,80.59 L35.87,80.59z M49.49,32.23c2.74,0,4.95,2.22,4.95,4.95c0,2.74-2.22,4.95-4.95,4.95c-2.74,0-4.95-2.22-4.95-4.95 C44.54,34.45,46.76,32.23,49.49,32.23L49.49,32.23z M76.39,82.8c4.59,0,8.3,3.72,8.3,8.3c0,4.59-3.72,8.3-8.3,8.3 c-4.59,0-8.3-3.72-8.3-8.3C68.09,86.52,71.81,82.8,76.39,82.8L76.39,82.8z M93.87,23.1c3.08,0,5.58,2.5,5.58,5.58 c0,3.08-2.5,5.58-5.58,5.58s-5.58-2.5-5.58-5.58C88.29,25.6,90.79,23.1,93.87,23.1L93.87,23.1z"
      />
    </g>
  </svg>
</button>
          </div>
        </div>
      </div>

      {/* Nueva sección - Logo y nombre grande como Ardor */}
      <div className="relative w-full bg-black py-16 md:py-24 overflow-x-hidden">
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center md:items-center gap-8 md:gap-12">
          {/* Logo a la izquierda */}
          <div className="flex-shrink-0 flex items-center justify-center w-full md:w-auto">
            <Image 
              src="/images/vibcod-logo.png" 
              alt="VibCod Logo" 
              width={180} 
              height={180}
              className="w-[120px] sm:w-[160px] md:w-[220px] lg:w-[300px] xl:w-[380px] h-auto"
            />
          </div>
          {/* Texto VibCod grande - responsivo y sin padding artificial */}
          <div className="flex-1 flex items-center justify-center w-full min-w-0">
            <h2 className="text-5xl sm:text-7xl md:text-9xl lg:text-[11rem] xl:text-[14rem] font-bold text-white select-none vibcod-text leading-none text-center md:text-left break-words w-full overflow-visible md:whitespace-nowrap md:max-w-[calc(100vw-420px)] lg:max-w-[calc(100vw-520px)] xl:max-w-[calc(100vw-600px)]">
              VibCod
            </h2>
          </div>
        </div>
      </div>

      {/* Cookie Settings Modal */}
      {showCookieSettings && (
        <CookieConsent 
          showModal={true} 
          onClose={() => setShowCookieSettings(false)} 
        />
      )}
    </footer>
  );
};

export default Footer;
