/* global Phaser */

// Created by: Curtis Edwards
// Created on: April 2022
// This is the Splash Scene

class SplashScene extends Phaser.Scene {
  constructor () {
    super({ key: 'SplashScene' })
  }

  init (data) {
    this.camreas.main.setBackgroundColor('#ffffff')
  }

  preload () {
    console.log('Splash Scene')
  }

  create (data) {
  }
  
  update (time, delta) {
  }
}
  
export default SplashScene 
  