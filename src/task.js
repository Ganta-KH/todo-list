class Task {
    constructor(title, state = false, dueDate = new Date()) {
        this.title = title;
        this.state = state;
        this.dueDate = dueDate;
        
    }
}

export default Task;