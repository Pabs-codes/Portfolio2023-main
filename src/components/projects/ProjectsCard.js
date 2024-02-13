import React from "react";

const ProjectsCard = ({ image, video, title,title2,title3, category, website , website2}) => {
  return (

    <div className="w-full py-8 flex flex-col justify-center  ">
            <div className="mt-5  shadow  shadow-white p-5  rounded ...">  

            {/* max-w-md rounded-3xl p-px bg-gradient-to-b from-blue-300 to-pink-300 dark:from-blue-800 dark:to-purple-800 */}

      <div className="w-full h-full mb-3 overflow-hidden relative  ">
        
       {image && (
          <img
            className="w-full h-full object-cover scale-100 group-hover:scale-110 duration-300 cursor-pointer "
            src={image}
            alt="ImageOne"
            style={{ marginBottom: "10px" }}
          />
        )}
        {video && (
          <video
            className="w-full h-full object-cover scale-100 group-hover:scale-110 duration-300 cursor-pointer"
            src={video}
            autoPlay
            controls
            loop
            alt="VideoOne"
          />
        )}
        
       
        {/* <div className="w-full h-full absolute top-0 left-0 hover:bg-gradient-to-r from-green-600 via-green-600 to-green-200 opacity-20"></div> */}
       
        {/* <div className="w-full h-full absolute top-0 left-0 hover:bg-gradient-to-r from-green-600 via-green-600 to-green-200 opacity-20"></div> */}
      </div>

      <h3 className="font-titleFont text-Base font-semibold text-[#ccc]">

      {/* text-xs: Extra small text size
text-sm: Small text size
text-base: Base (normal) text size
text-lg: Large text size
text-xl: Extra large text size
text-2xl: Double extra large text size
text-3xl: Triple extra large text size
text-4xl: Quadruple extra large text size
text-5xl: Quintuple extra large text size
text-6xl: Sextuple extra large text size */}
        {title}
      </h3>

      <h3 className="font-titleFont text-sm font-semibold text-[#ccc]">
        {title2}
      </h3>

      <h3 className="font-titleFont text-sm text-yellow-300 font-semibold text-[#ccc]">

     {category} 

     </h3>
      
      <h3 className="font-titleFont text-sm text-green-400 font-semibold text-[#ccc] mt-5 mb-5">
        {title3}
      </h3>

      <p className="text-base text-gray-400 -mt-1"> 
        
        {website && (
          <span>
            &#10137;  &nbsp;&nbsp; 
            <a href={website} className="text-blue-500" target="_blank" rel="noopener noreferrer">
     link A
</a>

            
          </span>
          
        )}
            {website2 && (
          <span> <br/>
          &#10137;  &nbsp;&nbsp; 
            <a href={website2} className="text-blue-500" target="_blank" rel="noopener noreferrer">
            Link B
            </a>
            
          </span>
          
        )}
      </p>

      </div>
    </div>
  );
};

export default ProjectsCard;
