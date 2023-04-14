import Task from "./task";
import Project from "./project";

const projectSettings = {
    projects: [],
    projectOn: "",
};

const projectOne = new Project("Project One");

const taskOne = new Task("task One", true);
const taskTwo = new Task("task Two");
const taskThree = new Task("task Three", true);

projectOne.addTask(taskOne);
projectOne.addTask(taskTwo);
projectOne.addTask(taskThree);

projectSettings.projects.push(projectOne);
// project.removeTask(1);

console.log(projectSettings.projects);

export default projectSettings;
