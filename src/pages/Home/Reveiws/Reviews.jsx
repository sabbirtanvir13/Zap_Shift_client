import React, { use } from 'react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReviewScard from './ReviewScard';
import group_5 from '../../../assets/Group_5.png'
const Reviews = ({ ReviewsPromise }) => {
    const reviews = use(ReviewsPromise)
    console.log(reviews)
    return (
        <div className='my-24'>
            <div className='text-center mb-24'>

             <img className="mx-auto" src={group_5} alt="" />

                <h3 className="text-3xl text-center font-bold my-8">What our customers are sayings</h3>
                <p>
                    Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce <br /> pain, and strengthen your body with ease!</p>
            </div>
            <Swiper
                loop={true}

                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3}
                coverflowEffect={{
                    rotate: 30,
                    stretch: "50%",
                    depth: 200,
                    modifier: 1,
                    scale: 0.75,

                    slideShadows: true,
                }}
                 autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination,Autoplay]}
                className="mySwiper"
            >

                {
                    reviews.map(review => <SwiperSlide key={review.id}>
                        <ReviewScard review={review}></ReviewScard>
                    </SwiperSlide>)
                }

            </Swiper>
        </div>
    );
};

export default Reviews;