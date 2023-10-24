import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Link, Text } from "@chakra-ui/react";
import { SidebarType } from "../constants/SideBarType";

interface NavMenu {
  title: string;
  href: string;
}

const PickerMenu: NavMenu[] = [
  {
    title: "MainMenu",
    href: "/picker",
  },
  {
    title: "Order Request",
    href: "/picker/orderRequest",
  },
  {
    title: "Status",
    href: "/picker/status",
  },
  {
    title: "Summary",
    href: "/picker/summary",
  },
];

const EaterMenu: NavMenu[] = [
  {
    title: "search",
    href: "/eater/search",
  },
  {
    title: "status",
    href: "/eater/status",
  },
  {
    title: "summary",
    href: "summary",
  },
];

interface Props {
  type: SidebarType;
}

const SideBarMenu: React.FC<Props> = ({ type }) => {
  const menu = type == "picker" ? PickerMenu : EaterMenu;
  return (
    <Box>
      <Box
        display={{ base: "none", md: "block" }}
        style={{ borderRight: "1px solid #edf1f7", height: "100%" }}
        minH="65vh"
      >
        <Box pt={3} pr={5}>
          {menu.map((item) => (
            <>
              <Link key={item.title} href={item.href}>
                <Box
                  display="flex"
                  alignItems="center"
                  style={{ cursor: "pointer" }}
                  lineHeight="50px"
                  fontWeight="bold"
                  _hover={{ color: "primary.100" }}
                >
                  <ChevronRightIcon />
                  <Text>{item.title}</Text>
                </Box>
              </Link>
            </>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default SideBarMenu;
