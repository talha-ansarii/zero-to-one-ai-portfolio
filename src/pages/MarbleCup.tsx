import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'

interface Marble {
  id: number
  technology: string
  color: string
}

interface MarbleCupProps {
  marbles: Marble[];
  cupName: string;
  compact?: boolean; // render smaller, embeddable variant
  fillParent?: boolean; // use full available parent height and anchor cup at bottom
}

const MarbleCup: React.FC<MarbleCupProps> = ({ marbles, cupName, compact, fillParent }) => {
  const cupRef = useRef<HTMLDivElement>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)



  const animateMarble = (marbleId: number) => {
    const marbleElement = document.getElementById(`marble-${marbleId}`)
    if (!marbleElement) {
      console.log(`Marble element not found: marble-${marbleId}`)
      return
    }

    console.log(`Animating marble: ${marbleId}`)

    // Reset state (start hidden inside the cup)
    gsap.killTweensOf(marbleElement)
    gsap.set(marbleElement, { 
      opacity: 0,
      scale: 1,
      x: 0,
      y: 0,
      rotation: 0
    })

    // Animation sequence
    const tl = gsap.timeline({
      onUpdate: () => {
        // Only show the marble when it's above the rim (outside the cup)
        const y = (gsap.getProperty(marbleElement, 'y') as number) || 0
        // Threshold: show when it's ~100px above the starting point
        gsap.set(marbleElement, { opacity: y <= -140 ? 1 : 0 })
      },
      onComplete: () => {
        // Ensure it remains hidden when back inside
        gsap.set(marbleElement, { opacity: 0 })
        console.log(`Marble ${marbleId} animation complete`)
      }
    })

    // Pop out with slight random horizontal movement - much higher
    tl.to(marbleElement, {
      y: -400, // Much higher to go outside the cup
      x: gsap.utils.random(-30, 30),
      rotation: gsap.utils.random(-180, 180),
      scale: 1.2,
      duration: 0.90,
      ease: "power2.out"
    })
    // Fall down with gravity and bounce back into cup (no pause at the top)
    .to(marbleElement, {
      y: 0, // Back to starting position (inside cup)
      x: gsap.utils.random(-10, 10), // Small random landing position
      rotation: gsap.utils.random(-360, 360),
      scale: 1,
      duration: 1.1,
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

  const isCompact = !!compact

  // size presets
  const containerW = isCompact ? 'w-64' : 'w-80'
  const containerH = isCompact ? 'h-72' : 'h-96'
  const cupW = isCompact ? 'w-40' : 'w-48'
  const cupH = isCompact ? 'h-56' : 'h-64'
  const marbleHeight = isCompact ? 'h-8' : 'h-10'
  const rimTop = isCompact ? '-top-2 h-5' : '-top-3 h-6'
  const rimInnerTop = isCompact ? '-top-1 h-3 left-1 right-1' : '-top-2 h-4 left-2 right-2'
  const handleOffset = isCompact ? 'right-[-20px] top-10 w-7 h-16' : 'right-[-25px] top-12 w-8 h-20'
  const innerHandleOffset = isCompact ? 'right-[-18px] top-11 w-3 h-14' : 'right-[-23px] top-14 w-4 h-16'
  const marbleBottom = isCompact ? 60 : 80

  return (
    <div className={
      [
        'flex flex-col items-center',
        isCompact ? 'p-2' : 'min-h-screen p-8',
        fillParent ? 'justify-end h-full w-full' : 'justify-center'
      ].join(' ')
    }>
  
      
      {/* Main container with extra height for marble animation */}
  <div className={`relative ${fillParent ? 'w-full h-full' : `${containerW} ${containerH}`} flex items-end justify-center z-50`}>
        
        {/* Marbles - positioned absolutely to allow movement outside cup */}
        <div className="absolute z-50 inset-0 pointer-events-none">
          {marbles.map((marble) => (
            <div
              key={marble.id}
              id={`marble-${marble.id}`}
              className={`absolute z-50 ${marbleHeight} px-3 md:px-4 rounded-xl ${marble.color} opacity-0 flex items-center justify-center text-white text-[10px] md:text-xs font-bold shadow-2xl border-2 border-white/30 backdrop-blur-sm whitespace-nowrap font-poppins`}
              style={{
                left: '50%',
                bottom: `${marbleBottom}px`, // Start from inside the cup
                transform: 'translate(-50%, 0)',
                zIndex: 20,
                background: `linear-gradient(135deg, ${marble.color.includes('blue') ? '#3b82f6, #1e40af' : 
                            marble.color.includes('yellow') ? '#eab308, #ca8a04' :
                            marble.color.includes('green') ? '#22c55e, #16a34a' :
                            marble.color.includes('purple') ? '#a855f7, #7c3aed' :
                            marble.color.includes('red') ? '#ef4444, #dc2626' : '#6b7280, #4b5563'})`
              }}
            >
              <span className="font-semibold">
                {marble.technology}
              </span>
            </div>
          ))}
        </div>

        {/* Cup */}
        <div
          ref={cupRef}
          className={`relative ${cupW} ${cupH} cursor-pointer group transition-transform duration-200 hover:scale-105`}
          onMouseEnter={handleCupHover}
          onMouseLeave={handleCupLeave}
          onTouchStart={handleCupHover}
          onTouchEnd={handleCupLeave}
        >
          {/* Cup shadow */}
          <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 ${isCompact ? 'w-44 h-6' : 'w-52 h-8'} bg-black/30 rounded-full blur-sm`}></div>
          
          {/* Cup body */}
          <div className={`relative ${cupW} ${isCompact ? 'h-48' : 'h-56'} bg-gradient-to-b from-gray-200 via-gray-300 to-gray-500 rounded-b-3xl shadow-2xl border-2 border-gray-400`}
               style={{
                 clipPath: 'polygon(15% 0%, 85% 0%, 95% 100%, 5% 100%)'
               }}>
            <div className='absolute inset-0 flex items-center justify-center text-xs md:text-sm font-medium'>
              {cupName}
            </div>
            {/* Cup inner shadow */}
            <div className="absolute inset-2 bg-gradient-to-b from-gray-800/20 to-transparent rounded-b-3xl"
                 style={{
                   clipPath: 'polygon(15% 0%, 85% 0%, 95% 100%, 5% 100%)'
                 }}></div>
            
            {/* Cup rim */}
            <div className={`absolute ${rimTop} left-0 w-full bg-gradient-to-b from-gray-100 via-gray-200 to-gray-400 rounded-full shadow-lg border border-gray-300`}></div>
            
            {/* Cup rim inner circle */}
            <div className={`absolute ${rimInnerTop} bg-gradient-to-b from-gray-700 to-gray-900 rounded-full opacity-80`}></div>
            
            {/* Cup handle */}
            <div className={`absolute ${handleOffset} border-4 border-gray-400 rounded-r-full bg-transparent shadow-lg`}></div>
            <div className={`absolute ${innerHandleOffset} border-2 border-gray-300 rounded-r-full bg-transparent`}></div>
            
            {/* Cup highlight */}
            <div className={`absolute top-8 left-4 ${isCompact ? 'w-5 h-14' : 'w-6 h-16'} bg-gradient-to-r from-white/40 to-transparent rounded-full blur-sm`}></div>
          </div>

          {/* Hover glow effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-purple-500/20 rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
        </div>


      </div>

 
  </div>
  )
}

export default MarbleCup