#!/usr/bin/env node
import prompts from "prompts";
import chalk from "chalk";
import { execSync } from "child_process";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import fs from "fs";

const __dirname = dirname(fileURLToPath(import.meta.url));

async function main() {
  console.log(chalk.cyan("\n🚀 Create Chrome Extension with Vite\n"));

  // Ask project details
  const response = await prompts([
    {
      type: "text",
      name: "projectName",
      message: "Project name:",
      initial: "my-extension",
    },
    {
      type: "select",
      name: "language",
      message: "Choose language:",
      choices: [
        { title: "JavaScript", value: "js" },
        { title: "TypeScript", value: "ts" },
      ],
    },
  ]);

  const projectDir = join(process.cwd(), response.projectName);

  if (fs.existsSync(projectDir)) {
    console.log(chalk.red("❌ Folder already exists!"));
    process.exit(1);
  }

  fs.mkdirSync(projectDir);

  // Copy template
  const templatePath = join(__dirname, `../templates/${response.language}`);
  fs.cpSync(templatePath, projectDir, { recursive: true });

  console.log(chalk.green("\n✅ Project created successfully!"));
  console.log(`\n👉 Next steps:\n`);
  console.log(chalk.yellow(`  cd ${response.projectName}`));
  console.log(chalk.yellow(`  npm install`));
  console.log(chalk.yellow(`  npm run dev`));
}

main();
