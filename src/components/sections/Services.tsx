"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Smartphone,
  Cloud,
  BrainCircuit,
  ShieldCheck,
  Database,
} from "lucide-react";
import Container from "../layout/Container";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Modern, responsive, and scalable web applications built with the latest technologies.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "Beautiful Android and iOS applications with seamless user experiences.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Deploy secure and highly available applications using cloud infrastructure.",
  },
  {
    icon: BrainCircuit,
    title: "AI Solutions",
    description:
      "Integrate AI into your business to automate processes and improve decisions.",
  },
  {
    icon: Database,
    title: "Enterprise Systems",
    description:
      "Robust backend systems, APIs and databases built for business growth.",
  },
  {
    icon: ShieldCheck,
    title: "Cyber Security",
    description:
      "Protect applications and infrastructure with modern security practices.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-32 overflow-hidden bg-[#070707]"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-5 py-2 text-sm text-violet-300">
            OUR SERVICES
          </span>

          <h2 className="mt-8 text-5xl md:text-6xl font-bold text-white">
            What We Build
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            We create innovative digital solutions that help businesses grow,
            scale, and transform through modern technology.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.6,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition-all duration-300 hover:border-violet-500/40 hover:shadow-[0_0_40px_rgba(139,92,246,0.25)]"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-400">
                  <Icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-white">
                  {service.title}
                </h3>

                <p className="mt-4 leading-8 text-gray-400">
                  {service.description}
                </p>

                <button className="mt-8 font-semibold text-violet-400 transition group-hover:translate-x-2">
                  Learn More →
                </button>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}