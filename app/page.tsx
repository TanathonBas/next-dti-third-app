import React from 'react'
import money from './images/money.png'
import Image from 'next/image'
import MoneyShare from '@/compoents/MoneyShare'

export default function Homepage() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <div className="shadow-xl rounded-2xl p-8 w-full max-w-xl ">
        <h1 className='text-3xl font-bold text-center text-blue-600'>
          Money Share Calculator
        </h1>
        <h3 className='text-xl font-bold text-center text-blue-600 mt-4'>
          คำนวนเงินที่จะหารกัน
        </h3>
        <Image className='mx-auto mt-4 mb-8'
          src={money}
          alt='money'
          width={100}
          height={100}
        />
        <MoneyShare />
      </div>
      <h3 className='text-xl font-bold mt-8'>
        Developed by {''}
        <span className=' text-xl text-blue-800'>
          BAS
        </span>
      </h3>
    </div>
  )
}
