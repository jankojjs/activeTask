import LoginCard from "../components/LoginCard/LoginCard";
import { useState } from 'react';
import PreLoginNav from "../components/PreLoginNav/PreLoginNav";

function LoginPage() {
    const [loginCardHandler, setLoginCardHandler] = useState(false);

    return (
        <div>
            <PreLoginNav />
            { loginCardHandler && <LoginCard /> }
        </div>
    )
}

export default LoginPage;