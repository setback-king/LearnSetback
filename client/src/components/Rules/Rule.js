import { Heading, Text, Divider, Flex } from "@chakra-ui/react";

const Rule = ({ text, heading }) => {
  return (
    <Flex>
      <Heading>{heading}</Heading>
      <Text>{text}</Text>
    </Flex>
  );
};
export default Rule;
