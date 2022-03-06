import { ChakraProvider, Container } from "@chakra-ui/react";
// import Free from "./Free";
import Kalkulator from "./Kalkulator";
import Reducer from "./Reducer";

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
        {/* <Free /> */}
        {/* <Kalkulator /> */}
        <Reducer />
      </Container>
    </ChakraProvider>
  );
}

export default App;
