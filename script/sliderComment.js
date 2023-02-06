let position = 1
let leftMargin = -27;
let marginGap = 52;
let slider;
let dotContainer;
let touchStartX = 0;
let touchEndX = 0;

function initSlider() {
    slider = document.getElementById("exoSliderContainer");
    dotContainer = document.getElementById("dottedContainer")
    slider.addEventListener("touchstart", startDrag)
    slider.addEventListener("touchend", endDrag)
    // slider.addEventListener("mousemove", trackMouse)
}

function startDrag(e) {
     touchStartX = e.changedTouches[0].clientX

}

function endDrag(e) {
    touchEndX = e.changedTouches[0].clientX

    if (touchStartX<touchEndX){
        if (position>0){
            position--
            moveLeft()
            changeDotColor()
        }

    }else {
        if (position<3){
            position++
            moveRight()
            changeDotColor()
        }
    }

}

function moveRight() {
console.log("r")
    leftMargin-=marginGap;
    slider.style.left = leftMargin+"%";
    slider.children[position].style.transform = "scale(1.5)"
    slider.children[position-1].style.transform = "scale(1)"
}

function moveLeft() {
    leftMargin+=marginGap;
    slider.style.left = leftMargin+"%";
    slider.children[position].style.transform = "scale(1.5)"
    slider.children[position+1].style.transform = "scale(1)"
}

function changeDotColor() {
    dotContainer.children[position].style.backgroundColor = "#636061"
    if (position>0)
        dotContainer.children[position-1].style.backgroundColor = "white"
    if (position<3)
        dotContainer.children[position+1].style.backgroundColor = "white"
}