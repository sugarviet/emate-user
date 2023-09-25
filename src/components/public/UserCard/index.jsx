import Image from "next/image"

const UserCard = () => {
  return (
    <div className="w-full mt-10">
        <div className="w-full mx-auto flex justify-center items-center">
            <Image alt="User" src="/character/nguyenNhi.png" height={250} width={250}/>
        </div>

        <div className="flex flex-col px-16 mt-4">
            <div className="flex justify-between items-center">
                <h1 className="font-bold text-xl">Nguyễn Nhi</h1>
                <h2>21 tuổi</h2>
            </div>

            <div className="flex justify-between items-center my-1">
                <h1 className="font-bold text-base">Chuyên ngành:</h1>
                <h2>Kinh tế</h2>
            </div>

            <div className="flex justify-between items-center my-1">
                <h1 className="font-bold text-base">Muốn học:</h1>
                <h2>Kinh tế</h2>
            </div>

            <div>
                <p>Xin chào! Mình là sinh viên đại học và đang tìm kiếm một bạn học để cùng nhau học tập online. Mình mong muốn tìm kiếm bạn có cùng sở thích và cùng chí hướng học tập.</p>
            </div>
        </div>
    </div>
  )
}

export default UserCard
