import axios from "axios"
export const Register = async ( username, password,url) => {
  const response = await axios.post(url, 
    { 
      username, 
      password 
    },
    {
      withCredentials: true, // Allow cookies to be sent with the request
    });
    return response
}