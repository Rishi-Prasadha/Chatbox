import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PersonaMenuAssembly from "../components/PersonaMenuAssembly";
import FrameContainer from "../components/FrameContainer";
import PersonaNamesFrame from "../components/PersonaNamesFrame";

const SearchScreen = () => {
  const navigate = useNavigate();

  const onMenuButtonAssemblyClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onMenuButtonAssembly1Click = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  const onMenuButtonAssembly2Click = useCallback(() => {
    // Please sync "Settings" to the project
  }, []);

  const onButtonContainerClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <div className="w-full relative bg-neutral-10 flex flex-row items-start justify-start tracking-[normal] mq1025:pl-5 mq1025:pr-5 mq1025:box-border">
      <PersonaMenuAssembly
        personaImage="/persona-image@2x.png"
        homeIcon="/home-icon.svg"
        iconsocialpersonOutline24="/iconsocialperson-outline-24px.svg"
        iconactionsettings24px="/iconactionsettings-24px.svg"
        personaImage1="/persona-image-1@2x.png"
        onMenuButtonAssemblyClick={onMenuButtonAssemblyClick}
        onMenuButtonAssembly1Click={onMenuButtonAssembly1Click}
        onMenuButtonAssembly2Click={onMenuButtonAssembly2Click}
      />
      <main className="flex-1 bg-whitesmoke-200 overflow-y-auto flex flex-col items-start justify-start pt-0 px-[60px] pb-[30px] box-border gap-[30px] max-w-[calc(100%_-_114px)] text-left text-sm text-neutral-60 font-text-l-medium mq750:gap-[15px] mq1025:max-w-full mq1100:pl-[30px] mq1100:pr-[30px] mq1100:box-border">
        <section className="w-[846px] flex flex-row flex-wrap items-start justify-start gap-[48px] max-w-full mq450:gap-[24px]">
          <FrameContainer
            chevronLeft24px="/chevron-left-24px.svg"
            solidemojiHappy="/solidemojihappy.svg"
            onButtonContainerClick={onButtonContainerClick}
          />
          <PersonaNamesFrame />
        </section>
        <div className="w-[980px] flex flex-row items-start justify-center max-w-full">
          <div className="w-[600px] rounded-3xl bg-neutral-10 box-border flex flex-row flex-wrap items-center justify-start py-2 pr-[17px] pl-[15px] gap-[8px] max-w-full border-[1px] border-solid border-neutral-50">
            <div className="h-5 flex-1 relative leading-[20px] font-medium inline-block min-w-[79px] max-w-full">
              Search Guzo....
            </div>
            <div className="h-9 rounded-3xl bg-adventure-blue-adventure-blue-500 flex flex-row items-center justify-start py-1.5 px-5 box-border gap-[4px] text-base text-neutral-neutral-100">
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                alt=""
                src="/solidemojihappy.svg"
              />
              <div className="self-stretch w-0 relative leading-[24px] font-medium inline-block" />
              <img
                className="h-4 w-4 relative"
                loading="lazy"
                alt=""
                src="/send-24px.svg"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SearchScreen;
