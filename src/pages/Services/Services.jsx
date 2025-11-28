import React from 'react';

const Services = () => {
    return (
        <div className='bg-secondary pb-6 rounded-2xl mt-[140px]'>
            <h3 className="text-3xl text-white font-bold py-5  text-center mb-4">
                Our Services
            </h3>

            <p className='text-white  text-center '>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to  <br />business shipments — we deliver on time, every time.</p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-6 gap-5'>

                <div className="bg-white rounded-2xl p-6 flex flex-col items-center text-center shadow">
                    <img src="https://i.ibb.co/vCbywLjg/download-7.png" alt="" className="w-14 h-14 mb-4" />
                    <h5 className="text-xl font-semibold mb-2">Express  & Standard <br />Delivery</h5>
                    <p className="text-gray-600 text-sm">
                        We deliver parcels within 24 -72 hours in Dhaka, <br /> Chittagong, Sylhet, Khulna, and Rajshahi. <br /> Express delivery available in Dhaka within 4-6 hours <br /> from pick-up to drop-off.
                    </p>
                </div>

                <div className="bg-white rounded-2xl p-6 flex flex-col items-center text-center shadow">
                    <img src="https://png.pngtree.com/png-vector/20220713/ourmid/pngtree-small-delivery-van-with24-hr-text-hour-day-same-vector-png-image_28030896.png" alt="" className="w-14 h-14 mb-4" />
                    <h5 className="text-xl font-semibold mb-2">Nationwide Delivery</h5>
                    <p className="text-gray-600 text-sm">
                        We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.
                    </p>
                </div>

                <div className="bg-white rounded-2xl p-6 flex flex-col items-center text-center shadow">
                    <img src="https://cdn-icons-png.freepik.com/512/13466/13466909.png" alt="" className="w-14 h-14 mb-4" />
                    <h5 className="text-xl font-semibold mb-2">Fulfillment Solution</h5>
                    <p className="text-gray-600 text-sm">
                        We also offer customized service with inventory management support, online order processing, packaging, and after sales support.
                    </p>
                </div>
                <div className="bg-white rounded-2xl p-6 flex flex-col items-center text-center shadow">
                    <img src="https://i.ibb.co/cSFwPsxW/download-8.png" alt="" className="w-14 h-14 mb-4" />
                    <h5 className="text-xl font-semibold mb-2">Cash on Home Delivery</h5>
                    <p className="text-gray-600 text-sm">
                        100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.
                    </p>
                </div>
                <div className="bg-white rounded-2xl p-6 flex flex-col items-center text-center shadow">
                    <img src="https://cdn-icons-png.flaticon.com/512/3201/3201774.png" alt="" className="w-14 h-14 mb-4" />
                    <h5 className="text-xl font-semibold mb-2">Corporate Service / Contract <br /> In Logistics</h5>
                    <p className="text-gray-600 text-sm">
                        Customized corporate services which includes warehouse and inventory management support.
                    </p>
                </div>
                <div className="bg-white rounded-2xl p-6 flex flex-col items-center text-center shadow">
                    <img src="https://cdn-icons-png.freepik.com/512/15779/15779911.png" alt="" className="w-14 h-14 mb-4" />
                    <h5 className="text-xl font-semibold mb-2">Parcel Return</h5>
                    <p className="text-gray-600 text-sm">
                        Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.
                    </p>
                </div>

            </div>


        </div>

    );
};

export default Services;