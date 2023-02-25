async function huhu(){
    let git = ALL_BREEDS[Math.floor(Math.random() * ALL_BREEDS.length)];
    const rqt= await fetch(`https://dog.ceo/api/breed/${git.url}/images/random`)
    let rsrc = await rqt.json()
   
    document.querySelector(".img_box").style.backgroundImage= `url(${rsrc.message})`
    let random_correct = document.querySelectorAll(".select")
    let chosen_one = random_correct[Math.floor(Math.random() * random_correct.length)];
   
    chosen_one.textContent = git.name;
    chosen_one.classList.add("answer");
    let fel_svar = document.querySelectorAll("#box_button > :not(.answer)");
    fel_svar.forEach(fel_knapp=>{fel_knapp.textContent=ALL_BREEDS[Math.floor(Math.random() * ALL_BREEDS.length)].name});
    
    document.querySelectorAll(".select").forEach(knappar => knappar.addEventListener("click",sms));
    

    function sms(event) {
        if (event.target.textContent === git.name) {
            /* alert("RÄTT"); */
            
/*             document.querySelectorAll(".select").forEach(knappar => knappar.removeEventListener("click",sms));
 */            document.querySelector(".answer").classList.remove("answer");
            let button_refresh = document.createElement("button");
            button_refresh.textContent="ok";
            document.querySelector(".message_text").appendChild(button_refresh);
/*             button_refresh.addEventListener("click",huhu());
 */            button_refresh.style.width="50px";
            button_refresh.style.height="50px";
            /* huhu(); */
        } else {
            /* alert("FELLLLLLLL"); */
            let button_refresh = document.createElement("button");
            button_refresh.textContent="ok";
            document.querySelector(".message_text").appendChild(button_refresh);
/*             button_refresh.addEventListener("click",huhu());
 */            document.querySelector(".answer").classList.remove("answer");
/*             document.querySelectorAll(".select").forEach(knappar => knappar.removeEventListener("click",sms))
 */            /* huhu(); */
        }
    }
}
huhu()