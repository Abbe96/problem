document.querySelector(".for_regist").addEventListener("click", log_reg);
function log_reg(event) {
    if (event.target.textContent === "New to this?Register for free") {
        event.target.textContent === "Click hare for login";
        document.querySelector(".for_regist").textContent = "Click hare for login";
        document.querySelector(".text_magic").textContent = "Alread have an accont?Go to Login";

        document.querySelector(".login").textContent = "Register";
        document.querySelector(".text_titel").textContent = "Register";
        document.querySelector(".screen-1").style.transition = "all 2s";
        document.querySelector(".screen-1").style.backgroundColor = "#b6d108";


    } else {
        event.target.textContent === "Click hare for login";
        document.querySelector(".for_regist").textContent = "New to this?Register for free";
        document.querySelector(".login").textContent = "Login";
        document.querySelector(".text_magic").textContent = "Let the magic start";
        document.querySelector(".text_titel").textContent = "Login";
        document.querySelector(".screen-1").style.transition = "all 2s";
        document.querySelector(".screen-1").style.backgroundColor = "#f1f7fe";

    }
}

function bytCss(event) {
    document.querySelector("#css").innerHTML = `<link rel="stylesheet" href="../css/quiz.css">`
}