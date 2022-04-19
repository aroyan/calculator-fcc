import { Box, Text } from "@chakra-ui/react";

export default function Display({ input, output }) {
  return (
    <Box className="output">
      <Text className="result" textAlign={"end"} fontSize={"1.5rem"}>
        {output}
      </Text>
      <Text
        id="display"
        className="input"
        textAlign={"end"}
        fontSize={"1.25rem"}
      >
        {input}
      </Text>
    </Box>
  );
}
