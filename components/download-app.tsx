import type { NextPage } from "next";
import { TextField } from "@mui/material";

const DownloadApp: NextPage = () => {
  return (
    <div className="self-stretch h-[558.63px] overflow-hidden shrink-0 flex flex-row flex-wrap py-20 px-[120px] box-border items-start justify-start gap-[80px] bg-[url(/download-app@3x.png)] bg-cover bg-no-repeat bg-[top] text-left text-[53.14px] text-white font-helvetica lg:flex-col md:pl-20 md:pr-20 md:box-border sm:h-auto sm:gap-[0px] sm:p-2.5 sm:box-border">
      <div className="w-[291px] flex flex-col p-2.5 box-border items-start justify-start relative gap-[10px] lg:hidden">
        <img
          className="absolute my-0 mx-[!important] top-[3.24px] left-[3.24px] w-[288.22px] h-[582.93px] object-cover z-[0]"
          alt=""
          src="/main@2x.png"
        />
        <img
          className="absolute my-0 mx-[!important] top-[15.54px] left-[17.49px] w-[258.11px] h-[556.53px] object-cover mix-blend-normal z-[1]"
          alt=""
          src="/iphone-13-mockup-label@2x.png"
        />
      </div>
      <div className="flex-1 flex flex-col items-start justify-start gap-[80px] lg:flex-col lg:gap-[80px] lg:flex-[unset] lg:self-stretch sm:h-auto sm:flex-col sm:gap-[8px]">
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start sm:w-auto sm:[align-self:unset] sm:h-auto sm:flex-col sm:gap-[0px] sm:pl-0 sm:pr-0 sm:box-border">
          <b className="relative sm:text-13xl sm:text-white sm:self-stretch sm:w-auto sm:flex-1">
            Your all-in-one travel app.
          </b>
        </div>
        <div className="self-stretch overflow-hidden flex flex-row items-start justify-start gap-[30px] text-[22.14px] sm:flex-col sm:gap-[0px]">
          <div className="flex-1 flex flex-col items-start justify-start gap-[17.71px] sm:flex-[unset] sm:self-stretch">
            <div className="flex flex-row items-start justify-start gap-[26.57px]">
              <button className="cursor-pointer [border:none] py-[8.856232643127441px] px-[17.712465286254883px] bg-gray rounded-[17.71px] [backdrop-filter:blur(35.42px)] flex flex-row items-start justify-start">
                <div className="relative text-[22.14px] font-helvetica text-white text-left">
                  Mobile
                </div>
              </button>
              <div className="flex flex-row p-[8.856232643127441px] items-start justify-start">
                <div className="relative">Email</div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[17.71px] text-base-5">
              <div className="relative sm:self-stretch sm:w-auto">
                Enter your phone number to receive a text with a link to
                download the app.
              </div>
              <div className="self-stretch rounded-[17.71px] bg-gray [backdrop-filter:blur(35.42px)] flex flex-col py-[8.856232643127441px] px-[17.712465286254883px] items-start justify-start">
                <div className="self-stretch flex flex-row items-center justify-center gap-[35.42px] sm:flex-col sm:gap-[20px]">
                  <TextField
                    className="[border:none] bg-[transparent] flex-1 sm:flex-[unset] sm:self-stretch"
                    color="primary"
                    variant="standard"
                    type="number"
                    label="Mobile number"
                    placeholder="Mobile number"
                    size="medium"
                    margin="none"
                  />
                  <button className="cursor-pointer [border:none] py-[13.28434944152832px] px-[35.424930572509766px] bg-white rounded-[35.42px] w-[208.12px] flex flex-row box-border items-center justify-center sm:self-stretch sm:w-auto">
                    <b className="flex-1 relative text-[17.71px] font-helvetica text-royalblue text-center opacity-[0.7] sm:flex-1 sm:self-stretch sm:h-auto">
                      Search
                    </b>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start gap-[11.07px] text-[17.71px] sm:hidden">
            <div className="relative box-border w-[1.11px] h-[57.95px] opacity-[0.2] border-r-[1.1px] border-solid border-white" />
            <div className="relative inline-block w-[16.61px] h-[22.58px] shrink-0">
              or
            </div>
            <div className="relative box-border w-[1.11px] h-[57.95px] opacity-[0.2] border-r-[1.1px] border-solid border-white" />
          </div>
          <div className="flex flex-col items-start justify-start gap-[30px] sm:flex-col sm:gap-[30px] sm:items-center sm:justify-center sm:pt-5 sm:box-border">
            <a
              className="[text-decoration:none] relative w-[224.53px] h-[67.36px] bg-[url(/image-23@3x.png)] bg-cover bg-no-repeat bg-[top]"
              href="https://play.google.com/store/games?pli=1"
              target="_blank"
            />
            <a
              className="[text-decoration:none] relative w-[224.53px] h-[67.36px] bg-[url(/image-22@3x.png)] bg-cover bg-no-repeat bg-[top]"
              href="https://www.apple.com/store"
              target="_blank"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
