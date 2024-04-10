import { collection,  onSnapshot,
    doc, getDocs,
    query, orderBy, 
    limit,getDoc,setDoc ,
   updateDoc,addDoc ,where} from 'firebase/firestore'
import { db } from '../firebase';
import axios from 'axios';


let domain = "https://guzo-nlp.onrender.com";
// domain = "http://0.0.0.0:8080";

export const messageApi = {
    startConversation: async function (currentUser) {
       
        try{
         
              const url=`${domain}/create-thread`
      

               const config = {
                 headers:{
                    'Content-Type': 'application/json',
                    },
                };
  
            
              
            
                const response= await axios.post(
                        url,
                        config
                  )
                  console.log(response?.data?.thread_id,"rrr")
                await updateDoc(doc(db,"users",currentUser?.id), {
                    threads:[...currentUser?.threads,response?.data?.thread_id]
                   })
               

             return response?.data?.thread_id
           
             
          }catch(e){
            console.log(e)
         }

    },
    getMessages: async function (threadId) {
        try{
            const url=`${domain}/get-messages/${threadId}`
      

            const config = {
              headers:{
                 'Content-Type': 'application/json',
                 },
             };

         
           
         
             const response= await axios.get(
                     url,
                     config
               )
               console.log(response?.data?.data,"resss")
               const rearrangedData = rearrangeAndSortData(response?.data?.data);
               console.log(rearrangedData ,"ii")
               return rearrangedData 
           
          }catch(e){
             console.log(e)
         }
       },
       limitMessages: async function (threadId) {
        try{
            const url=`${domain}/limit-messages/${threadId}`
      

            const config = {
              headers:{
                 'Content-Type': 'application/json',
                 },
             };

         
           
         
             const response= await axios.get(
                     url,
                     config
               )
               console.log(response?.data?.data,"resss")
               const rearrangedData = rearrangeAndSortData(response?.data?.data);
               console.log(rearrangedData ,"ii")
               return rearrangedData 
           
          }catch(e){
             console.log(e)
         }
       },
       sendMessages: async function (threadId,message) {
        try{
            const url1=`${domain}/send-message`
            const url2=`${domain}/run-assistant`
      

            const config = {
              headers:{
                 'Content-Type': 'application/json',
                 },
             };

         
           
         
             const response1= await axios.post(
                     url1,
                     {
                         message:message,
                         user_thread_id:threadId
                      },
                     config
               )
               const response2= await axios.post(
                url2,
                {
                    message:message,
                    user_thread_id:threadId
                 },
                config
          )
               console.log(response1?.data?.message?.content[0].text.value,"resss 1")
               console.log(response2?.data?.message?.data,"resss 2")
               console.log(response2?.data?.message?.keywords,"key")

               return [{text:response1?.data?.message?.content[0].text.value,role:"user"},{text:response2?.data?.message?.data,role:"assistant",keywords:response2?.data?.message?.keywords}]
           
          }catch(e){
             console.log(e)
         }
       }

}

function rearrangeAndSortData(data) {
    // Sort the data array in ascending order based on createdAt
    data.sort((a, b) => {
      const dateA = new Date(a.created_at * 1000);
      const dateB = new Date(b.created_at * 1000);
      return dateA - dateB; // Sort in ascending order (from oldest to newest)
    });
  
    // Map the sorted data array to the desired format
    return data.map(item => {
      const { content, created_at, role } = item;
      const text = content && content.length > 0 && content[0].text.value;
      const createdAt = new Date(created_at * 1000); // Convert UNIX timestamp to milliseconds
  
      // Determine the role based on the presence of assistant_id
      const updatedRole = item.assistant_id ? 'assistant' : 'user';
  
      return {
        text: text || '', // If text is not available, set it to an empty string
        role: role || updatedRole, // If role is not available, use the updatedRole
        createdAt: createdAt.toLocaleString(), // Convert createdAt to a readable date format
      };
    });
  }