const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

const passwordLength = document.getElementById("psw-length")
const generatedPasswordOne = document.getElementById("psw-one")
const generatedPasswordTwo = document.getElementById("psw-two")


document.getElementById("gen-btn").addEventListener("click",generateRandomPassword)

function generateRandomPassword() {
    
    let randomPasswordOne = "";
    let randomPasswordTwo = "";

    for (let i = 0; i < passwordLength.value; i++) {
        randomPasswordOne += getRandomCharacter()  
        randomPasswordTwo += getRandomCharacter()      
    }

    generatedPasswordOne.textContent = randomPasswordOne;
    generatedPasswordTwo.textContent = randomPasswordTwo;
}

function getRandomCharacter() {
    let randomCharOne = Math.floor(Math.random() * characters.length)
    let randomCharTwo = Math.floor(Math.random() * characters.length)
    return characters[randomCharOne]
    return characters[randomCharTwo]
}



function copyToClipboard(div,psw){
    if (div === "div-one") {
    let copyText = document.getElementById("psw-one").value    
    navigator.clipboard.writeText(copyText).then(() => {
        alert("First password copied to clipboard!")
    })
      } else {
    let copyText = document.getElementById("psw-two").value    
    navigator.clipboard.writeText(copyText).then(() => {
        alert("Second password copied to clipboard!")
    })
  } 
}

window.onload = function(){
    passwordLength.value=""
}