# GTR R34 Car Customizer

A beautiful, interactive 3D car customization web application for the iconic Nissan Skyline GTR R34. Built with Next.js, Three.js, and modern web technologies.

![GTR R34 Customizer](https://img.shields.io/badge/Next.js-14+-black?style=for-the-badge&logo=next.js)
![Three.js](https://img.shields.io/badge/Three.js-3D-blue?style=for-the-badge&logo=three.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)

## ✨ Features

### 🎨 Real 3D Model
- **Authentic GTR R34 Model**: High-quality 3D model from Sketchfab
- **Paint Colors**: 8 preset colors + custom color picker with hex input
- **Real-time Color Application**: See changes instantly on the 3D model
- **Auto-Rotate**: Smooth showroom-style rotation
- **Smart Camera Reset**: GSAP-powered smooth camera reset

### 🎯 Interactive Controls
- **360° Rotation**: Drag to rotate the car
- **Zoom**: Scroll to zoom in/out
- **Pan**: Right-click drag to move camera
- **Touch Support**: Full touch gesture support for mobile

### 📱 Responsive Design
- **Desktop**: Sidebar customization panel
- **Mobile/Tablet**: Drawer with smooth slide-up animation
- **FAB Buttons**: Floating action buttons for quick access

### 💾 Data Persistence
- **Auto-save**: Customization saved to localStorage
- **Hydration-safe**: No SSR conflicts

## 🚀 Tech Stack

- **Framework**: [Next.js 14+](https://nextjs.org/) with App Router
- **3D Graphics**: [Three.js](https://threejs.org/) via [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
- **3D Utilities**: [@react-three/drei](https://github.com/pmndrs/drei)
- **Animation**: [GSAP](https://greensock.com/gsap/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **State Management**: [Zustand](https://zustand-demo.pmnd.rs/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 📦 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/kiok127523/r34-car-color.git
cd r34-car-color
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎮 Usage

### Desktop
1. **Rotate**: Click and drag to rotate the car
2. **Zoom**: Scroll to zoom in/out
3. **Customize**: Use the sidebar panel to change colors
4. **Reset Camera**: Click the 🔄 button to reset camera view

### Mobile/Tablet
1. **Rotate**: Touch and drag to rotate
2. **Zoom**: Pinch to zoom
3. **Customize**: Tap the 🎨 button to open drawer
4. **Reset Camera**: Tap the 🔄 button

## 📁 Project Structure

```
├── app/
│   ├── page.tsx              # Main application page
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles (Tailwind v4)
├── components/
│   ├── ui/                   # shadcn/ui components
│   │   └── drawer.tsx        # Mobile drawer component
│   ├── 3d/
│   │   ├── Car3DViewer.tsx   # 3D canvas with GSAP camera reset
│   │   └── GTR34Model.tsx    # GTR R34 3D model loader
│   ├── customization/
│   │   ├── CustomizationPanel.tsx
│   │   └── ColorPicker.tsx
│   └── layout/
│       ├── Header.tsx
│       └── Footer.tsx
├── lib/
│   ├── store.ts              # Zustand state management
│   ├── localStorage.ts       # Local storage utilities
│   ├── carConfig.ts          # Car parts configuration
│   └── utils.ts              # Utility functions
└── public/
    ├── nissan_skyline_r34_gt-r.glb
    └── models/gtr34/wheels/
        └── wheel_rim_r34.glb
```

## 🎨 Available Colors

- **Bayside Blue** - Iconic R34 color
- **Millennium Jade** - Rare green
- **Midnight Purple II** - Legendary purple
- **White Pearl** - Clean white
- **Black Pearl** - Deep black
- **Sonic Silver** - Metallic silver
- **Champion Yellow** - Bold yellow
- **Passion Red** - Racing red
- **Custom Color** - Any hex color you want!

## ⚡ Performance Features

- Efficient 3D rendering with React Three Fiber
- Smooth GSAP animations (60fps)
- Optimized material updates
- Auto-rotate with pause on interaction
- Responsive loading states
- Hydration-safe architecture

## 🌐 Browser Support

- Chrome/Edge (recommended)
- Firefox
- Safari 14+
- Any modern browser with WebGL 2.0 support

## 🔮 Future Enhancements

- [ ] Wheel customization system
- [ ] Multiple wheel designs
- [ ] Wheel color picker
- [ ] Body kit options
- [ ] Spoiler customization
- [ ] Screenshot/export functionality
- [ ] Share builds via URL
- [ ] Multiple car models (R33, R35)
- [ ] Interior customization
- [ ] AR view support

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the ISC License.

## 🙏 Acknowledgments

- **3D Model**: [Nissan Skyline R34 GT-R](https://sketchfab.com/3d-models/nissan-skyline-r34-gt-r-ff8fb2251dfa4bb9979e7022c5a6666c) by [Lexyc16](https://sketchfab.com/Lexyc16) (License: CC Attribution)
- Nissan for creating the legendary GTR R34
- The JDM tuning community for inspiration
- Three.js and React Three Fiber communities
- GSAP for amazing animation library

## 👤 Author

Created with ❤️ for JDM enthusiasts

---

**Enjoy customizing your dream GTR R34!** 🏎️💨
