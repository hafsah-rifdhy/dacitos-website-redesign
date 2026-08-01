"use client";

import { motion } from "framer-motion";
import {
  Trophy,
  Rocket,
  ShieldCheck,
  Clock3,
} from "lucide-react";
import Container from "../layout/Container";

const reasons = [
  {
    icon: Trophy,
    title: "Proven Expertise",
    text: "Experienced engineers delivering high-quality digital products for businesses.",
  },
  {
    icon: Rocket,
    title: "Fast Delivery",
    text: "Agile development with rapid iterations and continuous improvements.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Solutions",
    text: "Secure, scalable and future-ready software built for long-term success.",
  },
  {
    icon: Clock3,
    title: "24/7 Support",
    text: "Dedicated support and maintenance whenever your business needs it.",
  },
];

const stats = [
  {
    number: "120+",
    label: "Projects Delivered",
  },
  {
    number: "40+",
    label: "Happy Clients",
  },
  {
    number: "8+",
    label: "Years Experience",
  },
  {
    number: "99%",
    label: "Client Satisfaction",
  },
];

export default function WhyChoose() {
  return (
    <section className="relative py-32 overflow-hidden">
      <Container>

        <motion.div
          initial={{opacity:0,y:40}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          transition={{duration:.7}}
          className="text-center"
        >

          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-300">
            WHY DACITOS
          </span>

          <h2 className="mt-8 text-5xl font-bold text-white">
            Why Businesses Choose Us
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
            We combine innovation, technology and design to build digital
            experiences that help businesses grow confidently.
          </p>

        </motion.div>

        {/* Stats */}

        <div className="mt-20 grid md:grid-cols-4 gap-6">

          {stats.map((item,index)=>(
            <motion.div
              key={item.label}
              initial={{opacity:0,y:40}}
              whileInView={{opacity:1,y:0}}
              viewport={{once:true}}
              transition={{
                delay:index*.1,
                duration:.6
              }}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 text-center"
            >

              <h3 className="text-5xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                {item.number}
              </h3>

              <p className="mt-4 text-gray-400">
                {item.label}
              </p>

            </motion.div>
          ))}

        </div>

        {/* Cards */}

        <div className="mt-20 grid md:grid-cols-2 gap-8">

          {reasons.map((item,index)=>{

            const Icon=item.icon;

            return(

              <motion.div
                key={item.title}
                initial={{opacity:0,y:60}}
                whileInView={{opacity:1,y:0}}
                viewport={{once:true}}
                transition={{
                  delay:index*.1,
                  duration:.6
                }}
                whileHover={{
                  y:-8
                }}
                className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-violet-500/30 transition"
              >

                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-400 flex items-center justify-center">

                  <Icon className="text-white w-8 h-8"/>

                </div>

                <h3 className="mt-8 text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 leading-8 text-gray-400">
                  {item.text}
                </p>

              </motion.div>

            )

          })}

        </div>

      </Container>
    </section>
  )
}