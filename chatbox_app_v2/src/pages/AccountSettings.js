import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PersonaMenuAssembly from "../components/PersonaMenuAssembly";

const AccountSettings = () => {
  const [placeholderTextValue, setPlaceholderTextValue] = useState("");
  const [placeholderText1Value, setPlaceholderText1Value] = useState("");
  const [placeholderText2Value, setPlaceholderText2Value] = useState("");
  const [placeholderText3Value, setPlaceholderText3Value] = useState("");
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
      <main className="flex-1 bg-whitesmoke overflow-y-auto flex flex-row items-start justify-start pt-[30px] px-0 pb-[333px] box-border gap-[100px] max-w-[calc(100%_-_114px)] text-left text-base text-black-text font-text-l-medium mq450:gap-[25px] mq450:max-w-full">
        <div className="h-[104px] rounded-3xs bg-neutral-10 box-border hidden flex-col items-center justify-start gap-[10px] border-[1px] border-solid border-power-black-power-black-50">
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
        <div className="rounded-3xs bg-neutral-10 hidden flex-col items-center justify-start py-2.5 px-[9px] gap-[10px] text-black border-[1px] border-solid border-power-black-power-black-50">
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
        <section className="w-[800px] rounded-xs-8 bg-neutral-10 box-border overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[60px] px-[50px] pb-[100px] gap-[40px] max-w-full text-center text-9xl-3 text-black font-text-l-medium border-[1px] border-solid border-mediumslateblue mq450:pt-[39px] mq450:pb-[65px] mq450:box-border">
          <div className="self-stretch flex flex-row items-start justify-center">
            <div className="h-[41px] w-[271px] relative tracking-[-0.02em] leading-[40.11px] font-semibold inline-block">
              Account Information
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[30px] max-w-full text-xs">
            <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
              <div className="h-[150px] w-[150px] rounded-81xl bg-neutral-601 overflow-hidden shrink-0 flex flex-row items-start justify-start py-[61px] px-0 box-border">
                <div className="ml-[-25px] h-7 w-[200px] relative tracking-[-0.01em] leading-[15px] inline-block shrink-0">
                  <p className="m-0">Upload Profile Photo*</p>
                  <p className="m-0 text-darkslategray">
                    <i className="font-light">(Acceptable: jpeg, png)</i>
                  </p>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-center justify-start gap-[20px] max-w-full text-left text-power-black-power-black-300">
              <div className="self-stretch flex flex-row items-start justify-center gap-[30px] max-w-full mq450:flex-wrap">
                <div className="flex-1 rounded-3xs flex flex-col items-start justify-center gap-[4px] min-w-[216px] max-w-full">
                  <div className="self-stretch h-[18px] relative leading-[18px] font-medium inline-block">
                    First Name
                  </div>
                  <div className="self-stretch rounded-lg bg-neutral-601 overflow-hidden flex flex-row items-center justify-start p-1.5 border-[1px] border-solid border-neutral-100">
                    <input
                      className="[border:none] [outline:none] font-medium font-text-l-medium text-sm bg-[transparent] h-5 w-52 relative tracking-[-0.01em] leading-[20px] text-adventure-blue-adventure-blue-700 text-left inline-block shrink-0 p-0"
                      placeholder="First Name"
                      type="text"
                      value={placeholderTextValue}
                      onChange={(event) =>
                        setPlaceholderTextValue(event.target.value)
                      }
                    />
                  </div>
                  <div className="self-stretch relative leading-[18px] text-neutral-60 hidden">
                    Text helper
                  </div>
                </div>
                <div className="flex-1 rounded-3xs flex flex-col items-start justify-center gap-[4px] min-w-[216px] max-w-full">
                  <div className="self-stretch h-[18px] relative leading-[18px] font-medium inline-block">
                    Last Name
                  </div>
                  <div className="self-stretch rounded-lg bg-neutral-601 overflow-hidden flex flex-row items-center justify-start p-1.5 border-[1px] border-solid border-neutral-100">
                    <input
                      className="[border:none] [outline:none] font-medium font-text-l-medium text-sm bg-[transparent] h-5 w-52 relative tracking-[-0.01em] leading-[20px] text-adventure-blue-adventure-blue-700 text-left inline-block shrink-0 p-0"
                      placeholder="Last Name"
                      type="text"
                      value={placeholderText1Value}
                      onChange={(event) =>
                        setPlaceholderText1Value(event.target.value)
                      }
                    />
                  </div>
                  <div className="self-stretch relative leading-[18px] text-neutral-60 hidden">
                    Text helper
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-3xs flex flex-col items-start justify-center gap-[4px]">
                <div className="self-stretch h-[18px] relative leading-[18px] font-medium inline-block">
                  Email
                </div>
                <div className="self-stretch rounded-lg bg-neutral-601 overflow-hidden flex flex-row items-center justify-start p-1.5 border-[1px] border-solid border-neutral-100">
                  <input
                    className="[border:none] [outline:none] font-medium font-text-l-medium text-sm bg-[transparent] h-5 w-52 relative tracking-[-0.01em] leading-[20px] text-adventure-blue-adventure-blue-700 text-left inline-block shrink-0 p-0"
                    placeholder="Email"
                    type="text"
                    value={placeholderText2Value}
                    onChange={(event) =>
                      setPlaceholderText2Value(event.target.value)
                    }
                  />
                </div>
                <div className="self-stretch relative leading-[18px] text-neutral-60 hidden">
                  Text helper
                </div>
              </div>
              <div className="self-stretch rounded-3xs flex flex-col items-start justify-center gap-[4px]">
                <div className="self-stretch h-[18px] relative leading-[18px] font-medium inline-block">
                  Password
                </div>
                <div className="self-stretch rounded-lg bg-neutral-601 overflow-hidden flex flex-row items-center justify-start p-1.5 border-[1px] border-solid border-neutral-100">
                  <input
                    className="[border:none] [outline:none] font-medium font-text-l-medium text-sm bg-[transparent] h-5 w-52 relative tracking-[-0.01em] leading-[20px] text-adventure-blue-adventure-blue-700 text-left inline-block shrink-0 p-0"
                    placeholder="Password"
                    type="text"
                    value={placeholderText3Value}
                    onChange={(event) =>
                      setPlaceholderText3Value(event.target.value)
                    }
                  />
                </div>
                <div className="self-stretch relative leading-[18px] text-neutral-60 hidden">
                  Text helper
                </div>
              </div>
              <div className="self-stretch rounded-3xs flex flex-col items-start justify-center gap-[4px] text-energy-red-energy-red-600">
                <div className="self-stretch h-[18px] relative leading-[18px] font-medium inline-block">
                  Delete account
                </div>
                <div className="w-60 rounded-lg bg-neutral-601 box-border overflow-hidden hidden flex-row items-center justify-start py-1.5 pr-6 pl-1.5 text-sm text-adventure-blue-adventure-blue-700 border-[1px] border-solid border-neutral-100">
                  <div className="h-5 flex-1 relative tracking-[-0.01em] leading-[20px] font-medium inline-block">
                    Password
                  </div>
                </div>
                <div className="self-stretch relative leading-[18px] text-neutral-60 hidden">
                  Text helper
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AccountSettings;
