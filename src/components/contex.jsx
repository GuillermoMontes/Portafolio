import { createContext, useState } from "react";

export const dataContext = createContext();

const DataProvider = ({ children }) => {

    
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const cerrarNav = () => {
    if (nav) {
      setNav(false);
    }
  };

  return (
    <dataContext.Provider value={{ nav, handleNav, cerrarNav }}>
      {children}
    </dataContext.Provider>
  );
};

export default DataProvider;
