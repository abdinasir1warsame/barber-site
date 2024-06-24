import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user data on component mount
    axios
      .get('/profile', { withCredentials: true })
      .then(({ data }) => {
        console.log(data);
        if (data) {
          setUser(data);
        } else {
          setUser(null); // No user data means unauthenticated
        }
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
        setUser(null); // Handle error by setting user to null or an error message
      });
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
