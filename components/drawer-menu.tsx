import type { NextPage } from "next";
import { useEffect } from "react";

type DrawerMenuType = {
  onClose?: () => void;
};

const DrawerMenu: NextPage<DrawerMenuType> = ({ onClose }) => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <div
      className="relative bg-white w-[312px] h-full overflow-hidden flex flex-col p-5 box-border items-start justify-start gap-[12px] [&.animate]:animate-[0.25s_ease_0s_1_normal_forwards_slide-in-left] opacity-[0] max-w-[90%] text-left text-[17.71px] text-black font-netflix-sans-medium-26"
      data-animate-on-scroll
    >
      <nav className="m-0 self-stretch h-[132229px] flex flex-col items-start justify-start gap-[12px] text-left text-[17.71px] text-black font-helvetica">
        <div className="relative opacity-[0.7]">Home</div>
        <div className="relative opacity-[0.7]">Stays</div>
        <div className="relative opacity-[0.7]">Flights</div>
        <div className="relative opacity-[0.7]">Packages</div>
        <b className="relative opacity-[0.7]">Sign Up</b>
      </nav>
      <div className="self-stretch flex-1 overflow-x-auto hidden flex-row py-2.5 pr-0 pl-[120px] items-center justify-start gap-[24px] sm:pl-5 sm:box-border">
        <button className="cursor-pointer [border:none] p-[17.712465286254883px] bg-white rounded-[17.71px] shadow-[0px_4.428116321563721px_17.71px_rgba(158,_158,_158,_0.25)] flex flex-col items-start justify-start hover:animate-[1s_ease_0s_infinite_normal_none_shadow-drop-bottom] hover:opacity-[1]">
          <div className="relative w-[340px] h-[345.69px]">
            <img
              className="absolute top-[0px] left-[0px] rounded-[8.86px] w-[340px] h-[221.41px] overflow-hidden object-cover"
              alt=""
              src="/frame-318@2x.png"
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
        <div className="rounded-[17.71px] bg-white shadow-[0px_4.428116321563721px_17.71px_rgba(158,_158,_158,_0.25)] flex flex-col p-[17.712465286254883px] items-start justify-start">
          <div className="relative w-[340px] h-[345.69px]">
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
              src="/frame-319@2x.png"
            />
          </div>
        </div>
        <div className="rounded-[17.71px] bg-white shadow-[0px_4.428116321563721px_17.71px_rgba(158,_158,_158,_0.25)] flex flex-col p-[17.712465286254883px] items-start justify-start">
          <div className="relative w-[340px] h-[345.69px]">
            <img
              className="absolute top-[0px] left-[0px] rounded-[8.86px] w-[340px] h-[221.41px] overflow-hidden object-cover"
              alt=""
              src="/frame-3110@2x.png"
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
        <div className="rounded-[17.71px] bg-white shadow-[0px_4.428116321563721px_17.71px_rgba(158,_158,_158,_0.25)] w-[378.6px] flex flex-col p-[17.712465286254883px] box-border items-start justify-start">
          <div className="relative w-[340px] h-[345.69px]">
            <img
              className="absolute top-[0px] left-[0px] rounded-[8.86px] w-[340px] h-[221.41px] overflow-hidden object-cover"
              alt=""
              src="/frame-3111@2x.png"
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
    </div>
  );
};

export default DrawerMenu;
