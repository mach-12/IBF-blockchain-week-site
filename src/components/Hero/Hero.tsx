import logo from "public/IBF_logo.png"
import Image from "next/image"
import Timer from "./timer"

// bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900 via-slate-800 to-black
export default function Hero() {
  return (
    <div className="pt-20 p-3 h-full  bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-slate-900 via-pink-900 to-black ">
        <div className="flex w-64 h-32 mx-auto ">
        <Image 
        src={logo}
        alt={"IBF logo"}
        className="object-cover scale-75 xl:scale-100 sm:scale-90 lg:scale-95 "
        ></Image>
        </div>

        <h1 className="text-5xl text-center font-extrabold text-white py-0 mt-12
        sm:text-5xl md:text-5xl md:mt-10 md:text-center lg:text-5xl xl:text-7xl ">
        BLOCKCHAIN WEEK <div className="md:block hidden sm:block"/> 2023
        </h1>

          <h2 className="mt-2 text-center mb-4 text-md font-bold text-gray-900 dark:text-white 
          md:text-2xl lg:text-3xl xl:text-4xl sm:text-3xl lg:mt-5">
            Unlock the power of
            <span className="mx-1 text-transparent bg-clip-text
            bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-stone-200 via-red-300 to-lime-200
            lg:mx-2 sm:mx-3">
              Web3
            </span>
            </h2>
    
        <div className="mt-24">
          <h2 className="text-2xl text-transparent bg-clip-text
            bg-gradient-to-b from-orange-500 to-yellow-300
            text-center font-bold sm:text-md md:text-md lg:text-3xl xl:text-4xl">APRIL 10TH - 16TH 2023</h2>
          <Timer/>
        </div>

        <div className="flex items-center justify-center py-20">
            <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLScJsoE6l08csb0iW5R55ghrb2iCFWPz1te--0Bv5Xj9Cl8_PQ/viewform?usp=sf_link" className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
              <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
              <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
              <span className="relative text-white tracking-widest text-3xl">REGISTER</span>
              </span>
            </a>
        </div>
       
            


    </div>
  )
}
