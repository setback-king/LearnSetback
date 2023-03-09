import {
  FormControl,
  FormControlOptions,
  Input,
  FormLabel,
  Flex,
} from "@chakra-ui/react";

const FormInput = ({ labelText, inputType, name, value, handleChange }) => {
  return (
    <Flex direction="column">
      <FormControl>
        <FormLabel color="headline.400" fontWeight="bold">
          {labelText}
        </FormLabel>
        <Input
          w={"300px"}
          type={inputType}
          name={name}
          value={value}
          onChange={handleChange}
        />
      </FormControl>
    </Flex>
  );
};
export default FormInput;
