/* global Phaser */

// Created by: Curtis Edwards
// Created on: April 2022
// This is the Phaser3 configuration file

import SplashScene from './splashScene.js'

// our game scene
const slpashScene = new SplashScene()

//* Game Scene */
const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  physics: {
    default: 'arcade',
    arcade: {
      debug: true
    }
  },
  // set background color
  backgroundColor: 0x5f6e7a,
  scale: {
    mode: Phaser.Scale.FIT,
    // we place it in the middle of the page
    autoCenter: Phaser.Scale.CENTER_BOTH
  }
}

const game = new Phaser.Game(config)

// load scenes 
// NOTE: remember any "key" is global and CAN NOT be reused
game.secne.add('slpashScene', slpashScene)

// start title
game.scene.start('slpashScene')
