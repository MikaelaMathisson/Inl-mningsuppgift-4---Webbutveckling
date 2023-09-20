
let arr = [];
let count = 0;

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\uD83D\uDDD1";
        li.appendChild(span);
        arr.push(inputBox.value); //* Sparar all data som läggs till eller tas bort i listan lokalt.
    }
inputBox.value = "";
}



listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){                              //* Om jag klickar på uppgiften som skapats i listan, blir den ikryssad. Om redan ikryssad, så tas ikryssningen bort.
        e.target.classList.toggle("checked");
        count++;
    }
    else if(e.target.tagName === "SPAN"){                      //* Vid klick på soptunnan så tas uppgiften bort från listan.
        e.target.parentElement.remove();  
        count--;                                          
    }
    }, false);





