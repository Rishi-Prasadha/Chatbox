import { auth ,db} from "../firebase";
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

export const createProfile= {
    createOrgProfile:async function (payload,file,currentUser) {
          try{
                    console.log("result")
                    console.log(file,"file")
                    const storage = getStorage();
                    const fileId=Math.random().toString(36).substring(2,8+2);
                    const storageRef = ref(storage, `/${fileId}`);
                    console.log(storageRef,"shote")

                    const snapshot=await uploadBytes(storageRef, file)
                    console.log(snapshot,"shote")

                    const orgSnap = await addDoc(collection(db, "organizations"),{
                        ...payload,
                        img:`https://firebasestorage.googleapis.com/v0/b/${snapshot?.metadata?.bucket}/o/${snapshot?.metadata?.name}?alt=media`,
                        team:[

                            currentUser
                          ]
                    })

                    const orgRef=doc(db,"organizations",orgSnap?.id)
                    const docSnap = await getDoc(orgRef);
                    const docOrg=docSnap.data()

                    console.log(docOrg,"org")
                  
                    if (docSnap.exists()) {
                        return true
                    }


            }catch(e){
              console.log(e)
           }

    },
    addTeam:async function (org,contact,file) {
         try{
            const image=await uploadFile(file)
            const ref =doc(db,"organizations",org?.id)
            
            await updateDoc(doc(db,"organizations",org?.id),{
                  team:[...org?.team,{...contact,img:image}]
            })
         
          
            const docSnap = await getDoc(ref);
            return {status:docSnap.exists(),data:docSnap?.data(),id:docSnap?.id}

          }catch(e){
            console.log(e)
          }

    }
}