// input Selectors
const generateInput = document.getElementById("generateInput");
const generateBtn = document.getElementById("generateBtn");

const Jihad = 'Mohammad Jihad';
const Hasan = 'Mohammad Jihad';


// Show value Selectors

const showValue = document.getElementById("showValue");
const removeBtn = document.getElementById("removeBtn");
const clearInput = document.getElementById("clearInput");
const submitBtn = document.getElementById("submitBtn");
const wrongPin = document.getElementById("wrongPin");
const correctPin = document.getElementById("correctPin");
const tryLeft = document.getElementById("tryLeft");


generateBtn.addEventListener("click" , ()=>{
    const generatingPin = Math.floor(Math.random() * 9000 + 1000);
    generateInput.value = generatingPin;
    generateBtn.style.backgroundColor = "gray";
    generateBtn.disabled = true;
});
removeBtn.addEventListener("click" , ()=>{
    const removeValueFormInput = showValue.value;
    showValue.value = removeValueFormInput.slice(0 , -1);
});
clearInput.addEventListener("click" , ()=>{
    showValue.value = "";
});
submitBtn.addEventListener("click" , ()=>{
    const getGeneratedValue = generateInput.value;
    const getShowValue = showValue.value;

    if(getGeneratedValue === getShowValue){
        submitBtn.style.backgroundColor = "green";
        generateBtn.style.backgroundColor = "green";
        correctPin.style.display = "block";
        wrongPin.style.display = "none";
    }else{
        submitBtn.style.backgroundColor = "red";
        generateBtn.style.backgroundColor = "red";
        wrongPin.style.display = "block";
        correctPin.style.display = "none";

        const chance = tryLeft.innerText;
        if(chance > 0){
            tryLeft.innerHTML = chance - 1;
        }else{
            tryLeft.innerHTML = "No try Left , Please try again 30 hours leter! try left";
            submitBtn.disabled = true;
        }


    }
});


function notification(){
    wrongPin.style.display = "none";
    correctPin.style.display = "none";
}
notification();
function getButtonValue(number){
    if(generateInput.value === ""){
        window.confirm("Please generate a pin number")
    }else{
        showValue.value += number;
    }
}