'use client';

import React from 'react';
import NavBarTriangular from '@/components/NavBarTriangular';
import Footer from '@/components/Footer';
import FondoAnimado from '@/components/FondoAnimado';

const PrivacyPolicyPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-black relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <FondoAnimado />
      </div>
      <NavBarTriangular />
      
      <div className="container mx-auto px-6 py-16 z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Privacy Policy</h1>
        
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 md:p-8 text-white/90 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p>At VibCod, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you use our website and services.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <h3 className="text-xl font-medium mb-2">Personal Information</h3>
            <p>We may collect personal information that you voluntarily provide to us, such as your name, email address, and contact details when you sign up for our services, subscribe to our newsletter, or contact our support team.</p>
            
            <h3 className="text-xl font-medium mt-4 mb-2">Usage Data</h3>
            <p>We automatically collect certain information when you visit our website, including your IP address, browser type, operating system, referring URLs, and information about how you interact with our website. This data helps us understand how users navigate our site and improve our services.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide and maintain our services</li>
              <li>To notify you about changes to our services</li>
              <li>To allow you to participate in interactive features of our website</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information so that we can improve our services</li>
              <li>To monitor the usage of our services</li>
              <li>To detect, prevent and address technical issues</li>
              <li>To provide you with news, special offers and general information about other goods, services and events which we offer</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Cookies and Tracking Technologies</h2>
            <p>We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier.</p>
            <p className="mt-2">For more detailed information about the cookies we use and how you can manage them, please see our <a href="/cookie-policy" className="text-[#3bbced] hover:underline">Cookie Policy</a>.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Data Sharing and Disclosure</h2>
            <p>We may share your information in the following situations:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>With service providers who perform services on our behalf</li>
              <li>To comply with legal obligations</li>
              <li>To protect and defend our rights or property</li>
              <li>With your consent or at your direction</li>
              <li>If we are involved in a merger, acquisition, or sale of all or a portion of our assets</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
            <p>The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal data, we cannot guarantee its absolute security.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
            <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>The right to access the personal information we hold about you</li>
              <li>The right to request correction of inaccurate personal information</li>
              <li>The right to request deletion of your personal information</li>
              <li>The right to object to processing of your personal information</li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
            <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this Privacy Policy.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at:</p>
            <p className="mt-2">Email: privacy@vibcod.com</p>
          </section>
          
          <div className="text-sm text-white/60 mt-8">
            Last Updated: June 2, 2025
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
};

export default PrivacyPolicyPage;
