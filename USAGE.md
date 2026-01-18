# GTR R34 Customizer - Quick Start Guide

## 🚀 Running the Application

### Development Mode
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

### Production Build
```bash
npm run build
npm start
```

## 🎮 How to Use

### Desktop
1. **View Car**: Click and drag to rotate the 3D model
2. **Zoom**: Use mouse wheel to zoom in/out
3. **Customize**: Use the panel on the right to select parts
4. **Save**: Click "Save Build" button in the header
5. **Reset**: Click "Reset" to return to stock configuration

### Mobile
1. Tap the **Settings icon** (⚙️) to open customization panel
2. Swipe to close the panel or tap outside
3. Use touch gestures to rotate and zoom the car

## 🎨 Customization Options

### Color Tab
- **Preset Colors**: Choose from 8 iconic GTR colors
- **Custom Color**: Use color picker or enter hex code

### Body Tab
- **Body Kit**: Choose from Stock, Nismo, Veilside, or Top Secret
- **Hood**: Standard, Carbon Fiber Vented, or Aluminum Vented
- **Window Tint**: Clear, Light (20%), Medium (35%), or Dark (5%)

### Wheels Tab
- Select from 5 different wheel designs
- Each wheel has unique styling and color

### Aero Tab
- **Spoiler**: Stock, Nismo GT Wing, Carbon Duck Tail, or Mine's Wing
- **Headlights**: Stock, Clear Lens, Smoked Lens, or LED Conversion
- **Exhaust**: Stock, Titanium Dual, HKS Hi-Power, or Top Secret

## 💾 Data Persistence

Your customization is **automatically saved** to your browser's local storage every time you make a change. When you return to the site, your last configuration will be loaded automatically.

## ⌨️ Keyboard Shortcuts

- **Click + Drag**: Rotate camera
- **Mouse Wheel**: Zoom in/out
- **Two Finger Swipe** (Mobile): Rotate camera

## 🎯 Tips

1. **Best View**: Zoom to medium distance for optimal part visibility
2. **Compare Parts**: Switch between options to see real-time changes
3. **Color Matching**: Use custom color picker for exact color matches
4. **Build Summary**: Check the bottom of customization panel for current parts

## 🐛 Troubleshooting

### 3D Model Not Loading
- Ensure your browser supports WebGL 2.0
- Try using Chrome or Firefox for best compatibility
- Check browser console for errors

### Performance Issues
- Close other browser tabs
- Reduce graphics quality in browser settings
- Clear browser cache and reload

### Customization Not Saving
- Check if cookies/local storage is enabled
- Try different browser
- Clear browser cache

## 📱 Browser Requirements

- **Chrome**: 90+ (Recommended)
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+

WebGL 2.0 support required.

## 🎨 Color Codes (for reference)

- Bayside Blue: `#2e5f8f`
- Midnight Purple II: `#2b1b3d`
- Millennium Jade: `#1a4d2e`
- White Pearl: `#f8f9fa`
- Black Pearl: `#1a1a1a`
- Sonic Silver: `#8c8c8c`
- Champion Yellow: `#ffd700`
- Passion Red: `#c41e3a`

## 🔧 Technical Details

- **Framework**: Next.js 14+ with App Router
- **3D Engine**: Three.js via React Three Fiber
- **State Management**: Zustand
- **UI**: shadcn/ui + Tailwind CSS
- **Storage**: Browser Local Storage

## 📞 Support

For issues or questions:
1. Check the troubleshooting section above
2. Review the main README.md
3. Check browser console for error messages

---

**Enjoy building your dream GTR R34!** 🏎️✨
