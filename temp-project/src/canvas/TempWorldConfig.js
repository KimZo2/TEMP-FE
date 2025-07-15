import Phaser from "phaser"

export class TempWorldConfigBuilder {
  #config;

  constructor() {
    this.#config = {
      scale: {},
      physics: {
        arcade : { 
            gravity: {}
        }
      }
    };
  }

  type(type) {
    this.#config.type = type; return this;
  }

  parent(parent) {
    this.#config.parent = parent; return this;
  }

  width(width) {
    this.#config.width = width; return this;
  }

  height(height) {
    this.#config.height = height; return this;
  }

  scene(scene) {
    this.#config.scene = scene; return this;
  }

  scaleMode(mode) {
    this.#config.scale.mode = mode; return this;
  }

  scaleAutoCenter(autoCenter) {
    this.#config.scale.autoCenter = autoCenter; return this;
  }

  scaleWidth(width) {
    this.#config.scale.width = width; return this;
  }

  scaleHeight(height) {
    this.#config.scale.height = height; return this;
  }

  physicsDefault(defaultEngine) {
    this.#config.physics.default = defaultEngine; return this;
  }

  physicsArcadeGravity(gravity){
    this.#config.physics.arcade.gravity = gravity; return this;
  }

  build() {
    return this.#config;
  }
}