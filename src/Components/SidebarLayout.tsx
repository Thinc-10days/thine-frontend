import { Box, Container, Grid, GridItem, useColorMode } from "@chakra-ui/react";
import SideBarMenu from "./PickerMenu";
import { SidebarType } from "../constants/SideBarType";
import { Outlet } from "react-router-dom";

interface Props {
  type: SidebarType;
}
const SidebarLayout: React.FC<Props> = ({ type }) => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Container maxW="6xl">
        <Box
          p={{ base: 5, md: 10 }}
          mt={{ base: 0, md: 5 }}
          mr={{ base: 0, md: 5 }}
          boxShadow={
            colorMode == "light" ? "10px 10px 10px 10px #F5F5F5" : "none"
          }
          border={colorMode == "dark" ? "1px solid white" : "none"}
          borderRadius="15px"
          minH="75vh"
        >
          <Grid templateColumns="repeat(10, 1fr)" gap="10px">
            <GridItem colSpan={2}>
              <SideBarMenu type={type} />
            </GridItem>
            <GridItem>
              <Outlet />
            </GridItem>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default SidebarLayout;
/*
<Box display="grid" gridTemplateColumns="">
            <Box>
              <SideBarMenu type={type} />
              <Divider orientation="vertical" />
            </Box>
            <Box display="inlind-grid" ml="10px">
              <Outlet />
            </Box>
          </Box>
*/
