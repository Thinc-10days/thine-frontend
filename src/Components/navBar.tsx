import { Box, Container, Link, Stack } from "@chakra-ui/react";

const items: Props[] = [
  {
    text: "home",
    href: "/",
  },
  {
    text: "picker",
    href: "/picker",
  },
  {
    text: "eater",
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
    <Container maxW="5xl" mt="10px">
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
        <Stack direction="row" gap="10px">
          {items.map((item) => (
            <NavItem text={item.text} href={item.href} />
          ))}
        </Stack>
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
    </Container>
  );
};

export default Navbar;
