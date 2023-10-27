import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { CheckouBox } from "../../Components/CheckoutBox";

const CheckoutPage: React.FC = () => {
  const card = useSelector((state: RootState) => state.cart);
  return (
    <>
      <Box>
        <Heading> Check out order </Heading>
        <Box mt="20px" minH="500px">
          {card.items.map((item) => {
            return <CheckouBox item={item} />;
          })}
        </Box>
        <Box textAlign="right">
          <Text> total : {}</Text>
          <Button
            size="lg"
            borderRadius="16px"
            bgColor="primary.0"
            _hover={{ bgColor: "primary.100" }}
          >
            {" "}
            place order{" "}
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default CheckoutPage;
