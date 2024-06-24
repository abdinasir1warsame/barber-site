import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!user) {
      axios
        .get('/profile', { withCredentials: true }) // Add credentials option here
        .then(({ data }) => {
          console.log(data);
          setUser(data);
        })
        .catch((error) => {
          console.error('Error fetching user data:', error);
          setUser(null); // Handle error by setting user to null or an error message
        });
    }
  }, [user]); // Include user in the dependency array

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
