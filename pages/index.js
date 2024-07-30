import { Hero } from "@/sections"
import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        <title>QuantumTech IT Solution</title>
      </Head>
      <div className="px-2">
      <Hero />
      </div>
    </>
  )
}
