import Cards from "./cards/cards";

export default function About() {
  return (
    //  bg-gradient-to-t from-cyan-900 via-slate-800 to-black
    <div className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-pink-900 to-slate-900"> 
      <div className="pt-16 p-16 lg:pl-20 xl:pl-32 ">
          <div className="flex-col">
              <h2 className="text-left text-5xl font-semibold xl:w-1/2 lg:w-1/2 text-white">
              The Exclusive Workshop for Web3 Enthusiasts
              </h2>
              <div className="mt-5 mb-5 w-44 h-2 bg-gradient-to-r from-orange-400 to-orange-500 rounded-md"/>
              <p className="leading-8 text-white text-lg xl:w-1/2 xl:text-xl">
              Get a headstart into Blockchain.
              The event features a complete Solidity bootcamp, Talks by Industry Experts, Smart Contract Compedition and Certifications.
              Only 50 students will get be selected to attend this event.
              <br/><br/>
              Explore the latest career developments and chart a course for your future blockchain journey.
              </p>
              
          </div>
      
      </div>
      <Cards></Cards>
    </div>

  )
}

