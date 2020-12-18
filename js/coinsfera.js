var banner_imgs = ["./images/banner-img1.png", "./images/banner-img2.png", "./images/banner-img3.png"];
var banner_imgs_idx = 0;
var prev_arrow;
var next_arrow;

// $(function () {
  show_banners();
// });

function show_banners() {
  prev_arrow = document.querySelector(".prev");
  next_arrow = document.querySelector(".next");
  prev_arrow.addEventListener("click", event_listner_for_prev_arrow);
  next_arrow.addEventListener("click", event_listner_for_next_arrow);
}

function event_listner_for_prev_arrow() {
  var img = document.querySelector(".address-img");
  banner_imgs_idx = (banner_imgs_idx - 1);
  img.setAttribute("src", banner_imgs[banner_imgs_idx]);
}

function event_listner_for_next_arrow() {
  var img = document.querySelector(".address-img");
  banner_imgs_idx = (banner_imgs_idx + 1) % 3;
  img.setAttribute("src", banner_imgs[banner_imgs_idx]);
}