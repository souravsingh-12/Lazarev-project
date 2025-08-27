function Page2Animation() {
    let rightElems = document.querySelectorAll(".right-elem");

    rightElems.forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {
            gsap.to(elem.childNodes[3], {
                opacity: 1,
                scale: 1,
            });
        });

        elem.addEventListener("mouseleave", function () {
            gsap.to(elem.childNodes[3], {
                opacity: 0,
            });
        });

        elem.addEventListener("mousemove", function (dets) {
            gsap.to(elem.childNodes[3], {
                x: dets.x - elem.getBoundingClientRect().x - 50,
                y: dets.y - elem.getBoundingClientRect().y - 60,
            });
        });
    });
}
Page2Animation();

function Page3Animation() {
    let page3Center = document.querySelector(".center-play");
    let video = document.querySelector("#page3 video");

    page3Center.addEventListener("click", function () {
        video.play();
        gsap.to("video", {
            transform: "scaleX(1) scaleY(1)",
            opacity: 1,
            borderRadius: 0,
        });
    });
}

function check() {
    let a = document.querySelector(".center-play");
    a.addEventListener("mouseenter", function (elem) {
        console.log("Hyee");
    });
}
check();
