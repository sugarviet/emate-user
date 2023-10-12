"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import InfiniteScroll from "react-infinite-scroll-component";
import { useState } from "react";
import { List, Row, Col } from "antd";
import { motion as m } from "framer-motion";
import styles from "./Social.module.css";
import UserCard from "../public/UserCard";
import useSWR from "swr";
import fetcher from "@/utils/fetcher";
import urlcat from "urlcat";
import { useChatStore } from "@/stores/useChatStore";
import Image from "next/image";
import { BASE_URL, CHAT_PAGE_URL, GET_ALL_STUDENTS, GET_SOCIALS_BY_FIELDS } from "@/constants/url";

const Social = () => {
  const [socialData, setSocialData] = useState(null);
  const router = useRouter();
  const selectedUser = useChatStore(state => state.selectedUser)
  const setSelectedUserId = useChatStore(state => state.setSelectedUserId)
  const storeSelectedUser = useChatStore(state => state.storeSelectedUser)

  const [data, setData] = useState([
    {id: 1, name: 'Châu Anh Tú', img: '/default-avatar.svg', age: 20, major: 'Kinh tế', interest: "Kinh Tế"},
    {id: 2, name: 'Diệu My', img: '/character/dieuMy.png', age: 22, major: 'Kinh tế', interest: "Ngôn ngữ Anh"},
    {id: 3, name: 'Hải Đăng Khánh', img: '/character/haiDangKhanh.png', age: 24, major: 'Thiết kế', interest: "Nấu ăn"},
    {id: 4, name: 'Khoa Anh Lê', img: '/character/khoaAnhLe.png', age: 21, major: 'IT', interest: "Kinh Tế"},
]);
  const [hasMore, setHasMore] = useState(true);

  const {data:listStudents, isLoading} = useSWR(urlcat(BASE_URL, GET_ALL_STUDENTS), fetcher);

  const handleChangeTab = async() => {
    const data = {
      fieldsOfStudy: [{name: "Information Security", level: 3}]
    }
    const res = await axios.post(urlcat(BASE_URL, GET_SOCIALS_BY_FIELDS), data)

    setSocialData(res.data.metaData)
  }

  const handleBackToAll = () => {
    setSocialData(null)
  }

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

  const handleChatWithUser = (user) => {
    console.log(user);
    setSelectedUserId(user._id)
    storeSelectedUser({
      id: user._id,
      name: "Toan",
    })
    router.push(CHAT_PAGE_URL)
  }

  if(isLoading){
    return <>Loading...</>
  }
  return (
    <m.main
      className="blur_custom"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex gap-3 items-center my-4 ml-16">
        <button className="primary_bg_pink_color rounded-3xl px-9 py-2.5 font-bold" onClick={handleBackToAll}>Tất cả</button>
        <button className="border border-black rounded-3xl px-9 py-2.5 font-bold" onClick={handleChangeTab}>Phù hợp với bạn</button>
      </div>
   
        {/* <InfiniteScroll dataLength={data.length} next={fetchMoreData} hasMore={hasMore} loader={<p>Loading...</p>} style={{overflowX: 'hidden '}}> */}
            <List 
            grid={{
                gutter: 16,
                xxl: 4,
                xl: 4,
                lg: 3,
                md: 2,
                xs: 1
            }}
            dataSource={socialData ? socialData : listStudents?.metaData}
            renderItem={(user,index) => (
                <div key={user._id} onClick={()=> handleChatWithUser(user)} className="hover:cursor-pointer">
                <UserCard key={user._id} data={user}/>
                </div>
            )}
            >

            </List>
        {/* </InfiniteScroll> */}
        

        {/* Images setup */}
    
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
