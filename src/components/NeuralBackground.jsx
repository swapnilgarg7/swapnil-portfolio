import { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

const HUB_COUNT = 18
const REG_COUNT = 162
const TOTAL = HUB_COUNT + REG_COUNT
const CONN_DIST_SQ = 5.5 * 5.5

function createGlowTexture() {
  const size = 128
  const canvas = document.createElement('canvas')
  canvas.width = size
  canvas.height = size
  const ctx = canvas.getContext('2d')
  const c = size / 2
  const g = ctx.createRadialGradient(c, c, 0, c, c, c)
  g.addColorStop(0,    'rgba(100,233,238,1)')
  g.addColorStop(0.2,  'rgba(100,233,238,0.8)')
  g.addColorStop(0.5,  'rgba(100,233,238,0.25)')
  g.addColorStop(1,    'rgba(100,233,238,0)')
  ctx.fillStyle = g
  ctx.fillRect(0, 0, size, size)
  return new THREE.CanvasTexture(canvas)
}

function Network({ mouseRef }) {
  const { viewport } = useThree()

  const data = useMemo(() => {
    const pos = new Float32Array(TOTAL * 3)
    const vel = new Float32Array(TOTAL * 3)
    for (let i = 0; i < TOTAL; i++) {
      pos[i * 3]     = (Math.random() - 0.5) * 24
      pos[i * 3 + 1] = (Math.random() - 0.5) * 15
      pos[i * 3 + 2] = (Math.random() - 0.5) * 5
      const spd = i < HUB_COUNT ? 0.005 : 0.013
      vel[i * 3]     = (Math.random() - 0.5) * spd
      vel[i * 3 + 1] = (Math.random() - 0.5) * spd
    }
    return { pos, vel }
  }, [])

  const glowTex = useMemo(createGlowTexture, [])

  const hubGeo = useMemo(() => {
    const g = new THREE.BufferGeometry()
    const hp = new Float32Array(HUB_COUNT * 3)
    for (let i = 0; i < HUB_COUNT; i++) {
      hp[i * 3] = data.pos[i * 3]
      hp[i * 3 + 1] = data.pos[i * 3 + 1]
      hp[i * 3 + 2] = data.pos[i * 3 + 2]
    }
    g.setAttribute('position', new THREE.BufferAttribute(hp, 3))
    return g
  }, [data])

  const regGeo = useMemo(() => {
    const g = new THREE.BufferGeometry()
    const rp = new Float32Array(REG_COUNT * 3)
    for (let i = 0; i < REG_COUNT; i++) {
      rp[i * 3]     = data.pos[(HUB_COUNT + i) * 3]
      rp[i * 3 + 1] = data.pos[(HUB_COUNT + i) * 3 + 1]
      rp[i * 3 + 2] = data.pos[(HUB_COUNT + i) * 3 + 2]
    }
    g.setAttribute('position', new THREE.BufferAttribute(rp, 3))
    return g
  }, [data])

  const lineGeo = useMemo(() => new THREE.BufferGeometry(), [])

  useFrame(() => {
    const { pos, vel } = data
    const mx = mouseRef.current.x * (viewport.width / 2)
    const my = mouseRef.current.y * (viewport.height / 2)

    for (let i = 0; i < TOTAL; i++) {
      const ix = i * 3, iy = i * 3 + 1
      const dx = mx - pos[ix], dy = my - pos[iy]
      const d2 = dx * dx + dy * dy
      if (d2 < 30 && d2 > 0) {
        const d = Math.sqrt(d2)
        vel[ix] += (dx / d) * 0.006
        vel[iy] += (dy / d) * 0.006
      }
      pos[ix] += vel[ix];  pos[iy] += vel[iy]
      vel[ix] *= 0.975;    vel[iy] *= 0.975
      if (pos[ix] >  14) pos[ix] = -14
      if (pos[ix] < -14) pos[ix] =  14
      if (pos[iy] >   9) pos[iy] =  -9
      if (pos[iy] <  -9) pos[iy] =   9
    }

    // sync hub geo
    const hp = hubGeo.attributes.position.array
    for (let i = 0; i < HUB_COUNT; i++) {
      hp[i * 3] = pos[i * 3]; hp[i * 3 + 1] = pos[i * 3 + 1]; hp[i * 3 + 2] = pos[i * 3 + 2]
    }
    hubGeo.attributes.position.needsUpdate = true

    // sync regular geo
    const rp = regGeo.attributes.position.array
    for (let i = 0; i < REG_COUNT; i++) {
      rp[i * 3] = pos[(HUB_COUNT + i) * 3]
      rp[i * 3 + 1] = pos[(HUB_COUNT + i) * 3 + 1]
      rp[i * 3 + 2] = pos[(HUB_COUNT + i) * 3 + 2]
    }
    regGeo.attributes.position.needsUpdate = true

    // build connection lines
    const segs = []
    for (let i = 0; i < TOTAL; i++) {
      for (let j = i + 1; j < TOTAL; j++) {
        const ddx = pos[i * 3] - pos[j * 3]
        const ddy = pos[i * 3 + 1] - pos[j * 3 + 1]
        if (ddx * ddx + ddy * ddy < CONN_DIST_SQ) {
          segs.push(
            pos[i * 3], pos[i * 3 + 1], pos[i * 3 + 2],
            pos[j * 3], pos[j * 3 + 1], pos[j * 3 + 2]
          )
        }
      }
    }
    lineGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(segs), 3))
  })

  return (
    <>
      <points geometry={hubGeo}>
        <pointsMaterial
          map={glowTex}
          size={0.75}
          transparent
          opacity={0.95}
          sizeAttenuation
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
      <points geometry={regGeo}>
        <pointsMaterial
          map={glowTex}
          size={0.22}
          transparent
          opacity={0.85}
          sizeAttenuation
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
      <lineSegments geometry={lineGeo}>
        <lineBasicMaterial color="#64E9EE" transparent opacity={0.45} />
      </lineSegments>
    </>
  )
}

export default function NeuralBackground() {
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const fn = (e) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1
    }
    window.addEventListener('mousemove', fn)
    return () => window.removeEventListener('mousemove', fn)
  }, [])

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
      <Canvas camera={{ position: [0, 0, 12], fov: 60 }} gl={{ alpha: true, antialias: true }} style={{ pointerEvents: 'none' }}>
        <Network mouseRef={mouseRef} />
      </Canvas>
    </div>
  )
}
