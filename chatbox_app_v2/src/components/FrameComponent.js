import { useMemo } from "react";

const FrameComponent = ({
  image2,
  signUpWithGoogle,
  propWidth,
  signUpWithDisplay,
  onFrameContainer1Click,
}) => {
  const image2IconStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const signUpWithStyle = useMemo(() => {
    return {
      display: signUpWithDisplay,
    };
  }, [signUpWithDisplay]);

  return (
    <div
      className="self-stretch rounded-lg bg-neutral-10 flex flex-col items-center justify-center py-[19px] px-[21px] text-center text-base text-gray-100 font-text-l-medium border-[1px] border-solid border-lightgray"
      onClick={onFrameContainer1Click}
    >
      <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[23px] pl-0 gap-[20px]">
        <img
          className="h-[21px] w-[21px] relative object-cover"
          alt=""
          src={image2}
          style={image2IconStyle}
        />
        <div
          className="h-6 flex-1 relative tracking-[-0.01em] leading-[24px] font-medium inline-block"
          style={signUpWithStyle}
        >
          {signUpWithGoogle}
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
