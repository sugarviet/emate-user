"use client"

import styles from './Cart.module.css'
import {Input, Image, Button} from 'antd'
import { CloseOutlined } from '@ant-design/icons'
import { motion as m } from "framer-motion";
import { useEffect, useState } from 'react';

const course_data = [
    {
        thumnail: "/courses/it-4.png", 
        name: "Blockchain và các ứng dụng trên nền tảng này", 
        owner: "Tuấn Võ Phạm",
        price: 400000
    }, 
    {
        thumnail: "/courses/it-2.png", 
        name: "Nâng cao kỹ năng giao tiếp", 
        owner: "Hạ Linh",
        price: 300000
    }
]

const Cart = () => {
    const [selectedCourses, setSelectedCourses] = useState(course_data)
    const [total, setTotal] = useState(0)

    const handlePayment = () => {
        console.log("On payment")
    }

    useEffect(() => {
        const result = selectedCourses.reduce((totalPrice, currentCourse) => totalPrice + currentCourse.price, 0)
    
        setTotal(result)
    }, [selectedCourses])

    return (
        <m.main 
            className='blur_custom py-12 px-16'
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
        >
                <div className='grid grid-cols-2'>
                    <div className='flex flex-col'>
                        <b className='text-lg'>Giỏ hàng của bạn</b>
                        <div className='mt-8'>
                            <div className='grid grid-cols-4 py-4 border-b border-black'>
                                <b className='col-span-2'>2 Sản phẩm</b>
                                <b className='col-span-1 text-center'>Giá</b>
                            </div>
                            <div className='py-4 h-96 overflow-y-scroll'>
                                {selectedCourses.map((course, index) => (
                                    <div key={index} className='grid grid-cols-4 mb-24 flex items-center'>
                                        <div className='col-span-2 flex flex-col relative'>
                                            <Image
                                                src={course.thumnail}
                                                width={224}
                                                height={136}
                                            />
                                            <div className={styles.sub_course}>
                                                <b className='line-clamp-2'>{course.name}</b>
                                                <span className='font-thin text-xs'>{course.owner}</span>
                                            </div>
                                        </div>
                                        <b className='text-center'>đ{course.price}</b>
                                        <Button type='text' icon={<CloseOutlined/>}/>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <Input className='border-black my-4' placeholder='Nhập mã voucher của bạn' prefix={<Image width={32} src='/icons/voucher.png'/>}/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <Image width={240} height={240} src='/images/momo-payment.jpg'/>
                        <span className='font-thin'>Quét để thanh toán</span>
                    </div>
                </div>
                <div className='grid grid-cols-2'>
                    <div className='flex justify-between items-center'>
                        <b>Tổng cộng</b>
                        <b>đ{total}</b>
                    </div>
                    <button onClick={handlePayment} className='text-xl border mx-20 py-4 border-black'>Thanh toán</button>
                </div>
        </m.main>
    )
}

export default Cart;