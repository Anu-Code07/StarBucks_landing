const navslide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".navlinks");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    burger.classList.toggle("toggle");
  });
};

navslide();
