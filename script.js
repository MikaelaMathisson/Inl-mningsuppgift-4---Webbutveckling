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
        arr.push(inputBox.value); //* Saves data to array
    }
inputBox.value = "";
}

    listContainer.addEventListener("click", function(e){
        if (e.target.classList.contains('checked')) {
            e.target.classList.remove('checked')
            count--;
            document.getElementById('count').innerHTML = count
        } else {
            e.target.classList.add('checked')
            count++
            document.getElementById('count').innerHTML = count
        }
    
        });

listContainer.addEventListener("click", function(e){
        if(e.target.tagName === "SPAN"){                      // Click on trashcan deletes the task from the list
            e.target.parentElement.remove();
            count--;
            document.getElementById('count').innerHTML = count
        }
        });
console.log(arr);