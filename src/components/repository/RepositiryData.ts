type Ref = {
  id: string;
  name: string;
};

type IssueConnection = {
  totalCount: number;
};

type RepositoryConnection = {
  edges: RepositoryEdge[];
  pageInfo: PageInfo;
};

type RepositoryEdge = {
  node: RepositoryData;
};

type PageInfo = {
  endCursor: string;
  startCursor: string;
};

type UserConnection = {
  totalCount: number;
};

type StargazerConnection = {
  totalCount: number;
};

type Organization = {
  login: string;
};

type RepositoryData = {
  defaultBranchRef: Ref;
  diskUsage: number;
  forkCount: number;
  id: string;
  issues: IssueConnection;
  forks: RepositoryConnection;
  name: string;
  owner: Organization;
  pushedAt: string;
  stargazers: StargazerConnection;
  watchers: UserConnection;
};

export default RepositoryData;
