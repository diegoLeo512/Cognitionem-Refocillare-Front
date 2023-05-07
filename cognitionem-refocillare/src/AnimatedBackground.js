import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

function AnimatedBackground() {
  const containerRef = useRef();

  useEffect(() => {
    // Configuración de Three.js
    const container = containerRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Creación de geometría y materiales
    const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff });

    // Creación de malla
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Animación
    function animate() {
      requestAnimationFrame(animate);
      mesh.rotation.x += 0.01;
      mesh.rotation.y += 0.01;
      renderer.render(scene, camera);
    }

    animate();

    // Limpieza
    return () => {
      container.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} style={{ width: '100%', height: '100%' }} />;
}

export default AnimatedBackground;
