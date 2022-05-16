export type User = {
  userId: string;
  nickname: string;
  email?: string;
  apiKey?: string;
};

export type Repository = {
  id: string;
  userId?: string;
  repoName: string;
  repoUrl: string;
  repoBranch?: string;
  deployRepo?: string;
  state: boolean;
};

export type History = {
  id: string;
  repoId?: string;
  date?: string;
  state?: string;
};
