import { Box, Text } from "@chakra-ui/react";

export default function Display({ input, output }) {
  return (
    <Box className="output" h={"20"}>
      <Text className="result" textAlign={"end"} fontSize={"1.25rem"} mr={"4"}>
        {output}
      </Text>
      <Text
        id="display"
        className="input"
        textAlign={"end"}
        mr={"4"}
        fontSize={"1.5rem"}
      >
        {input}
      </Text>
    </Box>
  );
}
