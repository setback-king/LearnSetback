import { Flex, Heading, VStack, Text } from "@chakra-ui/react";
import { HomeCards } from "../components";
import Lottie from "react-lottie-player";
import learnLottie from "../assets/lottie/learning.json";

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
