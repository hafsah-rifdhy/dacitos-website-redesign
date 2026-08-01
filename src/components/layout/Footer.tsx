"use client";

import Container from "./Container";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#040404]">
      <Container>
        <div className="grid gap-12 py-20 md:grid-cols-2 lg:grid-cols-4">

          {/* COMPANY */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              DACITOS<span className="text-violet-400">.</span>
            </h2>

            <p className="mt-6 leading-7 text-gray-400">
              Providing IT services, software development, cloud solutions,
              and digital infrastructure. Your partner for managed IT,
              consulting, and digital transformation.
            </p>

            {/* SOCIAL BUTTONS */}
            <div className="mt-8 flex gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-semibold text-gray-400 transition hover:border-violet-500/50 hover:bg-violet-500/10 hover:text-white"
                aria-label="LinkedIn"
              >
                in
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-semibold text-gray-400 transition hover:border-violet-500/50 hover:bg-violet-500/10 hover:text-white"
                aria-label="GitHub"
              >
                GH
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-semibold text-gray-400 transition hover:border-violet-500/50 hover:bg-violet-500/10 hover:text-white"
                aria-label="Instagram"
              >
                IG
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="font-semibold text-white">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-3 text-gray-400">
              <li>
                <a href="#" className="transition hover:text-white">
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className="transition hover:text-white"
                >
                  Services
                </a>
              </li>

              <li>
                <a
                  href="#projects"
                  className="transition hover:text-white"
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="transition hover:text-white"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="font-semibold text-white">
              Services
            </h3>

            <ul className="mt-6 space-y-3 text-gray-400">
              <li>Web Development</li>
              <li>Mobile Applications</li>
              <li>Cloud Solutions</li>
              <li>AI Solutions</li>
              <li>Enterprise Software</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div id="contact">
            <h3 className="font-semibold text-white">
              Contact
            </h3>

            <div className="mt-6 space-y-5 text-gray-400">

              <div className="flex items-center gap-3">
                <Mail
                  size={18}
                  className="shrink-0 text-violet-400"
                />

                <span>
                  contact@dacitos.com | sales@dacitos.com
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone
                  size={18}
                  className="shrink-0 text-violet-400"
                />

                <span>
                  +91 85408 68767 | +91 91143 90257
                </span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin
                  size={18}
                  className="shrink-0 text-violet-400"
                />

                <span>
                  1st floor, Raj Bhavan, opposite of the Jio Tower, Dulhin Bazar, Bihar — 801102
Omaxe City, Lucknow, UP — 226025
                </span>
              </div>

            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="flex flex-col gap-4 border-t border-white/10 py-8 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">

          <p>
            © {new Date().getFullYear()} Dacitos. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a href="#" className="transition hover:text-white">
              Privacy Policy
            </a>

            <a href="#" className="transition hover:text-white">
              Terms
            </a>
          </div>

        </div>
      </Container>
    </footer>
  );
}