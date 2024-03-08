import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PersonaMenuAssembly from "../components/PersonaMenuAssembly";

const AccountSettings1 = () => {
  const navigate = useNavigate();

  const onMenuButtonAssemblyClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onMenuButtonAssembly1Click = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  const onMenuButtonAssembly2Click = useCallback(() => {
    navigate("/settings");
  }, [navigate]);

  const onButtonContainerClick = useCallback(() => {
    navigate("/settings");
  }, [navigate]);

  return (
    <div className="w-full relative bg-neutral-10 overflow-hidden flex flex-row items-start justify-start tracking-[normal] mq450:pl-5 mq450:pr-5 mq450:box-border">
      <PersonaMenuAssembly
        personaImage="/persona-image1@2x.png"
        homeIcon="/home-icon.svg"
        iconsocialpersonOutline24="/iconsocialperson-outline-24px.svg"
        iconactionsettings24px="/iconactionsettings-24px.svg"
        personaImage1="/persona-image-11@2x.png"
        menuFrameHeight="unset"
        menuFrameFlex="1"
        onMenuButtonAssemblyClick={onMenuButtonAssemblyClick}
        onMenuButtonAssembly1Click={onMenuButtonAssembly1Click}
        onMenuButtonAssembly2Click={onMenuButtonAssembly2Click}
      />
      <main className="flex-1 bg-whitesmoke overflow-y-auto flex flex-row items-start justify-start pt-[30px] px-0 pb-[694px] box-border relative gap-[100px] max-w-[calc(100%_-_114px)] text-left text-base text-black-text font-text-l-medium mq450:gap-[25px] mq450:max-w-full">
        <div className="h-[104px] rounded-3xs bg-neutral-10 box-border hidden flex-col items-center justify-start gap-[10px] z-[0] border-[1px] border-solid border-power-black-power-black-50">
          <div className="w-[200px] flex flex-row items-center justify-start py-2.5 px-[15px] box-border gap-[20px]">
            <div className="h-[30px] w-[30px] flex flex-col items-center justify-center">
              <img
                className="w-[19.5px] h-5 relative"
                alt=""
                src="/iconactionsettings-24px.svg"
              />
            </div>
            <div className="h-6 flex flex-row items-center justify-start">
              <div className="self-stretch w-[63px] relative tracking-[-0.01em] leading-[24px] font-medium inline-block">
                Settings
              </div>
            </div>
          </div>
          <div className="w-[200px] flex-1 flex flex-row items-center justify-start py-2.5 pr-[49px] pl-[15px] box-border">
            <div className="self-stretch flex-1 flex flex-row items-center justify-start">
              <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[24px] font-medium">
                Change Password
              </div>
            </div>
          </div>
        </div>
        <div className="my-0 mx-[!important] absolute top-[27px] left-[10px] rounded-3xs bg-neutral-10 hidden flex-col items-center justify-start py-2.5 px-[9px] gap-[10px] z-[1] text-black border-[1px] border-solid border-power-black-power-black-50">
          <div className="w-[218px] flex flex-row items-center justify-start gap-[20px]">
            <div className="flex flex-row items-start justify-start">
              <div className="h-12 w-12 rounded-3xs bg-neutral-10 box-border flex flex-row items-center justify-center border-[0.5px] border-solid border-power-black-power-black-100">
                <div className="h-10 w-10 rounded-81xl bg-young-teal-young-teal-500 overflow-hidden shrink-0" />
              </div>
            </div>
            <div className="h-[22px] flex-1 flex flex-row items-center justify-start">
              <div className="self-stretch flex flex-row items-center justify-start py-0 pr-5 pl-0">
                <div className="self-stretch w-[97px] relative tracking-[-0.01em] leading-[22px] font-semibold inline-block overflow-hidden text-ellipsis whitespace-nowrap">
                  Profile Name
                </div>
              </div>
            </div>
          </div>
          <div className="w-[218px] flex flex-row items-center justify-start gap-[20px]">
            <div className="flex flex-row items-start justify-start">
              <div className="h-12 w-12 rounded-3xs bg-neutral-10 box-border flex flex-row items-center justify-center border-[0.5px] border-solid border-power-black-power-black-100">
                <div className="h-10 w-10 rounded-81xl bg-young-teal-young-teal-500 overflow-hidden shrink-0" />
              </div>
            </div>
            <div className="h-[22px] flex-1 flex flex-row items-center justify-start">
              <div className="self-stretch flex flex-row items-center justify-start py-0 pr-5 pl-0">
                <div className="self-stretch w-[97px] relative tracking-[-0.01em] leading-[22px] font-semibold inline-block overflow-hidden text-ellipsis whitespace-nowrap">
                  Profile Name
                </div>
              </div>
            </div>
          </div>
          <div className="w-[218px] flex flex-row items-center justify-start gap-[20px]">
            <div className="flex flex-row items-start justify-start">
              <div className="h-12 w-12 rounded-3xs bg-neutral-10 box-border flex flex-row items-center justify-center border-[0.5px] border-solid border-power-black-power-black-100">
                <div className="h-10 w-10 rounded-81xl bg-young-teal-young-teal-500 overflow-hidden shrink-0" />
              </div>
            </div>
            <div className="h-[22px] flex-1 flex flex-row items-center justify-start">
              <div className="self-stretch flex flex-row items-center justify-start py-0 pr-5 pl-0">
                <div className="self-stretch w-[97px] relative tracking-[-0.01em] leading-[22px] font-semibold inline-block overflow-hidden text-ellipsis whitespace-nowrap">
                  Profile Name
                </div>
              </div>
            </div>
          </div>
          <div className="w-[218px] flex flex-row items-center justify-start gap-[20px]">
            <div className="flex flex-row items-start justify-start">
              <div className="h-12 w-12 rounded-3xs bg-neutral-10 box-border flex flex-row items-center justify-center border-[0.5px] border-solid border-power-black-power-black-100">
                <div className="h-10 w-10 rounded-81xl bg-young-teal-young-teal-500 overflow-hidden shrink-0" />
              </div>
            </div>
            <div className="h-[22px] flex-1 flex flex-row items-center justify-start">
              <div className="self-stretch flex flex-row items-center justify-start py-0 pr-5 pl-0">
                <div className="self-stretch w-[97px] relative tracking-[-0.01em] leading-[22px] font-semibold inline-block overflow-hidden text-ellipsis whitespace-nowrap">
                  Profile Name
                </div>
              </div>
            </div>
          </div>
          <div className="w-[218px] flex flex-row items-center justify-start gap-[20px]">
            <div className="flex flex-row items-start justify-start">
              <div className="h-12 w-12 rounded-3xs bg-neutral-10 box-border flex flex-row items-center justify-center border-[0.5px] border-solid border-power-black-power-black-100">
                <div className="h-10 w-10 rounded-81xl bg-young-teal-young-teal-500 overflow-hidden shrink-0" />
              </div>
            </div>
            <div className="h-[22px] flex-1 flex flex-row items-center justify-start">
              <div className="self-stretch flex flex-row items-center justify-start py-0 pr-5 pl-0">
                <div className="self-stretch w-[97px] relative tracking-[-0.01em] leading-[22px] font-semibold inline-block overflow-hidden text-ellipsis whitespace-nowrap">
                  Profile Name
                </div>
              </div>
            </div>
          </div>
          <div className="w-[218px] flex flex-row items-center justify-start py-0 px-[9px] box-border gap-[10px]">
            <img
              className="h-10 w-10 relative rounded-81xl"
              alt=""
              src="/button.svg"
            />
            <div className="h-[22px] flex-1 flex flex-row items-center justify-start">
              <div className="self-stretch flex-1 flex flex-row items-center justify-start">
                <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[22px] font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                  Add an Organization
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="rounded-lg flex flex-row items-start justify-start py-1.5 px-5 gap-[4px] cursor-pointer text-adventure-blue-adventure-blue-500"
          onClick={onButtonContainerClick}
        >
          <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
            <img
              className="w-4 h-4 relative"
              loading="lazy"
              alt=""
              src="/chevron-left-24px.svg"
            />
          </div>
          <div className="h-6 w-[38px] relative leading-[24px] font-medium inline-block">
            Back
          </div>
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
            alt=""
            src="/solidemojihappy.svg"
          />
        </div>
        <section className="h-[300px] w-[800px] rounded-3xs bg-neutral-10 overflow-hidden shrink-0 flex flex-col items-center justify-between py-[25px] px-0 box-border max-w-full text-center text-5xl text-black font-text-l-medium">
          <div className="self-stretch flex flex-row items-center justify-center py-[50px] px-[30px] box-border max-w-full shrink-0">
            <h3 className="m-0 h-[102px] flex-1 relative text-inherit tracking-[-0.02em] leading-[34px] font-semibold font-inherit whitespace-pre-wrap inline-block max-w-full">
              <p className="m-0">
                <span className="text-black">{`You are about to `}</span>
                <span className="text-energy-red-energy-red-500">DELETE</span>
                <span>{` this space.  `}</span>
              </p>
              <p className="m-0">{`Are you sure you want to continue? `}</p>
              <p className="m-0">
                <span>{`This action can `}</span>
                <span className="text-energy-red-energy-red-500">NOT</span>
                <span className="text-black"> be undone.</span>
              </p>
            </h3>
          </div>
          <div className="self-stretch flex flex-row items-start justify-between py-0 px-[30px] gap-[20px] text-left text-base text-adventure-blue-adventure-blue-500">
            <div className="h-10 rounded-lg flex flex-row items-center justify-center py-2 px-5 box-border gap-[4px]">
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                alt=""
                src="/solidemojihappy.svg"
              />
              <div className="h-6 w-[53px] relative leading-[24px] font-medium inline-block">
                Cancel
              </div>
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                alt=""
                src="/solidemojihappy.svg"
              />
            </div>
            <button className="cursor-pointer [border:none] py-3 px-5 bg-energy-red-energy-red-500 h-12 rounded-3xl flex flex-row items-center justify-center box-border gap-[4px]">
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                alt=""
                src="/solidemojihappy.svg"
              />
              <div className="h-6 w-[102px] relative text-base leading-[24px] font-medium font-text-l-medium text-neutral-neutral-100 text-left inline-block">
                Delete Space
              </div>
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                alt=""
                src="/solidemojihappy.svg"
              />
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AccountSettings1;
