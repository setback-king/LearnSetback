import { Flex, Heading, VStack, Text, Button } from "@chakra-ui/react";
import { HomeCards } from "../components";
import Lottie from "react-lottie-player";
import learnLottie from "../assets/lottie/learning.json";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <Flex flex="1" align="center" direction="column">
      <Flex
        align="center"
        justify="space-around"
        w="100%"
        flex="1"
        flexWrap="wrap"
        p="10px 20px"
      >
        <VStack>
          <Heading
            color="primarytxt.900"
            size="2xl"
            marginTop={[4, 4, 4, 4, 0]}
          >
            The Ultimate Guide to Setback
          </Heading>
          <Text fontSize="lg">
            Your One-Stop-Shop for Rules, Strategies, Playing, and Tips
          </Text>
          <NavLink to="/about" style={{ marginTop: "30px" }}>
            <Button bg="bg.100" _hover={{ bg: "bg.200" }}>
              Learn More
            </Button>
          </NavLink>
        </VStack>
        <Lottie
          loop
          animationData={learnLottie}
          play
          style={{ width: 550, height: 550 }}
        />
      </Flex>

      <HomeCards />
    </Flex>
  );
};
export default Home;
