import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT '} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
            <p>At StyleMart, we believe fashion is a reflection of individuality. Our journey began with a simple mission: to provide stylish, high-quality, and affordable clothing for everyone. We understand the importance of comfort, durability, and staying ahead of the trends, which is why each of our collections is carefully curated to blend fashion-forward designs with everyday practicality.</p>
            <p>From our humble beginnings, StyleMart has grown into a trusted destination for fashion enthusiasts. Our diverse range of clothing caters to various styles and occasions, ensuring that everyone finds something that fits their personality. Whether you're looking for casual wear or something more formal, StyleMart is here to help you express yourself through the power of fashion.</p>
            <b className='text-gray-800'>Our Mission</b>
            <p>Our mission at StyleMart is to empower individuals with fashion that celebrates their uniqueness. We aim to deliver trendy, affordable, and high-quality apparel that fits your style and needs. With a commitment to innovation, sustainability, and customer satisfaction, we strive to redefine the way you shop.</p>
          </div>
      </div>

      <div className='text-2xl py-4 '>
          <Title text1={'WHY '} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Quality Assurance:</b>
              <p className='text-gray-600'>At StyleMart, quality is our priority. We meticulously select fabrics and designs to ensure every piece exceeds your expectations. From durable stitching to premium materials, our products are crafted with care to provide you with long-lasting comfort and style.</p>
          </div>

          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Convenience:</b>
              <p className='text-gray-600'>At StyleMart, we understand that convenience is key to a great shopping experience. Whether you're browsing from your phone or laptop, our responsive design ensures that you can shop from anywhere at any time. We prioritize your convenience so you can enjoy a smooth, enjoyable journey from start to finish.</p>
          </div>

          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>Exceptional Customer Service:</b>
              <p className='text-gray-600'>At StyleMart, we don’t just sell clothes—we provide exceptional customer service to ensure your experience is seamless. Our dedicated support team is always available to assist you with any inquiries, issues, or returns. Your satisfaction is our top priority, and we’re committed to going above and beyond to support you.</p>
          </div>
      </div>

      <NewsletterBox />

    </div>
  )
}

export default About