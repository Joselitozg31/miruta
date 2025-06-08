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
exports.id = "app/api/dashboard/rutas/route";
exports.ids = ["app/api/dashboard/rutas/route"];
exports.modules = {

/***/ "(rsc)/./node_modules/mysql2/lib sync recursive ^cardinal.*$":
/*!****************************************************!*\
  !*** ./node_modules/mysql2/lib/ sync ^cardinal.*$ ***!
  \****************************************************/
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = "(rsc)/./node_modules/mysql2/lib sync recursive ^cardinal.*$";
module.exports = webpackEmptyContext;

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fdashboard%2Frutas%2Froute&page=%2Fapi%2Fdashboard%2Frutas%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fdashboard%2Frutas%2Froute.js&appDir=C%3A%5Cxampp%5Chtdocs%5CDesarrolo%20servidor%5Cmiruta%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5Cxampp%5Chtdocs%5CDesarrolo%20servidor%5Cmiruta&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fdashboard%2Frutas%2Froute&page=%2Fapi%2Fdashboard%2Frutas%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fdashboard%2Frutas%2Froute.js&appDir=C%3A%5Cxampp%5Chtdocs%5CDesarrolo%20servidor%5Cmiruta%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5Cxampp%5Chtdocs%5CDesarrolo%20servidor%5Cmiruta&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_xampp_htdocs_Desarrolo_servidor_miruta_src_app_api_dashboard_rutas_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/dashboard/rutas/route.js */ \"(rsc)/./src/app/api/dashboard/rutas/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/dashboard/rutas/route\",\n        pathname: \"/api/dashboard/rutas\",\n        filename: \"route\",\n        bundlePath: \"app/api/dashboard/rutas/route\"\n    },\n    resolvedPagePath: \"C:\\\\xampp\\\\htdocs\\\\Desarrolo servidor\\\\miruta\\\\src\\\\app\\\\api\\\\dashboard\\\\rutas\\\\route.js\",\n    nextConfigOutput,\n    userland: C_xampp_htdocs_Desarrolo_servidor_miruta_src_app_api_dashboard_rutas_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZkYXNoYm9hcmQlMkZydXRhcyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGZGFzaGJvYXJkJTJGcnV0YXMlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZkYXNoYm9hcmQlMkZydXRhcyUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDeGFtcHAlNUNodGRvY3MlNUNEZXNhcnJvbG8lMjBzZXJ2aWRvciU1Q21pcnV0YSU1Q3NyYyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q3hhbXBwJTVDaHRkb2NzJTVDRGVzYXJyb2xvJTIwc2Vydmlkb3IlNUNtaXJ1dGEmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ3dDO0FBQ3JIO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFx4YW1wcFxcXFxodGRvY3NcXFxcRGVzYXJyb2xvIHNlcnZpZG9yXFxcXG1pcnV0YVxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxkYXNoYm9hcmRcXFxccnV0YXNcXFxccm91dGUuanNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2Rhc2hib2FyZC9ydXRhcy9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2Rhc2hib2FyZC9ydXRhc1wiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvZGFzaGJvYXJkL3J1dGFzL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxceGFtcHBcXFxcaHRkb2NzXFxcXERlc2Fycm9sbyBzZXJ2aWRvclxcXFxtaXJ1dGFcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcZGFzaGJvYXJkXFxcXHJ1dGFzXFxcXHJvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fdashboard%2Frutas%2Froute&page=%2Fapi%2Fdashboard%2Frutas%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fdashboard%2Frutas%2Froute.js&appDir=C%3A%5Cxampp%5Chtdocs%5CDesarrolo%20servidor%5Cmiruta%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5Cxampp%5Chtdocs%5CDesarrolo%20servidor%5Cmiruta&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./src/app/api/_db.js":
/*!****************************!*\
  !*** ./src/app/api/_db.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getMysqlConfig: () => (/* binding */ getMysqlConfig)\n/* harmony export */ });\n// Carga dotenv solo en desarrollo (Next.js ya lo hace en producción)\nif (true) {\n    // eslint-disable-next-line @typescript-eslint/no-var-requires\n    // Carga las variables de entorno desde un archivo .env\n    (__webpack_require__(/*! dotenv */ \"(rsc)/./node_modules/dotenv/lib/main.js\").config)();\n}\n// Configuración de conexión a MySQL\nfunction getMysqlConfig() {\n    return {\n        host: process.env.DB_HOST || 'localhost',\n        user: process.env.DB_USERNAME || 'root',\n        password: process.env.DB_PASSWORD || '',\n        database: process.env.DB_DATABASE || 'miruta',\n        port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 3306\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9fZGIuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLHFFQUFxRTtBQUNyRSxJQUFJQSxJQUFxQyxFQUFFO0lBQ3pDLDhEQUE4RDtJQUM5RCx1REFBdUQ7SUFDdkRDLHFGQUF3QjtBQUMxQjtBQUVBLG9DQUFvQztBQUM3QixTQUFTRTtJQUNkLE9BQU87UUFDTEMsTUFBTUosUUFBUUssR0FBRyxDQUFDQyxPQUFPLElBQUk7UUFDN0JDLE1BQU1QLFFBQVFLLEdBQUcsQ0FBQ0csV0FBVyxJQUFJO1FBQ2pDQyxVQUFVVCxRQUFRSyxHQUFHLENBQUNLLFdBQVcsSUFBSTtRQUNyQ0MsVUFBVVgsUUFBUUssR0FBRyxDQUFDTyxXQUFXLElBQUk7UUFDckNDLE1BQU1iLFFBQVFLLEdBQUcsQ0FBQ1MsT0FBTyxHQUFHQyxPQUFPZixRQUFRSyxHQUFHLENBQUNTLE9BQU8sSUFBSTtJQUM1RDtBQUNGIiwic291cmNlcyI6WyJDOlxceGFtcHBcXGh0ZG9jc1xcRGVzYXJyb2xvIHNlcnZpZG9yXFxtaXJ1dGFcXHNyY1xcYXBwXFxhcGlcXF9kYi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDYXJnYSBkb3RlbnYgc29sbyBlbiBkZXNhcnJvbGxvIChOZXh0LmpzIHlhIGxvIGhhY2UgZW4gcHJvZHVjY2nDs24pXHJcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby12YXItcmVxdWlyZXNcclxuICAvLyBDYXJnYSBsYXMgdmFyaWFibGVzIGRlIGVudG9ybm8gZGVzZGUgdW4gYXJjaGl2byAuZW52XHJcbiAgcmVxdWlyZSgnZG90ZW52JykuY29uZmlnKCk7XHJcbn1cclxuXHJcbi8vIENvbmZpZ3VyYWNpw7NuIGRlIGNvbmV4acOzbiBhIE15U1FMXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRNeXNxbENvbmZpZygpIHtcclxuICByZXR1cm4ge1xyXG4gICAgaG9zdDogcHJvY2Vzcy5lbnYuREJfSE9TVCB8fCAnbG9jYWxob3N0JyxcclxuICAgIHVzZXI6IHByb2Nlc3MuZW52LkRCX1VTRVJOQU1FIHx8ICdyb290JyxcclxuICAgIHBhc3N3b3JkOiBwcm9jZXNzLmVudi5EQl9QQVNTV09SRCB8fCAnJyxcclxuICAgIGRhdGFiYXNlOiBwcm9jZXNzLmVudi5EQl9EQVRBQkFTRSB8fCAnbWlydXRhJyxcclxuICAgIHBvcnQ6IHByb2Nlc3MuZW52LkRCX1BPUlQgPyBOdW1iZXIocHJvY2Vzcy5lbnYuREJfUE9SVCkgOiAzMzA2LFxyXG4gIH07XHJcbn1cclxuIl0sIm5hbWVzIjpbInByb2Nlc3MiLCJyZXF1aXJlIiwiY29uZmlnIiwiZ2V0TXlzcWxDb25maWciLCJob3N0IiwiZW52IiwiREJfSE9TVCIsInVzZXIiLCJEQl9VU0VSTkFNRSIsInBhc3N3b3JkIiwiREJfUEFTU1dPUkQiLCJkYXRhYmFzZSIsIkRCX0RBVEFCQVNFIiwicG9ydCIsIkRCX1BPUlQiLCJOdW1iZXIiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/_db.js\n");

