'use client'

import Image from "next/image"
import { Row, Col } from "antd"
import useSWR from "swr";
import { useState, useEffect } from "react";
import fetcher from "@/utils/fetcher";
import axios from "axios";
import { useChatStore } from "@/stores/useChatStore";
import { DEFAULT } from "@/constants/defaultElement";

const UserContact = ({message}) => {

    const fetcherWithHeader = async (url,currentId ,accessToken, refreshToken) => {
        console.log('currentId', currentId);
        const res = await axios.get(url, {
            headers: {
              "x-client-id": currentId,
              "x-client-refreshtoken" : refreshToken,
              "x-client-accesstoken" : accessToken,
            },
          },);

          console.log('res', res);
    
        return res.data.metaData;
    }
    
    const {name, img=DEFAULT.AVATAR_IMAGE_PATH, time, username:messageTo, _id:number} = message;

    const selectedUserId = useChatStore((state) => state.selectedUserId);

    console.log('firstselectedUserId', selectedUserId);

    const selectedUser = useChatStore((state) => state.selectedUser);

    const setSelectedUserId = useChatStore((state) => state.setSelectedUserId);
    const storeSelectedUser = useChatStore(state => state.storeSelectedUser)
    const currentMsg = useChatStore(state => state.currentMsg)
    const setStoreMessage = useChatStore(state => state.setStoreMessage)
    const setStoreWhenRecieveMsg = useChatStore(state => state.setStoreWhenRecieveMsg)

    const currentUserInfo = useChatStore(state => state.currentUserInfo);
    
    // const {data} = useSWR(storeSelectedUserId ? `https://jsonplaceholder.typicode.com/users/${storeSelectedUserId}` : null, fetcher)

    const api = `http://localhost:8080/message/${selectedUserId}`;

    const {data, isLoading} = useSWR(selectedUserId ? `http://localhost:8080/getDetail/${selectedUserId}` : null, fetcher)
    const {data: listMessages, isLoading: messageLoading} = useSWR(selectedUserId ? `http://localhost:8080/message/${selectedUserId}` : null, (url) => fetcherWithHeader(url, currentUserInfo._id, currentUserInfo.token, currentUserInfo.refreshToken))
    
    useEffect(() => {
        if(data){
            storeSelectedUser({
                _id: data?.metaData._id,
                name: data?.metaData.name,
                avatar: data?.metaData.avatar
            })
            console.log('listMessages inside useEffect:', listMessages);
            // setStoreMessage(listMessages)
            setStoreWhenRecieveMsg(listMessages)
        }
        
    }, [storeSelectedUser, setStoreWhenRecieveMsg])

    const handleFetchChooseUser = (userId) => {
        // alert(userId)
        setSelectedUserId(userId);
    }

    if(isLoading){
        return <>Loading...</>
    }
    if(messageLoading){
        return <>Loading...</>
    }
  return (
    <div className="pink_border_color w-full h-24 relative my-2 rounded-xl hover:cursor-pointer p-2 z-30 overflow-hidden bg-white" onClick={() => handleFetchChooseUser(number ? number : id)}>
        <Row className="translate-y-3" align="middle" justify="center" gutter={[2]}>
            <Col span={4}>
            <div className="flex items-center rounded-full relative h-fit w-fit bg-purple-300">
            <Image src={img} height={55} width={55} alt="avt" className="rounded-full"/>
            <div className="w-4 h-4 bg-green-600 rounded-full absolute bottom-0 right-0"></div>
        </div>
            </Col>
            <Col span={15}>
            <div className="flex flex-col flex-1">
                <h1 className="text-lg font-bold md:text-base  lg:text-base lg:font-bold ">{name}</h1>
                <div className="truncate_2_lines">
                    <p className="text-xs">Bạn: {messageTo} </p>

                </div>
            </div>
            </Col>
            <Col span={5}>
            <div className="w-full flex flex-col h-12 items-center">
                <div>
                    <p className="text-sm">{time}</p>
                </div>
                {/* <div className="w-5 h-5 lg:w-6 lg:h-6 primary_bg_pink_color text-white rounded-full absolute bottom-0 right-4 text-center flex items-center justify-center">
                    <p className="text-center lg:font-bold font-semibold ">{number}</p>
                </div> */}
            </div>
            </Col>
        </Row>
        
        
    </div>
  )
}

export default UserContact
