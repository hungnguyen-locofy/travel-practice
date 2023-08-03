import type { NextPage } from "next";

const CommunityCard: NextPage = () => {
  return (
    <section
      className="self-stretch h-[500px] flex flex-col items-start justify-start gap-[26.57px] text-left text-[35.42px] text-black font-helvetica sm:gap-[0px]"
      id="community"
    >
      <div className="flex flex-row py-2 px-[120px] items-start justify-start sm:pl-5 sm:pr-5 sm:box-border">
        <b className="relative sm:text-5xl">
          Connect with other travelers in our community
        </b>
      </div>
      <div className="self-stretch h-[410px] overflow-x-auto shrink-0 flex flex-row pt-2 pb-0 pr-0 pl-[120px] box-border items-center justify-start gap-[24px] text-[17.71px] font-netflix-sans-medium-26 sm:pl-5 sm:box-border">
        <button className="cursor-pointer [border:none] p-4 bg-white rounded-2xl shadow-[0px_4.428116321563721px_17.71px_rgba(158,_158,_158,_0.25)] h-[381.11px] flex flex-row flex-wrap box-border items-start justify-start hover:animate-[1s_ease_0s_infinite_normal_none_shadow-drop-bottom] hover:opacity-[1]">
          <div className="self-stretch relative w-[340px]">
            <img
              className="absolute top-[0px] left-[0px] rounded-[8.86px] w-[340px] h-[221.41px] overflow-hidden object-cover"
              alt=""
              src="/frame-314@2x.png"
            />
            <div className="absolute top-[247.97px] left-[0px] w-[343.18px] flex flex-col items-start justify-start">
              <div className="flex flex-col items-start justify-start gap-[8.86px]">
                <div className="w-[343.18px] flex flex-row items-start justify-start opacity-[0.8]">
                  <div className="relative text-[26.57px] font-netflix-sans-medium-26 text-black text-left">
                    India
                  </div>
                </div>
                <div className="relative text-[17.71px] font-netflix-sans-medium-26 text-black text-left opacity-[0.5]">
                  Travel community
                </div>
                <div className="relative text-[17.71px] font-netflix-sans-medium-26 text-black text-left opacity-[0.5]">
                  155,073 travelers
                </div>
              </div>
            </div>
          </div>
        </button>
        <div className="rounded-2xl bg-white shadow-[0px_4.428116321563721px_17.71px_rgba(158,_158,_158,_0.25)] h-[381.11px] flex flex-col p-4 box-border items-start justify-start">
          <div className="flex-1 relative w-[340px]">
            <div className="absolute top-[247.97px] left-[0px] w-[343.18px] flex flex-col items-start justify-start">
              <div className="flex flex-col items-start justify-start gap-[8.86px]">
                <div className="w-[343.18px] flex flex-row items-start justify-start opacity-[0.8] text-[26.57px]">
                  <div className="relative">Travel Talk</div>
                </div>
                <div className="relative opacity-[0.5]">Travel community</div>
                <div className="relative opacity-[0.5]">155,073 travelers</div>
              </div>
            </div>
            <img
              className="absolute top-[0px] left-[0px] rounded-[8.86px] w-[340px] h-[221.41px] overflow-hidden object-cover"
              alt=""
              src="/frame-315@2x.png"
            />
          </div>
        </div>
        <div className="rounded-2xl bg-white shadow-[0px_4.428116321563721px_17.71px_rgba(158,_158,_158,_0.25)] h-[381.11px] flex flex-col p-4 box-border items-start justify-start">
          <div className="flex-1 relative w-[340px]">
            <img
              className="absolute top-[0px] left-[0px] rounded-[8.86px] w-[340px] h-[221.41px] overflow-hidden object-cover"
              alt=""
              src="/frame-316@2x.png"
            />
            <div className="absolute top-[247.97px] left-[0px] w-[343.18px] flex flex-col items-start justify-start">
              <div className="flex flex-col items-start justify-start gap-[8.86px]">
                <div className="w-[343.18px] flex flex-row items-start justify-start opacity-[0.8] text-[26.57px]">
                  <div className="relative">Beach</div>
                </div>
                <div className="relative opacity-[0.5]">Travel community</div>
                <div className="relative opacity-[0.5]">155,073 travelers</div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-2xl bg-white shadow-[0px_4.428116321563721px_17.71px_rgba(158,_158,_158,_0.25)] w-[378.6px] h-[381.11px] flex flex-col p-4 box-border items-start justify-start">
          <div className="flex-1 relative w-[340px]">
            <img
              className="absolute top-[0px] left-[0px] rounded-[8.86px] w-[340px] h-[221.41px] overflow-hidden object-cover"
              alt=""
              src="/frame-317@2x.png"
            />
            <div className="absolute top-[247.97px] left-[0px] w-[343.18px] flex flex-col items-start justify-start">
              <div className="flex flex-col items-start justify-start gap-[8.86px]">
                <div className="w-[343.18px] flex flex-row items-start justify-start opacity-[0.8] text-[26.57px]">
                  <div className="relative">Mountains</div>
                </div>
                <div className="relative opacity-[0.5]">Travel community</div>
                <div className="relative opacity-[0.5]">155,073 travelers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityCard;
