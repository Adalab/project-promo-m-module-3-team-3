"use strict";

const palette1 = document.querySelector(".palette-1");
const palette2 = document.querySelector(".palette-2");
const palette3 = document.querySelector(".palette-3");

const label1 = document.querySelector(".label1 input");
const label2 = document.querySelector(".label2 input");
const label3 = document.querySelector(".label3 input");

function labelpalette1() {
  //line
  card.line.classList.add("js-color2");
  card.line.classList.remove("js-color5", "js-color8");
  //title
  card.title.classList.add("js-color1");
  card.title.classList.remove("js-color4", "js-color7");
  //border
  card.border.forEach((bordericon) => bordericon.classList.add("js-color3"));
  card.border.forEach((bordericon) =>
    bordericon.classList.remove("js-color6", "js-color9")
  );
  //icon
  card.icon.forEach((iconcolor) => iconcolor.classList.add("js-color1"));
  card.icon.forEach((iconcolor) =>
    iconcolor.classList.remove("js-color4", "js-color7")
  );

  data.palette = "1";
  //localStorage.setItem("color", JSON.stringify(data.palette));
}
function labelpalette2() {
  //line
  card.line.classList.add("js-color5");
  card.line.classList.remove("js-color2", "js-color8");
  //title
  card.title.classList.add("js-color4");
  card.title.classList.remove("js-color1", "js-color7");
  //border
  card.border.forEach((bordericon) => bordericon.classList.add("js-color6"));
  card.border.forEach((bordericon) =>
    bordericon.classList.remove("js-color3", "js-color9")
  );
  //icon
  card.icon.forEach((iconcolor) => iconcolor.classList.add("js-color4"));
  card.icon.forEach((iconcolor) =>
    iconcolor.classList.remove("js-color1", "js-color7")
  );

  data.palette = "2";
  //localStorage.setItem("color", JSON.stringify(data.palette));
}
function labelpalette3() {
  //line
  card.line.classList.add("js-color8");
  card.line.classList.remove("js-color2", "js-color5");
  //title
  card.title.classList.add("js-color7");
  card.title.classList.remove("js-color1", "js-color4");
  //border
  card.border.forEach((bordericon) => bordericon.classList.add("js-color9"));
  card.border.forEach((bordericon) =>
    bordericon.classList.remove("js-color6", "js-color3")
  );
  //icon
  card.icon.forEach((iconcolor) => iconcolor.classList.add("js-color7"));
  card.icon.forEach((iconcolor) =>
    iconcolor.classList.remove("js-color1", "js-color4")
  );

  data.palette = "3";
  //localStorage.setItem("color", JSON.stringify(data.palette));
}

label2.addEventListener("change", labelpalette2);

label1.addEventListener("change", labelpalette1);

label3.addEventListener("change", labelpalette3);

// const getFromLocalStorage = () => {
//   const userColorRaw = localStorage.getItem("color");
//   const storedColor = JSON.parse(userColorRaw);
//   if (storedColor !== null) {
//     localStorageColor(storedColor);
//   }
// };

//getFromLocalStorage();

function localStorageColor(palette) {
  if (palette === "1") {
    labelpalette1();
    label1.setAttribute("checked", "");
  }
  if (palette === "2") {
    labelpalette2();
    label2.setAttribute("checked", "");
  }
  if (palette === "3") {
    labelpalette3();
    label3.setAttribute("checked", "");
  }
}
