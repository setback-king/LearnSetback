import {
  Table,
  TableContainer,
  Tr,
  Th,
  Td,
  Tbody,
  Thead,
} from "@chakra-ui/react";

import glossaryInfo from "../../data/glossary.json";

const Glossary = () => {
  const glossaryTerms = glossaryInfo.map((item, i) => {
    return (
      <Tr key={i}>
        <Td whiteSpace="normal" fontStyle="italic">
          {item.term}
        </Td>
        <Td whiteSpace="normal">{item.definition}</Td>
      </Tr>
    );
  });

  return (
    <TableContainer>
      <Table variant="simple" size="md">
        <Thead>
          <Tr>
            <Th>Term</Th>
            <Th>Definition</Th>
          </Tr>
        </Thead>
        <Tbody>{glossaryTerms}</Tbody>
      </Table>
    </TableContainer>
  );
};
export default Glossary;
