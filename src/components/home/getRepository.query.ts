import { gql } from '@apollo/client';

/**
 * { field: STARGAZERS, direction: ASC }
 * { field: NAME, direction: DESC/ASC }
 * { field: PUSHED_AT, direction: DESC/ASC }
 *
 */

const getRepositoryQuery = () => {
  return gql`
    query GetRepository($owner: String!, $name: String!, $after: String) {
      repository(owner: $owner, name: $name) {
        id
        name
        defaultBranchRef {
          id
          name
        }
        diskUsage
        owner {
          login
        }
        forkCount
        issues(states: [OPEN]) {
          totalCount
        }
        watchers {
          totalCount
        }
        stargazers {
          totalCount
        }
        pushedAt
        forks(
          first: 3
          orderBy: { field: STARGAZERS, direction: DESC }
          after: $after
        ) {
          edges {
            node {
              id
              name
              diskUsage
              defaultBranchRef {
                id
                name
              }
              owner {
                login
              }
              forkCount
              issues(states: [OPEN]) {
                totalCount
              }
              watchers {
                totalCount
              }
              stargazers {
                totalCount
              }
              pushedAt
            }
          }
          pageInfo {
            endCursor
            startCursor
          }
        }
      }
    }
  `;
};

export default getRepositoryQuery;
