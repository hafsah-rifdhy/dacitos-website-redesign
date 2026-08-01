"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import Container from "./Container";

const links = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="fixed left-0 top-0 z-50 w-full">
        <Container>
          <motion.nav
            initial={{ y: -70, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className={`mt-3 flex h-[68px] items-center justify-between rounded-2xl border px-4 transition-all duration-500 sm:mt-4 sm:h-[72px] sm:px-5 lg:mt-6 lg:rounded-full lg:px-7 ${
  scrolled
    ? "border-white/[0.14] bg-black/40 shadow-[0_20px_60px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-2xl"
    : "border-white/[0.12] bg-white/[0.035] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-2xl"
}`}
          >
            {/* LOGO */}
            <Link
              href="#"
              onClick={() => setMenuOpen(false)}
              className="group flex min-w-0 items-center gap-3"
            >
              <div className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-violet-600 via-fuchsia-500 to-cyan-400 shadow-[0_0_25px_rgba(139,92,246,0.3)]">
                <span className="relative z-10 font-bold text-white">
                  D
                </span>

                <div className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              <div className="min-w-0">
                <p className="text-base font-bold tracking-[0.08em] text-white sm:text-lg">
                  DACITOS
                </p>

                <p className="hidden text-[10px] tracking-wide text-gray-500 sm:block">
                  SOFTWARE • AI • CLOUD
                </p>
              </div>
            </Link>

            {/* DESKTOP LINKS */}
            <div className="hidden items-center gap-7 lg:flex xl:gap-10">
              {links.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group relative py-2 text-sm font-medium text-gray-400 transition-colors duration-300 hover:text-white"
                >
                  {item.name}

                  <span className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-violet-400 to-cyan-400 transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* DESKTOP CTA */}
            <Link
              href="#contact"
              className="group hidden items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-600 to-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_30px_rgba(139,92,246,0.3)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(139,92,246,0.5)] lg:flex"
            >
              Let's Talk

              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            {/* MOBILE MENU BUTTON */}
            <button
              type="button"
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((current) => !current)}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-white transition hover:bg-white/10 lg:hidden"
            >
              {menuOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </motion.nav>
        </Container>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* BACKDROP */}
            <motion.button
              type="button"
              aria-label="Close navigation menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-md lg:hidden"
            />

            {/* MENU PANEL */}
            <motion.div
              initial={{ opacity: 0, y: -25, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.97 }}
              transition={{
                duration: 0.25,
                ease: "easeOut",
              }}
              className="fixed left-5 right-5 top-[92px] z-50 overflow-hidden rounded-[28px] border border-white/10 bg-[#0b0b10]/95 p-3 shadow-[0_30px_100px_rgba(0,0,0,0.7)] backdrop-blur-2xl sm:left-6 sm:right-6 sm:top-[100px] lg:hidden"
            >
              <div className="flex flex-col">
                {links.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.05 + index * 0.05,
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="group flex items-center justify-between rounded-2xl px-5 py-4 text-lg font-medium text-gray-300 transition hover:bg-white/[0.06] hover:text-white"
                    >
                      {item.name}

                      <ArrowRight
                        size={17}
                        className="text-gray-600 transition group-hover:translate-x-1 group-hover:text-violet-400"
                      />
                    </Link>
                  </motion.div>
                ))}

                <div className="my-2 h-px bg-white/10" />

                <Link
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="mt-2 flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 via-fuchsia-600 to-violet-600 px-6 py-4 font-semibold text-white shadow-[0_0_30px_rgba(139,92,246,0.25)]"
                >
                  Start a Conversation
                  <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}