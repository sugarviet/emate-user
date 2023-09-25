"use client"

const UserBio = () => {
  return (
    <div>
        <div className="flex flex-col gap-3">
            <h2 className="text-gray-400 font-semibold md:text-2xl text-lg">Mentor</h2>
            <h1 className="font-bold text-4xl">Nguyễn Ngọc</h1>
            <h1 className="text-xl font-semibold">Gia sư môn Tiếng Anh</h1>
        </div>

        {/* Show if mentor is recommend by emate */}
        <div className="bg-purple-300 w-fit h-fit py-2 px-3 my-3 rounded-lg">
            <h1 className="font-medium">Đối tác hướng dẫn của Emate</h1>
        </div>

        {/* Mentor's parameter */}
        <div className="flex gap-9 items-center">
            <div>
                <h2 className="text-gray-400 font-semibold text-lg">Số lượng học viên</h2>
                <h1 className="font-bold text-2xl">300,000</h1>
            </div>
            <div>
                <h2 className="text-gray-400 font-semibold text-lg">Reviews</h2>
                <h1 className="font-bold text-2xl">100,000</h1>
            </div>
        </div>

        {/* About me */}
        <div className="mt-5">
            <h1 className="text-2xl font-bold my-4">Về tôi</h1>
            <div>
                 
            </div>
            <p className="my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia debitis possimus sapiente exercitationem sunt aliquam quia fuga neque soluta eveniet laudantium, provident eaque ad. Veniam ad omnis aperiam cumque minima!</p>
            <p className="my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia debitis possimus sapiente exercitationem sunt aliquam quia fuga neque soluta eveniet laudantium, provident eaque ad. Veniam ad omnis aperiam cumque minima!</p>
            <p className="my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia debitis possimus sapiente exercitationem sunt aliquam quia fuga neque soluta eveniet laudantium, provident eaque ad. Veniam ad omnis aperiam cumque minima!</p>

        </div>
    </div>
  )
}

export default UserBio
