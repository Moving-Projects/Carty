'use client'
import Link from 'next/link'
import React, {useState, useEffect} from 'react'
import Overlay from './Overlay';

const QuoteBtn = () => {
  const [isOpen, setIsOpen] = useState(false);

  // useEffect(() => {
  //   const body = document.querySelector("body");
  //   if (isOpen) {
  //     body?.classList.add("active");
  //   } else {
  //     body?.classList.remove("active");
  //   }
  //   return () => {
  //     body?.classList.remove("active");
  //   }
  // }, [isOpen]);

  const toggleOverlay = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Link href="#" onClick={toggleOverlay} className='quote items-center justify-center text-nowrap lg:flex hidden gap-2 px-4 py-2 xl:py-[15px] xl:px-7 bg-mygreen mr-4 hover:bg-mywhite border-mygreen border-2 rounded-md font-Montserrat text-mywhite hover:text-mygreen font-bold transition-all'>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21.6635 7.93127C21.1376 6.67626 20.3726 5.53554 19.4111 4.57268C18.4525 3.60816 17.3138 2.8413 16.0596 2.31565C14.7748 1.77454 13.3943 1.49718 12.0002 1.50002H11.9533C10.5354 1.50705 9.16427 1.7883 7.87286 2.34143C6.62944 2.87247 5.50139 3.64069 4.55177 4.60315C3.59958 5.56384 2.84335 6.70057 2.32521 7.95002C1.78736 9.24931 1.51482 10.6431 1.52364 12.0492C1.53068 13.6758 1.91974 15.2906 2.6463 16.7344V20.2969C2.6463 20.8922 3.12911 21.375 3.72208 21.375H7.27989C8.73038 22.107 10.331 22.4921 11.9557 22.5H12.0049C13.4065 22.5 14.7635 22.2281 16.0432 21.6961C17.291 21.1767 18.4255 20.4188 19.383 19.4649C20.3486 18.5063 21.108 17.386 21.6401 16.1367C22.1908 14.843 22.4721 13.4672 22.4791 12.0469C22.4838 10.6196 22.2072 9.2344 21.6635 7.93127ZM7.32208 13.125C6.70333 13.125 6.19943 12.6211 6.19943 12C6.19943 11.3789 6.70333 10.875 7.32208 10.875C7.94083 10.875 8.44474 11.3789 8.44474 12C8.44474 12.6211 7.94318 13.125 7.32208 13.125ZM12.0002 13.125C11.3815 13.125 10.8776 12.6211 10.8776 12C10.8776 11.3789 11.3815 10.875 12.0002 10.875C12.619 10.875 13.1229 11.3789 13.1229 12C13.1229 12.6211 12.619 13.125 12.0002 13.125ZM16.6783 13.125C16.0596 13.125 15.5557 12.6211 15.5557 12C15.5557 11.3789 16.0596 10.875 16.6783 10.875C17.2971 10.875 17.801 11.3789 17.801 12C17.801 12.6211 17.2971 13.125 16.6783 13.125Z"/>
        </svg>
        GET A QUOTE
      </Link>
      <Overlay isOpen={isOpen} onClose={toggleOverlay} />
    </>
  )
}

export default QuoteBtn