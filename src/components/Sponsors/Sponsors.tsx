import SpeakerCards from "./speaker_cards"
import SponsorCards from "./sponsor_cards"


export default function Sponsors() {
    return (

      <div className="pt-14 pb-4 h-full pl-8 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-slate-900 via-pink-900 to-black">
        <SpeakerCards/>
        
        <SponsorCards/>

      </div>
  
    )
  }
  
  