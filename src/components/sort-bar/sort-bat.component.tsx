import React from 'react';
import { Box, Select, Button } from '@chakra-ui/react';

type SortBatProps = {};

const SortBar: React.FC<SortBatProps> = () => {
  return (
    <Box bg='black' w='100%' p={4} color='white'>
      <Select placeholder='Sort by...'>
        <option value='PUSHED_AT'>Pushed at</option>
        <option value='NAME'>Name</option>
        <option value='STARGAZERS'>Stargazers</option>
      </Select>
      <Select placeholder='Order...'>
        <option value='ASC'>Ascending</option>
        <option value='DESC'>Descending</option>
      </Select>
      <Button colorScheme='orange'>Sort</Button>
    </Box>
  );
};

export default SortBar;
