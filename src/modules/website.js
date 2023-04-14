import projectSettings from "./CONST";
import { addProjectOrTasK, loadProjects, showDatePage } from "./UI";

function showForum(button) {
    button.addEventListener("click", () => {
        const p = projectSettings.projectOn;
        projectSettings.projectOn = "";
        addProjectOrTasK("project");

        projectSettings.projectOn = p;
    });
}

function initPage() {
    const addProjectButton = document.querySelector(".add-project");
    showForum(addProjectButton);
    loadProjects();
    showDatePage();
}

export default initPage;
