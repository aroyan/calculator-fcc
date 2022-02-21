import { ChakraProvider, Container, Heading } from '@chakra-ui/react';
// import HooksReducer from './HooksReducer';
// import Calculator from './Calculator';
// import Key from './Key';
// import Free from './Free';
import Kalkulator from './Kalkulator';

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
        {/* <HooksReducer /> */}
        <Kalkulator />
        {/* <Key /> */}
        {/* <Calculator /> */}
        {/* <Free /> */}
      </Container>
    </ChakraProvider>
  );
}

export default App;
