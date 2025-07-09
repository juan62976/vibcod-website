'use client';

import React from 'react';
import NavBarTriangular from '@/components/NavBarTriangular';
import Footer from '@/components/Footer';
import FondoAnimado from '@/components/FondoAnimado';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface InfoCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  image?: string;
  role?: string;
  imageZoom?: boolean; // Si es true, aplica zoom y desplazamiento
}

const InfoCard = ({ title, description, icon, image, role, imageZoom }: InfoCardProps) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const cardRef = React.useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className="relative p-8 rounded-2xl w-full h-full transition-all duration-300 bg-black/90 border border-[#3BACB6]/50 shadow-2xl backdrop-blur-md overflow-hidden hover:scale-[1.025] group text-center flex flex-col"
    >
      <div 
        className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-300"
        style={{
          opacity: isHovered ? 0.15 : 0,
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, white, transparent 50%)`,
        }}
      />
      <div className="relative z-10 flex flex-col items-center flex-grow">
        {image && (
          <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden bg-gradient-to-br from-[#30368d] to-[#3bbced] p-1 flex-shrink-0">
            <div className="rounded-full overflow-hidden w-full h-full bg-[#121212] flex items-center justify-center">
              <Image 
                src={image} 
                alt={title} 
                width={96} 
                height={96} 
                className={`rounded-full object-cover w-full h-full ${imageZoom ? 'scale-125 -translate-y-2' : 'object-center'}`}
                style={imageZoom ? { objectFit: 'cover', objectPosition: 'center top' } : { objectFit: 'cover', objectPosition: 'center' }}
                priority
              />
            </div>
          </div>
        )}
        {icon && (
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#3bbced] to-[#2d86c4] flex items-center justify-center mb-4">
            {icon}
          </div>
        )}
        <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
        {role && <p className="text-[#3bbced] font-medium mb-3">{role}</p>}
        <p className="text-[#E0F7FA]/70 flex-grow">{description}</p>
      </div>
    </div>
  );
};

const AboutPage = () => {
  const values = [
    {
      title: "Innovation",
      description: "We are driven by a passion for innovation and a commitment to pushing the boundaries of AI technology.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m12.728 0l.707-.707M6.343 17.657l-.707.707m12.728 0l.707.707M12 21v-1" />
        </svg>
      )
    },
    {
      title: "Collaboration",
      description: "We believe in the power of collaboration and community to foster creativity and solve complex challenges.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Accessibility",
      description: "We are committed to making AI accessible to everyone, regardless of technical expertise or resources.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      )
    }
  ];
  const teamMembers = [
    {
      name: "Esteban Castelblanco",
      role: "Systems and Computer Engineer",
      image: "/images/esteban.JPG",
      bio: "Esteban's expertise in systems and computer engineering forms the backbone of VibCod's core architecture.",
      linkedin: "https://www.linkedin.com/in/esteban-castelblanco-g%C3%B3mez-336026291/"
    },
    {
      name: "Juan José Valencia",
      role: "Electrical Engineer.",
      image: "/images/juanjo.jpeg",
      bio: "As a former Product Manager at Habi, Juan Jose's insights into product development and user needs are crucial in shaping VibCod's intuitive and powerful platform.",
      linkedin: "https://www.linkedin.com/in/juanjosevalenciam/"
    },
    {
      name: "Julián Mendez",
      role: "Systems and Computer Engineer & Electrical Engineer.",
      image: "/images/julian.jpeg",
      bio: "A skilled developer with experience at Habi, one of Colombia's unicorn prop-tech companies, Julian brings a robust blend of software and electrical engineering knowledge to the team.",
      linkedin: "https://www.linkedin.com/in/julian-andres-mendez-melo/",
      imageZoom: true
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-black relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <FondoAnimado />
      </div>
      <NavBarTriangular />
      
      <div className="container mx-auto px-6 py-16 z-10">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow mb-4">
  About VibCod
</h1>
<p className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-slate-300 to-slate-400 bg-clip-text text-transparent mb-4">
  We're building the future of AI-driven automation to empower creators, developers, and businesses.
</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-[#E0F7FA]/80 text-lg">
              At VibCod, we believe in a future where AI becomes an extension of human creativity and problem-solving capabilities. Our mission is to democratize access to advanced AI technologies, making them accessible, customizable, and useful for everyone—from individual creators to large enterprises. We're committed to building tools that augment human capabilities, automate repetitive tasks, and unlock new possibilities for innovation.
            </p>
          </div>
          
          <div className="flex items-center justify-center">
            <Image 
              src="/images/vibcod-logo.png" 
              alt="VibCod Logo" 
              width={300} 
              height={300} 
            />
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> 
            {values.map((value, index) => (
              <InfoCard key={index} title={value.title} description={value.description} icon={value.icon} />
            ))}
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Meet the Team</h2>
          <p className="text-center text-lg text-[#E0F7FA]/80 max-w-4xl mx-auto mb-12">
            We're a passionate team of engineers from Colombia, dedicated to pushing the boundaries of what's possible with AI and automation. Our diverse backgrounds and shared commitment to innovation drive us to create tools that truly make a difference.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <a
                key={index}
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label={`LinkedIn de ${member.name}`}
                tabIndex={0}
                className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3bbced] rounded-2xl"
              >
                <InfoCard
                  title={member.name}
                  description={member.bio}
                  image={member.image}
                  role={member.role}
                  imageZoom={member.imageZoom}
                />
              </a>
            ))}
          </div>
          <p className="text-center text-lg text-[#E0F7FA]/80 max-w-4xl mx-auto mt-12">
            Our collective experience, including significant roles at Habi—a testament to our ability to contribute to high-growth, impactful ventures—fuels our drive to deliver an exceptional automation experience.
          </p>
        </div>
        
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Join Our Journey</h2>
          <p className="text-[#E0F7FA]/80 text-lg mb-8 max-w-2xl mx-auto">
            We're just getting started, and we'd love for you to be part of our story. Sign up for early access to our platform and help shape the future of AI.
          </p>

        </div>
      </div>
      
      <Footer />
    </main>
  );
};

export default AboutPage;
