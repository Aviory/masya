function sendEmail() {
    let name = document.getElementById("name1").value
    let phone = document.getElementById("telephone1").value

    Email.send({
        Host: "smtp.gmail.com",
        Username: "sender@email_address.com",
        Password: "Enter your password",
        To: 'receiver@email_address.com',
        From: "sender@email_address.com",
        Subject: "Sending Email using javascript",
        Body: "Well that was easy!!",
    })
        .then(function (message) {
            alert("mail sent successfully")
        });
}

// <script src=
//             "https://smtpjs.com/v3/smtp.js">
// </script>