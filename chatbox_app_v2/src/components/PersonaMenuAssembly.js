import { useMemo } from "react";

const PersonaMenuAssembly = ({
  personaImage,
  homeIcon,
  iconsocialpersonOutline24,
  iconactionsettings24px,
  personaImage1,
  menuFrameHeight,
  menuFrameFlex,
  onMenuButtonAssemblyClick,
  onMenuButtonAssembly1Click,
  onMenuButtonAssembly2Click,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      height: menuFrameHeight,
      flex: menuFrameFlex,
    };
  }, [menuFrameHeight, menuFrameFlex]);

  return (
    <div className="h-[1024px] w-[114px] bg-neutral-10 box-border overflow-hidden shrink-0 flex flex-col items-center justify-start py-2.5 px-1.5 gap-[20px] border-r-[1px] border-solid border-power-black-power-black-100 mq450:hidden">
      <div className="flex flex-row items-start justify-start py-0 px-5 gap-[7px]">
        <div className="h-[7px] w-[7px] relative rounded-[50%] bg-darkred box-border border-[0px] border-solid border-power-black-power-black-200" />
        <div className="h-[7px] w-[7px] relative rounded-[50%] bg-yellowgreen box-border border-[0px] border-solid border-power-black-power-black-200" />
        <div className="h-[7px] w-[7px] relative rounded-[50%] bg-darkgreen box-border border-[0px] border-solid border-power-black-power-black-200" />
      </div>
      <div
        className="self-stretch h-[987px] flex flex-col items-center justify-between pt-0 px-0 pb-[30px] box-border"
        style={frameDivStyle}
      >
        <div className="self-stretch h-[698px] flex flex-col items-center justify-start gap-[20px]">
          <div className="self-stretch h-[110px] flex flex-col items-center justify-start">
            <div className="self-stretch flex-1 flex flex-col items-center justify-start">
              <div className="self-stretch flex-1 flex flex-row items-start justify-start py-0 pr-px pl-0">
                <div className="self-stretch flex-1 rounded-3xs bg-neutral-10 flex flex-row items-center justify-center border-[0.5px] border-solid border-power-black-power-black-100">
                  <img
                    className="h-20 w-20 rounded-81xl overflow-hidden shrink-0 object-cover"
                    loading="lazy"
                    alt=""
                    src={personaImage}
                  />
                </div>
              </div>
            </div>
          </div>
          <nav className="m-0 w-[93px] rounded-3xs bg-neutral-10 flex flex-col items-center justify-start gap-[10px] text-left text-base text-black-text font-text-l-medium">
            <div
              className="flex flex-col items-center justify-center py-2.5 px-6 gap-[3px] cursor-pointer"
              onClick={onMenuButtonAssemblyClick}
            >
              <div className="w-[45px] h-[30px] flex flex-col items-center justify-center py-0 px-[7px] box-border">
                <img
                  className="w-[22.1px] h-5 relative"
                  loading="lazy"
                  alt=""
                  src={homeIcon}
                />
              </div>
              <div className="flex flex-row items-center justify-start">
                <div className="h-6 w-[45px] relative tracking-[-0.01em] leading-[24px] font-medium inline-block">
                  Home
                </div>
              </div>
            </div>
            <div
              className="self-stretch flex flex-col items-center justify-center py-2.5 px-[22px] gap-[3px] cursor-pointer"
              onClick={onMenuButtonAssembly1Click}
            >
              <div className="self-stretch h-[30px] flex flex-col items-center justify-center py-0 px-[9px] box-border">
                <img
                  className="w-5 h-5 relative"
                  loading="lazy"
                  alt=""
                  src={iconsocialpersonOutline24}
                />
              </div>
              <div className="flex flex-row items-center justify-start py-0 pr-px pl-0">
                <div className="h-6 w-12 relative tracking-[-0.01em] leading-[24px] font-medium inline-block">
                  Profile
                </div>
              </div>
            </div>
            <div
              className="self-stretch flex flex-col items-center justify-center py-2.5 px-[15px] gap-[3px] cursor-pointer"
              onClick={onMenuButtonAssembly2Click}
            >
              <div className="self-stretch h-[30px] flex flex-col items-center justify-center py-0 px-4 box-border">
                <img
                  className="w-[19.5px] h-5 relative"
                  loading="lazy"
                  alt=""
                  src={iconactionsettings24px}
                />
              </div>
              <div className="flex flex-row items-center justify-start">
                <div className="h-6 w-[63px] relative tracking-[-0.01em] leading-[24px] font-medium inline-block">
                  Settings
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div className="flex flex-col items-start justify-start py-0 px-5">
          <img
            className="w-10 h-10 rounded-6xs overflow-hidden shrink-0 object-cover"
            loading="lazy"
            alt=""
            src={personaImage1}
          />
        </div>
      </div>
    </div>
  );
};

export default PersonaMenuAssembly;

