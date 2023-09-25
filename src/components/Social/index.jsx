"use client";

import InfiniteScroll from "react-infinite-scroll-component";
import { useState } from "react";
import { List, Row, Col } from "antd";
import { motion as m } from "framer-motion";
import styles from "./Social.module.css";
import UserCard from "../public/UserCard";

const Social = () => {
  const [data, setData] = useState([
    {id: 1, name: 'John'},
    {id: 2, name: 'John'},
    {id: 3, name: 'John'},
    {id: 4, name: 'John'},
    

]);
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreData = () => {
    if(data.length < 12){
        setTimeout(() => {
            setData((prev) => [...prev, 
            {id: 5, name: 'John'},
            {id: 6, name: 'John'},
            {id: 7, name: 'John'},
            {id: 8, name: 'John'},
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
   
        <InfiniteScroll dataLength={data.length} next={fetchMoreData} hasMore={hasMore} loader={<p>Loading...</p>} endMessage={<p>Het r</p>} style={{overflowX: 'hidden'}}>
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
                <UserCard key={user.id}/>
            )}
            >

            </List>
        </InfiniteScroll>
      {/* </div> */}

    </m.main>
  );
};

export default Social;
