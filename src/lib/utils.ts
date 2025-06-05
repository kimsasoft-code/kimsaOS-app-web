import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const layoutConfig = {
  noHeader: ['/login', '/registro'],
  noFooter: ['/login', '/registro'],
};