"use strict";

const shareBtn = document.querySelector(".share-btn");
const sharePopup = document.querySelector(".share-popup");

shareBtn.addEventListener("click", function () {
  sharePopup.classList.toggle("active");
});
