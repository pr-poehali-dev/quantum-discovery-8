import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/fc32a580-6549-41a8-90ed-5bd555726de8/files/5450a96d-a502-45a5-9943-4b26fc9a76bc.jpg"
          alt="Wedding ceremony"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-black/30 z-0" />
      <div className="relative z-10 text-center text-white px-6">
        <p className="text-sm md:text-base uppercase tracking-[0.3em] mb-4 opacity-80">
          Приглашение на свадьбу
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4">
          Полина & Андрей
        </h1>
        <p className="text-xl md:text-2xl opacity-90 tracking-wide">
          20 июня 2026
        </p>
      </div>
    </div>
  );
}