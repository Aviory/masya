function sendFairy() {
    let name = document.getElementById("name1")
    let phone = document.getElementById("telephone1")
    send(name,phone)
}
function sendMagic() {
    let name = document.getElementById("name2")
    let phone = document.getElementById("telephone2")
    send(name,phone)
}

function send(name,phone) {

    let data = "name="+name.value+"&phone="+phone.value
    const xhr = new XMLHttpRequest();
    xhr.open('POST', "php/sendMail.php");
// после получения какого-либо ответа от сервера
    xhr.onload = () => {
        if (xhr.status !== 200) {
            // выводим ошибку в консоль
            console.log(`Ошибка ${xhr.status}: ${xhr.statusText}`);
            return;
        }
        // получаем ответ сервера
        const response = xhr.response;
        console.log(response);
    };
// срабатывает, когда запрос не может быть выполнен (например, нет соединения или не корректный URL)
    xhr.onerror = () => { // происходит, только когда запрос совсем не получилось выполнить
        console.log(`Ошибка при выполнении запроса`);
    };
    xhr.send(data);

    name.value =""
    phone.value =""
}
