import { Box, Container, Divider } from "@chakra-ui/react";
import SideBarMenu from "./PickerMenu";
import { SidebarType } from "../constants/SideBarType";
import { Outlet } from "react-router-dom";

interface Props {
  type: SidebarType;
}
const SidebarLayout: React.FC<Props> = ({ type }) => {
  return (
    <>
      <Container maxW="6xl">
        <Box
          p={{ base: 5, md: 10 }}
          mt={{ base: 0, md: 5 }}
          mr={{ base: 0, md: 5 }}
          boxShadow={{ base: "none", md: "10px 10px 10px 10px #F5F5F5" }}
          borderRadius="15px"
          minH="75vh"
        >
          <Box display="flex" flexDirection="row">
            <SideBarMenu type={type} />
            <Divider orientation="vertical" />
            <Box ml="15px">
              <Outlet />
            </Box>
          </Box>
        </Box>
      </Container>
      ;
    </>
  );
};

export default SidebarLayout;