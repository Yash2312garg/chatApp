import axios from "axios";
import ChatsPage from "./Routes";
import ProtectedRoute from "./Routes";
import { UserContextProvider } from "./Context/UserContext";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from "./Pages/Homepage";
import Profile from "./Pages/Profile";
import Signup from "./Authentication/Signup";
import Profile2 from "./Pages/Profile2";
import AddFriend from "./Pages/AddFriend";
import Entry from "./learning/hooks/Entry";
import Chat from "./Chat/Chat";
function App() {
  const apiUrl = import.meta.env.VITE_API_URL;
  axios.defaults.baseURL = apiUrl
  axios.defaults.withCredentials = true;
  return (
    <BrowserRouter basename="">
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Signup />} />
          <Route path="/chats" element={
            <ProtectedRoute>
              <Chat />
            </ProtectedRoute>
          } />
          <Route path="/profile" element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } />

          <Route path="/addFriend" element={
            <ProtectedRoute>
              <AddFriend />
            </ProtectedRoute>
          } />
        </Routes>
      </UserContextProvider>
    </BrowserRouter>
  )
}

export default App
