'use client';

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import FondoAnimado from '@/components/FondoAnimado';
import CodeBlock from '@/components/CodeBlock';
import NavBarTriangular from '@/components/NavBarTriangular';

// Datos de los blogs
const blogData = {
  'future-is-fluid': {
    title: "The Future is Fluid: How VibCod is Redefining Automation with AI-Powered 'Vibe Coding' and Agent Ecosystems",
    date: "June 3, 2025",
    author: "The VibCod Team",
    content: `The world of process automation is on the cusp of a major transformation. For years, businesses have sought to streamline operations, but existing solutions often present a steep learning curve, high costs, and a frustrating lack of flexibility. Tools can be cumbersome for non-technical users, difficult to self-host, and often fall short when enterprises demand full control and robust versioning for their automation workflows. The promise of seamless, intelligent automation has felt just out of reach.

Enter VibCod. We believe that in the next decade, automation will be a strategic imperative, not a luxury. And we're building the platform to make that a reality for everyone. We're moving beyond the limitations of current tools like n8n, Zapier, and traditional RPA by putting AI at the core of the automation experience, making it faster, easier, and more intuitive than ever before.

## What is "Vibe Coding"? The Heart of Effortless Automation

At VibCod, we're pioneering a new philosophy we call "vibe coding." Inspired by Andrej Karpathy's vision of developers interacting with AI through natural language, vibe coding transforms the creation of automation. Instead of painstakingly writing lines of code or navigating complex GUIs, you simply describe your desired outcome to our intelligent platform.

Imagine guiding an AI, conversing with it to build, test, and refine functional automation flows. This is the essence of VibCod: constructing sophisticated automations not through traditional programming, but by flowing with artificial intelligence. It's about making the process feel natural, intuitive, and incredibly powerful. Our name, VibCod, embodies this vision – building by vibing with code and AI.

## Introducing VibCod: The Platform for Seamless Automation

VibCod is more than just a concept; it's a revolutionary platform designed to democratize and accelerate workflow automation. Here's how we're making it happen:

### 1. Conversational AI Meets Intuitive Visual Design

Forget clunky interfaces. VibCod offers two powerful ways to build:

- **Conversational AI Interface**: Simply talk to our AI assistant. Describe the process you want to automate in plain language – "When a new order comes in Shopify, update my Google Sheet, send a Slack notification to the sales team, and add the customer to our Mailchimp list." The AI translates your intent into a functional workflow. It's like having a super-intelligent automation expert at your beck and call.

- **Visual Mind Map Editor**: For those who prefer a visual approach, our unique mind map-style editor allows you to design and understand complex flows at a glance. This intuitive design drastically reduces the learning curve, empowering even non-technical users to build and manage their own automations.

### 2. Microbots: Your Distributed, Intelligent Automation Workforce

At the heart of VibCod's execution engine is our innovative "microbot" architecture. These are small, specialized software agents that can run different parts of your automation flow across various environments.`
  },
  'agent-to-agent-communication': {
    title: "Powering Collaborative Automation: A Technical Deep Dive into Agent-to-Agent (A2A) Communication with VibCod",
    date: "June 3, 2025",
    author: "The VibCod Engineering Team",
    content: `In our previous post, we introduced VibCod and our vision for revolutionizing automation through "vibe coding" and an intelligent microbot architecture. A core component enabling this vision is the seamless collaboration between these microbots. Today, we're diving deeper into the technical underpinnings of how these autonomous agents communicate and coordinate, drawing inspiration from concepts like the Agent-to-Agent (A2A) protocol.

Modern automation challenges often require more than a single, monolithic process. They demand a symphony of specialized services working in concert. Imagine a complex order fulfillment workflow: one agent might handle inventory checks, another payment processing, a third shipping logistics, and a fourth customer notifications. For this to work, these agents need a standardized, reliable way to talk to each other. This is where Agent-to-Agent (A2A) communication principles become crucial.

## What is Agent-to-Agent (A2A) Communication?

Agent-to-Agent (A2A) communication refers to the protocols and frameworks that enable distinct, autonomous software agents to discover each other, exchange information, and delegate tasks. The goal is to allow agents, potentially built by different teams or even different vendors, using diverse underlying technologies, to collaborate effectively on complex, distributed workflows.

Think of it as establishing a common language and a set of behavioral rules for software agents. Instead of custom, brittle point-to-point integrations, A2A provides a more robust and scalable approach to building multi-agent systems. Within VibCod, our microbots leverage these principles to form dynamic, intelligent automation networks.

## How A2A Principles Work in the VibCod Ecosystem

While VibCod implements its own optimized inter-microbot communication, the core concepts align closely with emerging A2A standards. Here's a breakdown of the key mechanisms:

### 1. Agent Discovery: The "Agent Card" Concept

Before agents can communicate, they need to find each other and understand each other's capabilities. This is often achieved through a mechanism similar to an "Agent Card."

Agent Card: This is a metadata file, typically in JSON format, that an agent publishes. It describes the agent, including:

- agent_id: A unique identifier for the agent (e.g., a specific microbot instance).
- name: A human-readable name (e.g., "ShopifyOrderProcessorMicrobot").
- version: The version of the agent.
- endpoint_url: The network address where the agent can be reached.
- skills: A list of tasks or capabilities the agent can perform (e.g., "process_new_order", "update_inventory", "send_slack_notification").
- input_schema_for_skills: Defines the expected input data structure for each skill.
- authentication_requirements: Specifies how other agents should authenticate when interacting with it.

VibCod's internal service registry functions similarly, allowing microbots to discover and understand the capabilities of other available microbots within an automation flow or the broader ecosystem.

Conceptual Agent Card Example:

\`\`\`json
{
  "agent_id": "microbot-shopify-processor-v1-instance-007",
  "name": "ShopifyOrderProcessorMicrobot",
  "version": "1.2.3",
  "endpoint_url": "http://vibcod-internal-mesh/microbot-shopify-processor-v1-instance-007/api",
  "skills": [
    {
      "skill_name": "process_new_shopify_order",
      "description": "Processes a new order from Shopify, updates inventory, and triggers notifications.",
      "input_schema": {
        "type": "object",
        "properties": {}
      }
    }
  ]
}
\`\`\``
  },
  'model-context-protocol': {
    title: "Empowering Intelligent Agents: A Technical Deep Dive into the Model Context Protocol (MCP) with VibCod",
    date: "June 4, 2025",
    author: "The VibCod Engineering Team",
    content: `Following our discussions on VibCod's "vibe coding" and Agent-to-Agent (A2A) communication, we now turn to another critical aspect of building truly intelligent automation: how our microbots access and utilize external tools, data, and services. To make AI agents and automation flows genuinely powerful, they need rich, real-time context and the ability to act upon the world. This is where principles inspired by the Model Context Protocol (MCP) come into play.

Imagine an AI assistant trying to answer, "What's the current status of my latest support ticket and what were the sales figures for the product mentioned in it last quarter?" To answer this, the AI needs to access a ticketing system, a sales database, and perhaps even a product catalog. MCP, introduced by Anthropic, offers a standardized way for AI models to connect with these external resources.

## What is the Model Context Protocol (MCP)?

The Model Context Protocol (MCP) is an open standard designed to streamline how AI applications and agents interact with external tools, data sources, and services. Instead of developers writing bespoke, ad-hoc integrations for every external system an AI needs to access, MCP provides a uniform interface. Anthropic famously described it as a "USB-C for AI applications," enabling a plug-and-play approach to tool usage.

At its core, MCP allows an AI model or agent to:

- Discover available tools and their capabilities.
- Invoke those tools with specific arguments.
- Receive structured results back from the tools.

This is typically facilitated through a JSON-RPC 2.0 interface, making it lightweight and web-friendly.

## How MCP Principles Enhance VibCod Microbots

Within the VibCod ecosystem, our microbots are designed to be highly capable and versatile. To achieve this, they need to interact with a wide array of external systems – from databases and APIs to file systems and third-party SaaS applications. While VibCod employs its own optimized mechanisms, the philosophy aligns closely with MCP's goals:

### 1. Standardized Tool Access Layer

Each VibCod microbot that needs to interact with external resources can incorporate an "MCP-like client." This client knows how to speak the "MCP language" to an "MCP-enabled tool server."

MCP Server (Tool Provider): This could be a dedicated service that wraps an existing API (e.g., a GitHub API, a Salesforce API, a company's internal database) and exposes its functionalities via the MCP JSON-RPC interface. VibCod could provide a library or SDK to easily create such MCP wrappers for common services or custom internal tools.

MCP Client (VibCod Microbot): The microbot, when needing to perform an action like "fetch recent customer orders" or "create a new calendar event," would use its MCP client to interact with the relevant MCP server.

### 2. Tool Discovery

A microbot needs to know what tools are available and how to use them. MCP provides a mechanism for this, typically a tools/list method.

Conceptual MCP Tool Discovery (VibCod Microbot to MCP Server):
A microbot might query an MCP server (e.g., one wrapping a project management tool) to see what actions it can perform.

\`\`\`javascript
// Hypothetical JavaScript code within a VibCod Microbot
async function discoverTools(mcpServerUrl) {
  const discoverPayload = {
    jsonrpc: "2.0",
    id: "discover-req-001",
    method: "tools/list",
    params: {} // Optional: parameters to filter tools
  };

  try {
    const response = await fetch(mcpServerUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(discoverPayload)
    });
    const toolsCatalog = await response.json();
    
    if (toolsCatalog.error) {
      console.error("MCP Error (tools/list):", toolsCatalog.error.message);
      return null;
    }
    
    console.log("Available Tools:", JSON.stringify(toolsCatalog.result, null, 2));
    return toolsCatalog.result; // List of tool definitions
  } catch (error) {
    console.error("Failed to discover tools:", error);
    return null;
  }
}
\`\`\``
  }
};


