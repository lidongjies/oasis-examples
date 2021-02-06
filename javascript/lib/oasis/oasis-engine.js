import { SpriteRenderer, PointLight, AmbientLight, DirectLight, EnvironmentMapLight, ParticleRenderer, SkyBox, BoxCollider, GeometryRenderer, Camera, Component, SphereCollider, Model } from './core.js';
export * from './core.js';
import { Parser, GLTFModel } from './loader.js';
export * from './loader.js';
export * from './math.js';
export * from './rhi-webgl.js';

Parser.registerComponents("o3", {
  GLTFModel: GLTFModel,
  SpriteRenderer: SpriteRenderer,
  PointLight: PointLight,
  AmbientLight: AmbientLight,
  DirectLight: DirectLight,
  EnvironmentMapLight: EnvironmentMapLight,
  ParticleRenderer: ParticleRenderer,
  SkyBox: SkyBox,
  BoxCollider: BoxCollider,
  GeometryRenderer: GeometryRenderer,
  Camera: Camera,
  Component: Component,
  SphereCollider: SphereCollider,
  Model: Model
}); //@ts-ignore

var version = "0.2.0";
console.log("oasis engine version: " + version);

export { version };
//# sourceMappingURL=module.js.map
