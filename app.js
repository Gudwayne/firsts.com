const elem = document.querySelector('#show');
const form = document.querySelector("#formm");

elem.style.visibility = "hidden";
form.addEventListener('submit', check);


function check(e){
    const user = document.querySelector('.name').value;
    const pass = document.querySelector('.pass').value;
    if(user == "Admin" && pass == "1234"){
        console.log("Access Granted!")
        elem.style.visibility = "visible";
    }
    e.preventDefault();
}