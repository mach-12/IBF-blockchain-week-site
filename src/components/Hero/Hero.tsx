import logo from "public/IBF_logo.png"
import bg from "public/smthnew.jpg"
import Image from "next/image"
import Timer from "./timer"

export default function Hero() {
  return (
    <div className="mt-24 h-screen">
        <div className="flex w-64 h-32 mx-auto ">
        <Image 
        src={logo}
        alt={"IBF logo"}
        className="object-cover"
        ></Image>
        </div>

        {/* <h1 className="text-5xl text-center font-bold text-red-500 py-0 mt-6 md:text-6xl md:text-blue-600 lg:text-green-600 xl:"> */}
        <h1 className="text-6xl text-center font-bold text-white py-0 mt-6">
        BLOCKCHAIN WEEK 2023
        </h1>

        <h2 className="text-2xl text-yellow-500 text-center font-bold mt-12">APRIL 10TH - 16TH 2023</h2>
        <Timer/>

        <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLScJsoE6l08csb0iW5R55ghrb2iCFWPz1te--0Bv5Xj9Cl8_PQ/viewform?usp=sf_link" className="flex flex-col items-center justify-center mt-16">
          <button className="mt-3 btn btn-primary bg-purple-800 rounded-sm text-2xl px-5 text-white font-semibold tracking-wider">REGISTER</button>
        </a>

        



    </div>
  )
}
