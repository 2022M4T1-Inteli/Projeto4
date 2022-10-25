import React, { Suspense } from 'react'
import { OrbitControls } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'

import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

function Mesh() {
    const gltf = useLoader(GLTFLoader, '/ipt_logo.glb')
    const myMesh = React.useRef<any>(null)

    useFrame(({ clock }) => {

        myMesh.current.rotation.z = -clock.getElapsedTime() / 4
    })

    return (
        <Suspense fallback={<div>loading...</div> /* or null */}>
            <primitive ref={myMesh} object={gltf.scene} position={[0, -0, 0]} />
        </Suspense>
    )
}

function InteliLogo() {
    const gltf = useLoader(GLTFLoader, '/inteli_logo.glb')
    const myMesh = React.useRef<any>(null)

    useFrame(({ clock }) => {
        myMesh.current.rotation.y =  clock.getElapsedTime() * 2
    })
    //position={[-2.5, 11, 0]}
    return (
        <Suspense fallback={<div>loading...</div> /* or null */}>
            <primitive
                scale={[8, 8, 8]}
                ref={myMesh}
                rotation={[0, -4.8, 0]}
                object={gltf.scene}
                position={[0,0,0]}
            />
        </Suspense>
    )
}

const IptLogo: React.FC = () => {
    return (
        <Canvas camera={{ position: [0, 0, 20] }}>
            <OrbitControls enableZoom={false} />
            <pointLight position={[-10, 0, 30]} intensity={1} />
            <pointLight position={[10, 0, 30]} intensity={1} />
            <pointLight position={[-10, 0, -30]} intensity={1} />
            <pointLight position={[10, 0, -30]} intensity={1} />

            <pointLight position={[10, 30, 1]} intensity={0.5} />
            <pointLight position={[-10, 30, 1]} intensity={0.5} />
            <pointLight position={[10, -30, 1]} intensity={0.5} />
            <pointLight position={[-10, -30, 1]} intensity={0.5} />
            <Mesh />
            <InteliLogo  />
        </Canvas>
    )
}

export default IptLogo
