"use client";

import { motion } from "framer-motion";
import Container from "../layout/Container";
import {
  Lightbulb,
  PenTool,
  Code2,
  Rocket,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "Understanding business goals, challenges, and user requirements before development begins.",
    icon: Lightbulb,
  },
  {
    number: "02",
    title: "Design",
    description:
      "Creating intuitive UI/UX, prototypes, and scalable architecture for the product.",
    icon: PenTool,
  },
  {
    number: "03",
    title: "Development",
    description:
      "Building secure, scalable, and high-performance applications using modern technologies.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Launch & Support",
    description:
      "Deployment, monitoring, continuous improvements, and long-term maintenance.",
    icon: Rocket,
  },
];

export default function Process() {
  return (
    <section className="relative py-32 overflow-hidden">
      <Container>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="text-center"
        >
          <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-5 py-2 text-sm text-violet-300">
            OUR PROCESS
          </span>

          <h2 className="mt-8 text-5xl md:text-6xl font-bold text-white">
            From Idea to Reality
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
            Every successful digital product starts with a structured process.
            Here's how we turn ideas into scalable software.
          </p>
        </motion.div>

        <div className="relative mt-24">

          {/* Center Line */}
          <div className="absolute left-6 top-0 h-full w-[2px] bg-gradient-to-b from-violet-500 via-cyan-400 to-transparent md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-16">

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.15,
                    duration: .6,
                  }}
                  className={`relative flex flex-col md:flex-row ${
                    index % 2 === 0
                      ? "md:flex-row"
                      : "md:flex-row-reverse"
                  } items-center gap-10`}
                >

                  {/* Timeline Dot */}
                  <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 z-20 h-6 w-6 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 shadow-[0_0_20px_rgba(139,92,246,.8)]" />

                  <div className="w-full md:w-5/12 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">

                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-400">
                      <Icon className="h-8 w-8 text-white" />
                    </div>

                    <span className="mt-6 block text-sm text-violet-400 font-semibold">
                      STEP {step.number}
                    </span>

                    <h3 className="mt-3 text-3xl font-bold text-white">
                      {step.title}
                    </h3>

                    <p className="mt-5 leading-8 text-gray-400">
                      {step.description}
                    </p>

                  </div>

                </motion.div>
              );
            })}

          </div>

        </div>

      </Container>
    </section>
  );
}