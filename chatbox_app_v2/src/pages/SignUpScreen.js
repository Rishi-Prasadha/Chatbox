import FrameComponent1 from "../components/FrameComponent1";

const SignUpScreen = () => {
  return (
    <div className="w-full relative bg-neutral-80 overflow-hidden flex flex-row flex-wrap items-start justify-start pt-[140px] pb-[154px] pr-[140px] pl-[190px] box-border gap-[110px] tracking-[normal] text-center text-9xl-3 text-black font-text-l-medium mq450:gap-[55px] mq450:pl-[95px] mq450:pr-[70px] mq450:box-border">
      <div className="w-[200px] flex flex-col items-start justify-start pt-[236px] px-0 pb-0 box-border">
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
      <div className="flex-1 rounded-xs-8 bg-neutral-10 box-border overflow-hidden flex flex-col items-center justify-start py-[60px] px-[50px] min-w-[520px] max-w-full border-[1px] border-solid border-mediumslateblue mq450:py-[39px] mq450:px-[25px] mq450:box-border mq450:min-w-full">
        <div className="w-[249px] flex flex-col items-center justify-center">
          <div className="self-stretch h-[41px] relative tracking-[-0.02em] leading-[40.11px] font-semibold inline-block">
            Sign up with Email.
          </div>
        </div>
        <FrameComponent1 />
      </div>
      <div className="h-10 w-[734px] hidden flex-row items-start justify-between gap-[17px] max-w-full z-[2] text-left text-base text-adventure-blue-adventure-blue-500">
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

export default SignUpScreen;
