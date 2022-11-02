import { useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

function ThreeTest() {
  useEffect(() => {
    const canvas = window.document.querySelector("#three-character");
    const threeDiv = window.document.querySelector("#three-div");
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });
    renderer.setSize(threeDiv.clientWidth - 1, threeDiv.clientHeight - 1);
    renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);
    // renderer.setClearColor("white");
    renderer.setClearAlpha(0);

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      threeDiv.clientWidth / threeDiv.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 80;
    camera.position.y = 80;
    camera.position.x = 5;
    scene.add(camera);

    const ambientLigth = new THREE.AmbientLight("white", 0.5);
    scene.add(ambientLigth);

    const directionalLight = new THREE.DirectionalLight("white", 1);
    directionalLight.position.z = 4;
    directionalLight.position.x = 4;
    scene.add(directionalLight);

    const controls = new OrbitControls(camera, renderer.domElement);

    const gltfLoader = new GLTFLoader();
    gltfLoader.load("/assets/cartoon_characters_pack_all/scene.gltf", (gltf) => {
      console.log(gltf.scene.children[0]);
      const mesh = gltf.scene.children[0];
      scene.add(mesh);
    });

    const clock = new THREE.Clock();
    scene.background = "white";
    function draw() {
      const elTime = clock.getElapsedTime();
      //   console.log(elTime);

      renderer.render(scene, camera);
      renderer.setAnimationLoop(draw);
    }
    console.log(threeDiv.clientWidth);

    draw();
  }, []);

  return <canvas id="three-character"></canvas>;
}

export default ThreeTest;
