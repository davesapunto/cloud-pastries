import Image from 'next/image'
import Link from 'next/link';

export default function Home() {
  return (

    <div className = "w-screen h-[200vh] md:h-[150vh] lg:h-[125vh] xl:h-[100vh] bg-neutral-50 grid py-20 grid-flow-row justify-items-center gap-0"> 
      <div className = "my-10 justify-center items-center box-border h-[44rem] w-96  xl:h-96 xl:w-3/5 shadow-2xl bg-[#F8F5F0]">
        <img 
        className = "w-96 h-96 float-top xl:float-left me-8" 
        src = "https://drive.google.com/uc?export=view?&id=10ryJwfE6SMEisPJ0SBYUd86ROa2E5fS_" 
        alt = "img2">
        </img>
        <div>
          <h1 className = "text-xl xl:text-4xl py-6 px-6 xl:py-10 xl:px-10">
              Brownies
          </h1>
            <p className = "py-10 px-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
              et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
              aliquip ex ea commodo consequat.
            </p>
        </div>
       </div>
      <div className = "justify-center items-center box-border w-96 h-[44rem] xl:h-96 xl:w-3/5 shadow-2xl bg-[#F8F5F0]">
        <img 
        className = "w-96 h-96 float-top xl:float-right" 
        src = "https://drive.google.com/uc?export=view?&id=1mpS0VHSrU1WgqS7vddY11ffLLMfKnuA9" 
        alt = "img2">
        </img>
        <div>
          <h1 className = "text-xl xl:text-4xl py-6 px-6 xl:py-10 ">
              Cookies
          </h1>
            <p className = "py-10 px-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
              et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
              aliquip ex ea commodo consequat.
            </p>
        </div>
       </div>
    </div>
  )
};
