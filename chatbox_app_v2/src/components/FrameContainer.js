const FrameContainer = ({
  chevronLeft24px,
  solidemojiHappy,
  onButtonContainerClick,
}) => {
  return (
    <div className="flex flex-col items-start justify-start pt-10 px-0 pb-0 text-left text-base text-adventure-blue-adventure-blue-500 font-text-l-medium">
      <div
        className="rounded-lg flex flex-row items-center justify-start py-1.5 px-5 gap-[4px] cursor-pointer"
        onClick={onButtonContainerClick}
      >
        <img
          className="h-4 w-4 relative"
          loading="lazy"
          alt=""
          src={chevronLeft24px}
        />
        <div className="h-6 w-[38px] relative leading-[24px] font-medium inline-block">
          Back
        </div>
        <img
          className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
          alt=""
          src={solidemojiHappy}
        />
      </div>
    </div>
  );
};

export default FrameContainer;