// Convertir el contenido markdown simple a JSX
const formatContent = (content: string) => {
  // Dividir por líneas vacías para obtener párrafos
  const parts = content.split(/\n\n+/);
  
  return parts.map((part, index) => {
    // Detectar bloques de código
    if (part.includes('```')) {
      const [, language, code] = part.match(/```(\w*)\n([\s\S]*?)```/) || [null, 'javascript', part];
      return <CodeBlock key={index} code={code.trim()} language={language || 'javascript'} />;
    }
    
    // Detectar títulos
    if (part.startsWith('# ')) {
      return <h1 key={index} className="text-4xl font-bold mt-10 mb-6 text-white drop-shadow">{part.substring(2)}</h1>;
    }
    
    if (part.startsWith('## ')) {
      return <h2 key={index} className="text-3xl font-bold mt-10 mb-4 text-slate-200 drop-shadow">{part.substring(3)}</h2>;
    }
    
    if (part.startsWith('### ')) {
      return <h3 key={index} className="text-2xl font-bold mt-8 mb-3 text-slate-300">{part.substring(4)}</h3>;
    }
    
    // Detectar listas
    if (part.includes('\n- ')) {
      const listItems = part.split('\n- ').filter(Boolean);
      return (
        <ul key={index} className="list-disc pl-6 my-4 space-y-2 text-slate-300">
          {listItems.map((item, i) => (
            <li key={i} className="text-slate-300">{item}</li>
          ))}
        </ul>
      );
    }
    
    // Párrafos normales
    return <p key={index} className="my-4 text-slate-400 leading-relaxed">{part}</p>;
  });
};

