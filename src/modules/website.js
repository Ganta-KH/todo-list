import { clearProject, addProjectOrTasK, initProject } from "./UI";

function initPage() {
    const content = document.getElementById("content");

    clearProject();

    content.appendChild(initProject());
}

function showForum(button) {
    button.addEventListener("click", () => {
        addProjectOrTasK();
    });
}

const addProjectButton = document.querySelector(".add-project");
showForum(addProjectButton);

export default initPage;
