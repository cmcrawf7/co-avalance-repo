const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V",
    "W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y",
    "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+",
    "=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let generatePasswordBtn = document.querySelector("#generate-pw-btn")
let pwOneEl = document.querySelector("#pw-one")
let pwTwoEl = document.querySelector("#pw-two")



function generatePassword() {
    let passwordOne = renderRandomPW()
    let passwordTwo = renderRandomPW()
    pwOneEl.textContent = passwordOne
    pwTwoEl.textContent = passwordTwo
}

function renderRandomPW() {
    let passwordLength = document.getElementById("pw-length").value
    let random = characters.sort(() => .5 - Math.random()).slice(0,passwordLength)
    return random.join("")
}

function copyPWOne() {
    let text_to_copy = document.getElementById("pw-one").innerHTML;
    if (!navigator.clipboard){
    // use old commandExec() way
    } else{
    navigator.clipboard.writeText(text_to_copy).then(
        function(){
            alert("yeah!"); // success
        })
      .catch(
         function() {
            alert("err"); // error
      });
}
    pwOneEl.textContent = "Copied!"
}

function copyPWTwo() {
    let text_to_copy = document.getElementById("pw-two").innerHTML;
    if (!navigator.clipboard){
    // use old commandExec() way
    } else{
    navigator.clipboard.writeText(text_to_copy).then(
        function(){
            alert("yeah!"); // success
        })
      .catch(
         function() {
            alert("err"); // error
      });
}
    pwTwoEl.textContent = "Copied!"
}
