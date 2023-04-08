import Cards from "./cards/cards";

export default function About() {
  return (
    <div className="bg-gradient-to-t from-cyan-900 via-slate-800 to-black"> 
      <div className="pt-12 h-max p-16 lg:pl-20 xl:pl-32 ">
          <div className="flex-col">
              <h2 className="text-left text-5xl font-semibold xl:w-1/2 lg:w-1/2 text-white">
              The Exclusive Workshop for Web3 Enthusiasts
              </h2>
              <div className="mt-9 mb-5 w-44 h-2 bg-gradient-to-r from-orange-400 to-orange-500 rounded-md"/>
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

