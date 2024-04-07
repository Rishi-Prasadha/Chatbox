import { useState, useCallback,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { messageApi } from "../api/message";
import { accountTypeState } from "../recoil/state";
import { useRecoilValue } from "recoil";
import BeatLoader from "react-spinners/BeatLoader";
import {doc,setDoc,
  addDoc,collection,
  getDoc,getDocs,
  query, where,updateDoc,orderBy,onSnapshot} from "firebase/firestore"
import { db } from "../firebase";
import { Link } from "react-router-dom";



const SearchBox = () => {
  const [doINeedValue, setDoINeedValue] = useState("");
  const [button1Value, setButton1Value] = useState("");
  const [button2Value, setButton2Value] = useState("");
  const [button3Value, setButton3Value] = useState("");
  const [button4Value, setButton4Value] = useState("");
  const [button5Value, setButton5Value] = useState("");
  const [loader,setLoader]=useState(false)
  const [msgs,setMsg]=useState([])

  const currentUser=useRecoilValue(accountTypeState)
  const navigate = useNavigate();

  const onButtonClick =async () => {
      setLoader(true)
       try{
        const res=await messageApi.startConversation(currentUser)
        res?.length >0&&navigate("/search-screen",{state:res});
        setLoader(false)
       }catch(e){
        setLoader(false)
        console.log(e)
       }

  }

  const onButtonContainerClick = useCallback(() => {
    navigate("/search-history");
  }, [navigate]);

  const onSearchInputContainer1Click = useCallback(() => {
    navigate("/search-screen");
  }, [navigate]);

  function timeAgo(dateString) {
    const date = new Date(dateString);
    const now = new Date();

    const seconds = Math.floor((now - date) / 1000);
    let interval = Math.floor(seconds / 31536000);

    if (interval >= 1) {
        return interval === 1 ? interval + " year ago" : interval + " years ago";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval >= 1) {
        return interval === 1 ? interval + " month ago" : interval + " months ago";
    }
    interval = Math.floor(seconds / 86400);
    if (interval >= 1) {
        return interval === 1 ? interval + " day ago" : interval + " days ago";
    }
    interval = Math.floor(seconds / 3600);
    if (interval >= 1) {
        return interval === 1 ? interval + " hour ago" : interval + " hours ago";
    }
    interval = Math.floor(seconds / 60);
    if (interval >= 1) {
        return interval === 1 ? interval + " minute ago" : interval + " minutes ago";
    }
    return Math.floor(seconds) === 1 ? Math.floor(seconds) + " second ago" : Math.floor(seconds) + " seconds ago";
}
  

  
  useEffect(()=>{
    const getConversations = async () => {
         
      
         try{

               console.log(currentUser?.threads,"thread")
              if(currentUser?.threads?.length >0){
                   console.log("here")
                   let msgArray=[]
                  
                   const promises = currentUser?.threads?.map(async (thread) => {
                    const res = await messageApi.limitMessages(thread);
                    const textsArray = res?.map(message => message.text) ?? [];
                    console.log(res, "res messages");
                    return {
                        texts: textsArray,
                        timePeriod: timeAgo(res[0]?.createdAt),
                        thread:thread
                    };
                }) ?? [];
        
                   const results = await Promise.all(promises);
           
        
               
                   setMsg(results)
                   
              }


         
          }catch(error){
             console.log(error)
           }
       
         };

      if(currentUser?.id?.length >0){
        getConversations();
         }
      
 
     },[currentUser?.threads]) 

     console.log(msgs,"msg")
  return (
    <div className="w-[700px] overflow-y-auto shrink-0 flex flex-col items-center justify-start pt-[30px] px-2.5 pb-[52px] box-border gap-[20px] max-w-full text-left text-sm text-neutral-60 font-text-l-medium mq450:pt-5 mq450:pb-[34px] mq450:box-border">
      <img
        className="w-[53.9px] h-5 relative shrink-0 object-cover"
        loading="lazy"
        alt=""
        src="/guzo-1-1@2x.png"
      />
      <h1 className="m-0 w-[578px] h-11 relative text-17xl leading-[44px] font-semibold font-inherit text-black inline-block max-w-full mq450:text-10xl mq450:leading-[35px]">
        Welcome back, Impact Hub Team
      </h1>
      <div className="w-[600px] rounded-3xl bg-neutral-10 box-border flex flex-row flex-wrap items-center justify-start py-2 px-[15px] gap-[8px] max-w-full border-[1px] border-solid border-neutral-50">
        <div className="h-5 flex-1 relative leading-[20px] font-medium inline-block min-w-[193px] max-w-full">
          How can Guzo connect you today.....
        </div>
        <button
          className="cursor-pointer [border:none] py-2 px-5 bg-adventure-blue-adventure-blue-500 h-10 rounded-3xl flex flex-row items-center justify-center box-border gap-[4px]"
          onClick={()=>!loader&&onButtonClick()}
        >
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
            alt=""
            src="/solidemojihappy.svg"
          />
          <div className="h-6 w-36 relative text-base text-center leading-[24px] font-medium font-text-l-medium text-neutral-neutral-100 text-left inline-block">
            {!loader?
              "Start a new search"
              :

              <BeatLoader color="white" size={10}/>
            }
       
          </div>
          {!loader&&
          <img className="h-4 w-4 relative" alt="" src="/send-24px.svg" />
           }
        </button>
      </div>
      <div className="w-[600px] flex flex-row items-start justify-center max-w-full text-dimgray">
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
              className="[border:none] [outline:none] font-medium font-text-l-medium text-sm bg-[transparent] h-5 flex-1 relative leading-[20px] text-dimgray text-left inline-block min-w-[250px] max-w-full p-0"
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
      <div className="self-stretch flex flex-row items-center justify-between gap-[20px] text-center text-xl text-black-text">
        <div className="w-[139px] flex flex-row items-start justify-start">
          <div className="h-7 flex-1 relative tracking-[-0.02em] leading-[28px] font-semibold inline-block">
            Search History
          </div>
        </div>
        <div
          className="h-10 rounded-lg flex flex-row items-center justify-center py-2 px-5 box-border gap-[4px] cursor-pointer text-left text-base text-adventure-blue-adventure-blue-500"
          onClick={onButtonContainerClick}
        >
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
            alt=""
            src="/solidemojihappy.svg"
          />
          <div className="h-6 w-[53px] relative leading-[24px] font-medium inline-block">
            See All
          </div>
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
            alt=""
            src="/solidemojihappy.svg"
          />
        </div>
      </div>
          <div className="flex flex-col w-full -space-y-8">
             {msgs?.map((msg)=>{
                return(
                    <div className="flex flex-col space-y-4">
                         <h5 className="text-[24px] font-semibold text-black">{msg?.timePeriod}</h5>

                          <div className="flex flex-col px-8 space-y-3">
                              {msg?.texts?.slice(0,3)?.map((text)=>{
                                  return(
                                    <Link to="/search-screen" state={msg?.thread}>
                                          <div className="w-full py-2 px-4 rounded-3xl  border border-solid border-neutral-50"  style={{background: "#ECEBFE"}}>
                                            <p className="font-semibold ">{text}</p>
                                          </div>
                                    
                                    </Link>
                                   
                                  )
                              })

                              }
                          </div>
                    </div>
                )
             })

             }

          </div>
           
 



 
    </div>
  );
};

export default SearchBox;
