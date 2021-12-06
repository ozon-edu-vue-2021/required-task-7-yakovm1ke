/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data.json */ \"./data.json\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const commonListContainer = document.querySelector(\".common-list_container\");\n  const personInfoContainer = document.querySelector(\".person-info_container\");\n\n  const commonList = document.querySelector(\"#common-list\");\n\n  const personInfoClose = document.querySelector(\"#close-person-info\");\n  const personInfoTitle = document.querySelector(\"#info-title\");\n  const personInfoFriends = document.querySelector(\"#friends\");\n  const personInfoNotFriends = document.querySelector(\"#not-friends\");\n  const personInfoPopular = document.querySelector(\"#popular\");\n\n  const personsObj = {};\n  const personsFriends = {};\n  const notFriendsTemplate = [];\n\n  _data_json__WEBPACK_IMPORTED_MODULE_0__.forEach((person) => {\n    notFriendsTemplate.push(person.id);\n  });\n\n  _data_json__WEBPACK_IMPORTED_MODULE_0__.forEach((person) => {\n    const notFriends = new Set(notFriendsTemplate);\n    notFriends.delete(person.id);\n\n    person.friends.forEach((friendId) => {\n      personsFriends[friendId] ? personsFriends[friendId]++ : (personsFriends[friendId] = 1);\n      notFriends.delete(friendId);\n    });\n\n    personsObj[person.id] = {\n      name: person.name,\n      friends: person.friends,\n      notFriends: [...notFriends],\n    };\n  });\n\n  const popularPersons = Object.keys(personsFriends)\n    .sort((a, b) => {\n      if (personsFriends[a] !== personsFriends[b]) {\n        return personsFriends[b] - personsFriends[a];\n      } else {\n        if (personsObj[a] < personsObj[b]) {\n          return 1;\n        } else {\n          return -1;\n        }\n      }\n    })\n    .slice(0, 3);\n\n  function createPerson(personId) {\n    const personEl = document.createElement(\"div\");\n    personEl.classList.add(\"person\");\n    personEl.innerHTML = `\n      <i class=\"fa fa-user person_icon\"></i>\n      <span class=\"person_name\">${personsObj[personId].name}</span>\n    `;\n    personEl.addEventListener(\"click\", () => {\n      showPersonInfo(personId);\n    });\n    return personEl;\n  }\n\n  function showCommonList() {\n    personInfoContainer.classList.add(\"hidden\");\n    commonListContainer.classList.remove(\"hidden\");\n  }\n\n  function fillContainer(container, idArray) {\n    if (idArray.length > 3) {\n      idArray = idArray.slice(0, 3);\n    }\n    container.innerHTML = \"\";\n    idArray.forEach((id) => {\n      container.append(createPerson(id));\n    });\n  }\n\n  function showPersonInfo(personId) {\n    commonListContainer.classList.add(\"hidden\");\n    personInfoContainer.classList.remove(\"hidden\");\n    personInfoTitle.textContent = personsObj[personId].name;\n    fillContainer(personInfoFriends, personsObj[personId].friends);\n    fillContainer(personInfoNotFriends, personsObj[personId].notFriends);\n    fillContainer(personInfoPopular, popularPersons);\n  }\n\n  commonList.innerHTML = \"\";\n\n  Object.keys(personsObj).forEach((personId) => {\n    commonList.append(createPerson(personId));\n  });\n\n  personInfoClose.addEventListener(\"click\", () => showCommonList());\n});\n\n\n//# sourceURL=webpack://required-task-7-yakovm1ke/./js/script.js?");

/***/ }),

/***/ "./data.json":
/*!*******************!*\
  !*** ./data.json ***!
  \*******************/
/***/ ((module) => {

eval("module.exports = JSON.parse('[{\"id\":1,\"name\":\"Петя\",\"friends\":[10,2,6]},{\"id\":2,\"name\":\"Вася\",\"friends\":[5,1,3]},{\"id\":3,\"name\":\"Оля\",\"friends\":[9,4,3]},{\"id\":4,\"name\":\"Максим\",\"friends\":[11,12,2]},{\"id\":5,\"name\":\"Елена\",\"friends\":[7,8,4]},{\"id\":6,\"name\":\"Иван\",\"friends\":[6,1,12]},{\"id\":7,\"name\":\"Никита\",\"friends\":[1,8,5]},{\"id\":8,\"name\":\"Марат\",\"friends\":[11,12,10]},{\"id\":9,\"name\":\"Анатолий\",\"friends\":[1,2,3]},{\"id\":10,\"name\":\"Наташа\",\"friends\":[8,4,2]},{\"id\":11,\"name\":\"Марина\",\"friends\":[1,5,8]},{\"id\":12,\"name\":\"Кирилл\",\"friends\":[5,2,12]}]');\n\n//# sourceURL=webpack://required-task-7-yakovm1ke/./data.json?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;