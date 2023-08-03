import type { NextPage } from "next";
import CardContainer from "./card-container";

const OffersContainer: NextPage = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[40px] text-left text-[35.42px] text-black font-helvetica sm:gap-[0px]">
      <div className="flex flex-row py-2 px-[120px] items-start justify-start sm:gap-[8px] sm:pl-5 sm:pr-0 sm:box-border">
        <b className="relative sm:text-5xl">Offers</b>
      </div>
      <div className="self-stretch overflow-x-auto flex flex-row py-3 px-[120px] items-center justify-start gap-[24px] text-[17.71px] font-netflix-sans-medium-26 sm:pl-5 sm:box-border">
        <CardContainer
          dimensionCode="/bytesizeheart.svg"
          imageDimensions="/image-19@2x.png"
          offerImageUrl="Domestic Flights"
          promotionText="Huge savings on flight with trxvl."
          dealDescription="Book domestic flights starting @ just ₹1459"
        />
        <CardContainer
          dimensionCode="/bytesizeheart1.svg"
          imageDimensions="/image-191@2x.png"
          offerImageUrl="International Hotels"
          promotionText="Enjoy upto 20% off on International Hotels"
          dealDescription="Make the most of  this deal on your first booking with trxvl."
          propBackgroundImage={`url("/frame-312@3x.png")`}
          propWidth="351.53px"
          propHeight="234.35px"
        />
        <div className="rounded-[17.71px] bg-white shadow-[0px_4.428116321563721px_17.71px_rgba(158,_158,_158,_0.25)] flex flex-row p-4 items-start justify-start">
          <div className="w-[720px] flex flex-row items-start justify-start gap-[24px]">
            <div className="self-stretch flex-1 relative rounded-[23.23px] overflow-hidden bg-[url(/frame-312@3x.png)] bg-cover bg-no-repeat bg-[top]">
              <img
                className="absolute top-[17.71px] left-[290.04px] w-[35.42px] h-[35.42px] overflow-hidden"
                alt=""
                src="/bytesizeheart2.svg"
              />
              <img
                className="absolute top-[-0.36px] left-[-3.64px] w-[351.53px] h-[234.35px] object-cover"
                alt=""
                src="/image-192@2x.png"
              />
            </div>
            <div className="flex flex-col items-start justify-start gap-[17.71px]">
              <div className="flex flex-col items-start justify-start gap-[17.71px]">
                <div className="flex flex-col items-start justify-start gap-[4.43px]">
                  <div className="relative opacity-[0.5]">Bank Offer</div>
                  <div className="flex flex-col items-start justify-start text-[26.57px]">
                    <div className="w-[343.18px] flex flex-row items-start justify-start opacity-[0.8]">
                      <div className="relative font-medium inline-block w-[343.18px] shrink-0">
                        Get upto 30% instant discount
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start">
                  <div className="relative inline-block w-[356.46px] h-[44.28px] shrink-0 opacity-[0.5]">
                    Get discount on flights, hotels and holiday packages with
                    HDFC bank credit card.
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-end justify-start">
                <button className="cursor-pointer [border:none] py-[17.712465286254883px] px-[35.424930572509766px] bg-royalblue rounded-[35.42px] flex flex-row items-end justify-end">
                  <div className="relative text-[17.71px] font-netflix-sans-medium-26 text-white text-left">
                    Book Now
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OffersContainer;
