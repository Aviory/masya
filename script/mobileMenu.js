

function goTo(id) {
    document.getElementById("btnMobileMenu").checked = false
    document.getElementById(id).scrollIntoView();
}

function goToLoadPage(id) {
    localStorage.setItem("goTo",id)
    //todo load index
}

function goFrom() {
    let id = localStorage.getItem("goTo")
    if (id!=="" || id!=null || id != undefined){

        document.getElementById(id).scrollIntoView();
        localStorage.setItem("goTo","")
    }
}