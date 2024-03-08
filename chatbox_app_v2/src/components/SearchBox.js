import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
  const [doINeedValue, setDoINeedValue] = useState("");
  const [button1Value, setButton1Value] = useState("");
  const [button2Value, setButton2Value] = useState("");
  const [button3Value, setButton3Value] = useState("");
  const [button4Value, setButton4Value] = useState("");
  const [button5Value, setButton5Value] = useState("");
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/search-screen");
  }, [navigate]);

  const onButtonContainerClick = useCallback(() => {
    navigate("/search-history");
  }, [navigate]);

  const onSearchInputContainer1Click = useCallback(() => {
    navigate("/search-screen");
  }, [navigate]);

  return (
    <div className="w-[700px] overflow-y-auto shrink-0 flex flex-col items-center justify-start py-[30px] px-2.5 box-border gap-[20px] max-w-full text-left text-sm text-neutral-60 font-text-m-medium mq1000:pt-5 mq1000:pb-5 mq1000:box-border">
      <img
        className="w-[53.9px] h-5 relative shrink-0 object-contain"
        loading="lazy"
        alt=""
        src="/guzo-1-1@2x.png"
      />
      <h1 className="m-0 w-[578px] h-11 relative text-17xl leading-[44px] font-semibold font-inherit text-black inline-block max-w-full mq975:text-10xl mq975:leading-[35px] mq450:text-3xl mq450:leading-[26px]">
        Welcome back, Impact Hub Team
      </h1>
      <div className="w-[600px] rounded-3xl bg-neutral-10 box-border flex flex-row flex-wrap items-center justify-start py-2 pr-[17px] pl-[15px] gap-[8px] max-w-full border-[1px] border-solid border-neutral-50 mq725:w-[calc(100%_-_40px)]">
        <div className="h-5 flex-1 relative leading-[20px] font-medium inline-block min-w-[193px] max-w-full">
          How can Guzo connect you today.....
        </div>
        <button
          className="cursor-pointer [border:none] py-2 px-5 bg-adventure-blue-100 h-9 rounded-3xl flex flex-row items-center justify-center box-border gap-[4px]"
          onClick={onButtonClick}
        >
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
            alt=""
            src="/solidemojihappy.svg"
          />
          <div className="h-6 w-36 relative text-base leading-[24px] font-medium font-text-m-medium text-neutral-neutral-100 text-left inline-block">
            Start a new search
          </div>
          <img className="h-4 w-4 relative" alt="" src="/send-24px.svg" />
        </button>
      </div>
      <div className="w-[640px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-dimgray">
        <div className="flex-1 rounded-3xs bg-energy-red-energy-red-50 box-border overflow-hidden flex flex-col items-center justify-start py-5 px-[19px] max-w-full border-[1px] border-solid border-power-black-power-black-100">
          <div className="self-stretch rounded-3xl flex flex-row items-center justify-center py-2 px-4 box-border max-w-full text-black">
            <div className="h-5 flex-1 relative leading-[20px] font-medium inline-block max-w-full">
              Try searching:
            </div>
          </div>
          <div className="self-stretch rounded-3xl bg-energy-red-energy-red-50 flex flex-row items-center justify-center py-2 px-4 box-border max-w-full">
            <div className="h-5 flex-1 relative leading-[20px] font-medium inline-block max-w-full">{`How do I validate my ideas with customers? `}</div>
          </div>
          <div className="self-stretch rounded-3xl bg-energy-red-energy-red-50 flex flex-row items-center justify-center py-2 px-4 box-border max-w-full">
            <div className="h-5 flex-1 relative leading-[20px] font-medium inline-block max-w-full">
              How do I price my product/offering?
            </div>
          </div>
          <div className="self-stretch rounded-3xl bg-energy-red-energy-red-50 flex flex-row items-center justify-center py-2 px-4 box-border max-w-full">
            <input
              className="[border:none] [outline:none] font-medium font-text-m-medium text-sm bg-[transparent] h-5 flex-1 relative leading-[20px] text-dimgray text-left inline-block min-w-[250px] max-w-full"
              placeholder="Do I need to bring on a cofounder?"
              type="text"
              value={doINeedValue}
              onChange={(event) => setDoINeedValue(event.target.value)}
            />
          </div>
          <div className="self-stretch rounded-3xl bg-energy-red-energy-red-50 flex flex-row items-center justify-center py-2 px-4 box-border max-w-full">
            <div className="h-5 flex-1 relative leading-[20px] font-medium inline-block max-w-full">
              How do I create a brand?
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-between gap-[20px] text-center text-xl text-black-text mq450:flex-wrap mq450:justify-center">
        <div className="flex flex-row items-start justify-start">
          <div className="h-7 w-[139px] relative tracking-[-0.02em] leading-[28px] font-semibold inline-block mq450:text-base mq450:leading-[22px]">
            Search History
          </div>
        </div>
        <div
          className="h-9 rounded-lg flex flex-row items-center justify-center py-2 px-[18px] box-border gap-[4px] cursor-pointer text-left text-base text-adventure-blue-100"
          onClick={onButtonContainerClick}
        >
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
            alt=""
            src="/solidemojihappy.svg"
          />
          <div className="h-6 w-14 relative leading-[24px] font-medium inline-block">
            See All
          </div>
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
            alt=""
            src="/solidemojihappy.svg"
          />
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start text-base text-black-text">
        <div className="flex flex-row items-start justify-start py-0 pr-5 pl-0">
          <div className="h-[22px] w-[77px] relative tracking-[-0.01em] leading-[22px] font-semibold inline-block">
            Yesterday
          </div>
        </div>
      </div>
      <div
        className="w-[600px] rounded-3xl bg-adventure-blue-adventure-blue-50 box-border flex flex-row flex-wrap items-center justify-start py-2 pr-[17px] pl-[15px] gap-[8px] max-w-full cursor-pointer border-[1px] border-solid border-neutral-50 mq725:w-[calc(100%_-_40px)]"
        onClick={onSearchInputContainer1Click}
      >
        <div className="h-5 flex-1 relative leading-[20px] font-medium inline-block min-w-[298px] max-w-full">
          Are there any events for start-ups in Houston this week?
        </div>
        <input
          className="[border:none] [outline:none] bg-[transparent] h-9 w-[102px] rounded-lg flex flex-row items-center justify-center py-2 px-5 box-border font-text-m-medium font-medium text-base text-adventure-blue-100"
          placeholder="Remove"
          type="text"
          value={button1Value}
          onChange={(event) => setButton1Value(event.target.value)}
        />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start text-base text-black-text">
        <div className="flex flex-row items-start justify-start py-0 pr-5 pl-0">
          <div className="h-[22px] w-[115px] relative tracking-[-0.01em] leading-[22px] font-semibold inline-block">
            One Week Ago
          </div>
        </div>
      </div>
      <div className="w-[600px] rounded-3xl bg-adventure-blue-adventure-blue-50 box-border flex flex-row flex-wrap items-center justify-start py-2 pr-[17px] pl-[15px] gap-[8px] max-w-full border-[1px] border-solid border-neutral-50 mq725:w-[calc(100%_-_40px)]">
        <div className="h-5 flex-1 relative leading-[20px] font-medium whitespace-pre-wrap inline-block min-w-[298px] max-w-full">
          I am looking for Houston Co-Working options. Can you help?
        </div>
        <input
          className="[border:none] [outline:none] bg-[transparent] h-9 w-[102px] rounded-lg flex flex-row items-center justify-center py-2 px-5 box-border font-text-m-medium font-medium text-base text-adventure-blue-100"
          placeholder="Remove"
          type="text"
          value={button2Value}
          onChange={(event) => setButton2Value(event.target.value)}
        />
      </div>
      <div className="rounded-3xl bg-adventure-blue-adventure-blue-50 box-border flex flex-row items-center justify-start py-2 pr-[17px] pl-[15px] gap-[8px] max-w-full border-[1px] border-solid border-neutral-50 mq725:flex-wrap mq725:w-[calc(100%_-_40px)]">
        <div className="h-5 w-[458px] relative leading-[20px] font-medium inline-block max-w-full">
          What are the most revenant networking events for Product Leaders?
        </div>
        <input
          className="[border:none] [outline:none] bg-[transparent] h-9 w-[102px] rounded-lg flex flex-row items-center justify-center py-2 px-5 box-border font-text-m-medium font-medium text-base text-adventure-blue-100"
          placeholder="Remove"
          type="text"
          value={button3Value}
          onChange={(event) => setButton3Value(event.target.value)}
        />
      </div>
      <div className="w-[600px] rounded-3xl bg-adventure-blue-adventure-blue-50 box-border flex flex-row flex-wrap items-center justify-start py-2 pr-[17px] pl-[15px] gap-[8px] max-w-full border-[1px] border-solid border-neutral-50 mq725:w-[calc(100%_-_40px)]">
        <div className="h-10 flex-1 relative leading-[20px] font-medium inline-block min-w-[298px] max-w-full">
          Can you recommend any start-up mentorship opportunities in Houston
          Texas?
        </div>
        <input
          className="[border:none] [outline:none] bg-[transparent] h-9 w-[102px] rounded-lg flex flex-row items-center justify-center py-2 px-5 box-border font-text-m-medium font-medium text-base text-adventure-blue-100"
          placeholder="Remove"
          type="text"
          value={button4Value}
          onChange={(event) => setButton4Value(event.target.value)}
        />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start text-base text-black-text">
        <div className="flex flex-row items-start justify-start py-0 pr-5 pl-0">
          <div className="h-[22px] w-[89px] relative tracking-[-0.01em] leading-[22px] font-semibold inline-block">
            Last month
          </div>
        </div>
      </div>
      <div className="w-[600px] rounded-3xl bg-adventure-blue-adventure-blue-50 box-border flex flex-row flex-wrap items-center justify-start py-2 pr-[17px] pl-[15px] gap-[8px] max-w-full border-[1px] border-solid border-neutral-50 mq725:w-[calc(100%_-_40px)]">
        <div className="h-5 flex-1 relative leading-[20px] font-medium inline-block min-w-[298px] max-w-full">
          What are some Houston start-up support organizations?
        </div>
        <input
          className="[border:none] [outline:none] bg-[transparent] h-9 w-[102px] rounded-lg flex flex-row items-center justify-center py-2 px-5 box-border font-text-m-medium font-medium text-base text-adventure-blue-100"
          placeholder="Remove"
          type="text"
          value={button5Value}
          onChange={(event) => setButton5Value(event.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchBox;
