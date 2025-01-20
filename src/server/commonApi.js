import axios from "axios";



const commonApi = async (httpmethod,url,reqbody) => {
   const reqConfiq = {
    method : httpmethod,
    url,
    data : reqbody
   }

   return await axios (reqConfiq) .then((res)=>{
    return res
   }).catch((err) =>{
    return err
   })
}

export default commonApi

