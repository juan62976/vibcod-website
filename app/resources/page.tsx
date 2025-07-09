'use client';

import { FC } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';
import FondoAnimado from '@/components/FondoAnimado';
import Footer from '@/components/Footer';
import NavBarTriangular from '@/components/NavBarTriangular';
import CodeBlock from '@/components/CodeBlock';
import { Button } from '@/components/ui/button';

// Importar ReactNode para corregir errores de tipo
import { ReactNode } from 'react';


interface BlogCardProps {
  title: string;
  date: string;
  author: string;
  excerpt: string;
  slug: string;
  index: number;
}

const BlogCard: FC<BlogCardProps> = ({ title, date, author, excerpt, slug, index }) => {
  return (
    <motion.div
      className="relative rounded-2xl overflow-hidden border border-[#3BACB6]/30 bg-black/90 shadow-2xl backdrop-blur-md transition-all duration-300 h-full group"
      style={{
        boxShadow: '0 8px 32px 0 rgba(59,172,182,0.16)',
      }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ scale: 1.02, y: -5 }}
    >
      <Link href={`/resources/${slug}`} className="block h-full">
        {/* Fondo decorativo blur y gradiente como Pricing/FAQ */}
        <div className="absolute inset-0 z-0 opacity-50 rounded-2xl overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-[10%] w-[60%] h-[40%] rounded-full blur-[50px] bg-white opacity-20"></div>
          <div className="absolute bottom-[20%] right-[5%] w-[40%] h-[40%] rounded-full blur-[50px] bg-white opacity-30"></div>
        </div>
        <div className="relative p-8 flex flex-col h-full z-10">
          <h1
            className="text-4xl md:text-5xl font-extrabold mb-3 text-white drop-shadow"
          >
            {title}
          </h1>
          <div className="text-slate-400 text-sm mb-4">
            {date} • {author}
          </div>
          <p className="text-slate-300 mb-6 flex-grow">{excerpt}</p>
          <div className="text-[#3BACB6] font-medium flex items-center mt-auto">
            Read more
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="ml-2">
              <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="#3BACB6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const blogs = [
  {
    title: "Effortless Automation: The Future is Fluid, Not Rigid (Introducing VibCod)",
    date: "June 1, 2025",
    author: "Esteban Castel & The VibCod Team",
    excerpt: "Discover how VibCod is reimagining automation with a flexible, AI-powered, and developer-friendly approach that makes workflow creation as intuitive as vibing with code.",
    slug: "future-is-fluid"
  },
  {
    title: "Agent-to-Agent (A2A) Communication: The Microbot Symphony in VibCod",
    date: "June 2, 2025",
    author: "Esteban Castel & The VibCod Team",
    excerpt: "Explore how VibCod's microbots communicate and collaborate using A2A protocols, enabling powerful, distributed automations.",
    slug: "agent-to-agent-communication"
  },
  {
    title: "Empowering Intelligent Agents: A Technical Deep Dive into the Model Context Protocol (MCP) with VibCod",
    date: "June 4, 2025",
    author: "The VibCod Engineering Team",
    excerpt: "To make AI agents and automation flows genuinely powerful, they need rich, real-time context and the ability to act upon the world. This is where principles inspired by the Model Context Protocol (MCP) come into play.",
    slug: "model-context-protocol"
  }
];

