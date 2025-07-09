'use client';

import React from 'react';
import NavBarTriangular from '@/components/NavBarTriangular';
import Footer from '@/components/Footer';
import FondoAnimado from '@/components/FondoAnimado';

const TermsOfUsePage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-black relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <FondoAnimado />
      </div>
      <NavBarTriangular />
      
      <div className="container mx-auto px-6 py-16 z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Terms of Use</h1>
        
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 md:p-8 text-white/90 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Acceptance of Terms</h2>
            <p>By accessing and using the VibCod website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our website or services.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Use of Website and Services</h2>
            <h3 className="text-xl font-medium mb-2">Permitted Uses</h3>
            <p>You may use our website and services for lawful purposes and in accordance with these Terms. You agree to use our website and services only for their intended purposes.</p>
            
            <h3 className="text-xl font-medium mt-4 mb-2">Prohibited Conduct</h3>
            <p>You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Use our website or services in any way that violates any applicable federal, state, local, or international law or regulation</li>
              <li>Use our website to transmit or send unsolicited commercial communications</li>
              <li>Engage in any conduct that restricts or inhibits anyone's use or enjoyment of our website</li>
              <li>Attempt to gain unauthorized access to our website, user accounts, or computer systems</li>
              <li>Use any robot, spider, or other automatic device to access our website</li>
              <li>Introduce any viruses, Trojan horses, worms, or other harmful material to our website</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Intellectual Property Rights</h2>
            <p>The VibCod website and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by VibCod, its licensors, or other providers of such material and are protected by copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.</p>
            <p className="mt-2">You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our website without our prior written consent.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">User-Generated Content</h2>
            <p>Our website may allow you to post, link, store, share, and otherwise make available certain information, text, graphics, videos, or other material. You are responsible for the content you post and its legality, reliability, and appropriateness.</p>
            <p className="mt-2">By posting content on our website, you grant us the right to use, reproduce, modify, perform, display, distribute, and otherwise disclose to third parties any such material according to your account settings.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Disclaimers</h2>
            <p>Your use of our website and services is at your own risk. The website and services are provided on an "AS IS" and "AS AVAILABLE" basis, without any warranties of any kind, either express or implied.</p>
            <p className="mt-2">VibCod disclaims all warranties, express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
            <p>In no event will VibCod, its affiliates, or their licensors, service providers, employees, agents, officers, or directors be liable for damages of any kind, including but not limited to direct, indirect, special, incidental, consequential, or punitive damages, arising out of or in connection with your use of our website or services.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Indemnification</h2>
            <p>You agree to defend, indemnify, and hold harmless VibCod, its affiliates, licensors, and service providers, and its and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms of Use or your use of the website.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
            <p>These Terms of Use and any dispute or claim arising out of or in connection with them shall be governed by and construed in accordance with the laws of the jurisdiction in which VibCod is established, without giving effect to any choice or conflict of law provision or rule.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
            <p>We may revise and update these Terms of Use from time to time at our sole discretion. All changes are effective immediately when we post them. Your continued use of the website following the posting of revised Terms of Use means that you accept and agree to the changes.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p>If you have any questions about these Terms of Use, please contact us at:</p>
            <p className="mt-2">Email: legal@vibcod.com</p>
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

export default TermsOfUsePage;
