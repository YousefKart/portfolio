import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const hover =
  'cursor-pointer hover:scale-102 hover:-translate-y-0.75 hover:shadow-[4px_4px_0px_rgba(28,27,44,1)] dark:hover:shadow-[4px_4px_0px_rgba(251,251,251,1)] transition duration-100';
