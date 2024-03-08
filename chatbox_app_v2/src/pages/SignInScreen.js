import FrameComponent2 from "../components/FrameComponent2";

const SignInScreen = () => {
  return (
    <div className="w-full relative bg-neutral-80 overflow-hidden flex flex-row items-start justify-start pt-[103px] pb-[180px] pr-[140px] pl-[190px] box-border gap-[110px] tracking-[normal] text-left text-base text-adventure-blue-adventure-blue-500 font-text-l-medium mq450:gap-[55px] mq450:pl-[95px] mq450:pr-[70px] mq450:box-border">
      <div className="w-[200px] flex flex-col items-start justify-start pt-[273px] px-0 pb-0 box-border mq450:hidden">
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
      <div className="h-10 w-[734px] hidden flex-row items-start justify-between gap-[17px] max-w-full">
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
      <div className="flex-1 rounded-xs-8 bg-neutral-10 box-border overflow-hidden flex flex-col items-center justify-start pt-[60px] px-5 pb-[100px] gap-[40px] max-w-[calc(100%_-_310px)] text-center text-9xl-3 text-black border-[1px] border-solid border-mediumslateblue mq450:pt-[39px] mq450:pb-[65px] mq450:box-border mq450:max-w-full">
        <div className="w-[386px] h-[41px] relative tracking-[-0.02em] leading-[40.11px] font-semibold inline-block max-w-full">
          Sign in to your Guzo account.
        </div>
        <div className="w-[386px] flex flex-row items-start justify-start py-0 pr-[35px] pl-[35.5px] box-border max-w-full">
          <FrameComponent2 />
        </div>
      </div>
    </div>
  );
};

export default SignInScreen;
