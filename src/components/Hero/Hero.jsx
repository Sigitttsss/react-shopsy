import React from 'react'
import Image1 from '../../assets/hero/pricetag.png'
import Image2 from '../../assets/hero/sale.png'
import Image3 from '../../assets/hero/shopping.png'
import Slider from 'react-slick'


const ImageList = [
    {
        id: 1,
        img: Image1,
        title: "Up to 35% off on all Men's Wear",
        description: 
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."    
    },
    {
        id: 2,
        img: Image2,
        title: "30% off on all Women's Wear",
        description: 
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."    
    },
    {
        id: 3,
        img: Image3,
        title: "20% off on all Products Sale",
        description: 
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."    
    },

]; 

function Hero({handleOrderPopup}) {

    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
    };

  return (
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px] 
    bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200'>
        {/* Background Pattern */}
        <div className='h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-0 rounded-3xl rotate-45 -z-9'></div>
        {/* Hero Section */}
        <div className='container pb-8 sm:pb-0 inline-block'>
            <Slider {...settings}>
                {ImageList.map((item, i) => (
                   <div key={i}>
                   <div className='grid grid-cols-1 sm:grid-cols-2'>
                       {/* text content section */}
                       <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10'>
                           <h1  data-aos="zoom-out" data-aos-once="true" data-aos-duration="500" className='text-5xl sm:text-6xl lg:text-7xl font-bold'>
                               {item.title}
                           </h1>
                               <p data-aos="fade-up" data-aos-delay="100" data-aos-duration="500" className='text-sm'>
                                  {item.description}
                               </p>
                               <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="500">
                                   <button className='bg-gradient-to-r from-primary to-secondary hover:scale-105
                                   duration-200 text-white py-2 px-4 rounded-full'
                                    onClick={handleOrderPopup}
                                >
                                       Order Now
                                   </button>
                               </div>
                       </div>
                       {/* Image section */}
                       <div className='order-1 sm:order-2'>
                           <div data-aos="zoom-in" data-aos-once="true" className='relative z-10'>
                               <img 
                               src={item.img} 
                               alt=''
                               className='w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto'
                               />
                           </div>
                       </div>
                   </div>
               </div>
                ))}
            </Slider>
        </div>
    </div>
  )
}

export default Hero