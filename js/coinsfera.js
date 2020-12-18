var banner_imgs = ["./images/banner-img1.png", "./images/banner-img2.png", "./images/banner-img3.png"];
var banner_imgs_idx = 0;
var prev_arrow;
var next_arrow;

var about_imgs = ["./images/about-img.png", "./images/about-img2.png", "./images/about-img3.png"];

// $(function () {
  show_banners();
  show_about_imgs()
// });

function show_banners() {
  prev_arrow = document.querySelector(".prev img");
  next_arrow = document.querySelector(".next img");
  prev_arrow.addEventListener("click", event_listner_for_prev_arrow);
  next_arrow.addEventListener("click", event_listner_for_next_arrow);
}

function disable_arrows(banner_imgs_idx) {
  if(banner_imgs_idx<=0) {  
    prev_arrow.setAttribute ("src", "./images/prev-arrow-light.png");
    prev_arrow.classList.add("arrow-pointer-disable");
    banner_imgs_idx=0;
  }
  else if(banner_imgs_idx>=2) {  
    next_arrow.setAttribute ("src", "./images/next-arrow-light.png");
    next_arrow.classList.add("arrow-pointer-disable");
    banner_imgs_idx=2;
  }
  else {
    prev_arrow.setAttribute ("src", "./images/prev-arrow.png");
    next_arrow.setAttribute ("src", "./images/next-arrow.png");
    prev_arrow.classList.remove("arrow-pointer-disable");
    next_arrow.classList.remove("arrow-pointer-disable");
  }
}
function event_listner_for_prev_arrow() {
  var img = document.querySelector(".address-img");
  banner_imgs_idx = (banner_imgs_idx - 1);
  disable_arrows(banner_imgs_idx);
  // var prev_arrow_img =document.querySelector(".prev img");
  img.setAttribute("src", banner_imgs[banner_imgs_idx]);
}

function event_listner_for_next_arrow() {
  var img = document.querySelector(".address-img");
  banner_imgs_idx = (banner_imgs_idx + 1);
  disable_arrows(banner_imgs_idx);
  img.setAttribute("src", banner_imgs[banner_imgs_idx]);
}

var about_imgs_idx = 0;
function show_about_imgs() {
  var img = document.querySelector(".about-imgs img")
  setInterval(function () {
    about_imgs_idx = (about_imgs_idx + 1)%3;
    img.setAttribute("src", about_imgs[about_imgs_idx]);
  }, 2000);
}