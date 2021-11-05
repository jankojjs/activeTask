import { createContext, useState } from "react";

const LoginContext = createContext({
    user: {},
    online: false,
    loginUser: (us)=>{},
    logoutUser: (us)=>{}
});

export function LoginContextProvider(props) {
    const [userData, setUserData] = useState({});
    const [userOnline, setUserOnline] = useState(false);

    function loginUserHandler(userData) {
        setUserData(userData);
        setUserOnline(true);
    }

    function logoutUserHandler() {
        setUserData({});
        setUserOnline(false);
        localStorage.clear();
    }

    const context = {
        user: userData,
        online: userOnline,
        loginUser: loginUserHandler,
        logoutUser: logoutUserHandler
    };

    return <LoginContext.Provider value={context}>
        {props.children}
    </LoginContext.Provider>
} 

export default LoginContext;