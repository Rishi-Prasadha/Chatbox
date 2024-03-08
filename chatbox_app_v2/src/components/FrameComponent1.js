import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const FrameComponent1 = () => {
  const [placeholderTextValue, setPlaceholderTextValue] = useState("");
  const [placeholderText1Value, setPlaceholderText1Value] = useState("");
  const [placeholderText2Value, setPlaceholderText2Value] = useState("");
  const [placeholderText3Value, setPlaceholderText3Value] = useState("");
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/-profile");
  }, [navigate]);

  return (
    <form className="m-0 self-stretch flex flex-col items-center justify-start py-10 px-0 box-border gap-[30px] max-w-full">
      <div className="self-stretch flex flex-col items-center justify-start gap-[20px] max-w-full">
        <div className="w-[697px] overflow-x-auto flex flex-row items-start justify-center gap-[30px] max-w-full">
          <div className="w-[333.5px] rounded-3xs shrink-0 flex flex-col items-start justify-center gap-[4px]">
            <div className="self-stretch h-[18px] relative text-xs leading-[18px] font-medium font-text-l-medium text-power-black-power-black-300 text-left inline-block">
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
            <div className="self-stretch relative text-xs leading-[18px] font-text-l-medium text-neutral-60 text-left hidden">
              Text helper
            </div>
          </div>
          <div className="w-[333.5px] rounded-3xs shrink-0 flex flex-col items-start justify-center gap-[4px]">
            <div className="self-stretch h-[18px] relative text-xs leading-[18px] font-medium font-text-l-medium text-power-black-power-black-300 text-left inline-block">
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
            <div className="self-stretch relative text-xs leading-[18px] font-text-l-medium text-neutral-60 text-left hidden">
              Text helper
            </div>
          </div>
        </div>
        <div className="self-stretch rounded-3xs flex flex-col items-start justify-center gap-[4px]">
          <div className="self-stretch h-[18px] relative text-xs leading-[18px] font-medium font-text-l-medium text-power-black-power-black-300 text-left inline-block">
            Email
          </div>
          <div className="self-stretch rounded-lg bg-neutral-601 overflow-hidden flex flex-row items-center justify-start p-1.5 border-[1px] border-solid border-neutral-100">
            <input
              className="[border:none] [outline:none] font-medium font-text-l-medium text-sm bg-[transparent] h-5 w-52 relative tracking-[-0.01em] leading-[20px] text-adventure-blue-adventure-blue-700 text-left inline-block shrink-0 p-0"
              placeholder="Email"
              type="text"
              value={placeholderText2Value}
              onChange={(event) => setPlaceholderText2Value(event.target.value)}
            />
          </div>
          <div className="self-stretch relative text-xs leading-[18px] font-text-l-medium text-neutral-60 text-left hidden">
            Text helper
          </div>
        </div>
        <div className="self-stretch rounded-3xs flex flex-col items-start justify-center gap-[4px]">
          <div className="self-stretch h-[18px] relative text-xs leading-[18px] font-medium font-text-l-medium text-power-black-power-black-300 text-left inline-block">
            Password
          </div>
          <div className="self-stretch rounded-lg bg-neutral-601 overflow-hidden flex flex-row items-center justify-start p-1.5 border-[1px] border-solid border-neutral-100">
            <input
              className="[border:none] [outline:none] font-medium font-text-l-medium text-sm bg-[transparent] h-5 w-52 relative tracking-[-0.01em] leading-[20px] text-adventure-blue-adventure-blue-700 text-left inline-block shrink-0 p-0"
              placeholder="Password"
              type="text"
              value={placeholderText3Value}
              onChange={(event) => setPlaceholderText3Value(event.target.value)}
            />
          </div>
          <div className="self-stretch relative text-xs leading-[18px] font-text-l-medium text-neutral-60 text-left hidden">
            Text helper
          </div>
        </div>
      </div>
      <div className="self-stretch h-[143px] box-border flex flex-col items-center justify-start gap-[17px] border-b-[1px] border-solid border-black">
        <div className="w-[300px] h-9 relative text-xs leading-[18px] font-text-l-medium text-center inline-block">
          <span className="text-black">{`By signing up, you agree to `}</span>
          <span className="text-adventure-blue-adventure-blue-5001">
            Terms of Service
          </span>
          <span className="text-black">{`, `}</span>
          <span className="text-adventure-blue-adventure-blue-5001">
            Privacy Policy
          </span>
          <span className="text-black">{`, and `}</span>
          <span className="text-adventure-blue-adventure-blue-5001">
            Cookie Policy
          </span>
          <span className="text-gray-300">.</span>
        </div>
        <button
          className="cursor-pointer [border:none] py-2 px-5 bg-adventure-blue-adventure-blue-50 w-[200px] rounded-3xl flex flex-row items-center justify-center box-border gap-[4px]"
          onClick={onButtonClick}
        >
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
            alt=""
            src="/solidemojihappy.svg"
          />
          <div className="h-6 w-[95px] relative text-base tracking-[-0.01em] leading-[24px] font-medium font-text-l-medium text-adventure-blue-adventure-blue-500 text-left inline-block">{`Agree & Join`}</div>
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
            alt=""
            src="/solidemojihappy.svg"
          />
        </button>
      </div>
      <div className="w-[316px] flex flex-col items-center justify-start py-[30px] px-0 box-border">
        <div className="self-stretch flex flex-col items-center justify-center">
          <div className="w-[285px] h-6 relative text-base tracking-[-0.01em] leading-[24px] font-semibold font-text-l-medium text-center inline-block">
            <span className="text-black">{`Already have a Guzo account? `}</span>
            <span className="text-adventure-blue-adventure-blue-500">
              Sign in
            </span>
          </div>
        </div>
      </div>
    </form>
  );
};

export default FrameComponent1;
