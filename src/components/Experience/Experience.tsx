import React from "react";

const Experience = () => {
  return (
    <section id="experience" className="h-96 p-4 w-full ">
      <h2>experience Section</h2>
      <div className="flex flex-col justify-center">
        <div className="flex justify-center">
          <p className="border p-2 m-2">2022</p>
          <div className="border relative">
            <div className="absolute dot top-4"></div>
          </div>
          <p className="m-2">HELLO</p>
        </div>
        <div className="flex justify-center">
          <p className="border p-2 m-2">2023</p>
          <div className="border relative">
            <div className="absolute dot top-4"></div>
          </div>
          <p className="m-2">HELLO</p>
        </div>
        <div className="flex justify-center">
          <p className="border p-2 m-2">2024</p>
          <span className="border"></span>
          <p className="m-2">HELLO</p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
