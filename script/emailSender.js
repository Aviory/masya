function sendBrawl() {
  let name = "БравлСтарс";
  let phone = document.getElementById("telephone2");
  send(name, phone, "БравлСтарс");
}

function sendAnimators() {
  let name = "аниматоры";
  let phone = document.getElementById("telephone2");
  send(name, phone, "аниматоры");
}
function sendLol() {
  let name = "лол";
  let phone = document.getElementById("telephone2");
  send(name, phone, "лол");
}
function sendShow() {
  let name = "шоу";
  let phone = document.getElementById("telephone2");
  send(name, phone, "шоу программы");
}
function sendFairy() {
  let name = document.getElementById("name2");
  let phone = document.getElementById("telephone2");
  send(name, phone, "Fairy");
}
function sendMagic() {
  let name = document.getElementById("name1");
  let phone = document.getElementById("telephone1");

  send(name, phone, "Magic");
}

function send(name, phone, from) {
  let data =
    'name="' + name.value + '"&phone="' + phone.value + '"&from="' + from + '"';
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "php/sendMail.php");
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
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
  xhr.onerror = () => {
    // происходит, только когда запрос совсем не получилось выполнить
    console.log(`Ошибка при выполнении запроса`);
  };
  xhr.send(data);

  name.value = "";
  phone.value = "";
}
