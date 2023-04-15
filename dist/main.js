/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/CONST.js":
/*!******************************!*\
  !*** ./src/modules/CONST.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "removeProject": () => (/* binding */ removeProject)
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/modules/task.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/modules/project.js");



const projectSettings = {
    projects: [],
    projectOn: "",
    projectOnIndex: ""
};

function removeProject(projects, index) {
    projects.splice(index, 1);
}

const projectOne = new _project__WEBPACK_IMPORTED_MODULE_1__["default"]("Project One");

const taskOne = new _task__WEBPACK_IMPORTED_MODULE_0__["default"]("task One", true);
const taskTwo = new _task__WEBPACK_IMPORTED_MODULE_0__["default"]("task Two");
const taskThree = new _task__WEBPACK_IMPORTED_MODULE_0__["default"]("task Three", true);

projectOne.addTask(taskOne);
projectOne.addTask(taskTwo);
projectOne.addTask(taskThree);

projectSettings.projects.push(projectOne);
// project.removeTask(1);

console.log(projectSettings.projects);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectSettings);


/***/ }),

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProjectOrTasK": () => (/* binding */ addProjectOrTasK),
/* harmony export */   "addProjectToSidebar": () => (/* binding */ addProjectToSidebar),
/* harmony export */   "addTaskButton": () => (/* binding */ addTaskButton),
/* harmony export */   "clearProject": () => (/* binding */ clearProject),
/* harmony export */   "loadProjects": () => (/* binding */ loadProjects),
/* harmony export */   "showDatePage": () => (/* binding */ showDatePage),
/* harmony export */   "showProjectButton": () => (/* binding */ showProjectButton),
/* harmony export */   "showProjectName": () => (/* binding */ showProjectName),
/* harmony export */   "showTask": () => (/* binding */ showTask)
/* harmony export */ });
/* harmony import */ var _CONST__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CONST */ "./src/modules/CONST.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/modules/project.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task */ "./src/modules/task.js");




function clearProject() {
    const content = document.getElementById("content");
    content.innerHTML = "";
}

function showProjectName(projectTitle) {
    const title = document.createElement("h1");
    title.classList.add("project-title");
    title.textContent = projectTitle;

    return title;
}

function addTaskButton() {
    const button = document.createElement("button");
    button.classList.add("sb-button");

    button.addEventListener("click", () => {
        addProjectOrTasK("task");
    })

    const image = document.createElement("img");
    image.src = "./icons/plus.svg";

    const p = document.createElement("p");
    p.textContent = "Add Task";

    button.appendChild(image);
    button.appendChild(p);

    return button;
}

function showTask(task) {
    const taskContainer = document.createElement("div");
    taskContainer.classList.add("task");

    const taskText = document.createElement("div");
    taskText.classList.add("task-text");

    const checkedImg = document.createElement("img");
    checkedImg.src = task.state
        ? "./icons/checked-task.svg"
        : "./icons/unchecked-task.svg";

    checkedImg.addEventListener("click", () => {
        checkedImg.src =
            checkedImg.src === "./icons/checked-task.svg"
                ? "./icons/unchecked-task.svg"
                : "./icons/checked-task.svg";
        task.state = !task.state;
    });

    const p = document.createElement("p");
    p.textContent = task.title;

    taskText.appendChild(checkedImg);
    taskText.appendChild(p);

    const taskOption = document.createElement("div");
    taskOption.classList.add("task-option");

    const editImg = document.createElement("img");
    editImg.classList.add("edit");
    editImg.src = "./icons/edit.svg";

    const deleteImg = document.createElement("img");
    deleteImg.classList.add("delete");
    deleteImg.src = "./icons/trash.svg";

    deleteImg.addEventListener("click", (e) => {
        e.stopPropagation()
        const taskNumber = taskContainer.childElementCount-2;
        _CONST__WEBPACK_IMPORTED_MODULE_0__["default"].projects[_CONST__WEBPACK_IMPORTED_MODULE_0__["default"].projectOnIndex].removeTask(taskNumber);
        taskContainer.remove();
    });

    taskOption.appendChild(editImg);
    taskOption.appendChild(deleteImg);

    taskContainer.appendChild(taskText);
    taskContainer.appendChild(taskOption);

    return taskContainer;
}

