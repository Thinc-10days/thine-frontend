import { Box, Button, Center, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Image } from "@chakra-ui/react";

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Center h="100vh" bg="white">
      <Box textAlign="center" display={"row"} px="100px" py="100px">
        <Box boxSize="sm" display="flex" alignItems="center">
          <Image src="https://bit.ly/dan-abramov" paddingBottom={"30px"} />
        </Box>
        <Text fontSize="3xl" fontWeight={700}>
          How are you feeling today!
        </Text>
        <Box
          display="flex"
          flexDir="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Button
            bgColor={"white"}
            margin={"20px"}
            cursor="pointer"
            _hover={{ bgColor: "#de5c8e" }}
            onClick={() => navigate("/picker")}
          >
            Picker
          </Button>
          <Button
            bgColor={"white"}
            margin={"20px"}
            cursor="pointer"
            _hover={{ bgColor: "#de5c8e" }}
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
