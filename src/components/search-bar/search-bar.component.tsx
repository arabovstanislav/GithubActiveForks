import { Box, Button, Input, Heading } from '@chakra-ui/react';
import React, { ChangeEvent } from 'react';
import SortBar from '../sort-bar/sort-bat.component';

type SearchBarProps = {
  className: string;
  placeholder?: string;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
  onSearchHander: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({
  className,
  placeholder,
  onChangeHandler,
  onSearchHander,
}) => {
  return (
    <Box bg='black' w='100%' p={4} color='white'>
      <Heading>Active Github Forks</Heading>
      <Input
        className={className}
        placeholder={placeholder}
        onChange={onChangeHandler}
      ></Input>
      <Button colorScheme='orange' onClick={onSearchHander}>
        Find Repo
      </Button>
      <SortBar />
    </Box>
  );
};

export default SearchBar;
