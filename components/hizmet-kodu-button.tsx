import type { NextPage } from "next";
import { useMemo } from "react";
import CSS, { Property } from "csstype";

type HizmetKoduButtonType = {
  serviceCode?: string;

  /** Style props */
  hizmetKoduButtonPosition?: Property.Position;
  hizmetKoduButtonBorder?: Property.Border;
  hizmetKoduButtonJustifyContent?: Property.JustifyContent;
  hizmetKoduButtonWidth?: Property.Width;
  hizmetKoduButtonTop?: Property.Top;
  hizmetKoduButtonRight?: Property.Right;
  hizmetKoduButtonLeft?: Property.Left;
  hizmetKoduFontSize?: Property.FontSize;
  hizmetKoduFontWeight?: Property.FontWeight;
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
  const hizmetKoduButtonStyle: CSS.Properties = useMemo(() => {
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

  const hizmetKoduStyle: CSS.Properties = useMemo(() => {
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
