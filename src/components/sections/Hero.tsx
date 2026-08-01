"use client";

import { motion } from "framer-motion";
import AnimatedBackground from "../animations/AnimatedBackground";
import Container from "../layout/Container";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050505] flex items-center">
      <AnimatedBackground />

      <Container>
        <div className="grid lg:grid-cols-2 gap-20 items-center pt-32">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-5 py-2 text-sm text-violet-300">
              ✦ Engineering Digital Excellence
            </span>

            <h1 className="mt-8 text-6xl md:text-7xl xl:text-8xl font-bold leading-[0.95] tracking-tight">
              Build
              <br />

              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                Smarter
              </span>

              <br />

              Products.
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-gray-400">
              Dacitos transforms ambitious ideas into premium digital
              experiences using AI, cloud technologies, scalable software,
              and intuitive user interfaces.
            </p>

            <div className="mt-10 flex gap-5">
              <Button text="Start Project" />
            </div>

            <div className="mt-14 flex gap-14">
              <div>
                <h3 className="text-4xl font-bold text-white">25+</h3>
                <p className="mt-2 text-gray-500">Projects Completed</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-white">23+</h3>
                <p className="mt-2 text-gray-500">Happy Clients</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-white">1+</h3>
                <p className="mt-2 text-gray-500">Years Experience</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-white">100%</h3>
                <p className="mt-2 text-gray-500">Customer Satisfaction</p>
              </div>

            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1,
            }}
            className="relative flex justify-center items-center h-[650px]"
          >
            {/* Background Glow */}
            <div className="absolute w-[650px] h-[650px] rounded-full bg-violet-600/15 blur-[160px]" />

            {/* Ring 1 */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 45,
                ease: "linear",
              }}
              className="absolute w-[520px] h-[520px] rounded-full border border-violet-500/20"
            />

            {/* Ring 2 */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                repeat: Infinity,
                duration: 28,
                ease: "linear",
              }}
              className="absolute w-[390px] h-[390px] rounded-full border border-cyan-400/20"
            />

            {/* Ring 3 */}
            <motion.div
              animate={{
                rotate: 360,
                scale: [1, 1.08, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 16,
              }}
              className="absolute w-[270px] h-[270px] rounded-full border border-fuchsia-400/30"
            />

            {/* Orbit */}
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                repeat: Infinity,
                duration: 12,
                ease: "linear",
              }}
              className="absolute w-[430px] h-[430px]"
            >
              <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_20px_#67e8f9]" />
            </motion.div>

            {/* Core */}
            <motion.div
              animate={{
                y: [-20, 20, -20],
                scale: [1, 1.05, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 6,
              }}
              className="relative h-56 w-56 rounded-full bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-300 shadow-[0_0_180px_rgba(139,92,246,0.65)]"
            />
          </motion.div>

        </div>
      </Container>
    </section>
  );
}