const TextArea = ({ language24px, website, websiteLink }) => {
  return (
    <div className="self-stretch rounded-3xs flex flex-col items-start justify-start gap-[4px] max-w-full shrink-0 text-left text-xs text-power-black-power-black-300 font-text-l-medium">
      <div className="flex flex-row items-start justify-start gap-[4px]">
        <img
          className="h-6 w-6 relative object-cover min-h-[24px]"
          loading="lazy"
          alt=""
          src={language24px}
        />
        <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
          <div className="w-[47px] h-[18px] relative leading-[18px] font-medium inline-block">
            {website}
          </div>
        </div>
      </div>
      <div className="self-stretch rounded-lg bg-neutral-601 box-border overflow-hidden flex flex-row items-start justify-start py-1.5 px-[19px] max-w-full text-sm text-adventure-blue-adventure-blue-700 border-[1px] border-solid border-neutral-100">
        <div className="h-5 flex-1 relative tracking-[-0.01em] leading-[20px] font-medium inline-block max-w-full">
          {websiteLink}
        </div>
      </div>
      <div className="self-stretch relative leading-[18px] text-neutral-60 hidden">
        Text helper
      </div>
    </div>
  );
};

export default TextArea;
