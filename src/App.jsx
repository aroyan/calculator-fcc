import { Center, ChakraProvider, Container } from "@chakra-ui/react";
import Store from "./Store";
import React, { useContext } from "react";
import { Context } from "./Store";
// import Free from "./Free";
// import Kalkulator from "./Kalkulator";
// import Reducer from "./Reducer";

function App() {
  const [initial, setInitial] = useContext(Context);
  return (
    <ChakraProvider>
      <Container
        className="App"
        minW={"full"}
        minH={"100vh"}
        bg={"black"}
        color={"white"}
      >
        <Store>
          <h1>{initial.name}</h1>
          <h2>{initial.nomor}</h2>
        </Store>
        {/* <Free /> */}
        {/* <Kalkulator /> */}
        {/* <Reducer /> */}
      </Container>
    </ChakraProvider>
  );
}

export default App;
