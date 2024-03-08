import { useState, useMemo } from "react";

const TextArea2 = ({
  mailOutline24px,
  contactEmail,
  emailPlaceholder,
  thisEmailWillNOTBeSharedO,
  showThisEmailWill,
  propWidth,
  propFlex,
  propMinWidth,
  propAlignSelf,
  propWidth1,
}) => {
  const [emailTextValue, setEmailTextValue] = useState("");
  const emailStyle = useMemo(() => {
    return {
      width: propWidth,
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propWidth, propFlex, propMinWidth]);

  const thisEmailWillStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth1,
    };
  }, [propAlignSelf, propWidth1]);

  return (
    <div className="self-stretch rounded-3xs flex flex-col items-start justify-start gap-[4px] shrink-0 text-left text-xs text-power-black-power-black-300 font-text-l-medium">
      <div className="flex flex-row items-start justify-start gap-[4px]">
        <img
          className="h-6 w-6 relative object-cover min-h-[24px]"
          loading="lazy"
          alt=""
          src={mailOutline24px}
        />
        <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
          <div className="w-[86px] h-[18px] relative leading-[18px] font-medium inline-block">
            {contactEmail}
          </div>
        </div>
      </div>
      <div className="self-stretch rounded-lg bg-neutral-601 overflow-hidden flex flex-row items-start justify-start py-1.5 px-5 border-[1px] border-solid border-neutral-100">
        <input
          className="[border:none] [outline:none] font-medium font-text-l-medium text-sm bg-[transparent] h-5 w-52 relative tracking-[-0.01em] leading-[20px] text-adventure-blue-adventure-blue-700 text-left inline-block shrink-0 p-0"
          placeholder={emailPlaceholder}
          type="text"
          value={emailTextValue}
          onChange={(event) => setEmailTextValue(event.target.value)}
          style={emailStyle}
        />
      </div>
      {showThisEmailWill && (
        <div
          className="self-stretch h-[18px] relative leading-[18px] text-neutral-60 inline-block"
          style={thisEmailWillStyle}
        >
          {thisEmailWillNOTBeSharedO}
        </div>
      )}
    </div>
  );
};

export default TextArea2;
