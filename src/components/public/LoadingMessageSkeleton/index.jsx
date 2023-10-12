"use client"
import { Skeleton } from 'antd';

const LoadingMessageSkeleton = () => {
  return (
    <div 
        className="
          px-4 
          h-full 
          bg-gray-100
          rounded-tr-2xl
          pt-9
        "
      >
       <Skeleton avatar paragraph={{ rows: 2 }} active/>
       <Skeleton avatar paragraph={{ rows: 2 }} active/>

      </div>
  )
}

export default LoadingMessageSkeleton
