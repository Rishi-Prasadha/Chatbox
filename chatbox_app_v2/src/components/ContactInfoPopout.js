import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const ContactInfoPopout = () => {
  const [wwwguzoioTextValue, setWwwguzoioTextValue] = useState("");
  const [wwwlinkedincominguzoTextValue, setWwwlinkedincominguzoTextValue] =
    useState("");
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/search-screen");
  }, [navigate]);

  return (
    <div className="w-[800px] h-[974px] rounded-3xs bg-neutral-10 overflow-y-auto flex flex-col items-center justify-start pt-[25px] px-0 pb-0 box-border gap-[30px] tracking-[normal] mq450:h-auto">
      <main className="self-stretch flex flex-col items-start justify-start py-0 px-[30px] box-border max-w-full shrink-0">
        <section className="self-stretch flex flex-col items-start justify-start max-w-full text-left text-xl text-black font-text-l-medium">
          <header className="self-stretch flex flex-row items-start justify-start max-w-full text-left text-xl text-black font-text-l-medium">
            <div className="flex-1 flex flex-col items-start justify-center max-w-full">
              <div className="flex flex-col items-start justify-start">
                <div className="flex flex-row items-center justify-center">
                  <h3 className="m-0 h-7 w-[170px] relative text-inherit tracking-[-0.02em] leading-[28px] font-semibold font-inherit inline-block whitespace-nowrap">
                    Guzo Contact Info
                  </h3>
                </div>
              </div>
            </div>
          </header>
          <div className="self-stretch flex flex-col items-center justify-start max-w-full">
            <img
              className="w-[150px] h-[150px] rounded-81xl overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="/frame-35866@2x.png"
            />
            <div className="self-stretch flex flex-row items-start justify-center max-w-full">
              <div className="flex-1 flex flex-col items-center justify-start max-w-full">
                <div className="flex flex-col items-start justify-start">
                  <div className="flex flex-row items-center justify-center">
                    <h3 className="m-0 h-7 w-[50px] relative text-inherit tracking-[-0.02em] leading-[28px] font-semibold font-inherit inline-block mq450:text-base mq450:leading-[22px]">
                      Guzo
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch bg-neutral-10 flex flex-col items-start justify-start p-5 box-border gap-[20px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-start max-w-full">
              <div className="flex-1 flex flex-col items-start justify-center max-w-full">
                <div className="flex flex-col items-start justify-start">
                  <div className="flex flex-row items-center justify-center">
                    <h3 className="m-0 h-7 w-[161px] relative text-inherit tracking-[-0.02em] leading-[28px] font-semibold font-inherit inline-block mq450:text-base mq450:leading-[22px]">
                      Organization Info
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <form className="m-0 self-stretch flex flex-col items-start justify-start py-0 px-[30px] gap-[20px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                <div className="self-stretch h-5 relative text-sm tracking-[-0.01em] leading-[20px] font-medium font-text-l-medium text-neutral-90 text-left inline-block">
                  Website
                </div>
                <div className="self-stretch rounded-lg bg-neutral-10 overflow-hidden flex flex-row items-center justify-start p-1.5 border-[1px] border-solid border-power-black-power-black-50">
                  <input
                    className="[border:none] [outline:none] font-medium font-text-l-medium text-sm bg-[transparent] h-5 w-52 relative tracking-[-0.01em] leading-[20px] text-power-black-power-black-500 text-left inline-block shrink-0 p-0"
                    placeholder="www.guzo.io"
                    type="text"
                    value={wwwguzoioTextValue}
                    onChange={(event) =>
                      setWwwguzoioTextValue(event.target.value)
                    }
                  />
                </div>
                <div className="self-stretch relative text-xs leading-[18px] font-text-l-medium text-neutral-60 text-left hidden" />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
                <div className="self-stretch relative text-xs leading-[18px] font-text-l-medium text-neutral-60 text-left hidden" />
                <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                  <div className="self-stretch h-5 relative text-sm tracking-[-0.01em] leading-[20px] font-medium font-text-l-medium text-neutral-90 text-left inline-block">
                    LinkedIn
                  </div>
                  <div className="self-stretch rounded-lg bg-neutral-10 overflow-hidden flex flex-row items-center justify-start p-1.5 border-[1px] border-solid border-power-black-power-black-50">
                    <input
                      className="[border:none] [outline:none] font-medium font-text-l-medium text-sm bg-[transparent] h-5 w-52 relative tracking-[-0.01em] leading-[20px] text-left inline-block shrink-0 p-0"
                      placeholder="www.linkedin.com/in/guzo "
                      type="text"
                      value={wwwlinkedincominguzoTextValue}
                      onChange={(event) =>
                        setWwwlinkedincominguzoTextValue(event.target.value)
                      }
                    />
                  </div>
                  <div className="self-stretch relative text-xs leading-[18px] font-text-l-medium text-neutral-60 text-left hidden" />
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
                <div className="self-stretch relative text-xs leading-[18px] font-text-l-medium text-neutral-60 text-left hidden" />
                <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                  <div className="self-stretch h-5 relative text-sm tracking-[-0.01em] leading-[20px] font-medium font-text-l-medium text-neutral-90 text-left inline-block">
                    Address
                  </div>
                  <div className="self-stretch rounded-lg bg-neutral-10 box-border overflow-hidden flex flex-row items-center justify-between p-1.5 min-h-[96px] gap-[20px] border-[1px] border-solid border-power-black-power-black-50 mq450:flex-wrap">
                    <div className="h-10 w-52 relative text-sm tracking-[-0.01em] leading-[20px] font-medium font-text-l-medium text-power-black-power-black-500 text-left inline-block shrink-0">
                      <p className="m-0">777 Main St.</p>
                      <p className="m-0">Houston, TX 77002</p>
                    </div>
                    <button className="cursor-pointer [border:none] py-2 px-5 bg-adventure-blue-adventure-blue-500 h-10 rounded-3xl flex flex-row items-center justify-center box-border gap-[4px]">
                      <img
                        className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/solidemojihappy.svg"
                      />
                      <div className="h-6 w-[41px] relative text-base leading-[24px] font-medium font-text-l-medium text-neutral-neutral-100 text-left inline-block">
                        Copy
                      </div>
                      <img
                        className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/solidemojihappy.svg"
                      />
                    </button>
                  </div>
                  <div className="self-stretch relative text-xs leading-[18px] font-text-l-medium text-neutral-60 text-left hidden" />
                </div>
              </div>
            </form>
            <div className="self-stretch flex flex-row items-start justify-start max-w-full">
              <div className="flex-1 flex flex-col items-start justify-center max-w-full">
                <div className="flex flex-col items-start justify-start">
                  <div className="flex flex-row items-center justify-center">
                    <h3 className="m-0 h-7 w-[93px] relative text-inherit tracking-[-0.02em] leading-[28px] font-semibold font-inherit inline-block mq450:text-base mq450:leading-[22px]">
                      The Team
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[480px] flex flex-row items-start justify-start gap-[20px] max-w-full text-xs text-neutral-60 mq450:flex-wrap">
              <div className="flex-1 rounded-3xs bg-neutral-10 flex flex-col items-center justify-start py-[15px] px-5 gap-[30px] border-[1px] border-solid border-power-black-power-black-50">
                <div className="self-stretch flex flex-col items-center justify-start gap-[10px] text-center text-sm text-black">
                  <img
                    className="w-[120px] h-[120px] rounded-81xl overflow-hidden shrink-0 object-cover"
                    loading="lazy"
                    alt=""
                    src="/persona-image@2x.png"
                  />
                  <div className="self-stretch flex flex-col items-center justify-start">
                    <div className="self-stretch flex flex-row items-center justify-center">
                      <div className="h-5 flex-1 relative leading-[20px] font-semibold inline-block overflow-hidden text-ellipsis whitespace-nowrap">
                        Gordon Taylor
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[4px] text-sm text-neutral-90">
                  <div className="self-stretch h-5 relative tracking-[-0.01em] leading-[20px] font-medium inline-block">
                    Name
                  </div>
                  <div className="self-stretch rounded-lg bg-neutral-10 overflow-hidden flex flex-row items-center justify-start p-1.5 whitespace-nowrap text-power-black-power-black-500 border-[1px] border-solid border-power-black-power-black-50">
                    <div className="h-5 w-52 relative tracking-[-0.01em] leading-[20px] font-medium inline-block shrink-0">
                      Gordon Taylor
                    </div>
                  </div>
                  <div className="self-stretch h-[18px] relative text-xs leading-[18px] text-neutral-60 hidden" />
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[4px] text-sm text-neutral-90">
                  <div className="self-stretch h-5 relative tracking-[-0.01em] leading-[20px] font-medium inline-block">
                    Role
                  </div>
                  <div className="self-stretch rounded-lg bg-neutral-10 overflow-hidden flex flex-row items-center justify-start p-1.5 text-power-black-power-black-500 border-[1px] border-solid border-power-black-power-black-50">
                    <div className="h-5 w-52 relative tracking-[-0.01em] leading-[20px] font-medium inline-block shrink-0">
                      CEO
                    </div>
                  </div>
                  <div className="self-stretch h-[18px] relative text-xs leading-[18px] text-neutral-60 hidden" />
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
                  <div className="self-stretch h-[18px] relative leading-[18px] hidden" />
                  <div className="self-stretch flex flex-col items-start justify-start gap-[4px] text-sm text-neutral-90">
                    <div className="self-stretch h-5 relative tracking-[-0.01em] leading-[20px] font-medium inline-block">
                      Email
                    </div>
                    <div className="self-stretch rounded-lg bg-neutral-10 overflow-hidden flex flex-row items-center justify-start p-1.5 text-power-black-power-black-500 border-[1px] border-solid border-power-black-power-black-50">
                      <div className="h-5 w-52 relative tracking-[-0.01em] leading-[20px] font-medium inline-block shrink-0 whitespace-nowrap">
                        customercare@guzo.io
                      </div>
                    </div>
                    <div className="self-stretch h-[18px] relative text-xs leading-[18px] text-neutral-60 hidden" />
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
                  <div className="self-stretch h-[18px] relative leading-[18px] hidden" />
                  <div className="self-stretch flex flex-col items-start justify-start gap-[4px] text-sm text-neutral-90">
                    <div className="self-stretch h-5 relative tracking-[-0.01em] leading-[20px] font-medium inline-block">
                      Phone
                    </div>
                    <div className="self-stretch rounded-lg bg-neutral-10 overflow-hidden flex flex-row items-center justify-start p-1.5 whitespace-nowrap text-power-black-power-black-500 border-[1px] border-solid border-power-black-power-black-50">
                      <div className="h-5 w-52 relative tracking-[-0.01em] leading-[20px] font-medium inline-block shrink-0">
                        (777) 777-7777
                      </div>
                    </div>
                    <div className="self-stretch h-[18px] relative text-xs leading-[18px] text-neutral-60 hidden" />
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
                  <div className="self-stretch h-[18px] relative leading-[18px] hidden" />
                  <div className="self-stretch flex flex-col items-start justify-start gap-[4px] text-sm text-neutral-90">
                    <div className="self-stretch h-5 relative tracking-[-0.01em] leading-[20px] font-medium inline-block">
                      LinkedIn
                    </div>
                    <div className="self-stretch rounded-lg bg-neutral-10 overflow-hidden flex flex-row items-center justify-start p-1.5 whitespace-nowrap text-power-black-power-black-500 border-[1px] border-solid border-power-black-power-black-50">
                      <div className="h-5 w-52 relative tracking-[-0.01em] leading-[20px] font-medium inline-block shrink-0">
                        <span>www.linkedin.com/in/guzo</span>
                        <span className="text-neutral-60">{` `}</span>
                      </div>
                    </div>
                    <div className="self-stretch h-[18px] relative text-xs leading-[18px] text-neutral-60 hidden" />
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
                  <div className="self-stretch h-[18px] relative leading-[18px] hidden" />
                  <div className="self-stretch flex flex-col items-start justify-start gap-[4px] text-sm text-neutral-90">
                    <div className="self-stretch h-5 relative tracking-[-0.01em] leading-[20px] font-medium inline-block">{`Scheduling `}</div>
                    <div className="self-stretch rounded-lg bg-neutral-10 overflow-hidden flex flex-row items-center justify-start p-1.5 text-power-black-power-black-500 border-[1px] border-solid border-power-black-power-black-50">
                      <div className="h-5 w-52 relative tracking-[-0.01em] leading-[20px] font-medium inline-block shrink-0">
                        www.calendly.com/guzo
                      </div>
                    </div>
                    <div className="self-stretch h-[18px] relative text-xs leading-[18px] text-neutral-60 hidden" />
                  </div>
                </div>
              </div>
              <div className="flex-1 rounded-3xs bg-neutral-10 flex flex-col items-center justify-start py-[15px] px-5 gap-[30px] border-[1px] border-solid border-power-black-power-black-50">
                <div className="self-stretch flex flex-col items-center justify-start gap-[10px] text-sm text-black">
                  <img
                    className="w-[120px] h-[120px] rounded-81xl overflow-hidden shrink-0 object-cover"
                    loading="lazy"
                    alt=""
                    src="/persona-image-1@2x.png"
                  />
                  <div className="self-stretch flex flex-col items-center justify-start">
                    <div className="self-stretch flex flex-row items-center justify-center">
                      <div className="h-5 w-[100px] relative leading-[20px] font-semibold inline-block">
                        Rishi Prasadha
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[4px] text-sm text-neutral-90">
                  <div className="self-stretch h-5 relative tracking-[-0.01em] leading-[20px] font-medium inline-block">
                    Name
                  </div>
                  <div className="self-stretch rounded-lg bg-neutral-10 overflow-hidden flex flex-row items-center justify-start p-1.5 whitespace-nowrap text-power-black-power-black-500 border-[1px] border-solid border-power-black-power-black-50">
                    <div className="h-5 w-52 relative tracking-[-0.01em] leading-[20px] font-medium inline-block shrink-0">
                      Rishi Prasadha
                    </div>
                  </div>
                  <div className="self-stretch h-[18px] relative text-xs leading-[18px] text-neutral-60 hidden" />
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[4px] text-sm text-neutral-90">
                  <div className="self-stretch h-5 relative tracking-[-0.01em] leading-[20px] font-medium inline-block">
                    Role
                  </div>
                  <div className="self-stretch rounded-lg bg-neutral-10 overflow-hidden flex flex-row items-center justify-start p-1.5 whitespace-nowrap text-power-black-power-black-500 border-[1px] border-solid border-power-black-power-black-50">
                    <div className="h-5 w-52 relative tracking-[-0.01em] leading-[20px] font-medium inline-block shrink-0">
                      Chief Cool Officer
                    </div>
                  </div>
                  <div className="self-stretch h-[18px] relative text-xs leading-[18px] text-neutral-60 hidden" />
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
                  <div className="self-stretch h-[18px] relative leading-[18px] hidden" />
                  <div className="self-stretch flex flex-col items-start justify-start gap-[4px] text-sm text-neutral-90">
                    <div className="self-stretch h-5 relative tracking-[-0.01em] leading-[20px] font-medium inline-block">
                      Email
                    </div>
                    <div className="self-stretch rounded-lg bg-neutral-10 overflow-hidden flex flex-row items-center justify-start p-1.5 text-power-black-power-black-500 border-[1px] border-solid border-power-black-power-black-50">
                      <div className="h-5 w-52 relative tracking-[-0.01em] leading-[20px] font-medium inline-block shrink-0 whitespace-nowrap">
                        customercare@guzo.io
                      </div>
                    </div>
                    <div className="self-stretch h-[18px] relative text-xs leading-[18px] text-neutral-60 hidden" />
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
                  <div className="self-stretch h-[18px] relative leading-[18px] hidden" />
                  <div className="self-stretch flex flex-col items-start justify-start gap-[4px] text-sm text-neutral-90">
                    <div className="self-stretch h-5 relative tracking-[-0.01em] leading-[20px] font-medium inline-block">
                      Phone
                    </div>
                    <div className="self-stretch rounded-lg bg-neutral-10 overflow-hidden flex flex-row items-center justify-start p-1.5 whitespace-nowrap text-power-black-power-black-500 border-[1px] border-solid border-power-black-power-black-50">
                      <div className="h-5 w-52 relative tracking-[-0.01em] leading-[20px] font-medium inline-block shrink-0">
                        (777) 777-7777
                      </div>
                    </div>
                    <div className="self-stretch h-[18px] relative text-xs leading-[18px] text-neutral-60 hidden" />
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
                  <div className="self-stretch h-[18px] relative leading-[18px] hidden" />
                  <div className="self-stretch flex flex-col items-start justify-start gap-[4px] text-sm text-neutral-90">
                    <div className="self-stretch h-5 relative tracking-[-0.01em] leading-[20px] font-medium inline-block">
                      LinkedIn
                    </div>
                    <div className="self-stretch rounded-lg bg-neutral-10 overflow-hidden flex flex-row items-center justify-start p-1.5 whitespace-nowrap text-power-black-power-black-500 border-[1px] border-solid border-power-black-power-black-50">
                      <div className="h-5 w-52 relative tracking-[-0.01em] leading-[20px] font-medium inline-block shrink-0">
                        <span>www.linkedin.com/in/guzo</span>
                        <span className="text-neutral-60">{` `}</span>
                      </div>
                    </div>
                    <div className="self-stretch h-[18px] relative text-xs leading-[18px] text-neutral-60 hidden" />
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
                  <div className="self-stretch h-[18px] relative leading-[18px] hidden" />
                  <div className="self-stretch flex flex-col items-start justify-start gap-[4px] text-sm text-neutral-90">
                    <div className="self-stretch h-5 relative tracking-[-0.01em] leading-[20px] font-medium inline-block">{`Scheduling `}</div>
                    <div className="self-stretch rounded-lg bg-neutral-10 overflow-hidden flex flex-row items-center justify-start p-1.5 text-power-black-power-black-500 border-[1px] border-solid border-power-black-power-black-50">
                      <div className="h-5 w-52 relative tracking-[-0.01em] leading-[20px] font-medium inline-block shrink-0">
                        www.calendly.com/guzo
                      </div>
                    </div>
                    <div className="self-stretch h-[18px] relative text-xs leading-[18px] text-neutral-60 hidden" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="self-stretch flex flex-row items-start justify-center pt-0 px-[30px] pb-[60px] text-left text-base text-adventure-blue-adventure-blue-500 font-text-l-medium">
        <div
          className="h-10 w-[171px] rounded-3xl bg-adventure-blue-adventure-blue-50 flex flex-row items-center justify-center py-2 px-5 box-border gap-[4px] cursor-pointer"
          onClick={onButtonContainerClick}
        >
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
            alt=""
            src="/solidemojihappy.svg"
          />
          <div className="h-6 w-11 relative leading-[24px] font-medium inline-block">
            Close
          </div>
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
            alt=""
            src="/solidemojihappy.svg"
          />
        </div>
      </footer>
    </div>
  );
};

export default ContactInfoPopout;
