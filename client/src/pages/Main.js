import { Header, Footer } from "../components/index.js";
import { Outlet } from "react-router-dom";
import { Flex } from "@chakra-ui/react";

const Main = () => {
  return (
    <Flex direction="column" minH="100vh">
      <Header />
      <Outlet />
      <Footer />
    </Flex>
  );
};
export default Main;
