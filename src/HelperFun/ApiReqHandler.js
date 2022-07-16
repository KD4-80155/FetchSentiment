import axios from 'axios';

const GetFromApi=async(url)=>{
  try{
      const res=await axios.get(url,{withCredentials: true});
      console.log(res.data);
      return res.data;
  }
  catch{
    return([])
  }
}

const PostToApi=async(url,data)=>{
  
  try{
      const res=await axios.post(url,data,{withCredentials: true});
      return res.data;
  }
  catch{
    return([])
  }
}
export {GetFromApi,PostToApi};