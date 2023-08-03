import type { NextPage } from "next";
import MainHeader from "../components/main-header";
import TopBody from "../components/top-body";
import OffersContainer from "../components/offers-container";
import PropertyCard from "../components/property-card";
import CommunityCard from "../components/community-card";
import DownloadApp from "../components/download-app";
import Footer from "../components/footer";

const Home: NextPage = () => {
  return (
    <div className="relative bg-white w-full overflow-hidden flex flex-col items-center justify-start text-left text-[35.42px] text-black font-helvetica md:w-auto md:[align-self:unset] md:h-auto">
      <div className="self-stretch h-[888px] overflow-hidden shrink-0 flex flex-col items-start justify-start bg-[url(/top@3x.png)] bg-cover bg-no-repeat bg-[top] md:h-[600px]">
        <MainHeader />
        <TopBody />
        <div className="self-stretch relative [background:linear-gradient(180deg,_rgba(255,_255,_255,_0),_#fff_89.58%)] h-[116px] overflow-hidden shrink-0" />
      </div>
      <div className="self-stretch flex flex-col items-center justify-start gap-[80px] sm:gap-[20px]">
        <div className="self-stretch flex flex-col items-center justify-center gap-[40px] sm:gap-[0px]">
          <div className="self-stretch flex flex-row py-[8.856232643127441px] pr-0 pl-[120px] items-start justify-start sm:pl-5 sm:box-border">
            <b className="flex-1 relative sm:text-5xl">
              Top Vacation Destinations
            </b>
          </div>
          <div className="self-stretch overflow-x-auto flex flex-row py-0 px-[120px] items-center justify-start gap-[24px] text-[26.57px] text-white font-netflix-sans-medium-26 sm:pl-5 sm:box-border">
            <div className="w-[343.18px] h-[221.41px] overflow-hidden shrink-0 flex flex-col py-[25.779525756835938px] px-[26.568750381469727px] box-border items-start justify-end bg-[url(/frame-31@3x.png)] bg-cover bg-no-repeat bg-[top]">
              <div className="relative font-medium">Bali, Indonesia</div>
            </div>
            <div className="w-[343.18px] h-[221.41px] overflow-hidden shrink-0 flex flex-col py-[25.779525756835938px] px-[26.56862449645996px] box-border items-start justify-end bg-[url(/frame-36@3x.png)] bg-cover bg-no-repeat bg-[top]">
              <div className="relative font-medium">Kerry, Ireland</div>
            </div>
            <div className="w-[343.18px] h-[221.41px] overflow-hidden shrink-0 flex flex-col py-[25.779525756835938px] px-[26.568742752075195px] box-border items-start justify-end bg-[url(/frame-37@3x.png)] bg-cover bg-no-repeat bg-[top]">
              <div className="relative font-medium">Sydney, Australia</div>
            </div>
            <div className="w-[343.18px] h-[221.41px] overflow-hidden shrink-0 flex flex-col py-[25.779525756835938px] px-[26.56867790222168px] box-border items-start justify-end bg-[url(/frame-38@3x.png)] bg-cover bg-no-repeat bg-[top]">
              <div className="relative font-medium">Paris, France</div>
            </div>
          </div>
        </div>
        <OffersContainer />
        <PropertyCard />
        <div className="self-stretch bg-white h-[434px] overflow-hidden shrink-0 flex flex-col py-2.5 px-[120px] box-border items-center justify-start text-[61.99px] text-white sm:h-auto sm:pl-0 sm:pr-0 sm:box-border">
          <div className="self-stretch flex-1 overflow-hidden flex flex-col p-20 items-start justify-start gap-[24px] bg-[url(/plan-container@3x.png)] bg-cover bg-no-repeat bg-[top] sm:p-5 sm:box-border">
            <b className="relative inline-block w-[751.46px] sm:text-13xl sm:self-stretch sm:w-auto sm:flex-1">
              Plan your trip with travel expert
            </b>
            <div className="relative text-[35.42px] font-netflix-sans-medium-26 sm:text-[14px]">
              Our professional advisors can craft your perfect itinerary
            </div>
          </div>
        </div>
        <CommunityCard />
        <DownloadApp />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
