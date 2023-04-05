import About from "@/components/About"
import Hero from "@/components/Hero/Hero"
import EventTimeline from "@/components/EventTimeline/EventTimeline"
import Stats from "@/components/Stats"
import Head from "next/head"

export default function Home() {
  return (
    <div data-theme="bwTheme" className="bg-gradient-to-b from-purple-950 p-3">
      <Head>
        <title>Blockchain Week</title>
        <meta name="description" content="Blockchain Week by IBF" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero/>
        <About/> 

        <Stats/> 
        <EventTimeline/>
        
      </main>
    </div>
  )
}
