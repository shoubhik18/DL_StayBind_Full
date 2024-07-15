import React from "react";
import line from "../assets/Line2.png";
import building from "../assets/scrapers.png";

const About = () => {
  return (
    <div>
      <h1 className="text-center font-extrabold text-4xl">About</h1>
      <img className="mx-auto" src={line} alt="" />

      <div className="flex py-28 justify-center items-center w-11/12 mx-auto space-x-10">
        <img className="h-[80vh] w-[28vw] " src={building} alt="" />
        <div className="space-y-6">
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
            mollitia. Eos, autem quia. Provident repellendus, corrupti similique
            necessitatibus beatae quidem quasi odit iure ad cumque quo! Numquam
            quam quisquam voluptates.
          </p>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
            mollitia. Eos, autem quia. Provident repellendus, corrupti similique
            necessitatibus beatae quidem quasi odit iure ad cumque quo! Numquam
            quam quisquam voluptates.
          </p>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
            mollitia. Eos, autem quia. Provident repellendus, corrupti similique
            necessitatibus beatae quidem quasi odit iure ad cumque quo! Numquam
            quam quisquam voluptates.
          </p>

          <p className="text-blue-500 text-xl p-6 pt-10 font-semibold">Learn More → </p>
        </div>
      </div>
    </div>
  );
};

export default About;
