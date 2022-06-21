import React, { createContext, useState } from "react";

export const ThemeContext = createContext<any>("");

export const ThemeProvider = (props: any) => {
  const [isDarkmode, setIsDarkmode] = useState(false);

  console.log(isDarkmode);

  return (
    <div>
      <ThemeContext.Provider value={{ isDarkmode, setIsDarkmode }}>
        {props.children}
      </ThemeContext.Provider>
    </div>
  );
};
