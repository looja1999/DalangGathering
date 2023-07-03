import React from "react";
import CardComponent from "./CardComponent";

const OurWorkComponent = () => {
  return (
    <div className="flex flex-col py-12 border-b border-gray-300 gap-6">
      <h1 className="text-5xl text-red-600 font-bold">Our work</h1>
      <div className="flex gap-8 ">
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </div>
    </div>
  );
};

export default OurWorkComponent;
