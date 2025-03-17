"use client";
import { usePathname } from "next/navigation";

export default function Footer(){
  const pathname = usePathname();
  return (
    <footer className='bg-gray-200 flex items-center justify-center'>
      <p>Footer</p>
    </footer>
  );
};