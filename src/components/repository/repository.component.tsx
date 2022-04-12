import React from 'react';
import Moment from 'react-moment';
import RepositoryData from './RepositiryData';
import { Tr, Td } from '@chakra-ui/react';

type RepositoryProps = {
  repository: RepositoryData;
};

const Repository: React.FC<RepositoryProps> = ({
  repository,
}: RepositoryProps) => {
  const {
    defaultBranchRef,
    diskUsage,
    forkCount,
    issues,
    name,
    owner,
    pushedAt,
    stargazers,
    watchers,
  } = repository;
  return (
    <Tr>
      <Td>
        {' '}
        <a href={`https://github.com/${owner.login}/${name}`}>LINK</a>
      </Td>
      <Td>{owner.login}</Td>
      <Td>{name}</Td>
      <Td>{defaultBranchRef.name}</Td>
      <Td>{stargazers.totalCount}</Td>
      <Td>{forkCount}</Td>
      <Td>{issues.totalCount}</Td>
      <Td>{diskUsage}</Td>
      <Td>{watchers.totalCount}</Td>
      <Td>
        <Moment date={pushedAt} durationFromNow />
      </Td>
    </Tr>
  );
};

export default Repository;
