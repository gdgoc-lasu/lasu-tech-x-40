'use client'

import { useEffect, useState } from 'react'
import Confetti from 'react-confetti'

export function ConfettiEffect() {
  const [isActive, setIsActive] = useState(false)
  const [windowDimensions, setWindowDimensions] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800,
  })

  useEffect(() => {
    // Get window dimensions
    const updateDimensions = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)

    // Trigger confetti on page load with a small delay
    const startTimer = setTimeout(() => {
      setIsActive(true)
    }, 500)

    return () => {
      window.removeEventListener('resize', updateDimensions)
      clearTimeout(startTimer)
    }
  }, [])

  if (!isActive) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]">
      <Confetti
        width={windowDimensions.width}
        height={windowDimensions.height}
        numberOfPieces={300}
        recycle={false}
        gravity={0.15}
        colors={[
          '#30A832', // Brand green
          '#228B22', // Forest green
          '#32CD32', // Lime green
          '#90EE90', // Light green
          '#00FF00', // Bright green
          '#ADFF2F', // Green yellow
          '#7CFC00', // Lawn green
          '#9ACD32', // Yellow green
          '#FFD700', // Gold
          '#FFA500', // Orange
        ]}
        wind={0.03}
        friction={0.99}
        run={isActive}
        initialVelocityX={3}
        initialVelocityY={-12}
        confettiSource={{
          x: 0,
          y: 0,
          w: windowDimensions.width,
          h: 0,
        }}
        tweenDuration={8000}
        onConfettiComplete={() => {
          // This will be called when all confetti has naturally fallen off screen
          setIsActive(false)
        }}
      />
    </div>
  )
}
