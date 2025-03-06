import axios from "axios";
import ChatsPage from "./Routes";
import { UserContextProvider } from "./Context/UserContext";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from "./Pages/Homepage";
import Profile from "./Pages/Profile";
import Signup from "./Authentication/Signup";
import Profile2 from "./Pages/Profile2";
function App() {
  const apiUrl = import.meta.env.VITE_API_URL;
  axios.defaults.baseURL = apiUrl
  axios.defaults.withCredentials = true;
  return (
    <UserContextProvider>
      <BrowserRouter basename = "">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/chats" element={<ChatsPage />} />
          <Route path="/profile2" element={<Profile2 />} />

          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  )
}

export default App
