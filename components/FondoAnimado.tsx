import React from "react"

interface FondoAnimadoProps {
  className?: string
  style?: React.CSSProperties
  variant?: "default" | "cta" | "footer"
}

const FondoAnimado: React.FC<FondoAnimadoProps> = ({ className = "", style = {}, variant = "default" }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden z-10 pointer-events-none ${className}`} style={style}>
      {/* Flow Path 1 */}
      <div
        className="flow-path absolute"
        style={{
          top: variant === "cta" ? "15%" : variant === "footer" ? "30%" : "20%",
          left: "-200px",
          width: "800px",
          height: "120px",
          opacity: variant === "footer" ? 0.1 : variant === "cta" ? 0.25 : 0.3,
          background: "linear-gradient(90deg, transparent 0%, #3BACB6 20%, #1E5799 50%, #4C63D2 80%, transparent 100%)",
          borderRadius: "60px",
          transform: variant === "cta" ? "rotate(-3deg)" : variant === "footer" ? "rotate(-2deg)" : "rotate(-5deg)",
          filter: "blur(2px)",
          animation: "flow-animation 20s linear infinite",
        }}
      />
      {/* Flow Path 2 */}
      <div
        className="flow-path absolute"
        style={{
          top: variant === "cta" ? "40%" : variant === "footer" ? undefined : "35%",
          bottom: variant === "footer" ? "10%" : undefined,
          left: "-300px",
          width: "600px",
          height: "80px",
          opacity: variant === "footer" ? 0.08 : variant === "cta" ? 0.2 : 0.25,
          background: "linear-gradient(90deg, transparent 0%, #E0F7FA 15%, #3BACB6 40%, #1E5799 70%, transparent 100%)",
          borderRadius: "40px",
          transform: variant === "cta" ? "rotate(2deg)" : variant === "footer" ? "rotate(1deg)" : "rotate(3deg)",
          filter: "blur(1.5px)",
          animation: `flow-animation ${variant === "footer" ? 35 : 25}s linear infinite`,
          animationDelay: variant === "footer" ? "10s" : "5s",
        }}
      />
      {/* Flow Path 3 */}
      <div
        className="flow-path absolute"
        style={{
          top: variant === "cta" ? undefined : variant === "footer" ? undefined : "50%",
          bottom: variant === "cta" ? "20%" : variant === "footer" ? undefined : undefined,
          left: "-150px",
          width: "500px",
          height: "60px",
          opacity: variant === "footer" ? 0.08 : variant === "cta" ? 0.15 : 0.2,
          background: "linear-gradient(90deg, transparent 0%, #47A8BD 25%, #2563EB 60%, #5B21B6 85%, transparent 100%)",
          borderRadius: "30px",
          transform: variant === "cta" ? "rotate(-1deg)" : variant === "footer" ? undefined : "rotate(-2deg)",
          filter: "blur(1px)",
          animation: `flow-animation ${variant === "footer" ? 30 : 30}s linear infinite`,
          animationDelay: variant === "footer" ? undefined : "10s",
        }}
      />
      <style jsx>{`
        @keyframes flow-animation {
          0% {
            transform: translateX(-100%) var(--rotation, rotate(0deg));
          }
          100% {
            transform: translateX(100vw) var(--rotation, rotate(0deg));
          }
        }
      `}</style>
    </div>
  )
}

export default FondoAnimado 