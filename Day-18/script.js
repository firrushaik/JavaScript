const numberInput = document.getElementById("numberInput");
const clearBtn = document.getElementById("clearBtn");
const submitBtn = document.getElementById("submitBtn");
const resultBox = document.getElementById("resultBox");

function isPrime(num){
    // var n = 3;
    let factorsCount=0;

for(let i=1;i<=num;i++){
    if(num%i==0){
        factorsCount++;
    }
}

if(factorsCount == 2){
    console.log(num + " Is a prime number");
    return;
}else{
    console.log(num + " Is not a prime number");
    return;
}
}

submitBtn.addEventListener("click" , () => {
    const value = Number(numberInput.value);

    if(numberInput.value === ""){
        resultBox.textContent = "Please enter a number.";
        return;
    }

    if(value <= 1){
        resultBox.textContent = `${value} is not a prime number.`;
        return;

    }
    if(isPrime(value)){
        resultBox.textContent = `${value} is a prime number.`;
        console.log("line 40");
    }else{
        resultBox.textContent = `${value} is not a prime number.`;
        console.log("line 43");
    }
});

clearBtn.addEventListener("click" , () => {
    numberInput.value = "";
    resultBox.textContent = "Result";
});

