import React from 'react';
import * as THREE from 'three';

function TransformScene() {
    const canvasRef = React.useRef(null);

    React.useEffect(() => {
        const scene = new THREE.Scene();

        const axesHelper = new THREE.AxesHelper(3);

        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshBasicMaterial({color: 'purple', wireframe: true});
        const mesh = new THREE.Mesh(geometry, material);

        // Position
        mesh.position.set(-0.5, -0.8, 0.5);

        // Scaling
        mesh.scale.set(0.5, 2, 0.7)

        const sizes = {
            width: 600,
            height: 600,
        };
        const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
        camera.position.z = 3;

        scene.add(axesHelper, mesh, camera);

        // Vector length
        console.log(mesh.position.length());

        // Distance to another vector
        console.log(mesh.position.distanceTo(camera.position));

        // Normalized value
        console.log(mesh.position.normalize());

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
        <div>
            <span>TransformScene</span>
            <canvas ref={canvasRef}/>
        </div>
    );
};

export default TransformScene;