function check(form) {

    if (form.userid.value == "admin" && form.pwd.value == "1234"){
        form.action = "https://www.youtube.com/";
        return true;
    }
    else if(form.userid.value == "admin2" && form.pwd.value == "noahgrocery2"){
        form.action = "#";
        return true;
    } else {
      alert("Incorrect Password or Username")
      return false;
    }
  }
  
document.querySelector("#rastaman").setAttribute("href", "hejpådig")