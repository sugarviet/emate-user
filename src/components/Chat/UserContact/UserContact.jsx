import Image from "next/image"

const UserContact = () => {
  return (
    <div className="border w-full h-24 relative flex items-center gap-3 my-2 rounded-xl">
        <div className="flex items-center rounded-full overflow-hidden">
            <Image src="/character/chauAnhTu.png" height={45} width={45} alt="avt" className="rounded-lg"/>
        </div>
        <div className="flex justify-between items-center gap-5">
            <div>
                <h1>Chau Anh Tu</h1>
                <p className="">Lorem ipsum ...</p>
            </div>
            <div className="flex flex-col gap-2.5 relative justify-end items-end">
                {/* ACTIVE STATUS */}
                <div className="w-3 h-3 bg-green-600 rounded-full float-right"></div>
                {/* ACTIVE STATUS */}

                <p>12:30pm</p>
            </div>
        </div>
    </div>
  )
}

export default UserContact
