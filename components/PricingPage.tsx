import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import NavBarTriangular from './NavBarTriangular'
import FondoAnimado from './FondoAnimado'
import FAQSection from './FAQSection'
import Footer from './Footer'

interface PriceCardProps {
  title: string
  subtitle: string
  price: string
  yearlyPrice?: string
  features: string[]
  isPopular?: boolean
  buttonText: string
  tier: "starter" | "advanced" | "enterprise"
}

const PriceCard: React.FC<PriceCardProps> = ({
  title,
  subtitle,
  price,
  yearlyPrice,
  features,
  isPopular,
  buttonText,
  tier,
}) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const [mouseX, setMouseX] = useState(0)
  const [mouseY, setMouseY] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect()
      setMouseX(e.clientX - rect.left)
      setMouseY(e.clientY - rect.top)
    }
  }

  // Esquemas de color inspirados en CookieConsent
  const colorSchemes = {
    starter: {
      border: "border-[#3BACB6]/30",
      hoverBorder: "border-[#3BACB6]/50",
      accent: "#3bbced",
      accentBg: "from-[#0a0a20]/40 to-[#1a2a4a]/40",
      button: "from-[#3bbced] to-[#2d86c4] hover:from-[#3bbced]/90 hover:to-[#2d86c4]/90",
      glow: "rgba(59, 188, 237, 0.20)",
      badge: "from-[#3bbced] to-[#2d86c4]",
    },
    advanced: {
      border: "border-[#3BACB6]/50",
      hoverBorder: "border-[#3BACB6]/70",
      accent: "#30a2d9",
      accentBg: "from-[#0a0a20]/50 to-[#1a2a4a]/50",
      button: "from-[#3bbced] to-[#2d86c4] hover:from-[#3bbced]/90 hover:to-[#2d86c4]/90",
      glow: "rgba(48, 162, 217, 0.25)",
      badge: "from-[#3bbced] to-[#2d86c4]",
    },
    enterprise: {
      border: "border-[#3BACB6]/30",
      hoverBorder: "border-[#3BACB6]/60",
      accent: "#E0F7FA",
      accentBg: "from-[#0a0a20]/40 to-[#1a2a4a]/40",
      button: "from-[#3bbced] to-[#2d86c4] hover:from-[#3bbced]/90 hover:to-[#2d86c4]/90",
      glow: "rgba(224, 247, 250, 0.15)",
      badge: "from-[#3bbced] to-[#2d86c4]",
    },
  }

  const scheme = colorSchemes[tier]

  return (
    <div className="relative w-full max-w-sm mx-auto h-full flex flex-col items-center">
      {/* Badge Most Popular sobre la card */}
      {isPopular && (
        <div className="z-30 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center w-full pointer-events-none">
          <div className={`bg-gradient-to-r ${scheme.badge} text-white px-7 py-2 rounded-full text-sm font-medium shadow-lg border border-[#3BACB6]/50 pointer-events-auto`} style={{minWidth:'fit-content'}}>
            Most Popular
          </div>
        </div>
      )}
      {/* Glow effect para el plan popular */}
      {isPopular && (
        <div
          className="absolute -inset-1 rounded-2xl pointer-events-none transition-all duration-500"
          style={{
            background: isHovered
              ? `radial-gradient(circle at ${mouseX}px ${mouseY}px, ${scheme.glow}, transparent 60%)`
              : `linear-gradient(135deg, ${scheme.glow}, transparent)`,
            filter: isHovered ? "blur(30px)" : "blur(16px)",
            opacity: isHovered ? 0.8 : 0.5,
          }}
        />
      )}

      <motion.div
        ref={cardRef}
        className={`relative p-8 rounded-2xl w-full h-full transition-all duration-300 bg-black/90 border ${isHovered ? scheme.hoverBorder : scheme.border} shadow-2xl backdrop-blur-md overflow-hidden`}
        style={{
          transform: isPopular && isHovered ? "scale(1.025)" : "scale(1)",
          boxShadow: isHovered ? `0 0 30px 0 ${scheme.glow}` : "0 4px 16px -1px rgba(59,188,237,0.08)",
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Fondo decorativo blur y gradiente */}
        <div className="absolute inset-0 z-0 opacity-50 rounded-2xl overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-[10%] w-[60%] h-[40%] rounded-full blur-[50px] bg-[#3bbced] opacity-20"></div>
          <div className="absolute bottom-[20%] right-[5%] w-[40%] h-[40%] rounded-full blur-[50px] bg-[#30a2d9] opacity-30"></div>
        </div>

        {/* Subtle hover effect */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 pointer-events-none"
          style={{
            opacity: isHovered ? 0.10 : 0,
            background: `radial-gradient(circle at ${mouseX}px ${mouseY}px, white, transparent 50%)`,
          }}
        />


        {/* Card Content */}
        <div className="relative z-10 flex flex-col h-full">
          <h3 className="text-2xl font-bold text-white mb-2 drop-shadow">{title}</h3>
          <p className="text-[#E0F7FA]/80 text-sm leading-relaxed mb-8">{subtitle}</p>

          <div className="mb-8">
            <div className="text-4xl font-bold text-white mb-2 drop-shadow">
              {price}
              {!price.includes("Quote") && <span className="text-lg text-[#3bbced]">/month</span>}
            </div>
            {yearlyPrice && <div className="text-[#3bbced] text-sm font-medium">{yearlyPrice}</div>}
          </div>

          <ul className="space-y-4 mb-8 flex-grow">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <div
                  className="w-5 h-5 rounded-full bg-[#3bbced]/20 flex items-center justify-center mt-0.5 flex-shrink-0"
                >
                  <div className="w-2 h-2 rounded-full bg-[#3bbced]" />
                </div>
                <span className="text-[#E0F7FA]/90 text-sm">{feature}</span>
              </li>
            ))}
          </ul>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full bg-gradient-to-r ${scheme.button} text-white py-4 rounded-xl font-medium transition-all duration-300 shadow-lg border border-[#3BACB6]/30`}
            style={{
              boxShadow: isHovered ? `0 8px 25px -8px ${scheme.glow}` : "0 4px 6px -1px rgba(59,188,237,0.08)",
            }}
          >
            {buttonText}
          </motion.button>
        </div>
      </motion.div>
    </div>
  )
}

