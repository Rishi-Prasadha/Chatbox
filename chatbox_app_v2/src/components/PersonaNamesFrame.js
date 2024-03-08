import { useState, useCallback } from "react";
import ContactInfoPopout from "./ContactInfoPopout";
import PortalPopup from "./PortalPopup";
import ProfileTile from "./ProfileTile";

const PersonaNamesFrame = () => {
  const [isContactInfoPopoutOpen, setContactInfoPopoutOpen] = useState(false);

  const openContactInfoPopout = useCallback(() => {
    setContactInfoPopoutOpen(true);
  }, []);

  const closeContactInfoPopout = useCallback(() => {
    setContactInfoPopoutOpen(false);
  }, []);

  return (
    <>
      <div className="h-[912px] w-[700px] overflow-y-auto shrink-0 flex flex-col items-center justify-start pt-[30px] px-[50px] pb-0 box-border gap-[20px] max-w-full text-left text-sm text-dimgray font-text-l-medium">
        <img
          className="w-[53.9px] h-5 relative shrink-0 object-cover"
          loading="lazy"
          alt=""
          src="/guzo-1-1@2x.png"
        />
        <div className="self-stretch flex flex-row items-center justify-end shrink-0">
          <img
            className="h-10 w-10 relative rounded-[50%] object-cover"
            loading="lazy"
            alt=""
            src="/ellipse-1@2x.png"
          />
        </div>
        <div className="self-stretch rounded-3xl bg-adventure-blue-adventure-blue-50 box-border flex flex-row items-center justify-start py-2 px-[15px] max-w-full shrink-0 border-[1px] border-solid border-neutral-50">
          <div className="h-[60px] flex-1 relative leading-[20px] font-medium inline-block max-w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            cursus augue nec libero scelerisque venenatis. Nullam lobortis dui
            in libero bibendum, eu varius ex luctus. Morbi id neque et tellus
            lobortis vestibulum?
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-start shrink-0">
          <img
            className="h-10 w-10 relative rounded-[50%] object-cover"
            loading="lazy"
            alt=""
            src="/ellipse-2@2x.png"
          />
        </div>
        <div className="self-stretch rounded-3xl bg-adventure-blue-adventure-blue-50 box-border flex flex-row items-center justify-start py-2 px-[15px] max-w-full shrink-0 border-[1px] border-solid border-neutral-50">
          <div className="h-80 flex-1 relative leading-[20px] font-medium inline-block max-w-full">
            <p className="m-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              cursus augue nec libero scelerisque venenatis. Nullam lobortis dui
              in libero bibendum, eu varius ex luctus. Morbi id neque et tellus
              lobortis vestibulum. Praesent semper vestibulum ligula, eget
              finibus libero euismod vel. Cras tempus eros sed nisi rhoncus, vel
              faucibus magna mollis. In placerat ultrices mauris sed aliquet.
              Phasellus ut dictum velit. Ut quis mauris a mauris lobortis
              condimentum finibus ac elit. Sed dolor erat, convallis id
              malesuada id, vehicula vel augue. Cras euismod neque ut ex maximus
              vehicula. Sed ultrices arcu vitae dapibus efficitur.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              Suspendisse eget nunc laoreet, eleifend turpis eu, facilisis
              nulla. Vestibulum posuere efficitur lectus. Nullam quis sodales
              ex. Sed malesuada arcu sed nunc hendrerit fringilla. Fusce sed
              risus cursus, eleifend neque nec, semper nibh. Nulla facilisi.
              Fusce convallis consequat tortor, vel facilisis turpis gravida
              vel. Cras faucibus ligula tortor, id rhoncus dolor placerat vel.
              Aliquam erat volutpat. Curabitur varius orci.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">Profiles relevant to your request:</p>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start shrink-0 text-black">
          <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[10px] min-h-[940px]">
            <div
              className="h-[302px] w-48 rounded-3xs bg-neutral-10 box-border flex flex-col items-center justify-start py-[15px] px-5 gap-[30px] cursor-pointer text-center border-[1px] border-solid border-power-black-power-black-50 mq450:h-[302px]"
              onClick={openContactInfoPopout}
            >
              <div className="self-stretch flex flex-col items-center justify-start gap-[10px]">
                <img
                  className="w-[120px] h-[120px] rounded-81xl overflow-hidden shrink-0 object-cover"
                  loading="lazy"
                  alt=""
                  src="/persona-image-2@2x.png"
                />
                <div className="self-stretch flex flex-col items-center justify-start">
                  <div className="self-stretch flex flex-row items-center justify-center">
                    <div className="h-5 flex-1 relative leading-[20px] font-semibold inline-block overflow-hidden text-ellipsis whitespace-nowrap">
                      Guzo
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-3xl bg-adventure-blue-adventure-blue-50 flex flex-row items-center justify-center py-2 px-5 gap-[4px] text-left text-base text-adventure-blue-adventure-blue-500">
                <img
                  className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/solidemojihappy.svg"
                />
                <div className="h-6 w-[93px] relative tracking-[-0.01em] leading-[24px] font-medium inline-block">
                  Contact Info
                </div>
                <img
                  className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/solidemojihappy.svg"
                />
              </div>
            </div>
            <ProfileTile
              personaImage="/persona-image-3@2x.png"
              bornGlobal="Born Global"
              solidemojiHappy="/solidemojihappy.svg"
              solidemojiHappy1="/solidemojihappy.svg"
            />
            <ProfileTile
              personaImage="/persona-image-4@2x.png"
              bornGlobal="Gener8tor"
              solidemojiHappy="/solidemojihappy.svg"
              solidemojiHappy1="/solidemojihappy.svg"
              propHeight="unset"
              propFlex="unset"
              propAlignSelf="unset"
              propWidth="70px"
              propWidth1="unset"
              propHeight1="unset"
              propAlignSelf1="unset"
              propFlex1="unset"
            />
            <ProfileTile
              personaImage="/persona-image-5@2x.png"
              bornGlobal="Women’s Chamber"
              solidemojiHappy="/solidemojihappy.svg"
              solidemojiHappy1="/solidemojihappy.svg"
              propHeight="20px"
              propFlex="1"
              propAlignSelf="stretch"
              propWidth="127px"
              propWidth1="134px"
              propHeight1="40px"
              propAlignSelf1="stretch"
              propFlex1="1"
            />
            <ProfileTile
              personaImage="/persona-image-2@2x.png"
              bornGlobal="Guzo"
              solidemojiHappy="/solidemojihappy.svg"
              solidemojiHappy1="/solidemojihappy.svg"
              propHeight="20px"
              propFlex="1"
              propAlignSelf="stretch"
              propWidth="36px"
              propWidth1="134px"
              propHeight1="40px"
              propAlignSelf1="stretch"
              propFlex1="1"
            />
            <ProfileTile
              personaImage="/persona-image-7@2x.png"
              bornGlobal="Cup of JoeY"
              solidemojiHappy="/solidemojihappy.svg"
              solidemojiHappy1="/solidemojihappy.svg"
              propHeight="20px"
              propFlex="1"
              propAlignSelf="stretch"
              propWidth="82px"
              propWidth1="134px"
              propHeight1="40px"
              propAlignSelf1="stretch"
              propFlex1="1"
            />
            <ProfileTile
              personaImage="/persona-image-8@2x.png"
              bornGlobal="Hello Alice"
              solidemojiHappy="/solidemojihappy.svg"
              solidemojiHappy1="/solidemojihappy.svg"
              propHeight="20px"
              propFlex="1"
              propAlignSelf="stretch"
              propWidth="72px"
              propWidth1="134px"
              propHeight1="40px"
              propAlignSelf1="stretch"
              propFlex1="1"
            />
            <ProfileTile
              personaImage="/persona-image-9@2x.png"
              bornGlobal="LISC"
              solidemojiHappy="/solidemojihappy.svg"
              solidemojiHappy1="/solidemojihappy.svg"
              propHeight="20px"
              propFlex="1"
              propAlignSelf="stretch"
              propWidth="32px"
              propWidth1="134px"
              propHeight1="40px"
              propAlignSelf1="stretch"
              propFlex1="1"
            />
            <div className="h-[302px] w-48 rounded-3xs bg-neutral-10 box-border flex flex-col items-center justify-start py-[15px] px-5 gap-[30px] border-[1px] border-solid border-power-black-power-black-50">
              <div className="self-stretch flex flex-col items-center justify-start gap-[10px]">
                <div className="w-[120px] h-[120px] rounded-81xl bg-young-teal-young-teal-500 overflow-hidden shrink-0" />
                <div className="self-stretch h-5 flex flex-col items-center justify-start">
                  <div className="self-stretch flex-1 flex flex-row items-center justify-center">
                    <div className="self-stretch w-[100px] relative leading-[20px] font-semibold inline-block">
                      Account Name
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[134px] h-10 rounded-3xl bg-adventure-blue-adventure-blue-50 flex flex-row items-center justify-center py-2 px-5 box-border gap-[4px] text-base text-adventure-blue-adventure-blue-500">
                <img
                  className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/solidemojihappy.svg"
                />
                <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[24px] font-medium">
                  Contact Info
                </div>
                <img
                  className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/solidemojihappy.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[114px] h-10 rounded-lg shrink-0 flex flex-row items-center justify-center py-2 px-5 box-border gap-[4px] text-base text-adventure-blue-adventure-blue-500">
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
            alt=""
            src="/solidemojihappy.svg"
          />
          <div className="h-6 flex-1 relative leading-[24px] font-medium inline-block">
            See More
          </div>
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
            alt=""
            src="/solidemojihappy.svg"
          />
        </div>
      </div>
      {isContactInfoPopoutOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeContactInfoPopout}
        >
          <ContactInfoPopout onClose={closeContactInfoPopout} />
        </PortalPopup>
      )}
    </>
  );
};

export default PersonaNamesFrame;
