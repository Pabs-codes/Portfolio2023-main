import React from "react";

const ResumeCard = ({ badge, title, title2 , subTitle , subTitle2, des ,des2 }) => {
  return (
    <div className="w-full py-6 flex flex-col gap-2.5 border-b-[1px] border-b-zinc-800">
      {badge === "" ? (
        <h6 className="w-28 text-center text-sm py-[1px] text-designColor border-[1px] border-designColor rounded-sm">
          2021-Present
        </h6>
      ) : (
        <h6 className="w-24 text-center text-sm py-[1px] text-[#999] border-[1px] border-zinc-600 rounded-sm">
          {badge}
        </h6>
      )}
      <h2 className="text-lg font-titleFont text-gray-200 font-medium">
        {title}
      </h2>
      <h2 className="text-sm font-titleFont text-[#999] font-medium">
        {title2}
      </h2>

      
      <p className="text-sm text-[#999] -mt-2">{subTitle}</p>
      <p style={{ fontSize: "0.75rem" }} className="text-[#999] -mt-2">{subTitle2}</p>
      <p className="text-base text-[#999] font-medium pr-10">{des}</p>
      <p className="text-base text-[#999] font-medium pr-10">{des2}</p>
    </div>
  );
};

export default ResumeCard;
