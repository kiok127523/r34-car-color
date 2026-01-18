# GTR R34 Model - Debugging Color Changes

## How to Check if Color Changes are Working

### Step 1: Open Browser Console
1. Open your browser (Chrome/Firefox recommended)
2. Press `F12` or right-click → Inspect
3. Go to **Console** tab

### Step 2: Look for Mesh Names
When the model loads, you'll see:
```
🚗 GTR R34 Mesh Names: [list of mesh names]
🎨 Material Names: [list of material names]
```

### Step 3: Change a Color
1. Select a color from the ColorPicker
2. Check console for:
```
✅ Applied color: [hex code]
```

### Step 4: If Colors Don't Change

The model might have different mesh/material naming. Check the logged names and update the exclusion list in `components/3d/GTR34Model.tsx`:

```typescript
const excludedMaterials = [
  'glass', 'window', 'windshield', 'chrome', 'metal',
  'light', 'headlight', 'taillight', 'tire', 'wheel',
  'rubber', 'brake', 'caliper', 'mirror'
  // Add more names from your console logs
];
```

# GTR R34 Model - Debugging Color Changes

## Current Logic: INCLUSION-BASED (Body Paint Only)

The system now uses **INCLUSION + EXCLUSION** logic to paint ONLY body panels:

### ✅ WILL Paint (Body Parts):
```
- body, door, hood, trunk, boot, bonnet
- fender, bumper, panel, roof, quarter
- side panels, front/rear panels, skirt, lip
```

### ❌ WILL NOT Paint (Protected Parts):
```
- Wheels, tires, rims, brakes, calipers
- Glass, windows, windshield
- Lights (headlights, taillights, indicators)
- Chrome, mirrors, grilles, badges
- Exhaust, pipes, mufflers
- Interior, seats, dashboard
- Engine, suspension, chassis
```

## How It Works

1. **Check mesh/material name** against body parts list
2. **If it's a body part** → Check if it's in exclusion list
3. **If body part AND not excluded** → Apply paint color
4. **Everything else** → Keep original color

This ensures ONLY the car body gets painted, nothing else!

## Troubleshooting

### Problem: Color changes but looks wrong
**Solution**: Some materials might need to be excluded. Add their names to the `excludedMaterials` array.

### Problem: Nothing changes color
**Solution**: 
1. Check if mesh names in console match our detection logic
2. The model might use different naming - adjust the `shouldExclude` logic
3. Try commenting out the entire `shouldExclude` check to force color on everything:
```typescript
// Temporarily disable exclusion for testing
const shouldExclude = false;
```

### Problem: Too many parts change color
**Solution**: Add more specific names to the `excludedMaterials` array based on console logs.

## Advanced: Manual Material Targeting

If you want to be very specific about which parts to color:

```typescript
// Instead of exclusion, use inclusion
const bodyParts = [
  'body', 'door', 'hood', 'trunk', 'fender', 
  'bumper', 'panel', 'roof'
];

const shouldInclude = bodyParts.some(part => 
  meshName.includes(part)
);

if (shouldInclude) {
  // Apply color
}
```

## Visual Indicators

Current color is shown in:
1. **ColorPicker** - Top preview box with hex code
2. **Console** - Logs when color is applied
3. **3D Model** - Should update in real-time

## Performance

The color application uses:
- `useEffect` dependency on `carColor` 
- `material.needsUpdate = true` to force re-render
- `scene.clone()` to avoid cache pollution

This ensures smooth, real-time updates! 🎨
