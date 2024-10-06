import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import QuoteBtn from '../shared/QuoteBtn'
import MobileQuoteBtn from '../shared/MobileQuoteBtn'


const page = () => {
  return (
    <section className='min-h-screen h-fit w-screen relative -mb-20 md:mb-0'>
      <div className='min-h-screen custom-shape-v2 h-fit md:w-full relative  pt-[100px] md:pt-[calc(8.8vh+96px)]'>
        <div className='skew-y-[14deg] md:skew-y-[3.5deg] pt-[calc(8.8vh+146px)] lg:pt-[calc(8.8vh+96px)] max-w-[1920px] mx-auto px-4 md:px-[10vw]'>
          <div className='w-full lg:w-1/2 h-full'>
            <h1 className='text-mywhite text-[2rem] md:text-4xl xl:text-5xl 4xl:text-6xl w-fit font-Montserrat font-bold leading-tight'>Get in Touch with <br /> Carty Moving Company</h1>
            <p className='font-Hind font-medium text-mywhite text-base xl:text-lg mt-[4.4vh] mb-[2.2vh]'>
            We value your questions, feedback, and inquiries. Whether you’re planning your next move, need a quote, or just want to learn more about our services, our team is here to assist you every step of the way. Reach out to us using the contact details below.
            </p>
            <div className='w-[154px] md:w-[250px]'>
                <QuoteBtn />
                <MobileQuoteBtn />
            </div>
            <div className='flex justify-between flex-wrap md:justify-normal gap-2 md:gap-12 text-mywhite mt-6 md:mt-[5.9vh] pb-20 md:pb-12'>
              <div className='flex flex-col'>
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M32 47.58C36.4183 47.58 40 43.9983 40 39.58C40 35.1617 36.4183 31.58 32 31.58C27.5817 31.58 24 35.1617 24 39.58C24 43.9983 27.5817 47.58 32 47.58Z" fill="#1E5631"/>
                <path d="M55.28 21.06C56.24 22.03 56.24 23.59 55.28 24.56L50.91 28.92C50.03 29.8 48.639 29.89 47.65 29.13L42.83 25.39C42.3 24.98 42 24.36 42 23.7V19.35C35.581 16.78 28.419 16.78 22 19.35V23.7C22 24.36 21.7 24.98 21.17 25.39L16.35 29.13C15.361 29.89 13.97 29.8 13.09 28.92L8.72 24.56C7.76 23.59 7.76 22.03 8.72 21.06C21.58 8.20999 42.42 8.20999 55.28 21.06Z" fill="#1E5631"/>
                <path d="M52 41.47V48.58C52 50.79 50.21 52.58 48 52.58H16C13.79 52.58 12 50.79 12 48.58V41.47C12 39 13.15 36.66 15.1 35.15L23.621 28.55C24.3615 27.9769 24.961 27.2418 25.3734 26.4011C25.7857 25.5604 26.0001 24.6364 26 23.7H38C38 25.6 38.88 27.39 40.38 28.55L44.151 31.48L48.901 35.15C49.8648 35.8979 50.6449 36.856 51.182 37.9513C51.7191 39.0466 51.9989 40.2501 52 41.47ZM40 39.58C40 35.16 36.42 31.58 32 31.58C27.58 31.58 24 35.16 24 39.58C24 44 27.58 47.58 32 47.58C36.42 47.58 40 44 40 39.58Z" fill="#4C9A2A"/>
                <path d="M44.1522 32.476C43.931 32.4763 43.7159 32.4027 43.5412 32.267L39.7652 29.343C38.9063 28.6737 38.2109 27.8178 37.7313 26.8403C37.2518 25.8627 37.0008 24.7888 36.9972 23.7C36.9972 23.4348 37.1026 23.1804 37.2901 22.9929C37.4776 22.8053 37.732 22.7 37.9972 22.7C38.2624 22.7 38.5168 22.8053 38.7043 22.9929C38.8919 23.1804 38.9972 23.4348 38.9972 23.7C38.9972 25.277 39.7422 26.795 40.9892 27.761L44.7652 30.685C44.9303 30.8127 45.0513 30.9888 45.1113 31.1887C45.1712 31.3887 45.1671 31.6023 45.0995 31.7998C45.0319 31.9973 44.9042 32.1686 44.7344 32.2899C44.5645 32.4112 44.3609 32.4762 44.1522 32.476ZM15.1042 36.149C14.8955 36.1492 14.6919 36.0842 14.5221 35.9629C14.3522 35.8416 14.2245 35.6703 14.1569 35.4728C14.0893 35.2753 14.0852 35.0617 14.1452 34.8617C14.2051 34.6618 14.3261 34.4857 14.4912 34.358L23.0122 27.76C23.6302 27.2782 24.1306 26.6623 24.4757 25.9588C24.8208 25.2553 25.0015 24.4826 25.0042 23.699C25.0042 23.4338 25.1096 23.1794 25.2971 22.9919C25.4846 22.8043 25.739 22.699 26.0042 22.699C26.2694 22.699 26.5238 22.8043 26.7113 22.9919C26.8989 23.1794 27.0042 23.4338 27.0042 23.699C27.0008 24.7877 26.7498 25.8614 26.2703 26.8389C25.7907 27.8164 25.0952 28.672 24.2362 29.341L15.7152 35.939C15.5406 36.0751 15.3256 36.149 15.1042 36.149Z" fill="#F6F9FC"/>
                <path d="M37.997 24.7H26.003C25.7378 24.7 25.4834 24.5947 25.2959 24.4071C25.1084 24.2196 25.003 23.9652 25.003 23.7C25.003 23.4348 25.1084 23.1804 25.2959 22.9929C25.4834 22.8054 25.7378 22.7 26.003 22.7H37.997C38.2622 22.7 38.5166 22.8054 38.7041 22.9929C38.8916 23.1804 38.997 23.4348 38.997 23.7C38.997 23.9652 38.8916 24.2196 38.7041 24.4071C38.5166 24.5947 38.2622 24.7 37.997 24.7ZM12 42.475C11.7348 42.475 11.4804 42.3697 11.2929 42.1821C11.1054 41.9946 11 41.7402 11 41.475C11.0045 40.102 11.321 38.7479 11.9256 37.5151C12.5302 36.2824 13.4071 35.2031 14.49 34.359C14.5939 34.2786 14.7126 34.2195 14.8393 34.185C14.966 34.1505 15.0983 34.1413 15.2286 34.1579C15.3589 34.1746 15.4846 34.2167 15.5986 34.2819C15.7126 34.3471 15.8126 34.4341 15.893 34.538C15.9734 34.6419 16.0325 34.7606 16.067 34.8873C16.1015 35.014 16.1107 35.1463 16.0941 35.2766C16.0774 35.4069 16.0353 35.5326 15.9701 35.6466C15.9049 35.7606 15.8179 35.8606 15.714 35.941C14.8718 36.5974 14.1898 37.4367 13.7196 38.3954C13.2494 39.3541 13.0033 40.4072 13 41.475C13 41.7402 12.8946 41.9946 12.7071 42.1821C12.5196 42.3697 12.2652 42.475 12 42.475Z" fill="#F6F9FC"/>
                <path d="M12 49.579C11.7348 49.579 11.4804 49.4737 11.2929 49.2861C11.1054 49.0986 11 48.8442 11 48.579V41.475C11 41.2098 11.1054 40.9555 11.2929 40.7679C11.4804 40.5804 11.7348 40.475 12 40.475C12.2652 40.475 12.5196 40.5804 12.7071 40.7679C12.8946 40.9555 13 41.2098 13 41.475V48.579C13 48.8442 12.8946 49.0986 12.7071 49.2861C12.5196 49.4737 12.2652 49.579 12 49.579ZM52 42.475C51.7348 42.475 51.4804 42.3697 51.2929 42.1821C51.1054 41.9946 51 41.7402 51 41.475C50.9967 40.4071 50.7505 39.3539 50.2802 38.3952C49.8098 37.4364 49.1275 36.5972 48.285 35.941C48.0752 35.7787 47.9385 35.5397 47.9049 35.2766C47.8714 35.0135 47.9437 34.7478 48.106 34.538C48.2683 34.3282 48.5073 34.1915 48.7704 34.1579C49.0335 34.1244 49.2992 34.1967 49.509 34.359C50.5924 35.2028 51.4697 36.2819 52.0745 37.5148C52.6793 38.7476 52.9958 40.1018 53 41.475C53 41.7402 52.8946 41.9946 52.7071 42.1821C52.5196 42.3697 52.2652 42.475 52 42.475Z" fill="#F6F9FC"/>
                <path d="M51.9999 49.579C51.7346 49.579 51.4803 49.4736 51.2928 49.2861C51.1052 49.0986 50.9999 48.8442 50.9999 48.579V41.475C50.9999 41.2098 51.1052 40.9554 51.2928 40.7679C51.4803 40.5804 51.7346 40.475 51.9999 40.475C52.2651 40.475 52.5194 40.5804 52.707 40.7679C52.8945 40.9554 52.9999 41.2098 52.9999 41.475V48.579C52.9999 48.8442 52.8945 49.0986 52.707 49.2861C52.5194 49.4736 52.2651 49.579 51.9999 49.579ZM16.3479 30.127C16.1391 30.1273 15.9356 30.0622 15.7657 29.9409C15.5958 29.8197 15.4681 29.6483 15.4006 29.4508C15.333 29.2534 15.3289 29.0397 15.3888 28.8398C15.4488 28.6399 15.5698 28.4637 15.7349 28.336L20.5629 24.598C20.8389 24.385 21.0029 24.049 21.0029 23.7V19.346C21.0029 19.0808 21.1082 18.8264 21.2958 18.6389C21.4833 18.4514 21.7376 18.346 22.0029 18.346C22.2681 18.346 22.5224 18.4514 22.71 18.6389C22.8975 18.8264 23.0029 19.0808 23.0029 19.346V23.7C23.0029 24.663 22.5479 25.59 21.7869 26.179L16.9589 29.917C16.7844 30.0534 16.5693 30.1273 16.3479 30.127ZM47.6519 30.127C47.4306 30.1273 47.2156 30.0537 47.0409 29.918L42.2129 26.18C41.8356 25.886 41.53 25.51 41.3194 25.0805C41.1087 24.6511 40.9984 24.1794 40.9969 23.701V19.347C40.9969 19.0818 41.1022 18.8274 41.2898 18.6399C41.4773 18.4524 41.7316 18.347 41.9969 18.347C42.2621 18.347 42.5164 18.4524 42.704 18.6399C42.8915 18.8274 42.9969 19.0818 42.9969 19.347V23.7C42.9969 24.049 43.1609 24.385 43.4369 24.597L48.2649 28.336C48.43 28.4637 48.551 28.6399 48.6109 28.8398C48.6709 29.0397 48.6668 29.2534 48.5992 29.4508C48.5316 29.6483 48.4039 29.8197 48.234 29.9409C48.0641 30.0622 47.8606 30.1273 47.6519 30.127Z" fill="#F6F9FC"/>
                <path d="M41.9969 20.347C41.8697 20.3471 41.7437 20.3227 41.6259 20.275C35.4487 17.792 28.551 17.792 22.3739 20.275C22.2515 20.3261 22.1201 20.3524 21.9875 20.3523C21.8549 20.3522 21.7236 20.3257 21.6013 20.2744C21.4789 20.223 21.3681 20.1479 21.2751 20.0533C21.1821 19.9587 21.1089 19.8465 21.0597 19.7234C21.0105 19.6002 20.9862 19.4684 20.9884 19.3358C20.9906 19.2032 21.0192 19.0723 21.0724 18.9508C21.1257 18.8294 21.2025 18.7197 21.2986 18.6282C21.3946 18.5367 21.5079 18.4653 21.6319 18.418C28.2849 15.742 35.7149 15.742 42.3679 18.418C42.584 18.5041 42.7633 18.6628 42.875 18.8668C42.9867 19.0708 43.0237 19.3074 42.9798 19.5358C42.9359 19.7643 42.8137 19.9702 42.6343 20.1183C42.4549 20.2663 42.2295 20.3472 41.9969 20.347Z" fill="#F6F9FC"/>
                <path d="M55.276 22.063C55.1447 22.0631 55.0146 22.0373 54.8933 21.987C54.7719 21.9368 54.6617 21.863 54.569 21.77C42.124 9.32601 21.876 9.32601 9.42999 21.77C9.33715 21.8629 9.22693 21.9365 9.10562 21.9867C8.98431 22.037 8.85429 22.0629 8.72299 22.0629C8.59169 22.0629 8.46167 22.037 8.34037 21.9867C8.21906 21.9365 8.10884 21.8629 8.01599 21.77C7.92315 21.6772 7.8495 21.5669 7.79925 21.4456C7.74901 21.3243 7.72314 21.1943 7.72314 21.063C7.72314 20.9317 7.74901 20.8017 7.79925 20.6804C7.8495 20.5591 7.92315 20.4489 8.01599 20.356C21.241 7.13101 42.758 7.13101 55.983 20.356C56.1233 20.4957 56.2189 20.6739 56.2578 20.868C56.2966 21.0621 56.2769 21.2634 56.2012 21.4463C56.1254 21.6292 55.997 21.7854 55.8323 21.8953C55.6676 22.0051 55.474 22.0634 55.276 22.063ZM13.089 29.92C12.9577 29.9201 12.8276 29.8943 12.7063 29.844C12.5849 29.7938 12.4747 29.72 12.382 29.627L8.01699 25.262C7.92415 25.1692 7.8505 25.0589 7.80025 24.9376C7.75001 24.8163 7.72414 24.6863 7.72414 24.555C7.72414 24.4237 7.75001 24.2937 7.80025 24.1724C7.8505 24.0511 7.92415 23.9409 8.01699 23.848C8.10984 23.7552 8.22006 23.6815 8.34137 23.6313C8.46267 23.581 8.59269 23.5552 8.72399 23.5552C8.8553 23.5552 8.98531 23.581 9.10662 23.6313C9.22793 23.6815 9.33815 23.7552 9.43099 23.848L13.796 28.213C13.9363 28.3527 14.0319 28.5309 14.0708 28.725C14.1096 28.9191 14.0899 29.1204 14.0142 29.3033C13.9384 29.4862 13.81 29.6424 13.6453 29.7523C13.4806 29.8621 13.287 29.9204 13.089 29.92Z" fill="#F6F9FC"/>
                <path d="M8.724 25.555C8.45895 25.5552 8.20466 25.4502 8.017 25.263C7.361 24.607 7 23.736 7 22.809C7 21.882 7.361 21.011 8.017 20.355C8.20464 20.1675 8.45908 20.0622 8.72435 20.0623C8.98962 20.0624 9.24399 20.1679 9.4315 20.3555C9.61901 20.5432 9.7243 20.7976 9.7242 21.0629C9.72411 21.3281 9.61864 21.5825 9.431 21.77C9.153 22.048 9 22.417 9 22.809C9 23.201 9.153 23.57 9.431 23.848C9.57081 23.9879 9.66602 24.166 9.70458 24.36C9.74315 24.5539 9.72335 24.755 9.64768 24.9377C9.57201 25.1204 9.44387 25.2765 9.27946 25.3864C9.11505 25.4963 8.92175 25.555 8.724 25.555ZM55.276 25.555C55.078 25.5552 54.8845 25.4966 54.7199 25.3866C54.5552 25.2767 54.427 25.1204 54.3512 24.9375C54.2755 24.7546 54.2558 24.5533 54.2946 24.3592C54.3333 24.1651 54.4288 23.9868 54.569 23.847C54.847 23.57 55 23.202 55 22.809C55 22.416 54.847 22.048 54.569 21.77C54.4761 21.6772 54.4024 21.5669 54.3521 21.4456C54.3018 21.3243 54.2758 21.1942 54.2758 21.0629C54.2758 20.9315 54.3016 20.8015 54.3518 20.6801C54.402 20.5587 54.4757 20.4484 54.5685 20.3555C54.6613 20.2626 54.7716 20.1889 54.8929 20.1386C55.0142 20.0883 55.1443 20.0624 55.2756 20.0623C55.407 20.0623 55.5371 20.0881 55.6584 20.1383C55.7798 20.1885 55.8901 20.2622 55.983 20.355C56.639 21.011 57 21.882 57 22.809C57 23.736 56.639 24.607 55.983 25.263C55.8902 25.3559 55.78 25.4295 55.6586 25.4796C55.5373 25.5297 55.4073 25.5553 55.276 25.555Z" fill="#F6F9FC"/>
                <path d="M50.9109 29.92C50.7129 29.9205 50.5193 29.8621 50.3546 29.7523C50.1898 29.6425 50.0615 29.4862 49.9857 29.3033C49.9099 29.1204 49.8902 28.9191 49.9291 28.725C49.9679 28.5309 50.0636 28.3527 50.2039 28.213L54.5689 23.848C54.6617 23.7552 54.7719 23.6815 54.8933 23.6313C55.0146 23.581 55.1446 23.5552 55.2759 23.5552C55.4072 23.5552 55.5372 23.581 55.6585 23.6313C55.7798 23.6815 55.89 23.7552 55.9829 23.848C56.0757 23.9409 56.1494 24.0511 56.1996 24.1724C56.2499 24.2937 56.2757 24.4237 56.2757 24.555C56.2757 24.6863 56.2499 24.8163 56.1996 24.9377C56.1494 25.059 56.0757 25.1692 55.9829 25.262L51.6179 29.627C51.5253 29.7202 51.4151 29.7941 51.2937 29.8444C51.1724 29.8947 51.0422 29.9204 50.9109 29.92Z" fill="#F6F9FC"/>
                <path d="M49.163 30.642C48.3949 30.6428 47.6484 30.3881 47.041 29.918C46.9337 29.8389 46.8432 29.7392 46.775 29.6246C46.7068 29.5101 46.6622 29.383 46.6438 29.251C46.6254 29.1189 46.6335 28.9845 46.6678 28.8557C46.7021 28.7269 46.7619 28.6062 46.8435 28.5008C46.9251 28.3953 47.027 28.3073 47.1431 28.2418C47.2592 28.1763 47.3873 28.1348 47.5197 28.1195C47.6522 28.1042 47.7864 28.1156 47.9143 28.153C48.0423 28.1903 48.1615 28.2529 48.265 28.337C48.5478 28.5556 48.9005 28.6637 49.2572 28.6411C49.6139 28.6184 49.9501 28.4666 50.203 28.214C50.2959 28.1211 50.4062 28.0475 50.5276 27.9973C50.6489 27.9471 50.779 27.9212 50.9104 27.9213C51.0417 27.9213 51.1718 27.9473 51.2931 27.9976C51.4144 28.0479 51.5247 28.1216 51.6175 28.2145C51.7103 28.3074 51.784 28.4177 51.8342 28.5391C51.8844 28.6604 51.9102 28.7905 51.9102 28.9218C51.9102 29.0532 51.8842 29.1832 51.8339 29.3046C51.7836 29.4259 51.7099 29.5361 51.617 29.629C51.2946 29.9509 50.912 30.206 50.4909 30.3798C50.0698 30.5537 49.6185 30.6427 49.163 30.642ZM14.837 30.642C14.3812 30.6428 13.9297 30.5537 13.5084 30.3796C13.0872 30.2056 12.7044 29.9502 12.382 29.628C12.2891 29.5351 12.2154 29.4249 12.1651 29.3036C12.1148 29.1822 12.0888 29.0522 12.0888 28.9208C12.0888 28.7895 12.1146 28.6594 12.1648 28.5381C12.215 28.4167 12.2887 28.3064 12.3815 28.2135C12.4743 28.1206 12.5846 28.0469 12.7059 27.9966C12.8272 27.9463 12.9573 27.9203 13.0886 27.9203C13.22 27.9202 13.3501 27.9461 13.4714 27.9963C13.5928 28.0465 13.7031 28.1201 13.796 28.213C14.0489 28.4656 14.3851 28.6174 14.7418 28.6401C15.0985 28.6627 15.4512 28.5546 15.734 28.336C15.9442 28.1811 16.2066 28.1146 16.4652 28.1506C16.7238 28.1867 16.9581 28.3224 17.1179 28.5289C17.2778 28.7353 17.3505 28.9961 17.3206 29.2555C17.2907 29.5149 17.1606 29.7523 16.958 29.917C16.3514 30.3879 15.605 30.6431 14.837 30.642ZM32 48.579C27.121 48.579 23 44.457 23 39.579C23 34.701 27.121 30.579 32 30.579C36.879 30.579 41 34.701 41 39.579C41 44.457 36.879 48.579 32 48.579ZM32 32.579C28.206 32.579 25 35.785 25 39.579C25 43.373 28.206 46.579 32 46.579C35.794 46.579 39 43.373 39 39.579C39 35.785 35.794 32.579 32 32.579ZM16 53.579C13.243 53.579 11 51.336 11 48.579C11 48.3138 11.1054 48.0594 11.2929 47.8719C11.4804 47.6843 11.7348 47.579 12 47.579C12.2652 47.579 12.5196 47.6843 12.7071 47.8719C12.8946 48.0594 13 48.3138 13 48.579C13 50.233 14.346 51.579 16 51.579C16.2652 51.579 16.5196 51.6843 16.7071 51.8719C16.8946 52.0594 17 52.3138 17 52.579C17 52.8442 16.8946 53.0986 16.7071 53.2861C16.5196 53.4736 16.2652 53.579 16 53.579Z" fill="#F6F9FC"/>
                <path d="M48 53.579H16C15.7348 53.579 15.4804 53.4736 15.2929 53.2861C15.1054 53.0986 15 52.8442 15 52.579C15 52.3138 15.1054 52.0594 15.2929 51.8719C15.4804 51.6843 15.7348 51.579 16 51.579H48C48.2652 51.579 48.5196 51.6843 48.7071 51.8719C48.8946 52.0594 49 52.3138 49 52.579C49 52.8442 48.8946 53.0986 48.7071 53.2861C48.5196 53.4736 48.2652 53.579 48 53.579Z" fill="#F6F9FC"/>
                <path d="M48 53.579C47.7348 53.579 47.4804 53.4736 47.2929 53.2861C47.1054 53.0986 47 52.8442 47 52.579C47 52.3138 47.1054 52.0594 47.2929 51.8719C47.4804 51.6843 47.7348 51.579 48 51.579C49.654 51.579 51 50.233 51 48.579C51 48.3138 51.1054 48.0594 51.2929 47.8719C51.4804 47.6843 51.7348 47.579 52 47.579C52.2652 47.579 52.5196 47.6843 52.7071 47.8719C52.8946 48.0594 53 48.3138 53 48.579C53 51.336 50.757 53.579 48 53.579Z" fill="#F6F9FC"/>
              </svg>
              <h3 className='font-Montserrat font-bold md:text-2xl mt-1 md:mt-[2.2vh] mb-1 md:mb-[1.4vh]'>Phone</h3>
              <Link href="tel: 8188351880" className='font-Hind font-medium text-sm md:text-xl text-nowrap'>(818) 835 - 1880</Link>
              </div>
              <div className='flex flex-col'>
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24.98 32L25.95 32.68C29.56 35.28 34.44 35.28 38.05 32.68L39.02 32L50 24.24L56 20V46C56 48.21 54.21 50 52 50H12C9.79 50 8 48.21 8 46V20L24.98 32Z" fill="#4C9A2A"/>
                  <path d="M56 18V20L50 24.24L39.02 32L38.05 32.68C36.2875 33.9479 34.1712 34.6301 32 34.6301C29.8288 34.6301 27.7125 33.9479 25.95 32.68L24.98 32L8 20V18C8 15.79 9.79 14 12 14H52C54.21 14 56 15.79 56 18Z" fill="#1E5631"/>
                  <path d="M38.0519 33.682C37.8391 33.683 37.6315 33.616 37.4595 33.4908C37.2874 33.3655 37.1599 33.1887 37.0953 32.9859C37.0308 32.7831 37.0328 32.565 37.1009 32.3634C37.1689 32.1618 37.2996 31.9872 37.4739 31.865L49.4229 23.423C49.6396 23.27 49.9082 23.2093 50.1696 23.2543C50.431 23.2993 50.6638 23.4463 50.8169 23.663C50.9699 23.8797 51.0306 24.1483 50.9856 24.4097C50.9406 24.6712 50.7936 24.904 50.5769 25.057L38.6279 33.499C38.4593 33.6179 38.2581 33.6818 38.0519 33.682Z" fill="#F6F9FC"/>
                  <path d="M51.7879 46.391C51.6525 46.3911 51.5185 46.3637 51.394 46.3104C51.2696 46.2571 51.1572 46.179 51.0639 46.081L38.2919 32.69C38.1087 32.4981 38.0093 32.2414 38.0155 31.9762C38.0217 31.711 38.133 31.4591 38.3249 31.276C38.5168 31.0929 38.7735 30.9935 39.0387 30.9997C39.3039 31.0059 39.5557 31.1171 39.7389 31.309L52.5119 44.7C52.6473 44.8417 52.7381 45.02 52.773 45.2128C52.8079 45.4056 52.7854 45.6045 52.7083 45.7846C52.6312 45.9647 52.5028 46.1183 52.3392 46.2261C52.1755 46.3339 51.9838 46.3912 51.7879 46.391ZM12.2109 46.391C12.0148 46.3918 11.8228 46.3348 11.6589 46.2271C11.4951 46.1194 11.3666 45.9658 11.2894 45.7856C11.2123 45.6053 11.19 45.4063 11.2253 45.2134C11.2606 45.0205 11.3519 44.8423 11.4879 44.701L24.2609 31.31C24.444 31.1181 24.6959 31.0069 24.961 31.0007C25.2262 30.9945 25.483 31.0939 25.6749 31.277C25.8668 31.4601 25.978 31.712 25.9842 31.9772C25.9904 32.2424 25.891 32.4991 25.7079 32.691L12.9349 46.081C12.8416 46.1791 12.7293 46.2572 12.6048 46.3105C12.4803 46.3638 12.3463 46.3912 12.2109 46.391Z" fill="#F6F9FC"/>
                  <path d="M32 35.632C29.675 35.632 27.35 34.919 25.366 33.493C25.1505 33.3382 25.0054 33.1042 24.9624 32.8424C24.9195 32.5806 24.9823 32.3125 25.137 32.097C25.2918 31.8815 25.5258 31.7363 25.7876 31.6934C26.0494 31.6504 26.3175 31.7132 26.533 31.868C28.1259 33.0138 30.0384 33.6302 32.0005 33.6302C33.9627 33.6302 35.8752 33.0138 37.468 31.868C37.6835 31.7132 37.9517 31.6504 38.2135 31.6934C38.4753 31.7363 38.7093 31.8815 38.864 32.097C39.0188 32.3125 39.0816 32.5806 39.0387 32.8424C38.9957 33.1042 38.8505 33.3382 38.635 33.493C36.7023 34.884 34.3813 35.6323 32 35.632Z" fill="#F6F9FC"/>
                  <path d="M25.9482 33.682C25.7492 33.682 25.5472 33.622 25.3722 33.499L7.42324 20.817C7.21811 20.6596 7.08188 20.4288 7.04307 20.1732C7.00427 19.9175 7.06592 19.6567 7.2151 19.4455C7.36427 19.2343 7.58941 19.089 7.84333 19.0401C8.09725 18.9911 8.36025 19.0424 8.57724 19.183L26.5262 31.865C26.6992 31.9879 26.8286 32.1625 26.8958 32.3637C26.9631 32.5649 26.9647 32.7823 26.9004 32.9845C26.8361 33.1866 26.7092 33.3631 26.5381 33.4885C26.3669 33.6139 26.1604 33.6816 25.9482 33.682ZM52.0002 51H12.0002C11.735 51 11.4807 50.8947 11.2931 50.7071C11.1056 50.5196 11.0002 50.2652 11.0002 50C11.0002 49.7348 11.1056 49.4805 11.2931 49.2929C11.4807 49.1054 11.735 49 12.0002 49H52.0002C52.2655 49 52.5198 49.1054 52.7074 49.2929C52.8949 49.4805 53.0002 49.7348 53.0002 50C53.0002 50.2652 52.8949 50.5196 52.7074 50.7071C52.5198 50.8947 52.2655 51 52.0002 51Z" fill="#F6F9FC"/>
                  <path d="M8 47C7.73478 47 7.48043 46.8946 7.29289 46.7071C7.10536 46.5196 7 46.2652 7 46V18C7 17.7348 7.10536 17.4804 7.29289 17.2929C7.48043 17.1054 7.73478 17 8 17C8.26522 17 8.51957 17.1054 8.70711 17.2929C8.89464 17.4804 9 17.7348 9 18V46C9 46.2652 8.89464 46.5196 8.70711 46.7071C8.51957 46.8946 8.26522 47 8 47ZM52 15H12C11.7348 15 11.4804 14.8946 11.2929 14.7071C11.1054 14.5196 11 14.2652 11 14C11 13.7348 11.1054 13.4804 11.2929 13.2929C11.4804 13.1054 11.7348 13 12 13H52C52.2652 13 52.5196 13.1054 52.7071 13.2929C52.8946 13.4804 53 13.7348 53 14C53 14.2652 52.8946 14.5196 52.7071 14.7071C52.5196 14.8946 52.2652 15 52 15ZM56 47C55.7348 47 55.4804 46.8946 55.2929 46.7071C55.1054 46.5196 55 46.2652 55 46V18C55 17.7348 55.1054 17.4804 55.2929 17.2929C55.4804 17.1054 55.7348 17 56 17C56.2652 17 56.5196 17.1054 56.7071 17.2929C56.8946 17.4804 57 17.7348 57 18V46C57 46.2652 56.8946 46.5196 56.7071 46.7071C56.5196 46.8946 56.2652 47 56 47Z" fill="#F6F9FC"/>
                  <path d="M52 51C51.7348 51 51.4804 50.8946 51.2929 50.7071C51.1054 50.5196 51 50.2652 51 50C51 49.7348 51.1054 49.4804 51.2929 49.2929C51.4804 49.1054 51.7348 49 52 49C53.654 49 55 47.654 55 46C55 45.7348 55.1054 45.4804 55.2929 45.2929C55.4804 45.1054 55.7348 45 56 45C56.2652 45 56.5196 45.1054 56.7071 45.2929C56.8946 45.4804 57 45.7348 57 46C57 48.757 54.757 51 52 51ZM12 51C9.243 51 7 48.757 7 46C7 45.7348 7.10536 45.4804 7.29289 45.2929C7.48043 45.1054 7.73478 45 8 45C8.26522 45 8.51957 45.1054 8.70711 45.2929C8.89464 45.4804 9 45.7348 9 46C9 47.654 10.346 49 12 49C12.2652 49 12.5196 49.1054 12.7071 49.2929C12.8946 49.4804 13 49.7348 13 50C13 50.2652 12.8946 50.5196 12.7071 50.7071C12.5196 50.8946 12.2652 51 12 51ZM8 19C7.73478 19 7.48043 18.8946 7.29289 18.7071C7.10536 18.5196 7 18.2652 7 18C7 15.243 9.243 13 12 13C12.2652 13 12.5196 13.1054 12.7071 13.2929C12.8946 13.4804 13 13.7348 13 14C13 14.2652 12.8946 14.5196 12.7071 14.7071C12.5196 14.8946 12.2652 15 12 15C10.346 15 9 16.346 9 18C9 18.2652 8.89464 18.5196 8.70711 18.7071C8.51957 18.8946 8.26522 19 8 19ZM56 19C55.7348 19 55.4804 18.8946 55.2929 18.7071C55.1054 18.5196 55 18.2652 55 18C55 16.346 53.654 15 52 15C51.7348 15 51.4804 14.8946 51.2929 14.7071C51.1054 14.5196 51 14.2652 51 14C51 13.7348 51.1054 13.4804 51.2929 13.2929C51.4804 13.1054 51.7348 13 52 13C54.757 13 57 15.243 57 18C57 18.2652 56.8946 18.5196 56.7071 18.7071C56.5196 18.8946 56.2652 19 56 19Z" fill="#F6F9FC"/>
                </svg>
                <h3 className='font-Montserrat font-bold md:text-2xl mt-1 md:mt-[2.2vh] mb-1 md:mb-[1.4vh]'>E-mail</h3>
                <Link href="mailto: contact@cartymoving.com" className='font-Hind font-medium text-sm md:text-xl'>contact@cartymoving.com</Link>
              </div>
              <div className='flex flex-col'>
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M46.6901 55.27L46.6601 55.3L46.6301 55.34L46.6001 55.38L46.5601 55.42L46.5301 55.46L46.4901 55.49L46.4501 55.53L46.4001 55.57L46.3601 55.61L46.3101 55.64L46.2601 55.68L46.2001 55.72L46.1501 55.76L46.0901 55.8L46.0301 55.83L45.9701 55.87L45.8401 55.95L45.7001 56.02L45.5501 56.1L45.3901 56.17L45.2201 56.24L45.0401 56.32L44.8601 56.39L44.6601 56.46L44.4601 56.53L44.0201 56.67L43.5501 56.8L43.0501 56.93L42.5201 57.05L41.9601 57.16L41.3801 57.27L40.1401 57.47L38.8301 57.64L37.4801 57.77L36.0901 57.88L34.7101 57.95L33.3401 57.99L32.0001 58L30.6601 57.99L29.2901 57.95L27.9101 57.88L26.5201 57.77L25.1701 57.64L23.8601 57.47L22.6201 57.27L22.0401 57.16L21.4801 57.05L20.9501 56.93L20.4501 56.8L19.9801 56.67L19.5401 56.53L19.3401 56.46L19.1401 56.39L18.9601 56.32L18.7801 56.24L18.6101 56.17L18.4501 56.1L18.3001 56.02L18.1601 55.95L18.0301 55.87L17.9701 55.83L17.9101 55.8L17.8501 55.76L17.8001 55.72L17.7401 55.68L17.6901 55.64L17.6401 55.61L17.6001 55.57L17.5501 55.53L17.5101 55.49L17.4701 55.46L17.4401 55.42L17.4001 55.38L17.3701 55.34L17.3401 55.3L17.3101 55.27L17.2801 55.23L17.2601 55.19L17.2301 55.15L17.2101 55.12L17.1901 55.08L17.1801 55.04L17.1601 55L17.1501 54.97L17.1401 54.93L17.1301 54.89V54.86L17.1201 54.82V54.68L17.1301 54.64V54.61L17.1401 54.57L17.1501 54.53L17.1601 54.5L17.1801 54.46L17.1901 54.42L17.2101 54.38L17.2301 54.35L17.2601 54.31L17.2801 54.27L17.3101 54.23L17.3401 54.2L17.3701 54.16L17.4001 54.12L17.4401 54.08L17.4701 54.04L17.5101 54.01L17.5501 53.97L17.6001 53.93L17.6401 53.89L17.6901 53.86L17.7401 53.82L17.8001 53.78L17.8501 53.74L17.9101 53.7L17.9701 53.67L18.0301 53.63L18.1601 53.55L18.3001 53.48L18.4501 53.4L18.6101 53.33L18.7801 53.26L18.9601 53.18L19.1401 53.11L19.3401 53.04L19.5401 52.97L19.9801 52.83L20.4501 52.7L20.9501 52.57L21.4801 52.45L22.0401 52.34L22.6201 52.23L23.8601 52.03L25.1701 51.86L26.5201 51.73L27.9101 51.62L29.2901 51.55L30.6601 51.51L32.0001 51.5L33.3401 51.51L34.7101 51.55L36.0901 51.62L37.4801 51.73L38.8301 51.86L40.1401 52.03L41.3801 52.23L41.9601 52.34L42.5201 52.45L43.0501 52.57L43.5501 52.7L44.0201 52.83L44.4601 52.97L44.6601 53.04L44.8601 53.11L45.0401 53.18L45.2201 53.26L45.3901 53.33L45.5501 53.4L45.7001 53.48L45.8401 53.55L45.9701 53.63L46.0301 53.67L46.0901 53.7L46.1501 53.74L46.2001 53.78L46.2601 53.82L46.3101 53.86L46.3601 53.89L46.4001 53.93L46.4501 53.97L46.4901 54.01L46.5301 54.04L46.5601 54.08L46.6001 54.12L46.6301 54.16L46.6601 54.2L46.6901 54.23L46.7201 54.27L46.7401 54.31L46.7701 54.35L46.7901 54.38L46.8101 54.42L46.8201 54.46L46.8401 54.5L46.8501 54.53L46.8601 54.57L46.8701 54.61V54.64L46.8801 54.68V54.82L46.8701 54.86V54.89L46.8601 54.93L46.8501 54.97L46.8401 55L46.8201 55.04L46.8101 55.08L46.7901 55.12L46.7701 55.15L46.7401 55.19L46.7201 55.23L46.6901 55.27Z" fill="#1E5631"/>
                <path d="M31.9999 6C41.5699 6 49.3299 13.76 49.3299 23.33V23.59L49.3199 23.85L49.3099 24.111L49.2999 24.371L49.2799 24.621L49.2499 24.881L49.2199 25.131L49.1899 25.381L49.1099 25.881L49.0099 26.371L48.8999 26.85L48.7699 27.33L48.6199 27.809L48.4699 28.28L48.2899 28.74L48.1099 29.2L47.9099 29.66L47.6999 30.11L47.4699 30.559L47.2399 31L46.9899 31.45L46.7399 31.88L46.4699 32.32L46.1899 32.75L45.6099 33.6L44.9999 34.45L44.3599 35.28L43.6899 36.11L42.3099 37.75L39.3999 41.01L37.9599 42.66L36.5499 44.33L35.8799 45.18L35.2199 46.04L34.5999 46.91L33.9999 47.79L33.7099 48.24L33.4399 48.69L33.1699 49.15L32.9099 49.61L32.6699 50.08L32.4299 50.54L32.2099 51.019L31.9999 51.5L31.7899 51.02L31.5699 50.541L31.3299 50.081L31.0899 49.611L30.8299 49.151L30.5599 48.691L30.2899 48.241L29.9999 47.79L29.3999 46.91L28.7799 46.04L28.1199 45.18L27.4499 44.33L26.0399 42.66L24.5999 41.01L21.6899 37.75L20.3099 36.11L19.6399 35.28L18.9999 34.45L18.3899 33.6L17.8099 32.75L17.5299 32.32L17.2599 31.88L17.0099 31.45L16.7599 31L16.5299 30.56L16.2999 30.11L16.0899 29.66L15.8899 29.2L15.7099 28.74L15.5299 28.28L15.3799 27.809L15.2299 27.33L15.0999 26.85L14.9899 26.371L14.8899 25.881L14.8099 25.381L14.7799 25.131L14.7499 24.881L14.7199 24.621L14.6999 24.371L14.6899 24.111L14.6799 23.85L14.6699 23.59V23.33C14.6699 13.76 22.4299 6 31.9999 6ZM41.3599 29.73C44.8899 24.559 43.5599 17.509 38.3899 13.969C33.2199 10.44 26.1699 11.769 22.6399 16.94C19.1099 22.11 20.4399 29.16 25.6099 32.69C28.5499 34.7 32.2699 35.21 35.6499 34.059C37.9697 33.2683 39.9722 31.7501 41.3599 29.73Z" fill="#4C9A2A"/>
                <path d="M32.0308 35.651C29.8008 35.651 27.5728 35.058 25.6538 33.906C21.3538 31.325 19.0128 26.265 19.8298 21.315C20.6488 16.351 24.5098 12.313 29.4368 11.266C34.3588 10.222 39.5258 12.337 42.2948 16.534C45.0238 20.67 44.9788 26.197 42.1848 30.289C42.0313 30.4986 41.8023 30.6403 41.5462 30.6842C41.2901 30.728 41.0269 30.6706 40.8124 30.524C40.5979 30.3774 40.4488 30.1531 40.3966 29.8986C40.3444 29.644 40.3933 29.3792 40.5328 29.16C42.8738 25.732 42.9108 21.1 40.6248 17.636C38.3058 14.121 33.9768 12.346 29.8518 13.224C25.7238 14.101 22.4888 17.484 21.8028 21.642C21.1178 25.789 23.0798 30.029 26.6828 32.192C29.2538 33.736 32.4848 34.08 35.3248 33.115C35.5761 33.0296 35.851 33.0475 36.0891 33.1648C36.3272 33.2821 36.5089 33.4892 36.5943 33.7405C36.6797 33.9918 36.6618 34.2667 36.5445 34.5048C36.4272 34.7429 36.2201 34.9246 35.9688 35.01C34.6997 35.4363 33.3696 35.6529 32.0308 35.651ZM32.0238 59.002C32.0228 59.002 32.0228 59.002 32.0238 59.002C29.3518 59.002 26.6568 58.832 24.0138 58.497L23.8798 58.48C19.5718 57.944 17.1998 57.102 16.4158 55.83C16.2573 55.5776 16.1588 55.2922 16.1278 54.9958C16.0968 54.6993 16.1341 54.3997 16.2368 54.12C16.7468 52.689 18.6198 52.17 19.7388 51.859L19.9398 51.803C22.0818 51.196 24.2588 50.946 26.3048 50.742C30.1358 50.361 34.2548 50.4 38.9018 50.862C41.3818 51.108 43.3178 51.5 44.9948 52.096C45.9548 52.437 47.8328 53.102 47.8808 54.717C47.8648 55.321 47.6118 55.707 47.4228 55.951C46.4728 57.177 44.6758 57.582 43.3628 57.878L43.0908 57.94C41.2868 58.355 39.2778 58.636 36.7668 58.824C35.1968 58.942 33.6008 59.002 32.0238 59.002ZM18.1208 54.792C18.1278 54.802 18.6588 55.815 24.1268 56.495L24.2658 56.513C28.3622 57.0308 32.5002 57.1373 36.6178 56.831C39.0258 56.65 40.9398 56.384 42.6428 55.992L42.9238 55.929C43.8828 55.712 45.3318 55.386 45.8418 54.728C45.8378 54.685 45.5798 54.427 44.3838 54.003C42.8038 53.441 41.0188 53.083 38.7038 52.854C34.1898 52.406 30.1998 52.368 26.5018 52.734C24.5448 52.928 22.4688 53.166 20.4848 53.728L20.2718 53.788C18.9518 54.153 18.2278 54.491 18.1208 54.792Z" fill="#F6F9FC"/>
                <path d="M49.333 24.331C49.0678 24.331 48.8134 24.2256 48.6259 24.0381C48.4384 23.8506 48.333 23.5962 48.333 23.331C48.333 14.607 41.243 7.28399 32.529 7.00599C23.802 6.72799 16.253 13.58 15.7 22.277C15.678 22.629 15.666 22.979 15.666 23.331C15.666 23.5962 15.5607 23.8506 15.3731 24.0381C15.1856 24.2256 14.9312 24.331 14.666 24.331C14.4008 24.331 14.1464 24.2256 13.9589 24.0381C13.7714 23.8506 13.666 23.5962 13.666 23.331C13.666 22.936 13.678 22.543 13.704 22.149C14.313 12.578 22.47 4.99799 32.019 4.99799C32.21 4.99799 32.401 5.00099 32.593 5.00799C42.375 5.31999 50.334 13.539 50.334 23.331C50.334 23.4624 50.3081 23.5925 50.2578 23.7139C50.2075 23.8353 50.1337 23.9456 50.0408 24.0384C49.9478 24.1313 49.8374 24.205 49.716 24.2552C49.5946 24.3053 49.4644 24.3311 49.333 24.331Z" fill="#F6F9FC"/>
                <path d="M31.9998 52.498C31.8337 52.4979 31.6701 52.4563 31.524 52.3772C31.3779 52.298 31.2539 52.1837 31.1631 52.0445C31.0722 51.9053 31.0175 51.7458 31.0039 51.5801C30.9902 51.4145 31.018 51.2481 31.0848 51.096C33.0338 46.666 36.2249 43.122 39.3099 39.696C41.8729 36.849 44.5238 33.905 46.3608 30.525C47.6618 28.13 48.3258 25.71 48.3338 23.329C48.3346 23.0643 48.4404 22.8107 48.6278 22.6238C48.8153 22.4369 49.0692 22.332 49.3338 22.332H49.3369C49.4682 22.3324 49.5981 22.3586 49.7193 22.4092C49.8405 22.4599 49.9505 22.5338 50.0431 22.627C50.1357 22.7201 50.209 22.8306 50.2589 22.9521C50.3088 23.0735 50.3342 23.2036 50.3338 23.335C50.3248 26.052 49.5798 28.792 48.1178 31.481C46.1678 35.069 43.4369 38.102 40.7959 41.035C37.6789 44.497 34.7348 47.766 32.9159 51.902C32.8371 52.0792 32.7087 52.2299 32.5461 52.3357C32.3836 52.4415 32.1938 52.4978 31.9998 52.498Z" fill="#F6F9FC"/>
                <path d="M32 52.498C31.8058 52.498 31.6157 52.4415 31.453 52.3353C31.2903 52.2291 31.1621 52.0778 31.084 51.9C29.265 47.764 26.321 44.495 23.204 41.033C20.563 38.1 17.832 35.067 15.882 31.479C14.421 28.791 13.675 26.05 13.666 23.333C13.6656 23.2016 13.6911 23.0715 13.741 22.95C13.7909 22.8286 13.8642 22.7181 13.9568 22.625C14.0494 22.5318 14.1594 22.4578 14.2806 22.4072C14.4017 22.3566 14.5317 22.3303 14.663 22.33H14.666C14.9307 22.33 15.1846 22.4349 15.3721 22.6218C15.5595 22.8087 15.6652 23.0623 15.666 23.327C15.674 25.708 16.337 28.129 17.639 30.523C19.476 33.903 22.127 36.847 24.69 39.694C27.775 43.121 30.966 46.665 32.915 51.094C32.9679 51.2141 32.9965 51.3435 32.9993 51.4747C33.0022 51.606 32.9791 51.7365 32.9314 51.8588C32.8838 51.9811 32.8125 52.0928 32.7217 52.1875C32.6308 52.2823 32.5222 52.3582 32.402 52.411C32.2759 52.4687 32.1387 52.4984 32 52.498Z" fill="#F6F9FC"/>
              </svg>
                <h3 className='font-Montserrat font-bold md:text-2xl mt-1 md:mt-[2.2vh] mb-1 md:mb-[1.4vh] text-nowrap'>Address</h3>
                
                <Link href="https://www.google.com/maps/place/1185+Campbell+Ave+j1,+San+Jose,+CA+95126,+USA/@37.3472832,-121.9281981,17.25z/data=!4m5!3m4!1s0x808fcba0aeedf6eb:0xbf148ffaa85d13a0!8m2!3d37.3469348!4d-121.9298072?entry=ttu" target='_blank' className='font-Hind font-medium text-sm md:text-xl'>1185 Campbell Ave Unit H9,<br/> San Jose, CA 95126</Link>
              </div>
            </div>
          </div>
          <div className='w-1/2 h-full hidden lg:flex justify-center items-center'></div>
        </div>
        <div className='block md:hidden h-20'></div>
          <Image src="/sec_contacte.png" alt="worker" width="592" height="923" unoptimized={true} className='absolute h-[32%] sm:h-2/3 lg:h-[75%] 2xl:h-[81%] w-auto -bottom-[160px] skew-y-[14deg] md:skew-y-[3.5deg] left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-0 lg:right-[10vw] -z-10'/>
      </div>
    </section>
  )
}

export default page
