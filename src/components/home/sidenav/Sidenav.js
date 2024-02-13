import React from 'react'
import SidenavTitle from './SidenavTitle';

const Sidenav = () => {
  return (
    <div className="px-7 py-4">
      <SidenavTitle title="M" subTitle="enu" />
      <ul>
        <li className="sidenavLi">Blog</li>
        <li className="sidenavLi">Portfolio Page</li>
      </ul>
      <SidenavTitle title="P" subTitle="rojects" />
      <ul>
        <li className="sidenavLi">Web Development</li>
        <li className="sidenavLi">E-commerce</li>
        <li className="sidenavLi">Blogs</li>
        <li className="sidenavLi">Portfolio Websites</li>
        <li className="sidenavLi">Backend Setup</li>
        <li className="sidenavLi">Pinterest Clone</li>
        <li className="sidenavLi">Instagram Clone</li>
      </ul>
      <SidenavTitle title="L" subTitle="atest Posts" />
      <ul>
        <li className="sidenavLi">Unavilable</li>
        <li className="sidenavLi">Unavilable</li>
        <li className="sidenavLi">
          -
        </li>
        <li className="sidenavLi">-</li>
      </ul>
      <SidenavTitle title="R" subTitle="each Me" />
      <ul>
        <li className="sidenavLi">+94 70 185 2706</li>
        <li className="sidenavLi">Pabscodes@gmail.com</li>
      </ul>
    </div>
  );
}

export default Sidenav