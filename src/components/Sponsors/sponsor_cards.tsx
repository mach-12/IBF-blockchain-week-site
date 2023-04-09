import Image from "next/image"
import FireLogo from "public/sponsors/fire.png"
import ShardeumLogo from "public/sponsors/shardeum.png"
import SpheronLogo from "public/sponsors/spheron.png"


export default function SponsorCards() {

    return (
        <div className="pt-3" >

            <h2 className="text-left text-5xl font-semibold w-1/3 text-white">
            Sponsors
            </h2>
            <div className="mt-5 mb-5 w-32 h-2 bg-gradient-to-r from-orange-400 to-orange-500 rounded-md"/>


            <section className="md:grid grid-cols-3 ">
                <a href="https://www.5ire.org/" target="_blank" rel="noopener noreferrer">
                    <Image
                    className="w-56 my-5 md:mx-auto transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 "
                    src={FireLogo}
                    alt="5ire Logo"
                    />
                </a>
                <a href="https://shardeum.org/" target="_blank" rel="noopener noreferrer">
                    <Image
                    className="w-56 my-5 md:mx-auto transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                    src={ShardeumLogo}
                    alt="Shardeum Logo"
                    />
                </a>
                <a href="https://spheron.network/" target="_blank" rel="noopener noreferrer">
                    <Image
                    className="w-56 my-5 md:mx-auto transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                    src={SpheronLogo}
                    alt="Spheron Logo"
                    />
                </a>
            </section>
        </div>
    )
}