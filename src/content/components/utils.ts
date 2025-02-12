import {TARGET_PROFILE} from '../../constants';
import packagesVersions from '../../packages-versions.json';
import {Repos} from '../../types/common';

const githubTargetProfile = process.env.GITHUB_PROFILE || TARGET_PROFILE;

const TARGET_REPOS_VERSIONS = {
    [Repos.Uikit]: packagesVersions[Repos.Uikit],
    [Repos.Components]: packagesVersions[Repos.Components],
    // [Repos.DateComponents]: packagesVersions['@gravity-ui/date-components'],
};

export type GetterProps = {componentName: string; repoName: Repos};

type RepoInfoGetterFunc = (props: GetterProps) => string;

export const mappingOptions = (arr: string[]) =>
    arr.map((item) => ({
        value: item,
        content: item,
    }));

export const getReadmeUrl: RepoInfoGetterFunc = ({componentName, repoName}) =>
    `https://raw.githubusercontent.com/${githubTargetProfile}/${repoName}/v${TARGET_REPOS_VERSIONS[repoName]}/src/components/${componentName}/README.md`;

export const getGithubUrl: RepoInfoGetterFunc = ({componentName, repoName}) =>
    `https://github.com/${githubTargetProfile}/${repoName}/tree/main/src/components/${componentName}`;
