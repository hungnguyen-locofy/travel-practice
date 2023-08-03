import type { NextPage } from "next";
import FormSearch from "./form-search";
import TopCategoriesContainer from "./top-categories-container";

const TopBody: NextPage = () => {
  return (
    <div className="self-stretch h-[739px] overflow-hidden shrink-0 flex flex-col py-10 px-[100px] box-border items-center justify-start gap-[40px] text-left text-53xl text-white font-helvetica md:pl-20 md:pr-20 md:box-border sm:h-auto sm:gap-[0px] sm:p-5 sm:box-border">
      <div className="self-stretch flex flex-row flex-wrap items-center justify-start">
        <b className="flex-1 relative lg:text-53xl md:text-25xl sm:text-25xl">
          <p className="m-0">{`The whole world `}</p>
          <p className="m-0">awaits.</p>
        </b>
      </div>
      <FormSearch />
      <TopCategoriesContainer />
    </div>
  );
};

export default TopBody;
