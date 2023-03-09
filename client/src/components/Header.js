import { Logo, NavLinks } from "./index.js";
import { Box, Flex, Spacer } from "@chakra-ui/react";

import styled from "styled-components";

const Header = () => {
  return (
    <Flex bg="headline.400" p={4} align="center" padding={"25px 40px"}>
      <Box p="2">
        <Logo image={"apple-touch-icon.png"} size="80px" color="white" />
      </Box>
      <Spacer />
      <NavLinks />
    </Flex>
  );
};
export default Header;

const Wrapper = styled.section``;