import React from 'react';

export default function BlogPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = React.use(params);
  const blog = blogData[slug as keyof typeof blogData];
  
  if (!blog) {
    notFound();
  }

  const brandGradient = 'linear-gradient(90deg, #3BACB6, #1E5799, #4C63D2)';

  return (
    <section className="relative w-full min-h-screen overflow-hidden px-0">
      {/* Fondo negro absoluto */}
      <div className="fixed inset-0 w-full h-full bg-black" aria-hidden="true"></div>
      {/* Fondo animado */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <FondoAnimado variant="default" />
      </div>
      {/* Navbar arriba igual que en Pricing */}
      <NavBarTriangular />
      <div className="max-w-4xl mx-auto px-4 pt-12 pb-24 relative z-10">
        <div className="relative rounded-2xl border border-[#3BACB6]/30 bg-black/90 shadow-2xl backdrop-blur-md p-8 md:p-12 overflow-hidden">
          {/* Fondo decorativo blur y gradiente como Pricing/FAQ */}
          <div className="absolute inset-0 z-0 opacity-50 rounded-2xl overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-[10%] w-[60%] h-[40%] rounded-full blur-[50px] bg-[#3bbced] opacity-20"></div>
            <div className="absolute bottom-[20%] right-[5%] w-[40%] h-[40%] rounded-full blur-[50px] bg-[#30a2d9] opacity-30"></div>
          </div>
          <div className="relative z-10">
            <Link 
              href="/resources" 
              className="inline-flex items-center text-[#3BACB6] hover:text-[#E0F7FA] mb-8 transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="mr-2">
                <path d="M16 10H4M4 10L10 16M4 10L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Back to Resources
            </Link>
            <motion.h1
              className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent drop-shadow"
              style={{ background: brandGradient, WebkitBackgroundClip: 'text' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, type: 'spring', stiffness: 80 }}
            >
              {blog.title}
            </motion.h1>
            <div className="text-[#E0F7FA] text-sm mb-8">
              {blog.date} • {blog.author}
            </div>
            <motion.div
              className="prose prose-invert max-w-none"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {formatContent(blog.content)}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
