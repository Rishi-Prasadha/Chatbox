import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent from "../components/FrameComponent";

const SignUpScreen1 = () => {
  const navigate = useNavigate();

  const onFrameContainer1Click = useCallback(() => {
    navigate("/signup-screen");
  }, [navigate]);

  const onFrameContainerClick = useCallback(() => {
    navigate("/sign-in-screen");
  }, [navigate]);

  return (
    <div className="w-full relative bg-neutral-80 overflow-hidden flex flex-row flex-wrap items-start justify-start pt-[262px] pb-[270px] pr-[140px] pl-[190px] box-border gap-[110px] tracking-[normal] text-center text-5xl text-black font-text-l-medium mq450:gap-[55px] mq450:pl-[95px] mq450:pr-[70px] mq450:box-border">
      <div className="w-[200px] flex flex-col items-start justify-start pt-[114px] px-0 pb-0 box-border">
        <div className="self-stretch flex flex-col items-start justify-start gap-[1px]">
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-[62px]">
            <img
              className="h-[135px] flex-1 relative max-w-full overflow-hidden object-cover"
              loading="lazy"
              alt=""
              src="/logo--guzo-2@2x.png"
            />
          </div>
          <img
            className="self-stretch h-[74.3px] relative max-w-full overflow-hidden shrink-0 object-cover"
            loading="lazy"
            alt=""
            src="/guzo-1-11@2x.png"
          />
        </div>
      </div>
      <div className="flex-1 rounded-xs-8 bg-neutral-10 box-border overflow-hidden flex flex-col items-center justify-start py-[60px] px-5 min-w-[520px] max-w-full border-[1px] border-solid border-mediumslateblue mq450:min-w-full">
        <div className="w-[199px] flex flex-col items-center justify-center">
          <h3 className="m-0 self-stretch h-[34px] relative text-inherit leading-[34px] font-semibold font-inherit inline-block">
            Sign up for Guzo.
          </h3>
        </div>
        <div className="w-[697px] box-border hidden flex-col items-center justify-start py-10 px-0 gap-[10px] max-w-full text-left text-xs text-power-black-power-black-300 border-b-[2px] border-solid border-power-black-power-black-200">
          <div className="self-stretch rounded-3xs hidden flex-col items-start justify-center gap-[4px] min-h-[67px]">
            <div className="self-stretch h-[18px] relative leading-[18px] font-medium inline-block">
              Email
            </div>
            <div className="self-stretch rounded-lg bg-neutral-601 overflow-hidden flex flex-row items-center justify-start p-1.5 text-sm text-power-black-power-black-200 border-[1px] border-solid border-neutral-100">
              <div className="h-5 w-52 relative tracking-[-0.01em] leading-[20px] font-medium inline-block shrink-0">
                Email
              </div>
            </div>
            <div className="self-stretch relative leading-[18px] text-neutral-60 hidden">
              Text helper
            </div>
          </div>
          <div className="self-stretch rounded-3xs hidden flex-col items-start justify-center gap-[4px] min-h-[67px]">
            <div className="self-stretch h-[18px] relative leading-[18px] font-medium inline-block">
              Password
            </div>
            <div className="self-stretch rounded-lg bg-neutral-601 overflow-hidden flex flex-row items-center justify-start p-1.5 text-sm text-power-black-power-black-200 border-[1px] border-solid border-neutral-100">
              <div className="h-5 w-52 relative tracking-[-0.01em] leading-[20px] font-medium inline-block shrink-0">
                Password
              </div>
            </div>
            <div className="self-stretch relative leading-[18px] text-neutral-60 hidden">
              Text helper
            </div>
          </div>
          <div className="self-stretch rounded-3xs flex flex-col items-start justify-center gap-[4px] min-h-[67px]">
            <div className="self-stretch h-[18px] relative leading-[18px] font-medium inline-block">
              Confirm Password
            </div>
            <div className="self-stretch rounded-lg bg-neutral-601 overflow-hidden flex flex-row items-center justify-start p-1.5 text-sm text-power-black-power-black-200 border-[1px] border-solid border-neutral-100">
              <div className="h-5 w-52 relative tracking-[-0.01em] leading-[20px] font-medium inline-block shrink-0">
                Confirm Password
              </div>
            </div>
            <div className="self-stretch relative leading-[18px] text-neutral-60 hidden">
              Text helper
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-between gap-[17px] text-base text-adventure-blue-adventure-blue-500">
            <div className="h-10 w-[200px] rounded-3xl bg-adventure-blue-adventure-blue-50 flex flex-row items-center justify-center py-2 px-5 box-border gap-[4px]">
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                alt=""
                src="/solidemojihappy.svg"
              />
              <div className="self-stretch w-[57px] relative tracking-[-0.01em] leading-[24px] font-medium inline-block whitespace-nowrap">
                Sign up
              </div>
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                alt=""
                src="/solidemojihappy.svg"
              />
            </div>
          </div>
        </div>
        <div className="w-[316px] h-[214px] box-border flex flex-col items-center justify-start py-2.5 px-0 border-b-[1px] border-solid border-black">
          <div className="self-stretch flex flex-col items-start justify-start gap-[30px]">
            <FrameComponent
              image2="/image-2@2x.png"
              signUpWithGoogle="Sign up with Google"
              propWidth="21px"
              signUpWithDisplay="inline-block"
            />
            <FrameComponent
              image2="/iconcommunicationmail-outline-24px.svg"
              signUpWithGoogle="Sign up with Email"
              propWidth="26.3px"
              signUpWithDisplay="inline-block"
              onFrameContainer1Click={onFrameContainer1Click}
            />
          </div>
        </div>
        <div className="w-[316px] flex flex-col items-center justify-start py-[50px] px-0 box-border text-base">
          <div
            className="self-stretch flex flex-col items-center justify-center cursor-pointer"
            onClick={onFrameContainerClick}
          >
            <div className="w-[285px] h-6 relative tracking-[-0.01em] leading-[24px] font-semibold inline-block">
              <span>{`Already have a Guzo account? `}</span>
              <span className="text-adventure-blue-adventure-blue-500">
                Sign in
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="h-10 w-[734px] hidden flex-row items-start justify-between gap-[17px] max-w-full z-[1] text-left text-base text-adventure-blue-adventure-blue-500">
        <div className="self-stretch w-[200px] rounded-3xl bg-adventure-blue-adventure-blue-50 flex flex-row items-center justify-center py-2 px-5 box-border gap-[4px]">
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
            alt=""
            src="/solidemojihappy.svg"
          />
          <div className="self-stretch w-[42px] relative tracking-[-0.01em] leading-[24px] font-medium inline-block">
            Login
          </div>
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
            alt=""
            src="/solidemojihappy.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUpScreen1;
