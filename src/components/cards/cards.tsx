import Image from "next/image";
import Merch from "/public/merch.png";
import Solidity from "/public/solidity.png"
import Battle from "/public/battle.png"
import Dapp from "/public/yes.gif"
import Fifty from "/public/Fifty.png"
import Industry from "/public/industry.png"

export default function Cards() {
  return (
<div className="container mx-auto px-4 md:px-12">
  <div className="flex flex-wrap -mx-1 lg:-mx-4">

    <div className="my-8 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 transition-transform duration-300 hover:scale-105">
      <article className="overflow-hidden rounded-lg shadow-lg">

          <Image
            alt="Solidity Programming"
            className="block h-auto w-full "
            src={Solidity}
          />
       
        <header className="flex bg-white items-center justify-between leading-tight p-2 md:p-4">
          <h3 className="text-2xl no-underline font-semibold text-black mx-auto">
              Solidity Bootcamp
          </h3>
        </header>
      </article>
    </div>


    <div className="my-8 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 transition-transform duration-300 hover:scale-105">
      <article className="overflow-hidden rounded-lg shadow-lg">

          <Image
            alt="Placeholder"
            className="block h-auto w-full"
            src={Fifty}
          />
       
        <header className="flex bg-white items-center justify-between leading-tight p-2 md:p-4">
          <h3 className="text-2xl no-underline font-semibold text-black mx-auto">
              Limited
          </h3>
        </header>
      </article>
    </div>

    <div className="my-8 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 transition-transform duration-300 hover:scale-105">
      <article className="overflow-hidden rounded-lg shadow-lg">

          <Image
            alt="Merch Swags and Hoodies"
            className="block h-auto w-full "
            src={Merch}
          />
       
        <header className="flex bg-white items-center justify-between leading-tight p-2 md:p-4">
          <h3 className="text-2xl no-underline font-semibold text-black mx-auto">
              Swags and Goodies 
          </h3>
        </header>
      </article>
    </div>

    <div className="my-8 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 transition-transform duration-300 hover:scale-105">
      <article className="overflow-hidden rounded-lg shadow-lg">

          <Image
            alt="Placeholder"
            className="block h-auto w-full"
            src={Battle}
          />
       
        <header className="flex bg-white items-center justify-between leading-tight p-2 md:p-4">
          <h3 className="text-2xl no-underline font-semibold text-black mx-auto">
              Smart Contract Battle
          </h3>
        </header>
      </article>
    </div>

    <div className="my-8 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 transition-transform duration-300 hover:scale-105">
      <article className="overflow-hidden rounded-lg shadow-lg">

          <Image
            alt="Placeholder"
            className="block h-auto w-full"
            src={Industry}
          />
       
        <header className="flex bg-white items-center justify-between leading-tight p-2 md:p-4">
          <h3 className="text-2xl no-underline font-semibold text-black mx-auto">
              Meet Companies
          </h3>
        </header>
      </article>
    </div>

    <div className="my-8 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 transition-transform duration-300 hover:scale-105">
      <article className="overflow-hidden rounded-lg shadow-lg">
          <Image
            alt="Dapp"
            className="block h-auto w-full"
            src={Dapp}
          />
       
        <header className="flex bg-white items-center justify-between leading-tight p-2 md:p-4">
          <h3 className="text-2xl no-underline font-semibold text-black mx-auto">
              Learn how to build Dapps
          </h3>
        </header>
      </article>
    </div>

  </div>
</div>



  );
}



