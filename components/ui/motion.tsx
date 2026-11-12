"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";

const EASE_OUT_EXPO = [0.22, 1, 0.36, 1] as const;

interface FadeInProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  delay?: number;
  yOffset?: number;
  xOffset?: number;
  scale?: number;
  duration?: number;
  /** Animate when entering viewport (default true). Set false for above-the-fold Hero content. */
  inView?: boolean;
}

export function FadeIn({
  children,
  delay = 0,
  yOffset = 16,
  xOffset = 0,
  scale = 0.99,
  duration = 0.5,
  inView = true,
  className,
  ...props
}: FadeInProps) {
  const prefersReducedMotion = useReducedMotion();
  const initialState = prefersReducedMotion
    ? false
    : { opacity: 0, y: yOffset, x: xOffset, scale };
  const targetState = { opacity: 1, y: 0, x: 0, scale: 1 };

  return (
    <motion.div
      initial={initialState}
      animate={inView ? undefined : targetState}
      whileInView={inView ? targetState : undefined}
      viewport={inView ? { once: true, amount: "some" } : undefined}
      transition={{
        duration: prefersReducedMotion ? 0 : duration,
        delay: prefersReducedMotion ? 0 : delay,
        ease: EASE_OUT_EXPO,
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

interface StaggerContainerProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  staggerDelay?: number;
  delayChildren?: number;
  inView?: boolean;
}

export function StaggerContainer({
  children,
  staggerDelay = 0.07,
  delayChildren = 0.04,
  inView = true,
  className,
  ...props
}: StaggerContainerProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? false : "hidden"}
      animate={inView ? undefined : "visible"}
      whileInView={inView ? "visible" : undefined}
      viewport={inView ? { once: true, amount: "some" } : undefined}
      variants={{
        hidden: {},
        visible: {
          transition: {
            delayChildren: prefersReducedMotion ? 0 : delayChildren,
            staggerChildren: prefersReducedMotion ? 0 : staggerDelay,
          },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  ...props
}: HTMLMotionProps<"div">) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      variants={
        prefersReducedMotion
          ? undefined
          : {
              hidden: { opacity: 0, y: 16, scale: 0.985 },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { duration: 0.45, ease: EASE_OUT_EXPO },
              },
            }
      }
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

interface RevealDividerProps {
  className?: string;
  delay?: number;
}

export function RevealDivider({
  className = "mx-auto mt-5 h-1 w-16 rounded-full bg-[#24A176]",
  delay = 0.12,
}: RevealDividerProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      aria-hidden="true"
      initial={prefersReducedMotion ? false : { opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true, amount: "some" }}
      transition={{
        duration: prefersReducedMotion ? 0 : 0.55,
        delay: prefersReducedMotion ? 0 : delay,
        ease: EASE_OUT_EXPO,
      }}
      className={className}
      style={{ transformOrigin: "center" }}
    />
  );
}
