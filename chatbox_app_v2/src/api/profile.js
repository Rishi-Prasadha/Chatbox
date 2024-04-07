 
import { auth,db } from "../firebase";
import axios from "axios";
import { doc,getDoc,setDoc , updateDoc,collection,addDoc}  from "firebase/firestore";
import {getStorage, ref, uploadBytes } from "firebase/storage"

const uploadFile=async(file)=>{
    console.log("Uploading")
    const storage = getStorage();
    const fileId=Math.random().toString(36).substring(2,8+2);
    const storageRef = ref(storage, `/${fileId}`);
    console.log(storageRef,"shote")
    const snapshot=await uploadBytes(storageRef, file)

    return `https://firebasestorage.googleapis.com/v0/b/${snapshot?.metadata?.bucket}/o/${snapshot?.metadata?.name}?alt=media`

}


export const profileApi= {
    edit:async function (user,file) {
          try{
               const {img,...rest}=user
               const image=await uploadFile(file)
               const ref =doc(db,"users",user?.id)
            
               await updateDoc(doc(db,"users",user?.id),{...rest,img:image})
            
             
               const docSnap = await getDoc(ref);
               return {status:docSnap.exists(),data:docSnap?.data(),id:docSnap?.id}

           }catch(e){
            console.log(e)
           }
    }
}