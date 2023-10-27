import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Text } from "@chakra-ui/react";

const CheckoutPage: React.FC = () => {
  const card = useSelector((state: RootState) => state.cart);
  return (
    <>
      <Text fontSize="xl"> {JSON.stringify(card)} </Text>
    </>
  );
};

export default CheckoutPage;
