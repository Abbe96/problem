
let user_input = document.querySelector(".user_name").value;
let password_input = document.querySelector(".pas");
console.log(password_input)
console.log(user_input)

 
document.querySelector(".login").addEventListener("click",user_psw);

async function user_psw(event) {
  let new_div=  document.querySelector(".message_text");
  new_div.classList.add("msg_text");
  document.querySelector(".message_text").style.opacity="100%";

  let text_status_div=  document.querySelector(".message_srv");
  text_status_div.classList.add("text_status_div");
  
  let resp_pomis = await fetch(new Request(`https://www.teaching.maumt.se/apis/access/?action=check_credentials&user_name=${user_input}&password=${password_input.value}`))
  text_status_div.innerHTML=`Connect to a Server...<button class="klick">Abbe</button>`;
  new_div.classList.remove("msg_text");
  console.log(resp_pomis)
  if (resp_pomis.status ===200) {
    document.querySelector(".message_text").style.opacity="0";

    bytCss();
    }

    if (resp_pomis.status ===404) {
        document.querySelector(".text_magic").textContent="Wrong user name or passwoed.";

        let new_div=  document.querySelector(".message_text");
        new_div.classList.add("msg_text");
        let text_status_div=  document.querySelector(".message_srv");
        text_status_div.classList.add("text_status_div");
        document.querySelector(".message_text").style.opacity="0";


        new_div.classList.remove("msg_text");
        
       
       
      }                             /* s 418 (I’m not a teapo */
      if (resp_pomis.status ===400) {
        
          document.querySelector(".text_magic").textContent="input user name or passwoed.";
          document.querySelector(".message_text").style.opacity="0";
          
          let new_div=  document.querySelector(".message_text");
         /*  new_div.classList.add("msg_text"); */
          let text_status_div=  document.querySelector(".message_srv");
          text_status_div.classList.add("text_status_div");
          
         /*  new_div.classList.remove("msg_text"); */
          
          
        
        
      }
      if (resp_pomis.status ===418) {
          
        document.querySelector(".text_magic").textContent="Wrong user name or passwoed.";
        document.querySelector(".message_text").style.opacity="0";

        let new_div=  document.querySelector(".message_text");
        new_div.classList.add("msg_text");
        let text_status_div=  document.querySelector(".message_srv");
        text_status_div.classList.add("text_status_div");
        
        new_div.classList.remove("msg_text");
        
        
      }
    document.querySelector("#logged_user").textContent= user_input;



if (event.target.textContent === "Register") {
   
    try {
        let user_reg = {
            action: "register", user_name: user_input, password: password_input.value
        };

        let options = {
            method: "POST", headers: { "Content-type": "application/json; charset=UTF-8" }, body: JSON.stringify(user_reg)
        };

        let regist = await fetch(new Request("https://www.teaching.maumt.se/apis/access/"), options);
        console.log(regist);
        let resource = await regist.json();
        console.log(resource);
    } catch (error) {
        console.log("error");
    };
};};
