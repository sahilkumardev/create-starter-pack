import * as fs from "fs";
import * as path from "path";
import { ProjectConfig } from "./types";
import { getTemplates } from "./get-templates";

export async function createProject(config: ProjectConfig): Promise<void> {
  const projectPath = path.join(process.cwd(), config.projectName);

  if (fs.existsSync(projectPath)) {
    throw new Error(`Directory ${config.projectName} already exists`);
  }

  fs.mkdirSync(projectPath, { recursive: true });

  const templates = getTemplates(config);

  for (const template of templates) {
    const filePath = path.join(projectPath, template.path);
    const fileDir = path.dirname(filePath);

    if (!fs.existsSync(fileDir)) {
      fs.mkdirSync(fileDir, { recursive: true });
    }

    fs.writeFileSync(filePath, template.content, "utf-8");
  }
}
