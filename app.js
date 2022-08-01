const elem = document.querySelector('#show');
const form = document.querySelector("#formm");
const say = document.getElementById('wlcm');
elem.style.visibility = "hidden";
say.style.visibility = "hidden";
form.addEventListener('submit', check);


function check(e){
    let disp = document.getElementById('greet');
    const user = document.querySelector('.name').value;
    const pass = document.querySelector('.pass').value;
    
    disp.innerHTML = "Welcome " + user;
    form.style.display = 'none';
    say.style.visibility = 'visible';
    elem.style.visibility = "visible";
    
    e.preventDefault();
}