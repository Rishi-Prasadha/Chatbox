import { useCallback,useState } from "react";
import { useNavigate } from "react-router-dom";
import PersonaMenuAssembly1 from "../components/PersonaMenuAssembly1";
import ProfileInputFrames from "../components/ProfileInputFrames";
import ContactInput from "../components/contactnput";
import { orgState } from "../recoil/state";
import { useRecoilValue,useRecoilState } from "recoil";
import Modal from "../components/modal"
import {AiOutlineClose } from "react-icons/ai"


const Profile = () => {
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

   const [org,setOrg]=useRecoilState(orgState)
   const [trigger,setTrigger]=useState(false)
   
  return (
    <>
    
  
    <div className="w-full relative bg-neutral-10 flex flex-row items-start justify-start tracking-[normal] mq450:pl-5 mq450:pr-5 mq450:box-border">
      <div className="h-screen bg-black">
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

      </div>
 
      <main className="flex-1 bg-whitesmoke overflow-y-auto flex flex-col items-end justify-start py-[30px] px-[263px] box-border relative gap-[20px] max-w-[calc(100%_-_114px)] text-left text-base text-black-text font-text-l-medium lg:pl-[131px] lg:pr-[131px] lg:box-border mq450:pt-5 mq450:pb-5 mq450:box-border mq450:max-w-full">
        <div className="w-[200px] rounded-3xs bg-neutral-10 box-border hidden flex-col items-center justify-start gap-[10px] z-[0] border-[1px] border-solid border-power-black-power-black-50">
          <div className="self-stretch flex flex-row items-center justify-start py-2.5 px-[15px] gap-[20px]">
            <div className="h-[30px] w-[30px] flex flex-col items-center justify-center">
              <img
                className="w-[19.5px] h-5 relative"
                alt=""
                src="/iconactionsettings-24px.svg"
              />
            </div>
            <div className="h-6 flex flex-row items-center justify-start">
              <div className="self-stretch w-[63px] relative tracking-[-0.01em] leading-[24px] font-medium inline-block">
                Settings
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start py-2.5 pr-[49px] pl-[15px]">
            <div className="h-6 flex-1 flex flex-row items-center justify-start">
              <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[24px] font-medium">
                Change Password
              </div>
            </div>
          </div>
        </div>
        <div className="my-0 mx-[!important] absolute top-[27px] left-[10px] rounded-3xs bg-neutral-10 hidden flex-col items-center justify-start py-2.5 px-[9px] gap-[10px] z-[1] text-black border-[1px] border-solid border-power-black-power-black-50">
          <div className="w-[218px] flex flex-row items-center justify-start gap-[20px]">
            <div className="flex flex-row items-start justify-start">
              <div className="h-12 w-12 rounded-3xs bg-neutral-10 box-border flex flex-row items-center justify-center border-[0.5px] border-solid border-power-black-power-black-100">
                <div className="h-10 w-10 rounded-81xl bg-young-teal-young-teal-500 overflow-hidden shrink-0" />
              </div>
            </div>
            <div className="h-[22px] flex-1 flex flex-row items-center justify-start">
              <div className="self-stretch flex flex-row items-center justify-start">
                <div className="self-stretch w-[97px] relative tracking-[-0.01em] leading-[22px] font-semibold inline-block overflow-hidden text-ellipsis whitespace-nowrap">
                  Profile Name
                </div>
              </div>
            </div>
          </div>
          <div className="w-[218px] flex flex-row items-center justify-start gap-[20px]">
            <div className="flex flex-row items-start justify-start">
              <div className="h-12 w-12 rounded-3xs bg-neutral-10 box-border flex flex-row items-center justify-center border-[0.5px] border-solid border-power-black-power-black-100">
                <div className="h-10 w-10 rounded-81xl bg-young-teal-young-teal-500 overflow-hidden shrink-0" />
              </div>
            </div>
            <div className="h-[22px] flex-1 flex flex-row items-center justify-start">
              <div className="self-stretch flex flex-row items-center justify-start">
                <div className="self-stretch w-[97px] relative tracking-[-0.01em] leading-[22px] font-semibold inline-block overflow-hidden text-ellipsis whitespace-nowrap">
                  Profile Name
                </div>
              </div>
            </div>
          </div>
          <div className="w-[218px] flex flex-row items-center justify-start gap-[20px]">
            <div className="flex flex-row items-start justify-start">
              <div className="h-12 w-12 rounded-3xs bg-neutral-10 box-border flex flex-row items-center justify-center border-[0.5px] border-solid border-power-black-power-black-100">
                <div className="h-10 w-10 rounded-81xl bg-young-teal-young-teal-500 overflow-hidden shrink-0" />
              </div>
            </div>
            <div className="h-[22px] flex-1 flex flex-row items-center justify-start">
              <div className="self-stretch flex flex-row items-center justify-start">
                <div className="self-stretch w-[97px] relative tracking-[-0.01em] leading-[22px] font-semibold inline-block overflow-hidden text-ellipsis whitespace-nowrap">
                  Profile Name
                </div>
              </div>
            </div>
          </div>
          <div className="w-[218px] flex flex-row items-center justify-start gap-[20px]">
            <div className="flex flex-row items-start justify-start">
              <div className="h-12 w-12 rounded-3xs bg-neutral-10 box-border flex flex-row items-center justify-center border-[0.5px] border-solid border-power-black-power-black-100">
                <div className="h-10 w-10 rounded-81xl bg-young-teal-young-teal-500 overflow-hidden shrink-0" />
              </div>
            </div>
            <div className="h-[22px] flex-1 flex flex-row items-center justify-start">
              <div className="self-stretch flex flex-row items-center justify-start">
                <div className="self-stretch w-[97px] relative tracking-[-0.01em] leading-[22px] font-semibold inline-block overflow-hidden text-ellipsis whitespace-nowrap">
                  Profile Name
                </div>
              </div>
            </div>
          </div>
          <div className="w-[218px] flex flex-row items-center justify-start gap-[20px]">
            <div className="flex flex-row items-start justify-start">
              <div className="h-12 w-12 rounded-3xs bg-neutral-10 box-border flex flex-row items-center justify-center border-[0.5px] border-solid border-power-black-power-black-100">
                <div className="h-10 w-10 rounded-81xl bg-young-teal-young-teal-500 overflow-hidden shrink-0" />
              </div>
            </div>
            <div className="h-[22px] flex-1 flex flex-row items-center justify-start">
              <div className="self-stretch flex flex-row items-center justify-start">
                <div className="self-stretch w-[97px] relative tracking-[-0.01em] leading-[22px] font-semibold inline-block overflow-hidden text-ellipsis whitespace-nowrap">
                  Profile Name
                </div>
              </div>
            </div>
          </div>
          <div className="w-[218px] flex flex-row items-center justify-start py-0 px-[9px] box-border gap-[10px]">
            <img
              className="h-10 w-10 relative rounded-81xl"
              alt=""
              src="/button.svg"
            />
            <div className="h-[22px] flex-1 flex flex-row items-center justify-start">
              <div className="self-stretch flex-1 flex flex-row items-center justify-start">
                <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[22px] font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                  Add an Organization
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="cursor-pointer [border:none] py-1.5 px-[66.5px] bg-adventure-blue-adventure-blue-50 rounded-3xl flex flex-row items-start justify-start gap-[4px]">
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
            alt=""
            src="/solidemojihappy.svg"
          />
          <div className="h-6 w-[38px] relative text-base leading-[24px] font-medium font-text-l-medium text-adventure-blue-adventure-blue-500 text-left inline-block">{`Save `}</div>
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
            alt=""
            src="/solidemojihappy.svg"
          />
        </button>
        <section className="self-stretch rounded-3xs bg-neutral-10 overflow-y-auto shrink-0 flex flex-col items-start justify-start pt-[25px] px-[30px] pb-0 box-border gap-[485px] max-w-full text-left text-base text-adventure-blue-adventure-blue-500 font-text-l-medium mq450:gap-[242px]">
          <ProfileInputFrames
              org={org}
              setOrg={setOrg}
            />
          <div className="self-stretch h-[-515px] shrink-0 flex flex-row items-start justify-start py-0 px-5 box-border max-w-full">
            <div className="flex-1 flex flex-col items-start justify-start gap-[20px] max-w-full py-5">
       
              <div className="w-[148px] h-10 rounded-3xl bg-adventure-blue-adventure-blue-50 flex flex-row items-start justify-start py-2 px-5 box-border gap-[4px]">
                <img
                  className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/solidemojihappy.svg"
                />
                <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[24px] font- " onClick={()=>setTrigger(true)}>
                  Add a Contact
                </div>
                <img
                  className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/solidemojihappy.svg"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
    <Modal trigger={trigger}  cname="w-1/2    px-4 rounded-lg bg-white py-6" >
               {/* <div className='w-full flex justify-end px-6 py-2 bg-white'>
                    <AiOutlineClose 
                    onClick={()=>setTrigger(false)}
                 />
                 </div> */}

                 <div className="bg-white w-full ">
              <ContactInput
                  gordonTaylor="Rishi Prasadha"
                  cEO="Chief Cool Officer"
                  solidemojiHappy="/solidemojihappy.svg"
                  solidemojiHappy1="/solidemojihappy.svg"
                  propFlex="unset"
                  propAlignSelf="stretch"
                  propHeight="20px"
                  propAlignSelf1="stretch"
                  propHeight1="unset"
                  propPadding="unset"
                  propHeight2="20px"
                  setTrigger={setTrigger}
                  org={org}
                  setOrg={setOrg}
                />

                 </div>
      </Modal>
    </>
  );
};

export default Profile;
