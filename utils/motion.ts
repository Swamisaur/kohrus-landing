/**
 * Shared motion config for subtle micro-animations across the landing page.
 */

export const ease = [0.25, 0.46, 0.45, 0.94] as const;
export const easeOut = [0.33, 1, 0.68, 1] as const;

export const transition = {
  fast: { duration: 0.2, ease },
  normal: { duration: 0.35, ease },
  slow: { duration: 0.5, ease },
};

export const stagger = {
  tight: { staggerChildren: 0.05, delayChildren: 0.1 },
  normal: { staggerChildren: 0.1, delayChildren: 0.15 },
  relaxed: { staggerChildren: 0.15, delayChildren: 0.2 },
};
