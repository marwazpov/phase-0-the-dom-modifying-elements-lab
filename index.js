// first task
const main = document.getElementById("main");
main.remove();

// second task
const body= document.body;
const newHeader=document.createElement('h1');
newHeader.id="victory";
newHeader.innerHTML='Marwa is the champion';
body.append(newHeader);