const blogContents: Record<string, string> = {
  'future-is-fluid': `The world of process automation is on the cusp of a major transformation. For years, businesses have sought to streamline operations, but existing solutions often present a steep learning curve, high costs, and a frustrating lack of flexibility. Tools can be cumbersome for non-technical users, difficult to self-host, and often fall short when enterprises demand full control and robust versioning for their automation workflows. The promise of seamless, intelligent automation has felt just out of reach.\n\nEnter VibCod. We believe that in the next decade, automation will be a strategic imperative, not a luxury. And we're building the platform to make that a reality for everyone. We're moving beyond the limitations of current tools like n8n, Zapier, and traditional RPA by putting AI at the core of the automation experience, making it faster, easier, and more intuitive than ever before.\n\n## What is "Vibe Coding"? The Heart of Effortless Automation\n\nAt VibCod, we're pioneering a new philosophy we call "vibe coding." Inspired by Andrej Karpathy's vision of developers interacting with AI through natural language, vibe coding transforms the creation of automation. Instead of painstakingly writing lines of code or navigating complex GUIs, you simply describe your desired outcome to our intelligent platform.\n\nImagine guiding an AI, conversing with it to build, test, and refine functional automation flows. This is the essence of VibCod: constructing sophisticated automations not through traditional programming, but by flowing with artificial intelligence. It's about making the process feel natural, intuitive, and incredibly powerful. Our name, VibCod, embodies this vision – building by vibing with code and AI.\n\n## Introducing VibCod: The Platform for Seamless Automation\n\nVibCod is more than just a concept; it's a revolutionary platform designed to democratize and accelerate workflow automation. Here's how we're making it happen:`,
  'agent-to-agent-communication': `In our previous post, we introduced VibCod and our vision for revolutionizing automation through "vibe coding" and an intelligent microbot architecture. A core component enabling this vision is the seamless collaboration between these microbots. Today, we're diving deeper into the technical underpinnings of how these autonomous agents communicate and coordinate, drawing inspiration from concepts like the Agent-to-Agent (A2A) protocol.\n\nModern automation challenges often require more than a single, monolithic process. They demand a symphony of specialized services working in concert. Imagine a complex order fulfillment workflow: one agent might handle inventory checks, another payment processing, a third shipping logistics, and a fourth customer notifications. For this to work, these agents need a standardized, reliable way to talk to each other. This is where Agent-to-Agent (A2A) communication principles become crucial.\n\n## What is Agent-to-Agent (A2A) Communication?\n\nAgent-to-Agent (A2A) communication refers to the protocols and frameworks that enable distinct, autonomous software agents to discover each other, exchange information, and delegate tasks. The goal is to allow agents, potentially built by different teams or even different vendors, using diverse underlying technologies, to collaborate effectively on complex, distributed workflows.\n\nConceptual Agent Card Example:\n\n\`\`\`json\n{\n  "agent_id": "microbot-shopify-processor-v1-instance-007",\n  "name": "ShopifyOrderProcessorMicrobot",\n  "version": "1.2.3",\n  "endpoint_url": "http://vibcod-internal-mesh/microbot-shopify-processor-v1-instance-007/api",\n  "skills": [\n    {\n      "skill_name": "process_new_shopify_order",\n      "description": "Processes a new order from Shopify, updates inventory, and triggers notifications.",\n      "input_schema": {\n        "type": "object",\n        "properties": {}\n      }\n    }\n  ]\n}\n\`\`\``,
  'model-context-protocol': `Following our discussions on VibCod's "vibe coding" and Agent-to-Agent (A2A) communication, we now turn to another critical aspect of building truly intelligent automation: how our microbots access and utilize external tools, data, and services. To make AI agents and automation flows genuinely powerful, they need rich, real-time context and the ability to act upon the world. This is where principles inspired by the Model Context Protocol (MCP) come into play.\n\n## What is the Model Context Protocol (MCP)?\n\nThe Model Context Protocol (MCP) is an open standard designed to streamline how AI applications and agents interact with external tools, data sources, and services. Instead of developers writing bespoke, ad-hoc integrations for every external system an AI needs to access, MCP provides a uniform interface. Anthropic famously described it as a "USB-C for AI applications," enabling a plug-and-play approach to tool usage.\n\nConceptual MCP Tool Discovery (VibCod Microbot to MCP Server):\n\n\`\`\`javascript\n// Hypothetical JavaScript code within a VibCod Microbot\nasync function discoverTools(mcpServerUrl) {\n  const discoverPayload = {\n    jsonrpc: "2.0",\n    id: "discover-req-001",\n    method: "tools/list",\n    params: {} // Optional: parameters to filter tools\n  };\n\n  try {\n    const response = await fetch(mcpServerUrl, {\n      method: "POST",\n      headers: { "Content-Type": "application/json" },\n      body: JSON.stringify(discoverPayload)\n    });\n    const toolsCatalog = await response.json();\n    \n    if (toolsCatalog.error) {\n      console.error("MCP Error (tools/list):", toolsCatalog.error.message);\n      return null;\n    }\n    \n    console.log("Available Tools:", JSON.stringify(toolsCatalog.result, null, 2));\n    return toolsCatalog.result; // List of tool definitions\n  } catch (error) {\n    console.error("Failed to discover tools:", error);\n    return null;\n  }\n}\n\`\`\``,
};

