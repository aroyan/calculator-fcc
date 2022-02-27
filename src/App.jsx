import { ChakraProvider, Container, Heading } from '@chakra-ui/react';
import Pokemon from './Pokemon';
// import HooksReducer from './HooksReducer';
// import Calculator from './Calculator';
// import Key from './Key';
// import Free from './Free';
// import Kalkulator from './Kalkulator';

function App() {
  // const tanggal = new Date().toLocaleDateString();
  return (
    <ChakraProvider>
      <Container
        className="App"
        minW={'full'}
        minH={'100vh'}
        bg={'black'}
        color={'white'}
      >
        <Pokemon />
        {/* <Heading as={'h1'} textAlign={'center'} p={'10'}>
          Calculator
        </Heading> */}
        {/* <HooksReducer /> */}
        {/* <Kalkulator /> */}
        {/* <Key /> */}
        {/* <Calculator /> */}
        {/* <Free /> */}
      </Container>
    </ChakraProvider>
  );
}

export default App;
