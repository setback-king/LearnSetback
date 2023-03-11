import { Heading, Text, Flex, UnorderedList, ListItem } from "@chakra-ui/react";

const Rule = ({ heading, bulletPoints, text }) => {
  const listItems = bulletPoints.map((point) => {
    return (
      <ListItem fontSize="lg" marginLeft="35px">
        {point}
      </ListItem>
    );
  });

  return (
    <Flex direction="column">
      <Heading size="md">{heading}</Heading>
      {bulletPoints && <UnorderedList>{listItems}</UnorderedList>}
      {text && <Text>{text}</Text>}
    </Flex>
  );
};
export default Rule;
