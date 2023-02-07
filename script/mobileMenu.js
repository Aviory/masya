

function goTo(id) {
    document.getElementById("btnMobileMenu").checked = false
    document.getElementById(id).scrollIntoView();
}

function goToLoadPage(id) {
    localStorage.setItem("goTo",id)
    window.location.replace('index.html');
}

function goFrom() {
    let id = localStorage.getItem("goTo")
    if (id !== "" && id != null){

        document.getElementById(id).scrollIntoView();
        localStorage.setItem("goTo","")
    }
}