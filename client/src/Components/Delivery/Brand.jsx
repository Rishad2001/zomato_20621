import React from 'react'
import Slider from 'react-slick';

//components
import { NextArrow, PrevArrow } from '../CarouselArrow';

const Brand = (props) => {

    const logos = [
        "https://b.zmtcdn.com/data/brand_creatives/logos/3bf3424f71561092add2087da7c68459_1599801129.png",
        "https://b.zmtcdn.com/data/brand_creatives/logos/c38f7540bcc5a38e918856ac06409056_1504531339.png",
        "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617188086.png",
        "https://b.zmtcdn.com/data/brand_creatives/logos/af1c8775dd8883af029397b7706fa055_1599463973.png",
        "https://b.zmtcdn.com/data/brand_creatives/logos/fa7df5f0a33f6171e7ce6131de3c3806_1617920053.png",
    ]

    const settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
      };

    return (
    <>
    <div className="my-5 mb-32">
      <Slider {...settings}>
        {logos.map((logo) => (
          <div className="w-24 h-24 mx-3 bg-white shadow">
            <img src={logo} alt="brand" className="w-full h-full object-cover" />
          </div>
        ))}
      </Slider>
    </div>
    </>
    )
}

export default Brand
