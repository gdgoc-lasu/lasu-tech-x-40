'use client'

import { useEffect, useState } from 'react'
import Confetti from 'react-confetti'

export function ConfettiEffect() {
  const [showConfetti, setShowConfetti] = useState(false)
  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0,
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

    // Trigger confetti on page load
    setShowConfetti(true)

    // Stop confetti after 10 seconds
    const timer = setTimeout(() => {
      setShowConfetti(false)
    }, 10000)

    return () => {
      window.removeEventListener('resize', updateDimensions)
      clearTimeout(timer)
    }
  }, [])

  if (!showConfetti) return null

  return (
    <div className="pointer-events-none fixed inset-0">
      <Confetti
        width={windowDimensions.width}
        height={windowDimensions.height}
        numberOfPieces={400}
        recycle={false}
        gravity={0.2}
        colors={[
          '#30A832', // Brand green
          '#228B22', // Forest green
          '#32CD32', // Lime green
          '#90EE90', // Light green
          '#00FF00', // Bright green
          '#ADFF2F', // Green yellow
          '#7CFC00', // Lawn green
          '#9ACD32', // Yellow green
        ]}
        wind={0.05}
        friction={0.98}
        run={showConfetti}
        initialVelocityX={4}
        initialVelocityY={8}
        confettiSource={{
          x: 0,
          y: 0,
          w: windowDimensions.width,
          h: 10,
        }}
      />
    </div>
  )
}
