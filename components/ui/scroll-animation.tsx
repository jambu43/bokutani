'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ScrollAnimationProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade' | 'scale' | 'rotate' | 'slideLeft' | 'slideRight';
  className?: string;
  stagger?: boolean;
  staggerDelay?: number;
}

export function ScrollAnimation({ 
  children, 
  delay = 0, 
  direction = 'up',
  className = '',
  stagger = false,
  staggerDelay = 0.1
}: ScrollAnimationProps) {
  const getInitialValues = () => {
    switch (direction) {
      case 'up':
        return { opacity: 0, y: 80, scale: 0.95 };
      case 'down':
        return { opacity: 0, y: -80, scale: 0.95 };
      case 'left':
        return { opacity: 0, x: 80, scale: 0.95 };
      case 'right':
        return { opacity: 0, x: -80, scale: 0.95 };
      case 'fade':
        return { opacity: 0, scale: 0.9 };
      case 'scale':
        return { opacity: 0, scale: 0.5 };
      case 'rotate':
        return { opacity: 0, rotate: -10, scale: 0.9 };
      case 'slideLeft':
        return { opacity: 0, x: 100, y: 0 };
      case 'slideRight':
        return { opacity: 0, x: -100, y: 0 };
      default:
        return { opacity: 0, y: 50 };
    }
  };

  const variants = {
    hidden: getInitialValues(),
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Animation spéciale pour les éléments en cascade
export function StaggerAnimation({ 
  children, 
  className = '',
  staggerDelay = 0.15
}: { children: ReactNode; className?: string; staggerDelay?: number }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Animation pour les éléments enfants dans un stagger
export function StaggerItem({ 
  children, 
  className = '',
  direction = 'up'
}: { children: ReactNode; className?: string; direction?: 'up' | 'left' | 'right' | 'scale' }) {
  const getInitialValues = () => {
    switch (direction) {
      case 'up':
        return { opacity: 0, y: 60 };
      case 'left':
        return { opacity: 0, x: 60 };
      case 'right':
        return { opacity: 0, x: -60 };
      case 'scale':
        return { opacity: 0, scale: 0.8 };
      default:
        return { opacity: 0, y: 60 };
    }
  };

  return (
    <motion.div
      variants={{
        hidden: getInitialValues(),
        visible: {
          opacity: 1,
          y: 0,
          x: 0,
          scale: 1,
          transition: {
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