function showProjectButton(project) {
    function showProjectPage() {
        const content = document.getElementById("content");

        clearProject();

        const projectPage = document.createElement("div");
        projectPage.classList.add("project");

        projectPage.appendChild(showProjectName(project.title));
        projectPage.appendChild(addTaskButton());

        const taskCard = document.createElement("div");
        taskCard.classList.add("tasks");

        for (const task of project.tasks) {
            taskCard.appendChild(showTask(task));
        }

        projectPage.appendChild(taskCard);

        content.appendChild(projectPage);

        _CONST__WEBPACK_IMPORTED_MODULE_0__["default"].projectOn = projectButton.textContent;

        _CONST__WEBPACK_IMPORTED_MODULE_0__["default"].projectOnIndex =
            projectButton.parentElement.childElementCount - 2;
    }

    const projectsSidebar = document.querySelector(".projects");

    const projectButton = document.createElement("button");
    projectButton.classList.add("sb-button");
    projectButton.classList.add("projectButton");

    projectButton.addEventListener("click", showProjectPage);

    const projectText = document.createElement("div");
    projectText.classList.add("project-text");

    const projectImg = document.createElement("img");
    projectImg.src = "./icons/projects.svg";

    const p = document.createElement("p");
    p.textContent = project.title;

    projectText.appendChild(projectImg);
    projectText.appendChild(p);

    const trash = document.createElement("img");
    trash.src = "./icons/trashP.svg";

    trash.addEventListener("click", (e) => {
        e.stopPropagation();
        (0,_CONST__WEBPACK_IMPORTED_MODULE_0__.removeProject)(_CONST__WEBPACK_IMPORTED_MODULE_0__["default"].projects, _CONST__WEBPACK_IMPORTED_MODULE_0__["default"].projectOnIndex);

        console.log(
            trash.parentElement.childElementCount - 2,
            _CONST__WEBPACK_IMPORTED_MODULE_0__["default"].projectOnIndex
        );
        if (
            trash.parentElement.childElementCount - 2 <
            _CONST__WEBPACK_IMPORTED_MODULE_0__["default"].projectOnIndex
        ) {
            _CONST__WEBPACK_IMPORTED_MODULE_0__["default"].projectOnIndex -= 1;
        }

        trash.parentElement.remove();

        if (!document.getElementById("content").hasChildNodes()) return;
        if (
            document.querySelector(".project-title").textContent ===
            _CONST__WEBPACK_IMPORTED_MODULE_0__["default"].projectOn
        ) {
            clearProject();
        }
    });

    projectButton.appendChild(projectText);
    projectButton.appendChild(trash);

    projectsSidebar.appendChild(projectButton);
}

function addProjectToSidebar(project) {
    const sidebar = document.querySelector(".projects");

    sidebar.appendChild(showProjectButton(project));
}

function addProjectOrTasK(obj) {
    const body = document.querySelector("body");

    const info = document.createElement("div");
    info.classList.add("info");

    const addinfo = document.createElement("div");
    addinfo.classList.add("add-info");

    const input = document.createElement("input");
    input.setAttribute("id", "title");
    input.type = "text";

    const buttons = document.createElement("div");
    buttons.classList.add("buttons");

    const add = document.createElement("button");
    add.classList.add("add");
    add.textContent = "Add";

    const cancel = document.createElement("button");
    cancel.classList.add("cancel");
    cancel.textContent = "Cancel";
    cancel.addEventListener("click", () => {
        const infoDiv = document.querySelector(".info");
        infoDiv.remove();
    });

    buttons.appendChild(add);
    buttons.appendChild(cancel);

    addinfo.appendChild(input);
    addinfo.appendChild(buttons);

    info.appendChild(addinfo);

    body.prepend(info);

    add.addEventListener("click", () => {
        if (obj === "project") {
            const newProject = new _project__WEBPACK_IMPORTED_MODULE_1__["default"](
                document.querySelector("input").value
            );

            _CONST__WEBPACK_IMPORTED_MODULE_0__["default"].projects.push(newProject);

            showProjectButton(newProject);
        } else {
            const newTask = new _task__WEBPACK_IMPORTED_MODULE_2__["default"](document.querySelector("input").value);
        
            _CONST__WEBPACK_IMPORTED_MODULE_0__["default"].projects[_CONST__WEBPACK_IMPORTED_MODULE_0__["default"].projectOnIndex].addTask(newTask);
            const tasksContainer = document.querySelector(".tasks")
            
            tasksContainer.appendChild(showTask(newTask));
        }

        const infoDiv = document.querySelector(".info");
        infoDiv.remove();

    });
}

