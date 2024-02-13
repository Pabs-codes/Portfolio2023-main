import React from 'react'
import { BsDatabaseFillGear } from "react-icons/bs";
import { AiTwotoneAppstore } from "react-icons/ai";
import { SiAntdesign } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import ServicesCard from "./ServicesCard";

const MyServices = () => {
  return (
   
    <div className="grid grid-cols-1 md:grid-cols-2 ">
      <ServicesCard
        icons={<BiCodeAlt />}
        title="Front-End Development"
        subTitle="I excel in Front-End Development with React for interactive interfaces, HTML/CSS for appealing designs, and JavaScript for interactivity. I'm familiar with Angular, jQuery, and web animation to enhance user experiences."
      />
      <ServicesCard
        icons={<SiAntdesign />}
        title="Back-End Development"
        subTitle="In Back-End Development, I use Node.js for server-side development and create scalable APIs. I manage MongoDB for NoSQL databases, handle MySQL for relational databases, and work with Firebase and PostgreSQL for efficient data storage and retrieval in web applications."
      />
      <ServicesCard
        icons={<AiTwotoneAppstore />}
        title="Mobile Application"
        subTitle="In Mobile App Development, I've honed my skills using Android Studio to create native Android applications. I'm also actively expanding my expertise by learning and developing with cutting-edge technologies like React Native, which enables cross-platform mobile app development."
      />
      <ServicesCard
        icons={<BsDatabaseFillGear />}
        title="Data Base Management"
        subTitle="I proficiently manage both NoSQL and relational databases, guaranteeing efficient data handling for optimal system performance, while continuously developing additional skills to stay at the forefront of the field."
      />
    </div>
  )
}

export default MyServices