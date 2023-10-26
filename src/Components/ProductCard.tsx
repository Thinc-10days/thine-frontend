import { Box, Image, Stack, Text, useColorMode } from "@chakra-ui/react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const src =
  "https://www.teenaagnel.com/wp-content/uploads/2019/12/food-photography-in-dubai.jpg";

interface Props {
  name: string;
  location: string;
  description: string;
  id: string;
}

export const ProductCard: React.FC<Props> = ({
  name,
  description,
  location,
  id,
}) => {
  const { colorMode } = useColorMode();
  const navigate = useNavigate();
  return (
    <Box
      onClick={() => navigate(`/picker/${id}`)}
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
        <Stack direction="row" alignItems="center" mt="5px">
          <FaMapMarkerAlt />
          <Text>{location}</Text>
        </Stack>
      </Box>
    </Box>
  );
};
