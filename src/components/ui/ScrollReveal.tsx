import { ReactNode, useEffect, useRef } from 'react';
import { motion, useAnimation, Variant } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ScrollRevealProps {
  children: ReactNode;
  variant?: 'fadeIn' | 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'zoomIn' | 'bounce';
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
}

const variants = {
  hidden: {
    opacity: 0,
    y: 0,
    x: 0,
    scale: 1,
  },
  fadeIn: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
  },
  fadeInUp: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
  },
  fadeInLeft: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
  },
  fadeInRight: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
  },
  zoomIn: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
  },
  bounce: {
    opacity: 1,
    y: [0, -10, 0],
    x: 0,
    scale: 1,
    transition: {
      y: {
        repeat: 0,
        duration: 0.5,
      },
    },
  },
};

const hiddenVariants = {
  fadeIn: { opacity: 0 },
  fadeInUp: { opacity: 0, y: 50 },
  fadeInLeft: { opacity: 0, x: -50 },
  fadeInRight: { opacity: 0, x: 50 },
  zoomIn: { opacity: 0, scale: 0.9 },
  bounce: { opacity: 0 },
};

const ScrollReveal = ({
  children,
  variant = 'fadeInUp',
  delay = 0,
  duration = 0.5,
  threshold = 0.1,
  className,
}: ScrollRevealProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start(variant);
    }
  }, [controls, inView, variant]);

  const hidden = { ...variants.hidden, ...hiddenVariants[variant] };

  return (
    <motion.div
      ref={ref}
      initial={hidden}
      animate={controls}
      variants={variants}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
