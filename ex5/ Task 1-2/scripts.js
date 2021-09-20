let inputFields = document.getElementsByClassName("input_field");
let submitFields = document.getElementsByClassName("details");
let sendButton = document.getElementsByClassName("send_button")[0];
sendButton.addEventListener('click', transferData);
function transferData(){
    let userSubmit = [];
    for(let i = 0; i < inputFields.length; i++){
        userSubmit[i] = inputFields[i].value;
        submitFields[i].innerHTML+=userSubmit[i];
    }
    let userAge = document.getElementById('user_age');
    if(userAge.value >= 18){
        let dogImg = document.getElementById("dog");
        dogImg.style.display = 'block';
    }
}

