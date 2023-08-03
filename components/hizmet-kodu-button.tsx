import type { NextPage } from "next";
import { useMemo, CSSProperties } from "react";

type HizmetKoduButtonType = {
  serviceCode?: string;

  /** Style props */
  hizmetKoduButtonPosition?: CSSProperties["position"];
  hizmetKoduButtonBorder?: CSSProperties["border"];
  hizmetKoduButtonJustifyContent?: CSSProperties["justifyContent"];
  hizmetKoduButtonWidth?: CSSProperties["width"];
  hizmetKoduButtonTop?: CSSProperties["top"];
  hizmetKoduButtonRight?: CSSProperties["right"];
  hizmetKoduButtonLeft?: CSSProperties["left"];
  hizmetKoduFontSize?: CSSProperties["fontSize"];
  hizmetKoduFontWeight?: CSSProperties["fontWeight"];
};

const HizmetKoduButton: NextPage<HizmetKoduButtonType> = ({
  serviceCode,
  hizmetKoduButtonPosition,
  hizmetKoduButtonBorder,
  hizmetKoduButtonJustifyContent,
  hizmetKoduButtonWidth,
  hizmetKoduButtonTop,
  hizmetKoduButtonRight,
  hizmetKoduButtonLeft,
  hizmetKoduFontSize,
  hizmetKoduFontWeight,
}) => {
  const hizmetKoduButtonStyle: CSSProperties = useMemo(() => {
    return {
      position: hizmetKoduButtonPosition,
      border: hizmetKoduButtonBorder,
      justifyContent: hizmetKoduButtonJustifyContent,
      width: hizmetKoduButtonWidth,
      top: hizmetKoduButtonTop,
      right: hizmetKoduButtonRight,
      left: hizmetKoduButtonLeft,
    };
  }, [
    hizmetKoduButtonPosition,
    hizmetKoduButtonBorder,
    hizmetKoduButtonJustifyContent,
    hizmetKoduButtonWidth,
    hizmetKoduButtonTop,
    hizmetKoduButtonRight,
    hizmetKoduButtonLeft,
  ]);

  const hizmetKoduStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: hizmetKoduFontSize,
      fontWeight: hizmetKoduFontWeight,
    };
  }, [hizmetKoduFontSize, hizmetKoduFontWeight]);

  return (
    <div
      className="relative flex flex-row py-2.5 px-[15px] items-start justify-start text-left text-7xl text-gray font-netflix-sans-medium-26 border-[1px] border-solid border-gray"
      style={hizmetKoduButtonStyle}
    >
      <div className="relative font-medium" style={hizmetKoduStyle}>
        {serviceCode}
      </div>
    </div>
  );
};

export default HizmetKoduButton;
