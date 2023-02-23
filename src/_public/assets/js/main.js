var listOverlayBtn = document.getElementsByClassName("c-box__btnMore");
var listSnow = document.getElementsByClassName("c-snowItem");
var navtabToggle = document.getElementById("c-navtabToggle");
var listCollapseItem = document.querySelectorAll("#column .c-box .c-box__item");
let section = document.querySelectorAll("section");
let listsLink = document.querySelectorAll(".c-nav__item");
let listLeaves = document.getElementsByClassName('c-leaves');
let footerHeight = document.querySelector('#footer');
//-------viewmore----
for (let i = 0; i < listOverlayBtn.length; i++) {
    listOverlayBtn[i].addEventListener("click", function () {
        let listOverlay = document.getElementsByClassName("c-box__overlay");

        for (let item of listOverlay) {
            item.classList.remove("u-opacity1");
        }

        var content = this.parentElement.nextElementSibling;
        content.classList.toggle("u-opacity1");
    });
}
for (let item of listSnow) {
    item.classList.add("snowFadeIn");
    setTimeout(() => {
        item.classList.add("snowShake");
        item.classList.remove("snowFadeIn");
    }, 2000);
}
//-------animation----
document.onscrollend
window.onscroll = function () {
    scrollYFunction()
   
    section.forEach((sec) => {


        let top = window.scrollY;
        let offset = sec.offsetTop;

        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top <= offset + height ) {

            listsLink.forEach((item) => {

                item.classList.remove("is-active");

                if (item.querySelector("a").getAttribute("href").trim() == "#" + id) {

                    item.classList.add("is-active");
                }
            });
        }
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
           
            listsLink.forEach((item) => {

                item.classList.remove("is-active");
               
                if (item.querySelector("a").getAttribute("href").trim() == "#footer") {

                    item.classList.add("is-active");
                }
            });
        }
    });
};
let leavesRight = document.getElementById("leavesRight");
let leavesRightSP = document.getElementById("leavesRightSP");
let leavesTop = document.getElementById("leavesTop");
function scrollYFunction() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        leavesRight.classList.remove("leavesRightFadeIn");
        leavesRightSP.classList.remove("leavesRightFadeIn");
        leavesTop.classList.remove("leavesTopFadeIn");
        leavesRight.classList.add("leavesRightFadeOut");
        leavesRightSP.classList.add("leavesRightFadeOut");
        leavesTop.classList.add("leavesTopFadeOut");
        for (let item of listSnow) {
            item.classList.remove("snowShake");
            item.classList.add("snowFadeOut");
        }
    } else {
        leavesRight.classList.remove("leavesRightFadeOut");
        leavesRightSP.classList.remove("leavesRightFadeOut");
        leavesTop.classList.remove("leavesTopFadeOut");
        leavesRight.classList.add("leavesRightFadeIn");
        leavesRightSP.classList.add("leavesRightFadeIn");
        leavesTop.classList.add("leavesTopFadeIn");

        for (let item of listSnow) {
            item.classList.remove("snowFadeOut", "snowShake");
            item.classList.add("snowFadeIn");
            setTimeout(() => {
                item.classList.remove("snowFadeIn");
                item.classList.add("snowShake");
            }, 1300);
        }
    }

}

//------navbar----- 
navtabToggle.addEventListener("click", function () {
    this.classList.toggle("is-clicked");
    if (this.classList.contains("is-clicked")) {
        document.getElementById("c-navtabMenu").style.display = "block";
        document.body.style.overflow = 'hidden'
        for (let item of listLeaves) {
            item.style.display = 'none'
        }
        for (let item of listSnow) {
            item.style.display = 'none'
        }
        this.src = "/assets/img/Nav/spIconClicked.png";
    } else {
        document.getElementById("c-navtabMenu").style.display = "none";
        this.src = "/assets/img/Nav/spIcon.png";
        document.body.style.overflow = 'unset'
        for (let item of listLeaves) {
            item.style.display = 'block'
        }
        for (let item of listSnow) {
            item.style.display = 'block'
        }
    }
    // this.style.opacity = '1';
});

var listNavLink = document.getElementsByClassName("c-navtabMenu__link");
for (let item of listNavLink) {
    item.addEventListener("click", function () {
        navtabToggle.click();
    });
}

//------------collapse------
var listCollapseBtn = document.getElementsByClassName("c-collapse--btn");
for (let item of listCollapseBtn) {
    item.addEventListener("click", function () {
        let img = this.querySelector("img");
        let content = this.previousElementSibling;
        let contentHeight = content.scrollHeight;
        img.classList.toggle("is-active");
        if (img.classList.contains("is-active")) {
            img.src = "/assets/img/column/CollapseUp.png";

            content.style.height = contentHeight + "px";
        } else {
            img.src = "/assets/img/column/CollapseDown.png";


            content.style.height = 0 + "px";
        }
    });
}