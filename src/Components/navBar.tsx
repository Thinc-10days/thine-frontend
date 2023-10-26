import { Box, Container, Link, Stack, Image } from "@chakra-ui/react";
import Toggle from "./Toggle";

const items: Props[] = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "Picker",
    href: "/picker",
  },
  {
    text: "Eater",
    href: "/eater",
  },
];

interface Props {
  text: string;
  href: string;
}

const NavItem: React.FC<Props> = ({ text, href }) => {
  return (
    <Link href={href} h="full" _hover={{ color: "primary.0" }}>
      {text}
    </Link>
  );
};

const Navbar: React.FC = () => {
  return (
    <Container maxW="6xl" mt="10px">
      <Box
        height="50px"
        display="flex"
        flexDir="row"
        alignItems="center"
        width="100%"
        fontWeight={600}
        fontSize="18px"
        justifyContent="space-between"
      >
        <Stack direction="row" gap="10px" alignItems="center">
          <Image src="/public/icon.svg" width="40px" />
          {items.map((item) => (
            <NavItem text={item.text} href={item.href} />
          ))}
        </Stack>
        <Box>
          <Toggle />
          <Link
            backgroundColor="primary.0"
            color="white"
            borderRadius="16px"
            _hover={{ backgroundColor: "primary.100" }}
            padding="10px 18px"
            href="/login"
          >
            Login
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default Navbar;
