import React from 'react';
import styles from "../styles.module.scss";
import * as THREE from 'three';

function GroupScene() {
    const canvasRef = React.useRef(null);

    React.useEffect(() => {
        const scene = new THREE.Scene();

        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshBasicMaterial({color: 'purple', wireframe: true});

        // Group
        const group = new THREE.Group();
        group.scale.y = 1.4;
        group.rotation.x = Math.PI * 0.25;

        const cubeOne = new THREE.Mesh(geometry, material);
        cubeOne.position.x = -1.5;

        const cubeTwo = new THREE.Mesh(geometry, material);
        cubeTwo.position.x = 0;

        const cubeThree = new THREE.Mesh(geometry, material);
        cubeThree.position.x = 1.5;

        group.add(cubeOne);
        group.add(cubeTwo);
        group.add(cubeThree);

        // const mesh = new THREE.Mesh(geometry, material);

        // mesh.position.set(-0.5, -0.8, 0.5);
        // mesh.scale.set(0.5, 2, 0.7);

        // Rotation
        // mesh.rotation.x = Math.PI * 0.25;
        // mesh.rotation.y = Math.PI * 0.25;
        //
        // mesh.rotation.reorder('YXZ');

        const sizes = {
            width: 600,
            height: 600,
        };
        const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
        camera.position.z = 5;
        camera.position.y = 1;

        // Look at
        // camera.lookAt(new THREE.Vector3(0, -1, 0));

        scene.add(group, camera);

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
        <section className={styles.mainSection}>
            <div className={styles.mainSection__title}>
                <span>Group Scene</span>
            </div>
            <canvas className={styles.mainSection__canvas} ref={canvasRef}/>
        </section>
    );
};

export default GroupScene;