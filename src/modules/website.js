import { clearProject, showProjectName, addTaskButton, showTask, addProjectOrTasK } from "./UI";
import Task from "./task";

function initTasks() {
    const task = document.createElement("task");
    task.classList.add("tasks");

    const taskOne = new Task("task One", true);
    const taskTwo = new Task("task Two", false);

    task.appendChild(showTask(taskOne));
    task.appendChild(showTask(taskTwo));

    return task;
}

function initProject() {
    const project = document.createElement("div");
    project.classList.add("project");

    project.appendChild(showProjectName("Inbox"));
    project.appendChild(addTaskButton());

    project.appendChild(initTasks());

    return project;
}

function initPage() {
    const content = document.getElementById("content");

    clearProject();

    content.appendChild(initProject());
}

export default initPage;
