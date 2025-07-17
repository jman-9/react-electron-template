# Electron + Typescript + Vite + React Template
A simple boilerplate setup combining Electron (main & preload), Vite, and React.  
All build outputs are consolidated under a single `dist/` directory.

## 📁 Project Structure
The codebase is structured in a monorepo-like format for scalability:
```
├── apps/
│ ├── electron/    # Electron main & preload (built with tsup)
│ └── renderer/    # Vite + React frontend
├── dist/          # build outputs consolidated with electron and renderer
```

## Getting Started
### Prerequisites
- Node.js (v16 or higher)
- pnpm (v8 or higher)

### ⚙️ Installation
1. Clone the repository:
```bash
git clone https://github.com/jman-9/react-electron-template.git
cd react-electron-template
```

2. Install dependencies:
```bash
pnpm install
```

3. Complete to install Electron:
```bash
cd apps/electron
pnpm approve-builds
# select 'electron' and approve to run script
```

### ⚙️ Start Scripts
1. Start the development mode:
```bash
# at the project root
pnpm dev
```

2. Start the build mode:
```bash
# at the project root
pnpm build
pnpm start
```

## Development Mode & Build Mode
### Development Mode
- Uses `Vite` dev server for fast HMR in renderer
- Electron main & preload scripts are recompiled via '`tsup --watch` '
  and reloaded via '`electronmon`'
- load renderer from URL
  ```javascript
   win.loadURL('http://localhost:5173'); 
   ```
### Build Mode
- All files are bundled under `dist/`
- Main loads the HTML from static path
  ```javascript
   win.loadFile(path.join(__dirname, 'renderer/index.html'));
  ```

## 🛠 Tech Stack
- Vite
- React
- TypeScript
- Electron
- tsup
- electronmon
- concurrently
- pnpm (monorepo support)

## Contributing
Open a Pull Request

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
