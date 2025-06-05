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
exports.id = "app/api/dashboard/usuario/route";
exports.ids = ["app/api/dashboard/usuario/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fdashboard%2Fusuario%2Froute&page=%2Fapi%2Fdashboard%2Fusuario%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fdashboard%2Fusuario%2Froute.js&appDir=C%3A%5Cxampp%5Chtdocs%5CDesarrolo%20servidor%5Cmiruta%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5Cxampp%5Chtdocs%5CDesarrolo%20servidor%5Cmiruta&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fdashboard%2Fusuario%2Froute&page=%2Fapi%2Fdashboard%2Fusuario%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fdashboard%2Fusuario%2Froute.js&appDir=C%3A%5Cxampp%5Chtdocs%5CDesarrolo%20servidor%5Cmiruta%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5Cxampp%5Chtdocs%5CDesarrolo%20servidor%5Cmiruta&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_xampp_htdocs_Desarrolo_servidor_miruta_src_app_api_dashboard_usuario_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/dashboard/usuario/route.js */ \"(rsc)/./src/app/api/dashboard/usuario/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/dashboard/usuario/route\",\n        pathname: \"/api/dashboard/usuario\",\n        filename: \"route\",\n        bundlePath: \"app/api/dashboard/usuario/route\"\n    },\n    resolvedPagePath: \"C:\\\\xampp\\\\htdocs\\\\Desarrolo servidor\\\\miruta\\\\src\\\\app\\\\api\\\\dashboard\\\\usuario\\\\route.js\",\n    nextConfigOutput,\n    userland: C_xampp_htdocs_Desarrolo_servidor_miruta_src_app_api_dashboard_usuario_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZkYXNoYm9hcmQlMkZ1c3VhcmlvJTJGcm91dGUmcGFnZT0lMkZhcGklMkZkYXNoYm9hcmQlMkZ1c3VhcmlvJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGZGFzaGJvYXJkJTJGdXN1YXJpbyUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDeGFtcHAlNUNodGRvY3MlNUNEZXNhcnJvbG8lMjBzZXJ2aWRvciU1Q21pcnV0YSU1Q3NyYyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q3hhbXBwJTVDaHRkb2NzJTVDRGVzYXJyb2xvJTIwc2Vydmlkb3IlNUNtaXJ1dGEmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQzBDO0FBQ3ZIO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFx4YW1wcFxcXFxodGRvY3NcXFxcRGVzYXJyb2xvIHNlcnZpZG9yXFxcXG1pcnV0YVxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxkYXNoYm9hcmRcXFxcdXN1YXJpb1xcXFxyb3V0ZS5qc1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvZGFzaGJvYXJkL3VzdWFyaW8vcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9kYXNoYm9hcmQvdXN1YXJpb1wiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvZGFzaGJvYXJkL3VzdWFyaW8vcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFx4YW1wcFxcXFxodGRvY3NcXFxcRGVzYXJyb2xvIHNlcnZpZG9yXFxcXG1pcnV0YVxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxkYXNoYm9hcmRcXFxcdXN1YXJpb1xcXFxyb3V0ZS5qc1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fdashboard%2Fusuario%2Froute&page=%2Fapi%2Fdashboard%2Fusuario%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fdashboard%2Fusuario%2Froute.js&appDir=C%3A%5Cxampp%5Chtdocs%5CDesarrolo%20servidor%5Cmiruta%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5Cxampp%5Chtdocs%5CDesarrolo%20servidor%5Cmiruta&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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

/***/ "(rsc)/./src/app/api/dashboard/usuario/route.js":
/*!************************************************!*\
  !*** ./src/app/api/dashboard/usuario/route.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   PUT: () => (/* binding */ PUT)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mysql2/promise */ \"(rsc)/./node_modules/mysql2/promise.js\");\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_db */ \"(rsc)/./src/app/api/_db.js\");\n\n\n\nasync function GET(request) {\n    // Obtén el idusuarios desde la query (?id=) o desde headers (mejor si usas JWT real)\n    const { searchParams } = new URL(request.url);\n    const idusuarios = searchParams.get('id');\n    if (!idusuarios) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: 'ID de usuario no proporcionado'\n        }, {\n            status: 400\n        });\n    }\n    try {\n        const connection = await mysql2_promise__WEBPACK_IMPORTED_MODULE_1__.createConnection((0,_db__WEBPACK_IMPORTED_MODULE_2__.getMysqlConfig)());\n        const [rows] = await connection.execute(`SELECT idusuarios, nombre, apellido1, apellido2, nombreusuario, email FROM usuarios WHERE idusuarios = ?`, [\n            idusuarios\n        ]);\n        await connection.end();\n        if (rows.length === 0) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                message: 'Usuario no encontrado'\n            }, {\n                status: 404\n            });\n        }\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(rows[0]);\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: 'Error al obtener usuario',\n            error: error.message\n        }, {\n            status: 500\n        });\n    }\n}\nasync function PUT(request) {\n    try {\n        const body = await request.json();\n        const { idusuarios, nombre, apellido1, apellido2, nombreusuario, email, password } = body;\n        if (!idusuarios || !nombre || !apellido1 || !nombreusuario || !email) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                message: 'Faltan campos obligatorios'\n            }, {\n                status: 400\n            });\n        }\n        const connection = await mysql2_promise__WEBPACK_IMPORTED_MODULE_1__.createConnection((0,_db__WEBPACK_IMPORTED_MODULE_2__.getMysqlConfig)());\n        if (password) {\n            await connection.execute(`UPDATE usuarios SET nombre=?, apellido1=?, apellido2=?, nombreusuario=?, email=?, password=? WHERE idusuarios=?`, [\n                nombre,\n                apellido1,\n                apellido2,\n                nombreusuario,\n                email,\n                password,\n                idusuarios\n            ]);\n        } else {\n            await connection.execute(`UPDATE usuarios SET nombre=?, apellido1=?, apellido2=?, nombreusuario=?, email=? WHERE idusuarios=?`, [\n                nombre,\n                apellido1,\n                apellido2,\n                nombreusuario,\n                email,\n                idusuarios\n            ]);\n        }\n        await connection.end();\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: 'Usuario actualizado correctamente'\n        });\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: 'Error al actualizar usuario',\n            error: error.message\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9kYXNoYm9hcmQvdXN1YXJpby9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEyQztBQUNSO0FBQ1E7QUFFcEMsZUFBZUcsSUFBSUMsT0FBTztJQUMvQixxRkFBcUY7SUFDckYsTUFBTSxFQUFFQyxZQUFZLEVBQUUsR0FBRyxJQUFJQyxJQUFJRixRQUFRRyxHQUFHO0lBQzVDLE1BQU1DLGFBQWFILGFBQWFJLEdBQUcsQ0FBQztJQUVwQyxJQUFJLENBQUNELFlBQVk7UUFDZixPQUFPUixxREFBWUEsQ0FBQ1UsSUFBSSxDQUFDO1lBQUVDLFNBQVM7UUFBaUMsR0FBRztZQUFFQyxRQUFRO1FBQUk7SUFDeEY7SUFFQSxJQUFJO1FBQ0YsTUFBTUMsYUFBYSxNQUFNWiw0REFBc0IsQ0FBQ0MsbURBQWNBO1FBRTlELE1BQU0sQ0FBQ2EsS0FBSyxHQUFHLE1BQU1GLFdBQVdHLE9BQU8sQ0FDckMsQ0FBQyx3R0FBd0csQ0FBQyxFQUMxRztZQUFDUjtTQUFXO1FBRWQsTUFBTUssV0FBV0ksR0FBRztRQUVwQixJQUFJRixLQUFLRyxNQUFNLEtBQUssR0FBRztZQUNyQixPQUFPbEIscURBQVlBLENBQUNVLElBQUksQ0FBQztnQkFBRUMsU0FBUztZQUF3QixHQUFHO2dCQUFFQyxRQUFRO1lBQUk7UUFDL0U7UUFFQSxPQUFPWixxREFBWUEsQ0FBQ1UsSUFBSSxDQUFDSyxJQUFJLENBQUMsRUFBRTtJQUNsQyxFQUFFLE9BQU9JLE9BQU87UUFDZCxPQUFPbkIscURBQVlBLENBQUNVLElBQUksQ0FBQztZQUFFQyxTQUFTO1lBQTRCUSxPQUFPQSxNQUFNUixPQUFPO1FBQUMsR0FBRztZQUFFQyxRQUFRO1FBQUk7SUFDeEc7QUFDRjtBQUVPLGVBQWVRLElBQUloQixPQUFPO0lBQy9CLElBQUk7UUFDRixNQUFNaUIsT0FBTyxNQUFNakIsUUFBUU0sSUFBSTtRQUMvQixNQUFNLEVBQUVGLFVBQVUsRUFBRWMsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRUMsYUFBYSxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRSxHQUFHTjtRQUVyRixJQUFJLENBQUNiLGNBQWMsQ0FBQ2MsVUFBVSxDQUFDQyxhQUFhLENBQUNFLGlCQUFpQixDQUFDQyxPQUFPO1lBQ3BFLE9BQU8xQixxREFBWUEsQ0FBQ1UsSUFBSSxDQUFDO2dCQUFFQyxTQUFTO1lBQTZCLEdBQUc7Z0JBQUVDLFFBQVE7WUFBSTtRQUNwRjtRQUVBLE1BQU1DLGFBQWEsTUFBTVosNERBQXNCLENBQUNDLG1EQUFjQTtRQUU5RCxJQUFJeUIsVUFBVTtZQUNaLE1BQU1kLFdBQVdHLE9BQU8sQ0FDdEIsQ0FBQywrR0FBK0csQ0FBQyxFQUNqSDtnQkFBQ007Z0JBQVFDO2dCQUFXQztnQkFBV0M7Z0JBQWVDO2dCQUFPQztnQkFBVW5CO2FBQVc7UUFFOUUsT0FBTztZQUNMLE1BQU1LLFdBQVdHLE9BQU8sQ0FDdEIsQ0FBQyxtR0FBbUcsQ0FBQyxFQUNyRztnQkFBQ007Z0JBQVFDO2dCQUFXQztnQkFBV0M7Z0JBQWVDO2dCQUFPbEI7YUFBVztRQUVwRTtRQUNBLE1BQU1LLFdBQVdJLEdBQUc7UUFFcEIsT0FBT2pCLHFEQUFZQSxDQUFDVSxJQUFJLENBQUM7WUFBRUMsU0FBUztRQUFvQztJQUMxRSxFQUFFLE9BQU9RLE9BQU87UUFDZCxPQUFPbkIscURBQVlBLENBQUNVLElBQUksQ0FBQztZQUFFQyxTQUFTO1lBQStCUSxPQUFPQSxNQUFNUixPQUFPO1FBQUMsR0FBRztZQUFFQyxRQUFRO1FBQUk7SUFDM0c7QUFDRiIsInNvdXJjZXMiOlsiQzpcXHhhbXBwXFxodGRvY3NcXERlc2Fycm9sbyBzZXJ2aWRvclxcbWlydXRhXFxzcmNcXGFwcFxcYXBpXFxkYXNoYm9hcmRcXHVzdWFyaW9cXHJvdXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJztcclxuaW1wb3J0IG15c3FsIGZyb20gJ215c3FsMi9wcm9taXNlJztcclxuaW1wb3J0IHsgZ2V0TXlzcWxDb25maWcgfSBmcm9tICcuLi8uLi9fZGInO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVChyZXF1ZXN0KSB7XHJcbiAgLy8gT2J0w6luIGVsIGlkdXN1YXJpb3MgZGVzZGUgbGEgcXVlcnkgKD9pZD0pIG8gZGVzZGUgaGVhZGVycyAobWVqb3Igc2kgdXNhcyBKV1QgcmVhbClcclxuICBjb25zdCB7IHNlYXJjaFBhcmFtcyB9ID0gbmV3IFVSTChyZXF1ZXN0LnVybCk7XHJcbiAgY29uc3QgaWR1c3VhcmlvcyA9IHNlYXJjaFBhcmFtcy5nZXQoJ2lkJyk7XHJcblxyXG4gIGlmICghaWR1c3Vhcmlvcykge1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgbWVzc2FnZTogJ0lEIGRlIHVzdWFyaW8gbm8gcHJvcG9yY2lvbmFkbycgfSwgeyBzdGF0dXM6IDQwMCB9KTtcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBjb25uZWN0aW9uID0gYXdhaXQgbXlzcWwuY3JlYXRlQ29ubmVjdGlvbihnZXRNeXNxbENvbmZpZygpKTtcclxuXHJcbiAgICBjb25zdCBbcm93c10gPSBhd2FpdCBjb25uZWN0aW9uLmV4ZWN1dGUoXHJcbiAgICAgIGBTRUxFQ1QgaWR1c3Vhcmlvcywgbm9tYnJlLCBhcGVsbGlkbzEsIGFwZWxsaWRvMiwgbm9tYnJldXN1YXJpbywgZW1haWwgRlJPTSB1c3VhcmlvcyBXSEVSRSBpZHVzdWFyaW9zID0gP2AsXHJcbiAgICAgIFtpZHVzdWFyaW9zXVxyXG4gICAgKTtcclxuICAgIGF3YWl0IGNvbm5lY3Rpb24uZW5kKCk7XHJcblxyXG4gICAgaWYgKHJvd3MubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IG1lc3NhZ2U6ICdVc3VhcmlvIG5vIGVuY29udHJhZG8nIH0sIHsgc3RhdHVzOiA0MDQgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHJvd3NbMF0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBtZXNzYWdlOiAnRXJyb3IgYWwgb2J0ZW5lciB1c3VhcmlvJywgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfSwgeyBzdGF0dXM6IDUwMCB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQVVQocmVxdWVzdCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBib2R5ID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XHJcbiAgICBjb25zdCB7IGlkdXN1YXJpb3MsIG5vbWJyZSwgYXBlbGxpZG8xLCBhcGVsbGlkbzIsIG5vbWJyZXVzdWFyaW8sIGVtYWlsLCBwYXNzd29yZCB9ID0gYm9keTtcclxuXHJcbiAgICBpZiAoIWlkdXN1YXJpb3MgfHwgIW5vbWJyZSB8fCAhYXBlbGxpZG8xIHx8ICFub21icmV1c3VhcmlvIHx8ICFlbWFpbCkge1xyXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBtZXNzYWdlOiAnRmFsdGFuIGNhbXBvcyBvYmxpZ2F0b3Jpb3MnIH0sIHsgc3RhdHVzOiA0MDAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY29ubmVjdGlvbiA9IGF3YWl0IG15c3FsLmNyZWF0ZUNvbm5lY3Rpb24oZ2V0TXlzcWxDb25maWcoKSk7XHJcblxyXG4gICAgaWYgKHBhc3N3b3JkKSB7XHJcbiAgICAgIGF3YWl0IGNvbm5lY3Rpb24uZXhlY3V0ZShcclxuICAgICAgICBgVVBEQVRFIHVzdWFyaW9zIFNFVCBub21icmU9PywgYXBlbGxpZG8xPT8sIGFwZWxsaWRvMj0/LCBub21icmV1c3VhcmlvPT8sIGVtYWlsPT8sIHBhc3N3b3JkPT8gV0hFUkUgaWR1c3Vhcmlvcz0/YCxcclxuICAgICAgICBbbm9tYnJlLCBhcGVsbGlkbzEsIGFwZWxsaWRvMiwgbm9tYnJldXN1YXJpbywgZW1haWwsIHBhc3N3b3JkLCBpZHVzdWFyaW9zXVxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYXdhaXQgY29ubmVjdGlvbi5leGVjdXRlKFxyXG4gICAgICAgIGBVUERBVEUgdXN1YXJpb3MgU0VUIG5vbWJyZT0/LCBhcGVsbGlkbzE9PywgYXBlbGxpZG8yPT8sIG5vbWJyZXVzdWFyaW89PywgZW1haWw9PyBXSEVSRSBpZHVzdWFyaW9zPT9gLFxyXG4gICAgICAgIFtub21icmUsIGFwZWxsaWRvMSwgYXBlbGxpZG8yLCBub21icmV1c3VhcmlvLCBlbWFpbCwgaWR1c3Vhcmlvc11cclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIGF3YWl0IGNvbm5lY3Rpb24uZW5kKCk7XHJcblxyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgbWVzc2FnZTogJ1VzdWFyaW8gYWN0dWFsaXphZG8gY29ycmVjdGFtZW50ZScgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IG1lc3NhZ2U6ICdFcnJvciBhbCBhY3R1YWxpemFyIHVzdWFyaW8nLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9LCB7IHN0YXR1czogNTAwIH0pO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwibXlzcWwiLCJnZXRNeXNxbENvbmZpZyIsIkdFVCIsInJlcXVlc3QiLCJzZWFyY2hQYXJhbXMiLCJVUkwiLCJ1cmwiLCJpZHVzdWFyaW9zIiwiZ2V0IiwianNvbiIsIm1lc3NhZ2UiLCJzdGF0dXMiLCJjb25uZWN0aW9uIiwiY3JlYXRlQ29ubmVjdGlvbiIsInJvd3MiLCJleGVjdXRlIiwiZW5kIiwibGVuZ3RoIiwiZXJyb3IiLCJQVVQiLCJib2R5Iiwibm9tYnJlIiwiYXBlbGxpZG8xIiwiYXBlbGxpZG8yIiwibm9tYnJldXN1YXJpbyIsImVtYWlsIiwicGFzc3dvcmQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/dashboard/usuario/route.js\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/mysql2","vendor-chunks/aws-ssl-profiles","vendor-chunks/iconv-lite","vendor-chunks/long","vendor-chunks/named-placeholders","vendor-chunks/denque","vendor-chunks/dotenv","vendor-chunks/is-property","vendor-chunks/lru.min","vendor-chunks/sqlstring","vendor-chunks/seq-queue","vendor-chunks/generate-function","vendor-chunks/safer-buffer"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fdashboard%2Fusuario%2Froute&page=%2Fapi%2Fdashboard%2Fusuario%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fdashboard%2Fusuario%2Froute.js&appDir=C%3A%5Cxampp%5Chtdocs%5CDesarrolo%20servidor%5Cmiruta%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5Cxampp%5Chtdocs%5CDesarrolo%20servidor%5Cmiruta&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();