import {
    addProjectOrTasK,
    loadProjects,
    showDatePage,
} from "./UI";

function showForum(button) {
    button.addEventListener("click", () => {
        addProjectOrTasK();
    });
}

function initPage() {
    const addProjectButton = document.querySelector(".add-project");
    showForum(addProjectButton);
    loadProjects();
    showDatePage();
}

export default initPage;
