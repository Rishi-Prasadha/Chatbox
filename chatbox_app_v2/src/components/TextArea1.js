import { useMemo } from "react";

const TextArea1 = ({
  phone24px,
  phoneNumber,
  countryRegion,
  expandMore24px,
  textHelper,
  textHelper1,
  propBorderRadius,
  propWidth,
  propAlignSelf,
}) => {
  const expandMore24pxIconStyle = useMemo(() => {
    return {
      borderRadius: propBorderRadius,
    };
  }, [propBorderRadius]);

  const textHelperStyle = useMemo(() => {
    return {
      width: propWidth,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propAlignSelf]);

  return (
    <div className="self-stretch rounded-3xs flex flex-col items-start justify-start gap-[4px] max-w-full shrink-0 text-left text-xs text-power-black-power-black-300 font-text-l-medium">
      <div className="flex flex-row items-start justify-start gap-[4px]">
        <img
          className="h-6 w-6 relative min-h-[24px]"
          loading="lazy"
          alt=""
          src={phone24px}
        />
        <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
          <div className="w-[86px] h-[18px] relative leading-[18px] font-medium inline-block">
            {phoneNumber}
          </div>
        </div>
      </div>
      <div className="self-stretch rounded-lg bg-neutral-601 box-border overflow-hidden flex flex-row flex-wrap items-start justify-start py-1.5 px-[19px] gap-[4px] max-w-full text-sm text-adventure-blue-adventure-blue-700 border-[1px] border-solid border-neutral-100">
        <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border min-w-[409px] max-w-full">
          <div className="self-stretch h-5 relative tracking-[-0.01em] leading-[20px] font-medium inline-block">
            {countryRegion}
          </div>
        </div>
        <img
          className="h-6 w-6 relative"
          alt=""
          src={expandMore24px}
          style={expandMore24pxIconStyle}
        />
      </div>
      {!textHelper1 && (
        <div
          className="self-stretch relative leading-[18px] text-neutral-60 hidden"
          style={textHelperStyle}
        >
          {textHelper}
        </div>
      )}
    </div>
  );
};

export default TextArea1;
