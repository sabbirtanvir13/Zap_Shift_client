import DeliveryBoxes from '../../../assets/Layer_1.png'
import merchent from '../../../assets/be-a-merchant-bg.png'

const PrioritySection = () => {

    return (
        <section className="bg-[#033B3F] rounded-3xl p-10 md:p-14 text-white mt-10 relative overflow-hidden">
 
            <div className="absolute top-0 right-0 opacity-40">
                <img
                    src={merchent}
                    alt="bg"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

              
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold leading-snug">
                        Merchant and Customer Satisfaction <br />
                        is Our First Priority
                    </h2>

                    <p className="text-gray-200 mt-4 leading-relaxed">
                        We offer the lowest delivery charge with the highest value along with
                        100% safety of your product. Pathao courier delivers your parcels in
                        every corner of Bangladesh right on time.
                    </p>

                
                    <div className="flex flex-wrap gap-4 mt-6">
                        <button className="btn bg-[#C6F68D] text-black font-semibold rounded-full px-6">
                            Become a Merchant
                        </button>

                        <button className="btn border border-[#C6F68D] text-[#C6F68D] rounded-full px-6 bg-transparent">
                            Earn with ZapShift Courier
                        </button>
                    </div>
                </div>

               
                <div className="flex justify-center md:justify-end relative">
                    <img
                        src={DeliveryBoxes}
                        alt="Delivery Boxes"
                        className="w-[320px] md:w-[430px]"
                    />
                </div>

            </div>
        </section>
    );
};

export default PrioritySection;
