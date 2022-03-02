import { ChakraProvider, Container } from "@chakra-ui/react";
import Kalkulator from "./Kalkulator";

function App() {
  return (
    <ChakraProvider>
      <Container
        className="App"
        minW={"full"}
        minH={"100vh"}
        bg={"black"}
        color={"white"}
      >
        <Kalkulator />
      </Container>
    </ChakraProvider>
  );
}

export default App;
