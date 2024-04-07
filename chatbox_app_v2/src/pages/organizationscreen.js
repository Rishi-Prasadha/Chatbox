import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent from "../components/FrameComponent";
import OrgForm from "../components/OrgForm";

const OrgScreen = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("account"))

  const onFrameContainer1Click = useCallback(() => {
    navigate("/signup-screen");
  }, [navigate]);

  const onFrameContainerClick = useCallback(() => {
    navigate("/sign-in-screen");
  }, [navigate]);

  return (
    <div className='w-full h-screen py-20' style={{background: "rgba(242, 242, 242, 0.6)"}}>
    <div className='flex  h-full w-full justify-center  items-center space-x-20'>
                    <div className="self-stretch flex flex-col items-start justify-center gap-[1px] ">
                        <div className="self-stretch flex flex-row items-start justify-start py-0 px-[62px]">
                            <img
                            className="h-[135px] flex-1 relative max-w-full overflow-hidden object-cover"
                            loading="lazy"
                            alt=""
                            src="/logo--guzo-2@2x.png"
                            />
                        </div>
                        <img
                            className="self-stretch h-[74.3px] relative max-w-full overflow-hidden shrink-0 object-cover"
                            loading="lazy"
                            alt=""
                            src="/guzo-1-11@2x.png"
                        />
                        
                    </div>

       <div className='w-3/5 h-full py-20 overflow-y-scroll no-scrollbar'>
          <OrgForm  user={user}/>

       </div>

 </div>
 </div>
  );
};

export default OrgScreen;
