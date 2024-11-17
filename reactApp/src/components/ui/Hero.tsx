import React from "react";

import Image from "next/image";

import heroImage from "../../../public/Images/environment.jpg";

const Hero = (): React.JSX.Element => {
  return (
    <section className="flex items-center justify-center  py-10 gap-12">
      <div className="flex items-center justify-end text-center xl:text-left px-10">
        <span className="text-2xl md:text-4xl md:flex items-center justify-end ">
          Earth Friends <br />
          Building a Greener Future Through Eco-Friendly Practices like Planting
          Trees, using eco-friendly products, collecting and dumping garbage
          responsibliy, Electric Vehicle , running environment campaign and many
          more....
        </span>
      </div>

      <div className="flex items-center justify-center py-10 px-10 md:w-1/3 md:h-1/3">
        <Image
          src={heroImage}
          alt="hero image"
          className="rounded-2xl overflow-hidden object-cover w-full max-h-[50rem] max-w-[50rem] md:max-w-full md:max-h-full md:min-w-[45rem] md:min-h-[30rem]"
        />
      </div>
    </section>
  );
};

export default Hero;
