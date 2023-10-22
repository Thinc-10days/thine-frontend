import { Box, Link, Stack } from "@chakra-ui/react";

const items: Props[] = [
  {
    text: "login",
    href: "/login",
  },
  {
    text: "home",
    href: "/",
  },
  {
    text: "account",
    href: "/account",
  },
];

interface Props {
  text: string;
  href: string;
}

const NavItem: React.FC<Props> = ({ text, href }) => {
  return (
    <Link href={href} h="full">
      {text}
    </Link>
  );
};

const Navbar: React.FC = () => {
  return (
    <Box
      height="50px"
      borderBottom="0.5px solid grey"
      display="flex"
      flexDir="row"
      alignItems="center"
      width="100%"
      bgColor={"rgba(239, 174, 199, 0.50)"}
    >
      <Stack direction="row" gap="10px" ml="20px">
        {items.map((item) => (
          <NavItem text={item.text} href={item.href} />
        ))}
      </Stack>
    </Box>
  );
};

export default Navbar;
