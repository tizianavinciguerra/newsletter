function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}


function emailCheck(){
var mail = document.querySelector("#email").value;
console.log(mail);
  if (mail === null || mail === "" || !validateEmail(mail) ) {
    alert("I'm sorry, the email address is not valid");
  } else {
    alert("Congratulation, you are subscribed!");
  }

}
