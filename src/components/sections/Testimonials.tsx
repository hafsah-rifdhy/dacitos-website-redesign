"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Container from "../layout/Container";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, InnovateX",
    review:
      "Dacitos Technologies transformed our entire infrastructure. Their cloud migration saved us 40% in operational costs while improving performance dramatically.",
  },
  {
    name: "Amith Agarwal",
    role: "Founder & CEO, NextGen Solutions",
    review:
      "The mobile app developed by Dacitos Technologies completely transformed our customer experience. We saw a huge increase in user engagement and app performance after launch.",
  },
  {
    name: "Rahul Sharma",
    role: "Founder,Sharma Logistics Pvt. Ltd.",
    review:
      "Working with Dacitos Technologies was a game changer for our business. Their ERP solution streamlined our operations and improved delivery tracking across multiple cities.",
  },
  {
    name: "Priya Mehta",
    role: "Managing Director,Mehta Fashion House",
    review:
      "Their eCommerce development team delivered exactly what we needed. Our online sales doubled within 6 months after launching the new platform.",
  },
  {
    name: "Arjun Verma",
    role: "Head of IT,Verma Finserve",
    review:
      "Dacitos Technologies provided exceptional support during our digital transformation. Their team was professional, responsive, and highly skilled.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden py-32 bg-[#050505]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-5 py-2 text-sm text-violet-300">
            TESTIMONIALS
          </span>

          <h2 className="mt-8 text-5xl md:text-6xl font-bold text-white">
            What Our Clients Say
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Trusted by businesses to deliver reliable, scalable and innovative
            digital solutions.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
              }}
              whileHover={{
                y: -8,
              }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl hover:border-violet-500/30 transition-all"
            >
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="mt-6 leading-8 text-gray-300">
                "{testimonial.review}"
              </p>

              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 text-lg font-bold text-white">
                  {testimonial.name
                    .split(" ")
                    .map((word) => word[0])
                    .join("")}
                </div>

                <div>
                  <h4 className="font-semibold text-white">
                    {testimonial.name}
                  </h4>

                  <p className="text-sm text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}