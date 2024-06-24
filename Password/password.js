const strongpass = () => {
    let pass1 = '';
    let str1 = "@$!#^&*"+"abcdefghijklmnopqrstuvwxyz0123456789" + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let i = 1; i <= 8; i++) {
        let randomIdx1 = Math.floor(Math.random() * str1.length + 1);

        pass1 += str1.charAt(randomIdx1);
    }
    console.log(pass1);
    return pass1;
}
const normalpass = () => {
    let pass2 = '';
    let str2 = "abcdefghijklmnopqrstuvwxyz0123456789" + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let i = 1; i <= 8; i++) {
        let randomIdx2 = Math.floor(Math.random() * str2.length + 1);

        pass2 += str2.charAt(randomIdx2);
    }
    console.log(pass2);
    return pass2;
}
const weakpass = () => {
    let pass3 = '';
    let str3 = "abcdefghijklmnopqrstuvwxyz" + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let i = 1; i <= 8; i++) {
        let randomIdx3 = Math.floor(Math.random() * str3.length + 1);

        pass3 += str3.charAt(randomIdx3);
    }
    console.log(pass3);
    return pass3;
}

const display = document.querySelector(".screen");
const button = document.querySelectorAll(".btn");

const select = (userchoice) => {

    if (userchoice === "strong") {
        display.innerText = strongpass();
    }
    else if (userchoice === "normal") {
        display.innerText = normalpass();
    }
    else if(userchoice==="weak"){
        display.innerText = weakpass();
    }
    else if(userchoice==="reset"){
       display.innerText="Display";
    }
    
}
display.innerText="Display";

button.forEach((btn) => {
    btn.addEventListener("click",()=>{
        userchoice=btn.getAttribute("id");
        select(userchoice);
    })
});
