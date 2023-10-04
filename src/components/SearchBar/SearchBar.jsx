"use client"

import { useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation'
import { motion as m } from 'framer-motion';
import { SEARCH_PAGE_URL } from '@/constants/url';

const SearchBar = () => {
  const [searchContent, setSearchContent] = useState("");
  const router = useRouter();

  const handleSetSearchContent = (e) => {
    setSearchContent(e.target.value);
  }

  const handleSubmitSearch = (e) => {
    router.push(`${SEARCH_PAGE_URL}?q=${searchContent}`)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmitSearch(e);
    }
  }

  return (
    <m.div className='hidden w-1/2 border border-black rounded-full py-1.5 px-7 mx-auto mt-2 md:flex gap-3 items-center' initial={{opacity: 0}} animate={{opacity: 1}}>
        <button className='text-xl'><SearchOutlined className='text-lg' onClick={handleSubmitSearch}/></button>
        <input type="search" className='border-none w-full outline-none h-full text-lg' placeholder='Tìm kiếm' value={searchContent} onChange={handleSetSearchContent} onKeyPress={handleKeyPress}/>
       
    </m.div>
  )
}

export default SearchBar
