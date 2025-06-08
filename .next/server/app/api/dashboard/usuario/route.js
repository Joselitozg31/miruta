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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getMysqlConfig: () => (/* binding */ getMysqlConfig)\n/* harmony export */ });\n// Carga dotenv solo en desarrollo (Next.js ya lo hace en producción)\nif (true) {\n    // eslint-disable-next-line @typescript-eslint/no-var-requires\n    // Carga las variables de entorno desde un archivo .env\n    (__webpack_require__(/*! dotenv */ \"(rsc)/./node_modules/dotenv/lib/main.js\").config)();\n}\n// Configuración de conexión a MySQL\nfunction getMysqlConfig() {\n    return {\n        host: process.env.DB_HOST || 'localhost',\n        user: process.env.DB_USERNAME || 'root',\n        password: process.env.DB_PASSWORD || '',\n        database: process.env.DB_DATABASE || 'miruta',\n        port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 3306\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9fZGIuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLHFFQUFxRTtBQUNyRSxJQUFJQSxJQUFxQyxFQUFFO0lBQ3pDLDhEQUE4RDtJQUM5RCx1REFBdUQ7SUFDdkRDLHFGQUF3QjtBQUMxQjtBQUVBLG9DQUFvQztBQUM3QixTQUFTRTtJQUNkLE9BQU87UUFDTEMsTUFBTUosUUFBUUssR0FBRyxDQUFDQyxPQUFPLElBQUk7UUFDN0JDLE1BQU1QLFFBQVFLLEdBQUcsQ0FBQ0csV0FBVyxJQUFJO1FBQ2pDQyxVQUFVVCxRQUFRSyxHQUFHLENBQUNLLFdBQVcsSUFBSTtRQUNyQ0MsVUFBVVgsUUFBUUssR0FBRyxDQUFDTyxXQUFXLElBQUk7UUFDckNDLE1BQU1iLFFBQVFLLEdBQUcsQ0FBQ1MsT0FBTyxHQUFHQyxPQUFPZixRQUFRSyxHQUFHLENBQUNTLE9BQU8sSUFBSTtJQUM1RDtBQUNGIiwic291cmNlcyI6WyJDOlxceGFtcHBcXGh0ZG9jc1xcRGVzYXJyb2xvIHNlcnZpZG9yXFxtaXJ1dGFcXHNyY1xcYXBwXFxhcGlcXF9kYi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDYXJnYSBkb3RlbnYgc29sbyBlbiBkZXNhcnJvbGxvIChOZXh0LmpzIHlhIGxvIGhhY2UgZW4gcHJvZHVjY2nDs24pXHJcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby12YXItcmVxdWlyZXNcclxuICAvLyBDYXJnYSBsYXMgdmFyaWFibGVzIGRlIGVudG9ybm8gZGVzZGUgdW4gYXJjaGl2byAuZW52XHJcbiAgcmVxdWlyZSgnZG90ZW52JykuY29uZmlnKCk7XHJcbn1cclxuXHJcbi8vIENvbmZpZ3VyYWNpw7NuIGRlIGNvbmV4acOzbiBhIE15U1FMXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRNeXNxbENvbmZpZygpIHtcclxuICByZXR1cm4ge1xyXG4gICAgaG9zdDogcHJvY2Vzcy5lbnYuREJfSE9TVCB8fCAnbG9jYWxob3N0JyxcclxuICAgIHVzZXI6IHByb2Nlc3MuZW52LkRCX1VTRVJOQU1FIHx8ICdyb290JyxcclxuICAgIHBhc3N3b3JkOiBwcm9jZXNzLmVudi5EQl9QQVNTV09SRCB8fCAnJyxcclxuICAgIGRhdGFiYXNlOiBwcm9jZXNzLmVudi5EQl9EQVRBQkFTRSB8fCAnbWlydXRhJyxcclxuICAgIHBvcnQ6IHByb2Nlc3MuZW52LkRCX1BPUlQgPyBOdW1iZXIocHJvY2Vzcy5lbnYuREJfUE9SVCkgOiAzMzA2LFxyXG4gIH07XHJcbn1cclxuIl0sIm5hbWVzIjpbInByb2Nlc3MiLCJyZXF1aXJlIiwiY29uZmlnIiwiZ2V0TXlzcWxDb25maWciLCJob3N0IiwiZW52IiwiREJfSE9TVCIsInVzZXIiLCJEQl9VU0VSTkFNRSIsInBhc3N3b3JkIiwiREJfUEFTU1dPUkQiLCJkYXRhYmFzZSIsIkRCX0RBVEFCQVNFIiwicG9ydCIsIkRCX1BPUlQiLCJOdW1iZXIiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/_db.js\n");

