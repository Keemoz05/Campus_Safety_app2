import React, { createContext, useContext, useState } from "react";
import { Alert } from "react-native";

type AppContextType = {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  signedIn: "student" | "security" | null;
  signIn: (role: "student" | "security") => void;
  signOut: () => void;
};

const AppContext = createContext<AppContextType>({
  darkMode: false,
  setDarkMode: () => {},
  signedIn: null,
  signIn: () => {},
  signOut: () => {},
});

export const useAppContext = () => useContext(AppContext);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [darkMode, setDarkMode] = useState(false);
  const [signedIn, setSignedIn] = useState<"student" | "security" | null>(
    null
  );

  const signIn = (role: "student" | "security") => {
    setSignedIn(role);
  };

  const signOut = () => {
    setSignedIn(null);
    Alert.alert("Signed Out", "You have been signed out.");
  };

  return (
    <AppContext.Provider
      value={{ darkMode, setDarkMode, signedIn, signIn, signOut }}
    >
      {children}
    </AppContext.Provider>
  );
};
