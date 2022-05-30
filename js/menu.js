let menuThumb = document.querySelector(".thumb");
let mobMenu = document.querySelector(".nav-menu");

menuThumb.onclick = function () {
  menuThumb.classList.toggle("active");
  mobMenu.classList.toggle("active");
};

let list = document.querySelectorAll(".nav-menu__item");
for (let i = 0; i < list.length; i++) {
  list[i].onclick = function () {
    let j = 0;
    while (j < list.length) {
      list[j++].className = "nav-menu__item";
    }
    list[i].className = "nav-menu__item active";
  };
}
