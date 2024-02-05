"use client"

import { Combobox, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment, useState } from "react";

const SearchItems = () => {
  const [query, setQuery] = useState("");

  return (
    <div className='absolute flex-1 max-sm:w-full flex justify-start items-center'>
      <Combobox>
        <div className='relative w-full'>
          {/* Button for the combobox. Click on the icon to see the complete dropdown */}
          <Combobox.Button className='absolute top-[14px]'>
            <Image
              src='/car-logo.svg'
              width={20}
              height={20}
              className='ml-4'
              alt='car logo'
            />
          </Combobox.Button>

          {/* Input field for searching */}
          <Combobox.Input
            className='search-manufacturer__input'
            displayValue={(item: string) => item}
            onChange={(event) => setQuery(event.target.value)} // Update the search query when the input changes
            placeholder='Volkswagen...'
          />

          {/* Transition for displaying the options */}
          <Transition
            as={Fragment} // group multiple elements without introducing an additional DOM node i.e., <></>
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
            afterLeave={() => setQuery('')} // Reset the search query after the transition completes
          >
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchItems;