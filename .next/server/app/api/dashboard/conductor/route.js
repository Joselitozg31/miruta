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
exports.id = "app/api/dashboard/conductor/route";
exports.ids = ["app/api/dashboard/conductor/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fdashboard%2Fconductor%2Froute&page=%2Fapi%2Fdashboard%2Fconductor%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fdashboard%2Fconductor%2Froute.js&appDir=C%3A%5Cxampp%5Chtdocs%5CDesarrolo%20servidor%5Cmiruta%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5Cxampp%5Chtdocs%5CDesarrolo%20servidor%5Cmiruta&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fdashboard%2Fconductor%2Froute&page=%2Fapi%2Fdashboard%2Fconductor%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fdashboard%2Fconductor%2Froute.js&appDir=C%3A%5Cxampp%5Chtdocs%5CDesarrolo%20servidor%5Cmiruta%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5Cxampp%5Chtdocs%5CDesarrolo%20servidor%5Cmiruta&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_xampp_htdocs_Desarrolo_servidor_miruta_src_app_api_dashboard_conductor_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/dashboard/conductor/route.js */ \"(rsc)/./src/app/api/dashboard/conductor/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/dashboard/conductor/route\",\n        pathname: \"/api/dashboard/conductor\",\n        filename: \"route\",\n        bundlePath: \"app/api/dashboard/conductor/route\"\n    },\n    resolvedPagePath: \"C:\\\\xampp\\\\htdocs\\\\Desarrolo servidor\\\\miruta\\\\src\\\\app\\\\api\\\\dashboard\\\\conductor\\\\route.js\",\n    nextConfigOutput,\n    userland: C_xampp_htdocs_Desarrolo_servidor_miruta_src_app_api_dashboard_conductor_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZkYXNoYm9hcmQlMkZjb25kdWN0b3IlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmRhc2hib2FyZCUyRmNvbmR1Y3RvciUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmRhc2hib2FyZCUyRmNvbmR1Y3RvciUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDeGFtcHAlNUNodGRvY3MlNUNEZXNhcnJvbG8lMjBzZXJ2aWRvciU1Q21pcnV0YSU1Q3NyYyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q3hhbXBwJTVDaHRkb2NzJTVDRGVzYXJyb2xvJTIwc2Vydmlkb3IlNUNtaXJ1dGEmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQzRDO0FBQ3pIO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFx4YW1wcFxcXFxodGRvY3NcXFxcRGVzYXJyb2xvIHNlcnZpZG9yXFxcXG1pcnV0YVxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxkYXNoYm9hcmRcXFxcY29uZHVjdG9yXFxcXHJvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9kYXNoYm9hcmQvY29uZHVjdG9yL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvZGFzaGJvYXJkL2NvbmR1Y3RvclwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvZGFzaGJvYXJkL2NvbmR1Y3Rvci9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXHhhbXBwXFxcXGh0ZG9jc1xcXFxEZXNhcnJvbG8gc2Vydmlkb3JcXFxcbWlydXRhXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXGRhc2hib2FyZFxcXFxjb25kdWN0b3JcXFxccm91dGUuanNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fdashboard%2Fconductor%2Froute&page=%2Fapi%2Fdashboard%2Fconductor%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fdashboard%2Fconductor%2Froute.js&appDir=C%3A%5Cxampp%5Chtdocs%5CDesarrolo%20servidor%5Cmiruta%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5Cxampp%5Chtdocs%5CDesarrolo%20servidor%5Cmiruta&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getMysqlConfig: () => (/* binding */ getMysqlConfig)\n/* harmony export */ });\n// Carga dotenv solo en desarrollo (Next.js ya lo hace en producción)\nif (true) {\n    // eslint-disable-next-line @typescript-eslint/no-var-requires\n    (__webpack_require__(/*! dotenv */ \"(rsc)/./node_modules/dotenv/lib/main.js\").config)();\n}\nfunction getMysqlConfig() {\n    return {\n        host: process.env.DB_HOST || 'localhost',\n        user: process.env.DB_USERNAME || 'root',\n        password: process.env.DB_PASSWORD || '',\n        database: process.env.DB_DATABASE || 'miruta',\n        port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 3306\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9fZGIuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLHFFQUFxRTtBQUNyRSxJQUFJQSxJQUFxQyxFQUFFO0lBQ3pDLDhEQUE4RDtJQUM5REMscUZBQXdCO0FBQzFCO0FBRU8sU0FBU0U7SUFDZCxPQUFPO1FBQ0xDLE1BQU1KLFFBQVFLLEdBQUcsQ0FBQ0MsT0FBTyxJQUFJO1FBQzdCQyxNQUFNUCxRQUFRSyxHQUFHLENBQUNHLFdBQVcsSUFBSTtRQUNqQ0MsVUFBVVQsUUFBUUssR0FBRyxDQUFDSyxXQUFXLElBQUk7UUFDckNDLFVBQVVYLFFBQVFLLEdBQUcsQ0FBQ08sV0FBVyxJQUFJO1FBQ3JDQyxNQUFNYixRQUFRSyxHQUFHLENBQUNTLE9BQU8sR0FBR0MsT0FBT2YsUUFBUUssR0FBRyxDQUFDUyxPQUFPLElBQUk7SUFDNUQ7QUFDRiIsInNvdXJjZXMiOlsiQzpcXHhhbXBwXFxodGRvY3NcXERlc2Fycm9sbyBzZXJ2aWRvclxcbWlydXRhXFxzcmNcXGFwcFxcYXBpXFxfZGIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ2FyZ2EgZG90ZW52IHNvbG8gZW4gZGVzYXJyb2xsbyAoTmV4dC5qcyB5YSBsbyBoYWNlIGVuIHByb2R1Y2Npw7NuKVxyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdmFyLXJlcXVpcmVzXHJcbiAgcmVxdWlyZSgnZG90ZW52JykuY29uZmlnKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRNeXNxbENvbmZpZygpIHtcclxuICByZXR1cm4ge1xyXG4gICAgaG9zdDogcHJvY2Vzcy5lbnYuREJfSE9TVCB8fCAnbG9jYWxob3N0JyxcclxuICAgIHVzZXI6IHByb2Nlc3MuZW52LkRCX1VTRVJOQU1FIHx8ICdyb290JyxcclxuICAgIHBhc3N3b3JkOiBwcm9jZXNzLmVudi5EQl9QQVNTV09SRCB8fCAnJyxcclxuICAgIGRhdGFiYXNlOiBwcm9jZXNzLmVudi5EQl9EQVRBQkFTRSB8fCAnbWlydXRhJyxcclxuICAgIHBvcnQ6IHByb2Nlc3MuZW52LkRCX1BPUlQgPyBOdW1iZXIocHJvY2Vzcy5lbnYuREJfUE9SVCkgOiAzMzA2LFxyXG4gIH07XHJcbn1cclxuIl0sIm5hbWVzIjpbInByb2Nlc3MiLCJyZXF1aXJlIiwiY29uZmlnIiwiZ2V0TXlzcWxDb25maWciLCJob3N0IiwiZW52IiwiREJfSE9TVCIsInVzZXIiLCJEQl9VU0VSTkFNRSIsInBhc3N3b3JkIiwiREJfUEFTU1dPUkQiLCJkYXRhYmFzZSIsIkRCX0RBVEFCQVNFIiwicG9ydCIsIkRCX1BPUlQiLCJOdW1iZXIiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/_db.js\n");

