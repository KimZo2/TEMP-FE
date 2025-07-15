import Phaser from "phaser";
import { TempWorldConfigBuilder } from "./TempWorldConfig";
import { TempWorld } from "./TempWorld";

export const createGame = (config) => {
  return new Phaser.Game(configure());
}

export const configure = () => {
    return new TempWorldConfigBuilder()
            .type(Phaser.AUTO)
            .parent("map-container")
            .scene(TempWorld)
            .width(1500)
            .height(1500)
            .scaleAutoCenter(Phaser.Scale.CENTER_BOTH)
            .scaleMode(Phaser.Scale.FIT)
            .scaleWidth(1200).scaleHeight(900)
            .physicsDefault("arcade")
            .physicsArcadeGravity({ x:0, y:0})
            .build();
}

export const terminate = (game) => {
  game.destroy(true);
}