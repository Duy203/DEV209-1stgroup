
let userInputArray = [];

for (let i = 0; i < 3; i++) {
  let userInput = prompt("please enter a word");
  userInputArray.push(userInput);
}
makeList()
swap.style.display = "block";

function makeList() {
    let ul = document.createElement('ul');
    ul.classList.add('list-group');
    document.getElementById("firstList").appendChild(ul);
    for (let i = 0; i < userInputArray.length; i++) {
        let li = document.createElement('li');
        li.classList.add('list-group-item');
        ul.appendChild(li);
        li.innerHTML =  userInputArray[i];
    };
}


document.addEventListener("DOMContentLoaded", function (event) 
{
    document.getElementById("swap").addEventListener("click", function () 
    {
        firstPart.style.display = "none";
        secondPart.style.display = "block";
        let newArray = userInputArray.map(letterSwap);
        makeNewList(newArray)
    });

    function letterSwap(oneWord) {
        return oneWord.charAt(oneWord.length - 1) + oneWord.substring(1, oneWord.length -
            1) + oneWord.charAt(0);
    }

    function makeNewList(newArray){
        let ul = document.createElement('ul');
        ul.classList.add('list-group','text-center');
        document.getElementById("secondList").appendChild(ul);
        for (let i = 0; i < newArray.length; i++) {
            let li = document.createElement('li');
            li.classList.add('list-group-item');
            ul.appendChild(li);
            li.innerHTML =  newArray[i];
    };
    }

});

