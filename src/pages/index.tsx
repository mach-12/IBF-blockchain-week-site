import About from "@/components/About"
import Hero from "@/components/Hero/Hero"
import EventTimeline from "@/components/EventTimeline"
import Sponsors from "@/components/Sponsors/Sponsors"
import Head from "next/head"


export default function Home() {
  return (
    <div data-theme="bwTheme" className="">
      <Head>
        <title>Blockchain Week</title>
        <meta name="description" content="Blockchain Week by IBF" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <Hero/>
        <About/> 
        <EventTimeline/>
        <Sponsors/>
        
      </main>
    </div>
  )
}
