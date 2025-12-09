'use client';

import React from 'react'
import { Button } from '@/components/ui/button'
import Hero from '@/components/bar/hero'
import Qg from '@/components/bar/qg'
import Food from '@/components/bar/food'
import Flex from '@/components/bar/flex'
import Vide from '@/components/bar/vide'
import { ScrollAnimation } from '@/components/ui/scroll-animation'

function Bar() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ScrollAnimation direction="up" delay={0.1}>
        <Qg />
      </ScrollAnimation>
      <ScrollAnimation direction="up" delay={0.2}>
        <Food />
      </ScrollAnimation>
      <ScrollAnimation direction="up" delay={0.1}>
        <Flex />
      </ScrollAnimation>
      <ScrollAnimation direction="up" delay={0.2}>
        <Vide />
      </ScrollAnimation>
  </div>
  )
}

export default Bar