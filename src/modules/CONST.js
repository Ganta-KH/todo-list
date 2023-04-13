import Task from "./task";
import Project from "./project";

const projects = [];

const projectOne = new Project("Project One");

const taskOne = new Task("task One", true);
const taskTwo = new Task("task Two");
const taskThree = new Task("task Three", true);

projectOne.addTask(taskOne);
projectOne.addTask(taskTwo);
projectOne.addTask(taskThree);

projects.push(projectOne)
// project.removeTask(1);

console.log(projects)

export default projects;
