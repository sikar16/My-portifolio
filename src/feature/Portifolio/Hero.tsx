import { motion } from "framer-motion";
import hero from "../../assets/hero8.jpg";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const image = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

function Hero() {
  return (
    <section className="relative overflow-hidden bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-24 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Content */}
        <motion.div
          className="lg:w-1/2 text-center lg:text-left"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={item}
            className="text-4xl md:text-6xl font-extrabold leading-tight"
          >
            Hi, I'm{" "}
            <span className="text-orange-500">Sikar Yosef</span> 👋
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 text-lg text-gray-600 max-w-xl"
          >
            Frontend Developer & Figma Designer crafting clean,
            user-focused digital experiences.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex justify-center lg:justify-start gap-5"
          >
            <motion.a
              href="#portfolio"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-7 py-3 bg-orange-500 text-white rounded-full font-medium shadow-lg hover:shadow-orange-500/40 transition"
            >
              View My Work
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-7 py-3 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white rounded-full font-medium transition"
            >
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="lg:w-1/2 flex justify-center"
          variants={image}
          initial="hidden"
          animate="visible"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl">
            <img
              src={hero}
              alt="Sikar Yosef"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 rounded-full ring-4 ring-orange-500/30"></div>
          </div>
        </motion.div>
      </div>

      {/* Background Accent */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-orange-200 via-pink-200 to-purple-200 opacity-30" />
    </section>
  );
}

export default Hero;
