import { useState } from "react";

const SearchInputFrame = () => {
  const [buttonValue, setButtonValue] = useState("");
  const [button1Value, setButton1Value] = useState("");
  const [button2Value, setButton2Value] = useState("");
  const [button3Value, setButton3Value] = useState("");
  const [button4Value, setButton4Value] = useState("");
  return (
    <div className="w-[700px] overflow-y-auto shrink-0 flex flex-col items-center justify-start py-[30px] px-2.5 box-border gap-[20px] min-h-[1024px] max-w-full text-left text-sm text-neutral-60 font-text-m-medium mq725:pt-5 mq725:pb-5 mq725:box-border mq975:min-h-[auto]">
      <img
        className="w-[53.9px] h-5 relative shrink-0 object-cover"
        loading="lazy"
        alt=""
        src="/guzo-1-1@2x.png"
      />
      <h1 className="m-0 w-[258px] h-11 relative text-17xl leading-[44px] font-semibold font-inherit text-black inline-block mq450:text-3xl mq450:leading-[26px] mq1000:text-10xl mq1000:leading-[35px]">
        Search History
      </h1>
      <div className="self-stretch flex flex-col items-center justify-start">
        <div className="w-[113px] h-[22px]" />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start text-base text-black-text">
        <div className="flex flex-row items-start justify-start">
          <div className="h-[22px] w-[77px] relative tracking-[-0.01em] leading-[22px] font-semibold inline-block">
            Yesterday
          </div>
        </div>
      </div>
      <div className="rounded-3xl bg-adventure-blue-adventure-blue-50 box-border flex flex-row items-center justify-start py-2 pr-[17px] pl-[15px] gap-[8px] max-w-full border-[1px] border-solid border-neutral-50 mq725:flex-wrap">
        <div className="h-5 w-[458px] relative leading-[20px] font-medium inline-block max-w-full">
          Are there any events for start-ups in Houston this week?
        </div>
        <input
          className="[border:none] [outline:none] bg-[transparent] h-9 w-[102px] rounded-lg flex flex-row items-center justify-center py-2 px-5 box-border font-text-m-medium font-medium text-base text-adventure-blue-100"
          placeholder="Remove"
          type="text"
          value={buttonValue}
          onChange={(event) => setButtonValue(event.target.value)}
        />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start text-base text-black-text">
        <div className="flex flex-row items-start justify-start">
          <div className="h-[22px] w-[115px] relative tracking-[-0.01em] leading-[22px] font-semibold inline-block">
            One Week Ago
          </div>
        </div>
      </div>
      <div className="rounded-3xl bg-adventure-blue-adventure-blue-50 box-border flex flex-row items-center justify-start py-2 pr-[17px] pl-[15px] gap-[8px] max-w-full border-[1px] border-solid border-neutral-50 mq725:flex-wrap">
        <div className="h-5 w-[458px] relative leading-[20px] font-medium whitespace-pre-wrap inline-block max-w-full">
          I am looking for Houston Co-Working options. Can you help?
        </div>
        <input
          className="[border:none] [outline:none] bg-[transparent] h-9 w-[102px] rounded-lg flex flex-row items-center justify-center py-2 px-5 box-border font-text-m-medium font-medium text-base text-adventure-blue-100"
          placeholder="Remove"
          type="text"
          value={button1Value}
          onChange={(event) => setButton1Value(event.target.value)}
        />
      </div>
      <div className="rounded-3xl bg-adventure-blue-adventure-blue-50 box-border flex flex-row items-center justify-start py-2 pr-[17px] pl-[15px] gap-[8px] max-w-full border-[1px] border-solid border-neutral-50 mq725:flex-wrap">
        <div className="h-5 w-[458px] relative leading-[20px] font-medium inline-block max-w-full">
          What are the most revenant networking events for Product Leaders?
        </div>
        <input
          className="[border:none] [outline:none] bg-[transparent] h-9 w-[102px] rounded-lg flex flex-row items-center justify-center py-2 px-5 box-border font-text-m-medium font-medium text-base text-adventure-blue-100"
          placeholder="Remove"
          type="text"
          value={button2Value}
          onChange={(event) => setButton2Value(event.target.value)}
        />
      </div>
      <div className="w-[600px] rounded-3xl bg-adventure-blue-adventure-blue-50 box-border flex flex-row items-center justify-start py-2 pr-[17px] pl-[15px] gap-[8px] max-w-full border-[1px] border-solid border-neutral-50 mq725:flex-wrap">
        <div className="h-10 flex-1 relative leading-[20px] font-medium inline-block min-w-[298px] max-w-full">
          Can you recommend any start-up mentorship opportunities in Houston
          Texas?
        </div>
        <input
          className="[border:none] [outline:none] bg-[transparent] h-9 w-[102px] rounded-lg flex flex-row items-center justify-center py-2 px-5 box-border font-text-m-medium font-medium text-base text-adventure-blue-100"
          placeholder="Remove"
          type="text"
          value={button3Value}
          onChange={(event) => setButton3Value(event.target.value)}
        />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start text-base text-black-text">
        <div className="flex flex-row items-start justify-start">
          <div className="h-[22px] w-[89px] relative tracking-[-0.01em] leading-[22px] font-semibold inline-block">
            Last month
          </div>
        </div>
      </div>
      <div className="rounded-3xl bg-adventure-blue-adventure-blue-50 box-border flex flex-row items-center justify-start py-2 pr-[17px] pl-[15px] gap-[8px] max-w-full border-[1px] border-solid border-neutral-50 mq725:flex-wrap">
        <div className="h-5 w-[458px] relative leading-[20px] font-medium inline-block max-w-full">
          What are some Houston start-up support organizations?
        </div>
        <input
          className="[border:none] [outline:none] bg-[transparent] h-9 w-[102px] rounded-lg flex flex-row items-center justify-center py-2 px-5 box-border font-text-m-medium font-medium text-base text-adventure-blue-100"
          placeholder="Remove"
          type="text"
          value={button4Value}
          onChange={(event) => setButton4Value(event.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchInputFrame;
