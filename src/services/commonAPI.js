import axios from 'axios';
const commonAPI=async(httprequest,url,reqBody,reqHeader)=>{
 const reqConfiq={
    method:httprequest,
    url,data:reqBody,
    headers:reqHeader
 }
 return await axios(reqConfiq).then(res=>
 {
    return res;
 }).catch(error=>{
    return error
 })
    
 }
export default commonAPI



