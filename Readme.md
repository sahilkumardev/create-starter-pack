# Create Starter Pack 🚀

A modern CLI tool that helps developers quickly scaffold starter projects with their favorite tech stack. Perfect for beginners who want to get from zero to coding in seconds.

## 📦 What it creates

The CLI generates a complete starter project with:
- `index.html` - A clean HTML5 boilerplate
- `styles.css` - CSS or Tailwind CSS setup  
- `script.js/ts` - JavaScript or TypeScript starter file
- `README.md` - Project documentation

## 🚀 Quick Start

```bash
npx create-starter-pack@latest
```

The CLI will guide you through:
1. **Project Name** - Choose your project name
2. **Language** - JavaScript or TypeScript
3. **Styling** - CSS or Tailwind CSS
4. **Tailwind Version** - v3 or v4 (if Tailwind is selected)

## 📋 Features

- 🎯 **Beginner-friendly** - Simple, clean starter templates
- 🔧 **Interactive CLI** - Guided project setup with prompts
- 📱 **Modern tech stack** - Support for TypeScript and Tailwind CSS
- ⚡ **Fast setup** - Get coding in seconds
- 🎨 **Flexible styling** - Choose between CSS or Tailwind CSS
- 📝 **Ready to use** - Comes with sample code and proper structure

## 🏗️ Project Structure

This repository contains two main parts:

### CLI Tool (`/cli`)
The command-line interface that generates starter projects:
- Built with TypeScript
- Uses Inquirer.js for interactive prompts
- Includes template generators for different configurations
- Published as NPM package `create-starter-pack`

### Demo Website (`/web`)
A Next.js website showcasing the CLI tool:
- Built with Next.js 16 and React 19
- Styled with Tailwind CSS v4
- Features interactive hero section with copy-to-clipboard functionality
- Responsive design with smooth animations

## 🛠️ Development

### Prerequisites
- Node.js 18+
- pnpm (recommended) or npm

### Setup CLI Development
```bash
cd cli
pnpm install
pnpm build
```

### Setup Website Development
```bash
cd web  
pnpm install
pnpm dev
```

### CLI Development Workflow
1. Make changes to the CLI source code
2. Run `pnpm build` to compile TypeScript
3. Test locally with `./dist/index.js` or `pnpm build` (which runs the CLI)

## 📖 Usage Examples

### Basic JavaScript project
```bash
npx create-starter-pack@latest
# Choose JavaScript + CSS
```

### TypeScript with Tailwind CSS
```bash
npx create-starter-pack@latest  
# Choose TypeScript + Tailwind CSS + v4
```

## 🎯 Generated Project Structure

```
my-project/
├── index.html          # Main HTML file
├── styles.css          # Styling (CSS or Tailwind setup)
├── script.js/ts        # JavaScript/TypeScript file
└── README.md           # Project documentation
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Sahil Kumar Dev**

## 🔗 Keywords

`create-app`, `starter`, `starter-pack`, `tailwind-css`, `cli`, `typescript`, `javascript`, `web-development`, `boilerplate`

---

Made with ❤️ for developers who want to start coding quickly without the setup hassle.