function loadProjects() {
    for (const project of _CONST__WEBPACK_IMPORTED_MODULE_0__["default"].projects) {
        showProjectButton(project);
    }
}

function showDatePage() {
    const viewOptions = document.querySelectorAll(".page");
    viewOptions.forEach((option) => {
        option.addEventListener("click", () => {
            const content = document.getElementById("content");

            clearProject();
            _CONST__WEBPACK_IMPORTED_MODULE_0__["default"].projectOn = "";

            const projectPage = document.createElement("div");
            projectPage.classList.add("project");

            projectPage.appendChild(showProjectName(option.textContent));

            const tasks = document.createElement("tasks");
            tasks.classList.add("tasks");

            for (const project of _CONST__WEBPACK_IMPORTED_MODULE_0__["default"].projects) {
                for (const task of project.tasks) {
                    tasks.appendChild(showTask(task));
                }
            }

            projectPage.appendChild(tasks);

            content.appendChild(projectPage);
        });
    });
}



/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);


/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Task {
    constructor(title, state = false, dueDate = new Date()) {
        this.title = title;
        this.state = state;
        this.dueDate = dueDate;
        
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);

/***/ }),

/***/ "./src/modules/website.js":
/*!********************************!*\
  !*** ./src/modules/website.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CONST__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CONST */ "./src/modules/CONST.js");
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI */ "./src/modules/UI.js");



function showForum(button) {
    button.addEventListener("click", () => {
        const p = _CONST__WEBPACK_IMPORTED_MODULE_0__["default"].projectOn;
        _CONST__WEBPACK_IMPORTED_MODULE_0__["default"].projectOn = "";
        (0,_UI__WEBPACK_IMPORTED_MODULE_1__.addProjectOrTasK)("project");

        _CONST__WEBPACK_IMPORTED_MODULE_0__["default"].projectOn = p;
    });
}

function initPage() {
    const addProjectButton = document.querySelector(".add-project");
    showForum(addProjectButton);
    (0,_UI__WEBPACK_IMPORTED_MODULE_1__.loadProjects)();
    (0,_UI__WEBPACK_IMPORTED_MODULE_1__.showDatePage)();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initPage);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_website__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/website */ "./src/modules/website.js");


/* const project = new Project("project One");

console.log(project.title);

const taskOne = new Task("task One", true);
const taskTwo = new Task("task Two", false);
const taskThree = new Task("task Three", true);

project.addTask(taskOne);
project.addTask(taskTwo);
project.addTask(taskThree);

console.log(project.tasks);

project.removeTask(1);

console.log(project.tasks);

const date = new Date();
console.log(date.getMonth()); */

