import React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableCaption,
  TableContainer,
  Box,
  Button,
} from '@chakra-ui/react';
import RepositoryData from '../repository/RepositiryData';
import Repository from '../repository/repository.component';

type ForksTableProps = {
  forkedRepos: RepositoryData[];
  fetchMoreHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const ForksTable: React.FC<ForksTableProps> = ({
  forkedRepos,
  fetchMoreHandler,
}) => {
  return (
    <Box bg='black' w='100%' p={4} color='white'>
      <TableContainer>
        <Table variant='simple'>
          <TableCaption>Repository's active forks</TableCaption>
          <Thead>
            <Tr>
              <Th>Link</Th>
              <Th>Owner</Th>
              <Th>Name</Th>
              <Th>Branch</Th>
              <Th>Stars</Th>
              <Th>Forks</Th>
              <Th>Open Issues</Th>
              <Th>Size</Th>
              <Th>Watchers</Th>
              <Th>Last Push</Th>
            </Tr>
          </Thead>
          <Tbody>
            {forkedRepos.map((repo) => {
              return <Repository repository={repo} key={repo.id} />;
            })}
          </Tbody>
        </Table>
      </TableContainer>
      <Button colorScheme='orange' onClick={fetchMoreHandler}>
        Show More
      </Button>
    </Box>
  );
};

export default ForksTable;
