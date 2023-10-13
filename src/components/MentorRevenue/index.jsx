'use client'

import { motion as m } from 'framer-motion';
import { useState } from 'react';
import { Statistic, Row, Col, Modal, Form, Input } from 'antd';
import styles from './MentorRevenue.module.css';
import CountUp from 'react-countup';
import { CHART_DATA } from '@/data/mentorChartData';
import { WalletOutlined } from '@ant-design/icons';
import Image from 'next/image';
import { useStoreCurrentUserDetail } from "@/stores/useStoreCurrentUserDetail";
import axios from 'axios';
import urlcat from 'urlcat';
import { BASE_URL, REQUEST_UPDATE_WALLET } from '@/constants/url';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const formatter = (value) => <CountUp end={value} separator="," className='text-3xl'/>;

const MentorRevenue = () => {
  const userDetail = useStoreCurrentUserDetail((state) => state.userDetail);
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

  return (
    <m.main className="blur_custom" initial={{x: -100, opacity: 0}} animate={{x:0, opacity: 1}} transition={{duration: 0.4}}>
      <div className={styles.container}>
        
        <div className='mb-12'>
            <Row align="middle">
              <Col span={12}>
                <div>
                  <h2 className='font-medium text-xl'>Xin Chào,</h2>
                  <h1 className='font-bold text-3xl'>{userDetail.name}</h1>
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
                      <button className='primary_bg_pink_color rounded-xl px-3 py-2 text-white' onClick={showModal}>Rút tiền</button>

                      <WithdrawModal isModalOpen={openModal} onOk={handleOk} onCancel={handleCancel} setOpenModal={setOpenModal}/>
                    </div>
                  </div>
                

                  <div className='h-28 flex justify-center items-center'>
                  <Statistic value={userDetail.wallet} formatter={formatter}/>
                  <Image src={"/emate-coin.svg"} alt='coin' width={50} height={50}/>
                  </div>

                </div>
              </Col>
            </Row>
        </div>


        <div className='mt-5'>
          {/* <Line {...config} /> */}
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="Date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="scales" name="Revenue" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </m.main>
  )
}

const WithdrawModal = ({isModalOpen, setOpenModal}) => {
  const userDetail = useStoreCurrentUserDetail((state) => state.userDetail);
  const handleWithDraw = async(data) => {
    const code = `${userDetail.email}_${userDetail.phone}_${data.money}`

    console.log({code: code,
      type : "Withdraw",
      money: data.money});

    const res = await axios.post(urlcat(BASE_URL, REQUEST_UPDATE_WALLET), {
      code: code,
      type : "Withdraw",
      money: data.money
    })
  }

  const handleOk = () => {
    setOpenModal(false);
  };
  const handleCancel = () => {
    setOpenModal(false);
  };
  const onFinish = (values) => {
    console.log('Success:', values);
    handleWithDraw(values)
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  
  return (
    <Modal title="Vui lòng nhập thông tin của bạn" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null}>
        <Form
    name="basic"
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
    className='w-full bg'
      name="phone"
      rules={[
        {
          required: true,
          message: 'Vui lòng nhập số tài khoản MoMo của bạn!',
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
    <button className='py-2 px-5 primary_bg_pink_color rounded-xl mx-auto flex justify-center text-white font-bold'>submit</button>

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
