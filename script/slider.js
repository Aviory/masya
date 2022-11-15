let images = ["images/lol/slider/Rectangle 87.png",
    "images/lol/slider/Rectangle 88.png",
    "images/lol/slider/Rectangle 87.png",
    "images/lol/slider/Rectangle 87.png",
    "images/lol/slider/Rectangle 88.png"]

let count =3;

function moveRight() {
    // if (images.length === count - 1)
    //     return
    let items = document.getElementsByClassName("sliderItem")
    addElement()
    toLeftOut(items[0])
    toFirst(items[1])
    toCenter(items[2])
    // fromOutToRight(items[3])
    setTimeout(removeFirst,500)
}
function moveLeft() {
    // if (0>=count-2)
    //     return
    let items = document.getElementsByClassName("sliderItem")
    addElementLast()

    // toCenter(items[0])
    toCenter(items[1])
    toLast(items[2])
    toRightOut(items[3])
    setTimeout(removeLast,500)

}

function toLeftOut(item) {
    item.style.opacity = "0"
}
function toRightOut(item) {
    item.style.opacity = "0"
}

function toFirst(item) {
    item.className = "sliderItem"
    item.style.left = "0"
    item.style.transform = "scale(0.8)"
    item.style.opacity = "0.5"
}

function toLast(item) {
    item.className = "sliderItem"
    item.style.left = "61%"
    item.style.transform = "scale(0.8)"
    item.style.opacity = "0.5"
}

function toCenter(item) {
    item.className = "sliderItem sliderMainItem"
    item.style.left = "32%"
    item.style.right = "auto"
    item.style.opacity = "1"
    item.style.transform = "scale(1.5)"
}

function fromOutToRight(item) {
    item.className = "sliderItem"
    item.style.right = "0"
}


// function moveRight() {
//     if (images.length===count-1)
//         return
//
//     let items = document.getElementsByClassName("sliderItem");
//     addElement()
//     items[1].className = "sliderItem"
//     items[2].className = "sliderItem sliderMainItem"
//     items[3].className = "sliderItem inRemoveProcessRight"
//     items[0].className = "sliderItem inRemoveProcessLeft removeWidth"
//     // setTimeout(removeFirst,500)
//     removeFirst()
// }
//
// function moveLeft() {
//     if (0>=count-2)
//         return
//     let items = document.getElementsByClassName("sliderItem");
//     addElementLast()
//     items[1].className = "sliderItem sliderMainItem"
//     items[2].className = "sliderItem "
//     items[3].className = "sliderItem inRemoveProcessRight removeWidth"
//     items[0].className = "sliderItem inRemoveProcessLeft"
//     // setTimeout(removeLast,500)
//     removeLast()
// }
//
function removeFirst() {
    let items = document.getElementsByClassName("sliderItem");
    items[0].remove()
}
 function removeLast() {
     let items = document.getElementsByClassName("sliderItem");

     items[3].remove()

}
function addElement() {
    document.getElementById("sliderContainer").append(nextElement())
}
function addElementLast() {
    document.getElementById("sliderContainer").prepend(prevElement())
}

function prevElement() {
    let item = document.createElement("div")
    item.className = "sliderItem "
    if (0>count-4)
        count = images.length+3

    item.style.backgroundImage = "url('"+images[count-4]+"')"
    item.style.backgroundRepeat = "no-repeat"
    item.style.backgroundSize = "cover"
    item.className = "sliderItem"
    count--
    return item
}

function nextElement() {
    let item = document.createElement("div")
    item.className = "sliderItem "
    if (images.length<=count)
        count = 0
    item.style.backgroundImage = "url('"+images[count]+"')"
    item.style.backgroundRepeat = "no-repeat"
    item.style.backgroundSize = "cover"
    item.className = "sliderItem inRemoveProcessRight"
    count++
    return item
}

function sliderInit() {
    let items = document.getElementsByClassName("sliderItem");
    for (let i =0;i<3;i++){
        items[i].style.backgroundImage = "url('"+images[i]+"')"
        items[i].style.backgroundRepeat = "no-repeat"
        items[i].style.backgroundSize = "cover"


    }
}
