let input = document.querySelector('input');
let btn = document.querySelector('button');
let menu = document.querySelector('ul');


function addTo(e){
  let text = input.value;
  let toDoIteam = `<li> ${text} </li>`;
  menu.innerHTML += toDoIteam;
}
function remove(e){
    let itam = e.path[0];
    itam.remove();
    console.log(itam);
}
btn.onclick = addTo; 
menu.onclick = remove;