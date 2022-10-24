import React, { Suspense } from 'react'
import { OrbitControls } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'

import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

function Mesh() {
    const gltf = useLoader(GLTFLoader, '/ipt_logo.glb')
    const myMesh = React.useRef<any>(null)

    useFrame(({ clock }) => {
        // myMesh.current.rotation.z = clock.getElapsedTime() / 2
        myMesh.current.rotation.x = clock.getElapsedTime()
        myMesh.current.rotation.y = clock.getElapsedTime()
        myMesh.current.rotation.z = clock.getElapsedTime()
    })

    return (
        <Suspense fallback={<div>loading...</div> /* or null */}>
            <primitive ref={myMesh} object={gltf.scene} position={[0, 0, 0]} />
        </Suspense>
    )
}

const IptLogo: React.FC = () => {
    return (
            <Canvas camera={{ position: [0, 0, 30] }}>
                <OrbitControls enableZoom={false} />
                <pointLight color={'#de2770'} position={[0, 0, 0]} intensity={1} />
                <pointLight position={[-10, 0, 20]} intensity={1} />
                <pointLight position={[10, 0, 20]} intensity={1} />
                <pointLight position={[-10, 0, -20]} intensity={1} />
                <pointLight position={[10, 0, -20]} intensity={1} />
                <Mesh />
            </Canvas>
    )
}

export default IptLogo
