import { motion } from "framer-motion";
import { getProject } from "@/lib/data";
import React, { useEffect, useState } from "react";
import { ProjectType } from "../Projects/Projects";

const ProjectCard = ({ isOpen, onClose, children, id }: any) => {
  const [currentProject, setCurrentProject] = useState<ProjectType>();

  useEffect(() => {
    const project = getProject(id);
    setCurrentProject(project as ProjectType);
  }, []);

  if (!isOpen) return null;
  return (
    <div
      className="fixed inset-0 bg-black/40 backdrop-blur-lg flex items-center justify-center z-30"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.96 }}
        transition={{
          duration: 2.0,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="bg-black rounded-2xl shadow-xl p-6 relative z-50"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 hover:text-black"
        >
          ✕
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 rounded-2xl shadow-lg overflow-hidden">
          <div className="flex items-center justify-center bg-black">
            <img
              src={`${currentProject?.image}.jpg`}
              alt={currentProject?.title}
              className="object-cover h-full w-full max-h-96"
            />
          </div>

          <div className="p-6 space-y-4">
            <h1 className="text-2xl font-bold text-gray-800">
              {currentProject?.title}
            </h1>
            <h3 className="text-lg text-gray-600">{currentProject?.title}</h3>
            {currentProject?.company && (
              <p className="text-sm text-gray-500 mt-4">
                {currentProject?.name}
              </p>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
