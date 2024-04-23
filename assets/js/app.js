/* const myCarouselElement = document.querySelector("#myCarousel");

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: false,
}); */

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 16,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

$("#enviarCorreo").click(function () {
  alert("Correo enviado exitosamente!");
});

$("p, #ingredients").on("dblclick", function () {
  $(this).css({
    color: "red",
  });
});

$("p, #preparacion").on("dblclick", function () {
  $(this).css({
    color: "red",
  });
});

$(".card-title").on("click", function () {
  $(this).css({
    cursor: "pointer",
  });
  $(".card-text").toggle("slow", function () {});
});
