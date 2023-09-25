
let arr = [];
let count = 0;

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


//Function to add task, for displaying alert message if inputbux is empty, creates trashcan icon, and also saving data to array
function addTask(){
    if(inputBox.value === ''){   
        alert("You must write something!");     // If input box is empty, this alert message shows up
    }
    else {
        let li = document.createElement("li"); // When something is written in the inputbox, this creates listitem and puts it in the list
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\uD83D\uDDD1";     // Trashcan icon
        li.appendChild(span);
        arr.push(inputBox.value); // Saves data to array
    }
inputBox.value = "";
}

// Function to check if the task is completed or not, and then adds or removes from count
    listContainer.addEventListener("click", function(e){    
        if (e.target.classList.contains('checked')) {
            e.target.classList.remove('checked')
            count--;
            document.getElementById('count').innerHTML = count
        } 
        else {
            e.target.classList.add('checked')
            count++
            document.getElementById('count').innerHTML = count
        }
    
        });


// Function for Click on trashcan deletes the task from the list 
listContainer.addEventListener("click", function(e){
        if(e.target.tagName === "SPAN"){                     
            e.target.parentElement.remove();
            count--;
            document.getElementById('count').innerHTML = count
        }
        });
console.log(arr);