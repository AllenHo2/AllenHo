import Hero from "./components/Hero"
import Head from "next/head"

export default function Home() {
  return (
    <div>
      {/* TODO: Work on what the head does */}
      <Head>
        <title>Allen&apos;s Portfolio</title>
      </Head>
      <Hero/>
    </div>
  );
}
