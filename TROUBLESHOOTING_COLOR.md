# วิธีแก้ปัญหาสีทาไม่ถูกส่วน

## ปัญหา
เปลี่ยนสีแล้วทาสีส่วนที่ไม่ใช่ตัวรถด้วย (เช่น ล้อ, ไฟ, กระจก)

## วิธีแก้ (Step by Step)

### ขั้นตอนที่ 1: ดู Console Logs

1. เปิด Browser (http://localhost:3000)
2. กด **F12** เปิด DevTools
3. ไปที่ Tab **Console**
4. **Refresh หน้าเว็บ** (Cmd+R / Ctrl+R)
5. **เลือกสีใหม่** (เช่น สีแดง #ff0000)

### ขั้นตอนที่ 2: อ่าน Logs

จะเห็นข้อความแบบนี้:

```
🚗 GTR R34 Model Structure:
┌─────────┬──────────────────┬─────────────────┐
│ (index) │      mesh        │    material     │
├─────────┼──────────────────┼─────────────────┤
│    0    │   'Mesh_001'     │ 'Material_001'  │
│    1    │   'Wheel_FL'     │ 'Tire_Mat'      │
└─────────┴──────────────────┴─────────────────┘

📊 Starting color application
Selected color: #ff0000 | Is default? false

🎨 Painting: Mesh_001 → Material_001
🎨 Painting: Body_Main → Paint
⏭️  Skipping: Wheel_FL (protected)
```

### ขั้นตอนที่ 3: หาส่วนที่ผิด

ดูว่า:
- **🎨 Painting** = ส่วนที่ถูกทาสี
- **⏭️ Skipping** = ส่วนที่ถูกข้าม (ป้องกัน)

**ตัวอย่างปัญหา:**
```
🎨 Painting: Wheel_FL → Tire_Mat  ← ❌ ล้อถูกทาสี (ไม่ควร!)
🎨 Painting: Glass_01 → Glass     ← ❌ กระจกถูกทาสี (ไม่ควร!)
```

### ขั้นตอนที่ 4: บอกผม

Copy logs มาให้ผม แล้วบอกว่า:
1. **mesh ไหนถูกทาสีที่ไม่ควร?**
2. **mesh ไหนไม่ถูกทาสีที่ควรทา?**

ผมจะแก้ให้ทันที!

---

## แก้ไขเอง (สำหรับคนที่รู้ชื่อ mesh แล้ว)

### เปิดไฟล์: `components/3d/GTR34Model.tsx`

หา section นี้ (ประมาณบรรทัดที่ 76):

```typescript
const neverPaint = [
  'wheel', 'tire', 'tyre', 'rim', 'disc',
  'brake', 'caliper', 'rotor',
  'glass', 'window', 'windshield', 'windscreen',
  // ... อื่นๆ
];
```

### เพิ่มชื่อ mesh ที่ไม่ต้องการทาสี:

ถ้าเห็นใน logs ว่า:
```
🎨 Painting: Chrome_Trim → Chrome_Mat  ← ไม่ต้องการทาสี
```

เพิ่ม `'chrome_trim'` เข้าไปใน array:

```typescript
const neverPaint = [
  'wheel', 'tire', 'tyre', 'rim', 'disc',
  'chrome_trim',  // ← เพิ่มตรงนี้
  // ... อื่นๆ
];
```

Save แล้ว refresh browser!

---

## ตัวอย่าง Mesh Names ที่พบบ่อย

| ชื่อที่อาจพบ | ต้องการทาสีไหม? | Action |
|-------------|----------------|--------|
| `Body_*`, `Door_*`, `Hood_*` | ✅ ทา | ไม่ต้องแก้ |
| `Wheel_*`, `Tire_*` | ❌ ไม่ทา | ใส่ใน `neverPaint` |
| `Glass_*`, `Window_*` | ❌ ไม่ทา | ใส่ใน `neverPaint` |
| `Light_*`, `Lamp_*` | ❌ ไม่ทา | ใส่ใน `neverPaint` |
| `Chrome_*`, `Trim_*` | ❌ ไม่ทา | ใส่ใน `neverPaint` |

---

## เทคนิค: ทาสีเฉพาะที่ต้องการ

ถ้าต้องการควบคุมแบบเข้มงวด เปลี่ยนเป็น **Whitelist** แทน:

```typescript
// เปลี่ยนจาก exclusion เป็น inclusion
const shouldPaint = [
  'body', 'door', 'hood', 'trunk', 'fender', 'bumper'
];

const shouldApplyColor = shouldPaint.some(part => 
  meshName.includes(part) || matName.includes(part)
);

if (shouldApplyColor) {
  // ทาสี
}
```

---

**บอกผมว่าเห็นอะไรใน Console ครับ แล้วผมจะแก้ให้ทันที!** 🔧
