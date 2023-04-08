function initPage() {
    const content = document.getElementById("content");

    content.appendChild(openProject());
}

function clearPage() {
    const content = document.getElementById("content");
    content.innerHTML = "";
}

function openProject() {
    const projects = document.querySelectorAll(".page");
    const page = document.createElement("div");
    page.classList.add("project");

    projects.forEach((project) => {
        project.addEventListener("click", () => {
            clearPage();
            const h1 = document.createElement("h1");
            h1.classList.add("project-title");
            h1.textContent = project.textContent;

            page.appendChild(h1);

            if (
                project.textContent !== "Today" &&
                project.textContent !== "This Week"
            ) {
                const addTaskBtn = document.createElement("button");
                addTaskBtn.classList.add("sb-button");

                const image = document.createElement("img");
                image.src = "./icons/plus.svg";

                const p = document.createElement("p");
                p.textContent = "Add Task";

                addTaskBtn.appendChild(image);
                addTaskBtn.appendChild(p);

                page.appendChild(addTaskBtn);
            }
        });
    });

    return page;
}

export default initPage;
