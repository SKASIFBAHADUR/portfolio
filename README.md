# Trae Portfolio

A modern, dark-themed portfolio website built with React, featuring stunning visual effects and a sleek design.

## Features

- **Dark Theme**: Modern dark gradient background with subtle textures
- **Animated Background**: Glowing purple-blue liquid shapes with particle effects
- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Clean, minimalist interface with smooth animations
- **Floating Cards**: Interactive cards with metrics and progress indicators

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
trae_portfolio/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navigation header
│   │   ├── Hero.jsx            # Main hero section
│   │   ├── FloatingCards.jsx   # Floating metric cards
│   │   ├── BackgroundEffects.jsx # Particles and liquid shapes
│   │   └── *.css               # Component styles
│   ├── App.jsx                 # Main app component
│   ├── App.css                 # App styles
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles
├── index.html                  # HTML template
├── vite.config.js             # Vite configuration
└── package.json               # Dependencies
```

## Customization

- Update the logo text in `src/components/Header.jsx`
- Modify the hero content in `src/components/Hero.jsx`
- Adjust colors in the CSS files (look for color values like `#667eea`, `#764ba2`)
- Update floating card metrics in `src/components/FloatingCards.jsx`

## Technologies Used

- React 18
- Vite
- CSS3 (with animations and gradients)

## License

MIT

