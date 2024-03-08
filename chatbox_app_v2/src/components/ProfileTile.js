import { useMemo } from "react";

const ProfileTile = ({
  personaImage,
  bornGlobal,
  solidemojiHappy,
  solidemojiHappy1,
  propHeight,
  propFlex,
  propAlignSelf,
  propWidth,
  propWidth1,
  propHeight1,
  propAlignSelf1,
  propFlex1,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const personaNamesStyle = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  const bornGlobalStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propAlignSelf, propWidth]);

  const buttonStyle = useMemo(() => {
    return {
      width: propWidth1,
      height: propHeight1,
    };
  }, [propWidth1, propHeight1]);

  const button1Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
      flex: propFlex1,
    };
  }, [propAlignSelf1, propFlex1]);

  return (
    <div className="h-[302px] w-48 rounded-3xs bg-neutral-10 box-border flex flex-col items-center justify-start py-[15px] px-5 gap-[30px] text-left text-sm text-black font-text-m-medium border-[1px] border-solid border-power-black-power-black-50 mq725:h-[302px]">
      <div className="self-stretch flex flex-col items-center justify-start gap-[10px]">
        <img
          className="w-[120px] h-[120px] rounded-81xl overflow-hidden shrink-0 object-cover"
          loading="lazy"
          alt=""
          src={personaImage}
        />
        <div
          className="self-stretch flex flex-col items-center justify-start"
          style={frameDivStyle}
        >
          <div
            className="self-stretch flex flex-row items-center justify-center"
            style={personaNamesStyle}
          >
            <div
              className="h-5 w-[83px] relative leading-[20px] font-semibold inline-block"
              style={bornGlobalStyle}
            >
              {bornGlobal}
            </div>
          </div>
        </div>
      </div>
      <div
        className="rounded-3xl bg-adventure-blue-adventure-blue-50 flex flex-row items-center justify-center py-2 px-[18px] gap-[4px] text-base text-adventure-blue-100"
        style={buttonStyle}
      >
        <img
          className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
          alt=""
          src={solidemojiHappy}
        />
        <div
          className="h-6 w-24 relative tracking-[-0.01em] leading-[24px] font-medium inline-block"
          style={button1Style}
        >
          Contact Info
        </div>
        <img
          className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
          alt=""
          src={solidemojiHappy1}
        />
      </div>
    </div>
  );
};

export default ProfileTile;
