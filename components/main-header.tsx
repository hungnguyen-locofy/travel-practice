import type { NextPage } from "next";
import { useState, useCallback } from "react";
import DrawerMenu from "./drawer-menu";
import PortalDrawer from "./portal-drawer";

const MainHeader: NextPage = () => {
  const [isDrawerMenuOpen, setDrawerMenuOpen] = useState(false);

  const onFlightsTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='flightsText']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onPackagesTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='packagesText']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const openDrawerMenu = useCallback(() => {
    setDrawerMenuOpen(true);
  }, []);

  const closeDrawerMenu = useCallback(() => {
    setDrawerMenuOpen(false);
  }, []);

  return (
    <>
      <div className="self-stretch h-[75px] overflow-hidden shrink-0 flex flex-row p-2.5 box-border items-start justify-start text-left text-[35.42px] text-white font-helvetica md:h-auto">
        <div className="flex-1 flex flex-row items-center justify-between">
          <b className="relative">trxvl.</b>
          <nav className="m-0 flex flex-row items-center justify-end gap-[40px] text-left text-[17.71px] text-white font-helvetica sm:hidden">
            <div className="relative opacity-[0.7]">Home</div>
            <div className="relative opacity-[0.7]">Stays</div>
            <div
              className="relative opacity-[0.7] cursor-pointer"
              data-scroll-to="flightsText"
              onClick={onFlightsTextClick}
            >
              Flights
            </div>
            <div
              className="relative opacity-[0.7] cursor-pointer"
              data-scroll-to="packagesText"
              onClick={onPackagesTextClick}
            >
              Packages
            </div>
            <b className="relative opacity-[0.7]">Sign Up</b>
          </nav>
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-6 h-6 hidden lg:hidden md:hidden sm:flex"
            onClick={openDrawerMenu}
          >
            <img
              className="absolute top-[0px] left-[0px] w-6 h-6 overflow-hidden md:hidden sm:flex"
              alt=""
              src="/notification.svg"
            />
          </button>
        </div>
      </div>
      {isDrawerMenuOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Left"
          onOutsideClick={closeDrawerMenu}
        >
          <DrawerMenu onClose={closeDrawerMenu} />
        </PortalDrawer>
      )}
    </>
  );
};

export default MainHeader;
