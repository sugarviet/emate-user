"use client"

import Link from 'next/link';
import Image from 'next/image';

import { QRCode, Row, Col } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';

import { motion as m } from 'framer-motion';

import styles from './RegisterMentorPackage.module.css';

const RegisterMentorPackage = () => {
  return (
    <main className='blur_custom'>
        <m.div className={styles.container} 
        initial={{ opacity: 0, top: -100 }}
        animate={{ opacity: 1, top: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}>
            <Link href="/mentor-package">
                <button><ArrowLeftOutlined /> Quay lại </button>
            </Link>
            <h1 className={styles.main_text}>Đăng kí tài khoản dạy học</h1>

            <div className='my-8'>
                <Row gutter={[16, 16]} align="middle" justify="center">
                    <Col lg={16} sm={24} >
                        <h1 className='text-center text-2xl font-bold my-2'>Thông tin</h1>
                        <div className={styles.card}>
                            <h2 className='text-lg font-semibold'>Đăng kí tài khoản người hướng dẫn</h2>
                            <p>( Gói hàng năm )</p>
                            
                            <div className='flex gap-2 my-5 items-center mr-72 sm:mr-0'>
                                <h3 className='text-2xl'>đ230.000</h3>
                                <p>/</p>
                                <p className='text-gray-400'>tháng</p>
                            </div>

                            <div className='flex gap-4 items-center'>
                                <h2 className='text-xl font-semibold'>Tổng cộng:</h2>
                                <h1 className='font-bold text-2xl'>đ2.760.000</h1>
                                <p>/</p>
                                <p className='text-gray-400'>năm</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={8} sm={24}>
                        <m.div className='flex flex-col gap-2 mt-12 justify-center' whileInView={{scale: 1.1}}>
                            <div className={styles.qr_wrapper}>
                                <QRCode value={'https://www.youtube.com/watch?v=UNuogmk7oEA'} />
                            </div>
                            <p className='font-medium ml-8'>Quét để thanh toán</p>
                        </m.div>
                    </Col>
                </Row>
            </div>

            <button className='border border-black px-36 py-3 flex justify-center items-center mx-auto my-20'>Thanh toán</button>

            {/* Images */}
            <Image src="/images/pinkDot4.png" alt='img' height={130} width={130} className={styles.pink_dot_first} />
            <Image src="/images/pinkDot4.png" alt='img' height={100} width={100} className={styles.pink_dot_second} />
            <Image src="/images/yellowDot1.png" alt='img' height={100} width={100} className={styles.yellow_dot_first} />
        </m.div>
    </main>
  )
}

export default RegisterMentorPackage
