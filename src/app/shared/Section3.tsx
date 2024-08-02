import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default async function Section3(){
  return(
    <section className='section3 w-screen h-fit min-h-screen skew-y-[-14deg] md:skew-y-[-7deg] translate-y-20 md:translate-y-40'>
      <div className='bg-mygreen w-[40vw] md:w-[14vw] h-4 md:h-8 absolute -top-4 md:-top-8 left-0'></div>
      <div className='bg-mygreen w-[40vw] md:w-[14vw] h-4 md:h-8 absolute -bottom-4 md:-bottom-8 right-0'></div>
      <div className='w-screen max-w-[1920px] mx-auto relative h-fit skew-y-[14deg] md:skew-y-[7deg] translate-y-28 md:translate-y-40 px-4 md:px-[10vw] max-padding'>
        <div className='flex gap-[9.3vw] max-gap relative md:px-[6vw] second-max-padding'>
          <div className='flex flex-col justify-center w-full lg:w-[calc(65%-3.75vw)]'>
            <p className='text-mygreen font-bold font-Hind text-2xl'>About Us</p>
            <h1 className='text-mywhite font-bold font-Montserrat text-[2rem] md:text-5xl 3xl:text-[4rem] mt-4 mb-6 md:mb-12'>Why Carty Movers Is Your Best Choice</h1>
            <p className='text-mywhite font-Hind font-medium text-sm md:text-lg mb-8 md:mb-16'>At Carty Moving Company, we don’t just move boxes; we move lives. Our mission is to provide moving services that cater to your needs, ensuring a smooth transition to your new location. Trust us to handle your move with care, efficiency, and professionalism.</p>
            <Link href="#" className='quote w-fit flex gap-2 px-4 text-xs items-center md:text-base py-2 xl:py-[15px] xl:px-7 bg-mygreen mr-4 md:hover:bg-mywhite border-mygreen border-2 rounded-md font-Hind text-mywhite md:hover:text-mygreen font-bold transition-all'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.6635 7.93127C21.1376 6.67626 20.3726 5.53554 19.4111 4.57268C18.4525 3.60816 17.3138 2.8413 16.0596 2.31565C14.7748 1.77454 13.3943 1.49718 12.0002 1.50002H11.9533C10.5354 1.50705 9.16427 1.7883 7.87286 2.34143C6.62944 2.87247 5.50139 3.64069 4.55177 4.60315C3.59958 5.56384 2.84335 6.70057 2.32521 7.95002C1.78736 9.24931 1.51482 10.6431 1.52364 12.0492C1.53068 13.6758 1.91974 15.2906 2.6463 16.7344V20.2969C2.6463 20.8922 3.12911 21.375 3.72208 21.375H7.27989C8.73038 22.107 10.331 22.4921 11.9557 22.5H12.0049C13.4065 22.5 14.7635 22.2281 16.0432 21.6961C17.291 21.1767 18.4255 20.4188 19.383 19.4649C20.3486 18.5063 21.108 17.386 21.6401 16.1367C22.1908 14.843 22.4721 13.4672 22.4791 12.0469C22.4838 10.6196 22.2072 9.2344 21.6635 7.93127ZM7.32208 13.125C6.70333 13.125 6.19943 12.6211 6.19943 12C6.19943 11.3789 6.70333 10.875 7.32208 10.875C7.94083 10.875 8.44474 11.3789 8.44474 12C8.44474 12.6211 7.94318 13.125 7.32208 13.125ZM12.0002 13.125C11.3815 13.125 10.8776 12.6211 10.8776 12C10.8776 11.3789 11.3815 10.875 12.0002 10.875C12.619 10.875 13.1229 11.3789 13.1229 12C13.1229 12.6211 12.619 13.125 12.0002 13.125ZM16.6783 13.125C16.0596 13.125 15.5557 12.6211 15.5557 12C15.5557 11.3789 16.0596 10.875 16.6783 10.875C17.2971 10.875 17.801 11.3789 17.801 12C17.801 12.6211 17.2971 13.125 16.6783 13.125Z"/>
              </svg>
              GET A QUOTE
            </Link>
          </div>
          <div className='w-[calc(50%-3.75vw)] relative lg:block hidden'>
            <Image src="/sec3_1.png" width="434" height="529" alt='Worker help' unoptimized={true} className='w-full h-full object-[40%] lg:block hidden object-cover container rounded-lg'/>
          </div>
        </div>
        <div className='flex flex-col mt-[8vh] md:mt-[13vh]'>
          <h1 className='text-mywhite font-bold font-Montserrat text-[2rem] md:text-4xl xl:text-5xl 3xl:text-[4rem] text-center'>Carty Movers Have Built Its Reputation</h1>
          <div className='flex flex-col md:flex-row xl:px-[8.5vw] gap-[3.3vw] text-mywhite mb-60 md:mb-80 mt-[6vh]'>
            <div>
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M62.7203 50.4833L56.2051 55.1554L58.7011 62.7202L52.1858 58.0482L45.6706 62.7202L48.1538 55.1554L41.6513 50.4833H49.7026L52.1858 42.9313L54.669 50.4833H62.7203ZM22.3488 50.4833L15.8463 55.1554L18.3295 62.7202L11.8143 58.0482L5.29902 62.7202L7.79504 55.1554L1.27979 50.4833H9.33106L11.8143 42.9313L14.2975 50.4833H22.3488Z" fill="#1E5631"/>
                <path d="M53.0691 16.3966L40.0514 25.7535L45.0178 40.8704L32.0001 31.5263L18.9824 40.8704L23.9489 25.7535L10.9312 16.3966H27.0209L32.0001 1.27966L36.9794 16.3966H53.0691Z" fill="#4C9A2A"/>
                <path d="M45.0227 42.1491C44.7549 42.149 44.4939 42.0648 44.2764 41.9085L31.9998 33.0982L19.7233 41.9085C19.5037 42.0651 19.2403 42.1484 18.9706 42.1466C18.7009 42.1448 18.4387 42.0579 18.2212 41.8983C18.0038 41.7387 17.8423 41.5146 17.7596 41.2579C17.677 41.0012 17.6775 40.7249 17.761 40.4685L22.7351 25.3477C22.8486 25.0344 23.0796 24.7777 23.3793 24.6319C23.6789 24.4862 24.0235 24.4628 24.34 24.5669C24.6565 24.671 24.9201 24.8942 25.0747 25.1893C25.2294 25.4845 25.263 25.8282 25.1684 26.1477L21.4206 37.5411L31.2549 30.4831C31.4724 30.327 31.7334 30.2431 32.0011 30.2431C32.2689 30.2431 32.5298 30.327 32.7474 30.4831L42.5817 37.5411L38.8338 26.1477C38.6597 25.6165 38.8505 25.0341 39.3036 24.7077L49.0918 17.6817H36.974C36.6345 17.6817 36.3089 17.5469 36.0689 17.3068C35.8288 17.0668 35.694 16.7412 35.694 16.4017C35.694 16.0622 35.8288 15.7367 36.0689 15.4966C36.3089 15.2566 36.6345 15.1217 36.974 15.1217H53.0701C53.3409 15.1219 53.6047 15.2079 53.8235 15.3675C54.0423 15.5271 54.2048 15.7519 54.2878 16.0097C54.3707 16.2675 54.3698 16.5449 54.285 16.8021C54.2003 17.0593 54.0362 17.283 53.8164 17.4411L41.5577 26.2399L46.2387 40.4685C46.3012 40.6608 46.3174 40.8651 46.2859 41.0648C46.2545 41.2646 46.1764 41.4541 46.0578 41.6179C45.9393 41.7817 45.7838 41.9152 45.6039 42.0075C45.424 42.0998 45.2249 42.1484 45.0227 42.1491Z" fill="#F6F9FC"/>
                <path d="M23.95 27.0271C23.6825 27.0272 23.4218 26.943 23.205 26.7865L10.1834 17.4398C9.96354 17.2818 9.79945 17.0581 9.71474 16.8009C9.63003 16.5436 9.62908 16.2662 9.71202 16.0084C9.79496 15.7506 9.95752 15.5258 10.1763 15.3662C10.3951 15.2067 10.6589 15.1206 10.9297 15.1205H26.1004L30.7839 0.880328C30.8681 0.624238 31.031 0.40126 31.2493 0.243183C31.4677 0.0851056 31.7304 0 31.9999 0C32.2695 0 32.5322 0.0851056 32.7505 0.243183C32.9689 0.40126 33.1318 0.624238 33.216 0.880328L38.1901 16.0011C38.2757 16.318 38.2366 16.6556 38.0807 16.9445C37.9249 17.2334 37.6643 17.4515 37.3525 17.5541C37.0407 17.6566 36.7014 17.6356 36.4046 17.4956C36.1077 17.3555 35.8759 17.107 35.7568 16.8011L31.9999 5.37573L28.2418 16.8011C28.069 17.3259 27.5775 17.6818 27.0258 17.6818H14.908L24.6962 24.7077C24.9161 24.8658 25.0802 25.0895 25.1649 25.3467C25.2496 25.6039 25.2505 25.8814 25.1676 26.1391C25.0847 26.3969 24.9221 26.6218 24.7033 26.7813C24.4845 26.9409 24.2207 27.0269 23.95 27.0271ZM58.6959 64.0002C58.4281 64.0001 58.1671 63.9159 57.9496 63.7596L52.1857 59.6226L46.4205 63.7596C46.201 63.9162 45.9376 63.9995 45.6679 63.9977C45.3982 63.9958 45.136 63.909 44.9185 63.7494C44.7011 63.5898 44.5395 63.3657 44.4569 63.109C44.3743 62.8523 44.3748 62.576 44.4583 62.3196L46.6522 55.6507L40.905 51.5252C40.6851 51.3672 40.521 51.1435 40.4363 50.8863C40.3516 50.6291 40.3506 50.3516 40.4336 50.0938C40.5165 49.836 40.6791 49.6112 40.8979 49.4517C41.1167 49.2921 41.3804 49.206 41.6512 49.2059H48.7719L50.9697 42.5242C51.0539 42.2681 51.2167 42.0451 51.4351 41.8871C51.6535 41.729 51.9161 41.6439 52.1857 41.6439C52.4553 41.6439 52.718 41.729 52.9363 41.8871C53.1547 42.0451 53.3176 42.2681 53.4017 42.5242L55.5982 49.2059H62.7202C62.991 49.206 63.2548 49.2921 63.4736 49.4517C63.6924 49.6112 63.8549 49.836 63.9379 50.0938C64.0208 50.3516 64.0199 50.6291 63.9351 50.8863C63.8504 51.1435 63.6863 51.3672 63.4664 51.5252L57.7192 55.6507L59.9131 62.3196C59.9757 62.512 59.9918 62.7164 59.9603 62.9163C59.9289 63.1161 59.8506 63.3056 59.7319 63.4695C59.6133 63.6333 59.4575 63.7668 59.2775 63.859C59.0974 63.9513 58.8981 63.9996 58.6959 64.0002ZM45.6282 51.7659L48.9063 54.1185C49.3595 54.4449 49.5502 55.0274 49.3761 55.5586L48.1153 59.3922L51.4395 57.0075C51.657 56.8514 51.918 56.7675 52.1857 56.7675C52.4534 56.7675 52.7144 56.8514 52.932 57.0075L56.2549 59.3909L54.9941 55.5586C54.82 55.0274 55.0107 54.4449 55.4638 54.1185L58.7432 51.7659H54.6728C54.4032 51.7659 54.1404 51.6807 53.9221 51.5226C53.7037 51.3644 53.5409 51.1414 53.4568 50.8852L52.187 47.0209L50.9159 50.8852C50.7431 51.41 50.2516 51.7659 49.6999 51.7659H45.6282ZM5.30403 64.0002C5.1017 64.0002 4.90225 63.9522 4.72206 63.8602C4.54186 63.7682 4.38604 63.6348 4.26737 63.4709C4.14871 63.307 4.07059 63.1174 4.03941 62.9175C4.00823 62.7175 4.02489 62.5131 4.08802 62.3209L6.28196 55.652L0.534707 51.5265C0.314362 51.3687 0.149794 51.145 0.0647101 50.8877C-0.020374 50.6304 -0.0215828 50.3527 0.0612573 50.0946C0.144097 49.8366 0.306711 49.6115 0.525674 49.4518C0.744636 49.292 1.00865 49.2059 1.27967 49.2059H8.40166L10.5982 42.5242C10.6823 42.2681 10.8452 42.0451 11.0636 41.8871C11.2819 41.729 11.5446 41.6439 11.8142 41.6439C12.0837 41.6439 12.3464 41.729 12.5648 41.8871C12.7831 42.0451 12.946 42.2681 13.0302 42.5242L15.228 49.2059H22.3487C22.6195 49.206 22.8832 49.2921 23.102 49.4517C23.3208 49.6112 23.4834 49.836 23.5663 50.0938C23.6493 50.3516 23.6483 50.6291 23.5636 50.8863C23.4789 51.1435 23.3148 51.3672 23.0949 51.5252L17.3477 55.6507L19.5416 62.3196C19.7144 62.8457 19.5288 63.4229 19.0833 63.7519C18.8653 63.9112 18.6026 63.9977 18.3326 63.9991C18.0626 64.0004 17.799 63.9166 17.5793 63.7596L11.8142 59.6226L6.04899 63.7596C5.83238 63.9166 5.57155 64.0008 5.30403 64.0002ZM11.8142 56.7682C12.082 56.7683 12.343 56.8525 12.5604 57.0088L15.8846 59.3922L14.6238 55.5586C14.4497 55.0274 14.6404 54.4449 15.0936 54.1185L18.3717 51.7659H14.3025C14.0329 51.7659 13.7702 51.6807 13.5518 51.5226C13.3335 51.3644 13.1706 51.1414 13.0865 50.8852L11.8154 47.0209L10.5457 50.8852C10.3729 51.41 9.88135 51.7659 9.32966 51.7659H5.25923L8.53862 54.1185C8.99174 54.4449 9.18246 55.0274 9.00838 55.5586L7.74757 59.3909L11.0705 57.0075C11.2869 56.8513 11.5472 56.7675 11.8142 56.7682Z" fill="#F6F9FC"/>
              </svg>
              <h3 className='font-bold font-Montserrat text-2xl mt-[2vh] mb-[1.4vh]'>Skilled Team</h3>
              <p className='font-medium font-Hind text-sm md:text-base xl:text-xl'>Our movers are experienced professionals trained to handle your belongings with care.</p>
            </div>
            <div>
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M53.7599 24.32L30.7199 34.1888V14.4512L53.7599 24.32ZM30.7199 14.4512V29.0688L23.0399 32.3712L17.9199 34.56V3.83997L30.7199 9.33117V14.4512Z" fill="#4C9A2A"/>
                <path d="M17.9199 35.8401C17.6244 35.8414 17.3376 35.7404 17.1081 35.5542C16.8787 35.368 16.7208 35.108 16.6614 34.8185C16.602 34.5291 16.6446 34.2279 16.7821 33.9664C16.9196 33.7048 17.1435 33.4989 17.4156 33.3837L22.5356 31.1898C22.6906 31.1208 22.8577 31.0832 23.0273 31.0793C23.1968 31.0754 23.3655 31.1052 23.5235 31.1671C23.6814 31.2289 23.8255 31.3216 23.9473 31.4396C24.0691 31.5576 24.1663 31.6987 24.2331 31.8546C24.3 32.0105 24.3352 32.1781 24.3367 32.3477C24.3381 32.5174 24.3059 32.6856 24.2418 32.8426C24.1777 32.9997 24.083 33.1424 23.9633 33.2626C23.8435 33.3827 23.7011 33.4779 23.5443 33.5425L18.4243 35.7364C18.2651 35.8054 18.0934 35.8407 17.9199 35.8401ZM30.7199 35.474C30.3805 35.474 30.0549 35.3391 29.8149 35.0991C29.5748 34.859 29.4399 34.5335 29.4399 34.194V9.32614C29.4399 8.98667 29.5748 8.66109 29.8149 8.42105C30.0549 8.181 30.3805 8.04614 30.7199 8.04614C31.0594 8.04614 31.385 8.181 31.625 8.42105C31.8651 8.66109 31.9999 8.98667 31.9999 9.32614V34.194C31.9999 34.5335 31.8651 34.859 31.625 35.0991C31.385 35.3391 31.0594 35.474 30.7199 35.474Z" fill="#F6F9FC"/>
                <path d="M53.7599 25.6C53.5864 25.6007 53.4147 25.5654 53.2555 25.4964L30.2155 15.6224C30.0587 15.5578 29.9163 15.4627 29.7965 15.3425C29.6768 15.2224 29.5821 15.0797 29.518 14.9226C29.4539 14.7656 29.4217 14.5973 29.4231 14.4277C29.4246 14.2581 29.4598 14.0905 29.5267 13.9346C29.5935 13.7787 29.6907 13.6376 29.8125 13.5196C29.9343 13.4016 30.0784 13.3089 30.2364 13.2471C30.3943 13.1852 30.563 13.1554 30.7325 13.1593C30.9021 13.1632 31.0692 13.2007 31.2242 13.2698L54.2642 23.1437C54.535 23.2599 54.7575 23.466 54.894 23.7272C55.0305 23.9885 55.0726 24.2888 55.0134 24.5775C54.9541 24.8662 54.797 25.1256 54.5686 25.3119C54.3403 25.4982 54.0546 25.6 53.7599 25.6Z" fill="#F6F9FC"/>
                <path d="M30.7198 35.474C30.4243 35.4753 30.1374 35.3743 29.908 35.1881C29.6785 35.0019 29.5207 34.7419 29.4612 34.4524C29.4018 34.163 29.4445 33.8618 29.582 33.6003C29.7195 33.3387 29.9433 33.1328 30.2155 33.0176L53.2555 23.1437C53.41 23.0775 53.576 23.0423 53.744 23.0403C53.9121 23.0382 54.0789 23.0692 54.235 23.1316C54.391 23.1941 54.5333 23.2866 54.6536 23.404C54.7739 23.5213 54.8699 23.6612 54.9361 23.8157C55.0024 23.9702 55.0375 24.1362 55.0396 24.3043C55.0417 24.4723 55.0106 24.6392 54.9482 24.7952C54.8858 24.9513 54.7933 25.0935 54.6759 25.2138C54.5585 25.3341 54.4186 25.4301 54.2641 25.4964L31.2241 35.3703C31.0648 35.4388 30.8932 35.4741 30.7198 35.474ZM30.7198 10.6061C30.5463 10.6068 30.3746 10.5715 30.2155 10.5024L17.4155 5.01636C17.2586 4.95175 17.1162 4.85661 16.9965 4.73647C16.8767 4.61633 16.782 4.47359 16.7179 4.31654C16.6539 4.15949 16.6216 3.99126 16.6231 3.82164C16.6246 3.65202 16.6598 3.48439 16.7266 3.32848C16.7934 3.17258 16.8906 3.03152 17.0124 2.9135C17.1343 2.79547 17.2784 2.70284 17.4363 2.64099C17.5942 2.57913 17.7629 2.54929 17.9325 2.5532C18.1021 2.5571 18.2692 2.59467 18.4241 2.66372L31.2241 8.1498C31.495 8.266 31.7174 8.47211 31.8539 8.73332C31.9904 8.99454 32.0326 9.29485 31.9733 9.58356C31.914 9.87226 31.757 10.1317 31.5286 10.318C31.3002 10.5043 31.0145 10.606 30.7198 10.6061Z" fill="#F6F9FC"/>
                <path d="M17.9199 64C17.5804 64 17.2548 63.8651 17.0148 63.6251C16.7747 63.385 16.6399 63.0595 16.6399 62.72V1.28C16.6399 0.940523 16.7747 0.61495 17.0148 0.374904C17.2548 0.134857 17.5804 0 17.9199 0C18.2594 0 18.5849 0.134857 18.825 0.374904C19.065 0.61495 19.1999 0.940523 19.1999 1.28V62.72C19.1999 63.0595 19.065 63.385 18.825 63.6251C18.5849 63.8651 18.2594 64 17.9199 64Z" fill="#F6F9FC"/>
                <path d="M25.6 63.9999H10.24C9.90048 63.9999 9.57491 63.8651 9.33486 63.625C9.09482 63.385 8.95996 63.0594 8.95996 62.7199C8.95996 62.3805 9.09482 62.0549 9.33486 61.8148C9.57491 61.5748 9.90048 61.4399 10.24 61.4399H25.6C25.9394 61.4399 26.265 61.5748 26.5051 61.8148C26.7451 62.0549 26.88 62.3805 26.88 62.7199C26.88 63.0594 26.7451 63.385 26.5051 63.625C26.265 63.8651 25.9394 63.9999 25.6 63.9999Z" fill="#F6F9FC"/>
              </svg> 
              <h3 className='font-bold font-Montserrat text-2xl mt-[2vh] mb-[1.4vh]'>End-to-End Solutions</h3>
              <p className='font-medium font-Hind text-sm md:text-base xl:text-xl'>From packing to unpacking, we manage every aspect of your move.</p>
            </div> 
            <div>
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25.6143 31.808C24.4884 33.4828 24.0735 35.5362 24.4611 37.5168C23.5002 38.4286 22.2286 38.9411 20.9039 38.9504C19.9038 38.9501 18.9257 38.6564 18.0908 38.1058C17.2558 37.5553 16.6006 36.7719 16.2063 35.8528C15.9393 35.2351 15.7967 34.5707 15.7867 33.8978C15.7767 33.2249 15.8994 32.5566 16.1478 31.9312C16.3963 31.3057 16.7656 30.7354 17.2347 30.2528C17.7038 29.7702 18.2634 29.3849 18.8815 29.1187C20.1313 28.5853 21.5415 28.5688 22.8034 29.0728C24.0653 29.5769 25.076 30.5604 25.6143 31.808ZM32.0015 43.7504H24.9615C22.1071 43.7504 19.7391 45.824 19.2783 48.5504H12.3792V42.7904C12.3792 40.6656 14.0943 38.9504 16.2191 38.9504H24.8835C25.4562 40.369 26.4399 41.5839 27.7083 42.4392C28.9766 43.2945 30.4717 43.7511 32.0015 43.7504ZM46.6435 30.144C47.1277 30.6094 47.5154 31.1657 47.7845 31.781C48.0537 32.3964 48.1989 33.0587 48.212 33.7302C48.2251 34.4017 48.1057 35.0692 47.8608 35.6945C47.6158 36.3199 47.25 36.8908 46.7843 37.3747C46.3058 37.8732 45.7314 38.2696 45.0956 38.5402C44.4599 38.8108 43.776 38.9499 43.0851 38.9491C41.8051 38.9491 40.5251 38.4755 39.5382 37.5155C39.7306 36.5349 39.7277 35.5259 39.5298 34.5463C39.3319 33.5668 38.9429 32.6358 38.3849 31.8067C38.6281 31.2435 38.975 30.7175 39.3961 30.2707C39.8635 29.7864 40.4218 29.3988 41.0391 29.1303C41.6564 28.8618 42.3205 28.7175 42.9935 28.7057C43.6666 28.694 44.3353 28.8149 44.9616 29.0617C45.5879 29.3085 46.1594 29.6763 46.6435 30.144ZM51.6239 42.7904V48.5504H44.7235C44.4958 47.2082 43.8004 45.9898 42.7604 45.1112C41.7204 44.2327 40.403 43.7506 39.0415 43.7504H32.0015C35.2143 43.7504 37.9791 41.7664 39.1183 38.9504H47.7852C48.2896 38.9499 48.7891 39.0489 49.2551 39.2417C49.7212 39.4345 50.1446 39.7174 50.5012 40.0741C50.8577 40.4308 51.1405 40.8543 51.3331 41.3204C51.5258 41.7865 51.6246 42.2861 51.6239 42.7904Z" fill="#1E5631"/>
                <path d="M23.2078 15.4996V19.4036C23.2078 20.338 22.4526 21.0932 21.5182 21.0932H19.8158V26.1863L14.107 21.0932H2.97103C2.03791 21.0932 1.28271 20.338 1.28271 19.4036V7.55079C1.28271 6.61767 2.03791 5.84839 2.97103 5.84839H21.5182C22.4526 5.84839 23.2078 6.61767 23.2078 7.55079V15.4996ZM62.7214 7.55079V19.4036C62.7214 20.338 61.9662 21.0932 61.0318 21.0932H49.8958L44.1742 26.1863V21.0932H42.4846C41.5515 21.0932 40.7963 20.338 40.7963 19.4036V7.55079C40.7963 6.61767 41.5515 5.84839 42.4846 5.84839H61.0318C61.9662 5.84839 62.7214 6.61767 62.7214 7.55079ZM39.6814 36.0705C39.6814 36.5697 39.6302 37.0433 39.5406 37.5169C39.451 38.0161 39.3102 38.4897 39.1182 38.9505C38.5443 40.3679 37.5604 41.5818 36.2926 42.4369C35.0248 43.292 33.5307 43.7494 32.0014 43.7504C30.4716 43.7512 28.9765 43.2946 27.7081 42.4393C26.4398 41.584 25.4561 40.369 24.8833 38.9505C24.6912 38.4892 24.5496 38.0086 24.4609 37.5169C24.0734 35.5363 24.4882 33.4829 25.6142 31.8081C26.3132 30.7546 27.2626 29.8911 28.3773 29.2946C29.492 28.6982 30.7372 28.3875 32.0014 28.3905C34.6638 28.3905 37.019 29.7473 38.3873 31.8081C39.2348 33.0677 39.6855 34.5523 39.6814 36.0705Z" fill="#4C9A2A"/>
                <path d="M44.8014 49.5104V58.1504H19.2014V49.5104C19.2014 49.1776 19.227 48.8576 19.2782 48.5504C19.5062 47.208 20.2018 45.9896 21.242 45.1111C22.2823 44.2325 23.5998 43.7505 24.9614 43.7504H39.0414C40.5687 43.7514 42.0332 44.3586 43.1132 45.4386C44.1932 46.5185 44.8004 47.983 44.8014 49.5104Z" fill="#4C9A2A"/>
                <path d="M51.625 49.8278C51.2855 49.8278 50.9599 49.693 50.7199 49.4529C50.4798 49.2129 50.345 48.8873 50.345 48.5478V42.7878C50.345 41.376 49.1968 40.2278 47.785 40.2278H39.1194C38.7799 40.2278 38.4543 40.093 38.2143 39.8529C37.9742 39.6129 37.8394 39.2873 37.8394 38.9478C37.8394 38.6084 37.9742 38.2828 38.2143 38.0427C38.4543 37.8027 38.7799 37.6678 39.1194 37.6678H47.785C50.6087 37.6678 52.905 39.9642 52.905 42.7878V48.5478C52.905 48.8873 52.7701 49.2129 52.5301 49.4529C52.29 49.693 51.9645 49.8278 51.625 49.8278ZM12.3725 49.8278C12.0331 49.8278 11.7075 49.693 11.4674 49.4529C11.2274 49.2129 11.0925 48.8873 11.0925 48.5478V42.7878C11.0925 39.9642 13.3888 37.6678 16.2125 37.6678H24.8794C25.2189 37.6678 25.5444 37.8027 25.7845 38.0427C26.0245 38.2828 26.1594 38.6084 26.1594 38.9478C26.1594 39.2873 26.0245 39.6129 25.7845 39.8529C25.5444 40.093 25.2189 40.2278 24.8794 40.2278H16.2125C14.8007 40.2278 13.6525 41.376 13.6525 42.7878V48.5478C13.6525 48.8873 13.5177 49.2129 13.2776 49.4529C13.0376 49.693 12.712 49.8278 12.3725 49.8278Z" fill="#F6F9FC"/>
                <path d="M42.967 40.1971C41.3546 40.1956 39.8066 39.564 38.6534 38.4371C38.4092 38.2013 38.2686 37.8781 38.2626 37.5387C38.2566 37.1993 38.3856 36.8714 38.6214 36.6271C38.8572 36.3829 39.1803 36.2423 39.5197 36.2363C39.8592 36.2303 40.1871 36.3594 40.4313 36.5951C41.8713 37.9839 43.6684 37.7855 44.8717 37.1391C46.0774 36.4889 47.2371 35.0899 46.8672 33.1148C46.4947 31.1206 44.8947 30.2476 43.5213 30.094C42.1248 29.9315 40.3712 30.4422 39.5635 32.3135C39.5004 32.473 39.406 32.6181 39.2857 32.7404C39.1655 32.8626 39.0219 32.9595 38.8636 33.0252C38.7052 33.0909 38.5352 33.1241 38.3637 33.1228C38.1923 33.1215 38.0228 33.0858 37.8654 33.0178C37.708 32.9498 37.5659 32.8508 37.4475 32.7268C37.3291 32.6028 37.2368 32.4563 37.1761 32.2959C37.1154 32.1355 37.0875 31.9646 37.0941 31.7933C37.1008 31.6219 37.1418 31.4537 37.2147 31.2985C38.3373 28.6988 40.9305 27.2179 43.8054 27.5494C46.6752 27.8694 48.8652 29.87 49.3849 32.6438C49.8969 35.3868 48.6028 38.0351 46.0864 39.3907C45.1298 39.9147 44.0577 40.1919 42.967 40.1971ZM21.0406 40.2035C19.8693 40.1957 18.7213 39.8753 17.7152 39.2755C15.1693 37.7868 13.9891 35.0233 14.7072 32.2329C15.3894 29.5884 17.6307 27.7388 20.4198 27.5225C23.2064 27.3151 25.7062 28.7897 26.7865 31.2985C26.9205 31.6103 26.9252 31.9626 26.7997 32.2779C26.6742 32.5932 26.4287 32.8459 26.1171 32.9804C25.8051 33.1129 25.4534 33.117 25.1385 32.9916C24.8235 32.8663 24.5708 32.6217 24.4352 32.311C23.6595 30.5049 21.9481 29.9788 20.6195 30.0748C19.2819 30.1785 17.6793 30.967 17.1891 32.8716C16.672 34.8761 17.7907 36.3532 19.0093 37.0649C20.1779 37.7459 22.0749 38.0339 23.5725 36.5913C23.8204 36.3732 24.1429 36.2592 24.4728 36.2731C24.8027 36.2871 25.1145 36.4278 25.3432 36.666C25.5718 36.9043 25.6997 37.2216 25.7001 37.5518C25.7005 37.882 25.5734 38.1996 25.3453 38.4383C24.1305 39.6044 22.6048 40.2035 21.0406 40.2035ZM19.2806 49.8278H12.3737C12.0343 49.8278 11.7087 49.6929 11.4687 49.4529C11.2286 49.2128 11.0938 48.8872 11.0938 48.5478C11.0938 48.2083 11.2286 47.8827 11.4687 47.6427C11.7087 47.4026 12.0343 47.2678 12.3737 47.2678H19.2806C19.6201 47.2678 19.9457 47.4026 20.1857 47.6427C20.4258 47.8827 20.5606 48.2083 20.5606 48.5478C20.5606 48.8872 20.4258 49.2128 20.1857 49.4529C19.9457 49.6929 19.6201 49.8278 19.2806 49.8278ZM51.6249 49.8278H44.7193C44.3799 49.8278 44.0543 49.6929 43.8142 49.4529C43.5742 49.2128 43.4393 48.8872 43.4393 48.5478C43.4393 48.2083 43.5742 47.8827 43.8142 47.6427C44.0543 47.4026 44.3799 47.2678 44.7193 47.2678H51.6249C51.9644 47.2678 52.29 47.4026 52.53 47.6427C52.7701 47.8827 52.9049 48.2083 52.9049 48.5478C52.9049 48.8872 52.7701 49.2128 52.53 49.4529C52.29 49.6929 51.9644 49.8278 51.6249 49.8278ZM44.8 59.4278H19.2C18.8605 59.4278 18.5349 59.2929 18.2949 59.0529C18.0548 58.8128 17.92 58.4872 17.92 58.1478C17.92 57.8083 18.0548 57.4827 18.2949 57.2427C18.5349 57.0026 18.8605 56.8678 19.2 56.8678H44.8C45.1394 56.8678 45.465 57.0026 45.7051 57.2427C45.9451 57.4827 46.08 57.8083 46.08 58.1478C46.08 58.4872 45.9451 58.8128 45.7051 59.0529C45.465 59.2929 45.1394 59.4278 44.8 59.4278Z" fill="#F6F9FC"/>
                <path d="M44.8001 59.4278C44.4607 59.4278 44.1351 59.2929 43.8951 59.0529C43.655 58.8128 43.5202 58.4872 43.5202 58.1478V49.5078C43.5202 47.0374 41.5106 45.0278 39.0402 45.0278H24.9602C22.4898 45.0278 20.4802 47.0374 20.4802 49.5078V58.1478C20.4802 58.4872 20.3453 58.8128 20.1053 59.0529C19.8652 59.2929 19.5396 59.4278 19.2002 59.4278C18.8607 59.4278 18.5351 59.2929 18.2951 59.0529C18.055 58.8128 17.9202 58.4872 17.9202 58.1478V49.5078C17.9202 45.6268 21.0792 42.4678 24.9602 42.4678H39.0402C42.9211 42.4678 46.0802 45.6268 46.0802 49.5078V58.1478C46.0802 58.4872 45.9453 58.8128 45.7052 59.0529C45.4652 59.2929 45.1396 59.4278 44.8001 59.4278Z" fill="#F6F9FC"/>
                <path d="M32 45.0278C27.1437 45.0278 23.04 40.9241 23.04 36.0678C23.04 31.2115 27.1437 27.1078 32 27.1078C36.8563 27.1078 40.96 31.2115 40.96 36.0678C40.96 40.9241 36.8563 45.0278 32 45.0278ZM32 29.6678C28.5312 29.6678 25.6 32.599 25.6 36.0678C25.6 39.5366 28.5312 42.4678 32 42.4678C35.4688 42.4678 38.4 39.5366 38.4 36.0678C38.4 32.599 35.4688 29.6678 32 29.6678ZM19.8195 27.4624C19.5061 27.4623 19.2036 27.3471 18.9696 27.1385L13.6154 22.3795H2.97216C2.18398 22.3785 1.4284 22.0648 0.871196 21.5074C0.313991 20.9499 0.000677345 20.1942 0 19.4061V7.54558C0.000677345 6.75741 0.313991 6.00169 0.871196 5.44424C1.4284 4.8868 2.18398 4.57316 2.97216 4.57214H21.5142C22.3027 4.57282 23.0588 4.88627 23.6165 5.44371C24.1742 6.00116 24.4879 6.75707 24.4889 7.54558V19.4061C24.4879 20.1946 24.1742 20.9505 23.6165 21.5079C23.0588 22.0654 22.3027 22.3788 21.5142 22.3795H21.0995V26.1824C21.0998 26.3506 21.067 26.5172 21.0028 26.6726C20.9386 26.8281 20.8443 26.9693 20.7254 27.0882C20.6064 27.2071 20.4652 27.3014 20.3097 27.3656C20.1543 27.4298 19.9877 27.4627 19.8195 27.4624ZM2.97216 7.13214C2.86261 7.13282 2.75778 7.17681 2.68056 7.25451C2.60334 7.33221 2.56 7.43731 2.56 7.54686V19.4073C2.56 19.6365 2.7456 19.8208 2.97216 19.8208H14.1018C14.4154 19.8208 14.7174 19.936 14.9517 20.1446L18.5395 23.3331V21.1008C18.5395 20.7613 18.6744 20.4357 18.9144 20.1957C19.1545 19.9556 19.48 19.8208 19.8195 19.8208H21.5142C21.624 19.8208 21.7293 19.7773 21.807 19.6998C21.8848 19.6223 21.9286 19.5171 21.9289 19.4073V7.54686C21.9286 7.43709 21.8848 7.33194 21.807 7.25444C21.7293 7.17694 21.624 7.13342 21.5142 7.13342H2.97216V7.13214ZM44.1779 27.4624C43.8385 27.462 43.5131 27.3271 43.2732 27.0871C43.0332 26.8471 42.8982 26.5217 42.8979 26.1824V22.3795H42.4832C41.695 22.3785 40.9394 22.0648 40.3822 21.5074C39.825 20.9499 39.5117 20.1942 39.511 19.4061V7.54558C39.5117 6.75741 39.825 6.00169 40.3822 5.44424C40.9394 4.8868 41.695 4.57316 42.4832 4.57214H61.0252C61.8138 4.57282 62.5698 4.88627 63.1275 5.44371C63.6852 6.00116 63.999 6.75707 64 7.54558V19.4061C63.999 20.1946 63.6852 20.9505 63.1275 21.5079C62.5698 22.0654 61.8138 22.3788 61.0252 22.3795H50.3808L45.0265 27.1385C44.7931 27.3471 44.491 27.4624 44.1779 27.4624ZM42.4819 7.13214C42.3725 7.13248 42.2676 7.17619 42.1904 7.25369C42.1131 7.33119 42.0697 7.43615 42.0697 7.54558V19.4061C42.0697 19.6352 42.2553 19.8195 42.4819 19.8195H44.1766C44.5161 19.8195 44.8417 19.9544 45.0817 20.1944C45.3218 20.4344 45.4566 20.76 45.4566 21.0995V23.3318L49.0445 20.1433C49.2784 19.9348 49.5809 19.8195 49.8944 19.8195H61.024C61.1337 19.8195 61.239 19.776 61.3168 19.6985C61.3945 19.621 61.4384 19.5158 61.4387 19.4061V7.54558C61.4384 7.43581 61.3945 7.33066 61.3168 7.25316C61.239 7.17566 61.1337 7.13214 61.024 7.13214H42.4819Z" fill="#F6F9FC"/>
              </svg>
              <h3 className='font-bold font-Montserrat text-2xl mt-[2vh] mb-[1.4vh]'>Customer-Centric Approach</h3>
              <p className='font-medium font-Hind text-sm md:text-base xl:text-xl'>Your satisfaction is our top priority; we go above and beyond to meet your expectations.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}