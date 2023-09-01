
import FirstSection from "@/components/TeachWithEmate/FirstSection/FirstSection"
import SecondSection from "@/components/TeachWithEmate/SecondSection/SecondSection"
import BackToTopButton from "@/components/public/BackToTopButton"

export const metadata = {
  title: 'Teach With Emate',
  description: 'Emate teaching',
}

const TeachWithEmatePage = () => {
  return (
    <div>
      <main className="blur_custom">
          <FirstSection />
          <SecondSection />
      </main>

      <BackToTopButton />
    </div>
  )
}

export default TeachWithEmatePage
