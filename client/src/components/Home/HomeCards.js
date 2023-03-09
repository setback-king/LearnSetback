import { Flex } from "@chakra-ui/react";
import NavCard from "./Card";

const HomeCards = () => {
  return (
    <Flex
      gap={10}
      flexWrap="wrap"
      justify="center"
      w="100vw"
      bg="bg.100"
      p="85px 0px"
    >
      <NavCard
        text="Rules"
        fontSize="50px"
        url="rules"
        backText="Learn the basics to get started."
        mT="35px"
      />
      <NavCard
        text="Strategy"
        url="strategy"
        fontSize="50px"
        backText="Expand on your knowlede by taking a deep dive into strategy."
      />
      <NavCard
        text="Practice"
        url="practice"
        fontSize="50px"
        backText="Sharpen your skills with some practice by completing various tutorials."
        mT="35px"
      />
      <NavCard
        text="Play"
        url="play"
        fontSize="50px"
        backText="Play online now with members of the Learn Setback community."
      />
    </Flex>
  );
};
export default HomeCards;
