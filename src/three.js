import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export const loadModel = () => {
  const logo = document.getElementById('lg');

  const sizes = {
    width: logo.getBoundingClientRect().width,
    height: logo.getBoundingClientRect().height,
  };

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(60, sizes.width / sizes.height, 1, 1000);
  camera.position.y = 1.1;
  camera.position.z = 2.5;
  scene.add(camera);

  let teslaM = null;

  // const textureLoader = new THREE.TextureLoader();
  // const matcapTexture = textureLoader.load('/vidrio.png');
  // matcapTexture.colorSpace = THREE.SRGBColorSpace;
  // const material = new THREE.MeshMatcapMaterial({
  //   matcap: matcapTexture,
  //   color: '#c90000',
  // });

  const gltfLoader = new GLTFLoader();
  gltfLoader.load('/teslaL.glb', (gltf) => {
    teslaM = gltf.scene;
    // teslaM.traverse((child) => {
    //   if (child.isMesh) child.material = material;
    // });
    scene.add(teslaM);
  });

  const light1 = new THREE.DirectionalLight(0xffffff, 1);
  light1.position.set(-1, 0, -1);
  const light2 = new THREE.DirectionalLight(0xffffff, 1);
  light2.position.set(1, 0, 1);
  const light3 = new THREE.DirectionalLight(0xffffff, 1);
  light3.position.set(1, 0, -1);
  const light4 = new THREE.DirectionalLight(0xffffff, 1);
  light4.position.set(-1, 0, 1);
  scene.add(light1, light2, light3, light4);

  // const helperLight = new THREE.DirectionalLightHelper(light, 0.5);
  // scene.add(helperLight);

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0xffffff, 0);
  renderer.toneMapping = THREE.ReinhardToneMapping;
  renderer.toneMappingExposure = 3;

  logo.appendChild(renderer.domElement);

  const rezise = () => {
    sizes.width = logo.getBoundingClientRect().width;
    sizes.height = logo.getBoundingClientRect().height;

    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();
    renderer.setSize(sizes.width, sizes.height);
  };

  window.addEventListener('resize', rezise);

  const animate = () => {
    const clock = new THREE.Clock();
    let previousTime = 0;

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();
      const deltaTime = elapsedTime - previousTime;
      previousTime = elapsedTime;

      if (teslaM) {
        teslaM.rotation.x += Math.cos(elapsedTime) * 0.003;
        teslaM.rotation.y += deltaTime * 0.9;
      }

      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();
  };

  animate();
};
