const resetElement = document.querySelector(".button_reset");
const paletteDefault = document.querySelector("#blue");

function resetButton(ev) {
  ev.preventDefault();
  for (const resetInput of form) {
    resetInput.value = "";
    profileImage.style = "";
    profilePreview.style = "";
    labelpalette1();
    paletteDefault.checked = true;
    data.palette = "1";
    data.name = "";
    data.job = "";
    data.email = "";
    data.phone = "";
    data.linkedin = "";
    data.github = "";

    card.title.innerHTML = "Mileva Marić";
    card.job.innerHTML = "Matemática";
    card.phone.href = "";
    card.email.href = "";
    card.linkedin.href = "";
    card.github.href = "";

    if (data.phone === "") {
      icon1.classList.add("opacity");
    }
    if (data.email === "") {
      icon2.classList.add("opacity");
    }
    if (data.linkedin === "") {
      icon3.classList.add("opacity");
    }
    if (data.github === "") {
      icon4.classList.add("opacity");
    }
  }

  localStorage.clear();
}

resetElement.addEventListener("click", resetButton);
