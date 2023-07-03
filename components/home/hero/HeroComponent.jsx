import React from "react";

const HeroComponent = () => {
  return (
    <div className="flex justify-evenly h-[600px] py-12 border-b border-gray-300 ">
      <div className="flex-1 flex flex-col justify-center gap-6">
        <h1 className="text-5xl">
          Learn Dharug Language from the{" "}
          <span className="text-red-600 font-bold">Natives</span>.
        </h1>
        <p className="max-w-[560px] text-justify text-gray-600">
          Dharug langauge is an Aboriginal Langauge from New South Wales. With
          the decrease of people speaking the Dharug Language, this application
          will help you learn the langauge from the resources uploaded by the
          remaining native speakers. By learning the language it will younger
          generation to understand more about the Australian history and
          preserve the Australian culture.
        </p>

        <button className="bg-red-600 text-white w-[150px] rounded-md p-2">
          Explore
        </button>
      </div>
      <div className="flex-1 border border-gray-500">
        <p>image</p>
      </div>
    </div>
  );
};

export default HeroComponent;
