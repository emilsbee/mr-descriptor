import * as github from '@actions/github'
import * as core from '@actions/core'
import * as openai from 'openai';

const main = async () => {
  const githubToken = core.getInput('github_token', { required: true });
  const openAiToken = core.getInput('openai_token', { required: true });

  const octokit = github.getOctokit(githubToken)
  
  const githubCreds = {
    owner: github.context.repo.owner,
    repo: github.context.repo.repo
  }

  core.info(JSON.stringify(github.context))

  // const { data: pullRequest } = await octokit.rest.pulls.get({
  //   ...githubCreds,
  //   pull_number: 1,
  // })

  // const prDiffRes = await fetch(pullRequest.diff_url);
  // const prDiff = await prDiffRes.text()

  // const openaiClient = new openai.OpenAIApi(new openai.Configuration({
  //   apiKey: openAiToken,
  // }));
  
  // const openAiRes = await openaiClient.createChatCompletion({
  //   model: "gpt-3.5-turbo",
  //   // messages: [{role: "user", content: `imagine that you are summarizing merge request changes for a developer who will be reviewing the code, can you summarize the following git diff in JSON that looks like [{ "explanation": "add explaantion here" }]  ${prDiff}`}],
  //   messages: [{role: "user", content: `imagine that you are summarizing merge request changes for a developer who will be reviewing the code, can you summarize the following git diff in bulletpoints ${prDiff}`}],
  // });
  
  // await octokit.rest.pulls.update({
  //   ...githubCreds,
  //   pull_number: 1,
  //   body: openAiRes.data.choices[0].message?.content
  // })
};

main();
  