function parseContent(content: string): ReactNode {
  // Mejorado: parser para bloques de código con triple backtick y posible comentario después del lenguaje
  // Captura bloques tipo ```js // comentario\n...\n``` correctamente
  const codeBlockRegex = /```([\w-]+)?(?:[^\n]*)?\n([\s\S]*?)```/g;
  let elements: ReactNode[] = [];
  let lastIndex = 0;
  let match;
  let idx = 0;
  while ((match = codeBlockRegex.exec(content)) !== null) {
    // Agrega el texto/plano antes del bloque de código
    if (match.index > lastIndex) {
      const before = content.slice(lastIndex, match.index).split(/\n\n+/).filter(Boolean);
      before.forEach(block => {
        if (block.startsWith('## ')) {
          elements.push(<h2 key={`h2-${idx++}`} className="text-2xl font-bold text-[#E0F7FA] mb-4 mt-8">{block.slice(3)}</h2>);
        } else {
          elements.push(<p key={`p-${idx++}`} className="text-[#E0F7FA]/90 mb-4 leading-relaxed">{block}</p>);
        }
      });
    }
    // Agrega el bloque de código
    elements.push(
      <CodeBlock key={`code-${idx++}`} code={match[2]} language={match[1] || 'text'} />
    );
    lastIndex = codeBlockRegex.lastIndex;
  }
  // Agrega el resto del texto después del último bloque de código
  if (lastIndex < content.length) {
    const after = content.slice(lastIndex).split(/\n\n+/).filter(Boolean);
    after.forEach(block => {
      if (block.startsWith('## ')) {
        elements.push(<h2 key={`h2-${idx++}`} className="text-2xl font-bold text-[#E0F7FA] mb-4 mt-8">{block.slice(3)}</h2>);
      } else {
        elements.push(<p key={`p-${idx++}`} className="text-[#E0F7FA]/90 mb-4 leading-relaxed">{block}</p>);
      }
    });
  }
  return elements;
}

