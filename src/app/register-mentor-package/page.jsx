import Link from 'next/link';
import { QRCode, Row, Col } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';

import styles from './RegisterMentorPackage.module.css';

const page = () => {
  return (
    <main className='blur_custom'>
        <div className={styles.container}>
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
                            
                            <div className='flex gap-2 my-5 items-center'>
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
                        <QRCode value={'-'} />
                    </Col>
                </Row>
            </div>

            <button className='border border-black px-36 py-3 flex justify-center items-center mx-auto my-20'>Thanh toán</button>
        </div>
    </main>
  )
}

export default page
