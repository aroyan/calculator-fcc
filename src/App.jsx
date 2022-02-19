// import Calculator from './Calculator';
import { ChakraProvider, Container, Heading } from '@chakra-ui/react';
import Key from './Key';

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
        <Key />
        {/* <Calculator /> */}
      </Container>
    </ChakraProvider>
  );
}

export default App;
