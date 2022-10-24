import React, { Suspense } from 'react'
import { OrbitControls } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'

import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

function Mesh() {
    const gltf = useLoader(GLTFLoader, '/ipt_logo.glb')
    const myMesh = React.useRef<any>(null)

    useFrame(({ clock }) => {
        console.log(clock.getElapsedTime())
        // myMesh.current.rotation.x = clock.getElapsedTime() / 1.5
        myMesh.current.rotation.y = clock.getElapsedTime()/ 1.6
        myMesh.current.rotation.z = -clock.getElapsedTime() / 2
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
                scale={[4, 4, 4]}
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
            <Mesh />
            <InteliLogo  />
        </Canvas>
    )
}

export default IptLogo
