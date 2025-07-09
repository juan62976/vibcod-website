"use client"

import FondoAnimado from "./FondoAnimado"

export default function UseCaseSection() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden flex items-center justify-center">
      <FondoAnimado />

      {/* Enhanced floating particles effect */}
      {/* <div className="absolute inset-0 z-10">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-40"
            style={{
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, ${
                ["#3BBCED", "#2563EB", "#5B21B6", "#00F5FF"][Math.floor(Math.random() * 4)]
              }, transparent)`,
              animation: `float-particle ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div> */}

      <div className="container mx-auto px-4 z-20 relative">
        {/* Enhanced Text Content with Animated Gradient */}
        <div className="text-center mb-12 lg:mb-20 animate-fade-in">
          <h2
            className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 leading-tight"
            style={{
              background: `linear-gradient(135deg, #00F5FF 0%, #3BBCED 25%, #2563EB 50%, #5B21B6 75%, #E0F7FA 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              backgroundSize: "300% 300%",
              animation: "gradient-shift 6s ease-in-out infinite",
            }}
          >
            Automate Your World,
            <br />
            <span className="block mt-2">Connect Your Apps</span>
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            See how VibCod connects your tools. Schedule an appointment in your Google Calendar directly from a Telegram chat,
            using natural language.
            <br />
            <span className="text-cyan-400 font-semibold text-xl md:text-2xl block mt-3">
              Effortless, without switching apps. Everything flows.
            </span>
          </p>
        </div>

        {/* Devices Container - Using the exact positioning from provided code */}
        <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center max-w-6xl mx-auto">
          <div className="relative">
            {/* MacBook-style Laptop - Premium realistic design */}
            <div className="relative z-10">
              <div 
                className="relative"
                style={{
                  transform: "perspective(2000px) rotateX(5deg)",
                }}
              >
                {/* Screen */}
                <div
                  className="w-[500px] md:w-[600px] lg:w-[700px] h-[312px] md:h-[375px] lg:h-[437px] relative overflow-hidden"
                  style={{
                    borderRadius: "12px 12px 0 0",
                    background: "#000", // Matte black like the notch
                    border: "1px solid #222", // Darker border to match
                    boxShadow: `
                      0 0 100px 25px rgba(59, 188, 237, 0.4),
                      0 0 150px 50px rgba(37, 99, 235, 0.25),
                      0 0 200px 80px rgba(0, 245, 255, 0.1),
                      inset 0 0 0 1px rgba(255, 255, 255, 0.05)
                    `,
                    padding: "8px",
                  }}
                >
                  {/* Notch - MacBook Pro style */}
                  <div 
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 z-30"
                    style={{
                      width: "80x",
                      height: "25px",
                      background: "#000",
                      borderRadius: "0 0 6px 6px"
                    }}
                  >
                    {/* Camera inside notch */}
                    <div 
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 rounded-full"
                      style={{
                        background: "#333",
                        boxShadow: "inset 0 0 1px rgba(0,0,0,0.8)"
                      }}
                    />
                  </div>

                  {/* Bezel and screen frame with realistic margins */}
                  <div 
                    className="absolute inset-0 overflow-hidden"
                    style={{
                      borderRadius: "8px",
                      border: "1px solid #111",
                      background: "#000", // Matte black like the notch
                      margin: "12px 8px 12px 8px", // Reduced bezels: Top, Right, Bottom, Left
                    }}
                  >
                    {/* Safari Interface */}
                    <div className="absolute top-0 left-0 right-0 z-20">
                      <img 
                        src="/images/safari-interface.png" 
                        alt="Safari Interface"
                        className="w-full h-auto object-cover"
                        style={{
                          height: "32px",
                          opacity: 0.95
                        }}
                      />
                    </div>

                    {/* Video content area - positioned below Safari interface */}
                    <div 
                      className="absolute left-0 right-0 top-[32px] bottom-0 overflow-hidden"
                      style={{
                        borderRadius: "0 0 8px 8px"
                      }}
                    >
                      <video 
                        autoPlay loop muted playsInline 
                        className="object-fill"
                        style={{
                          width: "90%",
                          height: "107%",
                          transform: "translateX(45px) translateY(-20px)"
                        }}
                      >
                        <source src="/videos/combined_video.webm" type="video/webm" />
                      </video>
                    </div>
                    
                    {/* Screen reflection overlay */}
                    <div 
                      className="absolute inset-0 pointer-events-none z-25"
                      style={{
                        background: "linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 20%)",
                        borderRadius: "inherit",
                      }}
                    />
                  </div>
                </div>

                {/* Base/keyboard part with a premium metallic finish */}
                <div 
                  className="w-[500px] md:w-[600px] lg:w-[700px] h-10 relative"
                  style={{
                    borderRadius: "0 0 10px 10px",
                    background: "linear-gradient(to bottom, #2a2a2a, #1a1a1a)",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
                    transform: "perspective(1000px) rotateX(75deg)",
                    transformOrigin: "top",
                    borderLeft: "1px solid #333",
                    borderRight: "1px solid #333",
                    borderBottom: "1px solid #333",
                  }}
                >
                  {/* Touchpad */}
                  <div 
                    className="absolute top-2 left-1/2 transform -translate-x-1/2 rounded-md"
                    style={{
                      width: "40%",
                      height: "60%",
                      background: "linear-gradient(145deg, #222, #1a1a1a)",
                      border: "1px solid #333",
                      boxShadow: "inset 0 0 5px rgba(0,0,0,0.2)"
                    }}
                  ></div>
                </div>
              </div>
            </div>

            {/* iPad Pro modern design */}
            <div className="absolute left-[-200px] md:left-[-230px] lg:left-[-260px] top-[20px] md:top-[30px] lg:top-[40px] z-20">
              <div 
                className="relative"
                style={{
                  transform: "perspective(1000px) rotateY(15deg) rotateX(5deg)",
                }}
              >
                {/* Tablet frame with premium finish */}
                <div
                  className="w-[240px] md:w-[280px] lg:w-[320px] h-[320px] md:h-[373px] lg:h-[427px] relative"
                  style={{
                    borderRadius: "24px",
                    background: "linear-gradient(135deg, #303030, #1a1a1a)",
                    boxShadow: `
                      0 0 80px 20px rgba(37, 99, 235, 0.5),
                      0 0 120px 40px rgba(91, 33, 182, 0.4),
                      inset 0 0 0 2px rgba(255, 255, 255, 0.05),
                      0 5px 15px rgba(0, 0, 0, 0.5)
                    `,
                    padding: "12px",
                    border: "1px solid rgba(80, 80, 80, 0.5)",
                  }}
                >
                  {/* Thin bezel for modern iPad */}
                  <div 
                    className="absolute inset-0 overflow-hidden m-[6px] rounded-[18px]"
                    style={{
                      background: "#0a0a0a",
                      border: "1.5px solid rgba(40, 40, 40, 0.5)",
                    }}
                  >
                    {/* Actual screen area with defined margins */}
                    <div className="absolute inset-[4px] overflow-hidden rounded-[12px] border border-gray-800">
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                        style={{ 
                          objectPosition: "left center",
                          // transform: "translateX(20px)"
                        }}
                      >
                        <source src="/videos/calendar.webm" type="video/webm" />
                      </video>
                    </div>
                    {/* Screen reflection overlay */}
                    <div 
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: "linear-gradient(160deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0) 20%)",
                        borderRadius: "inherit",
                      }}
                    />
                  </div>

                  {/* Camera (in bezel) */}
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full" style={{ background: "rgba(20, 20, 20, 0.9)" }}>
                    <div className="w-1 h-1 rounded-full bg-gray-800 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                  </div>
                  
                  {/* Power button */}
                  <div 
                    className="absolute top-8 -right-1 w-1 h-6 bg-gray-700 rounded-l-md"
                    style={{
                      boxShadow: "inset 1px 0 1px rgba(255, 255, 255, 0.2)"  
                    }}
                  />
                  
                  {/* Volume buttons */}
                  <div 
                    className="absolute top-24 -right-1 w-1 h-7 bg-gray-700 rounded-l-md"
                    style={{
                      boxShadow: "inset 1px 0 1px rgba(255, 255, 255, 0.2)"  
                    }}
                  />
                  <div 
                    className="absolute top-[calc(24px+50px)] -right-1 w-1 h-7 bg-gray-700 rounded-l-md"
                    style={{
                      boxShadow: "inset 1px 0 1px rgba(255, 255, 255, 0.2)"  
                    }}
                  />
                </div>
              </div>
            </div>

            {/* iPhone 16-style smartphone with proper frame and no notch */}
            <div className="absolute right-[-120px] md:right-[-140px] lg:right-[-160px] top-[60px] md:top-[70px] lg:top-[80px] z-20">
              <div 
                className="relative"
                style={{
                  transform: "perspective(1000px) rotateY(-20deg) rotateX(5deg)",
                }}
              >
                {/* Smartphone frame with realistic details */}
                <div
                  className="w-[140px] md:w-[165px] lg:w-[180px] h-[280px] md:h-[330px] lg:h-[360px] relative"
                  style={{
                    borderRadius: "40px",
                    background: "linear-gradient(145deg, #262626, #1a1a1a)",
                    padding: "12px 8px",
                    boxShadow: `
                      0 0 60px 15px rgba(0, 245, 255, 0.5),
                      0 0 100px 30px rgba(37, 99, 235, 0.4),
                      inset 0 0 0 2px rgba(255, 255, 255, 0.05),
                      0 5px 15px rgba(0, 0, 0, 0.5)
                    `,
                    border: "1px solid rgba(80, 80, 80, 0.3)",
                  }}
                >
                  {/* Thin bezel for modern iPhone */}
                  <div 
                    className="absolute inset-0 overflow-hidden m-[6px] rounded-[30px]"
                    style={{
                      background: "#000",
                      border: "1.5px solid #1a1a1a",
                    }}
                  >
                    {/* Video content nearly edge-to-edge */}
                    <div className="absolute inset-[4px] overflow-hidden rounded-[22px] border border-gray-800">
                      <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                        <source src="/videos/telegram.webm" type="video/webm" />
                      </video>
                    </div>
                    {/* Screen reflection overlay */}
                    <div 
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: "linear-gradient(160deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 20%)",
                        borderRadius: "inherit",
                      }}
                    />
                  </div>
                  
                  {/* Side button */}
                  <div 
                    className="absolute top-1/3 -right-1 w-1 h-10 bg-gray-700 rounded-l-md"
                    style={{
                      boxShadow: "inset 1px 0 1px rgba(255, 255, 255, 0.2)"  
                    }}
                  />
                  
                  {/* Volume buttons */}
                  <div 
                    className="absolute top-1/4 -left-1 w-1 h-6 bg-gray-700 rounded-r-md"
                    style={{
                      boxShadow: "inset -1px 0 1px rgba(255, 255, 255, 0.2)"  
                    }}
                  />
                  <div 
                    className="absolute top-[calc(1/4*100%+40px)] -left-1 w-1 h-6 bg-gray-700 rounded-r-md"
                    style={{
                      boxShadow: "inset -1px 0 1px rgba(255, 255, 255, 0.2)"  
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          25% { background-position: 100% 50%; }
          50% { background-position: 200% 50%; }
          75% { background-position: 100% 50%; }
        }
        
        @keyframes float-particle {
          0%, 100% { transform: translateY(0px) scale(1); opacity: 0.4; }
          50% { transform: translateY(-20px) scale(1.2); opacity: 0.8; }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 1.2s ease-out;
        }
      `}</style>
    </div>
  )
}
