"use client";

import { motion } from "framer-motion";
import Container from "../layout/Container";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "AI Business Dashboard",
    category: "Artificial Intelligence",
    tech: ["Next.js", "Python", "OpenAI"],
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    title: "Cloud ERP Platform",
    category: "Enterprise Software",
    tech: ["React", "Node.js", "AWS"],
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "Healthcare Mobile App",
    category: "Mobile Development",
    tech: ["Flutter", "Firebase", "AI"],
    color: "from-pink-500 to-orange-500",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden py-32 bg-[#050505]"
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
            FEATURED PROJECTS
          </span>

          <h2 className="mt-8 text-5xl md:text-6xl font-bold text-white">
            Our Recent Work
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Innovative digital products built with modern technologies for
            businesses around the world.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-10 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -10,
              }}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
            >
              <div
                className={`h-64 bg-gradient-to-br ${project.color} flex items-center justify-center`}
              >
                <div className="w-52 rounded-2xl border border-white/20 bg-black/30 p-6 backdrop-blur-xl shadow-2xl">
                  <div className="mb-4 flex gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400" />
                    <span className="h-3 w-3 rounded-full bg-green-400" />
                  </div>

                  <div className="space-y-3">
                    <div className="h-3 rounded bg-white/30" />
                    <div className="h-3 w-4/5 rounded bg-white/20" />
                    <div className="h-24 rounded bg-white/10" />
                  </div>
                </div>
              </div>

              <div className="p-8">
                <p className="text-sm uppercase tracking-widest text-violet-400">
                  {project.category}
                </p>

                <h3 className="mt-4 text-2xl font-bold text-white">
                  {project.title}
                </h3>

                <div className="mt-6 flex flex-wrap gap-3">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button className="mt-8 flex items-center gap-2 font-semibold text-cyan-400 transition group-hover:gap-4">
                  View Case Study

                  <ArrowUpRight size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}