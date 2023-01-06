import axios from "axios"
const BASE_URL ='https://youtube-v31.p.rapidapi.com'
const options = {
    params: {
      maxResults: 50,
    },
    headers: {
      'X-RapidAPI-Key': '36d6539cd9msh241ce93d8ce4d9bp124750jsn2353adb1a3ea',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
    },
  };
export const fetchFromAPI = async(url) =>{
   const {data} = await axios.get(`${BASE_URL}/${url}`, options)
   return data;
}