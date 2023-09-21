let arr = [];
let count = 1;

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
        arr.push(inputBox.value); //* Saves data to array
    }
inputBox.value = "";
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){                              // When click, it makes the task completed. If already completed (checked), the check gets removed.
        e.target.classList.toggle("checked");
        document.getElementById("count").innerHTML = count++;
    }
    else if(e.target.tagName === "SPAN"){                      //* Click on trashcan deletes the task from the list
        e.target.parentElement.remove();  
        document.getElementById("count").innerHTML = count--;                                      
    }
    }, false);

console.log(arr);
    
    