export type Repository = {
    id: string;
    userId?: string;
    repoName: string;
    repoUrl: string;
    repoBranch?: string;
    deployRepo?: string;
    state: boolean;
};