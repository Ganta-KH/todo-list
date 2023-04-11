class Project {
    constructor(title) {
        this.title = title;
        this.tasks = [];
    }

    getName() {
        return this.title;
    }

    addTask(task) {
        this.tasks.push(task);
    }

    removeTask(index) {
        this.tasks.splice(index, 1);
    }
}

export default Project;
