import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ArrowLeft = (props) => (
    <button
        {...props}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 rounded-full p-1.5 shadow hover:bg-gray-100"
        style={{ ...props.style, display: "block", width: "28px", height: "28px" }}
        aria-label="Previous"
    >
        <FaChevronLeft className="text-base text-gray-700" />
    </button>
);

const ArrowRight = (props) => (
    <button
        {...props}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 rounded-full p-1.5 shadow hover:bg-gray-100"
        style={{ ...props.style, display: "block", width: "28px", height: "28px" }}
        aria-label="Next"
    >
        <FaChevronRight className="text-base text-gray-700" />
    </button>
);

const ProductCard = ({ product }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: <ArrowLeft />,
        nextArrow: <ArrowRight />,
    };

    const images = product.images || [];

    return (
        <div className="flex-1 basis-full sm:basis-1/2 lg:basis-1/3 max-w-full sm:max-w-1/2 lg:max-w-1/3 p-4">
            <div className='rounded-xl shadow-lg bg-[#f9fafb] hover:shadow-xl transition-shadow duration-300 h-full flex flex-col'>
                <div className="relative ">
                    <Slider {...settings}>
                        {images.map((img, index) => (
                            <div key={index}>
                                <img src={img} alt={`img-${index}`} className='w-full h-48 object-contain' />
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className='mt-4 ml-4'>
                    <h3 className='text-gray-600 text-xl font-semibold'>{product.name}</h3>
                    <p className='text-gray-600 text-xl'>{product.price}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;