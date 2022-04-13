// Created by: Curtis Edwards
// Created on: Sep 2020
// This file contains the JS functions for index.html

'use strict'

/**
 * Check servie worker.
 */
 if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-PWA-Template/sw.js", {
    scope: "/ICS20-PWA-Template/",
  })
}

/**
 * This function displays an alert.
 */
function myButtonClicked() {
  document.getElementById("hello-world").innerHTML = "<p>Hello, World!</p>"
}