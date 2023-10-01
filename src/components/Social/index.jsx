"use client";

import InfiniteScroll from "react-infinite-scroll-component";
import { useState } from "react";
import { List, Row, Col } from "antd";
import { motion as m } from "framer-motion";
import styles from "./Social.module.css";
import UserCard from "../public/UserCard";

import Image from "next/image";

const Social = () => {
  const [data, setData] = useState([
    {id: 1, name: 'Châu Anh Tú', img: '/character/chauAnhTu.png', age: 20, major: 'Kinh tế', interest: "Kinh Tế"},
    {id: 2, name: 'Diệu My', img: '/character/dieuMy.png', age: 22, major: 'Kinh tế', interest: "Ngôn ngữ Anh"},
    {id: 3, name: 'Hải Đăng Khánh', img: '/character/haiDangKhanh.png', age: 24, major: 'Thiết kế', interest: "Nấu ăn"},
    {id: 4, name: 'Khoa Anh Lê', img: '/character/khoaAnhLe.png', age: 21, major: 'IT', interest: "Kinh Tế"},
    

]);
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreData = () => {
    if(data.length < 9){
        setTimeout(() => {
            setData((prev) => [...prev, 
              {id: 5, name: 'Quốc Tuấn', img: '/character/quocTuan.png', age: 21, major: 'IT', interest: "Thiết kế"},
              {id: 6, name: 'Quốc Phong', img: '/character/quocPhong.png', age: 21, major: 'Y Sinh', interest: "Thiết kế"},
              {id: 7, name: 'Phạm Linh', img: '/character/phamLinh.png', age: 23, major: 'Marketing', interest: "Thiết kế"},
              {id: 8, name: 'Quốc Tuấn', img: '/character/quocTuan.png', age: 22, major: 'IT', interest: "Thiết kế"},
            ]);
    
        }, 500)
    }else{
        setHasMore(false)
    }
  }
  return (
    <m.main
      className="blur_custom"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
   
        <InfiniteScroll dataLength={data.length} next={fetchMoreData} hasMore={hasMore} loader={<p>Loading...</p>} style={{overflowX: 'hidden '}}>
            <List 
            grid={{
                gutter: 16,
                xxl: 4,
                xl: 4,
                lg: 3,
                md: 2,
                xs: 1
            }}
            dataSource={data}
            renderItem={(user,index) => (
                <UserCard key={user.id} data={user}/>
            )}
            >

            </List>
        </InfiniteScroll>
        


        {/* Images setup */}
        <Image
          src="/images/pinkDot4.png"
          alt="img"
          width={120}
          height={120}
          className={styles.pink_dot_first}
        />
               <Image
          src="/images/pinkDot2.png"
          alt="img"
          width={120}
          height={120}
          className={styles.pink_dot_third}
        />
        <Image
          src="/images/pinkDot4.png"
          alt="img"
          width={120}
          height={120}
          className={styles.pink_dot_second}
          loading="lazy"
          priority={false}
        />
        <Image
          src="/images/yellowDot1.png"
          alt="img"
          width={120}
          height={120}
          className={styles.yellow_dot_first}
          loading="lazy"
          priority={false}
        />



    </m.main>
  );
};

export default Social;
