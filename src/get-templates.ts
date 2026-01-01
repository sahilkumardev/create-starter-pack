import { getReadme } from "./templates/readme-file";
import { ProjectConfig, FileTemplate } from "./types";
import { getIndexFile } from "./templates/index-file";
import { getStyleFile } from "./templates/style-file";
import { getJavaScript, getTypeScript } from "./templates/script-file";

export function getTemplates(config: ProjectConfig): FileTemplate[] {
  const templates: FileTemplate[] = [
    { path: "README.md", content: getReadme(config) },
    { path: "index.html", content: getIndexFile(config) },
    {
      path: `script.${config.language === "typescript" ? "ts" : "js"}`,
      content:
        config.language === "typescript" ? getTypeScript() : getJavaScript(),
    },
    {
      path: `styles.${config.styling === "css" ? "css" : "css"}`,
      content: getStyleFile(config),
    },
  ];

  return templates;
}
