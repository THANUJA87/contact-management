import commonApi from "./commonApi";
import SERVERURL from "./ServerURL"; 

 export const  addContact = async (ContactDetails) =>{
    return await commonApi("POST",`${SERVERURL}/AddContact`,ContactDetails)
 }

 export const  getContact = async () =>{
   return await commonApi("GET",`${SERVERURL}/AddContact`,"")
}

export const  deleteContact = async (id) =>{
   return await commonApi("DELETE",`${SERVERURL}/AddContact/${id}`,{})
}

export const updateContact = async(contactDetails) =>{
   return await commonApi(`PUT`,`${SERVERURL}/AddContact/${contactDetails.id}`,contactDetails)
}
export const getContactById = async (id) => {
   return await commonApi("GET", `${SERVERURL}/AddContact/${id}`);
 };
