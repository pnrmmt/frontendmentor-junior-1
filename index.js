const input = document.getElementById("input")
const error = document.querySelector(".error")
const container =document.getElementById("container")
const success = document.getElementById("success")
const span = document.getElementById("span")


document.getElementById("button").addEventListener("click", function(){
    const inputValue = input.value.trim();
    console.log(inputValue)
 

    if(!isEmail(inputValue)){
        error.style.display="block";
        input.style.border="1px solid hsl(4, 100%, 67%)"
        input.style.backgroundColor="rgb(255, 234, 221)";
        input.classList.add("color");
      
  

    }else{
        error.style.display="none";
        input.style.border="1px solid hsl(231, 7%, 60%)";
        input.style.backgroundColor="white"
        input.classList.remove("color");
        container.style.display="none";
        success.style.display="block";
        span.innerHTML=inputValue;
        input.value=""

    }
    
})

function init(){
    container.style.display="grid";
    success.style.display="none"

}

document.getElementById("dismissBtn").addEventListener("click",init)



function isEmail(input){
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(input)
}