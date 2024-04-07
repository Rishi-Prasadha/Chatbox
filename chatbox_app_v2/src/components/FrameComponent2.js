import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent from "./FrameComponent";
import { authApi } from "../api/auth";
import { ClipLoader } from "react-spinners";
import { accountTypeState } from "../recoil/state";
import { useRecoilState } from "recoil";
const FrameComponent2 = () => {
  const [currentUser,setcurrentUser]=useRecoilState(accountTypeState)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loader,setLoader]=useState(false)
  const [errorMsg, setErrorMsg] = useState(null)

  const navigate = useNavigate();

  const onButtonClick = async() => {
     try{
      setLoader(true)
      const user=await authApi.login(email,password)

    
      setLoader(false)
      localStorage.clear();
      localStorage.setItem('account',JSON.stringify(user));
      setcurrentUser(user)
      user?.id.length >0&& navigate("/-profile");

      setLoader(false)

     }catch(e){
      console.log(e)
      setLoader(false)
     }
  }

  return (
    <div className="m-0 flex-1 flex flex-col items-start justify-start gap-[10px]">
      <div className="self-stretch rounded-3xs flex flex-col items-start justify-start gap-[4px]">
        <div className="self-stretch h-[18px] relative text-xs leading-[18px] font-medium font-text-l-medium text-power-black-power-black-300 text-left inline-block">
          Email
        </div>
        <div className="self-stretch rounded-lg bg-neutral-601 overflow-hidden flex flex-row items-start justify-start p-1.5 border-[1px] border-solid border-neutral-100">
          <input
            className="[border:none] [outline:none] font-medium font-text-l-medium text-sm bg-[transparent] h-5 w-52 relative tracking-[-0.01em] leading-[20px] text-adventure-blue-adventure-blue-700 text-left inline-block shrink-0 p-0"
            placeholder="Email"
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="self-stretch relative text-xs leading-[18px] font-text-l-medium text-neutral-60 text-left hidden">
          Text helper
        </div>
      </div>
      <div className="self-stretch rounded-3xs flex flex-col items-start justify-start gap-[4px]">
        <div className="self-stretch h-[18px] relative text-xs leading-[18px] font-medium font-text-l-medium text-power-black-power-black-300 text-left inline-block">
          Password
        </div>
        <div className="self-stretch rounded-lg bg-neutral-601 overflow-hidden flex flex-row items-start justify-start p-1.5 border-[1px] border-solid border-neutral-100">
          <input
            className="[border:none] [outline:none] font-medium font-text-l-medium text-sm bg-[transparent] h-5 w-52 relative tracking-[-0.01em] leading-[20px] text-adventure-blue-adventure-blue-700 text-left inline-block shrink-0 p-0"
            placeholder="Password"
            type="text"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className="self-stretch h-[18px] relative text-xs [text-decoration:underline] leading-[18px] font-text-l-medium text-adventure-blue-adventure-blue-5001 text-left inline-block">
          Forgot Password?
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-[57.5px] pb-5">
      {!loader?
        <button
          className="cursor-pointer [border:none] py-2 px-[74.5px] bg-adventure-blue-adventure-blue-50 flex-1 rounded-3xl flex flex-row items-start justify-start gap-[4px]"
          onClick={onButtonClick}
        >
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
            alt=""
            src="/solidemojihappy.svg"
          />
          <div className="h-6 w-[51px] relative text-base tracking-[-0.01em] leading-[24px] font-medium font-text-l-medium text-adventure-blue-adventure-blue-500 text-left inline-block">
            Sign in
          </div>
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
            alt=""
            src="/solidemojihappy.svg"
          />
        </button>
        :
                 <div className="flex w-full justify-center">
                      <ClipLoader 
                        color="blue"
                        loading={true}
                        />
              </div>
        }
      </div>
      <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[14.5px]">
        <div className="h-3 flex-1 flex flex-col items-start justify-start pt-3 px-0 pb-0 box-border min-w-[78px]">
          <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-black" />
        </div>
        <div className="h-6 w-[46px] relative text-base tracking-[-0.01em] leading-[24px] font-medium font-text-l-medium text-black text-center inline-block shrink-0">
          or
        </div>
        <div className="h-3 flex-1 flex flex-col items-start justify-start pt-3 px-0 pb-0 box-border min-w-[78px]">
          <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-black" />
        </div>
      </div>
      <div className="self-stretch flex flex-col items-center justify-start py-5 px-0">
        <div className="self-stretch flex flex-col items-start justify-start">
          <FrameComponent
            image2="/image-2@2x.png"
            signUpWithGoogle="Sign in with Google"
            propWidth="21px"
            signUpWithDisplay="inline-block"
          />
        </div>
      </div>
      <div className="self-stretch flex flex-col items-center justify-start">
        <div className="self-stretch flex flex-col items-center justify-center pt-[30px] px-0 pb-0">
          <div className="w-[177px] h-6 relative text-base tracking-[-0.01em] leading-[24px] font-semibold font-text-l-medium text-black text-center inline-block">
            Don’t have an account?
          </div>
        </div>
        <div className="w-[200px] flex flex-col items-center justify-start pt-2.5 px-0 pb-[30px] box-border">
          <button className="cursor-pointer [border:none] py-2 px-5 bg-gray-200 self-stretch rounded-3xl flex flex-row items-center justify-center gap-[4px]">
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
              alt=""
              src="/solidemojihappy.svg"
            />
            <div className="h-6 w-[57px] relative text-base tracking-[-0.01em] leading-[24px] font-medium font-text-l-medium text-neutral-10 text-left inline-block whitespace-nowrap">
              Sign up
            </div>
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
              alt=""
              src="/solidemojihappy.svg"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
