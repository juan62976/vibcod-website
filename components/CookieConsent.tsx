'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface CookieConsentProps {
  showModal?: boolean;
  onClose?: () => void;
}

interface CookiePreferences {
  necessary: boolean;
  preferences: boolean;
  analytics: boolean;
  marketing: boolean;
}

const CookieConsent: React.FC<CookieConsentProps> = ({ showModal = false, onClose }) => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(showModal);
  const [preferences, setPreferences] = useState<CookiePreferences>(() => {
    // Load from localStorage if exists
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('cookiePreferences');
      if (saved) return { ...JSON.parse(saved), necessary: true };
    }
    return {
      necessary: true, // Always true and cannot be changed
      preferences: true,
      analytics: true,
      marketing: false,
    };
  });

  // Check if cookie consent has been given previously
  useEffect(() => {
    const consentGiven = localStorage.getItem('cookieConsentGiven');
    if (!consentGiven && !showModal) {
      setShowBanner(true);
    }
    // Sync switches with localStorage if modal is opened
    if (showModal || showSettingsModal) {
      const saved = localStorage.getItem('cookiePreferences');
      if (saved) setPreferences({ ...JSON.parse(saved), necessary: true });
    }
    // Add Escape key handler for modal close
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && showSettingsModal) {
        setShowSettingsModal(false);
        setShowBanner(false);
        if (onClose) onClose();
      }
    };
    if (showSettingsModal) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
    // eslint-disable-next-line
  }, [showModal, showSettingsModal]);

  const handleAcceptAll = () => {
    const allTrue = {
      necessary: true,
      preferences: true,
      analytics: true,
      marketing: true,
    };
    setPreferences(allTrue);
    saveCookiePreferences(allTrue);
    closeBannerAndModal();
  };

  const handleSavePreferences = () => {
    saveCookiePreferences(preferences);
    closeBannerAndModal();
  };

  const saveCookiePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem('cookieConsentGiven', 'true');
    localStorage.setItem('cookiePreferences', JSON.stringify(prefs));
    // Here you would typically set actual cookies based on preferences
    // or trigger analytics/marketing scripts based on user consent
  };

  const closeBannerAndModal = () => {
    setShowBanner(false);
    setShowSettingsModal(false);
    if (onClose) onClose();
  };

  const openSettingsModal = () => {
    setShowSettingsModal(true);
    setShowBanner(false);
  };

  const handleToggleChange = (category: keyof CookiePreferences) => {
    if (category === 'necessary') return; // Cannot toggle necessary cookies
    setPreferences(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  return (
    <>
      {/* Initial Cookie Banner */}
      {showBanner && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-black bg-opacity-90 border-t border-[#3BACB6]/30 shadow-lg backdrop-blur-md">
          <div className="relative container mx-auto px-4 py-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
            <div className="absolute inset-0 opacity-40 overflow-hidden">
              <div className="absolute top-0 left-[10%] w-[60%] h-[100%] rounded-full blur-[50px] bg-[#3bbced] opacity-20"></div>
              <div className="absolute bottom-0 right-[5%] w-[40%] h-[100%] rounded-full blur-[50px] bg-[#30a2d9] opacity-30"></div>
            </div>
            <p className="text-[#E0F7FA]/90 text-sm md:text-base mb-4 md:mb-0 md:mr-6">
              We use cookies to enhance your experience, analyze site traffic and deliver personalized content. Read our{' '}
              <Link href="/cookie-policy" className="underline hover:text-[#3bbced]">
                Cookie Policy
              </Link>
              .
            </p>
            <div className="flex flex-col sm:flex-row gap-3 relative z-10">
              <button
  onClick={openSettingsModal}
  aria-label="Cookie Settings"
  className="flex items-center justify-center p-2 rounded-lg border border-[#3BACB6]/70 text-[#3bbced] bg-transparent hover:bg-gradient-to-r hover:from-[#0a0a20]/40 hover:to-[#1a2a4a]/40 hover:shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-[#3bbced]"
>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M19.428 15.341a1 1 0 01.342 1.362A9.004 9.004 0 017.297 4.23a1 1 0 011.36.342 1 1 0 01-.342 1.36A7.004 7.004 0 0020 12c0 1.07-.25 2.084-.572 3.003a1 1 0 01-1.36.338 1 1 0 01-.34-1.36zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1 14a1 1 0 112 0 1 1 0 01-2 0zm-2-4a1 1 0 112 0 1 1 0 01-2 0zm6 0a1 1 0 112 0 1 1 0 01-2 0z" />
  </svg>
</button>
              <button
                onClick={handleAcceptAll}
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#3bbced] to-[#2d86c4] text-white text-sm font-medium hover:from-[#3bbced]/90 hover:to-[#2d86c4]/90 hover:shadow-[0_0_10px_rgba(59,188,237,0.3)] transition-all"
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Cookie Settings Modal */}
      {showSettingsModal && (
        <div className="fixed bottom-0 right-0 z-50 p-4">
          <div className="bg-black bg-opacity-90 border border-[#3BACB6]/30 rounded-xl shadow-2xl w-full max-w-xs md:max-w-sm overflow-y-auto backdrop-blur-md">
            <div className="absolute inset-0 opacity-50 rounded-xl overflow-hidden">
              <div className="absolute top-0 left-[10%] w-[60%] h-[40%] rounded-full blur-[50px] bg-[#3bbced] opacity-20"></div>
              <div className="absolute bottom-[20%] right-[5%] w-[40%] h-[40%] rounded-full blur-[50px] bg-[#30a2d9] opacity-30"></div>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-lg font-bold text-white">Cookie Settings</h2>
                <button
                  onClick={() => {
                    setShowSettingsModal(false);
                    setShowBanner(false);
                    if (onClose) onClose();
                  }}
                  aria-label="Close cookie settings"
                  className="text-[#E0F7FA]/70 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#3bbced] rounded"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <p className="text-[#E0F7FA]/80 mb-4 text-xs">
                Manage your cookie preferences below. Read our{' '}
                <Link href="/cookie-policy" className="underline hover:text-[#3bbced]">
                  Cookie Policy
                </Link>
                .
              </p>

              {/* Cookie Categories */}
              <div className="space-y-2 mb-4 relative z-10">
                {/* Necessary Cookies */}
                <div className="p-2 rounded-lg bg-gradient-to-r from-[#0a0a20]/40 to-[#1a2a4a]/40 border border-[#3BACB6]/20 backdrop-blur-sm">
                  <div className="flex items-center justify-between">
                    <h3 className="text-white text-sm font-medium">Necessary</h3>
                    <div className="relative">
                      <div className="w-8 h-4 bg-gradient-to-r from-[#3bbced] to-[#2d86c4] rounded-full shadow-inner"></div>
                      <div className="absolute right-1 top-0.5 bg-white w-3 h-3 rounded-full shadow"></div>
                    </div>
                  </div>
                </div>

                {/* Preferences Cookies */}
                <div className="p-2 rounded-lg bg-gradient-to-r from-[#0a0a20]/30 to-[#1a2a4a]/30 border border-[#3BACB6]/10 hover:border-[#3BACB6]/30 transition-colors backdrop-blur-sm">
                  <div className="flex items-center justify-between">
                    <h3 className="text-white text-sm font-medium">Preferences</h3>
                    <button
                      onClick={() => handleToggleChange('preferences')}
                      className="relative inline-flex items-center cursor-pointer"
                    >
                      <div className={`w-8 h-4 ${preferences.preferences ? 'bg-gradient-to-r from-[#3bbced] to-[#2d86c4]' : 'bg-gray-700'} rounded-full shadow-inner transition-colors`}></div>
                      <div className={`absolute ${preferences.preferences ? 'right-1' : 'left-1'} top-0.5 bg-white w-3 h-3 rounded-full shadow transition-all`}></div>
                    </button>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="p-2 rounded-lg bg-gradient-to-r from-[#0a0a20]/30 to-[#1a2a4a]/30 border border-[#3BACB6]/10 hover:border-[#3BACB6]/30 transition-colors backdrop-blur-sm">
                  <div className="flex items-center justify-between">
                    <h3 className="text-white text-sm font-medium">Analytics</h3>
                    <button
                      onClick={() => handleToggleChange('analytics')}
                      className="relative inline-flex items-center cursor-pointer"
                    >
                      <div className={`w-8 h-4 ${preferences.analytics ? 'bg-gradient-to-r from-[#3bbced] to-[#2d86c4]' : 'bg-gray-700'} rounded-full shadow-inner transition-colors`}></div>
                      <div className={`absolute ${preferences.analytics ? 'right-1' : 'left-1'} top-0.5 bg-white w-3 h-3 rounded-full shadow transition-all`}></div>
                    </button>
                  </div>
                </div>

                {/* Marketing Cookies */}
                <div className="p-2 rounded-lg bg-gradient-to-r from-[#0a0a20]/30 to-[#1a2a4a]/30 border border-[#3BACB6]/10 hover:border-[#3BACB6]/30 transition-colors backdrop-blur-sm">
                  <div className="flex items-center justify-between">
                    <h3 className="text-white text-sm font-medium">Marketing</h3>
                    <button
                      onClick={() => handleToggleChange('marketing')}
                      className="relative inline-flex items-center cursor-pointer"
                    >
                      <div className={`w-8 h-4 ${preferences.marketing ? 'bg-gradient-to-r from-[#3bbced] to-[#2d86c4]' : 'bg-gray-700'} rounded-full shadow-inner transition-colors`}></div>
                      <div className={`absolute ${preferences.marketing ? 'right-1' : 'left-1'} top-0.5 bg-white w-3 h-3 rounded-full shadow transition-all`}></div>
                    </button>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end gap-2 relative z-10">
                <button
                  onClick={handleSavePreferences}
                  className="px-3 py-1.5 text-xs rounded-lg border border-[#3BACB6]/70 text-white font-medium hover:bg-gradient-to-r hover:from-[#0a0a20]/40 hover:to-[#1a2a4a]/40 hover:shadow-md transition-all"
                >
                  Save
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="px-3 py-1.5 text-xs rounded-lg bg-gradient-to-r from-[#3bbced] to-[#2d86c4] text-white font-medium hover:from-[#3bbced]/90 hover:to-[#2d86c4]/90 hover:shadow-[0_0_10px_rgba(59,188,237,0.3)] transition-all"
                >
                  Accept All
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsent;
