import React, {
  useState,
  useContext,
  useEffect,
  createContext,
  ReactNode,
} from "react";

interface DarkModeContextProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const DarkModeContext = createContext<DarkModeContextProps | undefined>(
  undefined
);

const DarkModeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

const useDarkMode = (): DarkModeContextProps => {
  const context = useContext(DarkModeContext) as DarkModeContextProps;
  if (context === undefined) {
    throw new Error("useDarkMode must be used within a DarkModeProvider");
  }
  return context;
};

export { DarkModeProvider, useDarkMode };
