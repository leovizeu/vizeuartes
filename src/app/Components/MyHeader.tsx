"use client"

import React, {Fragment} from "react"
import CustomButtom from "./CustomButtom"
import Image from "next/image"
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { BsChatFill } from "react-icons/bs";
import { MdWhatsapp } from "react-icons/md";
import { MdMarkunread } from "react-icons/md";
import SearchBar from "./SearchBar";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

function MyHeader() {

  const handleScroll = () => {

  }

  let Links =[
    {icon: <BsChatFill />, name: 'Fale Conosco', href: '#'},
    {icon: <MdWhatsapp />, name: 'Whatsapp:(11)99683-4066', href: '#'},
    {icon: <MdMarkunread />, name: 'Email: mdfvizeuartes@gmail.com', href: '#'},
  ]
    return (
        <header className='bg-slate-700 fixed backdrop-blur shadow-md w-full top-0 left-0 font-mono'>
          <div className="inline-table max-md:hidden md:flex items-center justify-between xl:px-56">
            <div className="font-bold text-2xl cursor-pointer flex items-center text-white">
              <FaFacebook /><FaInstagram />
            </div>
              <ul className='flex justify-end md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] 
              left-0 w-full'>
                {
                  Links.map((link =>
                    <li key={link.name} className="md:ml-8 text-xs md:my-0">
                      <a href={link.href} className="flex text-white hover:text-gray-500 duration-500 pl-5 gap-2">
                        {link.icon}{link.name}
                      </a>
                    </li>
                    ))
                }
                <div className="flex flex-row-reverse px-5">
                  <CustomButtom
                    title="Resume"
                    containerStyles="border border-blue-500 text-blue-500 font-bold rounded-md px-2 py-1 hover:text-white duration-500"
                    handleClick={handleScroll} 
                    btnType={"button"}                  />
                </div>
              </ul>
            </div>
            <div className="flex justify-evenly items-center py-3">
              <Image src={'/logovizeu-branco.png'} alt='logo'  height={40} width={80} />
              <div>
                <SearchBar />
              </div>
            </div>
        </header>
    )
}

export default MyHeader