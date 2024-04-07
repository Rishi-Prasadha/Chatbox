import { useMemo,useRef,useState } from "react";
import { ClipLoader } from "react-spinners";
import { createProfile } from "../api/createProfile";
const ContactInput = ({
  name,
  role,
  email,
  phone,
  solidemojiHappy,
  solidemojiHappy1,
  propFlex,
  propAlignSelf,
  propHeight,
  propAlignSelf1,
  propHeight1,
  propPadding,
  propHeight2,
  setTrigger,
  org,
  setOrg
}) => {
  const nameAreaInputStyle = useMemo(() => {
    return {
      flex: propFlex,
      alignSelf: propAlignSelf,
    };
  }, [propFlex, propAlignSelf]);

  const profileImageStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const uploadProfilePhotoContainerStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
    };
  }, [propAlignSelf1]);

  const frameNameAreaStyle = useMemo(() => {
    return {
      height: propHeight1,
      padding: propPadding,
    };
  }, [propHeight1, propPadding]);

  const nameStyle = useMemo(() => {
    return {
      height: propHeight2,
    };
  }, [propHeight2]);

  const [file,setFile]=useState()
  const [url,setUrl]=useState("")
  const [team,setTeam]=useState({})
  const [loader,setLoader]=useState(false)
  const [errorMsg, setErrorMsg] = useState(null)

  const hiddenFileInput = useRef()


  const handleClick = event => {
       hiddenFileInput.current.click()
   }

    const handleChange = async(e)=> {
        const dir = e.target.files[0]
        console.log(dir,"dir")
        if (dir) {
          setUrl({
              src: URL.createObjectURL(dir)
            })
        }
       setFile(dir)
  
    }

    const addTeam=async()=>{
      setErrorMsg(null)
  
      try{
          setLoader(true)
           const user=await createProfile.addTeam(org,team,file)
          setLoader(false)
          setTrigger(false)
           console.log(user)
   
      
       
 
      }catch(e){
          setLoader(false)
          setErrorMsg(e?.message)
       }
       
    }

  return (
    <div
      className="flex-1 rounded-3xs box-border flex flex-col items-end justify-start py- px-[9px] gap-[20px] max-w-full shrink-0 text-left text-xs text-neutral-60 font-text-l-medium border-[1px] border-solid border-black"
      style={nameAreaInputStyle}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[10px] text-sm text-neutral-90">
        <div
          className="self-stretch h-5 relative tracking-[-0.01em] leading-[20px] font-medium inline-block"
          style={profileImageStyle}
        >
          Profile Image
        </div>
        <div className="w-full flex justify-center">

       
        {url?.length ==0&&
                        <div className='rounded-full h-44 w-44 flex flex-col justify-center items-center -space-y-6' style={{background: "rgba(242, 242, 242, 0.6)"}}
                            onClick={handleClick}
                            >
                            <h5 className='text-sm font-light'>Upload Profile Photo*</h5> 
                            <h5 className='text-xs font-light'>(Acceptable: jpeg, png)</h5>

                            <input
                                type="file"
                                className='hidden'
                                ref={hiddenFileInput}
                                onChange={handleChange}
                                />
                            </div>
                            }
                            { url?.src?.length > 0&&
                                <div className='rounded-full h-44 w-44'
                                    onClick={handleClick}
                                    >
                                    <img
                                    src={url?.src}
                                    className='w-full h-full rounded-full'
                                    />
                                        <input
                                            type="file"
                                            className='hidden'
                                            ref={hiddenFileInput}
                                            onChange={handleChange}
                                            />
                                    
                                </div>
                            
                            }
                             </div>
      </div>
      <div
        className="self-stretch h-14 flex flex-col items-start justify-start pt-0 px-0 pb-[30px] box-border gap-[4px] text-sm text-neutral-90"
        style={frameNameAreaStyle}
      >
        <div
          className="self-stretch h-5 relative tracking-[-0.01em] leading-[20px] font-medium inline-block"
          style={nameStyle}
        >
          Name
        </div>
        <div className="self-stretch h-8 rounded-lg bg-neutral-10 box-border overflow-hidden shrink-0 flex flex-row items-start justify-start p-1.5 text-power-black-power-black-500 border-[1px] border-solid border-power-black-power-black-50">
          <input className="self-stretch w-full outline-none relative tracking-[-0.01em] leading-[20px] font-medium inline-block shrink-0"
             value={team?.name}
             onChange={(e)=>setTeam({...team,name:e.target.value})}
           />
          
        
        </div>
      </div>
      <div className="relative leading-[18px] hidden" />
      <div className="self-stretch flex flex-col items-start justify-start gap-[4px] text-sm text-neutral-90">
        <div className="self-stretch h-5 relative tracking-[-0.01em] leading-[20px] font-medium inline-block">
          Role
        </div>
        <div className="self-stretch h-8 rounded-lg bg-neutral-10 box-border overflow-hidden shrink-0 flex flex-row items-start justify-start p-1.5 text-power-black-power-black-500 border-[1px] border-solid border-power-black-power-black-50">
               <input className="self-stretch w-full outline-none relative tracking-[-0.01em] leading-[20px] font-medium inline-block shrink-0" 
                    value={team?.role}
                    onChange={(e)=>setTeam({...team,role:e.target.value})}
               />
        </div>
      </div>
      <div className="relative leading-[18px] hidden" />
      <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
        <div className="self-stretch relative leading-[18px] hidden" />
        <div className="self-stretch flex flex-col items-start justify-start gap-[4px] text-sm text-neutral-90">
          <div className="self-stretch h-5 relative tracking-[-0.01em] leading-[20px] font-medium inline-block">
            Email
          </div>
          <div className="self-stretch h-8 rounded-lg bg-neutral-10 box-border overflow-hidden shrink-0 flex flex-row items-center justify-start p-1.5 text-power-black-power-black-500 border-[1px] border-solid border-power-black-power-black-50">
               <input className="self-stretch w-full outline-none relative tracking-[-0.01em] leading-[20px] font-medium inline-block shrink-0"
                    value={team?.email}
                    onChange={(e)=>setTeam({...team,email:e.target.value})}
                />
          </div>
          <div className="self-stretch relative text-xs leading-[18px] text-neutral-60 hidden" />
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
        <div className="self-stretch relative leading-[18px] hidden" />
        <div className="self-stretch flex flex-col items-start justify-start gap-[4px] text-sm text-neutral-90">
          <div className="self-stretch h-5 relative tracking-[-0.01em] leading-[20px] font-medium inline-block">
            Phone
          </div>
          <div className="self-stretch h-8 rounded-lg bg-neutral-10 box-border overflow-hidden shrink-0 flex flex-row items-center justify-start p-1.5 text-power-black-power-black-500 border-[1px] border-solid border-power-black-power-black-50">
                <input className="self-stretch w-full outline-none relative tracking-[-0.01em] leading-[20px] font-medium inline-block shrink-0"
                      value={team?.phone}
                      onChange={(e)=>setTeam({...team,phone:e.target.value})}
                 />
          </div>
          <div className="self-stretch relative text-xs leading-[18px] text-neutral-60 hidden" />
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
        <div className="self-stretch relative leading-[18px] hidden" />
        <div className="self-stretch flex flex-col items-start justify-start gap-[4px] text-sm text-neutral-90">
          <div className="self-stretch h-5 relative tracking-[-0.01em] leading-[20px] font-medium inline-block">
            LinkedIn
          </div>
          <div className="self-stretch h-8 rounded-lg bg-neutral-10 box-border overflow-hidden shrink-0 flex flex-row items-center justify-start p-1.5 text-power-black-power-black-500 border-[1px] border-solid border-power-black-power-black-50">
               <input className="self-stretch w-full outline-none relative tracking-[-0.01em] leading-[20px] font-medium inline-block shrink-0" />
          </div>
          <div className="self-stretch relative text-xs leading-[18px] text-neutral-60 hidden" />
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
        <div className="self-stretch relative leading-[18px] hidden" />
        <div className="self-stretch flex flex-col items-start justify-start gap-[4px] text-sm text-neutral-90">
          <div className="self-stretch h-5 relative tracking-[-0.01em] leading-[20px] font-medium inline-block">{`Scheduling `}</div>
          <div className="self-stretch h-8 rounded-lg bg-neutral-10 box-border overflow-hidden shrink-0 flex flex-row items-center justify-start p-1.5 text-power-black-power-black-500 border-[1px] border-solid border-power-black-power-black-50">
               <input className="self-stretch w-full outline-none relative tracking-[-0.01em] leading-[20px] font-medium inline-block shrink-0" />
          </div>
          <div className="self-stretch relative text-xs leading-[18px] text-neutral-60 hidden" />
        </div>
      </div>
        <div className='w-full flex justify-end  py-2'>
                    <div className='flex w-1/3 space-x-4 '>
                    <button className=' py-3 bg-white px-5  text-black' onClick={()=>setTrigger(false)}>Back</button>
                      {!loader?
                           <button className='bg-black py-2 px-6 text-white rounded-full' onClick={addTeam}>Continue</button>
                           :
                           <ClipLoader 
                             color='orange'
                           />

                      }
                 

                    </div>
                   
                
              </div>
        
    </div>
  );
};

export default ContactInput;
