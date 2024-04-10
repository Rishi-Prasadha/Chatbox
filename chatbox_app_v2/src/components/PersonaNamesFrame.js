import { useState, useCallback,useEffect,useRef } from "react";
import ContactInfoPopout from "./ContactInfoPopout";
import PortalPopup from "./PortalPopup";
import ProfileTile from "./ProfileTile";
import {doc,setDoc,
  addDoc,collection,
  getDoc,getDocs,
  query, where,updateDoc,orderBy,onSnapshot} from "firebase/firestore"
import { db } from "../firebase";
import { useRecoilValue } from "recoil";
import { accountTypeState } from "../recoil/state";
import guzo from "../asset/aiguzo.png"
import BeatLoader from "react-spinners/BeatLoader";
import Modal from "./modal";

const PersonaNamesFrame = ({currentChat,state,msgs,setMsg}) => {
  const [isContactInfoPopoutOpen, setContactInfoPopoutOpen] = useState(false);

  const openContactInfoPopout = useCallback(() => {
    setContactInfoPopoutOpen(true);
  }, []);

  const closeContactInfoPopout = useCallback(() => {
    setContactInfoPopoutOpen(false);
  }, []);
  const currentUser=useRecoilValue(accountTypeState)

  const chatRef= useRef(null);
 

     useEffect(() => {
      if (chatRef.current) {
        chatRef.current.scrollTop = chatRef.current.scrollHeight;
      }
    },[msgs])

     console.log("msgs:", msgs)
     console.log("currentChat:",currentChat)

  return (
       <div className="w-full flex flex-col py-20 items-center overflow-x-hidden">
            <div className="flex w-full justify-center">
                 <h5>Guzo</h5>
            </div>
            <div className="flex flex-col w-4/5 overflow-y-scroll  space-y-4 px-10" style={{height:"60vh"}}
               ref={chatRef}
            >
                {msgs?.map((msg)=>{
                    return(
                      <div className="w-full flex flex-col space-y-4">
                           <div className={`${msg?.role==="user"?"w-full flex justify-end":"w-full flex justify-start"}`}>
                              {msg?.role=="user"?
                                    <img 
                                    src={currentUser?.img}
                                    className="h-10 rounded-full w-10"
                                 />
                                 :
                                 <img 
                                 src={guzo}
                                 className="h-10 rounded-full w-10"
                              />


                              }
                            
                           </div>

                           <div className="w-full py-2 px-4 rounded-lg border border-solid border-neutral-50" style={{background: "#ECEBFE"}}>
                              <div className="response-text leading-[20px] font-medium inline-block ">
                                {msg?.text}
                              </div>
                          </div>
                          {msg?.keywords?.length !=undefined&&msg?.keywords?.length >0&&
                              <Orgs 
                                keywords={msg?.keywords}
                              />

                          }

              


                      </div>
                     )
                })

                }
               </div>
     </div>

          );
     };

export default PersonaNamesFrame;




const Orgs=({keywords})=>{
    const [orgs,setOrgs]=useState([])
    const [search,setSearches]=useState("")
  const textArray = keywords.map(innerArray => innerArray[0]);

   console.log(textArray,"ttt")

  useEffect(()=>{
   const q = query(collection(db, "organizations"));
   const unsubscribe = onSnapshot(q, (querySnapshot) => {
       const ecosystems = []
       querySnapshot.forEach((doc) => {
             ecosystems.push({ ...doc.data(), id: doc.id })

       });
             const lowercaseQualifierArray = textArray.map(tag => tag.toLowerCase());

               // Filter objects based on the qualifierArray
               const filteredArray = ecosystems.filter(obj =>
               obj.tags.some(tag => lowercaseQualifierArray.includes(tag.toLowerCase()))
               );

               filteredArray?.length===0 &&setSearches("No")
               filteredArray?.length >0 &&setSearches("")

               setOrgs(filteredArray)


  
        });
  },[])
       console.log(orgs,"opo")
    return(
      <>
            <div>
         {orgs?.length===0&&
              <div className="w-full flex justify-center">
                   <BeatLoader 
                     size={12}
                     color="blue"
                   />
              </div>

         }
          <div className="grid grid-flow-row grid-cols-3  gap-4 gap-y-8 h-full w-full">
                {orgs?.map((org)=>{
                    return(
                    <ProfileTile 
                      org={org}
                    />
                    )
                })

                }

              </div>
      </div>
        {/* <Modal trigger={trigger}  cname="w-1/2 py-2   px-8 rounded-lg ">
         <div>
            <ContactInfoPopout />
         </div>

     </Modal> */}
      </>
  
    )
}