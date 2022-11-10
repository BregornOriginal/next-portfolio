import React from 'react';
import { SocialIcon } from "react-social-icons";
type Props = {}

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7x1 mx-auto z-20
    xl:items-center">
      <div className="flex flex-row items-center">
        {/*Social Icons*/}
        <SocialIcon 
          target="_blank" 
          url="https://github.com/BregornOriginal" 
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon 
          target="_blank" 
          url="https://angel.co/u/julio-miguel-gagliardi"
          fgColor="gray" 
          bgColor="transparent"
        />
        <SocialIcon 
          target="_blank" 
          url="https://twitter.com/Bregorn"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon 
          target="_blank" 
          url="https://www.linkedin.com/in/julio-miguel-gagliardi-b81829197/"
          fgColor="gray"
          bgColor="transparent"
        />
      </div>

      <div className="flex flex-row items-center text-gray-300 cursor-pointer">
      <SocialIcon
        className="cursor-pointer"
        network="email" 
        fgColor="gray"
        bgColor="transparent"
      />
      <p className="uppercase hidden md:inline-flex text-sm text-gray-400">Get In Touch</p>
      </div>
    </header>
  );
}
