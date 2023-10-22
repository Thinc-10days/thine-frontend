import { useState } from "react";
import { LoginForm } from "../../components/LoginForm";
import { RegisterPage } from "../RegisterPage/RegisterPage";

export const LoginPage = () => {
  const [loginMode, setIsLoginMode] = useState(true);

  const Component = loginMode ? (
    <LoginForm setIsLoginMode={setIsLoginMode} />
  ) : (
    <RegisterPage />
  );

  return <>{Component}</>;
};

// export const LoginPage = () => {
//   const [loginMode, setIsLoginMode] = useState(true);

//   const Component = loginMode ? (<LoginForm setIsLoginMode={setIsLoginMode} />) : (<h1 onClick={() => setIsLoginMode(true)}> hello world</h1>
//   );

//   return <>{Component}</>;
// };
