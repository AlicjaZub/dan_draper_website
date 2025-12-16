import React from "react";
import { motion } from "framer-motion";
import { SiAdobephotoshop } from "react-icons/si";

const skills = [
  {
    bgColor: "bg-transparent",
    image: "vectorworks_badge.png",
  },
  {
    name: "Rhino 3d",
    icon: <SiAdobephotoshop size={40} />,
    bgColor: "bg-blue-600",
  },
  {
    name: "Sketchup",
    icon: <SiAdobephotoshop size={40} />,
    bgColor: "bg-orange-600",
  },
  {
    name: "Adobe Suite",
    icon: <SiAdobephotoshop size={40} />,
    bgColor: "bg-red-600",
  },
  {
    name: "Hand Drawing",
    icon: <SiAdobephotoshop size={40} />,
    bgColor: "bg-purple-600",
  },
  {
    name: "Japanese",
    icon: <SiAdobephotoshop size={40} />,
    bgColor: "bg-purple-600",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="container mx-auto px-6 py-12 mt-20">
      <div className="grid grid-cols-2 md:grid-cols-6 gap-8 ">
        {skills.map((skill, id) => (
          <motion.div
            key={id}
            className="
              relative flex items-center justify-center
              w-32 h-32 sm:w-36 sm:h-36
            "
            style={{ transformStyle: "preserve-3d" }}
            initial={{ opacity: 0, scale: 0.7, rotateX: -20 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{
              scale: 1.15,
              rotateX: 18,
              rotateY: -18,
            }}
          >
            {skill.image ? (
              <img
                src="vectorworks_badge.png"
                className="
                w-full h-full object-contain
                drop-shadow-[0_20px_30px_rgba(0,0,0,0.35)]
              "
                alt={skill.name}
              />
            ) : (
              <div
                className="
                relative flex flex-col items-center justify-center text-center
                w-full h-full rounded-full
                bg-gradient-to-br from-red-500 via-green-400 via-blue-500 to-purple-600
                p-[3px]
              "
              >
                <div
                  className="
                    relative flex flex-col items-center justify-center
                    w-full h-full rounded-full
                    bg-black text-white
                    shadow-[inset_0_2px_6px_rgba(255,255,255,0.08),inset_0_-6px_12px_rgba(0,0,0,0.9)]
                  "
                >
                  <div className="
                    absolute inset-0 rounded-full
                    bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.18),transparent_55%)]
                    pointer-events-none
                  " />

                  {skill.icon && (
                    <div className="text-3xl sm:text-4xl translate-z-20">
                      {skill.icon}
                    </div>
                  )}

                  {skill.name && (
                    <p className="mt-2 text-white text-sm sm:text-base font-semibold tracking-wide translate-z-20">
                      {skill.name}
                    </p>
                  )}
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
