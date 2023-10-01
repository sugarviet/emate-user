import Image from "next/image"

const Sidebar = () => {
  return (
    <div className="flex flex-col items-center">
        <Image src={'/character/dieuMy.png'} alt="user" height={200} width={200} className="rounded-full"/>
        <h1 className="text-2xl font-bold text-center mt-7">Diệu My</h1>
    </div>
  )
}

export default Sidebar
