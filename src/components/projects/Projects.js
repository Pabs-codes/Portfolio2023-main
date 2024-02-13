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
  reha
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
 
 video={esstee}
 title="Esstee singapore pte ltd."
 title2="(Trading)"
 category="Corporate Website (React)"
 title3="Website URL's &#10534;"
 website="https://essteesingapore.com"
 website2="https://essttee.netlify.app"
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



         

       
       
        </div>
        <div className="px-6">


        <ProjectsCard
 
          video={rsf}
          title="Rupasinghe Steel & Fabrication PVT ltd"
          title2="(Construction)"
          category="Corporate Website (React)"
          title3="Website URL's &#10534;"
          website="https://rupasinghesteels.com"
          website2="https://rupasinghe.netlify.app"
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
            image={ workImgFive}
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
