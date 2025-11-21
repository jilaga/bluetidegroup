// app/loading.tsx
'use client'

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-primary-blue/20 relative overflow-hidden">
      {/* Animated background waves */}
      <div className="absolute inset-0 opacity-10">
        <div className="wave-animation"></div>
        <div className="wave-animation animation-delay-500"></div>
        <div className="wave-animation animation-delay-1000"></div>
      </div>

      <div className="text-center relative z-10">
        {/* Marine Bubble Spinner */}
        <div className="relative mx-auto mb-8">
          {/* Main spinning ring */}
          <div className="marine-spinner">
            <div className="spinner-ring"></div>
            <div className="spinner-ring spinner-ring-2"></div>
          </div>

          {/* Floating bubbles */}
          <div className="bubbles-container">
            <div className="bubble bubble-1"></div>
            <div className="bubble bubble-2"></div>
            <div className="bubble bubble-3"></div>
            <div className="bubble bubble-4"></div>
            <div className="bubble bubble-5"></div>
          </div>
        </div>

        {/* Loading text with animation */}
        <div className="loading-text-container">
          <p className="text-white text-xl font-clash font-semibold mb-2">
            Bluetide Group
          </p>
          <div className="loading-dots">
            <span className="dot dot-1"></span>
            <span className="dot dot-2"></span>
            <span className="dot dot-3"></span>
          </div>
          <p className="text-white/70 text-sm font-montserrat mt-2">
            Preparing marine excellence...
          </p>
        </div>
      </div>

      <style jsx>{`
        .wave-animation {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 200%;
          height: 200px;
          background: linear-gradient(45deg, #FF6700, #0050AA);
          border-radius: 50%;
          animation: wave 6s ease-in-out infinite;
        }

        .animation-delay-500 {
          animation-delay: -2s;
          opacity: 0.8;
        }

        .animation-delay-1000 {
          animation-delay: -4s;
          opacity: 0.6;
        }

        @keyframes wave {
          0%, 100% {
            transform: translateX(-50%) translateY(0px) scale(1);
          }
          50% {
            transform: translateX(-50%) translateY(-20px) scale(1.1);
          }
        }

        .marine-spinner {
          position: relative;
          width: 80px;
          height: 80px;
          margin: 0 auto;
        }

        .spinner-ring {
          position: absolute;
          inset: 0;
          border: 3px solid transparent;
          border-top: 3px solid #FF6700;
          border-radius: 50%;
          animation: spin 1.5s linear infinite;
        }

        .spinner-ring-2 {
          inset: 8px;
          border-top: 3px solid #0050AA;
          animation: spin 2s linear infinite reverse;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .bubbles-container {
          position: absolute;
          inset: -40px;
          pointer-events: none;
        }

        .bubble {
          position: absolute;
          border-radius: 50%;
          background: linear-gradient(45deg, rgba(255, 103, 0, 0.6), rgba(0, 80, 170, 0.6));
          animation: bubble-float 3s ease-in-out infinite;
        }

        .bubble-1 {
          width: 8px;
          height: 8px;
          top: 20px;
          left: 10px;
          animation-delay: 0s;
        }

        .bubble-2 {
          width: 12px;
          height: 12px;
          top: 40px;
          right: 15px;
          animation-delay: 0.5s;
        }

        .bubble-3 {
          width: 6px;
          height: 6px;
          bottom: 30px;
          left: 20px;
          animation-delay: 1s;
        }

        .bubble-4 {
          width: 10px;
          height: 10px;
          bottom: 50px;
          right: 25px;
          animation-delay: 1.5s;
        }

        .bubble-5 {
          width: 14px;
          height: 14px;
          top: 60px;
          left: 50%;
          transform: translateX(-50%);
          animation-delay: 2s;
        }

        @keyframes bubble-float {
          0%, 100% {
            transform: translateY(0px) scale(1);
            opacity: 0.7;
          }
          50% {
            transform: translateY(-15px) scale(1.2);
            opacity: 1;
          }
        }

        .loading-text-container {
          animation: fade-pulse 2s ease-in-out infinite;
        }

        @keyframes fade-pulse {
          0%, 100% {
            opacity: 0.8;
          }
          50% {
            opacity: 1;
          }
        }

        .loading-dots {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin: 8px 0;
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #FF6700;
          animation: dot-bounce 1.4s ease-in-out infinite both;
        }

        .dot-2 {
          animation-delay: 0.16s;
        }

        .dot-3 {
          animation-delay: 0.32s;
        }

        @keyframes dot-bounce {
          0%, 80%, 100% {
            transform: scale(0.8);
            opacity: 0.5;
          }
          40% {
            transform: scale(1.2);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  )
}