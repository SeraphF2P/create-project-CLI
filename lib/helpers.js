
import path from 'path';
import fs from 'fs';
import chalk from 'chalk';
import process from 'process';
import { execSync } from 'child_process'

export const toURLFriendlyString = (str) => {
  return str.split(path.join("/")).at(-1).trim().toLowerCase().replace(/[ ^ '"<>#%{}|\\^~\[\]$]+/g, "-")
}

export const updateNameInPackageJson = async (name) => {
  const file = "package.json"
  await fs.promises.readFile(file, 'utf8')
    .then(async data => {
      let json = JSON.parse(data);
      json.name = name;
      await fs.promises.writeFile(file, JSON.stringify(json, null, 2))
        .catch(err => { console.log(chalk.red("Update Failed: " + err)); });
    })
    .catch(err => { console.log("Read Error: " + err); });
}
export const runCommand = (command) => {
  return new Promise((resolve, reject) => {
    try {
      execSync(command, { stdio: "inherit" });
      resolve(); // Resolve the promise when the command completes successfully
    } catch (error) {
      console.error(`Failed to Execute ${command}`, error);
      reject(error); // Reject the promise with the error if the command fails
    }
  });
};
export const createDirectoryContents = (templatePath, newProjectPath) => {
  const CURR_DIR = process.cwd();

  const filesToCreate = fs.readdirSync(templatePath);

  filesToCreate.forEach((file) => {
    const origFilePath = path.join(templatePath, file);

    // get stats about the current file
    const stats = fs.statSync(origFilePath);

    if (stats.isFile()) {
      const contents = fs.readFileSync(origFilePath, "utf8");

      // Rename
      if (file === ".npmignore") file = ".gitignore";
      fs.writeFileSync(
        path.join(CURR_DIR, newProjectPath, file),
        contents,
        "utf8"
      );
    } else if (stats.isDirectory()) {
      fs.mkdirSync(path.join(CURR_DIR, newProjectPath, file));
      // Then recursively copy contents
      createDirectoryContents(
        path.join(templatePath, file),
        path.join(newProjectPath, file)
      );
    }
  });

}