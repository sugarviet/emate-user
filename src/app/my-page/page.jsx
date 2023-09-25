import { HOME_PAGE_URL } from "@/constants/url"
import Link from "next/link"

import { LeftOutlined } from "@ant-design/icons"

const ErrorPage = () => {
  return (
    <main className="blur_wrapper_in_page">
            <div className='flex flex-col items-center p-2 mt-5'>
                <div className='flex flex-col items-center'>
                    <h1 className="font-bold text-5xl text-center">Không có kết quả</h1>
                    <div className="w-16 h-1.5 rounded-2xl bg-black my-5"/>
                </div>

                <div className="my-3 flex flex-col items-center">
                    <h1 className="font-bold text-9xl">404</h1>
                    <h2 className='my-4 text-lg'>Không thấy nội dung tìm kiếm. Hãy thử tìm kiếm khác</h2>
                </div>
                <Link href={HOME_PAGE_URL}>
                    <button className="primary_bg_pink_color py-2 px-5 text-white font-bold rounded-xl mb-5">
                       <LeftOutlined /> Về trang chủ</button>
                </Link>
            </div>
        </main>
  )
}

export default ErrorPage
