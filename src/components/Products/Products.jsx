import React from 'react'
import Img1 from '../../assets/men/image1.png'
import Img2 from '../../assets/men/image2.png'
import Img3 from '../../assets/men/image3.png'
import Img4 from '../../assets/men/image4.png'
import Img5 from '../../assets/men/image5.png'
import { FaStar } from 'react-icons/fa6'


const ProductsData = [
    {
        id: 1,
        img: Img1,
        title: "Man Ethnic",
        rating: 4.5,
        color: "white-blue",
        aosDelay: '0',
    },
    {
        id: 2,
        img: Img2,
        title: "Man Western",
        rating: 4.0,
        color: "red",
        aosDelay: '200',
    },
    {
        id: 3,
        img: Img3,
        title: "Man South",
        rating: 5.0,
        color: "brown-grey",
        aosDelay: '300',
    },
    {
        id: 4,
        img: Img4,
        title: "Man Cool",
        rating: 4.2,
        color: "white-black",
        aosDelay: '400',
    },
    {
        id: 5,
        img: Img5,
        title: "Man Ethnic",
        rating: 4.9,
        color: "blue-green",
        aosDelay: '500',
    }
];

function Products() {
  return (
    <div className='mt-14 mb-12'>
        <div className='container'>
            {/* Header Section */}
            <div className='text-center mb-10 max-w-[600px] mx-auto'>
                <p data-aos="fade-up" className='text-sm text-primary'>Top Selling Products For You</p>
                <h1 data-aos="fade-up" className='text-3xl font-bold'>Top Selling Products</h1>
                <p data-aos="fade-up" className='text-xs text-gray-400'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Phasellus blandit purus vel dolor malesuada cursus. 
                    Maecenas mollis, est eu tincidunt feugiat, 
                    elit dolor lacinia dolor, in pharetra orci dolor vitae lectus. 
                </p>
            </div>
            {/* Body Section */}
            <div>
                <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-3'>
                    {/* card section */}
                    {ProductsData.map((data) => (
                        <div
                            data-aos="fade-up"
                            data-aos-delay={data.aosDelay} 
                            key={data.id} 
                            className='space-y-3'
                        >
                            <img 
                              src={data.img}
                              alt=""
                              className='h-[220px w-[150px] object-cover rounded-md'      
                            />
                            <div>
                                <h3 className='font-semibold'>
                                    {data.title}
                                </h3>
                                <p className='text-sm text-gray-600'>{data.color}</p>
                                <div className='flex items-center-gap-1'>
                                    <FaStar className='text-yellow-400' />
                                    <span>{data.rating}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* View All Button */}
                <div className='flex justify-center'>
                    <button className='text-center mt-10 cursor-pointer bg-primary text-white py-1 px-2
                        rounded-md'
                    >
                        View All Button
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Products