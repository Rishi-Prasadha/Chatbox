import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PersonaMenuAssembly1 from "../components/PersonaMenuAssembly1";
import MainFrame from "../components/MainFrame";
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
    navigate("/settings");
  }, [navigate]);

  const onButtonContainerClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <div className="w-full relative bg-neutral-10 flex flex-row items-start justify-start tracking-[normal]">
      <PersonaMenuAssembly1
        personaImage="/persona-image1@2x.png"
        homeIcon="/home-icon.svg"
        iconsocialpersonOutline24="/iconsocialperson-outline-24px.svg"
        iconactionsettings24px="/iconactionsettings-24px.svg"
        personaImage1="/persona-image-11@2x.png"
        onMenuButtonAssemblyClick={onMenuButtonAssemblyClick}
        onMenuButtonAssembly1Click={onMenuButtonAssembly1Click}
        onMenuButtonAssembly2Click={onMenuButtonAssembly2Click}
      />
      <main className="flex-1 bg-whitesmoke overflow-y-auto flex flex-col items-end justify-start pt-0 pb-[30px] pr-[313px] pl-[60px] box-border gap-[30px] max-w-[calc(100%_-_114px)] text-left text-sm text-neutral-60 font-text-l-medium lg:pl-[30px] lg:pr-[156px] lg:box-border mq450:pr-5 mq450:box-border">
        <section className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px]">
          <MainFrame
            chevronLeft24px="/chevron-left-24px.svg"
            solidemojiHappy="/solidemojihappy.svg"
            onButtonContainerClick={onButtonContainerClick}
          />
          <PersonaNamesFrame />
        </section>
        <div className="w-[926px] flex flex-row items-start justify-center max-w-full">
          <div className="w-[600px] rounded-3xl bg-neutral-10 box-border flex flex-row flex-wrap items-start justify-start py-2 px-[15px] gap-[8px] max-w-full border-[1px] border-solid border-neutral-50">
            <div className="flex-1 flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border min-w-[325px] max-w-full">
              <div className="self-stretch h-5 relative leading-[20px] font-medium inline-block">
                Search Guzo....
              </div>
            </div>
            <div className="h-9 rounded-3xl bg-adventure-blue-adventure-blue-500 flex flex-row items-start justify-start py-1.5 px-5 box-border gap-[4px] text-base text-neutral-neutral-100">
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                alt=""
                src="/solidemojihappy.svg"
              />
              <div className="self-stretch w-0 relative leading-[24px] font-medium inline-block" />
              <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                <img
                  className="w-4 h-4 relative"
                  loading="lazy"
                  alt=""
                  src="/send-24px.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SearchScreen;
