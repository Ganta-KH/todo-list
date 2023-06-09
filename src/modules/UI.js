import projectSettings, { removeProject } from "./CONST";
import Project from "./project";
import Task from "./task";

export function clearProject() {
    const content = document.getElementById("content");
    content.innerHTML = "";
}

export function showProjectName(projectTitle) {
    const title = document.createElement("h1");
    title.classList.add("project-title");
    title.textContent = projectTitle;

    return title;
}

export function addTaskButton() {
    const button = document.createElement("button");
    button.classList.add("sb-button");

    button.addEventListener("click", () => {
        addProjectOrTasK("task");
    })

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

    checkedImg.addEventListener("click", () => {
        checkedImg.src =
            checkedImg.src === "./icons/checked-task.svg"
                ? "./icons/unchecked-task.svg"
                : "./icons/checked-task.svg";
        task.state = !task.state;
    });

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

    deleteImg.addEventListener("click", (e) => {
        e.stopPropagation()
        const taskNumber = taskContainer.childElementCount-2;
        projectSettings.projects[projectSettings.projectOnIndex].removeTask(taskNumber);
        taskContainer.remove();
    });

    taskOption.appendChild(editImg);
    taskOption.appendChild(deleteImg);

    taskContainer.appendChild(taskText);
    taskContainer.appendChild(taskOption);

    return taskContainer;
}

export function showProjectButton(project) {
    function showProjectPage() {
        const content = document.getElementById("content");

        clearProject();

        const projectPage = document.createElement("div");
        projectPage.classList.add("project");

        projectPage.appendChild(showProjectName(project.title));
        projectPage.appendChild(addTaskButton());

        const taskCard = document.createElement("div");
        taskCard.classList.add("tasks");

        for (const task of project.tasks) {
            taskCard.appendChild(showTask(task));
        }

        projectPage.appendChild(taskCard);

        content.appendChild(projectPage);

        projectSettings.projectOn = projectButton.textContent;

        projectSettings.projectOnIndex =
            projectButton.parentElement.childElementCount - 2;
    }

    const projectsSidebar = document.querySelector(".projects");

    const projectButton = document.createElement("button");
    projectButton.classList.add("sb-button");
    projectButton.classList.add("projectButton");

    projectButton.addEventListener("click", showProjectPage);

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

    trash.addEventListener("click", (e) => {
        e.stopPropagation();
        removeProject(projectSettings.projects, projectSettings.projectOnIndex);

        console.log(
            trash.parentElement.childElementCount - 2,
            projectSettings.projectOnIndex
        );
        if (
            trash.parentElement.childElementCount - 2 <
            projectSettings.projectOnIndex
        ) {
            projectSettings.projectOnIndex -= 1;
        }

        trash.parentElement.remove();

        if (!document.getElementById("content").hasChildNodes()) return;
        if (
            document.querySelector(".project-title").textContent ===
            projectSettings.projectOn
        ) {
            clearProject();
        }
    });

    projectButton.appendChild(projectText);
    projectButton.appendChild(trash);

    projectsSidebar.appendChild(projectButton);
}

export function addProjectToSidebar(project) {
    const sidebar = document.querySelector(".projects");

    sidebar.appendChild(showProjectButton(project));
}

export function addProjectOrTasK(obj) {
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
        if (obj === "project") {
            const newProject = new Project(
                document.querySelector("input").value
            );

            projectSettings.projects.push(newProject);

            showProjectButton(newProject);
        } else {
            const newTask = new Task(document.querySelector("input").value);
        
            projectSettings.projects[projectSettings.projectOnIndex].addTask(newTask);
            const tasksContainer = document.querySelector(".tasks")
            
            tasksContainer.appendChild(showTask(newTask));
        }

        const infoDiv = document.querySelector(".info");
        infoDiv.remove();

    });
}

export function loadProjects() {
    for (const project of projectSettings.projects) {
        showProjectButton(project);
    }
}

export function showDatePage() {
    const viewOptions = document.querySelectorAll(".page");
    viewOptions.forEach((option) => {
        option.addEventListener("click", () => {
            const content = document.getElementById("content");

            clearProject();
            projectSettings.projectOn = "";

            const projectPage = document.createElement("div");
            projectPage.classList.add("project");

            projectPage.appendChild(showProjectName(option.textContent));

            const tasks = document.createElement("tasks");
            tasks.classList.add("tasks");

            for (const project of projectSettings.projects) {
                for (const task of project.tasks) {
                    tasks.appendChild(showTask(task));
                }
            }

            projectPage.appendChild(tasks);

            content.appendChild(projectPage);
        });
    });
}

