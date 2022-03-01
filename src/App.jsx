import { ChakraProvider, Container, Heading } from '@chakra-ui/react';
// import Calculator from './Calculator';
// import Free from './Free';
// import Kalkulator from './Kalkulator';

function App() {
  return (
    <ChakraProvider>
      <Container
        className="App"
        minW={'full'}
        minH={'100vh'}
        bg={'black'}
        color={'white'}
      >
        <Heading as={'h1'} textAlign={'center'} p={'10'}>
          Calculator
        </Heading>
        {/* <Calculator /> */}
        {/* <Kalkulator /> */}
        {/* <Free /> */}
      </Container>
    </ChakraProvider>
  );
}

export default App;
