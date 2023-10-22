import { Box, Button, Center, Text } from "@chakra-ui/react";

export const HomePage: React.FC = () => {
  return (
    <Center h="100vh" bg="white">
      <Box
        bgColor={"rgba(239, 174, 199, 0.50)"}
        borderRadius={"16px"}
        display={"row"}
        px="100px"
        py="100px"
      >
        <Text fontSize="3xl" fontWeight={700}>
          Choose your Role
        </Text>
        <Box display="flex" flexDir="row" alignItems="center">
          <Button
            bgColor={"white"}
            margin={"20px"}
            cursor="pointer"
            _hover={{ bgColor: "#de5c8e" }}
          >
            DELIVER
          </Button>
          <Button
            bgColor={"white"}
            margin={"20px"}
            cursor="pointer"
            _hover={{ bgColor: "#de5c8e" }}
          >
            ORDER
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
