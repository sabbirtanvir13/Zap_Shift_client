import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const ReviewScard = ({review}) => {
    const {userName,user_photoURL,review:testimonial}=review
    return (
       <div className="max-w-md mx-auto bg-white shadow-lg rounded-2xl p-8 border border-gray-100">
      {/* Quote Icon */}
      <FaQuoteLeft className="text-primary text-3xl mb-4 opacity-70" />

      {/* Review Text */}
      <p className="text-gray-600 leading-relaxed mb-6">
      {testimonial}
      </p>

      {/* Divider */}
      <div className="border-t border-gray-200 my-4"></div>

      {/* User Info */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-gray-200">
            <img src={user_photoURL} alt="" />
        </div>

        <div className="">
          <h4 className="font-semibold text-gray-800">{userName}</h4>
          <p className="text-sm text-gray-500">Senior Product Designer</p>
        </div>
      </div>
    </div>
    );
};

export default ReviewScard;