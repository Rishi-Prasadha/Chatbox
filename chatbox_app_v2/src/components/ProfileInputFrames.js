import { useState ,useRef} from "react";
import NameAreaInput from "./NameAreaInput";

const ProfileInputFrames = ({ org,setOrg}) => {
  console.log(org,"org")
  const [guzoTextValue, setGuzoTextValue] = useState("");
  const [wwwguzoioTextValue, setWwwguzoioTextValue] = useState("");
  const [wwwlinkedincominguzoTextValue, setWwwlinkedincominguzoTextValue] =
    useState("");

    const hiddenFileInput = useRef()

    const handleClick = event => {
         hiddenFileInput.current.click()
     }

      const handleChange = async(e)=> {
          const dir = e.target.files[0]
          console.log(dir,"dir")
          if (dir) {
            // setUrl({
            //     src: URL.createObjectURL(dir)
            //   })
          }
        //  setFile(dir)
    
      }
  return (
    <div className="self-stretch flex flex-col items-start justify-start max-w-full text-left text-xl text-black font-text-l-medium">
      <div className="self-stretch flex flex-row items-start justify-start max-w-full">
        <div className="flex-1 flex flex-col items-start justify-center max-w-full">
          <div className="flex flex-col items-start justify-start">
            <div className="flex flex-row items-center justify-center">
              <h3 className="m-0 h-7 w-[61px] relative text-inherit tracking-[-0.02em] leading-[28px] font-semibold font-inherit inline-block">
                Profile
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-5 pb-5 box-border max-w-full text-center text-xs">
        <div className="flex-1 flex flex-col items-start justify-start gap-[20px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
        
                    {org?.img?.length ==0&&
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
                            { org?.img?.length > 0&&
                                <div className='rounded-full h-44 w-44'
                                    onClick={handleClick}
                                    >
                                    <img
                                    src={org?.img}
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
          <div className="self-stretch flex flex-row items-start justify-start max-w-full text-left text-xl">
            <div className="flex-1 flex flex-col items-start justify-center max-w-full">
              <div className="flex flex-col items-start justify-start">
                <div className="flex flex-row items-center justify-center">
                  <h3 className="m-0 h-7 w-[161px] relative text-inherit tracking-[-0.02em] leading-[28px] font-semibold font-inherit inline-block">
                    Organization Info
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-5 pb-5 box-border max-w-full text-sm text-neutral-90">
        <div className="flex-1 flex flex-col items-start justify-start py-0 px-[30px] box-border gap-[20px] max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
            <div className="self-stretch h-5 relative tracking-[-0.01em] leading-[20px] font-medium inline-block">
              Organization Name
            </div>
            <div className="self-stretch rounded-lg bg-neutral-10 overflow-hidden flex flex-row items-center justify-start p-1.5 border-[1px] border-solid border-power-black-power-black-50">
              <input
                className="[border:none] [outline:none] font-medium font-text-l-medium text-sm bg-[transparent] h-5 w-52 relative tracking-[-0.01em] leading-[20px] text-power-black-power-black-500 text-left inline-block shrink-0 p-0"
                placeholder="Guzo"
                type="text"
                value={org?.name}
                onChange={(e) => setOrg({name:e.target.value,...org})}
              />
            </div>
            <div className="self-stretch relative text-xs leading-[18px] text-neutral-60 hidden" />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
            <div className="self-stretch h-5 relative tracking-[-0.01em] leading-[20px] font-medium inline-block">
              Website
            </div>
            <div className="self-stretch rounded-lg bg-neutral-10 overflow-hidden flex flex-row items-center justify-start p-1.5 border-[1px] border-solid border-power-black-power-black-50">
              <input
                className="[border:none] [outline:none] font-medium font-text-l-medium text-sm bg-[transparent] h-5 w-52 relative tracking-[-0.01em] leading-[20px] text-power-black-power-black-500 text-left inline-block shrink-0 p-0"
                placeholder="www.guzo.io"
                type="text"
                value={org?.website}
                onChange={(e) => setOrg({website:e.target.value,...org})}
              />
            </div>
            <div className="self-stretch relative text-xs leading-[18px] text-neutral-60 hidden" />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[20px] text-xs text-neutral-60">
            <div className="self-stretch relative leading-[18px] hidden" />
            <div className="self-stretch flex flex-col items-start justify-start gap-[4px] text-sm text-neutral-90">
              <div className="self-stretch h-5 relative tracking-[-0.01em] leading-[20px] font-medium inline-block">
                LinkedIn
              </div>
              <div className="self-stretch rounded-lg bg-neutral-10 overflow-hidden flex flex-row items-center justify-start p-1.5 border-[1px] border-solid border-power-black-power-black-50">
                <input
                  className="[border:none] [outline:none] font-medium font-text-l-medium text-sm bg-[transparent] h-5 w-52 relative tracking-[-0.01em] leading-[20px] text-left inline-block shrink-0 p-0"
                  placeholder="www.linkedin.com/in/guzo "
                  type="text"
                  value={org?.linkedin}
                  onChange={(e) => setOrg({linkedin:e.target.value,...org})}
                />
              </div>
              <div className="self-stretch relative text-xs leading-[18px] text-neutral-60 hidden" />
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[20px] text-xs text-neutral-60">
            <div className="self-stretch relative leading-[18px] hidden" />
            <div className="self-stretch flex flex-col items-start justify-start gap-[4px] text-sm text-neutral-90">
              <div className="self-stretch h-5 relative tracking-[-0.01em] leading-[20px] font-medium inline-block">
                Address
              </div>
              <div className="self-stretch h-24 rounded-lg bg-neutral-10 box-border overflow-hidden shrink-0 flex flex-row items-center justify-start p-1.5 text-power-black-power-black-500 border-[1px] border-solid border-power-black-power-black-50">
                <div className="h-10 w-52 relative tracking-[-0.01em] leading-[20px] font-medium inline-block shrink-0">
                  <p className="m-0">777 Main St.</p>
                  <p className="m-0">Houston, TX 77002</p>
                </div>
              </div>
              <div className="self-stretch relative text-xs leading-[18px] text-neutral-60 hidden" />
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-5 pb-5 box-border max-w-full">
        <div className="flex-1 flex flex-row items-start justify-start max-w-full">
          <div className="flex-1 flex flex-col items-start justify-center max-w-full">
            <div className="flex flex-col items-start justify-start">
              <div className="flex flex-row items-center justify-center">
                <h3 className="m-0 h-7 w-[93px] relative text-inherit tracking-[-0.02em] leading-[28px] font-semibold font-inherit inline-block">
                  The Team
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch h-[251px] flex flex-row items-start justify-start pt-0 px-5 pb-0 box-border max-w-full text-xs text-neutral-60">
        {org?.team?.map((mate)=>{
             const name=mate?.name?.length !=undefined? mate?.name :`${mate?.firstname + " " + mate?.lastname}`
            return(
              <NameAreaInput
              name={name}
              role={mate?.role}
              phone={mate?.phone}
              email={mate?.email}
              img={mate?.img}
              solidemojiHappy="/solidemojihappy.svg"
              solidemojiHappy1="/solidemojihappy.svg"
              propFlex="1"
              propHeight1="56px"
              propPadding="0px 0px 30px"
            />
            )
        })

        }
  
      </div>
    </div>
  );
};

export default ProfileInputFrames;
