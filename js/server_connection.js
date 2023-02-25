
let user_input = document.querySelector(".user_name").value;
let password_input = document.querySelector(".pas");
console.log(password_input)
console.log(user_input)


document.querySelector(".login").addEventListener("click",user_psw);

async function user_psw() {
  let new_div=  document.querySelector(".message_text");
  new_div.classList.add("msg_text");
  
  
  let resp_pomis = await fetch(new Request(`https://www.teaching.maumt.se/apis/access/?action=check_credentials&user_name=${user_input}&password=${password_input.value}`))
  new_div.classList.remove("msg_text");
  console.log(resp_pomis)
  if (resp_pomis.status ===200) {
    
        let text_status_div=  document.querySelector(".message_srv");
        text_status_div.classList.add("text_status_div");
        text_status_div.textContent="conectening"  
    bytCss();
    }/*  else {
        console.log("hej");
    } */
    if (resp_pomis.status ===404) {
        /* alert("feeeeelllll") */
        let new_div=  document.querySelector(".message_text");
        new_div.classList.add("msg_text");
        let text_status_div=  document.querySelector(".message_srv");
        text_status_div.classList.add("text_status_div");
        text_status_div.textContent="FEEEEElll55000"

        let button_refresh = document.createElement("button");
            button_refresh.textContent="ok";
            document.querySelector(".text_status_div").appendChild(button_refresh);
            button_refresh.addEventListener("click",huhu());
            button_refresh.style.width="50px";
            button_refresh.style.height="50px";
      }/*  else {
          console.log("hej");
      } */
      if (resp_pomis.status ===400) {
        /* alert("osjcfashfiahfsu") */
        let new_div=  document.querySelector(".message_text");
        new_div.classList.add("msg_text");
        let text_status_div=  document.querySelector(".message_srv");
        text_status_div.classList.add("text_status_div");
        text_status_div.textContent="FEEEEElll1000"
        let button_refresh = document.createElement("button");
            button_refresh.textContent="ok";
            document.querySelector(".text_status_div").appendChild(button_refresh);
            button_refresh.addEventListener("click",huhu());
            button_refresh.style.width="50px";
            button_refresh.style.height="50px";
      }/*  else {
          console.log("hej");
      } */
    // console.log(resource);
    document.querySelector("#logged_user").textContent= user_input;
}
