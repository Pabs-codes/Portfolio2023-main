import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import CV from "../../assets/PabasaraNavod_CV.pdf";
import { bannerImg } from "../../assets/index";
import { AiFillGithub,AiFillLinkedin,AiFillFacebook,AiFillInstagram} from "react-icons/ai";
import { FaSquareThreads,FaSquareXTwitter } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { BsPersonFillDown,BsFillSendFill,BsPinterest } from "react-icons/bs";
import { useMediaQuery } from 'react-responsive';
import Animation from "../../assets/Anim.json"
import Lottie from "lottie-react";


const Left = () => {

  const openGitHub = () => {
    window.open('https://github.com/Pabs-codes', '_blank');
  };

  const openLinkedIn = () => {
    window.open('https://www.linkedin.com/in/pabasara-navod', '_blank');
  };

  const openFacebook = () => {
    window.open('https://web.facebook.com/pabasaranvd.nish/', '_blank');
  };

  const openInstagram = () => {
    window.open('https://www.instagram.com/pabasara_navod__', '_blank');
  };

  const openThreads = () => {
    window.open('https://www.threads.net/@pabasara_navod__', '_blank');
  };

  const openPinterest = () => {
    window.open('https://www.pinterest.com/PabsGal99/', '_blank');
  };

  const openTwitter = () => {
    window.open('https://twitter.com/NavodPabasara', '_blank');
  };

  const sendEmail = () => {
    window.open('mailto:pabscodes@gmail.com');
  };
  
  const [text] = useTypewriter({
    words: ["Web Developer", "Full Stack Developer", "UI/UX Designer","Front-End Developer"],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 20,
    delaySpeed: 2000,
  });
    // banner image handle on desk and mobile
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1024 }); 
  const isMobileDevice = useMediaQuery({ maxWidth: 767 });

  const handleCallClick = () => {
    window.location.href = 'tel:+94701852706'; 
  };
 
  return (
    <div className="w-full lgl:w-5/12 h-full bg-bodyColor rounded-2xl shadow-testShwdow z-10">
    <div className="w-full h-3/5">
      {isDesktopOrLaptop && ( // Render the image only on desktop screens
        <img
          className="w-full h-full object-cover rounded-2xl"
          src={bannerImg}
          loading="priority"
          alt="bannerImage"
        />
        // <Lottie animationData={Animation}/>
      )}

         {isMobileDevice && (
          // <img
          //   className="w-full h-auto object-cover rounded-2xl"
          //   src={bannerImg}
          //   loading="priority"
          //   alt="bannerImage"
          // />

          <Lottie animationData={Animation}/>
        )}
      
    </div>
    
      <div className="w-full h-2/5 flex flex-col justify-between border-t-0 rounded-bl-xl rounded-br-xl">
        <div className="flex flex-col items-center gap-2 py-10">
          <h1 className="text-textColor text-4xl font-semibold">Pabasara Navod</h1>
          <p className="text-base text-designColor tracking-wide">
            {text}
            <Cursor cursorBlinking="false" cursorStyle="|" />
          </p>
          <div className="flex justify-center gap-2 mt-2">
      <span className="hover:text-designColor duration-300 cursor-pointer text-xl" onClick={openGitHub}>
        <AiFillGithub />
      </span>
      <span className="hover:text-designColor duration-300 cursor-pointer text-xl" onClick={openLinkedIn}>
        <AiFillLinkedin />
      </span>
      <span className="hover:text-designColor duration-300 cursor-pointer text-xl" onClick={openFacebook}>
        <AiFillFacebook />
      </span>
      <span className="hover:text-designColor duration-300 cursor-pointer text-xl" onClick={openInstagram}>
        <AiFillInstagram />
      </span>
      <span className="hover:text-designColor duration-300 cursor-pointer text-xl" onClick={openThreads}>
        <FaSquareThreads />
      </span>
      <span className="hover:text-designColor duration-300 cursor-pointer text-xl" onClick={openPinterest}>
        <BsPinterest />
      </span>
      <span className="hover:text-designColor duration-300 cursor-pointer text-xl" onClick={openTwitter}>
        <FaSquareXTwitter />
      </span>
      <span className="hover:text-designColor duration-300 cursor-pointer text-xl" onClick={sendEmail}>
        <BiLogoGmail />
      </span>
    </div>
        </div>
        <div className="flex h-14">
          <a
            href={CV}
            target="_blank"
            className="w-1/2 border-t-[1px] borderRight border-t-zinc-800 text-sm tracking-wide uppercase  gap-2 hover:text-designColor duration-300"
            rel="noreferrer"
          >
            <button className="w-full h-full flex justify-center items-center gap-2">
              Download CV <BsPersonFillDown />
            </button>
          </a>
          <button onClick={handleCallClick} className="w-1/2 border-t-[1px] border-t-zinc-800 text-sm tracking-wide uppercase flex justify-center items-center gap-2 hover:text-designColor duration-300">
            Contact me <BsFillSendFill />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Left;
