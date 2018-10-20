let charsList = new Array();
let objID = 0;
let currentName = document.querySelector("#name");
let currentClass = document.querySelector("#class");
let currentHP = document.querySelector("#hp");
let currentAtt = document.querySelector("#att");
let currentDef = document.querySelector("#def");

let submitCharBtn = document.querySelector("#add-char");
let listDiv = document.querySelector("#list-output");

document.addEventListener("DOMContentLoaded", () => {
  submitBtnEvent();
  deleteBtnEvent();
});

let submitBtnEvent = () => {
  submitCharBtn.addEventListener("click", event => {
    objID++;
    currentChar = {
      id: objID,
      name: currentName.value,
      class: currentClass.value,
      hp: currentHP.value,
      attack: currentAtt.value,
      defense: currentDef.value
    };

    charsList.push(currentChar);
    console.log(charsList);
    displayList();
  });
};

let displayList = () => {
  let html = "";
  charsList.forEach(element => {
    html += convertToHTML(element);
  });
  listDiv.innerHTML = html;
};

let convertToHTML = object => {
  return `
    <div class="char">
        <h1> ${object.name}</h1>
        <span>Class: ${object.class} </span>
        <span>HP: ${object.hp} </span>
        <span>ATCK: ${object.attack} </span>
        <span>DEF: ${object.defense} </span>
        <span><button id="deleteBtn" onClick="deleteBtnEvent(${object.id})">x</button> </span>
    </div>    
    `;
};

let deleteBtnEvent = (id) => {
  console.log("hi");
  charsList.forEach(element => {
    if (id === element.id) {
      let index = charsList.indexOf(element);
      charsList.splice(index, 1);
    }
  });
  displayList();
};
