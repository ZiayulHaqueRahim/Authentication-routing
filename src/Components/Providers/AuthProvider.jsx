import { createContext } from "react";
const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

   
    const authInfo = {
        name: 'Authenticated'
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {/*Main part who will have access to this context */}
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;



// 1.create context with null as default
//2.create a provider & set a default value on it
//3.[attention please:    inside this  any thing given they can access the context  also get access to children element and hen de structure it]
//4.