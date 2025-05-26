import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [userName, setUserName] = useState(() => localStorage.getItem("userName") || null);
  const [id, setId] = useState(() => localStorage.getItem("userId") || null);
  const [token, setToken] = useState(() => localStorage.getItem("userToken") || null);

  // Set up axios default header when token changes
  useEffect(() => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      delete axios.defaults.headers.common["Authorization"];
    }
  }, [token]);

  useEffect(() => {
    const fetchProfile = async () => {
      // If we already have user data, no need to fetch
      if (id && userName && token) return;
      
      // Only try to fetch if we have a token
      if (!token) return;
      
      try {
        const response = await axios.get('/profile', {
          withCredentials: true,
        });
        
        if (response.data && response.data._id) {
          setId(response.data._id);
          setUserName(response.data.username);
          // Save to localStorage
          localStorage.setItem("userId", response.data._id);
          localStorage.setItem("userName", response.data.username);
        }
      } catch (error) {
        console.error("Error fetching profile:", error.message);
        // Clear context and localStorage on error
        logout();
      }
    };
    
    fetchProfile();
  }, [id, userName, token]);

  const login = (userData, authToken) => {
    setUserName(userData.username);
    setId(userData.id);
    setToken(authToken);
    
    // Save to localStorage
    localStorage.setItem("userId", userData.id);
    localStorage.setItem("userName", userData.username);
    localStorage.setItem("userToken", authToken);
  };

  const logout = () => {
    setUserName(null);
    setId(null);
    setToken(null);
    
    // Clear localStorage
    localStorage.removeItem("userId");
    localStorage.removeItem("userName");
    localStorage.removeItem("userToken");
    
    // Remove Authorization header
    delete axios.defaults.headers.common["Authorization"];
  };

  return (
    <UserContext.Provider value={{ 
      userName, 
      setUserName, 
      id, 
      setId, 
      token, 
      setToken,
      login,
      logout 
    }}>
      {children}
    </UserContext.Provider>
  );
}