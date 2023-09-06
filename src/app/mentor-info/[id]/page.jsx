import MentorInfo from "@/components/MentorInfo/MentorInfo"

export const metadata = {
  title: "Emate - Mentor's Information",
  description: "Emate teaching",
};

const MentorDetailInfoPage = ({params}) => {
  
  return (
    <div>
        <MentorInfo />
    </div>
  )
}

export default MentorDetailInfoPage
