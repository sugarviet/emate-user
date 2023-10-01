"use client"

import { useState } from 'react';
import { Row, Col } from 'antd';
import { StarFilled, RightOutlined } from '@ant-design/icons';
import { motion as m } from 'framer-motion';
import { Rate, List } from 'antd';

const Comment = ({comments}) => {
  const [visibleComments, setVisibleComments] = useState(4);


  const loadMore = () => {
    setVisibleComments(visibleComments + 4);
  }

  return (
    <div className='mt-10'>
        <div className='flex gap-2 items-center border-solid border-b-4 border-gray-300 w-fit py-1'>
        <StarFilled className="text-yellow-300 underline text-2xl font-bold"/>
        <h1 className='text-2xl font-bold'>4.7 Đánh giá từ học viên </h1>
        </div>

        <div className='my-10'>
          {/* <Row align="middle" justify="space-between" gutter={[20, 16]}> */}

            <List
            grid={{
              gutter: 40,
             xxl: 2,
             xl: 2,
             lg: 2,
             xs: 1,
             md: 1
            }}
             dataSource={comments.slice(0, visibleComments)}
             renderItem={(comment) => (
                <List.Item>     
                     <CommentItem />
                 </List.Item>
             )}
            >
            </List>
          {/* </Row> */}

          {comments.length === 3 || comments.length === visibleComments ? null : <button className='float-right my-5 underline font-semibold flex gap-2 items-center' onClick={loadMore}>Xem thêm đánh giá <RightOutlined /> </button>}
          
        </div>
    </div>
  )
}

const CommentItem = () =>{
  return (
    <div className='mt-4'>
        <Row gutter={[16, 16]} justify="space-between">
          <Col xxl={4} xs={8} xl={4}>
            <div className='w-16 h-16 bg-slate-800 rounded-full flex justify-center items-center'>
              <h1 className='text-white font-bold'>MT</h1>
            </div>
          </Col>
          <Col xxl={20} xs={16} xl={20}>
            <h1 className='text-2xl font-bold'>Minh Tâm</h1>
            <div className='my-2'>
              <Rate allowHalf value={4.5} />
            </div>
            <p>Gia sư Nguyễn Ngọc là một giảng viên chuyên nghiệp và có kiến thức sâu về ngôn ngữ này. Phương pháp dạy học của cô rất hiệu quả và linh hoạt, giúp mình nắm bắt kiến thức một cách dễ dàng. </p>
          </Col>
        </Row>
    </div>
  )
}

export default Comment
