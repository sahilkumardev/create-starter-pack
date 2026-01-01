import { ProjectConfig } from '../types';

export function getReadme(config: ProjectConfig): string {
  return `# ${config.projectName}

This is a starter project built with **${config.language === 'typescript' ? 'TypeScript' : 'JavaScript'}** and **${config.styling === 'tailwind' ? 'Tailwind CSS' : 'CSS'}**.

## 🚀 Getting Started
 
## 🛠️ Technologies Used

- **Language:** ${config.language === 'typescript' ? 'TypeScript' : 'JavaScript'}
- **Styling:** ${config.styling === 'tailwind' ? 'Tailwind CSS' : 'Standard CSS'}

## 📝 License

This project is open source and available under the [MIT License](LICENSE).
`;
}