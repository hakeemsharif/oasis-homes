'use client'

import React, { useState } from 'react'
import style from './navbar.module.scss'
import Link from 'next/link'

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header>
      <nav className={style.container}>
        <div className={style.nav_left}>
          <Link href="/">
            <h1>Oasis Homes</h1>
          </Link>
        </div>

        <div className={style.nav_center}>
          <ul className={`${style.nav_links} ${
              isMobileMenuOpen ? style.mobile_menu_active : ''
            }`}>
            <li className={style.nav_item}>
              <Link href="/" onClick={toggleMobileMenu}>Home</Link>
            </li>
            <li className={style.nav_item}>
              <Link href="/about" onClick={toggleMobileMenu}>About</Link>
            </li>
            <li className={style.nav_item}>
              <Link href="/properties" onClick={toggleMobileMenu}>Properties</Link>
            </li>
            <li className={style.nav_item}>
              <Link href="/agents" onClick={toggleMobileMenu}>Agents</Link>
            </li>
            <li className={style.nav_item}>
              <Link href="/blogs" onClick={toggleMobileMenu}>Blogs</Link>
            </li>
          </ul>

          <div className={style.hamburger} onClick={toggleMobileMenu}>
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 17H19M5 12H19M11 7H19"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </nav>
    </header>
  )
}
