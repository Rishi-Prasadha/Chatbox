import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword ,
    GoogleAuthProvider,
    signInWithPopup,
    sendPasswordResetEmail,
    signOut,} from "firebase/auth";
   
import { auth,db } from "../firebase";
import { doc,getDoc,setDoc,updateDoc }  from "firebase/firestore";
import axios from "axios";


export const authApi= {
    register:async function (email,password,firstname,lastname) {
        try{
            const credential = await createUserWithEmailAndPassword(auth,email,password)
            const user=credential.user
            const ref =doc(db,"users",user?.uid)
            await setDoc(ref,{id:user?.uid,firstname:firstname,lastname:lastname,email:email,img:"",threads:[]})
            const docSnap = await getDoc(ref);
            if (docSnap.exists()) {
                return {id:docSnap?.id,...docSnap?.data()}
              } else {
                
                console.log("No such document!");
              }
            

        }catch(e){
            console.log(e)
            throw new Error(e);
         }
       

    },
    login:async function (email,password) {
        try{
           const response = await signInWithEmailAndPassword(auth,email,password)
           console.log(response,"resss")
           const ref =doc(db,"users",response?.user?.uid)
           const docSnap = await getDoc(ref);
           if (docSnap.exists()) {

                     return {id:docSnap?.id,...docSnap?.data()}
                   

               } else {
                 throw new Error("You are not signed up")
                   console.log("No such document!");
                   
               }
    

           

        }catch(e){
           console.log(e)
           throw new Error(e);
        }

},
delete:async function (user) {
    try{
      await deleteDoc(doc(db,"users",user?.id));
      return true
    }catch(e){

    }
}


}