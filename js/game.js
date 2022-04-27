/* global Phaser */

// Created by: Curtis Edwards
// Created on: April 2022
// This is the Phaser3 configuration file

// scene import statements
import SplashScene from "./splashScene.js"
import TitleScene from "./titleScene.js"

// create the new scene
const splashscene = new SplashScene()
const titlescene = new TitleScene()

/**
 * Start Phaser Game
 */
const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  physics: {
    default:'arcade',
    arcade: {
      debug: true
    }
  },
  // set background color
  backgroundColor: 0x5f6e7a,
  scale: {
    mode: Phaser.Scale.FIT,
    // we place it in the middle of the page.
    autoCenter: Phaser.Scale.CENTER_BOTH
   }
}

const game = new Phaser.Game(config)
// console.log(game)

// load scene 
// NOTE: remeber any "key" is global and CAN NOT be reused
game.scene.add('splashScene', splashScene)
game.scene.add('titleScene', titleScene)

// start title
game.scene.start("splashScene")