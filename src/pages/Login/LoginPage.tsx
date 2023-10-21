// import { login } from "../../services/AuthService"

import { Box, Button, Center, Input, Text } from "@chakra-ui/react";

export const LoginPage = () => {
  return (
    <Center bg="white" h="100vh" color="#303030">
      <Box
        bgColor={"rgba(239, 174, 199, 0.50)"}
        borderRadius={"16px"}
        px="100px"
        py="100px"
        gap="20px"
      >
        <Text fontSize="3xl" fontWeight={700} mb="10px">
          {" "}
          username{" "}
        </Text>
        <Input
          p={2}
          placeholder="username"
          bgColor={"white"}
          w="400px"
          mb="15px"
        />
        <Text fontSize="3xl" fontWeight={700} mb="10px">
          {" "}
          password{" "}
        </Text>
        <Input
          p={2}
          placeholder="password"
          bgColor={"white"}
          w="400px"
          mb="15px"
        />
        <Box textAlign="right" mt="20px">
          <Button p="10px 20px"> log in</Button>
        </Box>
      </Box>
    </Center>
  );
};

{
  /* <Box my="150px" mx="100px">
          <Text color="black">Username</Text>
          <Input placeholder="username" bgColor={"white"} />
          <Text color="black">Password</Text>
          <Input placeholder="password" bgColor={"white"} />
        </Box> */
}
