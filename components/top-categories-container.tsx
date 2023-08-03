import type { NextPage } from "next";
import { useCallback } from "react";

const TopCategoriesContainer: NextPage = () => {
  const onFrameContainer3Click = useCallback(() => {
    // Please sync "Frame 36" to the project
  }, []);

  return (
    <div className="self-stretch flex flex-col p-2.5 items-start justify-start gap-[12px] text-left text-[35.42px] text-white font-helvetica md:hidden sm:self-stretch sm:w-auto">
      <div className="self-stretch h-[67px] overflow-hidden shrink-0 flex flex-row p-2.5 box-border items-start justify-start relative">
        <b className="absolute my-0 mx-[!important] top-[-0.78px] left-[-0.16px] inline-block z-[0]">
          Top categories
        </b>
      </div>
      <div className="self-stretch overflow-hidden flex flex-row p-2.5 items-start justify-between text-[17.71px]">
        <div className="flex flex-col items-center justify-center gap-[17.71px]">
          <img
            className="relative w-[35.43px] h-[35.42px] object-cover opacity-[0.4]"
            alt=""
            src="/image-4@2x.png"
          />
          <div className="relative opacity-[0.4]">Beaches</div>
        </div>
        <div className="flex flex-col items-center justify-center gap-[17.71px]">
          <img
            className="relative w-[35.43px] h-[35.42px] object-cover opacity-[0.4]"
            alt=""
            src="/image-16@2x.png"
          />
          <div className="relative opacity-[0.4]">Deserts</div>
        </div>
        <div
          className="flex flex-col items-center justify-center gap-[17.71px] cursor-pointer"
          onClick={onFrameContainer3Click}
        >
          <img
            className="relative w-[35.79px] h-[35.42px] object-cover opacity-[0.4]"
            alt=""
            src="/image-3@2x.png"
          />
          <div className="relative opacity-[0.4]">Mountains</div>
        </div>
        <div className="flex flex-col items-center justify-center gap-[17.71px]">
          <img
            className="relative w-[35.79px] h-[35.42px] object-cover opacity-[0.4]"
            alt=""
            src="/image-13@2x.png"
          />
          <div className="relative opacity-[0.4]">Iconic Cities</div>
        </div>
        <div className="flex flex-col items-center justify-center gap-[17.71px]">
          <img
            className="relative w-[35.79px] h-[35.42px] object-cover opacity-[0.4]"
            alt=""
            src="/image-17@2x.png"
          />
          <div className="relative opacity-[0.4]">Houseboats</div>
        </div>
        <div className="flex flex-col items-center justify-center gap-[17.71px]">
          <img
            className="relative w-[35.43px] h-[35.42px] object-cover opacity-[0.4]"
            alt=""
            src="/image-10@2x.png"
          />
          <div className="relative opacity-[0.4]">Countryside</div>
        </div>
        <div className="flex flex-col items-center justify-center gap-[17.71px]">
          <img
            className="relative w-[35.43px] h-[35.42px] object-cover opacity-[0.4]"
            alt=""
            src="/image-5@2x.png"
          />
          <div className="relative opacity-[0.4]">Camping</div>
        </div>
        <div className="flex flex-col items-center justify-center gap-[17.71px]">
          <img
            className="relative w-[35.43px] h-[35.42px] object-cover opacity-[0.4]"
            alt=""
            src="/image-12@2x.png"
          />
          <div className="relative opacity-[0.4]">Castles</div>
        </div>
        <div className="flex flex-col items-center justify-center gap-[17.71px]">
          <img
            className="relative w-[35.43px] h-[35.42px] object-cover opacity-[0.4]"
            alt=""
            src="/image-15@2x.png"
          />
          <div className="relative opacity-[0.4]">Skiing</div>
        </div>
        <div className="flex flex-col items-center justify-center gap-[17.71px]">
          <img
            className="relative w-[35.43px] h-[35.42px] object-cover opacity-[0.4]"
            alt=""
            src="/image-8@2x.png"
          />
          <div className="relative opacity-[0.4]">Tropical</div>
        </div>
      </div>
    </div>
  );
};

export default TopCategoriesContainer;
