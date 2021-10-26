let screen = document.getElementById("input-screen");
let screenValue = "";

document.getElementById("generate-pin").addEventListener("click", function(){
    randomVal = Math. floor(1000 + Math. random() * 9000); 
    document.getElementById("pin").value = randomVal;
    var elems = document.getElementsByClassName('notify');
    for (var i=0; i<elems.length; i+=1){
        elems[i].style.display = 'none';
      }

})

buttons = document.querySelectorAll(".calc-body .button");
for(item of buttons){
    item.addEventListener("click", (e)=>{
        buttonText =  e.target.innerText;
        // console.log("button text is" , buttonText);
        if (buttonText == "C")
        {
            screenValue = "";
            screen.value = "";   
        }

        else if (buttonText == "<")
        {
            screenValue = screenValue.slice(0,-1);
            screen.value = screenValue;
        }

        else {
            screenValue = screenValue + buttonText;
            screen.value = screenValue;
        }
    })
}

let tryLeft = 3;
document.getElementById("submit-btn").addEventListener("click", function(){
    if(randomVal == screen.value)
    {
        document.getElementById("matched").style.display = "block";
        document.getElementById("not-matched").style.display = "none";
    }
    else{
        document.getElementById("not-matched").style.display = "block";
        document.getElementById("matched").style.display = "none";
               
        tryLeft = tryLeft - 1;
        document.getElementById("try-left").innerText = tryLeft; 
        if (tryLeft == 0){
            document.getElementById("submit-btn").disabled = true;
        }
        
    }

})