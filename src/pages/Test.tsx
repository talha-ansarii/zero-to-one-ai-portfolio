import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'

interface Marble {
  id: number
  technology: string
  color: string
}

const MarbleCup: React.FC = () => {
  const cupRef = useRef<HTMLDivElement>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const marbles: Marble[] = [
    { id: 1, technology: 'React', color: 'bg-blue-500' },
    { id: 2, technology: 'TypeScript', color: 'bg-blue-600' },
    { id: 3, technology: 'JavaScript', color: 'bg-yellow-500' },
    { id: 4, technology: 'Node.js', color: 'bg-green-500' },
    { id: 5, technology: 'Python', color: 'bg-yellow-600' },
    { id: 6, technology: 'GSAP', color: 'bg-purple-500' },
    { id: 7, technology: 'Three.js', color: 'bg-red-500' },
    { id: 8, technology: 'MongoDB', color: 'bg-green-600' },
  ]

  const animateMarble = (marbleId: number) => {
    const marbleElement = document.getElementById(`marble-${marbleId}`)
    if (!marbleElement) {
      console.log(`Marble element not found: marble-${marbleId}`)
      return
    }

    console.log(`Animating marble: ${marbleId}`)

    // Make marble visible
    gsap.set(marbleElement, { 
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0,
      rotation: 0
    })

    // Animation sequence
    const tl = gsap.timeline({
      onComplete: () => {
        // Hide marble when back in cup
        gsap.set(marbleElement, { opacity: 0 })
        console.log(`Marble ${marbleId} animation complete`)
      }
    })

    // Pop out with slight random horizontal movement - much higher
    tl.to(marbleElement, {
      y: -200, // Much higher to go outside the cup
      x: gsap.utils.random(-30, 30),
      rotation: gsap.utils.random(-180, 180),
      scale: 1.2,
      duration: 0.8,
      ease: "power2.out"
    })
    // Pause at the top
    .to(marbleElement, {
      duration: 0.3
    })
    // Fall down with gravity and bounce back into cup
    .to(marbleElement, {
      y: 0, // Back to starting position (inside cup)
      x: gsap.utils.random(-10, 10), // Small random landing position
      rotation: gsap.utils.random(-360, 360),
      scale: 1,
      duration: 1.2,
      ease: "bounce.out"
    })
  }

  const startContinuousAnimation = () => {
    if (intervalRef.current) return // Already running

    console.log('Starting continuous animation')
    
    intervalRef.current = setInterval(() => {
      // Pick a random marble to animate
      const randomMarble = marbles[Math.floor(Math.random() * marbles.length)]
      animateMarble(randomMarble.id)
    }, 800) // New marble every 800ms for better visibility
  }

  const stopContinuousAnimation = () => {
    if (intervalRef.current) {
      console.log('Stopping continuous animation')
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }

  const handleCupHover = () => {
    console.log('Cup hovered')
    // Trigger immediate animation
    const randomMarble = marbles[Math.floor(Math.random() * marbles.length)]
    animateMarble(randomMarble.id)
    // Start continuous animation
    startContinuousAnimation()
  }

  const handleCupLeave = () => {
    console.log('Cup left')
    stopContinuousAnimation()
  }

  // Cleanup interval on component unmount
  useEffect(() => {
    return () => {
      stopContinuousAnimation()
    }
  }, [])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
      <h2 className="text-3xl font-bold mb-12 text-white bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        Tech Marble Cup
      </h2>
      
      {/* Main container with extra height for marble animation */}
      <div className="relative w-80 h-96 flex items-end justify-center">
        
        {/* Marbles - positioned absolutely to allow movement outside cup */}
        <div className="absolute inset-0 pointer-events-none">
          {marbles.map((marble) => (
            <div
              key={marble.id}
              id={`marble-${marble.id}`}
              className={`absolute w-10 h-10 rounded-full ${marble.color} opacity-0 flex items-center justify-center text-white text-xs font-bold shadow-2xl border-2 border-white/30 backdrop-blur-sm`}
              style={{
                left: '50%',
                bottom: '80px', // Start from inside the cup
                transform: 'translate(-50%, 0)',
                zIndex: 20,
                background: `linear-gradient(135deg, ${marble.color.includes('blue') ? '#3b82f6, #1e40af' : 
                            marble.color.includes('yellow') ? '#eab308, #ca8a04' :
                            marble.color.includes('green') ? '#22c55e, #16a34a' :
                            marble.color.includes('purple') ? '#a855f7, #7c3aed' :
                            marble.color.includes('red') ? '#ef4444, #dc2626' : '#6b7280, #4b5563'})`
              }}
            >
              <span className="drop-shadow-lg font-semibold">
                {marble.technology.slice(0, 2).toUpperCase()}
              </span>
            </div>
          ))}
        </div>

        {/* Cup */}
        <div
          ref={cupRef}
          className="relative w-48 h-64 cursor-pointer group transition-transform duration-200 hover:scale-105"
          onMouseEnter={handleCupHover}
          onMouseLeave={handleCupLeave}
        >
          {/* Cup shadow */}
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-52 h-8 bg-black/30 rounded-full blur-sm"></div>
          
          {/* Cup body */}
          <div className="relative w-48 h-56 bg-gradient-to-b from-gray-200 via-gray-300 to-gray-500 rounded-b-3xl shadow-2xl border-2 border-gray-400"
               style={{
                 clipPath: 'polygon(15% 0%, 85% 0%, 95% 100%, 5% 100%)'
               }}>
            
            {/* Cup inner shadow */}
            <div className="absolute inset-2 bg-gradient-to-b from-gray-800/20 to-transparent rounded-b-3xl"
                 style={{
                   clipPath: 'polygon(15% 0%, 85% 0%, 95% 100%, 5% 100%)'
                 }}></div>
            
            {/* Cup rim */}
            <div className="absolute -top-3 left-0 w-full h-6 bg-gradient-to-b from-gray-100 via-gray-200 to-gray-400 rounded-full shadow-lg border border-gray-300"></div>
            
            {/* Cup rim inner circle */}
            <div className="absolute -top-2 left-2 right-2 h-4 bg-gradient-to-b from-gray-700 to-gray-900 rounded-full opacity-80"></div>
            
            {/* Cup handle */}
            <div className="absolute right-[-25px] top-12 w-8 h-20 border-4 border-gray-400 rounded-r-full bg-transparent shadow-lg"></div>
            <div className="absolute right-[-23px] top-14 w-4 h-16 border-2 border-gray-300 rounded-r-full bg-transparent"></div>
            
            {/* Cup highlight */}
            <div className="absolute top-8 left-4 w-6 h-16 bg-gradient-to-r from-white/40 to-transparent rounded-full blur-sm"></div>
          </div>

          {/* Hover glow effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-purple-500/20 rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
        </div>

        {/* Instruction text */}
        <p className="absolute -bottom-16 text-center text-gray-300 bg-black/20 px-4 py-2 rounded-lg backdrop-blur-sm">
          Hover over the cup to see tech marbles pop out!
        </p>
      </div>

      {/* Technology list */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-2">
        {marbles.map((marble) => (
          <div
            key={marble.id}
            className={`px-3 py-1 rounded-full text-white text-sm ${marble.color} flex items-center justify-center`}
          >
            {marble.technology}
          </div>
        ))}
      </div>
    </div>
  )
}

export default MarbleCup