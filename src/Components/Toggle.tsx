import { Box, Button, Flex, useColorMode } from "@chakra-ui/react";
import { MdLightMode, MdNightlight } from "react-icons/md";

const Toggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button
      mr="20px"
      variant="ghost"
      onClick={() => toggleColorMode()}
      _hover={{ color: "red" }}
      _active={{ bgColor: "transparent" }}
    >
      {colorMode == "dark" ? (
        <MdLightMode style={{ width: "20px", height: "20px" }} />
      ) : (
        <MdNightlight style={{ width: "20px", height: "20px" }} />
      )}
    </Button>
  );
};

export default Toggle;
