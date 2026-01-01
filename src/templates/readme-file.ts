import { ProjectConfig } from '../types';

export function getReadme(config: ProjectConfig): string {
  return `# ${config.projectName}

A ${config.language} project with ${config.styling === 'tailwind' ? 'Tailwind CSS' : 'plain CSS'}.

## Getting Started

Install dependencies:

\`\`\`bash
npm install
\`\`\`

Run the development server:

\`\`\`bash
npm run dev
\`\`\`

Build for production:

\`\`\`bash
npm run build
\`\`\`

## Project Structure

\`\`\`
${config.projectName}/
├── public/
│   └── index.html
├── src/
│   ├── index.${config.language === 'typescript' ? 'ts' : 'js'}
│   └── styles.css
├── package.json
${config.language === 'typescript' ? '├── tsconfig.json\n' : ''}${config.styling === 'tailwind' ? '├── tailwind.config.js\n├── postcss.config.js\n' : ''}└── README.md
\`\`\`

## Technologies

- ${config.language === 'typescript' ? 'TypeScript' : 'JavaScript'}
- ${config.styling === 'tailwind' ? 'Tailwind CSS' : 'Plain CSS'}
- Webpack

---

Created with [create-starter-pack](https://github.com/yourusername/create-starter-pack)
`;
}