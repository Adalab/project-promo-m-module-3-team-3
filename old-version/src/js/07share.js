const createCard = document.querySelector(".js-createcard");
const responseElement = document.querySelector(".js-response");
const btnTwitter = document.querySelector(".js-twitter");
const linkTwitter = document.querySelector(".js-linkTwitter");

function handlerClickCreate(event) {
  event.preventDefault();
  if (data.name === "") {
    responseElement.innerHTML = "Oops! Tienes que rellenar tu nombre!";
    responseElement.classList.remove("hidden");
  } else if (data.job === "") {
    responseElement.innerHTML =
      "Oops! Tienes que rellenar tu puesto de trabajo!";
    responseElement.classList.remove("hidden");
  } else if (data.photo === "") {
    responseElement.innerHTML = "Oops! Tienes que subir tu foto!";
    responseElement.classList.remove("hidden");
  } else if (data.email === "") {
    responseElement.innerHTML = "Oops! Tienes que rellenar tu email!";
    responseElement.classList.remove("hidden");
  } else if (!validateEmail(data.email)) {
    responseElement.innerHTML = "Oops! no has puesto bien el email =(";
    responseElement.classList.remove("hidden");
  } else if (data.phone === "") {
    responseElement.innerHTML = "Oops! Tienes que rellenar tu teléfono!";
    responseElement.classList.remove("hidden");
  } else if (!validatePhone(data.phone)) {
    responseElement.innerHTML = "Oops! no has puesto bien el número =(";
    responseElement.classList.remove("hidden");
  } else if (data.linkedin === "") {
    responseElement.innerHTML =
      "Oops! Tienes que rellenar tu usuario de LinkedIn!";
    responseElement.classList.remove("hidden");
  } else if (data.github === "") {
    responseElement.innerHTML =
      "Oops! Tienes que rellenar tu usuario de GitHub!";
    responseElement.classList.remove("hidden");
  } else {
    console.log(data);
    fetch("https://awesome-profile-cards.herokuapp.com/card", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((resultData) => {
        if (resultData.success === false) {
          responseElement.innerHTML =
            "<p>Tienes que rellenar algunos datos.</p>";
          responseElement.classList.remove("hidden");
        } else {
          const textCard = "Echa un vistazo a mi tarjeta de visita 🌱 ";
          responseElement.innerHTML = `
            <h3 class="cardcreated-js">La tarjeta ha sido creada:</h3>
            <p><a class="linkcard" target:_blank href="${resultData.cardURL}">${resultData.cardURL}</a></p>`;
          responseElement.classList.remove("hidden");
          btnTwitter.classList.remove("hidden");
          linkTwitter.setAttribute(
            "href",
            `https://twitter.com/intent/tweet?text=${textCard}&url=${resultData.cardURL}&hashtags=Adalabers,JavaScript,PromoMileva,week7of12`
          );
          createCard.setAttribute("disabled", true);
          createCard.style.opacity = "0.5";
          localStorage.setItem("data", JSON.stringify(data));
        }
      })
      .catch(() => {
        responseElement.innerHTML = `<p class="error">Hemos apagado el servidor un rato. Inténtalo más tarde.</p>`;
        responseElement.classList.remove("hidden");
      });
  }
}

createCard.addEventListener("click", handlerClickCreate);
