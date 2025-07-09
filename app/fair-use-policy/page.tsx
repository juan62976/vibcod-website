'use client';

import React from 'react';
import NavBarTriangular from '@/components/NavBarTriangular';
import Footer from '@/components/Footer';
import FondoAnimado from '@/components/FondoAnimado';

const FairUsePolicyPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-black relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <FondoAnimado />
      </div>
      <NavBarTriangular />
      
      <div className="container mx-auto px-6 py-16 z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Fair Use Policy</h1>
        
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 md:p-8 text-white/90 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Purpose</h2>
            <p>This Fair Use Policy is designed to ensure that VibCod services are used responsibly and ethically. Our goal is to provide a high-quality experience for all users while protecting our platform and community from misuse.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Prohibited Activities</h2>
            <p>When using VibCod services, you agree not to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Engage in any illegal activities or violate any applicable laws or regulations</li>
              <li>Send spam or unsolicited messages to other users or through our platform</li>
              <li>Distribute malware, viruses, or any other malicious code</li>
              <li>Infringe on intellectual property rights, including copyright, trademark, or patent rights</li>
              <li>Harass, bully, intimidate, or defame other users</li>
              <li>Attempt to reverse engineer, decompile, or disassemble any portion of our services</li>
              <li>Use our services to generate content that promotes hate speech, discrimination, or violence</li>
              <li>Attempt to gain unauthorized access to our systems or user accounts</li>
              <li>Use our services in a way that could disable, overburden, or impair the functionality of our platform</li>
              <li>Collect or harvest any information from our services without permission</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Content Standards</h2>
            <p>If you create, share, or post content using our services, you must ensure that such content:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Is accurate and not misleading</li>
              <li>Does not violate the rights of any third party</li>
              <li>Is not defamatory, obscene, offensive, or hateful</li>
              <li>Does not promote illegal activities or contain instructions for illegal activities</li>
              <li>Does not contain personal or sensitive information about others without their consent</li>
              <li>Does not impersonate any person or misrepresent your identity or affiliation</li>
              <li>Does not contain any advertising or promotional materials without our prior consent</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Resource Usage</h2>
            <p>VibCod provides AI-driven automation services that require significant computational resources. To ensure fair access for all users, we may impose reasonable limitations on:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>The number of requests you can make within a certain time period</li>
              <li>The complexity of operations you can perform</li>
              <li>The amount of storage or processing power you can use</li>
              <li>The number of concurrent sessions you can maintain</li>
            </ul>
            <p className="mt-2">These limitations may vary based on your subscription plan and will be clearly communicated.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Enforcement and Violations</h2>
            <p>VibCod reserves the right to monitor compliance with this Fair Use Policy. If we determine, in our sole discretion, that you have violated this policy, we may:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Issue a warning</li>
              <li>Temporarily suspend your access to our services</li>
              <li>Permanently terminate your account</li>
              <li>Take legal action if necessary</li>
              <li>Disclose information to law enforcement authorities as required by law</li>
            </ul>
            <p className="mt-2">The severity of the action taken will depend on the nature and seriousness of the violation.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Reporting Violations</h2>
            <p>If you become aware of any violation of this Fair Use Policy, please report it to us immediately at abuse@vibcod.com. Please include as much detail as possible to help us investigate the issue.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
            <p>We may update this Fair Use Policy from time to time. We will notify you of any changes by posting the new policy on our website and updating the "Last Updated" date. Your continued use of our services after such changes constitutes your acceptance of the new policy.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p>If you have any questions about this Fair Use Policy, please contact us at:</p>
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

export default FairUsePolicyPage;
