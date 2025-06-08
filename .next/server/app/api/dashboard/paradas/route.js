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
exports.id = "app/api/dashboard/paradas/route";
exports.ids = ["app/api/dashboard/paradas/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fdashboard%2Fparadas%2Froute&page=%2Fapi%2Fdashboard%2Fparadas%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fdashboard%2Fparadas%2Froute.js&appDir=C%3A%5Cxampp%5Chtdocs%5CDesarrolo%20servidor%5Cmiruta%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5Cxampp%5Chtdocs%5CDesarrolo%20servidor%5Cmiruta&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fdashboard%2Fparadas%2Froute&page=%2Fapi%2Fdashboard%2Fparadas%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fdashboard%2Fparadas%2Froute.js&appDir=C%3A%5Cxampp%5Chtdocs%5CDesarrolo%20servidor%5Cmiruta%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5Cxampp%5Chtdocs%5CDesarrolo%20servidor%5Cmiruta&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_xampp_htdocs_Desarrolo_servidor_miruta_src_app_api_dashboard_paradas_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/dashboard/paradas/route.js */ \"(rsc)/./src/app/api/dashboard/paradas/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/dashboard/paradas/route\",\n        pathname: \"/api/dashboard/paradas\",\n        filename: \"route\",\n        bundlePath: \"app/api/dashboard/paradas/route\"\n    },\n    resolvedPagePath: \"C:\\\\xampp\\\\htdocs\\\\Desarrolo servidor\\\\miruta\\\\src\\\\app\\\\api\\\\dashboard\\\\paradas\\\\route.js\",\n    nextConfigOutput,\n    userland: C_xampp_htdocs_Desarrolo_servidor_miruta_src_app_api_dashboard_paradas_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZkYXNoYm9hcmQlMkZwYXJhZGFzJTJGcm91dGUmcGFnZT0lMkZhcGklMkZkYXNoYm9hcmQlMkZwYXJhZGFzJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGZGFzaGJvYXJkJTJGcGFyYWRhcyUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDeGFtcHAlNUNodGRvY3MlNUNEZXNhcnJvbG8lMjBzZXJ2aWRvciU1Q21pcnV0YSU1Q3NyYyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q3hhbXBwJTVDaHRkb2NzJTVDRGVzYXJyb2xvJTIwc2Vydmlkb3IlNUNtaXJ1dGEmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQzBDO0FBQ3ZIO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFx4YW1wcFxcXFxodGRvY3NcXFxcRGVzYXJyb2xvIHNlcnZpZG9yXFxcXG1pcnV0YVxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxkYXNoYm9hcmRcXFxccGFyYWRhc1xcXFxyb3V0ZS5qc1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvZGFzaGJvYXJkL3BhcmFkYXMvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9kYXNoYm9hcmQvcGFyYWRhc1wiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvZGFzaGJvYXJkL3BhcmFkYXMvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFx4YW1wcFxcXFxodGRvY3NcXFxcRGVzYXJyb2xvIHNlcnZpZG9yXFxcXG1pcnV0YVxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxkYXNoYm9hcmRcXFxccGFyYWRhc1xcXFxyb3V0ZS5qc1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fdashboard%2Fparadas%2Froute&page=%2Fapi%2Fdashboard%2Fparadas%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fdashboard%2Fparadas%2Froute.js&appDir=C%3A%5Cxampp%5Chtdocs%5CDesarrolo%20servidor%5Cmiruta%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5Cxampp%5Chtdocs%5CDesarrolo%20servidor%5Cmiruta&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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

/***/ "(rsc)/./src/app/api/dashboard/paradas/route.js":
/*!************************************************!*\
  !*** ./src/app/api/dashboard/paradas/route.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DELETE: () => (/* binding */ DELETE),\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST),\n/* harmony export */   PUT: () => (/* binding */ PUT)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mysql2/promise */ \"(rsc)/./node_modules/mysql2/promise.js\");\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_db */ \"(rsc)/./src/app/api/_db.js\");\n\n\n\nasync function GET() {\n    const connection = await mysql2_promise__WEBPACK_IMPORTED_MODULE_1__.createConnection((0,_db__WEBPACK_IMPORTED_MODULE_2__.getMysqlConfig)());\n    const [rows] = await connection.execute(`SELECT idparadas, rutaId, nombre, latitud, longitud, orden FROM paradas`);\n    await connection.end();\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(rows);\n}\nasync function POST(request) {\n    try {\n        const { rutaId, nombre, latitud, longitud, orden } = await request.json();\n        if (!rutaId || !nombre || !latitud || !longitud || !orden) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                message: 'Faltan campos obligatorios'\n            }, {\n                status: 400\n            });\n        }\n        const connection = await mysql2_promise__WEBPACK_IMPORTED_MODULE_1__.createConnection((0,_db__WEBPACK_IMPORTED_MODULE_2__.getMysqlConfig)());\n        await connection.execute(`INSERT INTO paradas (rutaId, nombre, latitud, longitud, orden) VALUES (?, ?, ?, ?, ?)`, [\n            rutaId,\n            nombre,\n            latitud,\n            longitud,\n            orden\n        ]);\n        await connection.end();\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: 'Parada añadida correctamente'\n        });\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: 'Error al añadir parada',\n            error: error.message\n        }, {\n            status: 500\n        });\n    }\n}\n// Actualizar parada (PUT)\nasync function PUT(request) {\n    try {\n        const { idparadas, rutaId, nombre, latitud, longitud, orden } = await request.json();\n        if (!idparadas || !rutaId || !nombre || !latitud || !longitud || !orden) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                message: 'Faltan campos obligatorios'\n            }, {\n                status: 400\n            });\n        }\n        const connection = await mysql2_promise__WEBPACK_IMPORTED_MODULE_1__.createConnection((0,_db__WEBPACK_IMPORTED_MODULE_2__.getMysqlConfig)());\n        await connection.execute(`UPDATE paradas SET rutaId=?, nombre=?, latitud=?, longitud=?, orden=? WHERE idparadas=?`, [\n            rutaId,\n            nombre,\n            latitud,\n            longitud,\n            orden,\n            idparadas\n        ]);\n        await connection.end();\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: 'Parada actualizada correctamente'\n        });\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: 'Error al actualizar parada',\n            error: error.message\n        }, {\n            status: 500\n        });\n    }\n}\n// Borrar parada (DELETE)\nasync function DELETE(request) {\n    try {\n        let idparadas = null;\n        try {\n            const body = await request.json();\n            idparadas = Number(body.idparadas);\n        } catch (err) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                message: 'Falta el id de la parada o el body no es JSON',\n                error: err?.message\n            }, {\n                status: 400\n            });\n        }\n        if (!idparadas || isNaN(idparadas)) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                message: 'Falta el id de la parada o el id no es válido'\n            }, {\n                status: 400\n            });\n        }\n        const connection = await mysql2_promise__WEBPACK_IMPORTED_MODULE_1__.createConnection((0,_db__WEBPACK_IMPORTED_MODULE_2__.getMysqlConfig)());\n        const [result] = await connection.execute(`DELETE FROM paradas WHERE idparadas=?`, [\n            idparadas\n        ]);\n        await connection.end();\n        if (result.affectedRows === 0) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                message: 'No se encontró la parada para eliminar'\n            }, {\n                status: 404\n            });\n        }\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: 'Parada eliminada correctamente'\n        });\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: 'Error al eliminar parada',\n            error: error.message\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9kYXNoYm9hcmQvcGFyYWRhcy9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTJDO0FBQ1I7QUFDUTtBQUVwQyxlQUFlRztJQUNwQixNQUFNQyxhQUFhLE1BQU1ILDREQUFzQixDQUFDQyxtREFBY0E7SUFFOUQsTUFBTSxDQUFDSSxLQUFLLEdBQUcsTUFBTUYsV0FBV0csT0FBTyxDQUNyQyxDQUFDLHVFQUF1RSxDQUFDO0lBRzNFLE1BQU1ILFdBQVdJLEdBQUc7SUFFcEIsT0FBT1IscURBQVlBLENBQUNTLElBQUksQ0FBQ0g7QUFDM0I7QUFFTyxlQUFlSSxLQUFLQyxPQUFPO0lBQ2hDLElBQUk7UUFDRixNQUFNLEVBQUVDLE1BQU0sRUFBRUMsTUFBTSxFQUFFQyxPQUFPLEVBQUVDLFFBQVEsRUFBRUMsS0FBSyxFQUFFLEdBQUcsTUFBTUwsUUFBUUYsSUFBSTtRQUV2RSxJQUFJLENBQUNHLFVBQVUsQ0FBQ0MsVUFBVSxDQUFDQyxXQUFXLENBQUNDLFlBQVksQ0FBQ0MsT0FBTztZQUN6RCxPQUFPaEIscURBQVlBLENBQUNTLElBQUksQ0FBQztnQkFBRVEsU0FBUztZQUE2QixHQUFHO2dCQUFFQyxRQUFRO1lBQUk7UUFDcEY7UUFFQSxNQUFNZCxhQUFhLE1BQU1ILDREQUFzQixDQUFDQyxtREFBY0E7UUFFOUQsTUFBTUUsV0FBV0csT0FBTyxDQUN0QixDQUFDLHFGQUFxRixDQUFDLEVBQ3ZGO1lBQUNLO1lBQVFDO1lBQVFDO1lBQVNDO1lBQVVDO1NBQU07UUFHNUMsTUFBTVosV0FBV0ksR0FBRztRQUVwQixPQUFPUixxREFBWUEsQ0FBQ1MsSUFBSSxDQUFDO1lBQUVRLFNBQVM7UUFBK0I7SUFDckUsRUFBRSxPQUFPRSxPQUFPO1FBQ2QsT0FBT25CLHFEQUFZQSxDQUFDUyxJQUFJLENBQUM7WUFBRVEsU0FBUztZQUEwQkUsT0FBT0EsTUFBTUYsT0FBTztRQUFDLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQ3RHO0FBQ0Y7QUFFQSwwQkFBMEI7QUFDbkIsZUFBZUUsSUFBSVQsT0FBTztJQUMvQixJQUFJO1FBQ0YsTUFBTSxFQUFFVSxTQUFTLEVBQUVULE1BQU0sRUFBRUMsTUFBTSxFQUFFQyxPQUFPLEVBQUVDLFFBQVEsRUFBRUMsS0FBSyxFQUFFLEdBQUcsTUFBTUwsUUFBUUYsSUFBSTtRQUVsRixJQUFJLENBQUNZLGFBQWEsQ0FBQ1QsVUFBVSxDQUFDQyxVQUFVLENBQUNDLFdBQVcsQ0FBQ0MsWUFBWSxDQUFDQyxPQUFPO1lBQ3ZFLE9BQU9oQixxREFBWUEsQ0FBQ1MsSUFBSSxDQUFDO2dCQUFFUSxTQUFTO1lBQTZCLEdBQUc7Z0JBQUVDLFFBQVE7WUFBSTtRQUNwRjtRQUVBLE1BQU1kLGFBQWEsTUFBTUgsNERBQXNCLENBQUNDLG1EQUFjQTtRQUU5RCxNQUFNRSxXQUFXRyxPQUFPLENBQ3RCLENBQUMsdUZBQXVGLENBQUMsRUFDekY7WUFBQ0s7WUFBUUM7WUFBUUM7WUFBU0M7WUFBVUM7WUFBT0s7U0FBVTtRQUd2RCxNQUFNakIsV0FBV0ksR0FBRztRQUVwQixPQUFPUixxREFBWUEsQ0FBQ1MsSUFBSSxDQUFDO1lBQUVRLFNBQVM7UUFBbUM7SUFDekUsRUFBRSxPQUFPRSxPQUFPO1FBQ2QsT0FBT25CLHFEQUFZQSxDQUFDUyxJQUFJLENBQUM7WUFBRVEsU0FBUztZQUE4QkUsT0FBT0EsTUFBTUYsT0FBTztRQUFDLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQzFHO0FBQ0Y7QUFFQSx5QkFBeUI7QUFDbEIsZUFBZUksT0FBT1gsT0FBTztJQUNsQyxJQUFJO1FBQ0YsSUFBSVUsWUFBWTtRQUNoQixJQUFJO1lBQ0YsTUFBTUUsT0FBTyxNQUFNWixRQUFRRixJQUFJO1lBQy9CWSxZQUFZRyxPQUFPRCxLQUFLRixTQUFTO1FBQ25DLEVBQUUsT0FBT0ksS0FBSztZQUNaLE9BQU96QixxREFBWUEsQ0FBQ1MsSUFBSSxDQUFDO2dCQUFFUSxTQUFTO2dCQUFpREUsT0FBT00sS0FBS1I7WUFBUSxHQUFHO2dCQUFFQyxRQUFRO1lBQUk7UUFDNUg7UUFFQSxJQUFJLENBQUNHLGFBQWFLLE1BQU1MLFlBQVk7WUFDbEMsT0FBT3JCLHFEQUFZQSxDQUFDUyxJQUFJLENBQUM7Z0JBQUVRLFNBQVM7WUFBZ0QsR0FBRztnQkFBRUMsUUFBUTtZQUFJO1FBQ3ZHO1FBRUEsTUFBTWQsYUFBYSxNQUFNSCw0REFBc0IsQ0FBQ0MsbURBQWNBO1FBRTlELE1BQU0sQ0FBQ3lCLE9BQU8sR0FBRyxNQUFNdkIsV0FBV0csT0FBTyxDQUN2QyxDQUFDLHFDQUFxQyxDQUFDLEVBQ3ZDO1lBQUNjO1NBQVU7UUFHYixNQUFNakIsV0FBV0ksR0FBRztRQUVwQixJQUFJbUIsT0FBT0MsWUFBWSxLQUFLLEdBQUc7WUFDN0IsT0FBTzVCLHFEQUFZQSxDQUFDUyxJQUFJLENBQUM7Z0JBQUVRLFNBQVM7WUFBeUMsR0FBRztnQkFBRUMsUUFBUTtZQUFJO1FBQ2hHO1FBRUEsT0FBT2xCLHFEQUFZQSxDQUFDUyxJQUFJLENBQUM7WUFBRVEsU0FBUztRQUFpQztJQUN2RSxFQUFFLE9BQU9FLE9BQU87UUFDZCxPQUFPbkIscURBQVlBLENBQUNTLElBQUksQ0FBQztZQUFFUSxTQUFTO1lBQTRCRSxPQUFPQSxNQUFNRixPQUFPO1FBQUMsR0FBRztZQUFFQyxRQUFRO1FBQUk7SUFDeEc7QUFDRiIsInNvdXJjZXMiOlsiQzpcXHhhbXBwXFxodGRvY3NcXERlc2Fycm9sbyBzZXJ2aWRvclxcbWlydXRhXFxzcmNcXGFwcFxcYXBpXFxkYXNoYm9hcmRcXHBhcmFkYXNcXHJvdXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJztcclxuaW1wb3J0IG15c3FsIGZyb20gJ215c3FsMi9wcm9taXNlJztcclxuaW1wb3J0IHsgZ2V0TXlzcWxDb25maWcgfSBmcm9tICcuLi8uLi9fZGInO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVCgpIHtcclxuICBjb25zdCBjb25uZWN0aW9uID0gYXdhaXQgbXlzcWwuY3JlYXRlQ29ubmVjdGlvbihnZXRNeXNxbENvbmZpZygpKTtcclxuXHJcbiAgY29uc3QgW3Jvd3NdID0gYXdhaXQgY29ubmVjdGlvbi5leGVjdXRlKFxyXG4gICAgYFNFTEVDVCBpZHBhcmFkYXMsIHJ1dGFJZCwgbm9tYnJlLCBsYXRpdHVkLCBsb25naXR1ZCwgb3JkZW4gRlJPTSBwYXJhZGFzYFxyXG4gICk7XHJcblxyXG4gIGF3YWl0IGNvbm5lY3Rpb24uZW5kKCk7XHJcblxyXG4gIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihyb3dzKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxdWVzdCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IHJ1dGFJZCwgbm9tYnJlLCBsYXRpdHVkLCBsb25naXR1ZCwgb3JkZW4gfSA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xyXG5cclxuICAgIGlmICghcnV0YUlkIHx8ICFub21icmUgfHwgIWxhdGl0dWQgfHwgIWxvbmdpdHVkIHx8ICFvcmRlbikge1xyXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBtZXNzYWdlOiAnRmFsdGFuIGNhbXBvcyBvYmxpZ2F0b3Jpb3MnIH0sIHsgc3RhdHVzOiA0MDAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY29ubmVjdGlvbiA9IGF3YWl0IG15c3FsLmNyZWF0ZUNvbm5lY3Rpb24oZ2V0TXlzcWxDb25maWcoKSk7XHJcblxyXG4gICAgYXdhaXQgY29ubmVjdGlvbi5leGVjdXRlKFxyXG4gICAgICBgSU5TRVJUIElOVE8gcGFyYWRhcyAocnV0YUlkLCBub21icmUsIGxhdGl0dWQsIGxvbmdpdHVkLCBvcmRlbikgVkFMVUVTICg/LCA/LCA/LCA/LCA/KWAsXHJcbiAgICAgIFtydXRhSWQsIG5vbWJyZSwgbGF0aXR1ZCwgbG9uZ2l0dWQsIG9yZGVuXVxyXG4gICAgKTtcclxuXHJcbiAgICBhd2FpdCBjb25uZWN0aW9uLmVuZCgpO1xyXG5cclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IG1lc3NhZ2U6ICdQYXJhZGEgYcOxYWRpZGEgY29ycmVjdGFtZW50ZScgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IG1lc3NhZ2U6ICdFcnJvciBhbCBhw7FhZGlyIHBhcmFkYScsIGVycm9yOiBlcnJvci5tZXNzYWdlIH0sIHsgc3RhdHVzOiA1MDAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBBY3R1YWxpemFyIHBhcmFkYSAoUFVUKVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUFVUKHJlcXVlc3QpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBpZHBhcmFkYXMsIHJ1dGFJZCwgbm9tYnJlLCBsYXRpdHVkLCBsb25naXR1ZCwgb3JkZW4gfSA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xyXG5cclxuICAgIGlmICghaWRwYXJhZGFzIHx8ICFydXRhSWQgfHwgIW5vbWJyZSB8fCAhbGF0aXR1ZCB8fCAhbG9uZ2l0dWQgfHwgIW9yZGVuKSB7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IG1lc3NhZ2U6ICdGYWx0YW4gY2FtcG9zIG9ibGlnYXRvcmlvcycgfSwgeyBzdGF0dXM6IDQwMCB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjb25uZWN0aW9uID0gYXdhaXQgbXlzcWwuY3JlYXRlQ29ubmVjdGlvbihnZXRNeXNxbENvbmZpZygpKTtcclxuXHJcbiAgICBhd2FpdCBjb25uZWN0aW9uLmV4ZWN1dGUoXHJcbiAgICAgIGBVUERBVEUgcGFyYWRhcyBTRVQgcnV0YUlkPT8sIG5vbWJyZT0/LCBsYXRpdHVkPT8sIGxvbmdpdHVkPT8sIG9yZGVuPT8gV0hFUkUgaWRwYXJhZGFzPT9gLFxyXG4gICAgICBbcnV0YUlkLCBub21icmUsIGxhdGl0dWQsIGxvbmdpdHVkLCBvcmRlbiwgaWRwYXJhZGFzXVxyXG4gICAgKTtcclxuXHJcbiAgICBhd2FpdCBjb25uZWN0aW9uLmVuZCgpO1xyXG5cclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IG1lc3NhZ2U6ICdQYXJhZGEgYWN0dWFsaXphZGEgY29ycmVjdGFtZW50ZScgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IG1lc3NhZ2U6ICdFcnJvciBhbCBhY3R1YWxpemFyIHBhcmFkYScsIGVycm9yOiBlcnJvci5tZXNzYWdlIH0sIHsgc3RhdHVzOiA1MDAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBCb3JyYXIgcGFyYWRhIChERUxFVEUpXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBERUxFVEUocmVxdWVzdCkge1xyXG4gIHRyeSB7XHJcbiAgICBsZXQgaWRwYXJhZGFzID0gbnVsbDtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGJvZHkgPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcclxuICAgICAgaWRwYXJhZGFzID0gTnVtYmVyKGJvZHkuaWRwYXJhZGFzKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBtZXNzYWdlOiAnRmFsdGEgZWwgaWQgZGUgbGEgcGFyYWRhIG8gZWwgYm9keSBubyBlcyBKU09OJywgZXJyb3I6IGVycj8ubWVzc2FnZSB9LCB7IHN0YXR1czogNDAwIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghaWRwYXJhZGFzIHx8IGlzTmFOKGlkcGFyYWRhcykpIHtcclxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgbWVzc2FnZTogJ0ZhbHRhIGVsIGlkIGRlIGxhIHBhcmFkYSBvIGVsIGlkIG5vIGVzIHbDoWxpZG8nIH0sIHsgc3RhdHVzOiA0MDAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY29ubmVjdGlvbiA9IGF3YWl0IG15c3FsLmNyZWF0ZUNvbm5lY3Rpb24oZ2V0TXlzcWxDb25maWcoKSk7XHJcblxyXG4gICAgY29uc3QgW3Jlc3VsdF0gPSBhd2FpdCBjb25uZWN0aW9uLmV4ZWN1dGUoXHJcbiAgICAgIGBERUxFVEUgRlJPTSBwYXJhZGFzIFdIRVJFIGlkcGFyYWRhcz0/YCxcclxuICAgICAgW2lkcGFyYWRhc11cclxuICAgICk7XHJcblxyXG4gICAgYXdhaXQgY29ubmVjdGlvbi5lbmQoKTtcclxuXHJcbiAgICBpZiAocmVzdWx0LmFmZmVjdGVkUm93cyA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBtZXNzYWdlOiAnTm8gc2UgZW5jb250csOzIGxhIHBhcmFkYSBwYXJhIGVsaW1pbmFyJyB9LCB7IHN0YXR1czogNDA0IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IG1lc3NhZ2U6ICdQYXJhZGEgZWxpbWluYWRhIGNvcnJlY3RhbWVudGUnIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBtZXNzYWdlOiAnRXJyb3IgYWwgZWxpbWluYXIgcGFyYWRhJywgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfSwgeyBzdGF0dXM6IDUwMCB9KTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsIm15c3FsIiwiZ2V0TXlzcWxDb25maWciLCJHRVQiLCJjb25uZWN0aW9uIiwiY3JlYXRlQ29ubmVjdGlvbiIsInJvd3MiLCJleGVjdXRlIiwiZW5kIiwianNvbiIsIlBPU1QiLCJyZXF1ZXN0IiwicnV0YUlkIiwibm9tYnJlIiwibGF0aXR1ZCIsImxvbmdpdHVkIiwib3JkZW4iLCJtZXNzYWdlIiwic3RhdHVzIiwiZXJyb3IiLCJQVVQiLCJpZHBhcmFkYXMiLCJERUxFVEUiLCJib2R5IiwiTnVtYmVyIiwiZXJyIiwiaXNOYU4iLCJyZXN1bHQiLCJhZmZlY3RlZFJvd3MiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/dashboard/paradas/route.js\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/mysql2","vendor-chunks/aws-ssl-profiles","vendor-chunks/iconv-lite","vendor-chunks/long","vendor-chunks/named-placeholders","vendor-chunks/denque","vendor-chunks/dotenv","vendor-chunks/is-property","vendor-chunks/lru.min","vendor-chunks/sqlstring","vendor-chunks/seq-queue","vendor-chunks/generate-function","vendor-chunks/safer-buffer"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fdashboard%2Fparadas%2Froute&page=%2Fapi%2Fdashboard%2Fparadas%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fdashboard%2Fparadas%2Froute.js&appDir=C%3A%5Cxampp%5Chtdocs%5CDesarrolo%20servidor%5Cmiruta%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5Cxampp%5Chtdocs%5CDesarrolo%20servidor%5Cmiruta&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();