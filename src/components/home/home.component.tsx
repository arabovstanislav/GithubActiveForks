import React, { Fragment, useState, useEffect, ChangeEvent } from 'react';
import SearchBar from '../search-bar/search-bar.component';
import ForksTable from '../forks-table/forks-table.component';
import { useLazyQuery } from '@apollo/client';
import getRepositoryQuery from './getRepository.query';
import RepositoryData from '../repository/RepositiryData';
import { Spinner } from '@chakra-ui/react';

const Home = () => {
  const [seachedRepoUrlField, setSeachedRepoUrlField] = useState('');
  const [repos, setRepos] = useState<RepositoryData[]>([]);
  const [endCursor, setEndCursor] = useState<string>('');

  const GETREPOSITORY = getRepositoryQuery();

  const [fetchData, { data, loading, error, fetchMore }] =
    useLazyQuery(GETREPOSITORY);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const searchRepoUrlString = event.target.value;
    setSeachedRepoUrlField(searchRepoUrlString);
    console.log(seachedRepoUrlField);
  };

  const onSearchHander = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const [repoOwner, repoName] = seachedRepoUrlField.split('/').slice(3);
    fetchData({
      variables: {
        owner: repoOwner,
        name: repoName,
        after: null,
      },
    });
  };

  const extractRepos = (repository: RepositoryData): RepositoryData[] => {
    const repos = repository.forks.edges.map((edge) => {
      return edge.node;
    });
    return repos;
  };

  const fetchMoreHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    fetchMore({ variables: { after: endCursor } })
      .then(({ data }) => {
        const repository: RepositoryData = data.repository;
        const incomingRepos = extractRepos(repository);
        setRepos([...repos, ...incomingRepos]);
        setEndCursor(repository.forks.pageInfo.endCursor);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (data) {
      const repository: RepositoryData = data.repository;
      setRepos(extractRepos(repository));
      setEndCursor(repository.forks.pageInfo.endCursor);
    }
  }, [data]);

  return (
    <Fragment>
      <SearchBar
        className='f'
        placeholder='Repository URL'
        onChangeHandler={onSearchChange}
        onSearchHander={onSearchHander}
      />
      {loading ? (
        <Spinner />
      ) : (
        <ForksTable forkedRepos={repos} fetchMoreHandler={fetchMoreHandler} />
      )}
    </Fragment>
  );
};

export default Home;
