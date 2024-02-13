import React from "react";
import { GiMusicalScore } from "react-icons/gi";
import { SiAdobelightroom } from "react-icons/si";
import { GiPlantRoots } from "react-icons/gi";
import { SiYoutubegaming } from "react-icons/si";
import FunFactCard from "./FunFactCard";

const FunFact = () => {
  return (
    <div className="px-0 grid grid-cols-2 md:grid-cols-4 pb-10">
      <FunFactCard icon={<GiMusicalScore />} des="Vocaling" />
      <FunFactCard icon={<SiAdobelightroom />} des="Photography" />
      <FunFactCard icon={<GiPlantRoots />} des="Aquascaping" />
      <FunFactCard icon={<SiYoutubegaming />} des="Gaming" />
    </div>
  );
};

export default FunFact;
