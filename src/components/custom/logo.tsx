import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import Image from 'next/image'

interface LogoProps {
  className?: string
  containerClassName?: string
  variant?: 'light' | 'dark'
}

export function Logo({ className, containerClassName, variant = 'light' }: LogoProps) {
  return (
    <Link href="/" aria-label="LASU TECH X" className={cn('inline-block', containerClassName)}>
      <Image
        src="/images/logo.png"
        width={128}
        height={46}
        alt="LASU TECH X logo"
        className={cn('transition-all duration-200', variant === 'light' ? 'invert' : '', className)}
        priority
      />
    </Link>
  )
}
