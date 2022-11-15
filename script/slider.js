let images = ["images/lol/slider/Rectangle 87.png",
    "images/lol/slider/Rectangle 88.png",
    "images/lol/slider/Rectangle 87.png",
    "images/lol/slider/Rectangle 87.png",
    "images/lol/slider/Rectangle 88.png",]

let count =3;

function moveRight() {
    if (images.length===count-1)
        return

    let items = document.getElementsByClassName("sliderItem");
    addElement()
    items[1].className = "sliderItem"
    items[2].className = "sliderItem sliderMainItem"
    items[3].className = "sliderItem inRemoveProcessRight"
    items[0].className = "sliderItem inRemoveProcessLeft removeWidth"
    // setTimeout(removeFirst,500)
    removeFirst()
}

function moveLeft() {
    if (0>=count-2)
        return
    let items = document.getElementsByClassName("sliderItem");
    addElementLast()
    items[1].className = "sliderItem sliderMainItem"
    items[2].className = "sliderItem "
    items[3].className = "sliderItem inRemoveProcessRight removeWidth"
    items[0].className = "sliderItem inRemoveProcessLeft"
    // setTimeout(removeLast,500)
    removeLast()
}

function removeFirst() {
    let items = document.getElementsByClassName("sliderItem");
    items[1].className = "sliderItem"
    items[2].className = "sliderItem sliderMainItem"
    items[3].className = "sliderItem"

    items[0].remove()
    // setTimeout(addElement,500)
}
function removeLast() {
    let items = document.getElementsByClassName("sliderItem");
    items[0].className = "sliderItem"
    items[1].className = "sliderItem sliderMainItem"
    items[2].className = "sliderItem"

    items[3].remove()
    // setTimeout(addElement,500)
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
    if (0<=count-4)
        item.style.backgroundImage = "url('"+images[count-4]+"')"
    item.style.backgroundRepeat = "no-repeat"
    item.style.backgroundSize = "cover"
    count--
    return item
}

function nextElement() {
    let item = document.createElement("div")
    item.className = "sliderItem "
    if (images.length>count)
        item.style.backgroundImage = "url('"+images[count]+"')"
    item.style.backgroundRepeat = "no-repeat"
    item.style.backgroundSize = "cover"
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
