import Image from "next/image";
import IBFLogo from "/public/IBF_logo.png";
import Solidity from "/public/s.png"
import Dapp from "/public/yes.gif"
import Battle from "/public/battle.png"
export default function Cards() {
  return (
    <div className='flex flex-wrap justify-center pt-6'>
      <div className="card w-full md:w-1/6 bg-base-100 shadow-xl ml-60 mx-2">
        <div className="card-body">
          <h2 className="card-title">Learn Solidity and smart contracts!!</h2>
        </div>
        <figure>
          <Image
            src={Solidity}
            alt={"IBF logo"}
            width={256}
            height={256}
          />
        </figure>
      </div>
      <div className="card w-full md:w-1/6 bg-base-100 shadow-xl mx-2 my-4">
        <div className="card-body">
        <h2 className="card-title"> Learn to make Dapps!</h2>
          
        </div>
        <figure>
          <Image
            src={Dapp}
            alt={"Socks"}
            width={800}
            height={424}
          />
        </figure>
      </div>
      <div className="card w-full md:w-1/6 bg-base-100 shadow-xl mr-60 mx-2 my-4">
        <div className="card-body">
          <h2 className="card-title">Industry experts!</h2>
        </div>
        <figure>
          <Image
            src={IBFLogo}
            alt={"Hat"}
            width={512}
            height={512}
          />
        </figure>
      </div>
      <div className="card w-full md:w-1/6 bg-base-100 shadow-xl mx-2 my-4">
        <div className="card-body">
          <h2 className="card-title">Only 50 seats&#128337;!</h2>
        </div>
        <figure>
          <Image
            src={IBFLogo}
            alt={"Gloves"}
            width={512}
            height={512}
          />
        </figure>
      </div>
      <div className="card w-full md:w-1/6 bg-base-100 shadow-xl mx-2 my-4">
        <div className="card-body">
          <h2 className="card-title">Smart contract Hackathon!</h2>
        </div>
        <figure>
          <Image
            src={Battle}
            alt={"Scarf"}
            width={512}
            height={512}
          />
        </figure>
      </div>
      <div className="card w-full md:w-1/6 bg-base-100 shadow-xl mx-2 my-4">
        <div className="card-body">
          <h2 className="card-title">Swags and goodies!!</h2>
        </div>
        <figure>
          <Image
            src="https://www.shutterstock.com/image-illustration/tshirt-3d-rendering-mockup-design-260nw-1921304279.jpg"
            alt={"Boots"}
            width={512}
            height={512}
          />
        </figure>
      </div>
    </div>
  );
}
