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
    video.addEventListener("click", function () {
        video.pause();
        gsap.to("video", {
            transform: "scaleX(0.7) scaleY(0)",
            opacity: 0,
            borderRadius: 30,
        });
    });
}
Page3Animation();

function Page5Animation() {
    let section1 = document.querySelectorAll(".sec-right");
    let section2Left = document.querySelector("#sec-left");
    let section2Right = document.querySelector("#sec-right");
    let video = document.querySelector("#section2 video");

    section1.forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {
            elem.childNodes[3].style.opacity = 1;
            elem.childNodes[3].play();
        });

        elem.addEventListener("mouseleave", function () {
            elem.childNodes[3].style.opacity = 0;
            elem.childNodes[3].load();
        });

        elem.addEventListener("mouseenter", function () {
            gsap.to(elem.childNodes[5], {
                opacity: 1,
                scale: 1,
            });
        });

        elem.addEventListener("mouseleave", function () {
            gsap.to(elem.childNodes[5], {
                opacity: 0,
                scale: 0,
            });
        });

        elem.addEventListener("mousemove", function (dets) {
            gsap.to(elem.childNodes[5], {
                x: dets.x - elem.getBoundingClientRect().x - 70,
                y: dets.y - elem.getBoundingClientRect().y - 75,
            });
        });

        section2Left.addEventListener("mouseenter", function () {
            video.play();
            gsap.to("video", {
                opacity: 1,
               //  transform: "scaleX(1) scaleY(2)",
            });
            // console.log(elem.childNodes[3].play());
        });

        section2Left.addEventListener("mouseleave", function () {
            video.load();
            gsap.to("video", {
                opacity: 0,
                // transform: "scaleX(0) ",
            });
            // console.log(elem.childNodes[3].play());
        });

        section2Right.addEventListener("mouseenter", function () {
            video.play();
        });
    });
}
Page5Animation();

// function check() {
//     let a = document.querySelector(".center-play");
//     a.addEventListener("mouseenter", function (elem) {
//         console.log("Hyee");
//     });
// }
// check();
