# create-chrome-ext

[![npm version](https://badge.fury.io/js/create-chrome-ext.svg)](https://www.npmjs.com/package/create-chrome-ext)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Downloads](https://img.shields.io/npm/dm/create-chrome-ext.svg)](https://www.npmjs.com/package/create-chrome-ext)

> The fastest way to create a Chrome Extension project with React, TypeScript/JavaScript, and Vite

A CLI tool that scaffolds a modern Chrome Extension project using React and Vite, similar to how `create-react-app` works. Get up and running with a fully configured Chrome Extension development environment in seconds.

## ✨ Features

- 🚀 **Lightning Fast**: Powered by Vite for incredibly fast development builds
- ⚛️ **React Ready**: Pre-configured React setup with modern JSX transform
- 📝 **TypeScript Support**: Choose between JavaScript or TypeScript templates
- 🔧 **Manifest V3**: Built with the latest Chrome Extension Manifest V3 specification
- 🔄 **Auto Reload**: Development server with automatic extension reloading
- 📦 **Production Ready**: Optimized build process for publishing
- 🎯 **Complete Structure**: Includes background script, content script, and popup components

## 🚀 Quick Start

```bash
npx create-chrome-ext my-extension
cd my-extension
npm run dev
```

## 📦 Installation & Usage

### Using npx (recommended)
```bash
npx create-chrome-ext <project-name>
```

### Using npm
```bash
npm install -g create-chrome-ext
create-chrome-ext <project-name>
```

### Using yarn
```bash
yarn create chrome-ext <project-name>
```

## 🎬 Example Workflow

```bash
# Create a new Chrome extension
npx create-chrome-ext my-awesome-extension

# Navigate to the project
cd my-awesome-extension

# Choose your template (JavaScript or TypeScript)
# The CLI will prompt you to select

# Start development
npm run dev

# Build for production
npm run build
```

## 📋 Available Scripts

Once your project is created, you can run the following commands:

### `npm run dev`
Starts the development server with watch mode and automatic extension reloading. Perfect for active development.

### `npm run build`
Creates an optimized production build in the `dist` folder, ready for packaging and publishing to the Chrome Web Store.

### `npm run preview`
Serves the production build locally for testing before publishing.

## 📁 Project Structure

After creating your extension, you'll get a project structure like this:

```
my-extension/
├── public/
│   ├── icons/
│   │   ├── icon16.png
│   │   ├── icon48.png
│   │   └── icon128.png
│   └── manifest.json
├── src/
│   ├── background/
│   │   └── background.js
│   ├── content/
│   │   └── content.js
│   ├── popup/
│   │   ├── Popup.jsx
│   │   ├── Popup.css
│   │   └── index.jsx
│   └── utils/
│       └── storage.js
├── package.json
├── vite.config.js
└── README.md
```

### Key Components

- **`src/popup/`**: React-based popup interface that appears when users click the extension icon
- **`src/background/`**: Service worker script that handles extension lifecycle and background tasks
- **`src/content/`**: Content script that runs in the context of web pages
- **`public/manifest.json`**: Chrome Extension manifest file (Manifest V3)
- **`public/icons/`**: Extension icons in required sizes

## 🔧 Development Workflow

### 1. Start Development Server
```bash
npm run dev
```

### 2. Load Extension in Chrome

1. Open Chrome and navigate to `chrome://extensions/`
2. Enable "Developer mode" (toggle in top right)
3. Click "Load unpacked"
4. Select your project's `dist` folder
5. Your extension is now loaded and ready for testing!

### 3. Development Tips

- **Auto-reload**: The extension automatically reloads when you make changes
- **Console debugging**: Use Chrome DevTools to debug different parts:
  - **Popup**: Right-click extension icon → "Inspect popup"
  - **Background**: Go to `chrome://extensions/` → Click "background page"
  - **Content Script**: Use regular DevTools on any webpage

### 4. Building for Production

```bash
npm run build
```

The `dist` folder will contain your packaged extension ready for the Chrome Web Store.

## 🛠️ Customization

### Modify Manifest
Edit `public/manifest.json` to customize permissions, content scripts, and other extension settings.

### Add Dependencies
```bash
npm install <package-name>
```

### Styling
- Use CSS modules, styled-components, or any CSS framework
- Tailwind CSS can be easily integrated
- CSS files are automatically processed by Vite

## 🤝 Contributing

We welcome contributions! Please see our contributing guidelines:

### Development Setup
```bash
git clone https://github.com/yourusername/create-chrome-ext.git
cd create-chrome-ext
npm install
npm link
```

### Testing Changes
```bash
# Test the CLI locally
create-chrome-ext test-extension
```

### Pull Request Process

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Reporting Issues

Please use the [GitHub issue tracker](https://github.com/yourusername/create-chrome-ext/issues) to report bugs or request features.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by [create-react-app](https://github.com/facebook/create-react-app)
- Built with [Vite](https://vitejs.dev/)
- React team for the amazing library

---

**Happy Extension Building! 🎉**

If you find this tool helpful, please consider giving it a ⭐ on [GitHub](https://github.com/yourusername/create-chrome-ext)!