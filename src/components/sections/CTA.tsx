"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import Container from "../layout/Container";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-32">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-900/30 via-transparent to-cyan-900/30" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 p-12 md:p-20 backdrop-blur-xl"
        >
          {/* Decorative Blurs */}
          <div className="absolute -left-24 top-0 h-64 w-64 rounded-full bg-violet-500/20 blur-3xl" />
          <div className="absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-300">
              LET'S BUILD SOMETHING AMAZING
            </span>

            <h2 className="mt-8 text-5xl font-bold leading-tight text-white md:text-6xl">
              Ready to Transform
              <br />
              Your Business?
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-400">
              Whether you're launching a startup, modernizing your business, or
              building enterprise software, we're here to turn your ideas into
              reality.
            </p>

            <div className="mt-12 flex flex-col justify-center gap-6 sm:flex-row">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 px-8 py-4 font-semibold text-white shadow-xl"
              >
                Start Your Project
                <ArrowRight size={20} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-xl"
              >
                <Phone size={20} />
                Contact Us
              </motion.button>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}