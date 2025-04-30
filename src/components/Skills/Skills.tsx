import React from "react";
import { motion } from "framer-motion";
import { SiAdobephotoshop } from "react-icons/si";

const skills = [
  {
    name: "Photoshop",
    icon: <SiAdobephotoshop size={40} />,
    bgColor: "bg-blue-600",
  },
  {
    name: "Illustrator",
    icon: <SiAdobephotoshop size={40} />,
    bgColor: "bg-orange-600",
  },
  {
    name: "Adobe XD",
    icon: <SiAdobephotoshop size={40} />,
    bgColor: "bg-red-600",
  },
  {
    name: "Figma",
    icon: <SiAdobephotoshop size={40} />,
    bgColor: "bg-purple-600",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            className={`flex justify-center items-center flex-col text-center w-32 h-32 ${skill.bgColor} rounded-full`}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{
              scale: 1.1,
              backgroundColor: "rgb(55 48 163)",
            }}
          >
            {skill.icon}
            <p className="mt-4 font-medium text-lg text-gray-700">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
