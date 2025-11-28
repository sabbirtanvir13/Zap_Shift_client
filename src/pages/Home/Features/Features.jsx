import React from 'react';
import liveTacking from '../../../assets/live-tracking.png';
import SafeDelivery from '../../../assets/safe-delivery.png';

const Features = () => {
    return (
        <div className='mt-[120px] space-y-6'>

           <div className='flex justify-between bg-white p-4 rounded-2xl items-center'>
             <div><img src={liveTacking} alt="" /></div>
               <div className="w-px bg-gray-300 h-40"></div>
             <div className='space-y-3'>
                <h3 className='text-2xl text-secondary font-bold'>Live Parcel Tracking</h3>
                <p>Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get  instant <br /> status updates for complete peace of mind.</p>
             </div>
            
            </div> 
           <div className='flex justify-between bg-white p-4 rounded-2xl items-center'>
             <div><img src={SafeDelivery} alt="" /></div>
               <div className="w-px bg-gray-300 h-40"></div>
             <div className='space-y-3'>
                <h3 className='text-2xl text-secondary font-bold'>100% Safe Delivery</h3>
                <p>We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees <br /> safe and damage-free delivery every time.</p>
             </div>
            
            </div> 
          
           <div className='flex justify-between bg-white p-4 rounded-2xl items-center'>
             <div><img src={SafeDelivery} alt="" /></div>
               <div className="w-px bg-gray-300 h-40"></div>
             <div className='space-y-3'>
                <h3 className='text-2xl text-secondary font-bold'>24/7 Call Center Support</h3>
                <p>Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery  concerns—anytime <br /> you need us.</p>
             </div>
            
            </div> 
          


        </div>
    );
};

export default Features;