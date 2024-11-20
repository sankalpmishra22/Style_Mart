import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';
import Title from '../components/Title';

const Product = () => {
    const { productId } = useParams();
    const { products, currency, addToCart } = useContext(ShopContext);
    const [productData, setProductData] = useState(null);
    const [image, setImage] = useState('');
    const [size, setSize] = useState('');

    useEffect(() => {
        const fetchProductData = () => {
            const foundProduct = products.find(item => item._id === productId);
            if (foundProduct) {
                setProductData(foundProduct);
                setImage(foundProduct.image[0]);
            } else {
                console.warn("Product not found:", productId);
            }
        };
        fetchProductData();
    }, [productId, products]);

    if (!productData) return <div>Loading...</div>;

    return (
        <div className='border-t-2 transition-opacity ease-in duration-500 opacity-100'>
            {/* Product Data */}
            <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
                {/* Product Images */}
                <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
                    <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
                        {productData.image.map((img, index) => (
                            <img
                                onClick={() => setImage(img)}
                                src={img}
                                key={index}
                                className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'
                                alt=""
                            />
                        ))}
                    </div>
                    <div className='w-full sm:w-[80%]'>
                        <img className='w-full h-auto' src={image} alt="" />
                    </div>
                </div>
                
                {/* Product Info */}
                <div className='flex-1'>
                    <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
                    <div className='flex items-center gap-1 mt-2'>
                        {[...Array(4)].map((_, i) => (
                            <img key={i} src={assets.star_icon} alt="star" className="w-3.5" />
                        ))}
                        <img src={assets.star_dull_icon} alt="star" className="w-3.5" />
                        <p className='pl-2'>(122)</p>
                    </div>
                    <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
                    <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
                    
                    <div className='flex flex-col gap-4 my-8'>
                        <p>Select Size</p>
                        <div className='flex gap-2'>
                            {productData.sizes.map((s, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSize(s)}
                                    className={`border py-2 px-4 bg-gray-100 ${s === size ? 'border-orange-500' : ''}`}
                                >
                                    {s}
                                </button>
                            ))}
                        </div>
                    </div>
                    
                    <button onClick={()=> addToCart(productData._id,size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>
                        Add to Cart
                    </button>
                    <hr className='mt-8 sm:w-4/5' />
                    
                    <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
                        <p>100% Original Product.</p>
                        <p>Cash on delivery is available on this product.</p>
                        <p>Easy Return & Exchange policy within 7 days.</p>
                    </div>
                </div>
            </div>
            
            {/* Description & Review Section */}
            <div className='mt-20'>
                <div className='flex'>
                    <b className='border px-5 py-3 text-sm'>Description</b>
                    <p className='border px-5 py-3 text-sm'>Reviews (122)</p>
                </div>
                <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat ipsa in quisquam perferendis velit aliquam aperiam quod obcaecati aliquid, iusto error magni consequatur fugiat maiores illo? In quidem odio harum.</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis sequi excepturi, quos iure debitis ipsa neque error cumque natus id doloremque blanditiis, vitae nam velit aut voluptatibus numquam odit placeat!</p>
                </div>
            </div>

            {/* Related Products Section */}
            <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
        </div>
    );
};

export default Product;
