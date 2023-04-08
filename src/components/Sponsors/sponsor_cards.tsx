import Image from "next/image"
import FireLogo from "/public/fire.png"

export default function SponsorCards() {

    return (
        <div className="" >

            <h2 className="text-left text-5xl font-semibold w-1/3 text-white">
            Sponsors
            </h2>
            <div className="mt-5 mb-5 w-32 h-2 bg-gradient-to-r from-orange-400 to-orange-500 rounded-md"/>

            <Image width="200" height="200" src={FireLogo} alt="5ire logo"/>

        </div>
    )
}