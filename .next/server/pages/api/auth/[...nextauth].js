"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("firebase/app");;

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/***/ ((module) => {

module.exports = import("firebase/firestore");;

/***/ }),

/***/ "firebase/storage":
/*!***********************************!*\
  !*** external "firebase/storage" ***!
  \***********************************/
/***/ ((module) => {

module.exports = import("firebase/storage");;

/***/ }),

/***/ "(api)/./firebase.js":
/*!*********************!*\
  !*** ./firebase.js ***!
  \*********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"app\": () => (/* binding */ app),\n/* harmony export */   \"db\": () => (/* binding */ db),\n/* harmony export */   \"storage\": () => (/* binding */ storage)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/storage */ \"firebase/storage\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, firebase_storage__WEBPACK_IMPORTED_MODULE_2__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, firebase_storage__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n// Import the functions you need from the SDKs you need\n\n\n\n// TODO: Add SDKs for Firebase products that you want to use\n// https://firebase.google.com/docs/web/setup#available-libraries\n// Your web app's Firebase configuration\nconst firebaseConfig = {\n    apiKey: \"AIzaSyDDHEX_cbX7QVdPzvzQJJqwCOWSJaviDrQ\",\n    authDomain: \"my-instagram-5877d.firebaseapp.com\",\n    projectId: \"my-instagram-5877d\",\n    storageBucket: \"my-instagram-5877d.appspot.com\",\n    messagingSenderId: \"446354986852\",\n    appId: \"1:446354986852:web:7d6951502bc6c7dd418c71\"\n};\n// Initialize Firebase\nconst app = !(0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApps)().length ? (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig) : (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApp)();\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)();\nconst storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.getStorage)();\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9maXJlYmFzZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSx1REFBdUQ7QUFDTTtBQUNaO0FBQ0o7QUFDN0MsNERBQTREO0FBQzVELGlFQUFpRTtBQUVqRSx3Q0FBd0M7QUFDeEMsTUFBTUssY0FBYyxHQUFHO0lBQ3JCQyxNQUFNLEVBQUUseUNBQXlDO0lBQ2pEQyxVQUFVLEVBQUUsb0NBQW9DO0lBQ2hEQyxTQUFTLEVBQUUsb0JBQW9CO0lBQy9CQyxhQUFhLEVBQUUsZ0NBQWdDO0lBQy9DQyxpQkFBaUIsRUFBRSxjQUFjO0lBQ2pDQyxLQUFLLEVBQUUsMkNBQTJDO0NBQ25EO0FBRUQsc0JBQXNCO0FBQ3RCLE1BQU1DLEdBQUcsR0FBRyxDQUFDWCxxREFBTyxFQUFFLENBQUNZLE1BQU0sR0FBR2IsMkRBQWEsQ0FBQ0ssY0FBYyxDQUFDLEdBQUdILG9EQUFNLEVBQUU7QUFDeEUsTUFBTVksRUFBRSxHQUFHWCxnRUFBWSxFQUFFO0FBQ3pCLE1BQU1ZLE9BQU8sR0FBR1gsNERBQVUsRUFBRTtBQUVEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vZmlyZWJhc2UuanM/NGQ5NyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnQgdGhlIGZ1bmN0aW9ucyB5b3UgbmVlZCBmcm9tIHRoZSBTREtzIHlvdSBuZWVkXG5pbXBvcnQgeyBpbml0aWFsaXplQXBwLCBnZXRBcHBzLCBnZXRBcHAgfSBmcm9tICdmaXJlYmFzZS9hcHAnXG5pbXBvcnQgeyBnZXRGaXJlc3RvcmUgfSBmcm9tICdmaXJlYmFzZS9maXJlc3RvcmUnXG5pbXBvcnQgeyBnZXRTdG9yYWdlIH0gZnJvbSAnZmlyZWJhc2Uvc3RvcmFnZSdcbi8vIFRPRE86IEFkZCBTREtzIGZvciBGaXJlYmFzZSBwcm9kdWN0cyB0aGF0IHlvdSB3YW50IHRvIHVzZVxuLy8gaHR0cHM6Ly9maXJlYmFzZS5nb29nbGUuY29tL2RvY3Mvd2ViL3NldHVwI2F2YWlsYWJsZS1saWJyYXJpZXNcblxuLy8gWW91ciB3ZWIgYXBwJ3MgRmlyZWJhc2UgY29uZmlndXJhdGlvblxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XG4gIGFwaUtleTogJ0FJemFTeURESEVYX2NiWDdRVmRQenZ6UUpKcXdDT1dTSmF2aURyUScsXG4gIGF1dGhEb21haW46ICdteS1pbnN0YWdyYW0tNTg3N2QuZmlyZWJhc2VhcHAuY29tJyxcbiAgcHJvamVjdElkOiAnbXktaW5zdGFncmFtLTU4NzdkJyxcbiAgc3RvcmFnZUJ1Y2tldDogJ215LWluc3RhZ3JhbS01ODc3ZC5hcHBzcG90LmNvbScsXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiAnNDQ2MzU0OTg2ODUyJyxcbiAgYXBwSWQ6ICcxOjQ0NjM1NDk4Njg1Mjp3ZWI6N2Q2OTUxNTAyYmM2YzdkZDQxOGM3MScsXG59XG5cbi8vIEluaXRpYWxpemUgRmlyZWJhc2VcbmNvbnN0IGFwcCA9ICFnZXRBcHBzKCkubGVuZ3RoID8gaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZykgOiBnZXRBcHAoKVxuY29uc3QgZGIgPSBnZXRGaXJlc3RvcmUoKVxuY29uc3Qgc3RvcmFnZSA9IGdldFN0b3JhZ2UoKVxuXG5leHBvcnQgeyBhcHAsIGRiLCBzdG9yYWdlIH1cbiJdLCJuYW1lcyI6WyJpbml0aWFsaXplQXBwIiwiZ2V0QXBwcyIsImdldEFwcCIsImdldEZpcmVzdG9yZSIsImdldFN0b3JhZ2UiLCJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsImFwcCIsImxlbmd0aCIsImRiIiwic3RvcmFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./firebase.js\n");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../firebase */ \"(api)/./firebase.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, _firebase__WEBPACK_IMPORTED_MODULE_3__]);\n([firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, _firebase__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    // Configure one or more authentication providers\n    providers: [\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET\n        })\n    ],\n    pages: {\n        signIn: \"/auth/signin\"\n    },\n    callbacks: {\n        async session ({ session , token , user  }) {\n            session.user.username = session.user.name.split(\" \").join(\"\").toLocaleLowerCase();\n            session.user.uid = token.sub;\n            await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.setDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)(_firebase__WEBPACK_IMPORTED_MODULE_3__.db, \"users\", session.user.uid), {\n                username: session.user.username,\n                image: session.user.image,\n                email: session.user.email,\n                name: session.user.name,\n                timestamp: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.serverTimestamp)()\n            });\n            return session;\n        }\n    }\n}));\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZ0M7QUFDdUI7QUFDVTtBQUMzQjtBQUV0QyxpRUFBZUEsZ0RBQVEsQ0FBQztJQUN0QixpREFBaUQ7SUFDakRNLFNBQVMsRUFBRTtRQUNUTCxpRUFBYyxDQUFDO1lBQ2JNLFFBQVEsRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLGdCQUFnQjtZQUN0Q0MsWUFBWSxFQUFFSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0csb0JBQW9CO1NBQy9DLENBQUM7S0FFSDtJQUVEQyxLQUFLLEVBQUU7UUFDTEMsTUFBTSxFQUFFLGNBQWM7S0FDdkI7SUFDREMsU0FBUyxFQUFFO1FBQ1QsTUFBTUMsT0FBTyxFQUFDLEVBQUVBLE9BQU8sR0FBRUMsS0FBSyxHQUFFQyxJQUFJLEdBQUUsRUFBRTtZQUN0Q0YsT0FBTyxDQUFDRSxJQUFJLENBQUNDLFFBQVEsR0FBR0gsT0FBTyxDQUFDRSxJQUFJLENBQUNFLElBQUksQ0FDdENDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FDVkMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUNSQyxpQkFBaUIsRUFBRTtZQUV0QlAsT0FBTyxDQUFDRSxJQUFJLENBQUNNLEdBQUcsR0FBR1AsS0FBSyxDQUFDUSxHQUFHO1lBRTVCLE1BQU1yQiwwREFBTSxDQUFDRix1REFBRyxDQUFDRyx5Q0FBRSxFQUFFLE9BQU8sRUFBRVcsT0FBTyxDQUFDRSxJQUFJLENBQUNNLEdBQUcsQ0FBQyxFQUFFO2dCQUMvQ0wsUUFBUSxFQUFFSCxPQUFPLENBQUNFLElBQUksQ0FBQ0MsUUFBUTtnQkFDL0JPLEtBQUssRUFBRVYsT0FBTyxDQUFDRSxJQUFJLENBQUNRLEtBQUs7Z0JBQ3pCQyxLQUFLLEVBQUVYLE9BQU8sQ0FBQ0UsSUFBSSxDQUFDUyxLQUFLO2dCQUN6QlAsSUFBSSxFQUFFSixPQUFPLENBQUNFLElBQUksQ0FBQ0UsSUFBSTtnQkFDdkJRLFNBQVMsRUFBRXpCLG1FQUFlLEVBQUU7YUFDN0IsQ0FBQztZQUNGLE9BQU9hLE9BQU87U0FDZjtLQUNGO0NBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0uanM/NTI3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSAnbmV4dC1hdXRoJ1xuaW1wb3J0IEdvb2dsZVByb3ZpZGVyIGZyb20gJ25leHQtYXV0aC9wcm92aWRlcnMvZ29vZ2xlJ1xuaW1wb3J0IHsgZG9jLCBzZXJ2ZXJUaW1lc3RhbXAsIHNldERvYyB9IGZyb20gJ2ZpcmViYXNlL2ZpcmVzdG9yZSdcbmltcG9ydCB7IGRiIH0gZnJvbSAnLi4vLi4vLi4vZmlyZWJhc2UnXG5cbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKHtcbiAgLy8gQ29uZmlndXJlIG9uZSBvciBtb3JlIGF1dGhlbnRpY2F0aW9uIHByb3ZpZGVyc1xuICBwcm92aWRlcnM6IFtcbiAgICBHb29nbGVQcm92aWRlcih7XG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9JRCxcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9TRUNSRVQsXG4gICAgfSksXG4gICAgLy8gLi4uYWRkIG1vcmUgcHJvdmlkZXJzIGhlcmVcbiAgXSxcblxuICBwYWdlczoge1xuICAgIHNpZ25JbjogJy9hdXRoL3NpZ25pbicsXG4gIH0sXG4gIGNhbGxiYWNrczoge1xuICAgIGFzeW5jIHNlc3Npb24oeyBzZXNzaW9uLCB0b2tlbiwgdXNlciB9KSB7XG4gICAgICBzZXNzaW9uLnVzZXIudXNlcm5hbWUgPSBzZXNzaW9uLnVzZXIubmFtZVxuICAgICAgICAuc3BsaXQoJyAnKVxuICAgICAgICAuam9pbignJylcbiAgICAgICAgLnRvTG9jYWxlTG93ZXJDYXNlKClcblxuICAgICAgc2Vzc2lvbi51c2VyLnVpZCA9IHRva2VuLnN1YlxuXG4gICAgICBhd2FpdCBzZXREb2MoZG9jKGRiLCAndXNlcnMnLCBzZXNzaW9uLnVzZXIudWlkKSwge1xuICAgICAgICB1c2VybmFtZTogc2Vzc2lvbi51c2VyLnVzZXJuYW1lLFxuICAgICAgICBpbWFnZTogc2Vzc2lvbi51c2VyLmltYWdlLFxuICAgICAgICBlbWFpbDogc2Vzc2lvbi51c2VyLmVtYWlsLFxuICAgICAgICBuYW1lOiBzZXNzaW9uLnVzZXIubmFtZSxcbiAgICAgICAgdGltZXN0YW1wOiBzZXJ2ZXJUaW1lc3RhbXAoKSxcbiAgICAgIH0pXG4gICAgICByZXR1cm4gc2Vzc2lvblxuICAgIH0sXG4gIH0sXG59KVxuIl0sIm5hbWVzIjpbIk5leHRBdXRoIiwiR29vZ2xlUHJvdmlkZXIiLCJkb2MiLCJzZXJ2ZXJUaW1lc3RhbXAiLCJzZXREb2MiLCJkYiIsInByb3ZpZGVycyIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIkdPT0dMRV9DTElFTlRfSUQiLCJjbGllbnRTZWNyZXQiLCJHT09HTEVfQ0xJRU5UX1NFQ1JFVCIsInBhZ2VzIiwic2lnbkluIiwiY2FsbGJhY2tzIiwic2Vzc2lvbiIsInRva2VuIiwidXNlciIsInVzZXJuYW1lIiwibmFtZSIsInNwbGl0Iiwiam9pbiIsInRvTG9jYWxlTG93ZXJDYXNlIiwidWlkIiwic3ViIiwiaW1hZ2UiLCJlbWFpbCIsInRpbWVzdGFtcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();