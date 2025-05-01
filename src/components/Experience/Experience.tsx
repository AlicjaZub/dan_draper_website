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
    <div className="mb-10 flex w-full items-center justify-between">
      <div className="w-5/12 text-right">
        <h3 className="text-lg font-bold">{item.title}</h3>
        <span className="text-sm text-gray-400">{item.year}</span>
        <p className="text-gray-600">{item.description}</p>
      </div>
      <div className="z-10 h-4 w-4 rounded-full bg-blue-600 border-2 border-white shadow-md"></div>
      <div className="w-5/12"></div>
    </div>
  ) : (
    <div className="mb-10 flex w-full items-center justify-between">
      <div className="w-5/12"></div>
      <div className="z-10 h-4 w-4 rounded-full bg-green-600 border-2 border-white shadow-md"></div>
      <div className="w-5/12 text-left">
        <h3 className="text-lg font-bold">{item.title}</h3>
        <span className="text-sm text-gray-400">{item.year}</span>
        <p className="text-gray-600">{item.description}</p>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="relative mx-auto w-full max-w-4xl">
      <h1 className="text-xl text-center m-10">SELECTED EXPERIENCE</h1>
      <div className="absolute left-1/2 h-full w-1 top-24 -translate-x-1/2 bg-gray-300 rounded-md"></div>
      {items.map((item, id) => {
        return <Item item={item} id={id} key={id} />;
      })}
    </section>
  );
};

export default Experience;
