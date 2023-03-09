import { Tabs, TabList, Tab, TabPanel, TabPanels } from "@chakra-ui/react";

const TabComponent = ({ tab1, tab2, tab1Content, tab2Content, variant }) => {
  return (
    <Tabs isFitted variant={variant}>
      <TabList>
        <Tab>{tab1}</Tab>
        <Tab>{tab2}</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>{tab1Content}</TabPanel>
        <TabPanel>{tab2Content}</TabPanel>
      </TabPanels>
    </Tabs>
  );
};
export default TabComponent;
