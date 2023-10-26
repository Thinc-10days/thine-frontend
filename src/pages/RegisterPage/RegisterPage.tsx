import { Box, Button, Center, Input, Text } from "@chakra-ui/react";
import { useState } from "react";

export const RegisterPage: React.FC = () => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredFirstName, setEnteredFirstName] = useState("");
  const [enteredLastName, setEnteredLastName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredPassword(event.target.value);
  };

  const handleFirstNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEnteredFirstName(event.target.value);
  };

  const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredLastName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredEmail(event.target.value);
  };

  return (
    <Center bg="white" h="100vh" color="#303030">
      <Box
        bgColor={"gray.200"}
        borderRadius={"16px"}
        px="80px"
        py="40px"
        gap="20px"
      >
        <Center>
          <Text fontSize="4xl" fontWeight={700} mb="10px">
            {" "}
            Sign up{" "}
          </Text>
        </Center>
        <Text fontSize="3xl" fontWeight={700} mb="10px">
          {" "}
          Username{" "}
        </Text>
        <Input
          p={2}
          placeholder="username"
          bgColor={"white"}
          w="400px"
          mb="15px"
          value={enteredUsername}
          onChange={handleUsernameChange}
        />
        <Text fontSize="3xl" fontWeight={700} mb="10px">
          {" "}
          First name{" "}
        </Text>
        <Input
          p={2}
          placeholder="first name"
          bgColor={"white"}
          w="400px"
          mb="15px"
          value={enteredFirstName}
          onChange={handleFirstNameChange}
        />
        <Text fontSize="3xl" fontWeight={700} mb="10px">
          {" "}
          Last name{" "}
        </Text>
        <Input
          p={2}
          placeholder="last name"
          bgColor={"white"}
          w="400px"
          mb="15px"
          value={enteredLastName}
          onChange={handleLastNameChange}
        />
        <Text fontSize="3xl" fontWeight={700} mb="10px">
          {" "}
          Email{" "}
        </Text>
        <Input
          p={2}
          placeholder="email"
          bgColor={"white"}
          w="400px"
          mb="15px"
          type="email"
          value={enteredEmail}
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
          onChange={handlePasswordChange}
        />
        <Box textAlign="right" mt="20px">
          <Button p="10px 20px" _hover={{ backgroundColor: "primary.0" }}>
            Sign up
          </Button>
        </Box>
      </Box>
    </Center>
  );
};
