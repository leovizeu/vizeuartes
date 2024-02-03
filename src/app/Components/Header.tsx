"use client"

import React, {Fragment} from "react"
import CustomButtom from "./CustomButtom"
import Image from "next/image"

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

function Header() {

  const handleScroll = () => {

  }

  let Links =[
    {list: '0',name: 'About', href: '#about'},
    {list: '1',name: 'Experience', href: '#experience'},
    {list: '2',name: 'Projects', href: '/Projs'},
    {list: '3',name: 'Contact', href: '#contact'},
  ]
    return (
        <header className='fixed backdrop-blur shadow-md w-full blue-sm top-0 left-0 font-mono'>
          <div className="md:flex items-center justify-between py-8 xl:px-56">
            <div className="font-bold text-2xl cursor-pointer flex items-center text-white">
              <Image src={'/logovizeu-branco.png'} alt='logo'  height={40} width={80} />
            </div>
            <ul className='flex justify-end md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] 
            left-0 w-full'>
              {
                Links.map((link =>
                  <li key={link.name} className="md:ml-8 text-xs md:my-0">
                    <p className="flex absolute text-blue-500">{link.list}. </p>
                    <a href={link.href} className="flex text-white hover:text-gray-500 duration-500 pl-5">{link.name}</a>
                  </li>
                  ))
              }
              <div className="flex flex-row-reverse px-5">
              <CustomButtom
                  title ="Resume"
                  containerStyles = "border border-blue-500 text-blue-500 font-bold rounded-md px-2 py-1 hover:text-white duration-500"
                  handleClick = {handleScroll}
              />
          </div>
              </ul>
            </div>
        </header>
    )
}

export default Header