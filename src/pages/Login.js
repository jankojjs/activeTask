import LoginCard from "../components/LoginCard/LoginCard";
import { useState } from "react";
import PreLoginNav from "../components/PreLoginNav/PreLoginNav";

function LoginPage() {
  const [loginCardHandler, setLoginCardHandler] = useState(false);

  function loginCardHandlerOpen() {
    setLoginCardHandler(true);
  }

  return (
    <div>
      {loginCardHandler && <PreLoginNav login={loginCardHandlerOpen} />}
      <LoginCard />
    </div>
  );
}

export default LoginPage;
