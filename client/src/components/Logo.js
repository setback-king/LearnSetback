import { Flex, Heading } from "@chakra-ui/react";

const Logo = ({ image, size, color }) => {
  return (
    <Flex align="center" gap={5}>
      <img
        src={image}
        alt="logo"
        style={{
          height: size,
          border: "2px solid #63aab5",
          borderRadius: "5px",
        }}
      />
      <Heading fontFamily="Shantell Sans" color={color}>
        Learn Setback
      </Heading>
    </Flex>
  );
};
export default Logo;
