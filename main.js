const imgs = document.querySelectorAll('.banner--photo');
const icons = document.querySelectorAll('.banner--navIcon');
const arrowRight = document.querySelector('.arrow__right');
const arrowLeft = document.querySelector('.arrow__left');

let time = 5000;
let currentItemIndex = 1;

function changeImg (nextItemIndex) {
    imgs[currentItemIndex].classList.toggle("banner--active");
    imgs[nextItemIndex].classList.toggle("banner--active");
    icons[currentItemIndex].classList.toggle("banner--navIcon__active");
    icons[nextItemIndex].classList.toggle("banner--navIcon__active");
    time = +icons[nextItemIndex].getAttribute("data-duration");
    currentItemIndex = nextItemIndex
}

arrowRight.addEventListener("click", () => {
    if (currentItemIndex >= imgs.length -1) {
        changeImg(0)
    } else {
        changeImg(currentItemIndex + 1)
    }
});
arrowLeft.addEventListener("click", () => {
    if (currentItemIndex <= 0) {
        changeImg(imgs.length - 1)
    } else {
        changeImg(currentItemIndex - 1)
    }

});

icons.forEach((icon) => {
    icon.addEventListener("click", () => {
        changeImg(+icon.getAttribute("data-count"))
    })
});

function autoSlider () {
    if (currentItemIndex >= imgs.length -1) {
        changeImg(0)
    } else {
        changeImg(currentItemIndex + 1)
    }
    setTimeout(autoSlider, time)
}
setTimeout(autoSlider, time);





// 49.835172, 24.014736
function initMap() {
    let map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 49.835172, lng: 24.014736},
        zoom: 15,
        disableDefaultUI: true
    });

}




// let rangeWidth = document.querySelector(".rangeWidth");
// let rangeCount = document.querySelector(".rangeCount");
// let animationFinish = false;
// let width = 0;
//
// function widthAnimation(el, number) {
//
//     let max = +rangeCount.getAttribute("data-count");
//     if (number > max){
//         animationFinish = true;
//         return
//     }
//     console.log(width);
//     rangeWidth.style.width = `${width}%` ;
//     rangeCount.innerText = `${width}%`;
//     // if (width > 50) {
//     //     clearInterval()
//     // }
//
// }
//
//  const anim = setInterval(function () {
//      if (animationFinish) {
//          clearInterval(anim)
//      }
//     console.log("tik", width);
//     widthAnimation(rangeCount, width);
//     width += 1
// }, 100);

let rangeWidth = document.querySelectorAll(".rangeWidth");
let rangeCount = document.querySelectorAll(".rangeCount");
let animationFinish = new Array(rangeCount.length);
let width = [0, 0, 0, 0];

function widthAnimation(el, number, index) {
    let max = +el.getAttribute("data-animationTime");
    if (number > max){
        animationFinish[index] = true;
        return
    }
    rangeWidth[index].style.width = `${width[index]}%` ;
    el.innerText = `${width[index]}%`;

}



// rangeCount.forEach((element, index) => {
//     const anim = setInterval(function () {
//         if (animationFinish[index]) {
//             clearInterval(anim)
//         }
//         widthAnimation(element, width[index], index);
//         width[index] += 1
//     }, 33);
// });


// Sckroling 222222222

let isScrolling = false;
let begineAnimation = false;

window.addEventListener("scroll", throttleScroll, false);

function throttleScroll(e) {
    if (isScrolling === false) {
        window.requestAnimationFrame(function() {
            scrolling(e);
            isScrolling = false;
        });
    }
    isScrolling = true;
}

document.addEventListener("DOMContentLoaded", scrolling, false);

let box = document.querySelector(".skills");

function scrolling(e) {
    if(isFullyVisible(box) && !begineAnimation) {
        begineAnimation = true;
        console.log("qwerrqweweqqw");
        rangeCount.forEach((element, index) => {
            const anim = setInterval(function () {
                if (animationFinish[index]) {
                    clearInterval(anim)
                }
                widthAnimation(element, width[index], index);
                width[index] += 1
            }, 33);
        });
    }

}


// function isPartiallyVisible(el) {
//     let elementBoundary = el.getBoundingClientRect();
//
//     let top = elementBoundary.top;
//     let bottom = elementBoundary.bottom;
//     let height = elementBoundary.height;
//     return ((top + height >= 0) && (height + window.innerHeight >= bottom));
// }

function isFullyVisible(el) {
    let elementBoundary = el.getBoundingClientRect();

    let top = elementBoundary.top;
    let bottom = elementBoundary.bottom;

    return ((top >= 0) && (bottom <= window.innerHeight));
}


const burger = document.getElementById("burger");
// const nawBurger = document.querySelector(".naw__burger");
// .headerPage__burger
const header = document.querySelector(".headerPage--wrapper");
const naw = document.querySelector(".naw");
let show = false;
// let checked = burger.checked;
// burger.onchange = function (e) {
//     console.log(checked)
// }
burger.addEventListener("click", () => {
    show = !show;
    header.classList.toggle("headerPage__burger");
    naw.classList.toggle("naw__burger");
    console.log(show)
}, false);