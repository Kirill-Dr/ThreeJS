import React, {useEffect} from 'react';
import * as THREE from 'three';

function FirstScene() {
    const canvasRef = React.useRef(null);

    useEffect(() => {
        // Scene
        const scene = new THREE.Scene();

        // Object
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshBasicMaterial({color: 'purple'});
        const mesh = new THREE.Mesh(geometry, material);

        scene.add(mesh);

        // Camera
        const sizes = {
            width: 600,
            height: 600,
        };
        const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
        camera.position.set(1, 1, 3);

        scene.add(camera);

        const canvas = canvasRef.current;
        const renderer = new THREE.WebGLRenderer({ canvas })
        renderer.setSize(sizes.width, sizes.height);
        renderer.render(scene, camera);

        return () => {
            renderer.dispose();
            geometry.dispose();
            material.dispose();
        };
    }, []);


    return (
        <>
            <canvas ref={canvasRef} />
        </>
    );
};

export default FirstScene;