import Calculator from './Calculator';
import { ChakraProvider, Container, Heading } from '@chakra-ui/react';

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
        <Calculator />
      </Container>
    </ChakraProvider>
  );
}

export default App;
