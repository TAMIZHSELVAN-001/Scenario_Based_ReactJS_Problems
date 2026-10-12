import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({children}){
    const[user, setUser]=useState(null);
    //Login Function 
    function login(name){
        setUser({name});
    }

    //Logout Function
    function logout(){
        setUser(null);
    }

    //share the user and functions
    const value={
        user,
        login,
        logout,
    };

    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}
//Create a custom hook
export function  useAuth(){
    const context=useContext(AuthContext);
    //throw a helpful error outside the provider
    if(context==null){
        throw new Error(
            "useAuth must be used inside an AuthProvider."+
            "wrap your component tree with <AuthProvider>."
        );
    }
    return context;
}