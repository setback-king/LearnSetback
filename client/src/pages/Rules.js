import { Flex, Heading } from "@chakra-ui/react";
import { Glossary, TabComponent } from "../components";

const Rules = () => {
  return (
    <Flex flex="1" direction="column">
      <TabComponent
        tab1="Rules"
        tab2="Glossary"
        tab1Content={<p>Rules Go Here</p>}
        tab2Content={<Glossary />}
      />
    </Flex>
  );
};
export default Rules;
