#!/usr/bin/env node

import inquirer from "inquirer";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import chalk from "chalk";
import { createSpinner } from 'nanospinner'
import process from 'process'
import { toURLFriendlyString, updateNameInPackageJson, runCommand, createDirectoryContents } from "../lib/helpers.js";

const CURR_DIR = process.cwd();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CHOICES = fs.readdirSync(path.join(__dirname, "templates"));

const selectProjectQ = {
  name: "project-choice",
  type: "list",
  message: "What project template would you like to generate?",
  choices: CHOICES,
}
const enterProjectNameQ = {
  name: "project-name",
  type: "input",
  message: "Project name:",
  validate: function (input) {
    if (/^([A-Za-z\-\_\d])+$/.test(input)) return true;
    else
      return "Project name may only include letters, numbers, underscores and hashes.";
  },
}
const npmIandRunDevQ = {
  name: "install and run dev environment",
  type: "confirm",
  message: "do we run dev environment for you",
}


// Command line arguments
const [, , condition] = process.argv;
const [, , ...args] = process.argv;
const options = {
  condition: null,
  folderPathOrNameOrLink: null,
  nodeFlagParam: "",
};

// Parse command line arguments
for (let i = 0; i < args.length; i++) {
  const arg = args[i];
  if (arg === ".") {
    options.condition = arg;
    options.folderPathOrNameOrLink = arg
    break;
  } else if (arg.startsWith("-")) {
    console.error(`Invalid option: ${arg}`);
    process.exit(1);
  } else {
    options.folderPathOrNameOrLink = arg;
  }
}

if (!args.length) {
  options.condition = "";
  options.folderPathOrNameOrLink = "";
}

// Check for unsupported or invalid options
if (Object.values(options).some((value) => value === null)) {
  console.error(`Missing required option or invalid usage.`);
  process.exit(1);
}



if (!condition) {
  inquirer.prompt([selectProjectQ, enterProjectNameQ, npmIandRunDevQ]).then(async (ans) => {
    const projectChoice = ans["project-choice"];
    const projectName = ans["project-name"];
    const templatePath = path.join(__dirname, "templates", projectChoice);
    const projectPath = path.join(CURR_DIR, projectName);
    const spinner = createSpinner("loading...").start()

    // Create project directory if it doesn't exist
    if (!fs.existsSync(projectPath)) {
      fs.mkdirSync(projectPath);
    } 
    else {
      spinner.error({ text: `Project directory '${projectName}' already exists.` });
      {
        process.exit(1);
      }
    }
    spinner.success({ text: "Template successfully created\n" });

    createDirectoryContents(templatePath, projectName);
    if (ans["install and run dev environment"]) {
      spinner.update({ text: "loading...\n" });
      spinner.spin();
      runCommand(`npm i`).catch(() => {
        spinner.error({ text: "process failed" })
      }).then(() => {
        spinner.success({ text: "instaled packages successfully\n" })
        runCommand("npm run dev");
      })
    }
  });
} else if (condition === ".") {
  inquirer.prompt([selectProjectQ, npmIandRunDevQ]).then(async (ans) => {
    const projectChoice = ans["project-choice"];
    const templatePath = path.join(__dirname, "templates", projectChoice);
    const spinner = createSpinner("loading...")
    const projectName = toURLFriendlyString(CURR_DIR)

    createDirectoryContents(templatePath, path.join("/"));

    console.log(`project ${chalk.bold.bgBlue(projectName)} has been created successfully`)
    await updateNameInPackageJson(projectName)
    spinner.success({ text: "Template successfully created.\n" });
    if (ans["install and run dev environment"]) {
      runCommand(`npm i`).catch(() => {
        spinner.error({ text: "process failed" })
      }).then(() => {
        spinner.success({ text: "instaled packages successfully\n" })
        runCommand("npm run dev");
      })
    }
  });
} else if (condition) {
  console.log(
    chalk.red(`Invalid command: "${condition}".`)
  );
} else {
  console.log(chalk.red(`An error occurred or an invalid command was provided.`));
}