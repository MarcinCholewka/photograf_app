import Head from "next/head";
import Navbar from "@/app/components/Navbar";
import Slider from "@/app/components/Slider";
import { Suspense } from "react";
import Spinner from "@/app/components/Spinner";

export default function Home() {
  return (
    <div className="mx-6 bg-white">
      <Head>
        <title>Fotograf Ślubny</title>
        <meta
          name="description"
          content="Profesjonalny fotograf ślubny - Twoje wspomnienia w najlepszym wydaniu."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Suspense fallback={<Spinner />}>
        <Slider />
      </Suspense>
    </div>
  );
}
