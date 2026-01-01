#!/usr/bin/env node

import inquirer from "inquirer";
import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";
import process from "process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

type Answers = {
  projectName: string;
  language: "js" | "ts";
  features: ("css" | "tailwind")[];
};

process.on("SIGINT", () => {
  console.log("\n❌ Project was not created successfully.");
  process.exit(1);
});

async function main() {
  let answers: Answers;

  try {
    answers = await inquirer.prompt<Answers>([
      {
        type: "input",
        name: "projectName",
        message: "Project name:",
        default: "my-app",
        validate(input) {
          return input.trim() !== "" ? true : "Project name cannot be empty";
        },
      },
      {
        type: "select",
        name: "language",
        message: "Select a language:",
        choices: [
          { name: "JavaScript", value: "js" },
          { name: "TypeScript", value: "ts" },
        ],
      },
      {
        type: "checkbox",
        name: "features",
        message: "Select features:",
        choices: [
          { name: "CSS", value: "css" },
          { name: "Tailwind CSS", value: "tailwind" },
        ],
        validate(answer) {
          return answer.length > 0
            ? true
            : "You must select at least one feature";
        },
      },
    ]);
  } catch (error) {
    // ✅ Handles prompt cancel / escape / Ctrl+C inside prompt
    console.log("\n❌ Project was not created successfully.");
    process.exit(1);
  }

  // ✅ Only runs if all prompts completed successfully
  const projectDir = path.join(process.cwd(), answers.projectName);

  fs.ensureDirSync(projectDir);

  copyTemplate("base", projectDir);
  copyTemplate(answers.language, projectDir);

  if (answers.features.includes("tailwind")) {
    copyTemplate("tailwind", projectDir);
  } else if (answers.features.includes("css")) {
    copyTemplate("css", projectDir);
  }

  console.log("\n✅ Project created successfully!");
}

function copyTemplate(template: string, target: string) {
  const templatePath = path.join(__dirname, "../templates", template);
  if (fs.existsSync(templatePath)) {
    fs.copySync(templatePath, target, { overwrite: true });
  }
}

main();
