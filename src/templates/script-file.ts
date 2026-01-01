export function getTypeScript(): string {
  return `export const sum = (a: number, b: number): number => {
  return a + b;
};
`;
}

export function getJavaScript(): string {
  return `export const sum = (a, b) => {
  return a + b;
};
`;
}
