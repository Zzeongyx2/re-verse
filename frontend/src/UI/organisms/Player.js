import { AnimationMixer } from "three";

export class Player {
  constructor(info) {
    this.moving = false;

    info.gltfLoader.load(info.modelSrc, (gltf) => {
      gltf.scene.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
        }
      });

      this.modelMesh = gltf.scene.children[0];
      this.modelMesh.scale.x = 0.5;
      this.modelMesh.scale.y = 0.5;
      this.modelMesh.scale.z = 0.5;
      this.modelMesh.position.y = 0.3;
      this.modelMesh.name = "kitty";
      info.scene.add(this.modelMesh);
      info.meshes.push(this.modelMesh);

      this.actions = [];

      this.mixer = new AnimationMixer(this.modelMesh);
      console.log(gltf.animations);
      this.actions[0] = this.mixer.clipAction(gltf.animations[8]);
      this.actions[1] = this.mixer.clipAction(gltf.animations[17]);
      this.actions[0].play();
    });
  }
}
