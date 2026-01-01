import { ProjectConfig } from "../types";

export function getIndexFile(config: ProjectConfig): string {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${config.projectName}</title>
    <link rel="stylesheet" href="styles.css"> ${ config.styling === "tailwind" ? `  
    ${ config.tailwindVersion === "v4"
        ? `<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>`
        : `<script src="https://cdn.tailwindcss.com"></script>`
    }`: "" }
  </head>
  <body>
    <div class="container">
      <h1 class="text">Welcome to ${config.projectName}!</h1>
    </div>

    <script src="script.${
      config.language === "typescript" ? "ts" : "js"
    }"></script>
  </body>
  </html>
`;
}
