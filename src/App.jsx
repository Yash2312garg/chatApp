import axios from "axios";
import ChatsPage from "./Routes";
import { UserContextProvider } from "./Context/UserContext";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from "./Pages/Homepage";
import Profile from "./Pages/Profile";
import Signup from "./Authentication/Signup";
function App() {
  axios.defaults.baseURL = "http://localhost:4000/"
  axios.defaults.withCredentials = true;
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/chats" element={<ChatsPage />} />
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  )
}

export default App
