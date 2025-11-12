"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { useSession, signIn, signOut } from "next-auth/react"
import { usePathname } from "next/navigation"
import { Logo } from "./logo"
const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },   
  { href: "/contact", label: "Contact" },
 

]

export default function Navbar() {
  const { data: session } = useSession()
  const pathname = usePathname() || ""
  const [mobileOpen, setMobileOpen] = useState(false)
  const [active, setActive] = useState("")

  useEffect(() => {
    // default active based on pathname or hash
    if (window && window.location && window.location.hash) {
      setActive(window.location.hash)
    } else if (pathname) {
      setActive(pathname)
    }
  }, [pathname])

  useEffect(() => {
    // close mobile menu on navigation (hash or path change)
    const onHash = () => setMobileOpen(false)
    window.addEventListener("hashchange", onHash)
    return () => window.removeEventListener("hashchange", onHash)
  }, [])

  const handleLinkClick = (href) => {
    setActive(href)
    setMobileOpen(false)
  }

  return (
    <>
      <nav className="fixed  w-full bg-black glass-effect shadow-2xl z-50 border-b border-gray-800" >
        <div className="container mx-auto px-6 py-2 flex justify-between items-center">
          <Link href="/" className="text-2xl flex items-center text-white font-bold" >
            <Logo size={50}/>Tour<span style={{ color: "#1cca5b" }} >Tech</span>
          </Link>

          <div className="hidden md:flex items-center gap-4 ">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => handleLinkClick(l.href)}
                className={`nav-link font-medium transition ${
                  active === l.href ? "text-[#1cca5b]" : "text-white hover:text-[#1cca5cd5]"
                }`}
              >
                {l.label}
              </a>
            ))}
            {session?(
              <a
                // key={l.href}
                href={"/visits"}
                // onClick={() => handleLinkClick(l.href)}
                className={`nav-link font-medium transition ${
                  active === "/visits" ? "text-[#1cca5b]" : "text-white hover:text-[#1cca5cd5]"
                }`}
              >
                Book Visits
              </a>
            ):(
              <a
                // key={l.href}
                href={"/explore"}
                // onClick={() => handleLinkClick(l.href)}
                className={`nav-link font-medium transition ${
                  active === "/explore" ? "text-[#1cca5b]" : "text-white hover:text-[#1cca5cd5]"
                }`}
              >
                Explore Visits
              </a>
            )}
            {session ? (
              <button
                onClick={() => signOut()}
                className="font-medium text-black bg-[#1cca5b] rounded py-2 px-3 hover:bg-[#1cca5cd5] transition"
              >
                Sign out
              </button>
            ) : (
              <button
                onClick={() => signIn()}
                className="font-medium text-black bg-[#1cca5b] rounded py-2 px-3 hover:bg-[#1cca5cd5] transition"
              >
                Sign in
              </button>
            )}
          </div>

          <button
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((s) => !s)}
            className="md:hidden text-gray-300 "
          >
            {mobileOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          className={`${mobileOpen ? "block" : "hidden"} md:hidden shadow-2xl w-full border-b border-gray-800 z-40 glass-effect`}
        >
          <div className="container mx-auto px-6 py-3 flex flex-col space-y-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => handleLinkClick(l.href)}
                className={`py-2 transition ${
                  active === l.href ? "text-[#1cca5b]" : "text-white hover:text-[#1cca5cd5]"
                }`}
              >
                {l.label}
              </a>
            ))}
             {session?(
              <a
                // key={l.href}
                href={"/visits"}
                // onClick={() => handleLinkClick(l.href)}
                className={`nav-link  transition ${
                  active === "/visits" ? "text-[#1cca5b]" : "text-white hover:text-[#1cca5cd5]"
                }`}
              >
                Book Visits
              </a>
            ):(
              <a
                // key={l.href}
                href={"/explore"}
                // onClick={() => handleLinkClick(l.href)}
                className={`nav-link  transition ${
                  active === "/explore" ? "text-[#1cca5b]" : "text-white hover:text-[#1cca5cd5]"
                }`}
              >
                Explore Visits
              </a>
            )}
            <div className="pt-2">
              {session ? (
                <button
                  onClick={() => signOut()}
                  className="w-full text-left font-medium text-gray-300 hover:text-white transition"
                >
                  Sign out
                </button>
              ) : (
                <button
                  onClick={() => signIn()}
                  className="w-full text-left font-medium text-gray-300 hover:text-white transition"
                >
                  Sign in
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}