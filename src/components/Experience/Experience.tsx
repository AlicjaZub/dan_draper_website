import React from "react";

const items = [
  {
    title: "The End We Start From (Supervising)",
    year: "2022",
    description: "Hera / Sunnymarch",
  },
  {
    title: "The Gold",
    year: "2022",
    description: "BBC / Paramount",
  },
  {
    title: "Extraordinary",
    year: "2021",
    description: "Disney+",
  },
  {
    title: "Tuesday",
    year: "2021",
    description: "A24",
  },
  {
    title: "Hanna - Season 2",
    year: "2019",
    description: "Amazon / NBC Universal",
  },
  {
    title: "Top Boy (Jamaica)",
    year: "2018",
    description: "Netflix",
  },
];

const Item = ({ item, id }: any) => {
  return id % 2 === 0 ? (
    <div className="mb-10 flex w-full items-start md:items-center justify-between md:flex-row flex-col md:gap-0 gap-4">
      <div className="w-full md:w-5/12 md:text-right pl-10 md:pl-0">
        <h3 className="text-base md:text-lg font-bold">{item.title}</h3>
        <span className="text-xs md:text-sm text-gray-400">{item.year}</span>
        <p className="text-sm md:text-base text-gray-600">{item.description}</p>
      </div>
      <div className="absolute md:static left-2 md:left-auto z-10 h-4 w-4 rounded-full bg-blue-600 border-2 border-white shadow-md"></div>
      <div className="hidden md:block w-5/12"></div>
    </div>
  ) : (
    <div className="mb-10 flex w-full items-start md:items-center justify-between md:flex-row flex-col md:gap-0 gap-4">
      <div className="hidden md:block w-5/12"></div>
      <div className="absolute md:static left-2 md:left-auto z-10 h-4 w-4 rounded-full bg-green-600 border-2 border-white shadow-md"></div>
      <div className="w-full md:w-5/12 md:text-left pl-10 md:pl-0">
        <h3 className="text-base md:text-lg font-bold">{item.title}</h3>
        <span className="text-xs md:text-sm text-gray-400">{item.year}</span>
        <p className="text-sm md:text-base text-gray-600">{item.description}</p>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative mx-auto w-full max-w-4xl px-4 md:px-0"
    >
      <h1 className="text-lg md:text-xl text-center my-8 md:m-10">
        SELECTED EXPERIENCE
      </h1>
      <div className="absolute left-4 md:left-1/2 top-16 md:top-20 h-full w-1 -translate-x-1/2 bg-gray-300 rounded-md"></div>
      {items.map((item, id) => {
        return <Item item={item} id={id} key={id} />;
      })}
    </section>
  );
};

export default Experience;
