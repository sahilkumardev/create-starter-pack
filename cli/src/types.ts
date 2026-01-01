export interface ProjectConfig {
  projectName: string;
  language: "typescript" | "javascript";
  styling: "css" | "tailwind";
  tailwindVersion?: "v3" | "v4";
}

export interface FileTemplate {
  path: string;
  content: string;
}
