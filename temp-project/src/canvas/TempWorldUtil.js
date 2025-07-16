import Phaser from "phaser";
import { TempWorldConfigBuilder } from "./TempWorldConfig";
import { TempWorld } from "./TempWorld";

export const createGame = (config) => {
  return new Phaser.Game(config);
}

export const configure = (parent) => {
    return new TempWorldConfigBuilder()
            .type(Phaser.AUTO)
            .parent(parent)
            .scene(TempWorld)
            .scaleAutoCenter(Phaser.Scale.NONE)
            .scaleMode(Phaser.Scale.NON)
            .width(1920)
            .height(1080)
            .physicsDefault("arcade")
            .physicsArcadeGravity({ x:0, y:0})
            .build();
}

export const terminate = (game) => {
  game.destroy(true);
}