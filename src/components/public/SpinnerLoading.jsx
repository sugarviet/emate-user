import React from 'react'
import { Spin } from 'antd'

const SpinnerLoading = () => {
  return (
    <div className='my-5'>
        <Spin
          size="large"
          className='mx-auto flex justify-center items-center'
        />
    </div>
  )
}

export default SpinnerLoading
