import React, { useState } from 'react';
import { createContext } from 'react';
type data = {
    searchName:string | null,
    setSearchName:(searchName:string)=>void,
    imagesData:{
        name:string
    }[] ,
    setImagesData:(imageData:{name:string}[])=>void
}
export const AuthContext = createContext < data>(null!)
const AuthProvider: React.FC<{ children: React.ReactNode }> = ({children} ) => {
      let [searchName, setSearchName] = useState<string>('')
      let [imagesData,setImagesData] = useState<{name:string}[]>([])
    const authInfo = { searchName, setSearchName,imagesData,setImagesData }
    return (
      <AuthContext.Provider value={authInfo}>
           {children}
      </AuthContext.Provider>   
    );
};

export default AuthProvider;

 