/***/ }),

/***/ "(rsc)/./src/app/api/dashboard/rutas/route.js":
/*!**********************************************!*\
  !*** ./src/app/api/dashboard/rutas/route.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DELETE: () => (/* binding */ DELETE),\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST),\n/* harmony export */   PUT: () => (/* binding */ PUT)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mysql2/promise */ \"(rsc)/./node_modules/mysql2/promise.js\");\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_db */ \"(rsc)/./src/app/api/_db.js\");\n\n\n\nasync function GET() {\n    const connection = await mysql2_promise__WEBPACK_IMPORTED_MODULE_1__.createConnection((0,_db__WEBPACK_IMPORTED_MODULE_2__.getMysqlConfig)());\n    const [rows] = await connection.execute(`SELECT idrutas, nombre, descripcion, origen, destino, horaInicio, horaFin FROM rutas`);\n    await connection.end();\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(rows);\n}\nasync function POST(request) {\n    try {\n        const { nombre, descripcion, origen, destino, horaInicio, horaFin } = await request.json();\n        if (!nombre || !descripcion || !origen || !destino || !horaInicio || !horaFin) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                message: 'Faltan campos obligatorios'\n            }, {\n                status: 400\n            });\n        }\n        const connection = await mysql2_promise__WEBPACK_IMPORTED_MODULE_1__.createConnection((0,_db__WEBPACK_IMPORTED_MODULE_2__.getMysqlConfig)());\n        // Asegúrate de que los campos coincidan con los de la tabla y que no haya errores de tipos\n        await connection.execute(`INSERT INTO rutas (nombre, descripcion, origen, destino, horaInicio, horaFin) VALUES (?, ?, ?, ?, ?, ?)`, [\n            nombre,\n            descripcion,\n            origen,\n            destino,\n            horaInicio,\n            horaFin\n        ]);\n        await connection.end();\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: 'Ruta añadida correctamente'\n        });\n    } catch (error) {\n        // Devuelve el error SQL para depuración si estás en desarrollo\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: 'Error al añadir ruta',\n            error: error.message\n        }, {\n            status: 500\n        });\n    }\n}\n// Actualizar ruta (PUT)\nasync function PUT(request) {\n    try {\n        const { idrutas, nombre, descripcion, origen, destino, horaInicio, horaFin } = await request.json();\n        if (!idrutas || !nombre || !descripcion || !origen || !destino || !horaInicio || !horaFin) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                message: 'Faltan campos obligatorios'\n            }, {\n                status: 400\n            });\n        }\n        const connection = await mysql2_promise__WEBPACK_IMPORTED_MODULE_1__.createConnection((0,_db__WEBPACK_IMPORTED_MODULE_2__.getMysqlConfig)());\n        await connection.execute(`UPDATE rutas SET nombre=?, descripcion=?, origen=?, destino=?, horaInicio=?, horaFin=? WHERE idrutas=?`, [\n            nombre,\n            descripcion,\n            origen,\n            destino,\n            horaInicio,\n            horaFin,\n            idrutas\n        ]);\n        await connection.end();\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: 'Ruta actualizada correctamente'\n        });\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: 'Error al actualizar ruta',\n            error: error.message\n        }, {\n            status: 500\n        });\n    }\n}\n// Borrar ruta (DELETE)\nasync function DELETE(request) {\n    try {\n        // Asegura que el body es JSON y no vacío\n        let idrutas = null;\n        try {\n            const body = await request.json();\n            idrutas = Number(body.idrutas); // Asegura que sea número\n        } catch (err) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                message: 'Falta el id de la ruta o el body no es JSON',\n                error: err?.message\n            }, {\n                status: 400\n            });\n        }\n        if (!idrutas || isNaN(idrutas)) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                message: 'Falta el id de la ruta o el id no es válido'\n            }, {\n                status: 400\n            });\n        }\n        const connection = await mysql2_promise__WEBPACK_IMPORTED_MODULE_1__.createConnection((0,_db__WEBPACK_IMPORTED_MODULE_2__.getMysqlConfig)());\n        // Comprueba si la ruta existe antes de intentar borrar\n        const [rows] = await connection.execute(`SELECT idrutas FROM rutas WHERE idrutas=?`, [\n            idrutas\n        ]);\n        if (rows.length === 0) {\n            await connection.end();\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                message: 'No se encontró la ruta para eliminar'\n            }, {\n                status: 404\n            });\n        }\n        const [result] = await connection.execute(`DELETE FROM rutas WHERE idrutas=?`, [\n            idrutas\n        ]);\n        await connection.end();\n        if (result.affectedRows === 0) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                message: 'No se pudo eliminar la ruta (puede que tenga dependencias en otras tablas)'\n            }, {\n                status: 409\n            });\n        }\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: 'Ruta eliminada correctamente'\n        });\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: 'Error al eliminar ruta',\n            error: error.message\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9kYXNoYm9hcmQvcnV0YXMvcm91dGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUEyQztBQUNSO0FBQ1E7QUFFcEMsZUFBZUc7SUFDcEIsTUFBTUMsYUFBYSxNQUFNSCw0REFBc0IsQ0FBQ0MsbURBQWNBO0lBRTlELE1BQU0sQ0FBQ0ksS0FBSyxHQUFHLE1BQU1GLFdBQVdHLE9BQU8sQ0FDckMsQ0FBQyxvRkFBb0YsQ0FBQztJQUd4RixNQUFNSCxXQUFXSSxHQUFHO0lBRXBCLE9BQU9SLHFEQUFZQSxDQUFDUyxJQUFJLENBQUNIO0FBQzNCO0FBRU8sZUFBZUksS0FBS0MsT0FBTztJQUNoQyxJQUFJO1FBQ0YsTUFBTSxFQUFFQyxNQUFNLEVBQUVDLFdBQVcsRUFBRUMsTUFBTSxFQUFFQyxPQUFPLEVBQUVDLFVBQVUsRUFBRUMsT0FBTyxFQUFFLEdBQUcsTUFBTU4sUUFBUUYsSUFBSTtRQUV4RixJQUFJLENBQUNHLFVBQVUsQ0FBQ0MsZUFBZSxDQUFDQyxVQUFVLENBQUNDLFdBQVcsQ0FBQ0MsY0FBYyxDQUFDQyxTQUFTO1lBQzdFLE9BQU9qQixxREFBWUEsQ0FBQ1MsSUFBSSxDQUFDO2dCQUFFUyxTQUFTO1lBQTZCLEdBQUc7Z0JBQUVDLFFBQVE7WUFBSTtRQUNwRjtRQUVBLE1BQU1mLGFBQWEsTUFBTUgsNERBQXNCLENBQUNDLG1EQUFjQTtRQUU5RCwyRkFBMkY7UUFDM0YsTUFBTUUsV0FBV0csT0FBTyxDQUN0QixDQUFDLHVHQUF1RyxDQUFDLEVBQ3pHO1lBQUNLO1lBQVFDO1lBQWFDO1lBQVFDO1lBQVNDO1lBQVlDO1NBQVE7UUFHN0QsTUFBTWIsV0FBV0ksR0FBRztRQUVwQixPQUFPUixxREFBWUEsQ0FBQ1MsSUFBSSxDQUFDO1lBQUVTLFNBQVM7UUFBNkI7SUFDbkUsRUFBRSxPQUFPRSxPQUFPO1FBQ2QsK0RBQStEO1FBQy9ELE9BQU9wQixxREFBWUEsQ0FBQ1MsSUFBSSxDQUFDO1lBQUVTLFNBQVM7WUFBd0JFLE9B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RztBQUNGIiwic291cmNlcyI6WyJDOlxceGFtcHBcXGh0ZG9jc1xcRGVzYXJyb2xvIHNlcnZpZG9yXFxtaXJ1dGFcXHNyY1xcYXBwXFxhcGlcXGRhc2hib2FyZFxccnV0YXNcXHJvdXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJztcclxuaW1wb3J0IG15c3FsIGZyb20gJ215c3FsMi9wcm9taXNlJztcclxuaW1wb3J0IHsgZ2V0TXlzcWxDb25maWcgfSBmcm9tICcuLi8uLi9fZGInO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVCgpIHtcclxuICBjb25zdCBjb25uZWN0aW9uID0gYXdhaXQgbXlzcWwuY3JlYXRlQ29ubmVjdGlvbihnZXRNeXNxbENvbmZpZygpKTtcclxuXHJcbiAgY29uc3QgW3Jvd3NdID0gYXdhaXQgY29ubmVjdGlvbi5leGVjdXRlKFxyXG4gICAgYFNFTEVDVCBpZHJ1dGFzLCBub21icmUsIGRlc2NyaXBjaW9uLCBvcmlnZW4sIGRlc3Rpbm8sIGhvcmFJbmljaW8sIGhvcmFGaW4gRlJPTSBydXRhc2BcclxuICApO1xyXG5cclxuICBhd2FpdCBjb25uZWN0aW9uLmVuZCgpO1xyXG5cclxuICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24ocm93cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcXVlc3QpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBub21icmUsIGRlc2NyaXBjaW9uLCBvcmlnZW4sIGRlc3Rpbm8sIGhvcmFJbmljaW8sIGhvcmFGaW4gfSA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xyXG5cclxuICAgIGlmICghbm9tYnJlIHx8ICFkZXNjcmlwY2lvbiB8fCAhb3JpZ2VuIHx8ICFkZXN0aW5vIHx8ICFob3JhSW5pY2lvIHx8ICFob3JhRmluKSB7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IG1lc3NhZ2U6ICdGYWx0YW4gY2FtcG9zIG9ibGlnYXRvcmlvcycgfSwgeyBzdGF0dXM6IDQwMCB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjb25uZWN0aW9uID0gYXdhaXQgbXlzcWwuY3JlYXRlQ29ubmVjdGlvbihnZXRNeXNxbENvbmZpZygpKTtcclxuXHJcbiAgICAvLyBBc2Vnw7pyYXRlIGRlIHF1ZSBsb3MgY2FtcG9zIGNvaW5jaWRhbiBjb24gbG9zIGRlIGxhIHRhYmxhIHkgcXVlIG5vIGhheWEgZXJyb3JlcyBkZSB0aXBvc1xyXG4gICAgYXdhaXQgY29ubmVjdGlvbi5leGVjdXRlKFxyXG4gICAgICBgSU5TRVJUIElOVE8gcnV0YXMgKG5vbWJyZSwgZGVzY3JpcGNpb24sIG9yaWdlbiwgZGVzdGlubywgaG9yYUluaWNpbywgaG9yYUZpbikgVkFMVUVTICg/LCA/LCA/LCA/LCA/LCA/KWAsXHJcbiAgICAgIFtub21icmUsIGRlc2NyaXBjaW9uLCBvcmlnZW4sIGRlc3Rpbm8sIGhvcmFJbmljaW8sIGhvcmFGaW5dXHJcbiAgICApO1xyXG5cclxuICAgIGF3YWl0IGNvbm5lY3Rpb24uZW5kKCk7XHJcblxyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgbWVzc2FnZTogJ1J1dGEgYcOxYWRpZGEgY29ycmVjdGFtZW50ZScgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIC8vIERldnVlbHZlIGVsIGVycm9yIFNRTCBwYXJhIGRlcHVyYWNpw7NuIHNpIGVzdMOhcyBlbiBkZXNhcnJvbGxvXHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBtZXNzYWdlOiAnRXJyb3IgYWwgYcOxYWRpciBydXRhJywgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfSwgeyBzdGF0dXM6IDUwMCB9KTtcclxuICB9XHJcbn1cclxuXHJcbi8vIEFjdHVhbGl6YXIgcnV0YSAoUFVUKVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUFVUKHJlcXVlc3QpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBpZHJ1dGFzLCBub21icmUsIGRlc2NyaXBjaW9uLCBvcmlnZW4sIGRlc3Rpbm8sIGhvcmFJbmljaW8sIGhvcmFGaW4gfSA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xyXG5cclxuICAgIGlmICghaWRydXRhcyB8fCAhbm9tYnJlIHx8ICFkZXNjcmlwY2lvbiB8fCAhb3JpZ2VuIHx8ICFkZXN0aW5vIHx8ICFob3JhSW5pY2lvIHx8ICFob3JhRmluKSB7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IG1lc3NhZ2U6ICdGYWx0YW4gY2FtcG9zIG9ibGlnYXRvcmlvcycgfSwgeyBzdGF0dXM6IDQwMCB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjb25uZWN0aW9uID0gYXdhaXQgbXlzcWwuY3JlYXRlQ29ubmVjdGlvbihnZXRNeXNxbENvbmZpZygpKTtcclxuXHJcbiAgICBhd2FpdCBjb25uZWN0aW9uLmV4ZWN1dGUoXHJcbiAgICAgIGBVUERBVEUgcnV0YXMgU0VUIG5vbWJyZT0/LCBkZXNjcmlwY2lvbj0/LCBvcmlnZW49PywgZGVzdGlubz0/LCBob3JhSW5pY2lvPT8sIGhvcmFGaW49PyBXSEVSRSBpZHJ1dGFzPT9gLFxyXG4gICAgICBbbm9tYnJlLCBkZXNjcmlwY2lvbiwgb3JpZ2VuLCBkZXN0aW5vLCBob3JhSW5pY2lvLCBob3JhRmluLCBpZHJ1dGFzXVxyXG4gICAgKTtcclxuXHJcbiAgICBhd2FpdCBjb25uZWN0aW9uLmVuZCgpO1xyXG5cclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IG1lc3NhZ2U6ICdSdXRhIGFjdHVhbGl6YWRhIGNvcnJlY3RhbWVudGUnIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBtZXNzYWdlOiAnRXJyb3IgYWwgYWN0dWFsaXphciBydXRhJywgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfSwgeyBzdGF0dXM6IDUwMCB9KTtcclxuICB9XHJcbn1cclxuXHJcbi8vIEJvcnJhciBydXRhIChERUxFVEUpXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBERUxFVEUocmVxdWVzdCkge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBBc2VndXJhIHF1ZSBlbCBib2R5IGVzIEpTT04geSBubyB2YWPDrW9cclxuICAgIGxldCBpZHJ1dGFzID0gbnVsbDtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGJvZHkgPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcclxuICAgICAgaWRydXRhcyA9IE51bWJlcihib2R5LmlkcnV0YXMpOyAvLyBBc2VndXJhIHF1ZSBzZWEgbsO6bWVyb1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IG1lc3NhZ2U6ICdGYWx0YSBlbCBpZCBkZSBsYSBydXRhIG8gZWwgYm9keSBubyBlcyBKU09OJywgZXJyb3I6IGVycj8ubWVzc2FnZSB9LCB7IHN0YXR1czogNDAwIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghaWRydXRhcyB8fCBpc05hTihpZHJ1dGFzKSkge1xyXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBtZXNzYWdlOiAnRmFsdGEgZWwgaWQgZGUgbGEgcnV0YSBvIGVsIGlkIG5vIGVzIHbDoWxpZG8nIH0sIHsgc3RhdHVzOiA0MDAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY29ubmVjdGlvbiA9IGF3YWl0IG15c3FsLmNyZWF0ZUNvbm5lY3Rpb24oZ2V0TXlzcWxDb25maWcoKSk7XHJcblxyXG4gICAgLy8gQ29tcHJ1ZWJhIHNpIGxhIHJ1dGEgZXhpc3RlIGFudGVzIGRlIGludGVudGFyIGJvcnJhclxyXG4gICAgY29uc3QgW3Jvd3NdID0gYXdhaXQgY29ubmVjdGlvbi5leGVjdXRlKFxyXG4gICAgICBgU0VMRUNUIGlkcnV0YXMgRlJPTSBydXRhcyBXSEVSRSBpZHJ1dGFzPT9gLFxyXG4gICAgICBbaWRydXRhc11cclxuICAgICk7XHJcbiAgICBpZiAocm93cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgYXdhaXQgY29ubmVjdGlvbi5lbmQoKTtcclxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgbWVzc2FnZTogJ05vIHNlIGVuY29udHLDsyBsYSBydXRhIHBhcmEgZWxpbWluYXInIH0sIHsgc3RhdHVzOiA0MDQgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgW3Jlc3VsdF0gPSBhd2FpdCBjb25uZWN0aW9uLmV4ZWN1dGUoXHJcbiAgICAgIGBERUxFVEUgRlJPTSBydXRhcyBXSEVSRSBpZHJ1dGFzPT9gLFxyXG4gICAgICBbaWRydXRhc11cclxuICAgICk7XHJcblxyXG4gICAgYXdhaXQgY29ubmVjdGlvbi5lbmQoKTtcclxuXHJcbiAgICBpZiAocmVzdWx0LmFmZmVjdGVkUm93cyA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBtZXNzYWdlOiAnTm8gc2UgcHVkbyBlbGltaW5hciBsYSBydXRhIChwdWVkZSBxdWUgdGVuZ2EgZGVwZW5kZW5jaWFzIGVuIG90cmFzIHRhYmxhcyknIH0sIHsgc3RhdHVzOiA0MDkgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgbWVzc2FnZTogJ1J1dGEgZWxpbWluYWRhIGNvcnJlY3RhbWVudGUnIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBtZXNzYWdlOiAnRXJyb3IgYWwgZWxpbWluYXIgcnV0YScsIGVycm9yOiBlcnJvci5tZXNzYWdlIH0sIHsgc3RhdHVzOiA1MDAgfSk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJteXNxbCIsImdldE15c3FsQ29uZmlnIiwiR0VUIiwiY29ubmVjdGlvbiIsImNyZWF0ZUNvbm5lY3Rpb24iLCJyb3dzIiwiZXhlY3V0ZSIsImVuZCIsImpzb24iLCJQT1NUIiwicmVxdWVzdCIsIm5vbWJyZSIsImRlc2NyaXBjaW9uIiwib3JpZ2VuIiwiZGVzdGlubyIsImhvcmFJbmljaW8iLCJob3JhRmluIiwibWVzc2FnZSIsInN0YXR1cyIsImVycm9yIiwiUFVUIiwiaWRydXRhcyIsIkRFTEVURSIsImJvZHkiLCJOdW1iZXIiLCJlcnIiLCJpc05hTiIsImxlbmd0aCIsInJlc3VsdCIsImFmZmVjdGVkUm93cyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/dashboard/rutas/route.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("net");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "process":
/*!**************************!*\
  !*** external "process" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("process");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "string_decoder":
/*!*********************************!*\
  !*** external "string_decoder" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("string_decoder");

/***/ }),

/***/ "timers":
/*!*************************!*\
  !*** external "timers" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("timers");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("tls");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/mysql2","vendor-chunks/aws-ssl-profiles","vendor-chunks/iconv-lite","vendor-chunks/long","vendor-chunks/named-placeholders","vendor-chunks/denque","vendor-chunks/dotenv","vendor-chunks/is-property","vendor-chunks/lru.min","vendor-chunks/sqlstring","vendor-chunks/seq-queue","vendor-chunks/generate-function","vendor-chunks/safer-buffer"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fdashboard%2Frutas%2Froute&page=%2Fapi%2Fdashboard%2Frutas%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fdashboard%2Frutas%2Froute.js&appDir=C%3A%5Cxampp%5Chtdocs%5CDesarrolo%20servidor%5Cmiruta%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5Cxampp%5Chtdocs%5CDesarrolo%20servidor%5Cmiruta&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();