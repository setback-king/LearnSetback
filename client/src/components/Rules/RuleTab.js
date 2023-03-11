import Rule from "./Rule";
import { Heading, Flex, Text } from "@chakra-ui/react";

const RuleTab = () => {
  return (
    <Flex direction="column" gap="25px">
      <Heading>
        There are two main variations of how to play the game: Partners &
        Cutthroat
      </Heading>
      <Rule
        heading="# of Players"
        bulletPoints={["2-8"]}
        text="The most common"
      />
      <Rule
        heading="Objective"
        bulletPoints={["2-8"]}
        text="block of texts such as paragraphs go here"
      />
    </Flex>
  );
};
export default RuleTab;
