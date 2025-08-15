//variables
const err=document.querySelector(".err");
const inputTask=document.getElementById("input-Task");
const addTaskbtn=document.getElementById("add-task");
const taskList=document.querySelector(".task-list");
const clearAllBtn=document.querySelector(".clear-all");
//add a task
//? click on add task
addTaskbtn.addEventListener("click", (e) => {
    e.preventDefault();
    //? check input task is not empty
    if (inputTask.value !==''){
        //? input value and trim
        e.preventDefault();
        const taskText = inputTask.value.trim();
        //? create a new li
        const newLi = document.createElement("li");
        newLi.className= "task";
        //? create an input field
        const taskInput=document.createElement("input");
        taskInput.type="text";
        taskInput.disabled=true;
        taskInput.className="disabled-task";
        //? put the input trimmed value into the disabled task
        taskInput.value=taskText;
        //? put the input filled task into the new list
        newLi.appendChild(taskInput);
        //? create delete button
        const deleteBtn=document.createElement("button");
        deleteBtn.innerText="Delete";
        deleteBtn.className="deleteBtn";
        //? put the delete button in li
        newLi.appendChild(deleteBtn);
        //? create edit button
        const editBtn=document.createElement("button");
        editBtn.innerText="Edit";
        editBtn.className="editBtn";
        //? put the edit button in li
        newLi.appendChild(editBtn);
        //? put new li that contain all tasks
        taskList.append(newLi);
        //? clear the input task
        inputTask.value="";

    }
    else{
        err.style.display="block";
        setTimeout(()=>{
            err.style.display="none";
        },2000);
    }

});
//delete a task
//! click on the parent
taskList.addEventListener("click",(e)=>{
    e.preventDefault();

    //! check the target is a deletebutton
    if (e.target.classList.contains("deleteBtn")){
        //! get  and remove the parent of that deleteBTn
        e.target.parentElement.remove();
    }
});

// edit a task
taskList.addEventListener("click", (e) => {
    e.preventDefault();

    if (e.target.classList.contains("editBtn")) {
        const li = e.target.parentElement;
        const taskInput = li.querySelector("input");

        if (taskInput.disabled) {
            // Enable editing
            taskInput.disabled = false;
            taskInput.focus();
            e.target.innerText = "Save";
        } else {
            // Save and disable editing
            taskInput.disabled = true;
            e.target.innerText = "Edit";
        }
    }
});

//delete all tasks
clearAllBtn.addEventListener("click",(e)=>{
e.preventDefault();
taskList.innerHTML="";
});
