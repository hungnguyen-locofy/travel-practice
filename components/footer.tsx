import type { NextPage } from "next";
import HizmetKoduButton from "./hizmet-kodu-button";

const Footer: NextPage = () => {
  return (
    <div className="self-stretch bg-black flex flex-row py-10 px-[120px] items-start justify-between text-left text-[35.42px] text-white font-helvetica lg:self-stretch lg:w-auto lg:flex-1 lg:flex-col lg:gap-[20px] lg:pr-[120px] lg:box-border sm:items-center sm:justify-start sm:pl-10 sm:pr-10 sm:box-border">
      <div className="relative w-[93px] h-[41px]">
        <b className="absolute top-[0px] left-[0px]">Trxvl.</b>
      </div>
      <div className="self-stretch flex-1 flex flex-col py-0 pr-0 pl-[120px] items-end justify-start gap-[20px] text-[14.39px] text-gray font-netflix-sans-medium-26 lg:flex-col lg:gap-[0px] lg:pl-0 lg:box-border lg:flex-[unset] lg:self-stretch md:pl-0 md:box-border sm:pl-0 sm:box-border">
        <div className="self-stretch flex flex-row flex-wrap items-start justify-between lg:flex-row lg:gap-[120px] lg:items-center lg:justify-start md:gap-[80px] sm:flex-col sm:gap-[40px] sm:items-start sm:justify-start sm:empty:self-stretch sm:empty:w-auto sm:empty:items-center sm:empty:justify-start">
          <div className="flex flex-col items-start justify-start gap-[16px]">
            <div className="relative">Seslendirme ve Alt Jazz</div>
            <div className="relative">Media Market</div>
            <div className="relative">Gillie</div>
            <div className="relative">Size Last</div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[16.61px]">
            <div className="relative">Self Betimes</div>
            <div className="relative">Yatırımcı İlişkileri</div>
            <div className="relative">Basal Himmler</div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[16.61px]">
            <div className="relative">Yard Market</div>
            <div className="relative">Is İmkanları</div>
            <div className="relative">Car Tercihleri</div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[16.61px]">
            <div className="relative">Hedge Karla</div>
            <div className="relative">Mullein Koşulları</div>
            <div className="relative">Autumnal Bulgier</div>
          </div>
        </div>
        <div className="self-stretch overflow-hidden flex flex-row py-2.5 px-0 items-start justify-between sm:flex-col sm:gap-[20px]">
          <HizmetKoduButton
            serviceCode="Helmet KOD"
            hizmetKoduButtonPosition="unset"
            hizmetKoduButtonBorder="1.1px solid #808080"
            hizmetKoduButtonJustifyContent="space-between"
            hizmetKoduButtonWidth="118.45px"
            hizmetKoduButtonTop="unset"
            hizmetKoduButtonRight="unset"
            hizmetKoduButtonLeft="unset"
            hizmetKoduFontSize="13px"
            hizmetKoduFontWeight="unset"
          />
          <div className="w-[172.7px] flex flex-row items-start justify-between">
            <img
              className="relative w-[26.57px] h-[26.57px] overflow-hidden shrink-0"
              alt=""
              src="/facebook.svg"
            />
            <img
              className="relative w-[26.57px] h-[26.57px] overflow-hidden shrink-0"
              alt=""
              src="/instagram.svg"
            />
            <img
              className="relative w-[26.57px] h-[26.57px] overflow-hidden shrink-0"
              alt=""
              src="/twitter.svg"
            />
            <img
              className="relative w-[26.57px] h-[26.57px] overflow-hidden shrink-0"
              alt=""
              src="/youtube.svg"
            />
          </div>
        </div>
        <div className="self-stretch overflow-hidden flex flex-row items-start justify-start text-[12.18px] sm:self-stretch sm:w-auto">
          <div className="relative font-light">{`© 1997-2021 Netflix, Inc.  {i-062d573a0ee099242}`}</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
