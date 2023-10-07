"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  const menuToggleHandler = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    return () => {
      clearStateHandler();
    };
  }, []);

  const clearStateHandler = () => {
    if (menuOpen) {
      setMenuOpen(false);
    }
  };

  return (
    // Header start
    <header className={`header ${isHome && "abs-header"}`}>
      <div className="container">
        <div className="row align-items-end">
          <div className="col-md-3">
            <Link href="/" className="logo">
              <img src="/assets/images/logo.png" alt="" />
            </Link>
          </div>
          <div className={`col-md-9${!isHome ? " text-right" : ""}`}>
            <nav className="primary-menu">
              <button className="mobile-menu" onClick={menuToggleHandler}>
                <i className="ti-menu"></i>
              </button>
              <ul className={menuOpen ? "active" : ""}>
                <li>
                  <Link href="/" onClick={clearStateHandler}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" onClick={clearStateHandler}>
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/feature" onClick={clearStateHandler}>
                    feature
                  </Link>
                </li>
                <li>
                  <Link href="/services" onClick={clearStateHandler}>
                    service
                  </Link>
                </li>
                <li>
                  <Link href="/blog" onClick={clearStateHandler}>
                    blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" onClick={clearStateHandler}>
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
    // Header start
  );
}
