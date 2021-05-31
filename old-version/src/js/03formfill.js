"use strict";

const form = document.querySelector(".js-form");
const reset = document.querySelector(".button_reset");

//const iconColor = document.querySelector(".iconcolor-opacity");

function changeTitle(ev) {
  const inputForm = ev.target.name;
  const inputValue = ev.target.value;
  data[inputForm] = inputValue;
}

function inputChange() {
  card.title.innerHTML = data.name === "" ? "Nombre y Apellidos" : data.name;
  card.job.innerHTML = data.job === "" ? "Puesto" : data.job;

  card.email.href = `mailto: ${data.email}`;
  card.phone.href = `tel: ${data.phone}`;
  card.linkedin.href = `https://linkedin.com/in/${data.linkedin}`;
  card.github.href = `https://github.com/${data.github}`;

  if (data.phone !== "") {
    icon1.classList.remove("opacity");
  }
  if (data.email !== "") {
    icon2.classList.remove("opacity");
  }
  if (data.linkedin !== "") {
    icon3.classList.remove("opacity");
  }
  if (data.github !== "") {
    icon4.classList.remove("opacity");
  }
}

function handlerKey(ev) {
  changeTitle(ev);
  inputChange();
}

form.addEventListener("keyup", handlerKey);

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validatePhone(phone) {
  const ph = /^([9,8,7,6]{1})+([0-9]{8})$/;
  return ph.test(phone);
}
