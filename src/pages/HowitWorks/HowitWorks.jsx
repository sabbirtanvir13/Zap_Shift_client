import React from 'react';

const HowitWorks = () => {
    return (
      
        <div>
            <h3 className="text-3xl font-bold text-center mb-10">How It Works</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            
                <div className="bg-white rounded-2xl p-6 flex flex-col items-center text-center shadow">
                    <img src="https://i.ibb.co/xPG1R5r/download-6.png" alt="" className="w-14 h-14 mb-4" />
                    <h5 className="text-xl font-semibold mb-2">Booking Pick & Drop</h5>
                    <p className="text-gray-600 text-sm">
                        From personal packages to business shipments — we deliver on time, every time.
                    </p>
                </div>

         
                <div className="bg-white rounded-2xl p-6 flex flex-col items-center text-center shadow">
                    <img src="https://cdn-icons-png.flaticon.com/512/1019/1019607.png" alt="" className="w-14 h-14 mb-4" />
                    <h5 className="text-xl font-semibold mb-2">Cash On Delivery</h5>
                    <p className="text-gray-600 text-sm">
                        Fast and reliable COD service to grow your online business smoothly.
                    </p>
                </div>

          
                <div className="bg-white rounded-2xl p-6 flex flex-col items-center text-center shadow">
                    <img src="https://cdn-icons-png.flaticon.com/512/7282/7282807.png" alt="" className="w-14 h-14 mb-4" />
                    <h5 className="text-xl font-semibold mb-2">Delivery Hub</h5>
                    <p className="text-gray-600 text-sm">
                        Our nationwide delivery hubs ensure quick and secure distribution.
                    </p>
                </div>

           
                <div className="bg-white rounded-2xl p-6 flex flex-col items-center text-center shadow">
                    <img src="https://cdn-icons-png.flaticon.com/512/2830/2830532.png" alt="" className="w-14 h-14 mb-4" />
                    <h5 className="text-xl font-semibold mb-2">Booking SME & Corporate</h5>
                    <p className="text-gray-600 text-sm">
                        Tailored logistics solutions for corporate and SME-level business needs.
                    </p>
                </div>

            </div>

        </div>

    );
};

export default HowitWorks;