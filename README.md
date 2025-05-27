# Drum Machine

A responsive Drum Machine built with React 17 and custom CSS, following the FreeCodeCamp Front End Libraries certification project requirements.

## Features

- 9 clickable drum pads, each mapped to a keyboard key (Q, W, E, A, S, D, Z, X, C)
- Each pad or keyboard key triggers a unique drum sound
- The name of the sound is displayed when triggered
- Beautiful gradient background and animated button styles
- Passes all FreeCodeCamp Drum Machine tests

## Demo

![screenshot](./screenshot.png)
*Add your own screenshot if you like!*

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/drum-machine.git
cd drum-machine
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm start
```

Visit [http://localhost:3000](http://localhost:3000) to view the project.

### 4. Build for production

```bash
npm run build
```

## FreeCodeCamp Test

This project includes the FreeCodeCamp official test script. A green button will appear in the lower right corner of the page. Click it to see if all test items pass.

## Tech Stack

- React 17
- JavaScript (ES6+)
- Custom CSS (No Tailwind, No Bootstrap)
- [FreeCodeCamp Test Suite](https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js)

## Directory Structure

```
drum-machine/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── DrumMachine.js
│   │   └── DrumPad.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Notes

- **Do not commit the `node_modules` folder**. It is already ignored by `.gitignore`.
- It is recommended to use the latest version of Node.js and npm.

## License

MIT 