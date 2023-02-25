/* //how to creaet login with username and password and  check username and pasword with  server to for login js?
function check(form) {

  if (form.userid.value == "admin" && form.pwd.value == "noahgrocery"){
      form.action = "https://dog.ceo/dog-api/documentation/random";
      return true;
  }
  else if(form.userid.value == "admin2" && form.pwd.value == "noahgrocery2"){
      form.action = "https://dog.ceo/dog-api/documentation/random";
      return true;
  } else {
    alert("Incorrect Password or Username")
    return false;
  }
}




//Source: https://stackoverflow.com/questions/74308397 */















//Source: https://stackoverflow.com/questions/56658385




