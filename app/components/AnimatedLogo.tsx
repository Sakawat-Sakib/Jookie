'use client'

import { useState, useEffect } from 'react'

export default function AnimatedLogo() {
  const [isHappy, setIsHappy] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsHappy((prev) => !prev)
    }, 3000) // Flip every 3 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <svg width="140" height="60" viewBox="0 0 140 60" fill="currentColor">
      <text x="0" y="40" fontSize="40" fontWeight="bold" fontStyle="italic">
        J
      </text>
      <text x="20" y="40" fontSize="40" fontWeight="bold" fontStyle="italic">
        o
      </text>
      <text x="45" y="40" fontSize="40" fontWeight="bold" fontStyle="italic">
        o
      </text>
      <text x="70" y="40" fontSize="40" fontWeight="bold" fontStyle="italic">
        kie
      </text>
      <path
        d={isHappy ? "M 25 45 Q 45 55 65 45" : "M 25 55 Q 45 45 65 55"}
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
      >
        <animate
          attributeName="d"
          values="M 25 45 Q 45 55 65 45;M 25 55 Q 45 45 65 55;M 25 45 Q 45 55 65 45"
          dur="3s"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  )
}

