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
            .width(800)
            .height(600)
            .scaleAutoCenter(Phaser.Scale.CENTER_BOTH)
            .scaleMode(Phaser.Scale.FIT)
            .scaleWidth(800).scaleHeight(600)
            .physicsDefault("arcade")
            .physicsArcadeGravity({ x:0, y:0})
            .build();
}

export const terminate = (game) => {
  game.destroy(true);
}