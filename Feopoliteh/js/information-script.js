let text = document.querySelector(".hidden-txt");
let button1 = document.querySelector(".read__more1");
let button2 = document.querySelector(".read__more2");

function ShowText(){
    text.style.display = "block";
    button1.style.display="none";
    button2.style.display="block";
}

function HideText(){
    text.style.display = "none";
    button1.style.display="block";
    button2.style.display="none";
}