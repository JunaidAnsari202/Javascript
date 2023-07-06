function a(){
    document.getElementById("demo").innerHTML="you just learn javascript";
}

function add(){
    let number1 = parseInt(document.getElementById("number1").value);
    let number2 = parseInt(document.getElementById("number2").value);
    let result = number1+number2;//logic
    document.getElementById("result").textContent = `${number1}+${number2}=${result}`;

}

function sub(){
    let number1 = parseInt(document.getElementById("number3").value);
    let number2 = parseInt(document.getElementById("number4").value);
    let result = number1-number2;//logic
    document.getElementById("subract").textContent = `${number1}-${number2}=${result}`;

}
function checkEligibility(){
    var age = parseInt(document.getElementById("eligibility").value);
    if(age>=18){
        document.getElementById("done").textContent="you are eligible";
    }
    else{
        document.getElementById("done").textContent="you are not eligible";
    }
}