/***/ }),

/***/ "(rsc)/./src/app/api/dashboard/conductor/route.js":
/*!**************************************************!*\
  !*** ./src/app/api/dashboard/conductor/route.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DELETE: () => (/* binding */ DELETE),\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST),\n/* harmony export */   PUT: () => (/* binding */ PUT)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mysql2/promise */ \"(rsc)/./node_modules/mysql2/promise.js\");\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_db */ \"(rsc)/./src/app/api/_db.js\");\n\n\n\nasync function GET() {\n    const connection = await mysql2_promise__WEBPACK_IMPORTED_MODULE_1__.createConnection({\n        host: 'localhost',\n        user: 'root',\n        password: '',\n        database: 'miruta'\n    });\n    const [rows] = await connection.execute(`SELECT idconductores, nombre, apellido1, apellido2, dni, telefono, licencia, fecha_contratacion FROM conductores`);\n    await connection.end();\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(rows);\n}\nasync function POST(request) {\n    try {\n        const { nombre, apellido1, apellido2, dni, telefono, licencia, fecha_contratacion } = await request.json();\n        if (!nombre || !apellido1 || !dni || !telefono || !licencia || !fecha_contratacion) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                message: 'Faltan campos obligatorios'\n            }, {\n                status: 400\n            });\n        }\n        const connection = await mysql2_promise__WEBPACK_IMPORTED_MODULE_1__.createConnection({\n            host: 'localhost',\n            user: 'root',\n            password: '',\n            database: 'miruta'\n        });\n        await connection.execute(`INSERT INTO conductores (nombre, apellido1, apellido2, dni, telefono, licencia, fecha_contratacion) VALUES (?, ?, ?, ?, ?, ?, ?)`, [\n            nombre,\n            apellido1,\n            apellido2,\n            dni,\n            telefono,\n            licencia,\n            fecha_contratacion\n        ]);\n        await connection.end();\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: 'Conductor añadido correctamente'\n        });\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: 'Error al añadir conductor',\n            error: error.message\n        }, {\n            status: 500\n        });\n    }\n}\n// Actualizar conductor (PUT)\nasync function PUT(request) {\n    try {\n        const { idconductores, nombre, apellido1, apellido2, dni, telefono, licencia, fecha_contratacion } = await request.json();\n        if (!idconductores || !nombre || !apellido1 || !dni || !telefono || !licencia || !fecha_contratacion) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                message: 'Faltan campos obligatorios'\n            }, {\n                status: 400\n            });\n        }\n        const connection = await mysql2_promise__WEBPACK_IMPORTED_MODULE_1__.createConnection({\n            host: 'localhost',\n            user: 'root',\n            password: '',\n            database: 'miruta'\n        });\n        await connection.execute(`UPDATE conductores SET nombre=?, apellido1=?, apellido2=?, dni=?, telefono=?, licencia=?, fecha_contratacion=? WHERE idconductores=?`, [\n            nombre,\n            apellido1,\n            apellido2,\n            dni,\n            telefono,\n            licencia,\n            fecha_contratacion,\n            idconductores\n        ]);\n        await connection.end();\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: 'Conductor actualizado correctamente'\n        });\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: 'Error al actualizar conductor',\n            error: error.message\n        }, {\n            status: 500\n        });\n    }\n}\n// Borrar conductor (DELETE)\nasync function DELETE(request) {\n    try {\n        let idconductores = null;\n        try {\n            const body = await request.json();\n            idconductores = Number(body.idconductores);\n        } catch (err) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                message: 'Falta el id del conductor o el body no es JSON',\n                error: err?.message\n            }, {\n                status: 400\n            });\n        }\n        if (!idconductores || isNaN(idconductores)) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                message: 'Falta el id del conductor o el id no es válido'\n            }, {\n                status: 400\n            });\n        }\n        const connection = await mysql2_promise__WEBPACK_IMPORTED_MODULE_1__.createConnection({\n            host: 'localhost',\n            user: 'root',\n            password: '',\n            database: 'miruta'\n        });\n        const [result] = await connection.execute(`DELETE FROM conductores WHERE idconductores=?`, [\n            idconductores\n        ]);\n        await connection.end();\n        if (result.affectedRows === 0) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                message: 'No se encontró el conductor para eliminar'\n            }, {\n                status: 404\n            });\n        }\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: 'Conductor eliminado correctamente'\n        });\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: 'Error al eliminar conductor',\n            error: error.message\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9kYXNoYm9hcmQvY29uZHVjdG9yL3JvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMkM7QUFDUjtBQUNRO0FBRXBDLGVBQWVHO0lBQ3BCLE1BQU1DLGFBQWEsTUFBTUgsNERBQXNCLENBQUM7UUFDOUNLLE1BQU07UUFDTkMsTUFBTTtRQUNOQyxVQUFVO1FBQ1ZDLFVBQVU7SUFDWjtJQUVBLE1BQU0sQ0FBQ0MsS0FBSyxHQUFHLE1BQU1OLFdBQVdPLE9BQU8sQ0FDckMsQ0FBQyxnSEFBZ0gsQ0FBQztJQUdwSCxNQUFNUCxXQUFXUSxHQUFHO0lBRXBCLE9BQU9aLHFEQUFZQSxDQUFDYSxJQUFJLENBQUNIO0FBQzNCO0FBRU8sZUFBZUksS0FBS0MsT0FBTztJQUNoQyxJQUFJO1FBQ0YsTUFBTSxFQUFFQyxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFQyxHQUFHLEVBQUVDLFFBQVEsRUFBRUMsUUFBUSxFQUFFQyxrQkFBa0IsRUFBRSxHQUFHLE1BQU1QLFFBQVFGLElBQUk7UUFFeEcsSUFBSSxDQUFDRyxVQUFVLENBQUNDLGFBQWEsQ0FBQ0UsT0FBTyxDQUFDQyxZQUFZLENBQUNDLFlBQVksQ0FBQ0Msb0JBQW9CO1lBQ2xGLE9BQU90QixxREFBWUEsQ0FBQ2EsSUFBSSxDQUFDO2dCQUFFVSxTQUFTO1lBQTZCLEdBQUc7Z0JBQUVDLFFBQVE7WUFBSTtRQUNwRjtRQUVBLE1BQU1wQixhQUFhLE1BQU1ILDREQUFzQixDQUFDO1lBQzlDSyxNQUFNO1lBQ05DLE1BQU07WUFDTkMsVUFBVTtZQUNWQyxVQUFVO1FBQ1o7UUFFQSxNQUFNTCxXQUFXTyxPQUFPLENBQ3RCLENBQUMsZ0lBQWdJLENBQUMsRUFDbEk7WUFBQ0s7WUFBUUM7WUFBV0M7WUFBV0M7WUFBS0M7WUFBVUM7WUFBVUM7U0FBbUI7UUFHN0UsTUFBTWxCLFdBQVdRLEdBQUc7UUFFcEIsT0FBT1oscURBQVlBLENBQUNhLElBQUksQ0FBQztZQUFFVSxTQUFT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clxcbWlydXRhXFxzcmNcXGFwcFxcYXBpXFxkYXNoYm9hcmRcXGNvbmR1Y3Rvclxccm91dGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xyXG5pbXBvcnQgbXlzcWwgZnJvbSAnbXlzcWwyL3Byb21pc2UnO1xyXG5pbXBvcnQgeyBnZXRNeXNxbENvbmZpZyB9IGZyb20gJy4uLy4uL19kYic7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKCkge1xyXG4gIGNvbnN0IGNvbm5lY3Rpb24gPSBhd2FpdCBteXNxbC5jcmVhdGVDb25uZWN0aW9uKHtcclxuICAgIGhvc3Q6ICdsb2NhbGhvc3QnLFxyXG4gICAgdXNlcjogJ3Jvb3QnLFxyXG4gICAgcGFzc3dvcmQ6ICcnLFxyXG4gICAgZGF0YWJhc2U6ICdtaXJ1dGEnLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBbcm93c10gPSBhd2FpdCBjb25uZWN0aW9uLmV4ZWN1dGUoXHJcbiAgICBgU0VMRUNUIGlkY29uZHVjdG9yZXMsIG5vbWJyZSwgYXBlbGxpZG8xLCBhcGVsbGlkbzIsIGRuaSwgdGVsZWZvbm8sIGxpY2VuY2lhLCBmZWNoYV9jb250cmF0YWNpb24gRlJPTSBjb25kdWN0b3Jlc2BcclxuICApO1xyXG5cclxuICBhd2FpdCBjb25uZWN0aW9uLmVuZCgpO1xyXG5cclxuICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24ocm93cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcXVlc3QpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBub21icmUsIGFwZWxsaWRvMSwgYXBlbGxpZG8yLCBkbmksIHRlbGVmb25vLCBsaWNlbmNpYSwgZmVjaGFfY29udHJhdGFjaW9uIH0gPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcclxuXHJcbiAgICBpZiAoIW5vbWJyZSB8fCAhYXBlbGxpZG8xIHx8ICFkbmkgfHwgIXRlbGVmb25vIHx8ICFsaWNlbmNpYSB8fCAhZmVjaGFfY29udHJhdGFjaW9uKSB7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IG1lc3NhZ2U6ICdGYWx0YW4gY2FtcG9zIG9ibGlnYXRvcmlvcycgfSwgeyBzdGF0dXM6IDQwMCB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjb25uZWN0aW9uID0gYXdhaXQgbXlzcWwuY3JlYXRlQ29ubmVjdGlvbih7XHJcbiAgICAgIGhvc3Q6ICdsb2NhbGhvc3QnLFxyXG4gICAgICB1c2VyOiAncm9vdCcsXHJcbiAgICAgIHBhc3N3b3JkOiAnJyxcclxuICAgICAgZGF0YWJhc2U6ICdtaXJ1dGEnLFxyXG4gICAgfSk7XHJcblxyXG4gICAgYXdhaXQgY29ubmVjdGlvbi5leGVjdXRlKFxyXG4gICAgICBgSU5TRVJUIElOVE8gY29uZHVjdG9yZXMgKG5vbWJyZSwgYXBlbGxpZG8xLCBhcGVsbGlkbzIsIGRuaSwgdGVsZWZvbm8sIGxpY2VuY2lhLCBmZWNoYV9jb250cmF0YWNpb24pIFZBTFVFUyAoPywgPywgPywgPywgPywgPywgPylgLFxyXG4gICAgICBbbm9tYnJlLCBhcGVsbGlkbzEsIGFwZWxsaWRvMiwgZG5pLCB0ZWxlZm9ubywgbGljZW5jaWEsIGZlY2hhX2NvbnRyYXRhY2lvbl1cclxuICAgICk7XHJcblxyXG4gICAgYXdhaXQgY29ubmVjdGlvbi5lbmQoKTtcclxuXHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBtZXNzYWdlOiAnQ29uZHVjdG9yIGHDsWFkaWRvIGNvcnJlY3RhbWVudGUnIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBtZXNzYWdlOiAnRXJyb3IgYWwgYcOxYWRpciBjb25kdWN0b3InLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9LCB7IHN0YXR1czogNTAwIH0pO1xyXG4gIH1cclxufVxyXG5cclxuLy8gQWN0dWFsaXphciBjb25kdWN0b3IgKFBVVClcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBVVChyZXF1ZXN0KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgaWRjb25kdWN0b3Jlcywgbm9tYnJlLCBhcGVsbGlkbzEsIGFwZWxsaWRvMiwgZG5pLCB0ZWxlZm9ubywgbGljZW5jaWEsIGZlY2hhX2NvbnRyYXRhY2lvbiB9ID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XHJcblxyXG4gICAgaWYgKCFpZGNvbmR1Y3RvcmVzIHx8ICFub21icmUgfHwgIWFwZWxsaWRvMSB8fCAhZG5pIHx8ICF0ZWxlZm9ubyB8fCAhbGljZW5jaWEgfHwgIWZlY2hhX2NvbnRyYXRhY2lvbikge1xyXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBtZXNzYWdlOiAnRmFsdGFuIGNhbXBvcyBvYmxpZ2F0b3Jpb3MnIH0sIHsgc3RhdHVzOiA0MDAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY29ubmVjdGlvbiA9IGF3YWl0IG15c3FsLmNyZWF0ZUNvbm5lY3Rpb24oe1xyXG4gICAgICBob3N0OiAnbG9jYWxob3N0JyxcclxuICAgICAgdXNlcjogJ3Jvb3QnLFxyXG4gICAgICBwYXNzd29yZDogJycsXHJcbiAgICAgIGRhdGFiYXNlOiAnbWlydXRhJyxcclxuICAgIH0pO1xyXG5cclxuICAgIGF3YWl0IGNvbm5lY3Rpb24uZXhlY3V0ZShcclxuICAgICAgYFVQREFURSBjb25kdWN0b3JlcyBTRVQgbm9tYnJlPT8sIGFwZWxsaWRvMT0/LCBhcGVsbGlkbzI9PywgZG5pPT8sIHRlbGVmb25vPT8sIGxpY2VuY2lhPT8sIGZlY2hhX2NvbnRyYXRhY2lvbj0/IFdIRVJFIGlkY29uZHVjdG9yZXM9P2AsXHJcbiAgICAgIFtub21icmUsIGFwZWxsaWRvMSwgYXBlbGxpZG8yLCBkbmksIHRlbGVmb25vLCBsaWNlbmNpYSwgZmVjaGFfY29udHJhdGFjaW9uLCBpZGNvbmR1Y3RvcmVzXVxyXG4gICAgKTtcclxuXHJcbiAgICBhd2FpdCBjb25uZWN0aW9uLmVuZCgpO1xyXG5cclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IG1lc3NhZ2U6ICdDb25kdWN0b3IgYWN0dWFsaXphZG8gY29ycmVjdGFtZW50ZScgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IG1lc3NhZ2U6ICdFcnJvciBhbCBhY3R1YWxpemFyIGNvbmR1Y3RvcicsIGVycm9yOiBlcnJvci5tZXNzYWdlIH0sIHsgc3RhdHVzOiA1MDAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBCb3JyYXIgY29uZHVjdG9yIChERUxFVEUpXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBERUxFVEUocmVxdWVzdCkge1xyXG4gIHRyeSB7XHJcbiAgICBsZXQgaWRjb25kdWN0b3JlcyA9IG51bGw7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBib2R5ID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XHJcbiAgICAgIGlkY29uZHVjdG9yZXMgPSBOdW1iZXIoYm9keS5pZGNvbmR1Y3RvcmVzKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBtZXNzYWdlOiAnRmFsdGEgZWwgaWQgZGVsIGNvbmR1Y3RvciBvIGVsIGJvZHkgbm8gZXMgSlNPTicsIGVycm9yOiBlcnI/Lm1lc3NhZ2UgfSwgeyBzdGF0dXM6IDQwMCB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWlkY29uZHVjdG9yZXMgfHwgaXNOYU4oaWRjb25kdWN0b3JlcykpIHtcclxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgbWVzc2FnZTogJ0ZhbHRhIGVsIGlkIGRlbCBjb25kdWN0b3IgbyBlbCBpZCBubyBlcyB2w6FsaWRvJyB9LCB7IHN0YXR1czogNDAwIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNvbm5lY3Rpb24gPSBhd2FpdCBteXNxbC5jcmVhdGVDb25uZWN0aW9uKHtcclxuICAgICAgaG9zdDogJ2xvY2FsaG9zdCcsXHJcbiAgICAgIHVzZXI6ICdyb290JyxcclxuICAgICAgcGFzc3dvcmQ6ICcnLFxyXG4gICAgICBkYXRhYmFzZTogJ21pcnV0YScsXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBbcmVzdWx0XSA9IGF3YWl0IGNvbm5lY3Rpb24uZXhlY3V0ZShcclxuICAgICAgYERFTEVURSBGUk9NIGNvbmR1Y3RvcmVzIFdIRVJFIGlkY29uZHVjdG9yZXM9P2AsXHJcbiAgICAgIFtpZGNvbmR1Y3RvcmVzXVxyXG4gICAgKTtcclxuXHJcbiAgICBhd2FpdCBjb25uZWN0aW9uLmVuZCgpO1xyXG5cclxuICAgIGlmIChyZXN1bHQuYWZmZWN0ZWRSb3dzID09PSAwKSB7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IG1lc3NhZ2U6ICdObyBzZSBlbmNvbnRyw7MgZWwgY29uZHVjdG9yIHBhcmEgZWxpbWluYXInIH0sIHsgc3RhdHVzOiA0MDQgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgbWVzc2FnZTogJ0NvbmR1Y3RvciBlbGltaW5hZG8gY29ycmVjdGFtZW50ZScgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IG1lc3NhZ2U6ICdFcnJvciBhbCBlbGltaW5hciBjb25kdWN0b3InLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9LCB7IHN0YXR1czogNTAwIH0pO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwibXlzcWwiLCJnZXRNeXNxbENvbmZpZyIsIkdFVCIsImNvbm5lY3Rpb24iLCJjcmVhdGVDb25uZWN0aW9uIiwiaG9zdCIsInVzZXIiLCJwYXNzd29yZCIsImRhdGFiYXNlIiwicm93cyIsImV4ZWN1dGUiLCJlbmQiLCJqc29uIiwiUE9TVCIsInJlcXVlc3QiLCJub21icmUiLCJhcGVsbGlkbzEiLCJhcGVsbGlkbzIiLCJkbmkiLCJ0ZWxlZm9ubyIsImxpY2VuY2lhIiwiZmVjaGFfY29udHJhdGFjaW9uIiwibWVzc2FnZSIsInN0YXR1cyIsImVycm9yIiwiUFVUIiwiaWRjb25kdWN0b3JlcyIsIkRFTEVURSIsImJvZHkiLCJOdW1iZXIiLCJlcnIiLCJpc05hTiIsInJlc3VsdCIsImFmZmVjdGVkUm93cyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/dashboard/conductor/route.js\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/mysql2","vendor-chunks/aws-ssl-profiles","vendor-chunks/iconv-lite","vendor-chunks/long","vendor-chunks/named-placeholders","vendor-chunks/denque","vendor-chunks/dotenv","vendor-chunks/is-property","vendor-chunks/lru.min","vendor-chunks/sqlstring","vendor-chunks/seq-queue","vendor-chunks/generate-function","vendor-chunks/safer-buffer"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fdashboard%2Fconductor%2Froute&page=%2Fapi%2Fdashboard%2Fconductor%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fdashboard%2Fconductor%2Froute.js&appDir=C%3A%5Cxampp%5Chtdocs%5CDesarrolo%20servidor%5Cmiruta%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5Cxampp%5Chtdocs%5CDesarrolo%20servidor%5Cmiruta&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();