"use client";
import { motion } from "framer-motion";
import { getProject, getDrawing } from "@/lib/data";
import React, { useEffect, useState } from "react";
import { ProjectType } from "../Projects/Projects";
import { DrawingType } from "../Drawings/Drawings";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/thumbs";

const ProjectCard = ({ isOpen, onClose, id, type }: any) => {
  const [currentProject, setCurrentProject] = useState<ProjectType | null>(
    null
  );
  const [currentDrawing, setCurrentDrawing] = useState<DrawingType | null>(
    null
  );
  const [currentImages, setCurrentImages] = useState<String[] | null>([]);
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  useEffect(() => {
    if (type === "drawing") {
      setCurrentDrawing(getDrawing(id) as DrawingType);
    } else {
      setCurrentProject(getProject(id) as ProjectType);
    }
  }, [id, type]);

  useEffect(() => {
    if (currentProject) {
      setCurrentImages(
        [
          currentProject.image,
          currentProject.image1,
          currentProject.image2,
          currentProject.image3,
          currentProject.image4,
          currentProject.image5,
        ].filter(Boolean) as string[]
      );
    }
  }, [currentProject]);

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
        className="bg-black rounded-2xl shadow-xl p-8 relative z-50 m-6 mt-16 md:p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-3xl text-gray-500 hover:text-black"
        >
          ✕
        </button>
        {type === "project" && currentProject && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 rounded-2xl shadow-lg overflow-hidden">
            <div className="flex items-center justify-center bg-black">
              <div className="w-full">
                <Swiper
                  modules={[Thumbs]}
                  thumbs={{ swiper: thumbsSwiper }}
                  className="w-full h-96 mb-4"
                >
                  {currentProject.video && (
                    <SwiperSlide>
                      <div className="w-full h-full flex justify-center items-center bg-black">
                        <iframe
                          width="100%"
                          height="100%"
                          src={`https://www.youtube.com/embed/${currentProject.video}`}
                          title="Video"
                          allowFullScreen
                        />
                      </div>
                    </SwiperSlide>
                  )}

                  {currentImages &&
                    currentImages?.map((img, i) => (
                      <SwiperSlide key={i}>
                        <img
                          src={`${img}.jpg`}
                          loading="lazy"
                          decoding="async"
                          alt={`Slide ${i + 1}`}
                          className="object-cover w-full h-full"
                        />
                      </SwiperSlide>
                    ))}
                </Swiper>

                <Swiper
                  onSwiper={setThumbsSwiper}
                  watchSlidesProgress
                  slidesPerView={4}
                  spaceBetween={10}
                  className="w-full h-24"
                >
                  {currentProject.video && (
                    <SwiperSlide>
                      <img
                        src={`https://img.youtube.com/vi/${currentProject.video}/hqdefault.jpg`}
                        loading="lazy"
                        decoding="async"
                        alt="Video thumbnail"
                        className="object-cover w-full h-full cursor-pointer"
                      />
                    </SwiperSlide>
                  )}

                  {currentImages &&
                    currentImages?.map((img, i) => (
                      <SwiperSlide key={i}>
                        <img
                          src={`${img}.jpg`}
                          loading="lazy"
                          decoding="async"
                          alt={`Thumbnail ${i + 1}`}
                          className="object-cover w-full h-full cursor-pointer border-2 border-gray-300"
                        />
                      </SwiperSlide>
                    ))}
                </Swiper>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <h1 className="text-2xl font-bold text-gray-500">
                {currentProject.title}
              </h1>
              <p className="text-sm text-gray-500">
                Role: {currentProject.role}
              </p>
              <p className="text-sm text-gray-500">
                {currentProject.secondary_role}: {currentProject.name}
              </p>
              <p className="text-sm text-gray-500">
                Company: {currentProject.company}
              </p>
              {currentProject.notes && (
                <p className="text-sm text-gray-500">{currentProject.notes}</p>
              )}
            </div>
          </div>
        )}
        {currentDrawing && (
          <div className="grid grid-cols-1 rounded-3xl shadow-lg overflow-hidden">
            <div className="flex items-center justify-center bg-black p-4">
              <img
                src={`${currentDrawing?.image}.jpg`}
                loading="lazy"
                decoding="async"
                alt={currentDrawing?.title}
                className="object-cover h-full w-full max-h-[650px]"
              />
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default ProjectCard;
