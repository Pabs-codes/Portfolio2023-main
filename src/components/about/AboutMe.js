import React, { useState} from 'react';
import { flagImg } from "../../assets/index";
import { useTypewriter } from 'react-simple-typewriter';


const AboutMe = () => {
  const [isTypingDone, setIsTypingDone] = useState(false);
  const [text] = useTypewriter({
    words: ['Thank you for visiting my portfolio, I\'m excited to share my work & experiences with you.'],
    typeSpeed: 30,
    deleteSpeed: 20,
    delaySpeed: 2000,
    onTypingEnd: () => setIsTypingDone(true),
  });
  
return (
  <div className="flex flex-col md:flex-row pb-6">
  <div className="w-full md:w-1/2 text-zinc-400 px-6 border-r-[1px] border-r-zinc-800 flex items-center">
    <div className="py-6">
      <h2 className="font-semibold mb-1">Hello! I'm Pabasara . . . <br></br> </h2>


      <p className="text-sm leading-6"> <br></br>
      Welcome to my portfolio! <br></br>
      I'm an undergraduate software engineering student driven by a profound curiosity for cutting-edge technologies. 
      My journey has been marked by hands-on experiences through academic projects and personal initiatives. <br></br> <br></br>
      I am currently on the lookout for opportunities as a Software Engineering Intern to continue nurturing my skills and expanding my knowledge. <br></br> <br></br>

      </p>

<div>
    <p className="text-sm leading-6">
      {isTypingDone && (
        <>
         <br></br> <br></br>Thank you for visiting my portfolio, <br></br> I'm excited to share my work & experiences with you.</>
      )}
    </p>
    {!isTypingDone && <p className="text-sm leading-6">{text}</p>}
  </div>

    </div>
  </div>
  <div className="w-full md:w-1/2 p-6">
    <ul className="flex flex-col gap-1">
      <li className="aboutRightLi">
        <span className="aboutRightLiSpan">Age:</span>
        24
      </li>

      <li className="aboutRightLi">
<span className="aboutRightLiSpan">Residence:</span>
<span>
  
<div style={{ display: 'flex', alignItems: 'center' }}>
<span> Sri L</span>
<span> ank </span><span>a |</span>
<span>
  <img className='w-6 h-6' src={flagImg} alt='bannerImage' />
</span>
</div>


</span>
</li>

      <li className="aboutRightLi">
        <span className="aboutRightLiSpan">Freelance:</span>
        Available
      </li>
      <li className="aboutRightLi">
        <span className="aboutRightLiSpan">Address:</span>
        Walapane-Nuwara Eliya


      </li>
    </ul>
  </div>
</div>
);
};

export default AboutMe