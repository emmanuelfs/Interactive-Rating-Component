
let allButtons = document.querySelectorAll("button");
let scoreSelected;
for (let i = 0; i < allButtons.length; i++){
    allButtons[i].addEventListener("click", (e) => {
        console.log(e.target);
        if (e.target.className === "buttonSelect")
        {
            for(let i= 0; i < allButtons.length; i++){
                if (allButtons[i].classList.contains("buttonSelected")){
                    allButtons[i].classList.add("buttonSelect");
                    allButtons[i].classList.remove("buttonSelected");
                }
            }
            e.target.classList.add("buttonSelected");
            e.target.classList.remove("buttonSelect");
            scoreSelected = e.target.innerHTML;
        }
        if (e.target.className === "submit")
        {
            document.querySelector("#initialScreen").classList.add("disabled");
            document.querySelector("#finalScreen").classList.remove("disabled")
            document.querySelector("#scoreNumberSelected").innerHTML = scoreSelected;
        }
    });
}