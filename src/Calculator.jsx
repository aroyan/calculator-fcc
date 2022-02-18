import React from 'react';
import { Flex, Box, Grid } from '@chakra-ui/react';

export default function Calculator() {
  return (
    <Flex
      align={'center'}
      justify={'center'}
      minW={'full'}
      minH={'100vh'}
      flexDir={'column'}
      fontSize={'2rem'}
    >
      <Grid templateColumns={'repeat(3, 1fr)'}>
        <Box p={'6'} bg={'indigo'} border={'1px solid orange'}>
          1
        </Box>
        <Box p={'6'} bg={'indigo'} border={'1px solid orange'}>
          2
        </Box>
        <Box p={'6'} bg={'indigo'} border={'1px solid orange'}>
          3
        </Box>
        <Box p={'6'} bg={'indigo'} border={'1px solid orange'}>
          4
        </Box>
        <Box p={'6'} bg={'indigo'} border={'1px solid orange'}>
          5
        </Box>
        <Box p={'6'} bg={'indigo'} border={'1px solid orange'}>
          6
        </Box>
        <Box p={'6'} bg={'indigo'} border={'1px solid orange'}>
          7
        </Box>
        <Box p={'6'} bg={'indigo'} border={'1px solid orange'}>
          8
        </Box>
        <Box p={'6'} bg={'indigo'} border={'1px solid orange'}>
          9
        </Box>
        <Box p={'6'} bg={'indigo'} border={'1px solid orange'}>
          0
        </Box>
      </Grid>
    </Flex>
  );
}
