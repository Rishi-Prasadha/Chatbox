import { useCallback ,useEffect,useState} from "react";
import { useNavigate } from "react-router-dom";
import PersonaMenuAssembly1 from "../components/PersonaMenuAssembly1";
import Modal from "../components/modal";
import { ClipLoader } from "react-spinners";
import { authApi } from "../api/auth";
import { useRecoilValue } from "recoil";
import { accountTypeState } from "../recoil/state";

const Settings = () => {
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

  const onAccountSettingsTextClick = useCallback(() => {
    navigate("/account-settings");
  }, [navigate]);

  const onTeammatesTextClick = useCallback(() => {
    // Please sync "Teammates" to the project
  }, []);

  const onBillingTextClick = useCallback(() => {
    // Please sync "Teammates" to the project
  }, []);

  const [trigger,setTrigger]=useState(false)
  const [loader,setLoading]=useState(false)
  const currentUser=useRecoilValue(accountTypeState)

  const deleteUser=async()=>{
        console.log("delete")
    
      try{
      
            const res=await authApi.delete(currentUser)
            
            res&&localStorage.clear();
           
            res&&navigate("/signup-screen1");
                  res&&setLoadiing(false)
        }catch(e){
          setLoading(false)

      }
  }

  console.log(loader,"lpad")

  return (
    <>
    <div className="w-full relative bg-neutral-10 overflow-hidden flex flex-row items-start justify-start tracking-[normal] mq450:pl-5 mq450:pr-5 mq450:box-border">
      <PersonaMenuAssembly1
        personaImage="/persona-image1@2x.png"
        homeIcon="/home-icon.svg"
        iconsocialpersonOutline24="/iconsocialperson-outline-24px.svg"
        iconactionsettings24px="/iconactionsettings-24px.svg"
        personaImage1="/persona-image-11@2x.png"
        menuFrameHeight="987px"
        onMenuButtonAssemblyClick={onMenuButtonAssemblyClick}
        onMenuButtonAssembly1Click={onMenuButtonAssembly1Click}
        onMenuButtonAssembly2Click={onMenuButtonAssembly2Click}
      />
      <main className="h-[1024px] flex-1 bg-whitesmoke overflow-y-auto flex flex-col items-center justify-start py-[30px] px-0 box-border relative gap-[20px] max-w-[calc(100%_-_114px)] text-left text-base text-black font-text-l-medium mq450:max-w-full">
        <div className="w-[200px] rounded-3xs bg-neutral-10 box-border hidden flex-col items-center justify-start gap-[10px] z-[0] text-black-text border-[1px] border-solid border-power-black-power-black-50">
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
        <div className="my-0 mx-[!important] absolute top-[27px] left-[10px] rounded-3xs bg-neutral-10 hidden flex-col items-center justify-start py-2.5 px-[9px] gap-[10px] z-[1] border-[1px] border-solid border-power-black-power-black-50">
          <div className="w-[218px] flex flex-row items-center justify-start gap-[20px]">
            <div className="flex flex-row items-start justify-start">
              <div className="h-12 w-12 rounded-3xs bg-neutral-10 box-border flex flex-row items-center justify-center border-[0.5px] border-solid border-power-black-power-black-100">
                <div className="h-10 w-10 rounded-81xl bg-young-teal-young-teal-500 overflow-hidden shrink-0" />
              </div>
            </div>
            <div className="h-[22px] flex-1 flex flex-row items-center justify-start">
              <div className="self-stretch flex flex-row items-center justify-start py-0 pr-5 pl-0">
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
              <div className="self-stretch flex flex-row items-center justify-start py-0 pr-5 pl-0">
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
              <div className="self-stretch flex flex-row items-center justify-start py-0 pr-5 pl-0">
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
              <div className="self-stretch flex flex-row items-center justify-start py-0 pr-5 pl-0">
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
              <div className="self-stretch flex flex-row items-center justify-start py-0 pr-5 pl-0">
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
        <div className="w-[750px] h-[275px] rounded-3xs bg-neutral-10 overflow-hidden shrink-0 flex flex-col items-start justify-start py-6 px-[35px] box-border gap-[33px] max-w-full text-5xl mq450:w-[calc(100%_-_40px)]">
          <div className="flex flex-col items-start justify-start">
            <h3 className="m-0 w-[98px] h-[34px] relative text-inherit leading-[34px] font-semibold font-inherit inline-block">
              Settings
            </h3>
          </div>
          <div className="flex flex-col -space-y-4">
            <div
              className="self-stretch relative cursor-pointer "
              onClick={onAccountSettingsTextClick}
            >
             <h5 className="text-sm">Account Settings</h5> 
            </div>
        
        
            <div className="self-stretch relative text-energy-red-energy-red-500 inline-block shrink-0 cursor-pointer">
             <h5 className="text-sm" onClick={()=>setTrigger(true)}>Delete Account</h5> 
            </div>
          </div>
        </div>
        <img
          className="w-6 h-6 relative shrink-0"
          loading="lazy"
          alt=""
          src="/expand-more-24px.svg"
        />
      </main>
    </div>
        <Modal trigger={trigger}  cname="w-1/3    px-4 rounded-lg bg-white py-6" >
            <div className="flex w-full flex-col">
                 <h3 className="w-full text-center text-4xl">Are You sure ? </h3>
                 <div className="flex justify-center">
                     <div  className="w-1/2 flex justify-center space-x-6 items-center">
                        <h5 onClick={()=>setTrigger(false)}>Close</h5>
                        {!loader?


                        <h5 className="bg-red-500 py-2 rounded-full px-6" onClick={()=>setLoading(true)||deleteUser()}>Delete</h5>
                        :
                        <ClipLoader color="red" />
                      }
                       
                     </div>

                 </div>

            </div>
          
        </Modal>

    </>
  );
};

export default Settings;
