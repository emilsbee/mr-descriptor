import github from '@actions/github';

const main = async () => {
  const octokit = github.getOctokit()

  const { data: pullRequest } = await octokit.rest.pulls.get({
    owner: 'octokit',
    repo: '',
    pull_number: 1,
  })
};

main();
  