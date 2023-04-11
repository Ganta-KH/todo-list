export function showProjectName(projectTitle) {
    const title = document.createElement("h1");
    title.classList.add("project-title");
    title.textContent = projectTitle;

    return title;
}

export function addTaskButton() {
    const button = document.createElement("button");
    button.classList.add("sb-button");

    const image = document.createElement("img");
    image.src = "./icons/plus.svg";

    const p = document.createElement("p");
    p.textContent = "Add Task";

    button.appendChild(image);
    button.appendChild(p);

    return button;
}

export function showTask(task) {
    const taskContainer = document.createElement("div");
    taskContainer.classList.add("task");

    const taskText = document.createElement("div");
    taskText.classList.add("task-text");

    const checkedImg = document.createElement("img");
    checkedImg.src = task.state
        ? "./icons/checked-task.svg"
        : "./icons/unchecked-task.svg";

    const p = document.createElement("p");
    p.textContent = task.title;

    taskText.appendChild(checkedImg);
    taskText.appendChild(p);

    const taskOption = document.createElement("div");
    taskOption.classList.add("task-option");

    const editImg = document.createElement("img");
    editImg.classList.add("edit");
    editImg.src = "./icons/edit.svg";

    const deleteImg = document.createElement("img");
    deleteImg.classList.add("delete");
    deleteImg.src = "./icons/trash.svg";

    taskOption.appendChild(editImg);
    taskOption.appendChild(deleteImg);

    taskContainer.appendChild(taskText);
    taskContainer.appendChild(taskOption);

    return taskContainer;
}

export function showProjectButton(project) {
    const projectButton = document.createElement("button");
    projectButton.classList.add("sb-button");
    projectButton.classList.add("page");

    const projectText = document.createElement("div");
    projectText.classList.add("project-text");

    const projectImg = document.createElement("img");
    projectImg.scr = "./icons/projects.svg";

    const p = document.createElement("p");
    p.textContent = project.title;

    projectText.appendChild(projectImg);
    projectText.appendChild(p);

    const trash = document.createElement("img");
    trash.src = "./icons/trashP.svg";

    projectButton.appendChild(projectText);
    projectButton.appendChild(trash);

    return projectButton;
}

export function clearProject() {
    const content = document.getElementById("content");
    content.innerHTML = "";
}
