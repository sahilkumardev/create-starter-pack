import { ProjectConfig } from "../types";

export function getCssConfig(): string {
  return `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
}

.text {
  color: #2563eb;
  margin-bottom: 1rem;
  font-size: 2.5rem;
}
`;
}

export function getTailwindConfig(): string {
  return `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}`;
}
