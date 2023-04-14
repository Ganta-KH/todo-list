import { addProjectOrTasK, loadProjects, showDatePage } from "./UI";

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

function removeProject(projects, index) {
    projects.splice(index, 1);
}

export { removeProject };
export default initPage;
