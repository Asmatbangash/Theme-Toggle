import React, { createContext, useEffect, useState } from 'react';

// Create context with proper default values
export const cardContext = createContext({
  Theme: 'bg-black', // Default theme
  changeTheme: () => {}, // Placeholder function
});

function ContextApi({ children }) {
  const [Theme, setTheme] = useState('bg-black'); // Initialize with a default theme

  const darkTheme = () => {
    setTheme('bg-black')
  }

  const lightTheme = () =>{
    setTheme('bg-white')
  }

  useEffect(() => {
    document.querySelector('.cardMode').classList.remove("bg-black", "bg-white")
  
    document.querySelector('.cardMode').classList.add(Theme)
  },[Theme])

  return (
    <cardContext.Provider value={{ Theme, darkTheme, lightTheme }}>
      {children}
    </cardContext.Provider>
  );
}

export default ContextApi;