import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default async function Section2(){
  return(
    <div className='w-screen h-[891px] md:h-[460px] relative overflow-hidden'>
      <div className='h-full w-full translate-y-[86px]  5xl:px-[10vw] footer absolute top-0'>
        <div className='mx-4 md:mx-[5vw] lg:mx-[10vw] pt-16 flex max-w-[1920px] pb-12 md:pb-10 border-b-2 5xl:mx-auto justify-center md:items-start md:justify-between flex-col md:flex-row'>
          <div className='flex flex-col gap-6'>
            <Image alt='CartyMoving logo' src="/logo.png" width="153" height="54" className='footerLogo w-[182px] h-[64px] md:mb-0'/>
            <p className='font-Hind text-base text-[#f1f1f1] xl:text-lg font-medium md:max-w-[353px]'>We will treat your belongings with the same care as if they were our own.</p>
            <div className='flex gap-2'>
              <Link href="#">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.0281 2C14.1531 2.003 14.7241 2.009 15.2171 2.023L15.4111 2.03C15.6351 2.038 15.8561 2.048 16.1231 2.06C17.1871 2.11 17.9131 2.278 18.5501 2.525C19.2101 2.779 19.7661 3.123 20.3221 3.678C20.8308 4.17773 21.2243 4.78247 21.4751 5.45C21.7221 6.087 21.8901 6.813 21.9401 7.878C21.9521 8.144 21.9621 8.365 21.9701 8.59L21.9761 8.784C21.9911 9.276 21.9971 9.847 21.9991 10.972L22.0001 11.718V13.028C22.0025 13.7574 21.9948 14.4868 21.9771 15.216L21.9711 15.41C21.9631 15.635 21.9531 15.856 21.9411 16.122C21.8911 17.187 21.7211 17.912 21.4751 18.55C21.2243 19.2175 20.8308 19.8223 20.3221 20.322C19.8223 20.8307 19.2176 21.2242 18.5501 21.475C17.9131 21.722 17.1871 21.89 16.1231 21.94L15.4111 21.97L15.2171 21.976C14.7241 21.99 14.1531 21.997 13.0281 21.999L12.2821 22H10.9731C10.2433 22.0026 9.5136 21.9949 8.78408 21.977L8.59008 21.971C8.35269 21.962 8.11535 21.9517 7.87808 21.94C6.81408 21.89 6.08808 21.722 5.45008 21.475C4.78291 21.2241 4.17852 20.8306 3.67908 20.322C3.17003 19.8224 2.77619 19.2176 2.52508 18.55C2.27808 17.913 2.11008 17.187 2.06008 16.122L2.03008 15.41L2.02508 15.216C2.00665 14.4868 1.99831 13.7574 2.00008 13.028V10.972C1.99731 10.2426 2.00465 9.5132 2.02208 8.784L2.02908 8.59C2.03708 8.365 2.04708 8.144 2.05908 7.878C2.10908 6.813 2.27708 6.088 2.52408 5.45C2.77577 4.7822 3.1703 4.17744 3.68008 3.678C4.17923 3.16955 4.78327 2.77607 5.45008 2.525C6.08808 2.278 6.81308 2.11 7.87808 2.06C8.14408 2.048 8.36608 2.038 8.59008 2.03L8.78408 2.024C9.51327 2.00623 10.2427 1.99857 10.9721 2.001L13.0281 2ZM12.0001 7C10.674 7 9.40223 7.52678 8.46455 8.46447C7.52687 9.40215 7.00008 10.6739 7.00008 12C7.00008 13.3261 7.52687 14.5979 8.46455 15.5355C9.40223 16.4732 10.674 17 12.0001 17C13.3262 17 14.5979 16.4732 15.5356 15.5355C16.4733 14.5979 17.0001 13.3261 17.0001 12C17.0001 10.6739 16.4733 9.40215 15.5356 8.46447C14.5979 7.52678 13.3262 7 12.0001 7ZM12.0001 9C12.394 8.99993 12.7842 9.07747 13.1482 9.22817C13.5122 9.37887 13.8429 9.5998 14.1215 9.87833C14.4002 10.1569 14.6212 10.4875 14.772 10.8515C14.9229 11.2154 15.0005 11.6055 15.0006 11.9995C15.0006 12.3935 14.9231 12.7836 14.7724 13.1476C14.6217 13.5116 14.4008 13.8423 14.1223 14.121C13.8437 14.3996 13.513 14.6206 13.1491 14.7714C12.7851 14.9223 12.395 14.9999 12.0011 15C11.2054 15 10.4424 14.6839 9.87976 14.1213C9.31715 13.5587 9.00108 12.7956 9.00108 12C9.00108 11.2044 9.31715 10.4413 9.87976 9.87868C10.4424 9.31607 11.2054 9 12.0011 9M17.2511 5.5C16.9196 5.5 16.6016 5.6317 16.3672 5.86612C16.1328 6.10054 16.0011 6.41848 16.0011 6.75C16.0011 7.08152 16.1328 7.39946 16.3672 7.63388C16.6016 7.8683 16.9196 8 17.2511 8C17.5826 8 17.9005 7.8683 18.135 7.63388C18.3694 7.39946 18.5011 7.08152 18.5011 6.75C18.5011 6.41848 18.3694 6.10054 18.135 5.86612C17.9005 5.6317 17.5826 5.5 17.2511 5.5Z" fill="#F1F1F1"/>
                </svg>
              </Link>
              <Link href="#">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.7778 2H4.22222C3 2 2 3 2 4.22222V19.7778C2 21.0011 3 22 4.22222 22H12V14.2222H9.77778V11.4722H12V9.19444C12 6.79 13.3467 5.10111 16.1844 5.10111L18.1878 5.10333V7.99778H16.8578C15.7533 7.99778 15.3333 8.82667 15.3333 9.59556V11.4733H18.1867L17.5556 14.2222H15.3333V22H19.7778C21 22 22 21.0011 22 19.7778V4.22222C22 3 21 2 19.7778 2Z" fill="#F1F1F1"/>
                </svg>
              </Link>
              <Link href="#">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.85714 2C3.28125 2 2 3.28125 2 4.85714V19.1429C2 20.7188 3.28125 22 4.85714 22H19.1429C20.7188 22 22 20.7188 22 19.1429V4.85714C22 3.28125 20.7188 2 19.1429 2H4.85714ZM18.1205 5.75L13.4866 11.0446L18.9375 18.25H14.6696L11.3304 13.8795L7.50446 18.25H5.38393L10.3393 12.5848L5.11161 5.75H9.48661L12.5089 9.74554L16 5.75H18.1205ZM16.433 16.9821L8.84821 6.95089H7.58482L15.2545 16.9821H16.4286H16.433Z" fill="#F4F1FF"/>
                </svg>
              </Link>
              <Link href="#">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.7778 2C20.3671 2 20.9324 2.23413 21.3491 2.65087C21.7659 3.06762 22 3.63285 22 4.22222V19.7778C22 20.3671 21.7659 20.9324 21.3491 21.3491C20.9324 21.7659 20.3671 22 19.7778 22H4.22222C3.63285 22 3.06762 21.7659 2.65087 21.3491C2.23413 20.9324 2 20.3671 2 19.7778V4.22222C2 3.63285 2.23413 3.06762 2.65087 2.65087C3.06762 2.23413 3.63285 2 4.22222 2H19.7778ZM19.2222 19.2222V13.3333C19.2222 12.3727 18.8406 11.4513 18.1613 10.772C17.482 10.0927 16.5607 9.71111 15.6 9.71111C14.6556 9.71111 13.5556 10.2889 13.0222 11.1556V9.92222H9.92222V19.2222H13.0222V13.7444C13.0222 12.8889 13.7111 12.1889 14.5667 12.1889C14.9792 12.1889 15.3749 12.3528 15.6666 12.6445C15.9583 12.9362 16.1222 13.3319 16.1222 13.7444V19.2222H19.2222ZM6.31111 8.17778C6.80618 8.17778 7.28098 7.98111 7.63104 7.63104C7.98111 7.28098 8.17778 6.80618 8.17778 6.31111C8.17778 5.27778 7.34444 4.43333 6.31111 4.43333C5.81309 4.43333 5.33547 4.63117 4.98332 4.98332C4.63117 5.33547 4.43333 5.81309 4.43333 6.31111C4.43333 7.34444 5.27778 8.17778 6.31111 8.17778ZM7.85556 19.2222V9.92222H4.77778V19.2222H7.85556Z" fill="#F4F1FF"/>
                </svg>
              </Link>
              <Link href="#">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M2 4.85714C2 3.28125 3.28125 2 4.85714 2H19.1429C20.7188 2 22 3.28125 22 4.85714V19.1429C22 20.7188 20.7188 22 19.1429 22H4.85714C3.28125 22 2 20.7188 2 19.1429V4.85714ZM6.90733 8.432C8.44533 7.386 10.224 6.86333 12.004 6.86333C13.8217 6.8624 15.5975 7.40903 17.1 8.432H20L18.6913 9.85533C19.1029 10.2296 19.4316 10.6858 19.6563 11.1946C19.881 11.7035 19.9967 12.2537 19.996 12.81C19.9956 13.8706 19.5741 14.8877 18.824 15.6376C18.0738 16.3874 17.0566 16.8087 15.996 16.8087C14.9889 16.8098 14.0188 16.4291 13.2813 15.7433L12 17.1367L10.7187 15.742C9.98049 16.4282 9.00983 16.8093 8.002 16.8087C7.19537 16.8088 6.40756 16.565 5.74206 16.1092C5.07656 15.6534 4.5645 15.0069 4.27315 14.2547C3.9818 13.5025 3.92479 12.6798 4.1096 11.8947C4.29441 11.1095 4.7124 10.3986 5.30867 9.85533L4 8.432H6.90733ZM15.0027 8.772C14.042 8.372 13.0207 8.17 12 8.17C10.9692 8.17007 9.94866 8.37512 8.99733 8.772C10.7053 9.42533 12 10.9527 12 12.7333C12 10.9533 13.2953 9.42533 15.0027 8.772ZM9.03687 10.3106C8.70857 10.1747 8.35669 10.1047 8.00133 10.1047C7.28366 10.1047 6.59538 10.3898 6.0879 10.8972C5.58043 11.4047 5.29533 12.093 5.29533 12.8107C5.29533 13.5283 5.58043 14.2166 6.0879 14.7241C6.59538 15.2316 7.28366 15.5167 8.00133 15.5167C8.35669 15.5167 8.70857 15.4467 9.03687 15.3107C9.36518 15.1747 9.66349 14.9754 9.91476 14.7241C10.166 14.4728 10.3654 14.1745 10.5014 13.8462C10.6373 13.5179 10.7073 13.166 10.7073 12.8107C10.7073 12.4553 10.6373 12.1034 10.5014 11.7751C10.3654 11.4468 10.166 11.1485 9.91476 10.8972C9.66349 10.646 9.36518 10.4466 9.03687 10.3106ZM17.0312 10.3115C16.703 10.1757 16.3512 10.1059 15.996 10.106C15.2786 10.1063 14.5907 10.3915 14.0836 10.899C13.5765 11.4065 13.2917 12.0946 13.292 12.812C13.2923 13.5294 13.5775 14.2173 14.085 14.7244C14.5925 15.2315 15.2806 15.5163 15.998 15.516C16.3532 15.5159 16.7049 15.4458 17.0331 15.3097C17.3612 15.1737 17.6593 14.9743 17.9104 14.723C18.1615 14.4717 18.3607 14.1735 18.4965 13.8452C18.6323 13.517 18.7021 13.1652 18.702 12.81C18.7019 12.4548 18.6318 12.1031 18.4957 11.7749C18.3597 11.4468 18.1603 11.1487 17.909 10.8976C17.6577 10.6465 17.3595 10.4473 17.0312 10.3115ZM6.99818 11.8082C7.26424 11.5421 7.62508 11.3927 8.00133 11.3927C8.37759 11.3927 8.73843 11.5421 9.00448 11.8082C9.27053 12.0742 9.42 12.4351 9.42 12.8113C9.42 13.1876 9.27053 13.5484 9.00448 13.8145C8.73843 14.0805 8.37759 14.23 8.00133 14.23C7.62508 14.23 7.26424 14.0805 6.99818 13.8145C6.73213 13.5484 6.58267 13.1876 6.58267 12.8113C6.58267 12.4351 6.73213 12.0742 6.99818 11.8082ZM14.9929 11.8082C15.2589 11.5421 15.6197 11.3927 15.996 11.3927C16.3723 11.3927 16.7331 11.5421 16.9991 11.8082C17.2652 12.0742 17.4147 12.4351 17.4147 12.8113C17.4147 13.1876 17.2652 13.5484 16.9991 13.8145C16.7331 14.0805 16.3723 14.23 15.996 14.23C15.6197 14.23 15.2589 14.0805 14.9929 13.8145C14.7268 13.5484 14.5773 13.1876 14.5773 12.8113C14.5773 12.4351 14.7268 12.0742 14.9929 11.8082Z" fill="#F4F1FF"/>
                </svg>
              </Link> 
            </div>
          </div>
          <div className='text-[#f1f1f1] text-nowrap flex flex-col md:flex-row md:gap-8 lg:gap-16 xl:gap-20 2xl:gap-24'>
            <div className='flex flex-col gap-2 md:ml-4 md:mt-0 mt-12'>
              <h3 className='text-base md:text-lg font-Montserrat font-bold mb-4'>OUR CONTACTS</h3>
              <p className='text-base xl:text-lg'>Phone: (818) 835 - 1880</p>
              <p className='text-base xl:text-lg'>Email: sales@carty.com</p>
              <p className='text-base xl:text-lg'>Office Hours: 8 am - 6 pm</p>
            </div>
            <div className='flex justify-between md:gap-8 lg:gap-16 xl:gap-20 2xl:gap-24 md:mt-0 mt-12'>
              <div className='flex flex-col gap-2'>
                <h3 className='text-base md:text-lg font-Montserrat font-bold mb-4'>EXPLORE MORE</h3>
                <Link className='text-base xl:text-lg' href="/">Home</Link>
                <Link className='text-base xl:text-lg' href="/aboutUs">About Us</Link>
                <Link className='text-base xl:text-lg' href="/#sec4">Rates</Link>
                <Link className='text-base xl:text-lg' href="/contacts">Contact Us</Link>
              </div>
              <div className='flex flex-col gap-2'>
                <h3 className='text-base md:text-lg font-Montserrat font-bold mb-4'>LOCATIONS</h3>
                <p className='text-base xl:text-lg'>Los Angeles</p>
                <p className='text-base xl:text-lg'>San Francisco</p>
                <p className='text-base xl:text-lg'>San Diego</p>
                <p className='text-base xl:text-lg'>San Jose</p>
              </div>
            </div>
          </div>
        </div>
        <p className='w-full text-center text-mywhite font-Hind font-medium mt-4 px-4'>Copyright © 2024 Carty Moving & Storage. All rights reserved </p>
      </div>
    </div>
  )
}