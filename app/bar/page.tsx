import React from 'react'
import { Button } from '@/components/ui/button'
import Hero from '@/components/bar/hero'
import Qg from '@/components/bar/qg'
import Food from '@/components/bar/food'
import Flex from '@/components/bar/flex'
import Vide from '@/components/bar/vide'
function Bar() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Qg />
      <Food />
      <Flex />
      <Vide />
  </div>
  )
}

export default Bar