"use strict";
const savedData = JSON.parse(localStorage.getItem("data"));

let data = {
  name: "",
  job: "",
  photo: "",
  email: "",
  phone: "",
  linkedin: "",
  github: "",
  palette: "",
};

const icon1 = document.querySelector(".js-icon1");
const icon2 = document.querySelector(".js-icon2");
const icon3 = document.querySelector(".js-icon3");
const icon4 = document.querySelector(".js-icon4");

let nameInput = document.querySelector("#name");
let jobInput = document.querySelector("#job");
let emailInput = document.querySelector("#email");
let phoneInput = document.querySelector("#phone");
let linkedinInput = document.querySelector("#linkedin");
let githubInput = document.querySelector("#github");

let paletteElements = document.querySelectorAll(".js_palette");

let card = {
  line: document.querySelector(".rectangle"),
  title: document.querySelector(".name"),
  border: document.querySelectorAll(".icon"),
  icon: document.querySelectorAll(".iconcolor"),
  job: document.querySelector(".job"),
  phone: document.querySelector(".js-phone"),
  email: document.querySelector(".js-email"),
  linkedin: document.querySelector(".js-linkedin"),
  github: document.querySelector(".js-github"),
  image: document.querySelector(".js__profile-preview"),
};

function getLocalStorage() {
  if (data !== null) {
    nameInput.value = savedData.name;
    jobInput.value = savedData.job;
    emailInput.value = savedData.email;
    phoneInput.value = savedData.phone;
    linkedinInput.value = savedData.linkedin;
    githubInput.value = savedData.github;
  }

  localStorageColor();
}

if (localStorage.getItem("data") !== null) {
  getLocalStorage();
}

if (savedData) {
  data = savedData;
  inputChange();
  localStorageColor(savedData);
}
