'use client'

import { use, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from './ui/button'
import ThemeToggle from './ThemeToggle'
import { Menu, X } from 'lucide-react'
import { useTheme } from 'next-themes'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const NavLinks = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
    { label: 'Gallery', path: '/gallery' },
  ]

  const { theme, setTheme } = useTheme()

  return (
    <nav className="sticky top-0 left-0 z-50 flex h-16 w-full items-center justify-between
     p-4 dark:text-slate-50 uppercase lg:px-20 xl:px-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* LOGO */}
      <div className="flex flex-1 justify-start font-serif font-bold ">
        <Link href="/" className="flex items-center p-2 text-gray-950 dark:text-white rounded-md">
          <Image src="/scissors.svg" width={30} height={20} alt="logo"/>
          <p className="text-[1.3rem] tracking-wide dark:text-white">
            Maxim Barbs
          </p>
        </Link>
      </div>

      {/* DESKTOP LINKS */}
      <div className="hidden flex-1 items-center justify-center gap-4 md:flex">
        {NavLinks.map((item) => (
          <Link
            href={item.path}
            key={item.label}
            className="text-[0.9rem] dark:text-slate-300 text-gray-700 font-bold hover:font-bold"
          >
            <div className="mb-2 flex items-center justify-center duration-500 ease-in-out hover:translate-y-2 hover:font-semibold hover:transition-all">
              {item.label}
            </div>
          </Link>
        ))}
        <ThemeToggle theme={theme} setTheme={setTheme} />
      </div>

      {/* MOBILE MENU BUTTON */}
      <div className="flex p-2 text-black md:hidden">
        <Button onClick={() => setOpen(!open)}
          className="bg-blue-700 text-yellow-100 hover:bg-[#063775]/80"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="absolute left-0 top-16 flex w-full flex-col items-center bg-indigo-700 py-4 md:hidden">
          {NavLinks.map((item) => (
            <Link
              href={item.path}
              key={item.label}
              className="w-full py-2 text-center text-[0.9rem] dark:text-slate-300 text-yellow-100 hover:bg-yellow-500 hover:text-gray-700 hover:font-bold"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <ThemeToggle theme={theme} setTheme={setTheme} />
        </div>
      )}
    </nav>
  )
}

export default Navbar