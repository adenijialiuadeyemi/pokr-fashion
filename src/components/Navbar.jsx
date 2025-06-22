"use client";
import Link from "next/link";
import { Button } from "@heroui/react";
import Image from "next/image";
import { Bell, Mail, ChevronDown } from "lucide-react";
export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-4 px-6 border-b border-white/10">
      <Link href="/" className="text-xl font-bold text-[#8338EC]">
        <Image
          src="/logo.png"
          alt="POKR Logo"
          width={110}
          height={40}
          className="object-contain"
        />
      </Link>
      <div className="hidden md:flex space-x-6 text-sm text-white/80">
        <Link href="/designs">Designs</Link>
        <Link href="/jobs">My Job Posts</Link>
        <Link href="/contracts">My Contracts</Link>
        <Link href="/collections">My Collections</Link>
      </div>

      <div className="flex items-center gap-4">
        <Button className="bg-[#8338EC] rounded-full py-2 px-4 hidden lg:block hover:bg-[#712fd1] text-white cursor-pointer">
          Publish a Project
        </Button>
        <div className="flex items-center gap-4">
          <Bell className="w-4 h-4 text-white cursor-pointer" />
          <Mail className="w-4 h-4 text-white cursor-pointer" />
        </div>
        <div className="flex items-center gap-1">
          <Image
            src="/profile.png"
            alt="Profile"
            width={40}
            height={40}
            className="rounded-full"
          />
          <ChevronDown className="w-4 h-4 text-white cursor-pointer" />
        </div>
      </div>
    </nav>
  );
}
