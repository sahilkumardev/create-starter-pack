export interface ProjectConfig {
  projectName: string;
  language: "typescript" | "javascript";
  styling: "css" | "tailwind";
}

export interface FileTemplate {
  path: string;
  content: string;
}
