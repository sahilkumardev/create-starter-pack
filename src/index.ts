#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import ora from "ora";
import { createProject } from "./generator";
import { ProjectConfig } from "./types";

export async function runCLI(): Promise<void> {
  console.log(chalk.bold.cyan("\n🚀 Welcome to create-starter-pack!\n"));

  const answers = await inquirer.prompt<ProjectConfig>([
    {
      type: "input",
      name: "projectName",
      message: "What is your project name?",
      default: "my-app",
      validate: (input: string) => {
        if (/^[a-z0-9-_]+$/.test(input)) return true;
        return "Project name contain only lowercase letters, numbers, hyphens, and underscores";
      },
    },
    {
      type: "select",
      name: "language",
      message: "Which language would you like to use?",
      choices: [
        { name: "JavaScript", value: "javascript" },
        { name: "TypeScript", value: "typescript" },
      ],
      default: "javascript",
    },
    {
      type: "select",
      name: "styling",
      message: "Which styling solution would you like to use?",
      choices: [
        { name: "Cascading Style Sheets (CSS)", value: "css" },
        { name: "Tailwind CSS", value: "tailwind" },
      ],
    },
    {
      type: "select",
      name: "tailwindVersion",
      message: "Which version of Tailwind CSS would you like to use?",
      choices: [
        { name: "v3", value: "v3" },
        { name: "v4", value: "v4" },
      ],

      when: (answers) => answers.styling === "tailwind",
    },
  ]);

  const spinner = ora("Creating your project...").start();

  try {
    await createProject(answers);
    spinner.succeed(chalk.green("Project created successfully!"));

    console.log(chalk.bold.green("\n✨ Your project is ready!\n"));
    console.log(chalk.cyan("Next steps:"));
    console.log(chalk.white(`cd ${answers.projectName}`));
    console.log();
  } catch (error) {
    spinner.fail(chalk.red("Failed to create project"));
    throw error;
  }
}

runCLI().catch((error) => {
  console.error("An error occurred:", error.message);
  process.exit(1);
});
