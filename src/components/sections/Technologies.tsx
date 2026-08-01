"use client";

import { motion } from "framer-motion";
import Container from "../layout/Container";
import {
  Code2,
  Database,
  Cloud,
  BrainCircuit,
  Smartphone,
  ShieldCheck,
} from "lucide-react";

const technologies = [
  {
    icon: Code2,
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    icon: Database,
    title: "Backend",
    items: ["Node.js", "Express", ".NET", "REST APIs"],
  },
  {
    icon: Cloud,
    title: "Cloud",
    items: ["AWS", "Azure", "Docker", "CI/CD"],
  },
  {
    icon: BrainCircuit,
    title: "Artificial Intelligence",
    items: ["OpenAI", "Machine Learning", "Automation", "Analytics"],
  },
  {
    icon: Smartphone,
    title: "Mobile",
    items: ["Flutter", "React Native", "Android", "iOS"],
  },
  {
    icon: ShieldCheck,
    title: "Security",
    items: ["OAuth", "JWT", "Encryption", "Cloud Security"],
  },
];

export default function Technologies() {
  return (
    <section className="relative py-32 overflow-hidden bg-[#060606]">
      <Container>

        <motion.div
          initial={{opacity:0,y:40}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          transition={{duration:.7}}
          className="text-center"
        >

          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-300">
            TECHNOLOGIES
          </span>

          <h2 className="mt-8 text-5xl md:text-6xl font-bold text-white">
            Our Technology Stack
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
            We use industry-leading technologies to build secure,
            scalable and future-ready digital products.
          </p>

        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {technologies.map((tech,index)=>{

            const Icon=tech.icon;

            return(

              <motion.div
                key={tech.title}
                initial={{opacity:0,y:50}}
                whileInView={{opacity:1,y:0}}
                viewport={{once:true}}
                transition={{
                  delay:index*.1,
                  duration:.6
                }}
                whileHover={{
                  y:-8,
                  scale:1.02
                }}
                className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-cyan-500/30 transition-all"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-400">

                  <Icon className="w-8 h-8 text-white"/>

                </div>

                <h3 className="mt-8 text-2xl font-bold text-white">
                  {tech.title}
                </h3>

                <div className="mt-6 flex flex-wrap gap-3">

                  {tech.items.map((item)=>(
                    <span
                      key={item}
                      className="rounded-full bg-white/5 border border-white/10 px-4 py-2 text-sm text-gray-300"
                    >
                      {item}
                    </span>
                  ))}

                </div>

              </motion.div>

            )

          })}

        </div>

      </Container>
    </section>
  );
}