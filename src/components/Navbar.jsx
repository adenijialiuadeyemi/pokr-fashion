"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Bell, Mail, ChevronDown } from "lucide-react";
import { Button, Card, CardBody } from "@heroui/react";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect screen width on load and resize
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };
    handleResize(); // Set initial
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-[#141414] border-b border-gray-600 px-4 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-[#8338EC]">
          <Image
            src="/logo.png"
            alt="POKR Logo"
            width={110}
            height={40}
            className="object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 text-sm text-white/80">
          <Link href="/designs" className="hover:text-white transition">
            Designs
          </Link>
          <Link href="/jobs" className="hover:text-white transition">
            My Job Posts
          </Link>
          <Link href="/contracts" className="hover:text-white transition">
            My Contracts
          </Link>
          <Link href="/collections" className="hover:text-white transition">
            My Collections
          </Link>
        </div>

        {/* Right Icons & Buttons */}
        <div className="flex items-center gap-6">
          <Bell className="w-5 h-5 text-white cursor-pointer" />
          <Mail className="w-5 h-5 text-white cursor-pointer" />

          <div className="flex items-center gap-1">
            <Image
              src="/profile.png"
              alt="Profile"
              width={40}
              height={40}
              className="rounded-full"
            />
            {isMobile && (
              <ChevronDown
                className="w-4 h-4 text-white cursor-pointer"
                onClick={() => setIsDropdownOpen((prev) => !prev)}
              />
            )}
          </div>
        </div>
      </div>

      {/* Mobile Dropdown - only shows when menu is hidden */}
      {isMobile && isDropdownOpen && (
        <Card className="md:hidden mt-4 bg-[#141414] text-white border border-gray-600">
          <CardBody>
            <div className="flex flex-col py-2 items-center space-y-4 text-sm font-medium">
              <Link
                href="/designs"
                onClick={() => setIsDropdownOpen(false)}
                className="hover:text-[#8338EC] transition"
              >
                Designs
              </Link>
              <Link
                href="/jobs"
                onClick={() => setIsDropdownOpen(false)}
                className="hover:text-[#8338EC] transition"
              >
                My Job Posts
              </Link>
              <Link
                href="/contracts"
                onClick={() => setIsDropdownOpen(false)}
                className="hover:text-[#8338EC] transition"
              >
                My Contracts
              </Link>
              <Link
                href="/collections"
                onClick={() => setIsDropdownOpen(false)}
                className="hover:text-[#8338EC] transition"
              >
                My Collections
              </Link>

              <div className="pt-2 w-full border-t border-gray-700 flex justify-center">
                <Button
                  className="bg-[#8338EC] py-2 w-full max-w-xs rounded-full hover:bg-[#712fd1] text-white"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Publish a Project
                </Button>
              </div>
            </div>
          </CardBody>
        </Card>
      )}
    </nav>
  );
}
