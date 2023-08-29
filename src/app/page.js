import EightSection from "@/components/Home/EightSection/EightSection"
import FifthSection from "@/components/Home/FifthSection/FifthSection"
import FirstSection from "@/components/Home/FirstSection/FirstSection"
import FourthSection from "@/components/Home/FourthSection/FourthSection"
import SecondSection from "@/components/Home/SecondSection/SecondSection"
import SeventhSection from "@/components/Home/SeventhSection/SeventhSection"
import SixthSection from "@/components/Home/SixthSection/SixthSection"
import ThirdSection from "@/components/Home/ThirdSection/ThirdSection"

const HomePage = () => {
  return (
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
  )
}

export default HomePage

