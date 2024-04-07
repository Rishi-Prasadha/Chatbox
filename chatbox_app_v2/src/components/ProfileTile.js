import { useMemo,useState } from "react";
import ContactInfoPopout from "./ContactInfoPopout";
import Modal from "./modal";
const ProfileTile = ({
org,
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
  const frameDiv1Style = useMemo(() => {
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
    <>
    <div className="h-[302px] w-48 rounded-3xs bg-neutral-10 box-border flex flex-col items-center justify-start py-[15px] px-5 gap-[30px] text-left text-sm text-black font-text-l-medium border-[1px] border-solid border-power-black-power-black-50 mq450:h-[302px]">
      <div className="self-stretch flex flex-col items-center justify-start gap-[10px]">
        <img
          className="w-[120px] h-[120px] rounded-81xl overflow-hidden shrink-0 object-cover"
          loading="lazy"
          alt=""
          src={org?.img}
        />
        <div
          className="self-stretch flex flex-col items-center justify-start"
          style={frameDiv1Style}
        >
          <div
            className="self-stretch flex flex-row items-center justify-center"
            style={personaNamesStyle}
          >
            <div
              className="h-5 w-[79px] relative leading-[20px] font-semibold inline-block"
              style={bornGlobalStyle}
            >
              {org?.name}
            </div>
          </div>
        </div>
      </div>
      <div
        className="rounded-3xl bg-adventure-blue-adventure-blue-50 flex flex-row items-center justify-center py-2 px-5 gap-[4px] text-base text-adventure-blue-adventure-blue-500"
        style={buttonStyle}
      >
        <img
          className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
          alt=""
          src={solidemojiHappy}
        />
        <div
          className="h-6 w-[93px] relative tracking-[-0.01em] leading-[24px] font-medium inline-block"
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

        
    </>

  );
};

export default ProfileTile;