export default function ResourcesPage() {
  const [selected, setSelected] = useState<string | null>(null);
  const [showSplitView, setShowSplitView] = useState(false);
  const [showBlogContent, setShowBlogContent] = useState(false);
  
  // Configuraciones de animación física
  const physicsSpring = { 
    type: 'spring', 
    stiffness: 250, 
    damping: 20, 
    mass: 1,
    restDelta: 0.001
  };
  
  // Referencias para animación avanzada con layoutId
  const getCardLayoutId = (slug: string) => `card-${slug}`;
  
  // Handler para transición al split view
  const handleCardClick = (slug: string) => {
    setSelected(slug);
    setShowSplitView(true);
    // Retraso para mostrar el contenido del blog después de que las cards se posicionen
    setTimeout(() => {
      setShowBlogContent(true);
    }, 400); // 400ms de retraso para permitir que las cards terminen su animación
  };

  // Handler para terminar animación de sidebar (ya no se usa, pero se deja por si acaso)
  const handleSidebarAnimationComplete = () => {};

  // Handler para volver a la vista de cards
  const handleBackToPosts = () => {
    setShowBlogContent(false);
    setTimeout(() => {
      setShowSplitView(false);
      setSelected(null);
    }, 250); // Debe coincidir con la duración de la animación de salida del contenido
  };

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden flex flex-col bg-black">
      <FondoAnimado className="absolute inset-0 z-0" />
      <div className="relative flex-1 flex flex-col z-10">
        <NavBarTriangular />
        <main className="flex-1 w-full flex flex-col items-center justify-start">
          <section className="relative w-full max-w-7xl mx-auto px-6 py-16">
            <div className="text-center mb-12">
              <h1
            id="resources-title"
            className="text-5xl md:text-6xl font-extrabold text-white drop-shadow mb-4"
          >
            Blog Flow
          </h1>
              <p
            className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-slate-300 to-slate-400 bg-clip-text text-transparent mb-4"
          >
            Explore our latest insights on automation, AI, and the future of workflow innovation
          </p>
            </div>
            <div className={`w-full md:flex md:flex-row md:items-start md:gap-8`}>
              <div
                className={
                  showSplitView
                    ? "flex flex-col items-start w-full md:w-[400px] max-w-full gap-8 md:sticky md:top-24"
                    : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full"
                }
              >
                {blogs.map((blog, idx) => {
                  // Estado para el glow hover
                  const [mouseX, setMouseX] = useState(0);
                  const [mouseY, setMouseY] = useState(0);
                  const [isHovered, setIsHovered] = useState(false);
                  const cardRef = useRef<HTMLDivElement>(null);
                  return (
                    <div
                      key={blog.slug}
                      ref={cardRef}
                      className={`relative p-8 rounded-2xl w-full h-full transition-all duration-300 bg-black/90 border ${isHovered ? 'border-[#3BACB6]/70' : 'border-[#3BACB6]/30'} shadow-2xl backdrop-blur-md overflow-hidden group cursor-pointer hover:scale-105 hover:-translate-y-1`}
                      style={{
                        boxShadow: isHovered
                          ? '0 0 30px 0 rgba(48,162,217,0.25)'
                          : '0 4px 16px -1px rgba(59,188,237,0.08)',
                      }}
                      onClick={() => handleCardClick(blog.slug)}
                      onMouseMove={e => {
                        if (cardRef.current) {
                          const rect = cardRef.current.getBoundingClientRect();
                          setMouseX(e.clientX - rect.left);
                          setMouseY(e.clientY - rect.top);
                        }
                      }}
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                    >
                      {/* Aura Glow Hover - igual que Pricing */}
                      <div
                        className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 pointer-events-none"
                        style={{
                          opacity: isHovered ? 0.10 : 0,
                          background: `radial-gradient(circle at ${mouseX}px ${mouseY}px, white, transparent 50%)`,
                        }}
                      />
                      <div className="absolute inset-0 z-0 opacity-50 rounded-xl overflow-hidden pointer-events-none">
                        <div className="absolute top-0 left-[10%] w-[60%] h-[40%] rounded-full blur-[50px] bg-[#3bbced] opacity-20"></div>
                        <div className="absolute bottom-[20%] right-[5%] w-[40%] h-[40%] rounded-full blur-[50px] bg-[#30a2d9] opacity-30"></div>
                      </div>
                      <div className="relative p-6 z-10">
                        <div className="text-2xl font-bold text-white mb-2 drop-shadow">
                          {blog.title}
                        </div>
                        <div className="text-[#3bbced] text-sm font-medium mb-2 flex items-center">
                          <span className="inline-block w-2 h-2 rounded-full bg-[#3bbced] mr-2"></span>
                          {blog.date} • {blog.author}
                        </div>
                      </div>
                      {selected === blog.slug && (
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#3BACB6]/50" />
                      )}
                    </div>
                  );
                })}
                {showSplitView && (
                  <button
                    className="w-full bg-gradient-to-r from-[#3bbced] to-[#2d86c4] hover:from-[#3bbced]/90 hover:to-[#2d86c4]/90 text-white py-4 rounded-xl font-medium transition-all duration-300 shadow-lg border border-[#3BACB6]/30 hidden md:flex items-center justify-center mt-4"
                    style={{ boxShadow: '0 8px 25px -8px rgba(48,162,217,0.25)' }}
                    onClick={() => {
                      setShowBlogContent(false);
                      setShowSplitView(false);
                      setSelected(null);
                      setTimeout(() => {
                        const el = document.getElementById('resources-title');
                        if (el) {
                          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                      }, 10);
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back to posts
                  </button>
                )}
              </div>
              {showSplitView && showBlogContent && (
                  <div
                    className="flex-1 max-w-3xl w-full bg-black/90 rounded-xl border border-[#3BACB6]/30 shadow-2xl p-8 min-h-[500px] backdrop-blur-md overflow-hidden mt-12 md:mt-0"
                  >
                    {/* Fondo decorativo blur y gradiente */}
                    <div className="absolute inset-0 z-0 opacity-50 rounded-xl overflow-hidden pointer-events-none">
                      <div className="absolute top-0 left-[10%] w-[60%] h-[40%] rounded-full blur-[50px] bg-[#3bbced] opacity-20"></div>
                      <div className="absolute bottom-[20%] right-[5%] w-[40%] h-[40%] rounded-full blur-[50px] bg-[#30a2d9] opacity-30"></div>
                    </div>
                    <h2 className="relative text-3xl font-bold mb-4 text-white drop-shadow z-10">
                      {blogs.find(b=>b.slug===selected)?.title}
                    </h2>
                    <div className="text-[#E0F7FA]/70 text-sm mb-6 flex items-center">
                      <span className="inline-block w-2 h-2 rounded-full bg-[#3BACB6] mr-2"></span>
                      {blogs.find(b=>b.slug===selected)?.date} • {blogs.find(b=>b.slug===selected)?.author}
                    </div>
                    <div className="prose prose-invert max-w-none">
                      {selected && parseContent(blogContents[selected])}
                    </div>
                  </div>
                )}
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}
