#!/usr/bin/env node

const inquirer = require("inquirer").default; // .default を追加
const { execSync } = require("child_process");

async function createPullRequest() {
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "Pull Requestのタイトルを入力してください:",
    },
    {
      type: "input",
      name: "description",
      message: "Pull Requestの説明を入力してください:",
    },
    {
      type: "input",
      name: "branch",
      message: "作成元のブランチを入力してください (例: feature-branch):",
    },
  ]);

  const command = `gh pr create --title "${answers.title}" --body "${answers.description}" --base main --head ${answers.branch}`;
  execSync(command, { stdio: "inherit" });
}

createPullRequest();
