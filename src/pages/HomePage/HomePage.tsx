import {
  Box,
  Button,
  Center,
  Text,
  useColorMode,
  useColorModePreference,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Image } from "@chakra-ui/react";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";

export const HomePage: React.FC = () => {
  const user = useSelector((store: RootState) => store.authenticated);
  const navigate = useNavigate();
  //const { colorMode } = useColorMode();
  return (
    <Center h="100vh">
      <Box textAlign="center" display={"row"} px="100px" py="100px">
        <Box
          boxSize="sm"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Image src="/public/icon.svg" paddingBottom={"30px"} display="flex" />
        </Box>
        <Text fontSize="3xl" fontWeight={700}>
          How are you feeling today!
          <br />
          {user ? "Welcome back!" : "Please login or register!"}
        </Text>
        <Box
          display="flex"
          flexDir="row"
          alignItems="center"
          justifyContent="center"
        >
          <Button
            margin={"20px"}
            cursor="pointer"
            _hover={{ bgColor: "primary.0" }}
            onClick={() => navigate("/picker")}
          >
            Picker
          </Button>
          <Button
            margin={"20px"}
            cursor="pointer"
            _hover={{ bgColor: "primary.0" }}
            onClick={() => navigate("/eater")}
          >
            Eater
          </Button>
        </Box>
      </Box>
    </Center>
  );
};
/* <Card
      alignItems="center"
      bgColor={"green"}
      borderRadius="10"
      justifyContent={"center"}
    >
      <CardBody>
        <Stack spacing="3">
          <Heading fontSize="4xl">Role</Heading>
        </Stack>
      </CardBody>
      <CardFooter>
        <ButtonGroup spacing="20">
          <Button variant="solid" bgColor="white">
            DELIVER
          </Button>
          <Button variant="Solid" bgColor="white">
            CUSTOMER
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card> */

/* function Example() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <header>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button>
    </header>
  )
}*/
//             bgColor={colorMode == "dark" ? "primary.0" : "primary.100"}
