import { Box, Text } from "@chakra-ui/react";
import { Item } from "../store/CartSlice";

interface Prop {
  item: Item;
}
export const CheckouBox: React.FC<Prop> = ({ item }) => {
  return (
    <Box
      my="20px"
      w="full"
      borderRadius="20px"
      bgColor="neutral.bg"
      padding="20px"
      display="flex"
      flexDir="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box>
        <Text fontSize="20px" fontWeight={500}>
          {" "}
          {item.food.name} x {item.quantity}
        </Text>
        <Text fontSize="14px" color="gray.500">
          {" "}
          {item.notes}{" "}
        </Text>
      </Box>
      <Box fontSize="20px" fontWeight={500}>
        {item.food.price * item.quantity}
      </Box>
    </Box>
  );
};
