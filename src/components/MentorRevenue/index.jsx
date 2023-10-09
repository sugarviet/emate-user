'use client'

import { motion as m } from 'framer-motion';
import { useState } from 'react';
import { Statistic, Row, Col, Modal, Form, Input } from 'antd';
import styles from './MentorRevenue.module.css';
import CountUp from 'react-countup';
import { Line } from "@ant-design/plots";
import { CHART_DATA } from '@/data/mentorChartData';
import { WalletOutlined } from '@ant-design/icons';
import Image from 'next/image';

const formatter = (value) => <CountUp end={value} separator="," className='text-3xl'/>;

const MentorRevenue = () => {
  const [data] = useState(CHART_DATA);
  const [openModal, setOpenModal] = useState(false)

  const showModal = () => {
    setOpenModal(true);
  };
  const handleOk = () => {
    setOpenModal(false);
  };
  const handleCancel = () => {
    setOpenModal(false);
  };

  const config = {
    data,
    padding: "auto",
    xField: "Date",
    yField: "scales",
    xAxis: {
      // type: 'timeCat',
      tickCount: 5,
    },
  };

  return (
    <m.main className="blur_custom" initial={{x: -100, opacity: 0}} animate={{x:0, opacity: 1}} transition={{duration: 0.4}}>
      <div className={styles.container}>
        
        <div className='mb-12'>
            <Row align="middle">
              <Col span={12}>
                <div>
                  <h2 className='font-medium text-xl'>Xin Chào,</h2>
                  <h1 className='font-bold text-3xl'>Quỳnh Nguyễn</h1>
                </div>
              </Col>
              <Col span={12} className='flex justify-end'>
                <div className='bg-white rounded-xl w-80 h-44 border border-white'>
                  <div className='flex items-center border-b-2 py-4 px-2 justify-between'>
                    <div className='flex gap-3 items-center'>
                      <h1 className='text-xl font-medium'>Ví của bạn</h1>
                      <WalletOutlined className='text-2xl'/>
                    </div>
                    <div>
                      <button className='bg-pink-400 rounded-xl px-3 py-2 text-white' onClick={showModal}>Rút tiền</button>

                      <WithdrawModal isModalOpen={openModal} onOk={handleOk} onCancel={handleCancel}/>
                    </div>
                  </div>
                

                  <div className='h-28 flex justify-center items-center'>
                  <Statistic value={200} formatter={formatter}/>
                  <Image src={"/emate-coin.svg"} alt='coin' width={50} height={50}/>
                  </div>

                </div>
              </Col>
            </Row>
        </div>


        <div className='mt-5'>
          <Line {...config} />
        </div>
      </div>
    </m.main>
  )
}

const WithdrawModal = ({isModalOpen, handleCancel, handleOk}) => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  
  return (
    <Modal title="Vui lòng nhập thông tin của bạn" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
   
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
    className='w-full bg-red-200'
      name="phone"
      rules={[
        {
          required: true,
          message: 'Vui lòng nhập số tài khoản của bạn!',
        },
        {
          pattern: /^[0-9]{10}$/, 
          message: 'Số tài khoản phải chứa đúng 10 chữ số và không chứa ký tự khác.',
        },
      ]}
    >
      <Input placeholder='Số tài khoản MoMo của bạn' className='py-2 w-full' style={{width: '100%'}}/>
    </Form.Item>
    <Form.Item
      name="money"
      rules={[
        {
          required: true,
          message: 'Vui lòng nhâp số tiền muốn rút!',
        },
      ]}
    >
      <Input placeholder='Số tiền bạn muốn rút' className='py-2'/>
    </Form.Item>
    <div>
    <button className='py-2 px-5 bg-red-300 rounded-xl mx-auto flex justify-center'>submit</button>

    </div>
  </Form>

    <p className='my-4'>
      <span className='text-red-500 mr-2'>&#42;</span>
      Lưu ý: Tiền của bạn sẽ được chuyển đến trong vòng 48h
    </p>
        

      </Modal>
  )
}

export default MentorRevenue
