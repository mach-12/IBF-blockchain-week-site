import Image from "next/image"
import VimalKumar from "/public/speakers/VimalKumar.jpg" 
import ArshG from "/public/speakers/ArishmitGhosh.png"
import Venkatesh from "/public/speakers/Venkatesh.jpg"
import Loveneesh from "/public/speakers/LoveneeshDhir.jpg"
import Zeel from "/public/speakers/ZeelPatel.png"
import Anmol from "/public/speakers/AnmolArora.png"
import Himanshu from "/public/speakers/Himanshu.png"
import Satyarth from "/public/speakers/Satyarth.jpg"
import Prakash from "/public/speakers/Prakash.jpg"


const copy_link = () => {
  navigator.clipboard.writeText("vimal.kumar@bennett.edu.in")
}

export default function SpeakerCards() {

    return (
  <div>
    <h2 className="text-left text-5xl font-semibold w-1/3 text-white">
    Speakers
    </h2>
    <div className="mt-5 mb-5 w-32 h-2 bg-gradient-to-r from-orange-400 to-orange-500 rounded-md"/>

    <div className="flex flex-wrap justify-center p-4">
      {/* Dr. Vimal */}
        <div className="max-w-xs rounded-xl overflow-hidden shadow-lg m-4 bg-slate-900">
          <Image className="w-3/4 rounded-full mx-auto mt-4" src={VimalKumar} alt="Dr. Vimal Kumar" />
          <div className="px-6 py-4 text-center">
            <h2 className="font-bold text-xl mb-2 text-white">Dr. Vimal Kumar </h2>
            <p className="text-gray-400 text-base">Assistant Professor @BU Blockchain Spl. Chair</p>
          </div>
          <div className="px-6 pt-4 pb-5 flex justify-around">
            <a rel="noopener noreferrer" href="https://www.linkedin.com/in/vimalbaghel" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white hover:text-pink-400" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                <path d="M8 11l0 5"></path>
                <path d="M8 8l0 .01"></path>
                <path d="M12 16l0 -5"></path>
                <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
              </svg>
            </a>
            <div data-tip="vimal.kumar@bennett.edu.in" className="tooltip tooltip-top" onClick={ copy_link }>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white hover:text-pink-400" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                <path d="M3 7l9 6l9 -6"></path>
              </svg>
            </div>
            
            <a href="https://www.bennett.edu.in/faculties/dr-vimal-kumar/">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white hover:text-pink-400" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M19.5 7a9 9 0 0 0 -7.5 -4a8.991 8.991 0 0 0 -7.484 4"></path>
                <path d="M11.5 3a16.989 16.989 0 0 0 -1.826 4"></path>
                <path d="M12.5 3a16.989 16.989 0 0 1 1.828 4"></path>
                <path d="M19.5 17a9 9 0 0 1 -7.5 4a8.991 8.991 0 0 1 -7.484 -4"></path>
                <path d="M11.5 21a16.989 16.989 0 0 1 -1.826 -4"></path>
                <path d="M12.5 21a16.989 16.989 0 0 0 1.828 -4"></path>
                <path d="M2 10l1 4l1.5 -4l1.5 4l1 -4"></path>
                <path d="M17 10l1 4l1.5 -4l1.5 4l1 -4"></path>
                <path d="M9.5 10l1 4l1.5 -4l1.5 4l1 -4"></path>
              </svg>
            </a>
          </div>
        </div>
        
        {/* Arishmit Ghosh */}
        <div className="max-w-xs rounded-xl overflow-hidden shadow-lg m-4 bg-gray-900">
          <Image className="w-3/4 rounded-full mx-auto mt-4" src={ArshG} alt="Arishmit Ghosh" />
          <div className="px-6 py-4 text-center">
            <h2 className="font-bold text-xl mb-2 text-white">Arishmit Ghosh </h2>
            <p className="text-gray-400 text-base"> Blockchain Developer @ Komet</p>
          </div>
          <div className="px-6 pt-4 pb-5 flex justify-around">
            <a rel="noopener noreferrer" href="https://www.linkedin.com/in/arishmit" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white hover:text-pink-400" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                <path d="M8 11l0 5"></path>
                <path d="M8 8l0 .01"></path>
                <path d="M12 16l0 -5"></path>
                <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
              </svg>
            </a>
    
            <a rel="noopener noreferrer" href="https://github.com/ari4325" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white hover:text-pink-400" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
              </svg>
            </a>
            <a href="https://twitter.com/ArishmitG">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white hover:text-pink-400"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z"></path>
            </svg>
            </a>
          </div>
        </div>
        
        {/* Lovneesh Dhir */}
        <div className="max-w-xs rounded-xl overflow-hidden shadow-lg m-4 bg-gray-900">
          <Image className="w-3/4 rounded-full mx-auto mt-4" src={Loveneesh} alt="Lovneesh Dhir" />
          <div className="px-6 py-4 text-center">
            <h2 className="font-bold text-xl mb-2 text-white">Lovneesh Dhir </h2>
            <p className="text-gray-400 text-base">Committer @ Shardeum</p>
          </div>
          <div className="px-6 pt-4 pb-5 flex justify-around">
            <a rel="noopener noreferrer" href="https://www.linkedin.com/in/loveneeshdhir/" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white hover:text-pink-400" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                <path d="M8 11l0 5"></path>
                <path d="M8 8l0 .01"></path>
                <path d="M12 16l0 -5"></path>
                <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
              </svg>
            </a>
    
            <a rel="noopener noreferrer" href="https://github.com/loveneeshdhir" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white hover:text-pink-400" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
              </svg>
            </a>

            <a href="https://twitter.com/LoveneeshDhir">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white hover:text-pink-400"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z"></path>
            </svg>
            </a>
          </div>
        </div>

        {/* Zeel Patel */}
        <div className="max-w-xs rounded-xl overflow-hidden shadow-lg m-4 bg-gray-900">
          <Image className="w-3/4 rounded-full mx-auto mt-4" src={Zeel} alt="Zeel Patel" />
          <div className="px-6 py-4 text-center">
            <h2 className="font-bold text-xl mb-2 text-white">Zeel Patel </h2>
            <p className="text-gray-400 text-base">Blockchain Developer QA LEAD @ Layer3</p>
          </div>
          
          <div className="px-6 pt-4 pb-5 flex justify-around">
            <a rel="noopener noreferrer" href="https://www.linkedin.com/in/zeel15/" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white hover:text-pink-400" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                <path d="M8 11l0 5"></path>
                <path d="M8 8l0 .01"></path>
                <path d="M12 16l0 -5"></path>
                <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
              </svg>
            </a>
    
            <a rel="noopener noreferrer" href="https://twitter.com/patelzeel68" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white hover:text-pink-400" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
              </svg>
            </a>
            <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white hover:text-pink-400"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z"></path>
            </svg>
            </a>
          </div>
        </div>
        
            {/* B Venkatesh */}
            <div className="max-w-xs rounded-xl overflow-hidden shadow-lg m-4 bg-gray-900 ">
          <Image className="w-3/4 rounded-full mx-auto mt-4" src={Venkatesh} alt="B Venkatesh" />
          <div className="px-6 py-4 text-center">
            <h2 className="font-bold text-xl mb-2 text-white">B Venkatesh </h2>
            <p className="text-gray-400 text-base">TECHLEAD @ 5ire HUB</p>
          </div>
          <div className="px-6 pt-4 pb-5 flex justify-around">
            <a rel="noopener noreferrer" href="https://www.linkedin.com/in/b-venkatesh-b0b839121" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white hover:text-pink-400" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                <path d="M8 11l0 5"></path>
                <path d="M8 8l0 .01"></path>
                <path d="M12 16l0 -5"></path>
                <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
              </svg>
            </a>
    
            <a rel="noopener noreferrer" href="#" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white hover:text-pink-400" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
              </svg>
            </a>
            <a href="https://twitter.com/_venmus">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white hover:text-pink-400"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z"></path>
            </svg>
            </a>
          </div>
        </div>
        
        {/* Anmol Arora */}
        <div className="max-w-xs rounded-xl overflow-hidden shadow-lg m-4 bg-gray-900">
          <Image className="w-3/4 rounded-full mx-auto mt-4" src={Anmol} alt="Anmol " />
          <div className="px-6 py-4 text-center">
            <h2 className="font-bold text-xl mb-2 text-white">Anmol Arora</h2>
            <p className="text-gray-400 text-base">DevRel / Lead @ Polygon-Flipkart Blockchain Center Of Excellence</p>
          </div>

          <div className="px-6 pb-5 flex flex-grow justify-around">
            <a rel="noopener noreferrer" href="https://www.linkedin.com/in/0xanmol" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white hover:text-pink-400" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                <path d="M8 11l0 5"></path>
                <path d="M8 8l0 .01"></path>
                <path d="M12 16l0 -5"></path>
                <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
              </svg>
            </a>
    
            <a rel="noopener noreferrer" href="https://github.com/ANMOLCODES" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white hover:text-pink-400" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
              </svg>
            </a>

            <a href="">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white hover:text-pink-400"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z"></path>
            </svg>
            </a>

            <a href="https://anmolarora.netlify.app/">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white hover:text-pink-400" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M19.5 7a9 9 0 0 0 -7.5 -4a8.991 8.991 0 0 0 -7.484 4"></path>
                <path d="M11.5 3a16.989 16.989 0 0 0 -1.826 4"></path>
                <path d="M12.5 3a16.989 16.989 0 0 1 1.828 4"></path>
                <path d="M19.5 17a9 9 0 0 1 -7.5 4a8.991 8.991 0 0 1 -7.484 -4"></path>
                <path d="M11.5 21a16.989 16.989 0 0 1 -1.826 -4"></path>
                <path d="M12.5 21a16.989 16.989 0 0 0 1.828 -4"></path>
                <path d="M2 10l1 4l1.5 -4l1.5 4l1 -4"></path>
                <path d="M17 10l1 4l1.5 -4l1.5 4l1 -4"></path>
                <path d="M9.5 10l1 4l1.5 -4l1.5 4l1 -4"></path>
              </svg>
            </a>

          </div>
        </div>

        {/* Himanshu*/}
        <div className="max-w-xs rounded-xl overflow-hidden shadow-lg m-4 bg-gray-900">
          <Image className="w-3/4 rounded-full mx-auto mt-4" src={Himanshu} alt="Anmol Arora" />
          <div className="px-6 py-4 text-center">
            <h2 className="font-bold text-xl mb-2 text-white"> Himanshu Raj </h2>
            <p className="text-gray-400 text-base">DevRel Manager @ 5ireChain</p>
          </div>

          <div className="px-6 pb-5 flex flex-grow justify-around">
            <a rel="noopener noreferrer" href="https://www.linkedin.com/in/himanshu-link/" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white hover:text-pink-400" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                <path d="M8 11l0 5"></path>
                <path d="M8 8l0 .01"></path>
                <path d="M12 16l0 -5"></path>
                <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
              </svg>
            </a>
    
            <a rel="noopener noreferrer" href="https://github.com/himanshu211raj" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white hover:text-pink-400" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
              </svg>
            </a>

            <a href="https://twitter.com/himanstwt">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white hover:text-pink-400"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z"></path>
            </svg>
            </a>

          </div>
        </div>


        {/* Prakarsh Pathak */}
        <div className="max-w-xs rounded-xl overflow-hidden shadow-lg m-4 bg-gray-900">
          <Image className="w-3/4 rounded-full mx-auto mt-4" src={Prakash} alt="Anmol " />
          <div className="px-6 py-4 text-center">
            <h2 className="font-bold text-xl mb-2 text-white">Prakarsh Pathak</h2>
            <p className="text-gray-400 text-base">Developer Advocate @ Spheron</p>
          </div>

          <div className="px-6 pb-5 flex flex-grow justify-around">
            <a rel="noopener noreferrer" href="https://www.linkedin.com/in/prakarshpathak/" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white hover:text-pink-400" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                <path d="M8 11l0 5"></path>
                <path d="M8 8l0 .01"></path>
                <path d="M12 16l0 -5"></path>
                <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
              </svg>
            </a>

            <a href="https://twitter.com/blockchainbalak">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white hover:text-pink-400"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z"></path>
            </svg>
            </a>

          </div>
        </div>

        {/* Kumar Satyarth */}
        <div className="max-w-xs rounded-xl overflow-hidden shadow-lg m-4 bg-gray-900">
          <Image className="w-3/4 rounded-full mx-auto mt-4" src={Satyarth} alt="Anmol " />
          <div className="px-6 py-4 text-center">
            <h2 className="font-bold text-xl mb-2 text-white">Kumar Satyarth</h2>
            <p className="text-gray-400 text-base">Smart Contract Developer @ Timeswap</p>
          </div>

          <div className="px-6 pb-5 flex flex-grow justify-around">
            <a rel="noopener noreferrer" href="https://www.linkedin.com/in/ksatyarth2/" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white hover:text-pink-400" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                <path d="M8 11l0 5"></path>
                <path d="M8 8l0 .01"></path>
                <path d="M12 16l0 -5"></path>
                <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
              </svg>
            </a>

            <a href="https://twitter.com/ksatyarth2">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white hover:text-pink-400"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z"></path>
            </svg>
            </a>

          </div>
        </div>

      
    </div>


  </div>

    )
}

