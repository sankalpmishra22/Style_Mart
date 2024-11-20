import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem'; // Import ProductItem component

const BestSeller = () => {
    const { products } = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);

    useEffect(() => {
        // console.log("Products from context:", products); // Debugging log

            const bestProduct = products.filter((item) => item.bestseller);
            setBestSeller(bestProduct.slice(0, 5));
        

        // console.log("Best Seller items:", bestSeller); // Debugging log
    }, [products]);  // Add products as a dependency here

    return (
        <div className='my-10'>
            <div className='text-center text-3xl py-8'>
                <Title text1={'BEST '} text2={'SELLERS'} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                Discover what’s trending at StyleMart! Our bestseller collection features handpicked favorites loved by our customers. From classic staples to standout pieces, these styles are a must-have for every wardrobe. Explore now and grab your favorites before they’re gone!
                </p>
            </div>
            {/* Render Best Sellers here */}
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {bestSeller.map((item, index) => (
                    <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                ))}
            </div>


                {/* <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                    {
                        bestSeller.map((item, index)=>(
                            <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price}/>
                        ))
                    }
                </div> */}

        </div>
    );
};

export default BestSeller;
