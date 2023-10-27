import { Box, useColorMode, Text, Image, Stack } from "@chakra-ui/react";
import { GrAddCircle } from "react-icons/gr";
interface Props {
  name: string;
  description: string;
  price: number;
  id: string;
}

const src =
  "https://www.unileverfoodsolutions.com.ph/dam/global-ufs/mcos/SEA/calcmenu/recipes/PH-recipes/the-vegetarian-butcher/nasvhille-hot-burger/1245x600_Nashville%20style%20Chicken%20Burger.jpg";
export const MenuCard: React.FC<Props> = ({ name, description, price }) => {
  const { colorMode } = useColorMode();
  return (
    <Box
      borderRadius={"16px"}
      border={`1px solid ${colorMode == "dark" ? "white" : "black"}`}
      height={"full"}
      overflow="hidden"
      _hover={{ color: "primary.0" }}
      cursor="pointer"
    >
      <Image src={src} />
      <Box padding="10px">
        <Text fontSize={"20px"} fontWeight={500}>
          {" "}
          {name}
        </Text>
        <Text color="GrayText"> {description}</Text>
        <Stack
          direction="row"
          alignItems="center"
          mt="5px"
          color={colorMode == "dark" ? "white" : "black"}
        >
          <Text>{price}</Text>
          <GrAddCircle />
        </Stack>
      </Box>
    </Box>
  );
};
