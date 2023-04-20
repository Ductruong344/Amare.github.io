function showForm() {
    document.getElementById("form-content").style.display = "flex";
}

let form = document.getElementById("form");

function submitForm() {
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    let message = document.getElementById("message");
    let ticket = document.getElementById("ticket");
  
    if (name.value == "" || email.value == ""|| message.value =="") {
      alert("check your form again");
    } else {
      alert("form has been submitted");
      console.log(
        `Name: ${name.value} \nEmail: ${email.value} \nMessage: ${message.value} \nPhone: ${phone.value}`
      );
  
      name.value = "";
      email.value = "";
      phone.value = "";
      ticket.value ="";
      message.value = "";
    }
}