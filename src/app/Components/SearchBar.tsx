"use client"

import { useState } from "react"
import Image from 'next/image';

const SearchButton = ({ otherClasses }: {otherClasses: string }) => (
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
  <Image
    src="/magnifying-glass.svg"
    alt="magnifying glass"
    width={40}
    height={40}
    className="object-contain"
  />
  </button>
)

const SearchBar = () => {
    const [manufacturer, setManufacturer] = useState('');
    const [model, setModel] = useState('');

    const handleSearch = () => {}

  return (
    <form className=' ' onSubmit={handleSearch}>
        <div className="flex-1 max-sm:w-full flex justify-start items-center">
            
        <SearchButton otherClasses= "sm:hidden" />
        </div>
        <div className="flex max-sm:w-full flex justify-start items-center">
          <input 
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Pesquise Aqui"
          className="w-full h-[48px] pl-12 p-4 bg-light-white rounded-full max-sm:rounded-full outline-none cursor-pointer text-sm"
          />
        </div>
    </form>
  )
}

export default SearchBar