import React, { createContext, useContext, useState } from "react";
const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext)

function AuthProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const login = () => setIsLoggedIn(true)
    const logOut=()=>setIsLoggedIn(false)
    return ( 
        <AuthContext.Provider value={{ isLoggedIn, login, logOut }}>
            {children}

        </AuthContext.Provider>
    )
}

export default AuthProvider;