/***/ }),

/***/ "(rsc)/./src/app/api/dashboard/usuario/route.js":
/*!************************************************!*\
  !*** ./src/app/api/dashboard/usuario/route.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   PUT: () => (/* binding */ PUT)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mysql2/promise */ \"(rsc)/./node_modules/mysql2/promise.js\");\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_db */ \"(rsc)/./src/app/api/_db.js\");\n\n\n\nasync function GET(request) {\n    // Obtén el idusuarios desde la query (?id=) o desde headers (mejor si usas JWT real)\n    const { searchParams } = new URL(request.url);\n    const idusuarios = searchParams.get('id');\n    if (!idusuarios) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: 'ID de usuario no proporcionado'\n        }, {\n            status: 400\n        });\n    }\n    try {\n        const connection = await mysql2_promise__WEBPACK_IMPORTED_MODULE_1__.createConnection((0,_db__WEBPACK_IMPORTED_MODULE_2__.getMysqlConfig)());\n        const [rows] = await connection.execute(`SELECT idusuarios, nombre, apellido1, apellido2, nombreusuario, email, imagen FROM usuarios WHERE idusuarios = ?`, [\n            idusuarios\n        ]);\n        await connection.end();\n        if (rows.length === 0) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                message: 'Usuario no encontrado'\n            }, {\n                status: 404\n            });\n        }\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(rows[0]);\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: 'Error al obtener usuario',\n            error: error.message\n        }, {\n            status: 500\n        });\n    }\n}\nasync function PUT(request) {\n    try {\n        const body = await request.json();\n        const { idusuarios, nombre, apellido1, apellido2, nombreusuario, email, password, imagen } = body;\n        if (!idusuarios) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                message: 'Falta el id del usuario'\n            }, {\n                status: 400\n            });\n        }\n        const connection = await mysql2_promise__WEBPACK_IMPORTED_MODULE_1__.createConnection((0,_db__WEBPACK_IMPORTED_MODULE_2__.getMysqlConfig)());\n        // Construye la consulta dinámicamente según los campos enviados\n        const fields = [];\n        const values = [];\n        if (nombre !== undefined) {\n            fields.push('nombre = ?');\n            values.push(nombre);\n        }\n        if (apellido1 !== undefined) {\n            fields.push('apellido1 = ?');\n            values.push(apellido1);\n        }\n        if (apellido2 !== undefined) {\n            fields.push('apellido2 = ?');\n            values.push(apellido2);\n        }\n        if (nombreusuario !== undefined) {\n            fields.push('nombreusuario = ?');\n            values.push(nombreusuario);\n        }\n        if (email !== undefined) {\n            fields.push('email = ?');\n            values.push(email);\n        }\n        if (imagen !== undefined) {\n            fields.push('imagen = ?');\n            values.push(imagen);\n        }\n        if (password && password.trim() !== '') {\n            fields.push('password = ?');\n            values.push(password);\n        }\n        if (fields.length === 0) {\n            await connection.end();\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                message: 'No hay datos para actualizar'\n            }, {\n                status: 400\n            });\n        }\n        values.push(idusuarios);\n        const sql = `UPDATE usuarios SET ${fields.join(', ')} WHERE idusuarios = ?`;\n        await connection.execute(sql, values);\n        await connection.end();\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: 'Usuario actualizado correctamente'\n        });\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: 'Error al actualizar usuario',\n            error: error.message\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9kYXNoYm9hcmQvdXN1YXJpby9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEyQztBQUNSO0FBQ1E7QUFFcEMsZUFBZUcsSUFBSUMsT0FBTztJQUMvQixxRkFBcUY7SUFDckYsTUFBTSxFQUFFQyxZQUFZLEVBQUUsR0FBRyxJQUFJQyxJQUFJRixRQUFRRyxHQUFHO0lBQzVDLE1BQU1DLGFBQWFILGFBQWFJLEdBQUcsQ0FBQztJQUVwQyxJQUFJLENBQUNELFlBQVk7UUFDZixPQUFPUixxREFBWUEsQ0FBQ1UsSUFBSSxDQUFDO1lBQUVDLFNBQVM7UUFBaUMsR0FBRztZQUFFQyxRQUFRO1FBQUk7SUFDeEY7SUFFQSxJQUFJO1FBQ0YsTUFBTUMsYUFBYSxNQUFNWiw0REFBc0IsQ0FBQ0MsbURBQWNBO1FBRTlELE1BQU0sQ0FBQ2EsS0FBSyxHQUFHLE1BQU1GLFdBQVdHLE9BQU8sQ0FDckMsQ0FBQyxnSEFBZ0gsQ0FBQyxFQUNsSDtZQUFDUjtTQUFXO1FBRWQsTUFBTUssV0FBV0ksR0FBRztRQUVwQixJQUFJRixLQUFLRyxNQUFNLEtBQUssR0FBRztZQUNyQixPQUFPbEIscURBQVlBLENBQUNVLElBQUksQ0FBQztnQkFBRUMsU0FBUztZQUF3QixHQUFHO2dCQUFFQyxRQUFRO1lBQUk7UUFDL0U7UUFFQSxPQUFPWixxREFBWUEsQ0FBQ1UsSUFBSSxDQUFDSyxJQUFJLENBQUMsRUFBRTtJQUNsQyxFQUFFLE9BQU9JLE9BQU87UUFDZCxPQUFPbkIscURBQVlBLENBQUNVLElBQUksQ0FBQztZQUFFQyxTQUFTO1lBQTRCUSxPQUFPQSxNQUFNUixPQUFPO1FBQUMsR0FBRztZQUFFQyxRQUFRO1FBQUk7SUFDeEc7QUFDRjtBQUVPLGVBQWVRLElBQUloQixPQUFPO0lBQy9CLElBQUk7UUFDRixNQUFNaUIsT0FBTyxNQUFNakIsUUFBUU0sSUFBSTtRQUMvQixNQUFNLEVBQUVGLFVBQVUsRUFBRWMsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRUMsYUFBYSxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRUMsTUFBTSxFQUFFLEdBQUdQO1FBRTdGLElBQUksQ0FBQ2IsWUFBWTtZQUNmLE9BQU9SLHFEQUFZQSxDQUFDVSxJQUFJLENBQUM7Z0JBQUVDLFNBQVM7WUFBMEIsR0FBRztnQkFBRUMsUUFBUTtZQUFJO1FBQ2pGO1FBRUEsTUFBTUMsYUFBYSxNQUFNWiw0REFBc0IsQ0FBQ0MsbURBQWNBO1FBRTlELGdFQUFnRTtRQUNoRSxNQUFNMkIsU0FBUyxFQUFFO1FBQ2pCLE1BQU1DLFNBQVMsRUFBRTtRQUVqQixJQUFJUixXQUFXUyxXQUFXO1lBQ3hCRixPQUFPRyxJQUFJLENBQUM7WUFDWkYsT0FBT0UsSUFBSSxDQUFDVjtRQUNkO1FBQ0EsSUFBSUMsY0FBY1EsV0FBVztZQUMzQkYsT0FBT0csSUFBSSxDQUFDO1lBQ1pGLE9BQU9FLElBQUksQ0FBQ1Q7UUFDZDtRQUNBLElBQUlDLGNBQWNPLFdBQVc7WUFDM0JGLE9BQU9HLElBQUksQ0FBQztZQUNaRixPQUFPRSxJQUFJLENBQUNSO1FBQ2Q7UUFDQSxJQUFJQyxrQkFBa0JNLFdBQVc7WUFDL0JGLE9BQU9HLElBQUksQ0FBQztZQUNaRixPQUFPRSxJQUFJLENBQUNQO1FBQ2Q7UUFDQSxJQUFJQyxVQUFVSyxXQUFXO1lBQ3ZCRixPQUFPRyxJQUFJLENBQUM7WUFDWkYsT0FBT0UsSUFBSSxDQUFDTjtRQUNkO1FBQ0EsSUFBSUUsV0FBV0csV0FBVztZQUN4QkYsT0FBT0csSUFBSSxDQUFDO1lBQ1pGLE9BQU9FLElBQUksQ0FBQ0o7UUFDZDtRQUNBLElBQUlELFlBQVlBLFNBQVNNLElBQUksT0FBTyxJQUFJO1lBQ3RDSixPQUFPRyxJQUFJLENBQUM7WUFDWkYsT0FBT0UsSUFBSSxDQUFDTDtRQUNkO1FBRUEsSUFBSUUsT0FBT1gsTUFBTSxLQUFLLEdBQUc7WUFDdkIsTUFBTUwsV0FBV0ksR0FBRztZQUNwQixPQUFPakIscURBQVlBLENBQUNVLElBQUksQ0FBQztnQkFBRUMsU0FBUztZQUErQixHQUFHO2dCQUFFQyxRQUFRO1lBQUk7UUFDdEY7UUFFQWtCLE9BQU9FLElBQUksQ0FBQ3hCO1FBRVosTUFBTTBCLE1BQU0sQ0FBQyxvQkFBb0IsRUFBRUwsT0FBT00sSUFBSSxDQUFDLE1BQU0scUJBQXFCLENBQUM7UUFDM0UsTUFBTXRCLFdBQVdHLE9BQU8sQ0FBQ2tCLEtBQUtKO1FBRTlCLE1BQU1qQixXQUFXSSxHQUFHO1FBRXBCLE9BQU9qQixxREFBWUEsQ0FBQ1UsSUFBSSxDQUFDO1lBQUVDLFNBQVM7UUFBb0M7SUFDMUUsRUFBRSxPQUFPUSxPQUFPO1FBQ2QsT0FBT25CLHFEQUFZQSxDQUFDVSxJQUFJLENBQUM7WUFBRUMsU0FBUztZQUErQlEsT0FBT0EsTUFBTVIsT0FBTztRQUFDLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQzNHO0FBQ0YiLCJzb3VyY2VzIjpbIkM6XFx4YW1wcFxcaHRkb2NzXFxEZXNhcnJvbG8gc2Vydmlkb3JcXG1pcnV0YVxcc3JjXFxhcHBcXGFwaVxcZGFzaGJvYXJkXFx1c3VhcmlvXFxyb3V0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcic7XHJcbmltcG9ydCBteXNxbCBmcm9tICdteXNxbDIvcHJvbWlzZSc7XHJcbmltcG9ydCB7IGdldE15c3FsQ29uZmlnIH0gZnJvbSAnLi4vLi4vX2RiJztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQocmVxdWVzdCkge1xyXG4gIC8vIE9idMOpbiBlbCBpZHVzdWFyaW9zIGRlc2RlIGxhIHF1ZXJ5ICg/aWQ9KSBvIGRlc2RlIGhlYWRlcnMgKG1lam9yIHNpIHVzYXMgSldUIHJlYWwpXHJcbiAgY29uc3QgeyBzZWFyY2hQYXJhbXMgfSA9IG5ldyBVUkwocmVxdWVzdC51cmwpO1xyXG4gIGNvbnN0IGlkdXN1YXJpb3MgPSBzZWFyY2hQYXJhbXMuZ2V0KCdpZCcpO1xyXG5cclxuICBpZiAoIWlkdXN1YXJpb3MpIHtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IG1lc3NhZ2U6ICdJRCBkZSB1c3VhcmlvIG5vIHByb3BvcmNpb25hZG8nIH0sIHsgc3RhdHVzOiA0MDAgfSk7XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgY29ubmVjdGlvbiA9IGF3YWl0IG15c3FsLmNyZWF0ZUNvbm5lY3Rpb24oZ2V0TXlzcWxDb25maWcoKSk7XHJcblxyXG4gICAgY29uc3QgW3Jvd3NdID0gYXdhaXQgY29ubmVjdGlvbi5leGVjdXRlKFxyXG4gICAgICBgU0VMRUNUIGlkdXN1YXJpb3MsIG5vbWJyZSwgYXBlbGxpZG8xLCBhcGVsbGlkbzIsIG5vbWJyZXVzdWFyaW8sIGVtYWlsLCBpbWFnZW4gRlJPTSB1c3VhcmlvcyBXSEVSRSBpZHVzdWFyaW9zID0gP2AsXHJcbiAgICAgIFtpZHVzdWFyaW9zXVxyXG4gICAgKTtcclxuICAgIGF3YWl0IGNvbm5lY3Rpb24uZW5kKCk7XHJcblxyXG4gICAgaWYgKHJvd3MubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IG1lc3NhZ2U6ICdVc3VhcmlvIG5vIGVuY29udHJhZG8nIH0sIHsgc3RhdHVzOiA0MDQgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHJvd3NbMF0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBtZXNzYWdlOiAnRXJyb3IgYWwgb2J0ZW5lciB1c3VhcmlvJywgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfSwgeyBzdGF0dXM6IDUwMCB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQVVQocmVxdWVzdCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBib2R5ID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XHJcbiAgICBjb25zdCB7IGlkdXN1YXJpb3MsIG5vbWJyZSwgYXBlbGxpZG8xLCBhcGVsbGlkbzIsIG5vbWJyZXVzdWFyaW8sIGVtYWlsLCBwYXNzd29yZCwgaW1hZ2VuIH0gPSBib2R5O1xyXG5cclxuICAgIGlmICghaWR1c3Vhcmlvcykge1xyXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBtZXNzYWdlOiAnRmFsdGEgZWwgaWQgZGVsIHVzdWFyaW8nIH0sIHsgc3RhdHVzOiA0MDAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY29ubmVjdGlvbiA9IGF3YWl0IG15c3FsLmNyZWF0ZUNvbm5lY3Rpb24oZ2V0TXlzcWxDb25maWcoKSk7XHJcblxyXG4gICAgLy8gQ29uc3RydXllIGxhIGNvbnN1bHRhIGRpbsOhbWljYW1lbnRlIHNlZ8O6biBsb3MgY2FtcG9zIGVudmlhZG9zXHJcbiAgICBjb25zdCBmaWVsZHMgPSBbXTtcclxuICAgIGNvbnN0IHZhbHVlcyA9IFtdO1xyXG5cclxuICAgIGlmIChub21icmUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBmaWVsZHMucHVzaCgnbm9tYnJlID0gPycpO1xyXG4gICAgICB2YWx1ZXMucHVzaChub21icmUpO1xyXG4gICAgfVxyXG4gICAgaWYgKGFwZWxsaWRvMSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGZpZWxkcy5wdXNoKCdhcGVsbGlkbzEgPSA/Jyk7XHJcbiAgICAgIHZhbHVlcy5wdXNoKGFwZWxsaWRvMSk7XHJcbiAgICB9XHJcbiAgICBpZiAoYXBlbGxpZG8yICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgZmllbGRzLnB1c2goJ2FwZWxsaWRvMiA9ID8nKTtcclxuICAgICAgdmFsdWVzLnB1c2goYXBlbGxpZG8yKTtcclxuICAgIH1cclxuICAgIGlmIChub21icmV1c3VhcmlvICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgZmllbGRzLnB1c2goJ25vbWJyZXVzdWFyaW8gPSA/Jyk7XHJcbiAgICAgIHZhbHVlcy5wdXNoKG5vbWJyZXVzdWFyaW8pO1xyXG4gICAgfVxyXG4gICAgaWYgKGVtYWlsICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgZmllbGRzLnB1c2goJ2VtYWlsID0gPycpO1xyXG4gICAgICB2YWx1ZXMucHVzaChlbWFpbCk7XHJcbiAgICB9XHJcbiAgICBpZiAoaW1hZ2VuICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgZmllbGRzLnB1c2goJ2ltYWdlbiA9ID8nKTtcclxuICAgICAgdmFsdWVzLnB1c2goaW1hZ2VuKTtcclxuICAgIH1cclxuICAgIGlmIChwYXNzd29yZCAmJiBwYXNzd29yZC50cmltKCkgIT09ICcnKSB7XHJcbiAgICAgIGZpZWxkcy5wdXNoKCdwYXNzd29yZCA9ID8nKTtcclxuICAgICAgdmFsdWVzLnB1c2gocGFzc3dvcmQpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChmaWVsZHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIGF3YWl0IGNvbm5lY3Rpb24uZW5kKCk7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IG1lc3NhZ2U6ICdObyBoYXkgZGF0b3MgcGFyYSBhY3R1YWxpemFyJyB9LCB7IHN0YXR1czogNDAwIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHZhbHVlcy5wdXNoKGlkdXN1YXJpb3MpO1xyXG5cclxuICAgIGNvbnN0IHNxbCA9IGBVUERBVEUgdXN1YXJpb3MgU0VUICR7ZmllbGRzLmpvaW4oJywgJyl9IFdIRVJFIGlkdXN1YXJpb3MgPSA/YDtcclxuICAgIGF3YWl0IGNvbm5lY3Rpb24uZXhlY3V0ZShzcWwsIHZhbHVlcyk7XHJcblxyXG4gICAgYXdhaXQgY29ubmVjdGlvbi5lbmQoKTtcclxuXHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBtZXNzYWdlOiAnVXN1YXJpbyBhY3R1YWxpemFkbyBjb3JyZWN0YW1lbnRlJyB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgbWVzc2FnZTogJ0Vycm9yIGFsIGFjdHVhbGl6YXIgdXN1YXJpbycsIGVycm9yOiBlcnJvci5tZXNzYWdlIH0sIHsgc3RhdHVzOiA1MDAgfSk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJteXNxbCIsImdldE15c3FsQ29uZmlnIiwiR0VUIiwicmVxdWVzdCIsInNlYXJjaFBhcmFtcyIsIlVSTCIsInVybCIsImlkdXN1YXJpb3MiLCJnZXQiLCJqc29uIiwibWVzc2FnZSIsInN0YXR1cyIsImNvbm5lY3Rpb24iLCJjcmVhdGVDb25uZWN0aW9uIiwicm93cyIsImV4ZWN1dGUiLCJlbmQiLCJsZW5ndGgiLCJlcnJvciIsIlBVVCIsImJvZHkiLCJub21icmUiLCJhcGVsbGlkbzEiLCJhcGVsbGlkbzIiLCJub21icmV1c3VhcmlvIiwiZW1haWwiLCJwYXNzd29yZCIsImltYWdlbiIsImZpZWxkcyIsInZhbHVlcyIsInVuZGVmaW5lZCIsInB1c2giLCJ0cmltIiwic3FsIiwiam9pbiJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/dashboard/usuario/route.js\n");

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