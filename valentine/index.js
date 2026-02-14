import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

export function initViewer(modelList) {
  let currentIndex = 0;
  let currentModel = null;

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x111111);

  const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    1000,
  );

  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    powerPreference: "high-performance",
  });

  // ✅ จำกัด pixel ratio กันมือถือร้อน
  const maxPixelRatio = 1.5;
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, maxPixelRatio));
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // Lights
  const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 1.2);
  scene.add(hemiLight);

  const dirLight = new THREE.DirectionalLight(0xffffff, 1.5);
  dirLight.position.set(5, 10, 7);
  scene.add(dirLight);

  // Controls
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 0.8;

  // ✅ ปรับให้เหมาะกับมือถือ
  controls.enablePan = false;
  controls.enableZoom = true;
  controls.zoomSpeed = 0.6;
  controls.rotateSpeed = 0.8;

  renderer.domElement.addEventListener("pointerdown", () => {
    controls.autoRotate = false;
  });

  renderer.domElement.addEventListener("pointerup", () => {
    controls.autoRotate = true;
  });

  const loader = new GLTFLoader();

  function loadModel(file) {
    document.getElementById("loading").style.display = "block";

    if (currentModel) {
      scene.remove(currentModel);
      currentModel.traverse((obj) => {
        if (obj.geometry) obj.geometry.dispose();
        if (obj.material) {
          if (Array.isArray(obj.material)) {
            obj.material.forEach((m) => m.dispose());
          } else {
            obj.material.dispose();
          }
        }
      });
    }

    loader.load(
      `./${file}`,
      (gltf) => {
        const model = gltf.scene;
        currentModel = model;
        scene.add(model);

        const box = new THREE.Box3().setFromObject(model);
        const size = box.getSize(new THREE.Vector3()).length();
        const center = box.getCenter(new THREE.Vector3());

        model.position.sub(center);

        camera.position.set(0, size / 2, size * 1.8);
        camera.near = size / 100;
        camera.far = size * 100;
        camera.updateProjectionMatrix();

        controls.minDistance = size * 0.6;
        controls.maxDistance = size * 3;
        controls.target.set(0, 0, 0);
        controls.update();

        document.getElementById("loading").style.display = "none";
      },
      undefined,
      (error) => {
        console.error("Load error:", error);
      },
    );
  }

  loadModel(modelList[currentIndex]);

  const nextBtn = document.getElementById("nextBtn");

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      currentIndex++;
      if (currentIndex >= modelList.length) currentIndex = 0;
      loadModel(modelList[currentIndex]);
    });
  }

  // ✅ รองรับ resize + หมุนจอ
  function handleResize() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, maxPixelRatio));
  }

  window.addEventListener("resize", handleResize);
  window.addEventListener("orientationchange", handleResize);

  function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  }

  animate();
}
