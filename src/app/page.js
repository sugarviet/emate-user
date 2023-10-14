import dynamic from "next/dynamic";
import Head from "next/head";
import FirstSection from "@/components/Home/FirstSection/FirstSection";

const SecondSection = dynamic(
  () => import("@/components/Home/SecondSection/SecondSection"),
  {
    ssr: false,
    loading: () => <p>loading...</p>,
  }
);
const ThirdSection = dynamic(
  () => import("@/components/Home/ThirdSection/ThirdSection"),
  {
    ssr: false,
    loading: () => <p>loading...</p>,
  }
);
const FourthSection = dynamic(
  () => import("@/components/Home/FourthSection/FourthSection"),
  {
    ssr: false,
    loading: () => <p>loading...</p>,
  }
);
const FifthSection = dynamic(
  () => import("@/components/Home/FifthSection/FifthSection"),
  {
    ssr: false,
    loading: () => <p>loading...</p>,
  }
);
const SixthSection = dynamic(
  () => import("@/components/Home/SixthSection/SixthSection"),
  {
    ssr: false,
    loading: () => <p>loading...</p>,
  }
);
const SeventhSection = dynamic(
  () => import("@/components/Home/SeventhSection/SeventhSection"),
  {
    ssr: false,
    loading: () => <p>loading...</p>,
  }
);
const EightSection = dynamic(
  () => import("@/components/Home/EightSection/EightSection"),
  {
    ssr: false,
    loading: () => <p>loading...</p>,
  }
);
const BackToTopButton = dynamic(
  () => import("@/components/public/BackToTopButton"),
  {
    ssr: false,
    loading: () => <p>loading...</p>,
  }
);

export const metadata = {
  title: "Emate",
  description: "Emate teaching",
};


const HomePage = () => {

  return (
    <>
      <Head>
      <title>Emate</title>
      <meta name="description" content="Emate teaching"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
    </Head>
      <main className="blur_custom">
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
        <SixthSection />
        <SeventhSection />
        <EightSection />
      </main>

      <BackToTopButton />
    </>
  );
};

export default HomePage;
