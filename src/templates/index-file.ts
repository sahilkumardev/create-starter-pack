import { ProjectConfig } from "../types";

export function getIndexFile(config: ProjectConfig): string {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${config.projectName}</title>
    <link rel="stylesheet" href="styles.${config.styling === "css" ? "css" : "css"}">
  </head>
  <body>
    <h1>Welcome to ${config.projectName}!</h1>
    <p>This is a ${config.language} project using ${config.styling === "tailwind" ? "Tailwind CSS" : "plain CSS"}.</p>

    <script src="index.${config.language === "typescript" ? "ts" : "js"}"></script>
  </body>
  </html>
`;
}