(0,_modules_website__WEBPACK_IMPORTED_MODULE_0__["default"])()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bkJ2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUbUI7QUFDOEI7O0FBRXBFO0FBQ0E7QUFDQSxrQkFBa0Isd0RBQXlCO0FBQzNDLFFBQVEsd0RBQXlCO0FBQ2pDLFFBQVEscURBQWdCOztBQUV4QixRQUFRLHdEQUF5QjtBQUNqQyxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSSxpREFBWTtBQUNoQixJQUFJLGlEQUFZO0FBQ2hCOztBQUVBLGlFQUFlLFFBQVEsRUFBQzs7Ozs7OztVQ3BCeEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ055Qzs7QUFFekM7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLDhCQUE4Qjs7QUFFOUIsNERBQVEsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL0NPTlNULmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL1VJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy93ZWJzaXRlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGFzayBmcm9tIFwiLi90YXNrXCI7XG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0XCI7XG5cbmNvbnN0IHByb2plY3RTZXR0aW5ncyA9IHtcbiAgICBwcm9qZWN0czogW10sXG4gICAgcHJvamVjdE9uOiBcIlwiLFxuICAgIHByb2plY3RPbkluZGV4OiBcIlwiXG59O1xuXG5mdW5jdGlvbiByZW1vdmVQcm9qZWN0KHByb2plY3RzLCBpbmRleCkge1xuICAgIHByb2plY3RzLnNwbGljZShpbmRleCwgMSk7XG59XG5cbmNvbnN0IHByb2plY3RPbmUgPSBuZXcgUHJvamVjdChcIlByb2plY3QgT25lXCIpO1xuXG5jb25zdCB0YXNrT25lID0gbmV3IFRhc2soXCJ0YXNrIE9uZVwiLCB0cnVlKTtcbmNvbnN0IHRhc2tUd28gPSBuZXcgVGFzayhcInRhc2sgVHdvXCIpO1xuY29uc3QgdGFza1RocmVlID0gbmV3IFRhc2soXCJ0YXNrIFRocmVlXCIsIHRydWUpO1xuXG5wcm9qZWN0T25lLmFkZFRhc2sodGFza09uZSk7XG5wcm9qZWN0T25lLmFkZFRhc2sodGFza1R3byk7XG5wcm9qZWN0T25lLmFkZFRhc2sodGFza1RocmVlKTtcblxucHJvamVjdFNldHRpbmdzLnByb2plY3RzLnB1c2gocHJvamVjdE9uZSk7XG4vLyBwcm9qZWN0LnJlbW92ZVRhc2soMSk7XG5cbmNvbnNvbGUubG9nKHByb2plY3RTZXR0aW5ncy5wcm9qZWN0cyk7XG5cbmV4cG9ydCB7IHJlbW92ZVByb2plY3QgfTtcbmV4cG9ydCBkZWZhdWx0IHByb2plY3RTZXR0aW5ncztcbiIsImltcG9ydCBwcm9qZWN0U2V0dGluZ3MsIHsgcmVtb3ZlUHJvamVjdCB9IGZyb20gXCIuL0NPTlNUXCI7XG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgVGFzayBmcm9tIFwiLi90YXNrXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhclByb2plY3QoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgICBjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93UHJvamVjdE5hbWUocHJvamVjdFRpdGxlKSB7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInByb2plY3QtdGl0bGVcIik7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0VGl0bGU7XG5cbiAgICByZXR1cm4gdGl0bGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRUYXNrQnV0dG9uKCkge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJzYi1idXR0b25cIik7XG5cbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgYWRkUHJvamVjdE9yVGFzSyhcInRhc2tcIik7XG4gICAgfSlcblxuICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBpbWFnZS5zcmMgPSBcIi4vaWNvbnMvcGx1cy5zdmdcIjtcblxuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwLnRleHRDb250ZW50ID0gXCJBZGQgVGFza1wiO1xuXG4gICAgYnV0dG9uLmFwcGVuZENoaWxkKGltYWdlKTtcbiAgICBidXR0b24uYXBwZW5kQ2hpbGQocCk7XG5cbiAgICByZXR1cm4gYnV0dG9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd1Rhc2sodGFzaykge1xuICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhc2tcIik7XG5cbiAgICBjb25zdCB0YXNrVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza1RleHQuY2xhc3NMaXN0LmFkZChcInRhc2stdGV4dFwiKTtcblxuICAgIGNvbnN0IGNoZWNrZWRJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGNoZWNrZWRJbWcuc3JjID0gdGFzay5zdGF0ZVxuICAgICAgICA/IFwiLi9pY29ucy9jaGVja2VkLXRhc2suc3ZnXCJcbiAgICAgICAgOiBcIi4vaWNvbnMvdW5jaGVja2VkLXRhc2suc3ZnXCI7XG5cbiAgICBjaGVja2VkSW1nLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNoZWNrZWRJbWcuc3JjID1cbiAgICAgICAgICAgIGNoZWNrZWRJbWcuc3JjID09PSBcIi4vaWNvbnMvY2hlY2tlZC10YXNrLnN2Z1wiXG4gICAgICAgICAgICAgICAgPyBcIi4vaWNvbnMvdW5jaGVja2VkLXRhc2suc3ZnXCJcbiAgICAgICAgICAgICAgICA6IFwiLi9pY29ucy9jaGVja2VkLXRhc2suc3ZnXCI7XG4gICAgICAgIHRhc2suc3RhdGUgPSAhdGFzay5zdGF0ZTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwLnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcblxuICAgIHRhc2tUZXh0LmFwcGVuZENoaWxkKGNoZWNrZWRJbWcpO1xuICAgIHRhc2tUZXh0LmFwcGVuZENoaWxkKHApO1xuXG4gICAgY29uc3QgdGFza09wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza09wdGlvbi5jbGFzc0xpc3QuYWRkKFwidGFzay1vcHRpb25cIik7XG5cbiAgICBjb25zdCBlZGl0SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBlZGl0SW1nLmNsYXNzTGlzdC5hZGQoXCJlZGl0XCIpO1xuICAgIGVkaXRJbWcuc3JjID0gXCIuL2ljb25zL2VkaXQuc3ZnXCI7XG5cbiAgICBjb25zdCBkZWxldGVJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGRlbGV0ZUltZy5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlXCIpO1xuICAgIGRlbGV0ZUltZy5zcmMgPSBcIi4vaWNvbnMvdHJhc2guc3ZnXCI7XG5cbiAgICBkZWxldGVJbWcuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgY29uc3QgdGFza051bWJlciA9IHRhc2tDb250YWluZXIuY2hpbGRFbGVtZW50Q291bnQtMjtcbiAgICAgICAgcHJvamVjdFNldHRpbmdzLnByb2plY3RzW3Byb2plY3RTZXR0aW5ncy5wcm9qZWN0T25JbmRleF0ucmVtb3ZlVGFzayh0YXNrTnVtYmVyKTtcbiAgICAgICAgdGFza0NvbnRhaW5lci5yZW1vdmUoKTtcbiAgICB9KTtcblxuICAgIHRhc2tPcHRpb24uYXBwZW5kQ2hpbGQoZWRpdEltZyk7XG4gICAgdGFza09wdGlvbi5hcHBlbmRDaGlsZChkZWxldGVJbWcpO1xuXG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrVGV4dCk7XG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrT3B0aW9uKTtcblxuICAgIHJldHVybiB0YXNrQ29udGFpbmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd1Byb2plY3RCdXR0b24ocHJvamVjdCkge1xuICAgIGZ1bmN0aW9uIHNob3dQcm9qZWN0UGFnZSgpIHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblxuICAgICAgICBjbGVhclByb2plY3QoKTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0UGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHByb2plY3RQYWdlLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0XCIpO1xuXG4gICAgICAgIHByb2plY3RQYWdlLmFwcGVuZENoaWxkKHNob3dQcm9qZWN0TmFtZShwcm9qZWN0LnRpdGxlKSk7XG4gICAgICAgIHByb2plY3RQYWdlLmFwcGVuZENoaWxkKGFkZFRhc2tCdXR0b24oKSk7XG5cbiAgICAgICAgY29uc3QgdGFza0NhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0YXNrQ2FyZC5jbGFzc0xpc3QuYWRkKFwidGFza3NcIik7XG5cbiAgICAgICAgZm9yIChjb25zdCB0YXNrIG9mIHByb2plY3QudGFza3MpIHtcbiAgICAgICAgICAgIHRhc2tDYXJkLmFwcGVuZENoaWxkKHNob3dUYXNrKHRhc2spKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHByb2plY3RQYWdlLmFwcGVuZENoaWxkKHRhc2tDYXJkKTtcblxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHByb2plY3RQYWdlKTtcblxuICAgICAgICBwcm9qZWN0U2V0dGluZ3MucHJvamVjdE9uID0gcHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudDtcblxuICAgICAgICBwcm9qZWN0U2V0dGluZ3MucHJvamVjdE9uSW5kZXggPVxuICAgICAgICAgICAgcHJvamVjdEJ1dHRvbi5wYXJlbnRFbGVtZW50LmNoaWxkRWxlbWVudENvdW50IC0gMjtcbiAgICB9XG5cbiAgICBjb25zdCBwcm9qZWN0c1NpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzXCIpO1xuXG4gICAgY29uc3QgcHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgcHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwic2ItYnV0dG9uXCIpO1xuICAgIHByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZChcInByb2plY3RCdXR0b25cIik7XG5cbiAgICBwcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93UHJvamVjdFBhZ2UpO1xuXG4gICAgY29uc3QgcHJvamVjdFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3RUZXh0LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LXRleHRcIik7XG5cbiAgICBjb25zdCBwcm9qZWN0SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBwcm9qZWN0SW1nLnNyYyA9IFwiLi9pY29ucy9wcm9qZWN0cy5zdmdcIjtcblxuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwLnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcblxuICAgIHByb2plY3RUZXh0LmFwcGVuZENoaWxkKHByb2plY3RJbWcpO1xuICAgIHByb2plY3RUZXh0LmFwcGVuZENoaWxkKHApO1xuXG4gICAgY29uc3QgdHJhc2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIHRyYXNoLnNyYyA9IFwiLi9pY29ucy90cmFzaFAuc3ZnXCI7XG5cbiAgICB0cmFzaC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgcmVtb3ZlUHJvamVjdChwcm9qZWN0U2V0dGluZ3MucHJvamVjdHMsIHByb2plY3RTZXR0aW5ncy5wcm9qZWN0T25JbmRleCk7XG5cbiAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICB0cmFzaC5wYXJlbnRFbGVtZW50LmNoaWxkRWxlbWVudENvdW50IC0gMixcbiAgICAgICAgICAgIHByb2plY3RTZXR0aW5ncy5wcm9qZWN0T25JbmRleFxuICAgICAgICApO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICB0cmFzaC5wYXJlbnRFbGVtZW50LmNoaWxkRWxlbWVudENvdW50IC0gMiA8XG4gICAgICAgICAgICBwcm9qZWN0U2V0dGluZ3MucHJvamVjdE9uSW5kZXhcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBwcm9qZWN0U2V0dGluZ3MucHJvamVjdE9uSW5kZXggLT0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRyYXNoLnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XG5cbiAgICAgICAgaWYgKCFkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIikuaGFzQ2hpbGROb2RlcygpKSByZXR1cm47XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC10aXRsZVwiKS50ZXh0Q29udGVudCA9PT1cbiAgICAgICAgICAgIHByb2plY3RTZXR0aW5ncy5wcm9qZWN0T25cbiAgICAgICAgKSB7XG4gICAgICAgICAgICBjbGVhclByb2plY3QoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcHJvamVjdEJ1dHRvbi5hcHBlbmRDaGlsZChwcm9qZWN0VGV4dCk7XG4gICAgcHJvamVjdEJ1dHRvbi5hcHBlbmRDaGlsZCh0cmFzaCk7XG5cbiAgICBwcm9qZWN0c1NpZGViYXIuYXBwZW5kQ2hpbGQocHJvamVjdEJ1dHRvbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRQcm9qZWN0VG9TaWRlYmFyKHByb2plY3QpIHtcbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0c1wiKTtcblxuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQoc2hvd1Byb2plY3RCdXR0b24ocHJvamVjdCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkUHJvamVjdE9yVGFzSyhvYmopIHtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5cbiAgICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpbmZvLmNsYXNzTGlzdC5hZGQoXCJpbmZvXCIpO1xuXG4gICAgY29uc3QgYWRkaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYWRkaW5mby5jbGFzc0xpc3QuYWRkKFwiYWRkLWluZm9cIik7XG5cbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRpdGxlXCIpO1xuICAgIGlucHV0LnR5cGUgPSBcInRleHRcIjtcblxuICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJ1dHRvbnMuY2xhc3NMaXN0LmFkZChcImJ1dHRvbnNcIik7XG5cbiAgICBjb25zdCBhZGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGFkZC5jbGFzc0xpc3QuYWRkKFwiYWRkXCIpO1xuICAgIGFkZC50ZXh0Q29udGVudCA9IFwiQWRkXCI7XG5cbiAgICBjb25zdCBjYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNhbmNlbC5jbGFzc0xpc3QuYWRkKFwiY2FuY2VsXCIpO1xuICAgIGNhbmNlbC50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG4gICAgY2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGluZm9EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluZm9cIik7XG4gICAgICAgIGluZm9EaXYucmVtb3ZlKCk7XG4gICAgfSk7XG5cbiAgICBidXR0b25zLmFwcGVuZENoaWxkKGFkZCk7XG4gICAgYnV0dG9ucy5hcHBlbmRDaGlsZChjYW5jZWwpO1xuXG4gICAgYWRkaW5mby5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgYWRkaW5mby5hcHBlbmRDaGlsZChidXR0b25zKTtcblxuICAgIGluZm8uYXBwZW5kQ2hpbGQoYWRkaW5mbyk7XG5cbiAgICBib2R5LnByZXBlbmQoaW5mbyk7XG5cbiAgICBhZGQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgaWYgKG9iaiA9PT0gXCJwcm9qZWN0XCIpIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIikudmFsdWVcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIHByb2plY3RTZXR0aW5ncy5wcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xuXG4gICAgICAgICAgICBzaG93UHJvamVjdEJ1dHRvbihuZXdQcm9qZWN0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1Rhc2sgPSBuZXcgVGFzayhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIikudmFsdWUpO1xuICAgICAgICBcbiAgICAgICAgICAgIHByb2plY3RTZXR0aW5ncy5wcm9qZWN0c1twcm9qZWN0U2V0dGluZ3MucHJvamVjdE9uSW5kZXhdLmFkZFRhc2sobmV3VGFzayk7XG4gICAgICAgICAgICBjb25zdCB0YXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3NcIilcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGFza3NDb250YWluZXIuYXBwZW5kQ2hpbGQoc2hvd1Rhc2sobmV3VGFzaykpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaW5mb0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5mb1wiKTtcbiAgICAgICAgaW5mb0Rpdi5yZW1vdmUoKTtcblxuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZFByb2plY3RzKCkge1xuICAgIGZvciAoY29uc3QgcHJvamVjdCBvZiBwcm9qZWN0U2V0dGluZ3MucHJvamVjdHMpIHtcbiAgICAgICAgc2hvd1Byb2plY3RCdXR0b24ocHJvamVjdCk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd0RhdGVQYWdlKCkge1xuICAgIGNvbnN0IHZpZXdPcHRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wYWdlXCIpO1xuICAgIHZpZXdPcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xuICAgICAgICBvcHRpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cbiAgICAgICAgICAgIGNsZWFyUHJvamVjdCgpO1xuICAgICAgICAgICAgcHJvamVjdFNldHRpbmdzLnByb2plY3RPbiA9IFwiXCI7XG5cbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RQYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHByb2plY3RQYWdlLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0XCIpO1xuXG4gICAgICAgICAgICBwcm9qZWN0UGFnZS5hcHBlbmRDaGlsZChzaG93UHJvamVjdE5hbWUob3B0aW9uLnRleHRDb250ZW50KSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHRhc2tzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhc2tzXCIpO1xuICAgICAgICAgICAgdGFza3MuY2xhc3NMaXN0LmFkZChcInRhc2tzXCIpO1xuXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHByb2plY3Qgb2YgcHJvamVjdFNldHRpbmdzLnByb2plY3RzKSB7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCB0YXNrIG9mIHByb2plY3QudGFza3MpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFza3MuYXBwZW5kQ2hpbGQoc2hvd1Rhc2sodGFzaykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcHJvamVjdFBhZ2UuYXBwZW5kQ2hpbGQodGFza3MpO1xuXG4gICAgICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHByb2plY3RQYWdlKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5cbiIsImNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy50YXNrcyA9IFtdO1xuICAgIH1cblxuICAgIGdldE5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRpdGxlO1xuICAgIH1cblxuICAgIGFkZFRhc2sodGFzaykge1xuICAgICAgICB0aGlzLnRhc2tzLnB1c2godGFzayk7XG4gICAgfVxuXG4gICAgcmVtb3ZlVGFzayhpbmRleCkge1xuICAgICAgICB0aGlzLnRhc2tzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0O1xuIiwiY2xhc3MgVGFzayB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIHN0YXRlID0gZmFsc2UsIGR1ZURhdGUgPSBuZXcgRGF0ZSgpKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICBcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhc2s7IiwiaW1wb3J0IHByb2plY3RTZXR0aW5ncyBmcm9tIFwiLi9DT05TVFwiO1xuaW1wb3J0IHsgYWRkUHJvamVjdE9yVGFzSywgbG9hZFByb2plY3RzLCBzaG93RGF0ZVBhZ2UgfSBmcm9tIFwiLi9VSVwiO1xuXG5mdW5jdGlvbiBzaG93Rm9ydW0oYnV0dG9uKSB7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHAgPSBwcm9qZWN0U2V0dGluZ3MucHJvamVjdE9uO1xuICAgICAgICBwcm9qZWN0U2V0dGluZ3MucHJvamVjdE9uID0gXCJcIjtcbiAgICAgICAgYWRkUHJvamVjdE9yVGFzSyhcInByb2plY3RcIik7XG5cbiAgICAgICAgcHJvamVjdFNldHRpbmdzLnByb2plY3RPbiA9IHA7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGluaXRQYWdlKCkge1xuICAgIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1wcm9qZWN0XCIpO1xuICAgIHNob3dGb3J1bShhZGRQcm9qZWN0QnV0dG9uKTtcbiAgICBsb2FkUHJvamVjdHMoKTtcbiAgICBzaG93RGF0ZVBhZ2UoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdFBhZ2U7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBpbml0UGFnZSBmcm9tIFwiLi9tb2R1bGVzL3dlYnNpdGVcIjtcblxuLyogY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KFwicHJvamVjdCBPbmVcIik7XG5cbmNvbnNvbGUubG9nKHByb2plY3QudGl0bGUpO1xuXG5jb25zdCB0YXNrT25lID0gbmV3IFRhc2soXCJ0YXNrIE9uZVwiLCB0cnVlKTtcbmNvbnN0IHRhc2tUd28gPSBuZXcgVGFzayhcInRhc2sgVHdvXCIsIGZhbHNlKTtcbmNvbnN0IHRhc2tUaHJlZSA9IG5ldyBUYXNrKFwidGFzayBUaHJlZVwiLCB0cnVlKTtcblxucHJvamVjdC5hZGRUYXNrKHRhc2tPbmUpO1xucHJvamVjdC5hZGRUYXNrKHRhc2tUd28pO1xucHJvamVjdC5hZGRUYXNrKHRhc2tUaHJlZSk7XG5cbmNvbnNvbGUubG9nKHByb2plY3QudGFza3MpO1xuXG5wcm9qZWN0LnJlbW92ZVRhc2soMSk7XG5cbmNvbnNvbGUubG9nKHByb2plY3QudGFza3MpO1xuXG5jb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbmNvbnNvbGUubG9nKGRhdGUuZ2V0TW9udGgoKSk7ICovXG5cbmluaXRQYWdlKCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=