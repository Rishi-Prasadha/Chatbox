import { useCallback, useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import PersonaMenuAssembly1 from "../components/PersonaMenuAssembly1";
import MainFrame from "../components/MainFrame";
import PersonaNamesFrame from "../components/PersonaNamesFrame";
import {doc,setDoc,
  addDoc,collection,
  getDoc,getDocs,
  query, where,updateDoc,orderBy,onSnapshot} from "firebase/firestore"
import { db } from "../firebase";
import { useRecoilValue } from "recoil";
import { accountTypeState } from "../recoil/state";
import BeatLoader from "react-spinners/BeatLoader";
import { useLocation,useParams} from "react-router-dom";
import { messageApi } from "../api/message";
const SearchScreen = () => {
  const navigate = useNavigate();

  const location =useLocation()
  const state=location?.state
  console.log(state,"state")




  const currentUser=useRecoilValue(accountTypeState)
  const [currentChat,setCurrentChat] =useState()
  const [conversations,setConversations]=useState([])
  const [loader,setLoading]=useState(false)

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
  
  const [isLoading,setLoader]=useState(false)
  const [newMessage, setNewMessage] = useState("");
  const [msgs,setMsg]=useState([])

  useEffect(()=>{
    const getConversations = async () => {
        try{
        
           const res =await messageApi.getMessages(state)
           console.log(res,"ress messages")
           setMsg(res)
          }catch(error){
             console.log(error)
           }
         };

      if(state?.length >0){
        getConversations();
         }
      
 
     },[state])  


     const send=async (e)=>{
      console.log(newMessage,"sending")
      if (newMessage?.length == 0) {
        return;
      }
      
      setLoading(true)
      
      const message = {
        sender:currentUser?.id,
        text: newMessage,
        conversationid:currentChat?.id,
        date:Number(Date.now()),
        time:new Date()
      };
   
      try{
          const res =await messageApi.sendMessages(state,newMessage)
          setMsg(prev=>[...prev,...res])
          setNewMessage("")
        
          //  const docRef = await addDoc(collection(db, "messages"),message);
      
          //   const docSnap = await getDoc(docRef);
          //   docSnap?.exists()&& setNewMessage("")
          //   docSnap?.exists()&& setLoading(false)
          setLoading(false)
          }catch (err) {
            console.log(err)
            setLoading(false)
        }
    }


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
          <PersonaNamesFrame 
            currentChat={currentChat}
            state={state}
            msgs={msgs}
            setMsg={setMsg}
          />
        </section>
        <div className="w-[926px] flex flex-row items-start justify-center max-w-full">
          <div className="w-[600px] rounded-3xl bg-neutral-10 box-border flex flex-row flex-wrap items-start justify-start py-2 px-[15px] gap-[8px] max-w-full border-[1px] border-solid border-neutral-50">
            <div className="flex-1 flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border min-w-[325px] max-w-full">
              <textarea 
              className="self-stretch py-3 relative leading-[20px] font-medium inline-block outline-none" 
              placeholder=" Search Guzo...."
              value={newMessage}
              onChange={(e)=>setNewMessage(e.target.value)}
              />
               
              
            </div>
            <div className="h-9 rounded-3xl bg-adventure-blue-adventure-blue-500 flex flex-row items-start justify-start py-1.5 px-5 box-border gap-[4px] text-base text-neutral-neutral-100"
              onClick={()=>!loader&&send()}
             >
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                alt=""
                src="/solidemojihappy.svg"
              />
              <div className="self-stretch w-0 relative leading-[24px] font-medium inline-block" />
              <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0 text-center">
                {!loader?
                
                <img
                  className="w-4 h-4 relative"
                  loading="lazy"
                  alt=""
                  src="/send-24px.svg"
                />
                :
                <BeatLoader color="white" size={8}/>

               }
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SearchScreen;
