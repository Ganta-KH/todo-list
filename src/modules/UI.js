import { projects } from "./CONST";
import Project from "./project";

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
    const projectsSidebar = document.querySelector(".projects");

    const projectButton = document.createElement("button");
    projectButton.classList.add("sb-button");
    projectButton.classList.add("page");

    const projectText = document.createElement("div");
    projectText.classList.add("project-text");

    const projectImg = document.createElement("img");
    projectImg.src = "./icons/projects.svg";

    const p = document.createElement("p");
    p.textContent = project.title;

    projectText.appendChild(projectImg);
    projectText.appendChild(p);

    const trash = document.createElement("img");
    trash.src = "./icons/trashP.svg";

    projectButton.appendChild(projectText);
    projectButton.appendChild(trash);

    projectsSidebar.appendChild(projectButton);
}

export function addProjectToSidebar(project) {
    const sidebar = document.querySelector(".projects");

    sidebar.appendChild(showProjectButton(project));
}

export function clearProject() {
    const content = document.getElementById("content");
    content.innerHTML = "";
}

export function addProjectOrTasK() {
    const body = document.querySelector("body");

    const info = document.createElement("div");
    info.classList.add("info");

    const addinfo = document.createElement("div");
    addinfo.classList.add("add-info");

    const input = document.createElement("input");
    input.setAttribute("id", "title");
    input.type = "text";

    const buttons = document.createElement("div");
    buttons.classList.add("buttons");

    const add = document.createElement("button");
    add.classList.add("add");
    add.textContent = "Add";

    const cancel = document.createElement("button");
    cancel.classList.add("cancel");
    cancel.textContent = "Cancel";
    cancel.addEventListener("click", () => {
        const infoDiv = document.querySelector(".info");
        infoDiv.remove();
    });

    buttons.appendChild(add);
    buttons.appendChild(cancel);

    addinfo.appendChild(input);
    addinfo.appendChild(buttons);

    info.appendChild(addinfo);

    body.prepend(info);

    add.addEventListener("click", () => {
        /* const projectName = document.getElementById("#title");
        console.log(projectName.value); */
        const newProject = new Project(document.querySelector("input").value);

        console.log(document.querySelector("input").value);
        projects.push(newProject);

        showProjectButton(newProject);

        const infoDiv = document.querySelector(".info");
        infoDiv.remove();
    });
}

export function initTasks(tasks) {
    const task = document.createElement("task");
    task.classList.add("tasks");

    task.appendChild(showTask(tasks));

    return task;
}

export function initProject() {
    const project = document.createElement("div");
    project.classList.add("project");

    project.appendChild(showProjectName("Inbox"));
    project.appendChild(addTaskButton());

    project.appendChild(initTasks());

    return project;
}
