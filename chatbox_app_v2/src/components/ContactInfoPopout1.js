import { useState } from "react";
import NameAreaInput from "./NameAreaInput";

const ContactInfoPopout1 = () => {
  const [guzoTextValue, setGuzoTextValue] = useState("");
  const [wwwguzoioTextValue, setWwwguzoioTextValue] = useState("");
  const [wwwlinkedincominguzoTextValue, setWwwlinkedincominguzoTextValue] =
    useState("");
  return (
    <section className="w-[800px] h-[908px] rounded-3xs bg-neutral-10 overflow-y-auto shrink-0 flex flex-col items-center justify-start pt-[25px] px-0 pb-0 box-border gap-[20px] max-w-full text-left text-xl text-black font-text-m-medium">
      <div className="mb-[-495px] w-[780px] flex flex-col items-center justify-start py-0 px-5 box-border max-w-full shrink-0">
        <div className="self-stretch flex flex-row items-start justify-start max-w-full">
          <div className="flex-1 flex flex-col items-start justify-center max-w-full">
            <div className="flex flex-col items-start justify-start">
              <div className="flex flex-row items-center justify-center">
                <h3 className="m-0 h-7 w-[61px] relative text-inherit tracking-[-0.02em] leading-[28px] font-semibold font-inherit inline-block mq975:text-base mq975:leading-[22px]">
                  Profile
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[700px] flex flex-col items-center justify-start pt-0 px-0 pb-5 box-border gap-[20px] max-w-full text-center text-xs">
          <div className="rounded-81xl bg-whitesmoke-100 overflow-hidden flex flex-row items-center justify-center py-[61px] px-0">
            <div className="w-[150px] flex flex-col items-start justify-end py-0 px-0 box-border">
              <div className="w-[200px] h-7 relative tracking-[-0.01em] leading-[15px] inline-block">
                <p className="m-0">Upload Profile Photo*</p>
                <p className="m-0 text-darkslategray">
                  <i className="font-light">(Acceptable: jpeg, png)</i>
                </p>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start max-w-full text-left text-xl">
            <div className="flex-1 flex flex-col items-start justify-center max-w-full">
              <div className="flex flex-col items-start justify-start">
                <div className="flex flex-row items-center justify-center">
                  <h3 className="m-0 h-7 w-[166px] relative text-inherit tracking-[-0.02em] leading-[28px] font-semibold font-inherit inline-block mq975:text-base mq975:leading-[22px]">
                    Organization Info
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[700px] flex flex-row items-start justify-start pt-0 px-0 pb-5 box-border max-w-full text-sm text-neutral-90">
          <div className="flex-1 flex flex-col items-start justify-start py-0 px-[30px] box-border gap-[20px] max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
              <div className="self-stretch h-5 relative tracking-[-0.01em] leading-[20px] font-medium inline-block">
                Organization Name
              </div>
              <div className="self-stretch rounded-lg bg-neutral-10 overflow-hidden flex flex-row items-center justify-start p-1.5 border-[1px] border-solid border-power-black-power-black-50">
                <input
                  className="[border:none] [outline:none] font-medium font-text-m-medium text-sm bg-[transparent] h-5 w-52 relative tracking-[-0.01em] leading-[20px] text-power-black-power-black-500 text-left inline-block shrink-0"
                  placeholder="Guzo"
                  type="text"
                  value={guzoTextValue}
                  onChange={(event) => setGuzoTextValue(event.target.value)}
                />
              </div>
              <div className="self-stretch relative text-xs leading-[18px] text-neutral-60 hidden" />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
              <div className="self-stretch h-5 relative tracking-[-0.01em] leading-[20px] font-medium inline-block">
                Website
              </div>
              <div className="self-stretch rounded-lg bg-neutral-10 overflow-hidden flex flex-row items-center justify-start p-1.5 border-[1px] border-solid border-power-black-power-black-50">
                <input
                  className="[border:none] [outline:none] font-medium font-text-m-medium text-sm bg-[transparent] h-5 w-52 relative tracking-[-0.01em] leading-[20px] text-power-black-power-black-500 text-left inline-block shrink-0"
                  placeholder="www.guzo.io"
                  type="text"
                  value={wwwguzoioTextValue}
                  onChange={(event) =>
                    setWwwguzoioTextValue(event.target.value)
                  }
                />
              </div>
              <div className="self-stretch relative text-xs leading-[18px] text-neutral-60 hidden" />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[20px] text-xs text-neutral-60">
              <div className="self-stretch relative leading-[18px] hidden" />
              <div className="self-stretch flex flex-col items-start justify-start gap-[4px] text-sm text-neutral-90">
                <div className="self-stretch h-5 relative tracking-[-0.01em] leading-[20px] font-medium inline-block">
                  LinkedIn
                </div>
                <div className="self-stretch rounded-lg bg-neutral-10 overflow-hidden flex flex-row items-center justify-start p-1.5 border-[1px] border-solid border-power-black-power-black-50">
                  <input
                    className="[border:none] [outline:none] font-medium font-text-m-medium text-sm bg-[transparent] h-5 w-52 relative tracking-[-0.01em] leading-[20px] text-left inline-block shrink-0"
                    placeholder="www.linkedin.com/in/guzo "
                    type="text"
                    value={wwwlinkedincominguzoTextValue}
                    onChange={(event) =>
                      setWwwlinkedincominguzoTextValue(event.target.value)
                    }
                  />
                </div>
                <div className="self-stretch relative text-xs leading-[18px] text-neutral-60 hidden" />
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[20px] text-xs text-neutral-60">
              <div className="self-stretch relative leading-[18px] hidden" />
              <div className="self-stretch flex flex-col items-start justify-start gap-[4px] text-sm text-neutral-90">
                <div className="self-stretch h-5 relative tracking-[-0.01em] leading-[20px] font-medium inline-block">
                  Address
                </div>
                <div className="self-stretch h-24 rounded-lg bg-neutral-10 box-border overflow-hidden shrink-0 flex flex-row items-center justify-start p-1.5 text-power-black-power-black-500 border-[1px] border-solid border-power-black-power-black-50">
                  <div className="h-10 w-52 relative tracking-[-0.01em] leading-[20px] font-medium inline-block shrink-0">
                    <p className="m-0">777 Main St.</p>
                    <p className="m-0">Houston, TX 77002</p>
                  </div>
                </div>
                <div className="self-stretch relative text-xs leading-[18px] text-neutral-60 hidden" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[700px] flex flex-row items-start justify-start pt-0 px-0 pb-5 box-border max-w-full">
          <div className="flex-1 flex flex-row items-start justify-start max-w-full">
            <div className="flex-1 flex flex-col items-start justify-center max-w-full">
              <div className="flex flex-col items-start justify-start">
                <div className="flex flex-row items-center justify-center">
                  <h3 className="m-0 h-7 w-[97px] relative text-inherit tracking-[-0.02em] leading-[28px] font-semibold font-inherit inline-block mq975:text-base mq975:leading-[22px]">
                    The Team
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <NameAreaInput
          gordonTaylor="Gordon Taylor"
          cEO="CEO"
          solidemojiHappy="/solidemojihappy.svg"
          solidemojiHappy1="/solidemojihappy.svg"
        />
      </div>
      <NameAreaInput
        gordonTaylor="Rishi Prasadha"
        cEO="Chief Cool Officer"
        solidemojiHappy="/solidemojihappy.svg"
        solidemojiHappy1="/solidemojihappy.svg"
        propMarginBottom="-1231px"
        propHeight="20px"
        propHeight1="150px"
        propAlignSelf="stretch"
        propFlex="1"
        propHeight2="20px"
      />
      <div className="mt-[-1291px] mb-[-1291px] w-[148px] h-10 rounded-3xl bg-adventure-blue-adventure-blue-50 shrink-0 flex flex-row items-center justify-center p-2 box-border gap-[4px] text-base text-adventure-blue-100">
        <img
          className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
          alt=""
          src="/solidemojihappy.svg"
        />
        <div className="self-stretch w-[108px] relative tracking-[-0.01em] leading-[24px] font-medium inline-block">
          Add a Contact
        </div>
        <img
          className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
          alt=""
          src="/solidemojihappy.svg"
        />
      </div>
    </section>
  );
};

export default ContactInfoPopout1;
