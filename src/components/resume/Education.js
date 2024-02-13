import React from "react";
import ResumeTitle from "./ResumeTitle";
import { FaUniversity } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <div className="w-full grid grid-cols-9 px-6">
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Education" icon={<FaUniversity />} />
        <ResumeCard
          badge=""
          title="National Institute of&nbsp;&nbsp;Business Management"
          subTitle2="NIBM |DCSD21.1F |HNDSE 22.1F"
          des="Higher National Diploma in Software Engineering
          (2022-2023)"
          des2="Diploma in Computer System Designing
          (2021-2022)"
        />
        <ResumeCard
          badge="2015-2016"
          title="E-Soft"
          subTitle="School of Computing"
          des="Foundation in Information Technology"
        />
        <ResumeCard
          badge="2010 - 2018"
          title="Poramadulla Central College"
      
          des="Graduated in 2018,Completed A/L and O/L examinations, laying the foundation for my educational and personal growth!"
        />
      </div>


      <div className="w-full h-full hidden lgl:flex justify-center items-center">

      <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>
      <div className="col-span-10 md:col-span-4">
        <ResumeTitle title="Course Works" icon={<GiGraduateCap />} />
        <ResumeCard
          badge="2021 - 2023"
        
          title2="Robotic Application Development | Programming Data Structures and Algorithms 
          | Enterprise Application Development | Advanced Database Management Systems 
          | Digital Image Processing | Statistics for Computing | Data Warehousing and Data Mining 
          | Mobile Application Development | Internet of Things | Machine Learning for Artificial Intelligence 
          | Software Security | IT Management Practice."
       />
      </div>
    </div>
  );
};

export default Education;