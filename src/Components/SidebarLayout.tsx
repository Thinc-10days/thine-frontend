import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const SidebarLayout: React.FC<Props> = ({ children }) => {
  return (
    <Box>
      <h1> menu </h1>
      {children}
    </Box>
  );
};

export default SidebarLayout;
