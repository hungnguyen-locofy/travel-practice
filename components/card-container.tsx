import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";

type CardContainerType = {
  dimensionCode?: string;
  imageDimensions?: string;
  offerImageUrl?: string;
  promotionText?: string;
  dealDescription?: string;

  /** Style props */
  propBackgroundImage?: Property.BackgroundImage;
  propWidth?: Property.Width;
  propHeight?: Property.Height;
};

const CardContainer: NextPage<CardContainerType> = ({
  dimensionCode,
  imageDimensions,
  offerImageUrl,
  promotionText,
  dealDescription,
  propBackgroundImage,
  propWidth,
  propHeight,
}) => {
  const frameDivStyle: CSS.Properties = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  const image19IconStyle: CSS.Properties = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight,
    };
  }, [propWidth, propHeight]);

  return (
    <div className="rounded-[17.71px] bg-white shadow-[0px_4.428116321563721px_17.71px_rgba(158,_158,_158,_0.25)] flex flex-row py-[26.56869888305664px] px-[17.712465286254883px] items-start justify-start text-left text-[17.71px] text-black font-netflix-sans-medium-26">
      <div className="w-[720px] flex flex-row items-start justify-start gap-[24px]">
        <div
          className="self-stretch flex-1 relative rounded-[23.23px] overflow-hidden bg-[url(/frame-311@3x.png)] bg-cover bg-no-repeat bg-[top]"
          style={frameDivStyle}
        >
          <img
            className="absolute top-[17.71px] left-[290.04px] w-[35.43px] h-[35.42px] overflow-hidden"
            alt=""
            src={dimensionCode}
          />
          <img
            className="absolute top-[0px] left-[0px] w-[567.99px] h-[378.66px] object-cover"
            alt=""
            src={imageDimensions}
            style={image19IconStyle}
          />
        </div>
        <div className="flex flex-col items-start justify-start gap-[17.71px]">
          <div className="flex flex-col items-start justify-start gap-[17.71px]">
            <div className="flex flex-col items-start justify-start gap-[4.43px]">
              <div className="relative opacity-[0.5]">{offerImageUrl}</div>
              <div className="flex flex-col items-start justify-start text-[26.57px]">
                <div className="w-[343.18px] flex flex-row items-start justify-start opacity-[0.8]">
                  <div className="relative font-medium inline-block w-[343.18px] shrink-0">
                    {promotionText}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start">
              <div className="relative inline-block w-[356.46px] h-[44.28px] shrink-0 opacity-[0.5]">
                {dealDescription}
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-end justify-start">
            <button className="cursor-pointer [border:none] py-[17.712465286254883px] px-[35.424930572509766px] bg-royalblue rounded-[35.42px] flex flex-row items-end justify-end hover:animate-[1s_ease_0s_infinite_normal_none_shadow-drop-bottom] hover:opacity-[1]">
              <div className="relative text-[17.71px] font-netflix-sans-medium-26 text-white text-left">
                Book Now
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
