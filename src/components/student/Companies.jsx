import React from 'react'
import { assets } from '../../assets/assets'


const Companies = () => {
  return (

<div className='pt-16'>
      <p className='text-base text-gray-500'>Trusted by learners from</p>
      <div className='flex flex-wrap justify-center items-center gap-6 md:gap-16 md:mt-10 mt-5'>    
            <img src={assets.microsoft_logo} alt="Microsoft" className='w-10 md:w-18'/>
        <img src={assets.adobe_logo} alt="Adobe" className='w-10 md:w-18'/>
        <img src={assets.paypal_logo} alt="Paypal" className='w-10 md:w-18'/>
</div>
</div>
  )
}
export default Companies