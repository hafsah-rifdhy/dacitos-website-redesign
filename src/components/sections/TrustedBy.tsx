"use client";

import { motion } from "framer-motion";
import Container from "../layout/Container";

const companies = [
  "Microsoft",
  "Google",
  "AWS",
  "Azure",
  "Oracle",
  "Docker",
];

export default function TrustedBy() {
  return (
    <section className="relative py-24 overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-center text-gray-500 uppercase tracking-[0.35em] text-sm">
            Trusted Technologies
          </p>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {companies.map((company) => (
              <motion.div
                key={company}
                whileHover={{
                  y: -8,
                  scale: 1.05,
                }}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl py-7 text-center shadow-lg transition"
              >
                <h3 className="text-white font-semibold text-lg">
                  {company}
                </h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}