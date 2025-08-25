"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="w-full bg-gradient-to-r from-white via-[#fdfbf8] to-[#f5f5f5] shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-6 py-3">
        
        {/* Left: Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Logo"
            width={120}
            height={40}
            priority
          />
        </Link>

        {/* Center: Nav Links */}
        <ul className="hidden md:flex gap-6 text-sm font-medium">
          {siteConfig.navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`transition ${
                    isActive
                      ? "text-black font-semibold"
                      : "text-gray-700 hover:text-black"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right: Icon/Button */}
        <Link
          href="/chat"
          className="flex items-center justify-center w-18 h-18 bg-[#0c1b38] rounded-lg"
        >
          <Image
            src="/robot.png"
            alt="Chat"
            width={120}
            height={24}
          />
        </Link>
      </div>
    </nav>
  );
}
