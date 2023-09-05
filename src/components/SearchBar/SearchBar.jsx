"use client"

import { SearchOutlined } from '@ant-design/icons';

import { motion as m } from 'framer-motion';

const SearchBar = () => {
  return (
    <m.div className='hidden w-1/2 border border-black rounded-full py-1.5 px-7 mx-auto mt-2 md:flex gap-3 items-center' initial={{opacity: 0}} animate={{opacity: 1}}>
        <button className='text-xl'><SearchOutlined className='text-lg'/></button>
        <input type="search" className='border-none w-full outline-none h-full text-lg' placeholder='Tìm kiếm'/>
       
    </m.div>
  )
}

export default SearchBar
