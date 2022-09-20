const element = document.forms[0].elements.text;

console.log(element.value);

element.addEventListener("onfocus", () => {console.log("blur", event)});

const element1 = document.getElementById("number");

function check (){
    let message = "OK";
    if(element1.validity.rangeOverflow){
        message = "Not";
    }
}
element1.addEventListener("blur", check);


const button = document.getElementById("button");
button.addEventListener("click", (event) => {
    event.preventDefault();
})