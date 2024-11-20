import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <img src={assets.logo} className='mb-5 w-32' alt="" />
                <p className='w-full md:w-2/3 text-gray-600'>
                StyleMart is your ultimate fashion destination, offering a diverse collection of trendy apparel to elevate your style. From everyday essentials to statement pieces, we bring you the best in quality and design. Shop effortlessly with our user-friendly features and enjoy a seamless experience!
                </p>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                   <a href=""> <li>Home</li> </a>
                    <a href="/about"> <li>About Us</li> </a>
                    <a href="/contact"> <li>Contact</li></a>
                    <a href="#"> <li>Privacy Policy</li> </a>
                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+91 6307220521</li>
                    <li>sankalp1606@gmail.com</li>
                </ul>
            </div>

        </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center '>© StyleMart  2024. All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer