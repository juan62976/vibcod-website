'use client';

import React from 'react';
import NavBarTriangular from '@/components/NavBarTriangular';
import Footer from '@/components/Footer';
import FondoAnimado from '@/components/FondoAnimado';

const CookiePolicyPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-black relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <FondoAnimado />
      </div>
      <NavBarTriangular />
      
      <div className="container mx-auto px-6 py-16 z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Cookie Policy</h1>
        
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 md:p-8 text-white/90 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">What are Cookies?</h2>
            <p>Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to the website owners. Cookies enhance your browsing experience by allowing websites to remember your preferences, understand how you use the site, and tailor content to your interests.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">How We Use Cookies</h2>
            <p>VibCod uses cookies for various purposes, which we have categorized as follows:</p>
            
            <div className="mt-4 space-y-4">
              <div className="p-4 bg-white/5 rounded-lg">
                <h3 className="text-xl font-medium mb-2">Necessary Cookies</h3>
                <p>These cookies are essential for the operation of our website. They enable core functionality such as security, network management, and account access. You cannot opt out of these cookies as the website cannot function properly without them.</p>
              </div>
              
              <div className="p-4 bg-white/5 rounded-lg">
                <h3 className="text-xl font-medium mb-2">Preference Cookies</h3>
                <p>These cookies allow us to remember choices you make and provide enhanced, personalized features. They may be set by us or by third-party providers whose services we have added to our pages. If you disable these cookies, some or all of these services may not function properly.</p>
              </div>
              
              <div className="p-4 bg-white/5 rounded-lg">
                <h3 className="text-xl font-medium mb-2">Analytics Cookies</h3>
                <p>These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. They allow us to count visits and traffic sources so we can measure and improve the performance of our site. If you disable these cookies, we won't know when you have visited our site and won't be able to monitor its performance.</p>
              </div>
              
              <div className="p-4 bg-white/5 rounded-lg">
                <h3 className="text-xl font-medium mb-2">Marketing Cookies</h3>
                <p>These cookies are used to track visitors across websites. They are set to display targeted advertisements based on your interests and online behavior. They also help measure the effectiveness of advertising campaigns. These cookies may be set by us or our advertising partners.</p>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Types of Cookies We Use</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium mb-2">Session Cookies</h3>
                <p>These cookies are temporary and are deleted from your device when you close your web browser. They are used to remember you during your visit to our website.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-2">Persistent Cookies</h3>
                <p>These cookies remain on your device for a specified period or until you delete them manually. They are used to remember your preferences and settings when you return to our website.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-2">First-Party Cookies</h3>
                <p>These cookies are set by VibCod directly and can only be read by our website.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-2">Third-Party Cookies</h3>
                <p>These cookies are set by third parties, such as analytics providers and advertising networks, with our permission. They may track your browser across other websites and build a profile of your interests.</p>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Third-Party Cookies</h2>
            <p>We use several third-party services that may set cookies on your device. These include:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Google Analytics:</strong> Used to analyze how users interact with our website.</li>
              <li><strong>Social Media Platforms:</strong> If you use social sharing buttons on our website, these platforms may set cookies to identify you on their services.</li>
              <li><strong>Marketing and Advertising Partners:</strong> Used to deliver personalized advertisements based on your browsing behavior.</li>
            </ul>
            <p className="mt-2">Please note that we do not have control over the cookies set by these third parties. We recommend reviewing their respective privacy policies for more information.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Managing Your Cookie Preferences</h2>
            <p>You can manage your cookie preferences in several ways:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Cookie Settings Tool:</strong> You can use our Cookie Settings tool to customize which types of cookies you accept. You can access this tool by clicking on "Cookie Settings" in the footer of our website.</li>
              <li><strong>Browser Settings:</strong> Most web browsers allow you to manage your cookie preferences through their settings. You can usually find these settings in the "Options," "Preferences," or "Settings" menu of your browser.</li>
              <li><strong>Opt-Out Pages:</strong> Many third-party advertising networks offer opt-out pages where you can choose not to receive targeted advertising.</li>
            </ul>
            <p className="mt-2">Please note that if you choose to block certain cookies, some features of our website may not function properly.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
            <p>We may update this Cookie Policy from time to time to reflect changes in technology, regulation, or our business practices. Any changes will be posted on this page with an updated "Last Updated" date. We encourage you to review this policy periodically to stay informed about our use of cookies.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p>If you have any questions about our use of cookies or this Cookie Policy, please contact us at:</p>
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

export default CookiePolicyPage;
