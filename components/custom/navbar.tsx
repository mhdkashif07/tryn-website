"use client"

import { Menu, Search, ShoppingCart, User } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import clsx from "clsx"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navigationItems = [
  { name: "Home", href: "/", active: true },
  { name: "Shop", href: "/shop", active: false },
  { name: "Sale", href: "/sale", active: false },
  { name: "Tryn Rewards", href: "/rewards", active: false },
  { name: "Wholesale", href: "/wholesale", active: false },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="w-full bg-white">
      <div className="flex h-16 items-center justify-between px-4 md:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold text-black">
            TRYN
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={clsx(
                "px-4 py-2 text-sm font-medium transition-colors",
                item.active
                  ? "bg-primary text-white"
                  : "text-[#252F34] hover:text-white hover:bg-primary"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Right Side Icons */}
        <div className="flex items-center space-x-2">
          {/* Desktop Icons - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </Button>
            <Button variant="ghost" size="icon" className="relative h-9 w-9">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-black text-xs text-white flex items-center justify-center">
                0
              </span>
              <span className="sr-only">Shopping cart</span>
            </Button>
          </div>

          {/* Mobile Icons - Show cart on mobile */}
          <div className="flex md:hidden items-center space-x-2">
            <Button variant="ghost" size="icon" className="relative h-9 w-9">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-black text-xs text-white flex items-center justify-center">
                0
              </span>
              <span className="sr-only">Shopping cart</span>
            </Button>
          </div>

          {/* Mobile Menu Button - Always visible on mobile */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden h-9 w-9 hover:bg-gray-100"
              >
                <Menu className="h-5 w-5 text-black" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] border-l-0" title="Navigation Menu">
              <div className="flex flex-col space-y-4 mt-6">
                {/* Mobile Navigation Links */}
                <nav className="flex flex-col space-y-2">
                  {navigationItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={clsx(
                        "px-4 py-3 text-base font-medium transition-colors",
                        item.active
                          ? "bg-primary text-white"
                          : "text-[#252F34] hover:text-white hover:bg-primary"
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>

                {/* Mobile Icons */}
                <div className="flex items-center justify-center space-x-4 pt-6 border-t">
                  <Button variant="ghost" size="icon" className="h-10 w-10">
                    <Search className="h-5 w-5" />
                    <span className="sr-only">Search</span>
                  </Button>
                  <Button variant="ghost" size="icon" className="h-10 w-10">
                    <User className="h-5 w-5" />
                    <span className="sr-only">Account</span>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
