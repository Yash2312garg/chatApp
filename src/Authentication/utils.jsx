import axios from "axios"
export const Register = async (payload, url) => {

  console.log(url)
  const response = await axios.post(url,
    payload,
    {
      withCredentials: true, // Allow cookies to be sent with the request
    });
  return response
}

export const Login = async (username, password,url) => {

  console.log(url)
  const response = await axios.post(url,
    {
      login: username,
      password: password,
    },
    {
      withCredentials: true, // Allow cookies to be sent with the request
    });
  return response
}