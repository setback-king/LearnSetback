import { Flex, Heading } from "@chakra-ui/react";
import { Glossary, TabComponent, RuleTab } from "../components";

const Rules = () => {
  return (
    <Flex flex="1" direction="column">
      <TabComponent
        tab1="Rules"
        tab2="Glossary"
        tab1Content={<RuleTab />}
        tab2Content={<Glossary />}
      />
    </Flex>
  );
};
export default Rules;
