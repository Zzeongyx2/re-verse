// TODO: 이거는 HTML 기준 THREE.JS 니까 참고만 하세용
// TODO: 이거는 HTML 기준 THREE.JS 니까 참고만 하세용
// TODO: 이거는 HTML 기준 THREE.JS 니까 참고만 하세용
// TODO: 이거는 HTML 기준 THREE.JS 니까 참고만 하세용
// TODO: 이거는 HTML 기준 THREE.JS 니까 참고만 하세용

import { useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

function ReverseTest() {
  // useEffect(() => {
  // texture
  const textureLoader = new THREE.TextureLoader();
  // const floorTexture = textureLoader.load("/assets/grid.png");
  const floorTexture = textureLoader.load("/assets/grid.png");
  floorTexture.wrapS = THREE.RepeatWrapping;
  floorTexture.wrapT = THREE.RepeatWrapping;
  // 반복 횟수 줄어들면 크기가 커짐
  floorTexture.repeat.x = 10;
  floorTexture.repeat.y = 10;

  // renderer
  const canvas = window.document.querySelector("#three-canvas");
  const threeDiv = window.document.querySelector("#three-reverse");
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
  });

  renderer.setSize(window.innerWidth, window.innerHeight);
  // renderer.setSize(threeDiv.clientWidth - 1, threeDiv.clientHeight - 1);
  renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  // scene
  const scene = new THREE.Scene();

  // camera
  const camera = new THREE.OrthographicCamera(
    -(window.innerWidth / window.innerHeight), // left
    window.innerWidth / window.innerHeight, // right
    1, // top
    -1, // bottom
    -1000,
    1000
  );

  const cameraPosition = new THREE.Vector3(1, 5, 5);
  camera.position.set(cameraPosition.x, cameraPosition.y, cameraPosition.z);
  camera.zoom = 0.1;
  camera.updateProjectionMatrix();
  scene.add(camera);

  // light
  const ambientLight = new THREE.AmbientLight("white", 0.5);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight("white", 0.7);
  const directionLightOriginPosition = new THREE.Vector3(1, 1, 1);
  directionalLight.position.x = directionLightOriginPosition.x;
  directionalLight.position.y = directionLightOriginPosition.y;
  directionalLight.position.z = directionLightOriginPosition.z;
  directionalLight.castShadow = true;
  scene.add(directionalLight);

  // mapSize 세팅으로 그림자 퀄리티 설정
  directionalLight.shadow.mapSize.width = 2048;
  directionalLight.shadow.mapSize.height = 2048;
  // 그림자 범위
  directionalLight.shadow.camera.left = -100;
  directionalLight.shadow.camera.right = 100;
  directionalLight.shadow.camera.top = 100;
  directionalLight.shadow.camera.bottom = -100;
  directionalLight.shadow.camera.near = -100;
  directionalLight.shadow.camera.far = 100;
  scene.add(directionalLight);

  // mesh
  const meshes = [];
  const floorMesh = new THREE.Mesh(
    new THREE.PlaneGeometry(100, 100),
    new THREE.MeshStandardMaterial({
      map: floorTexture,
    })
  );
  floorMesh.name = "floor";
  floorMesh.rotation.x = -Math.PI / 2;
  floorMesh.receiveShadow = true;
  scene.add(floorMesh);
  meshes.push(floorMesh);

  // controls
  const controls = new OrbitControls(camera, renderer.domElement);

  // gltf loader
  const gltfLoader = new GLTFLoader();
  let mixer;
  gltfLoader.load(
    "/assets/animals/GLTF/Animations/Cat_Animations.gltf",
    // load 끝나면 호출 될 콜백함수
    (gltf) => {
      // console.log(gltf.scene.children[0]);
      const catMesh = gltf.scene.children[0];
      scene.add(catMesh);

      mixer = new THREE.AnimationMixer(catMesh);
      const actions = [];
      // console.log(actions);

      for (let i = 0; i < gltf.animations.length; i++) {
        // console.log(gltf.animations[i]);
        actions[i] = mixer.clipAction(gltf.animations[i]);
      }

      // 반복 횟수
      // actions[12].repetitions = 2;

      // 액션이 끝나는 동작에서 멈추도록
      // actions[12].clampWhenFinished = true;

      // actions[12].play();

      // console.log(gltf.animations);
    }
  );

  // 그리기
  const clock = new THREE.Clock();

  function draw() {
    const delta = clock.getDelta();

    // delta = 애니메이션 속도 조절
    if (mixer) mixer.update(delta * 0.05);

    renderer.render(scene, camera);
    renderer.setAnimationLoop(draw);
  }

  draw();
  function setSize() {
    // camera.aspect = (threeDiv.clientWidth - 1) / (threeDiv.clientHeight - 1);
    // camera.updateProjectionMatrix();
    // renderer.setSize(threeDiv.clientWidth - 1, threeDiv.clientHeight - 1);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.render(scene, camera);
  }

  // 이벤트
  window.addEventListener("resize", setSize);
  // }, []);
  return (
    <div>
      <canvas id="three-canvas"></canvas>
    </div>
    // <div id="three-reverse" className="container">
    //   <canvas id="three-canvas"></canvas>
    // </div>
  );
}

export default ReverseTest;
