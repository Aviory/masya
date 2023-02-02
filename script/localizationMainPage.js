function changeTo(lang) {
    if (lang=="ua")
        toUk()
    if (lang=="ru")
        toRu()

}
function toUk() {
    //menu text
    localStorage.setItem("lang","ua")
    document.getElementById("txtMain").innerText = "Головна"
    document.getElementById("forYourChilMain").innerText = "У вашого "
    document.getElementById("txtPrice").innerText = "Цiни"
    document.getElementById("txtAboutUs").innerText = "Про нас"
    document.getElementById("txtReviews").innerText = "Вiдгуки"
    document.getElementById("txtBlogs").innerText = "Статтi"
    document.getElementById("txtContacts").innerText = "Контакти"

    //mainPage
    document.getElementById("txtFPagePrice").innerText = "Цiни"
    document.getElementById("txtFPageAboutUs").innerText = "Про нас"
    document.getElementById("txtFPageReviews").innerText = "Вiдгуки"
    document.getElementById("txtFPageBlogs").innerText = "Статтi"
    document.getElementById("txtFPageContacts").innerText = "Контакти"
}
function toRu() {
    document.getElementById("txtMain").innerText = "Главная"
    document.getElementById("forYourChilMain").innerText = "У вашого "
    document.getElementById("txtPrice").innerText = "Цiни"
    document.getElementById("txtAboutUs").innerText = "Про нас"
    document.getElementById("txtReviews").innerText = "Вiдгуки"
    document.getElementById("txtBlogs").innerText = "Статтi"
    document.getElementById("txtContacts").innerText = "Контакти"

    //mainPage
    document.getElementById("txtFPagePrice").innerText = "Цiни"
    document.getElementById("txtFPageAboutUs").innerText = "Про нас"
    document.getElementById("txtFPageReviews").innerText = "Вiдгуки"
    document.getElementById("txtFPageBlogs").innerText = "Статтi"
    document.getElementById("txtFPageContacts").innerText = "Контакти"
}

function initLang() {
    let lang = localStorage.getItem("lang")
    changeTo(lang)
}
