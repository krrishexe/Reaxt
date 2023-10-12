import React, { useState } from "react";
import userContext from "./UserContext";

const userContextProvider = ({children}) =>{
    const [user,setUser] = useState(null)
    // variable bana denge , state me store kar lenge , fir usko provider me pass kar denge.
    // we can directly call api right here and pass it to the children components like , <App /> and subchildren.
    
    return (
        <userContext.Provider value={{user,setUser}}>
            {children}
        </userContext.Provider>
    )
}

export default userContextProvider