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

    // const camera = new THREE.PerspectiveCamera(
    const camera = new THREE.PerspectiveCamera(
      90,
      threeDiv.clientWidth / threeDiv.clientHeight,
      0.01,
      1000
    );
    camera.position.z = 80;
    camera.position.y = 100;
    camera.position.x = 20;
    scene.add(camera);

    const ambientLigth = new THREE.AmbientLight("white", 0.5);
    scene.add(ambientLigth);

    const directionalLight = new THREE.DirectionalLight("white", 1);
    directionalLight.position.z = 4;
    directionalLight.position.x = 4;
    scene.add(directionalLight);

    const controls = new OrbitControls(camera, renderer.domElement);

    const gltfLoader = new GLTFLoader();
    let mixer;
    let mesh;
    // gltfLoader.load("/assets/fall_guys/scene.gltf", (gltf) => {
    gltfLoader.load("/assets/GLTF/cat.gltf", (gltf) => {
      console.log(gltf);
      console.log(gltf.animations);
      console.log(gltf.scene);
      console.log(gltf.scene.children);
      console.log(gltf.scene.children[0]);
      mesh = gltf.scene.children[0];
      mesh.scale.x = 10;
      mesh.scale.y = 10;
      mesh.scale.z = 10;
      scene.add(mesh);
      // let list = [];
      // gltf.animations[0].tracks.filter((item, index) => {
      //   if (index > 3 && index < 6) {
      //     list.push(item);
      //     return item;
      //   }
      // });
      // gltf.animations[0].tracks = list;
      // console.log(gltf.animations);
      mixer = new THREE.AnimationMixer(mesh);
      const actions = [];
      actions[0] = mixer.clipAction(gltf.animations[0]);
      actions[0].play();
    });

    // gltfLoader.load("/assets/GLTF/Animations/Cat_Bounce.gltf", (gltf) => {
    //   console.log(gltf.animations);
    //   console.log(gltf);
    //   console.log(gltf.scene);
    //   console.log(gltf.scene.children);
    //   console.log(gltf.scene.children[0]);

    //   const mesh = gltf.scene.children[0];
    //   scene.add(mesh);
    //   let list = [];
    //   gltf.animations[0].tracks.filter((item, index) => {
    //     if (index > 3 && index < 6) {
    //       list.push(item);
    //       return item;
    //     }
    //   })
    //   //   gltf.animations[0].tracks = list;
    //   console.log(gltf.animations);
    //   if (mesh) {
    //     mixer = new THREE.AnimationMixer(mesh);
    //     const actions = [];
    //     actions[0] = mixer.clipAction(gltf.animations[0]);
    //     actions[0].play();
    //   }
    // });

    const clock = new THREE.Clock();
    scene.background = "white";
    function draw() {
      const delta = clock.getDelta();
      //   console.log(delta);

      if (mixer) {
        mixer.update(delta);
      }

      renderer.render(scene, camera);
      renderer.setAnimationLoop(draw);
    }
    console.log(threeDiv.clientWidth);

    draw();
  }, []);

  return <canvas id="three-character"></canvas>;
}

export default ThreeTest;
