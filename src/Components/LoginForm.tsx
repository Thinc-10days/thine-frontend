import { Center, Input, Button, Box, Text } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LOGIN_USER } from "../store/type";
import { useDispatch } from "react-redux";

interface Props {
  setIsLoginMode: (isLoginMode: boolean) => void;
}

export const LoginForm: React.FC<Props> = ({ setIsLoginMode }) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredUsername(event.target.value);
  };

  const passwordChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEnteredPassword(event.target.value);
  };

  const handleLogin = async () => {
    const body = {
      username: enteredUsername,
      password: enteredPassword,
    };

    try {
      const resp = await axios.post("http://localhost:3000/auth/signin", body);
      console.log(resp.data);
      localStorage.setItem("token", resp.data.token);
      dispatch({ type: LOGIN_USER, payload: resp.data });
      navigate("/");
    } catch (error) {
      alert(JSON.stringify(error));
    }
  };
  return (
    <Center bg="white" h="100vh">
      <Box
        bgColor={"gray.200"}
        borderRadius={"16px"}
        px="100px"
        py="100px"
        gap="20px"
      >
        <Center>
          <Text fontSize="4xl" fontWeight={700} mb="10px">
            {" "}
            Sign in{" "}
          </Text>
        </Center>
        <Text fontSize="3xl" fontWeight={700} mb="10px">
          {" "}
          Email{" "}
        </Text>
        <Input
          p={2}
          placeholder="Email"
          bgColor={"white"}
          w="400px"
          mb="15px"
          type="email"
          value={enteredUsername}
          onChange={handleEmailChange}
        />
        <Text fontSize="3xl" fontWeight={700} mb="10px">
          {" "}
          Password{" "}
        </Text>
        <Input
          p={2}
          placeholder="password"
          bgColor={"white"}
          w="400px"
          mb="15px"
          type="password"
          value={enteredPassword}
          onChange={passwordChangeHandler}
        />

        <Text
          onClick={() => setIsLoginMode(false)}
          _hover={{ textDecoration: "underline" }}
          cursor={"pointer"}
          width={"30%"}
        >
          {" "}
          Create account?{" "}
        </Text>
        <Box textAlign="right" mt="20px">
          <Button
            p="10px 20px"
            onClick={handleLogin}
            _hover={{ backgroundColor: "primary.0" }}
          >
            {" "}
            Login
          </Button>
        </Box>
      </Box>
    </Center>
  );
};
