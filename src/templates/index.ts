import { ProjectConfig, FileTemplate } from "../types";
import { getIndexFile } from "./index-file";
import { getStyleFile } from "./style-file";
import { getReadme } from "./readme-file";
import { getJavaScript, getTypeScript } from "./script-file";

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

  // if (config.language === 'typescript') {
  //   templates.push({ path: 'tsconfig.json', content: getTypeScript() });
  // }

  // if (config.styling === 'tailwind') {
  //   templates.push({ path: 'tailwind.config.js', content: getTailwindConfig() });
  //   templates.push({ path: 'postcss.config.js', content: getPostCSSConfig() });
  // }

  return templates;
}

// function getTailwindConfig(): string {
//   return `module.exports = {
//   content: [
//     "./src/**/*.{js,ts,jsx,tsx}",
//     "./public/**/*.html",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
// `;
// }

// function getPostCSSConfig(): string {
//   return `module.exports = {
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//   },
// }
// `;
