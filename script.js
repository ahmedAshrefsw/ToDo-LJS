let input = document.querySelector('input');
let btn = document.querySelector('button');
let menu = document.querySelector('ul');


function addTo(e){
  if(!input.value){
    alert("please type something !");
  }else{
  let text = input.value;
  let toDoIteam = `<li> ${text} </li>`;
  menu.innerHTML += toDoIteam;
  input.value = "";}
}

function remove(e){
    let item = e.path[0];
    input.value = item.innerText;
    item.remove();
}

btn.onclick = addTo; 
menu.onclick = remove;