const PricingPageImproved: React.FC = () => {
  const proStarterFeatures = [
    "5,000 automation executions/month",
    "Intuitive Visual Editor",
    "AI-Powered Conversational Interface (basic)",
    "Standard Version Control",
    "Access to Free Marketplace Templates",
    "Community Support",
    "Cloud Execution (shared infrastructure)",
  ]

  const proAdvancedFeatures = [
    "50,000 automation executions/month",
    "All Pro Starter features",
    "Advanced AI-Powered Conversational Interface",
    "Priority Email Support",
    "Premium Marketplace Access",
    "Human-in-the-Loop Workflow Steps",
    "Dedicated Cloud Microbots (limited)",
    "Advanced Analytics & Reporting",
  ]

  const enterpriseFeatures = [
    "Unlimited Automation Executions",
    "All Pro Advanced features",
    "On-Premise / Private Cloud Deployment Options",
    "Dedicated Account Manager & SLA",
    "Custom Microbot Development",
    "Advanced Security & Compliance Features",
    "24/7 Premium Support",
    "Custom Integrations & Training",
  ]

  return (
    <>
      <div className="min-h-screen bg-black text-white overflow-hidden">
        <NavBarTriangular />

        <div className="py-20 px-4 relative">
          {/* Background Effect */}
          <FondoAnimado />

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-slate-200 to-slate-300 bg-clip-text text-transparent mb-6">
                Choose Your Plan
              </h2>
              <h3 className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-slate-300 to-slate-400 bg-clip-text text-transparent mb-4">
                Scale Your Automation
              </h3>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                Professional automation solutions designed for teams of all sizes
              </p>
            </div>

            {/* Pricing Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
              <PriceCard
                title="Pro Starter"
                subtitle="Perfect for individuals and small teams starting their automation journey"
                price="$29"
                yearlyPrice="$299/year - save 15%"
                features={proStarterFeatures}
                buttonText="Get Started"
                tier="starter"
              />

              <PriceCard
                title="Pro Advanced"
                subtitle="Ideal for growing teams requiring scalable automation solutions"
                price="$99"
                yearlyPrice="$999/year - save 16%"
                features={proAdvancedFeatures}
                isPopular={true}
                buttonText="Get Started"
                tier="advanced"
              />

              <PriceCard
                title="Enterprise"
                subtitle="Custom solutions for large organizations with specific requirements"
                price="Custom Quote"
                features={enterpriseFeatures}
                buttonText="Contact Sales"
                tier="enterprise"
              />
            </div>
          </div>
          {/* FAQ Section */}
          <FAQSection />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default PricingPageImproved
