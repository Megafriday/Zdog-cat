const illo = new Zdog.Illustration({
  element: '.zdog-canvas',
  dragRotate: true
})

// 頭
const head = new Zdog.Shape({
  addTo: illo,
  stroke: 200,
  color: '#9ED'
})

// 耳
const ear_right = new Zdog.Shape({
  addTo: illo,
  stroke: 20,
  fill: true,
  path: [
    { x: 0, y: -10 },
    { x: 30, y: 30 },
    { x: -30, y: 30 }
  ],
  translate: { x: -90, y: -80, z: 10 },
  rotate: { z: -0.6 }
})
// ear_left
ear_right.copy({
  addTo: illo,
  translate: { x: 90, y: -80, z: 10 },
  rotate: { z: 0.6 }
})

// 目
const eye_right = new Zdog.Ellipse({
  addTo: illo,
  diameter: 40,
  quarters: 2,
  stroke: 10,
  rotate: { z: -Zdog.TAU / 4 },
  translate: { x: -40, z: 90 }
})
// eye_left
eye_right.copy({
  translate: { x: 40, z: 90 }
})

// 口
const mouth = new Zdog.Shape({
  addTo: illo,
  stroke: 8,
  path: [
    { x: -14 },
    { x: 14 }
  ],
  translate: { y: 20, z: 90 }
})

// ひげ
const hige_left = new Zdog.Group({
  addTo: illo,
  translate: { x: -90, y: 10, z: 60 }
})

// 1本目のひげ
const hige = new Zdog.Shape({
  addTo: hige_left,
  stroke: 9,
  path: [
    { x: 15 },
    { x: -15 }
  ],
  rotate: { z: 0.4 }
})
// 2本目のひげ
hige.copy({
  translate: { y: 40 },
  rotate: { z: -0.2 }
})

// まとめて複製
hige_left.copyGraph({
  rotate: { z: Zdog.TAU / 2 },
  translate: { x: 90, y: 50, z: 60 }
})

// 描画
const animate = () => {
  illo.updateRenderGraph()
  requestAnimationFrame(animate)
}
animate()