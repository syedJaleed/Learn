import { createContext, useState } from "react";

export const AppContext = createContext();

export function AppProvider({children}){

    const [darkMode, setDarkMode] = useState(false);
    const [user, setUser] = useState(null);

    function login(username){
        setUser({ name: username });
    };

    function logout(){
        setUser(null);
    }

    function toggleTheme(){
        setDarkMode((prevMode) => !prevMode);
    };

    return (
        <AppContext.Provider value={{ darkMode, toggleTheme, user, login, logout }}>
          {children}
        </AppContext.Provider>
    );

}