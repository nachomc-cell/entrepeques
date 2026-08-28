"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Sobre Nosotros", href: "#sobre-nosotros" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      style={{
        backgroundColor: "#fff3e0",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        boxShadow: scrolled ? "0 2px 12px rgba(0,0,0,0.08)" : "none",
        transition: "box-shadow 0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "72px",
        }}
      >
        {/* Logo */}
        <a href="#" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <Image
            src="/logo.png"
            alt="Entre Peques"
            width={60}
            height={60}
            style={{ objectFit: "contain", borderRadius: "12px" }}
          />
        </a>

        {/* Desktop links */}
        <ul
          style={{
            display: "flex",
            gap: "36px",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                style={{
                  fontFamily: "'Quicksand', sans-serif",
                  fontWeight: 600,
                  fontSize: "1rem",
                  color: "#000",
                  textDecoration: "none",
                  padding: "6px 0",
                  borderBottom: "2px solid transparent",
                  transition: "border-color 0.2s ease, color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLAnchorElement).style.borderBottomColor = "#6a8cb8";
                  (e.target as HTMLAnchorElement).style.color = "#6a8cb8";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLAnchorElement).style.borderBottomColor = "transparent";
                  (e.target as HTMLAnchorElement).style.color = "#000";
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
          style={{
            display: "none",
            flexDirection: "column",
            gap: "5px",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "4px",
          }}
        >
          <span style={{ display: "block", width: "26px", height: "3px", backgroundColor: "#000", borderRadius: "2px", transition: "all 0.3s", transform: menuOpen ? "rotate(45deg) translate(5px, 6px)" : "none" }} />
          <span style={{ display: "block", width: "26px", height: "3px", backgroundColor: "#000", borderRadius: "2px", opacity: menuOpen ? 0 : 1, transition: "opacity 0.3s" }} />
          <span style={{ display: "block", width: "26px", height: "3px", backgroundColor: "#000", borderRadius: "2px", transition: "all 0.3s", transform: menuOpen ? "rotate(-45deg) translate(5px, -6px)" : "none" }} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          className="mobile-menu"
          style={{
            backgroundColor: "#fff3e0",
            borderTop: "1px solid #f0e4c8",
            padding: "16px 24px 20px",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              style={{
                display: "block",
                fontFamily: "'Quicksand', sans-serif",
                fontWeight: 600,
                fontSize: "1.1rem",
                color: "#000",
                textDecoration: "none",
                padding: "12px 0",
                borderBottom: "1px solid #f0e4c8",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      <style jsx>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .hamburger {
            display: flex !important;
          }
        }
      `}</style>
    </nav>
  );
}
