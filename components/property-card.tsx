import type { NextPage } from "next";

const PropertyCard: NextPage = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[35.42px] text-left text-[35.42px] text-black font-helvetica">
      <div className="flex flex-row py-2 px-[120px] items-start justify-start sm:gap-[8px] sm:pl-5 sm:pr-5 sm:box-border">
        <b className="relative sm:text-5xl">Browse by property type</b>
      </div>
      <div className="self-stretch h-[221.41px] overflow-x-auto shrink-0 flex flex-row py-0 pr-0 pl-[120px] box-border items-center justify-start gap-[24px] text-[26.57px] text-white font-netflix-sans-medium-26 sm:pl-5 sm:pr-0 sm:box-border">
        <div className="self-stretch flex flex-row items-start justify-start">
          <a className="[text-decoration:none] w-[340px] h-[221.41px] overflow-hidden shrink-0 flex flex-col py-[25.779556274414062px] px-[26.568750381469727px] box-border items-start justify-end bg-[url(/link-property-type@3x.png)] bg-cover bg-no-repeat bg-[top] text-[inherit] hover:animate-[1s_ease_0s_infinite_normal_none_shadow-inset-center] hover:opacity-[1] sm:hover:animate-[1s_ease_0s_infinite_normal_none_shadow-drop-bottom] sm:hover:opacity-[1]">
            <div className="relative font-medium">Hotels</div>
          </a>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start">
          <div className="flex-1 w-[340px] overflow-hidden flex flex-col py-[25.779556274414062px] px-[26.56862449645996px] box-border items-start justify-end bg-[url(/frame-361@3x.png)] bg-cover bg-no-repeat bg-[top]">
            <div className="relative font-medium">Apartments</div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start">
          <div className="flex-1 w-[340px] overflow-hidden flex flex-col py-[25.779556274414062px] px-[26.568742752075195px] box-border items-start justify-end bg-[url(/frame-371@3x.png)] bg-cover bg-no-repeat bg-[top]">
            <div className="relative font-medium">Resorts</div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start">
          <div className="flex-1 w-[340px] overflow-hidden flex flex-col py-[25.779556274414062px] px-[26.56867790222168px] box-border items-start justify-end bg-[url(/frame-381@3x.png)] bg-cover bg-no-repeat bg-[top]">
            <div className="relative font-medium">Villas</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
