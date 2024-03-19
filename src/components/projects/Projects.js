import React from "react";
import {
  workImgOne,
  workImgFour,
  workImgFive,
  workImgSix,
  workImgSeven,
  workImgEight,
  SPFvid,
  SPFss,
  SHvid,
  esstee,
  rsf,
  reha,
  sunshine,
  spf2,
  stenco,
} from "../../assets";

import Title from "../home/Title";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <div>
      <Title title="Latest" subTitle="Projects (2023-24)" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
        <div className="px-6">

          <ProjectsCard
            video={sunshine}
            title="Sunshine-Grand Srilanka"
            title2="(Hotel)"
            category="Business Website (React)"
            title3="Website URL's &#10534;"
            website="https://sunshinegrand.lk"
            website2="https://sunshinelk.netlify.app"
          />



          

          <ProjectsCard
            video={reha}
            title="REHA PVT ltd"
            title2="(Building Materials)"
            category="Corporate Website (React)"
            title3="Website URL's &#10534;"
            website="https://rehasteel.com"
            website2="https://rehasteel.netlify.app"
          />

<ProjectsCard
            video={stenco}
            title="Stenco International"
            title2="(Trading)"
            category="Corporate Website (React)"
            title3="Website URL's &#10534;"
            website="https://nothostedyet.com"
            website2="https://stencoitc.netlify.app"
          />

        </div>
        <div className="px-6">

        <ProjectsCard
            video={spf2}
            title="Smart Pet Feeder V2 "
            title2="(Product | web + mobileApp)"
            category="Web Based Application  (React + React Native)"
            title3="Website URL's &#10534;"
            website="https://smartpetfeeder.cyclic.app/"
            website2="https://smartpetfeeder.cyclic.app/"
          />

          <ProjectsCard
            video={rsf}
            title="Rupasinghe Steel & Fabrication PVT ltd"
            title2="(Construction)"
            category="Corporate Website (React)"
            title3="Website URL's &#10534;"
            website="https://rupasinghesteels.com"
            website2="https://rupasinghe.netlify.app"
          />

<ProjectsCard
            video={esstee}
            title="Esstee singapore pte ltd."
            title2="(Trading)"
            category="Corporate Website (React)"
            title3="Website URL's &#10534;"
            website="https://essteesingapore.com"
            website2="https://essttee.netlify.app"
          />

          

          

          
        </div>
      </div>

      {/* _______________________________________________________________________________________________ */}

      <Title title="Old" subTitle="Projects" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
        <div className="px-6">
          <ProjectsCard
            title="Smart Pet Feeder"
            category="Website"
            image={SPFss}
            video={SPFvid}
          />

          <ProjectsCard
            title="Smart Home Prototype"
            category="Design"
            image={workImgOne}
            video={SHvid}
          />
          {/* <ProjectsCard
            title="Infinity Logo"
            category="Logo"
            image={workImgTwo}
          /> */}
          <ProjectsCard
            title="Pab's Blog"
            category="Website"
            image={workImgFour}
          />
        </div>
        <div className="px-6">
          <ProjectsCard
            title="Pab's Gallery"
            category="Website"
            image={workImgFive}
          />
          <ProjectsCard
            title="Car Rental Management System"
            category="Web Application"
            image={workImgSix}
          />
          <ProjectsCard
            title="Buying & Selling site"
            category="Website"
            image={workImgEight}
          />

          <ProjectsCard
            title="Instagram Clone"
            category="Website"
            image={workImgSeven}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
