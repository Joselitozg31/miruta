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

/***/ "(rsc)/./src/app/api/dashboard/conductor/route.js":
/*!**************************************************!*\
  !*** ./src/app/api/dashboard/conductor/route.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DELETE: () => (/* binding */ DELETE),\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST),\n/* harmony export */   PUT: () => (/* binding */ PUT)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mysql2/promise */ \"(rsc)/./node_modules/mysql2/promise.js\");\n\n\nasync function GET() {\n    const connection = await mysql2_promise__WEBPACK_IMPORTED_MODULE_1__.createConnection({\n        host: 'localhost',\n        user: 'root',\n        password: '',\n        database: 'miruta'\n    });\n    const [rows] = await connection.execute(`SELECT idconductores, nombre, apellido1, apellido2, dni, telefono, licencia, fecha_contratacion FROM conductores`);\n    await connection.end();\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(rows);\n}\nasync function POST(request) {\n    try {\n        const { nombre, apellido1, apellido2, dni, telefono, licencia, fecha_contratacion } = await request.json();\n        if (!nombre || !apellido1 || !dni || !telefono || !licencia || !fecha_contratacion) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                message: 'Faltan campos obligatorios'\n            }, {\n                status: 400\n            });\n        }\n        const connection = await mysql2_promise__WEBPACK_IMPORTED_MODULE_1__.createConnection({\n            host: 'localhost',\n            user: 'root',\n            password: '',\n            database: 'miruta'\n        });\n        await connection.execute(`INSERT INTO conductores (nombre, apellido1, apellido2, dni, telefono, licencia, fecha_contratacion) VALUES (?, ?, ?, ?, ?, ?, ?)`, [\n            nombre,\n            apellido1,\n            apellido2,\n            dni,\n            telefono,\n            licencia,\n            fecha_contratacion\n        ]);\n        await connection.end();\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: 'Conductor añadido correctamente'\n        });\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: 'Error al añadir conductor',\n            error: error.message\n        }, {\n            status: 500\n        });\n    }\n}\n// Actualizar conductor (PUT)\nasync function PUT(request) {\n    try {\n        const { idconductores, nombre, apellido1, apellido2, dni, telefono, licencia, fecha_contratacion } = await request.json();\n        if (!idconductores || !nombre || !apellido1 || !dni || !telefono || !licencia || !fecha_contratacion) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                message: 'Faltan campos obligatorios'\n            }, {\n                status: 400\n            });\n        }\n        const connection = await mysql2_promise__WEBPACK_IMPORTED_MODULE_1__.createConnection({\n            host: 'localhost',\n            user: 'root',\n            password: '',\n            database: 'miruta'\n        });\n        await connection.execute(`UPDATE conductores SET nombre=?, apellido1=?, apellido2=?, dni=?, telefono=?, licencia=?, fecha_contratacion=? WHERE idconductores=?`, [\n            nombre,\n            apellido1,\n            apellido2,\n            dni,\n            telefono,\n            licencia,\n            fecha_contratacion,\n            idconductores\n        ]);\n        await connection.end();\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: 'Conductor actualizado correctamente'\n        });\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: 'Error al actualizar conductor',\n            error: error.message\n        }, {\n            status: 500\n        });\n    }\n}\n// Borrar conductor (DELETE)\nasync function DELETE(request) {\n    try {\n        let idconductores = null;\n        try {\n            const body = await request.json();\n            idconductores = Number(body.idconductores);\n        } catch (err) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                message: 'Falta el id del conductor o el body no es JSON',\n                error: err?.message\n            }, {\n                status: 400\n            });\n        }\n        if (!idconductores || isNaN(idconductores)) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                message: 'Falta el id del conductor o el id no es válido'\n            }, {\n                status: 400\n            });\n        }\n        const connection = await mysql2_promise__WEBPACK_IMPORTED_MODULE_1__.createConnection({\n            host: 'localhost',\n            user: 'root',\n            password: '',\n            database: 'miruta'\n        });\n        const [result] = await connection.execute(`DELETE FROM conductores WHERE idconductores=?`, [\n            idconductores\n        ]);\n        await connection.end();\n        if (result.affectedRows === 0) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                message: 'No se encontró el conductor para eliminar'\n            }, {\n                status: 404\n            });\n        }\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: 'Conductor eliminado correctamente'\n        });\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: 'Error al eliminar conductor',\n            error: error.message\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9kYXNoYm9hcmQvY29uZHVjdG9yL3JvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEyQztBQUNSO0FBRTVCLGVBQWVFO0lBQ3BCLE1BQU1DLGFBQWEsTUFBTUYsNERBQXNCLENBQUM7UUFDOUNJLE1BQU07UUFDTkMsTUFBTTtRQUNOQyxVQUFVO1FBQ1ZDLFVBQVU7SUFDWjtJQUVBLE1BQU0sQ0FBQ0MsS0FBSyxHQUFHLE1BQU1OLFdBQVdPLE9BQU8sQ0FDckMsQ0FBQyxnSEFBZ0gsQ0FBQztJQUdwSCxNQUFNUCxXQUFXUSxHQUFHO0lBRXBCLE9BQU9YLHFEQUFZQSxDQUFDWSxJQUFJLENBQUNIO0FBQzNCO0FBRU8sZUFBZUksS0FBS0MsT0FBTztJQUNoQyxJQUFJO1FBQ0YsTUFBTSxFQUFFQyxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFQyxHQUFHLEVBQUVDLFFBQVEsRUFBRUMsUUFBUSxFQUFFQyxrQkFBa0IsRUFBRSxHQUFHLE1BQU1QLFFBQVFGLElBQUk7UUFFeEcsSUFBSSxDQUFDRyxVQUFVLENBQUNDLGFBQWEsQ0FBQ0UsT0FBTyxDQUFDQyxZQUFZLENBQUNDLFlBQVksQ0FBQ0Msb0JBQW9CO1lBQ2xGLE9BQU9yQixxREFBWUEsQ0FBQ1ksSUFBSSxDQUFDO2dCQUFFVSxTQUFTO1lBQTZCLEdBQUc7Z0JBQUVDLFFBQVE7WUFBSTtRQUNwRjtRQUVBLE1BQU1wQixhQUFhLE1BQU1GLDREQUFzQixDQUFDO1lBQzlDSSxNQUFNO1lBQ05DLE1BQU07WUFDTkMsVUFBVTtZQUNWQyxVQUFVO1FBQ1o7UUFFQSxNQUFNTCxXQUFXTyxPQUFPLENBQ3RCLENBQUMsZ0lBQWdJLENBQUMsRUFDbEk7WUFBQ0s7WUFBUUM7WUFBV0M7WUFBV0M7WUFBS0M7WUFBVUM7WUFBVUM7U0FBbUI7UUFHN0UsTUFBTWxCLFdBQVdRLEdBQUc7UUFFcEIsT0FBT1gscURBQVlBLENBQUNZLElBQUksQ0FBQztZQUFFVSxTQUFTO1FBQWtD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dXRhXFxzcmNcXGFwcFxcYXBpXFxkYXNoYm9hcmRcXGNvbmR1Y3Rvclxccm91dGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xyXG5pbXBvcnQgbXlzcWwgZnJvbSAnbXlzcWwyL3Byb21pc2UnO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVCgpIHtcclxuICBjb25zdCBjb25uZWN0aW9uID0gYXdhaXQgbXlzcWwuY3JlYXRlQ29ubmVjdGlvbih7XHJcbiAgICBob3N0OiAnbG9jYWxob3N0JyxcclxuICAgIHVzZXI6ICdyb290JyxcclxuICAgIHBhc3N3b3JkOiAnJyxcclxuICAgIGRhdGFiYXNlOiAnbWlydXRhJyxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgW3Jvd3NdID0gYXdhaXQgY29ubmVjdGlvbi5leGVjdXRlKFxyXG4gICAgYFNFTEVDVCBpZGNvbmR1Y3RvcmVzLCBub21icmUsIGFwZWxsaWRvMSwgYXBlbGxpZG8yLCBkbmksIHRlbGVmb25vLCBsaWNlbmNpYSwgZmVjaGFfY29udHJhdGFjaW9uIEZST00gY29uZHVjdG9yZXNgXHJcbiAgKTtcclxuXHJcbiAgYXdhaXQgY29ubmVjdGlvbi5lbmQoKTtcclxuXHJcbiAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHJvd3MpO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXF1ZXN0KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgbm9tYnJlLCBhcGVsbGlkbzEsIGFwZWxsaWRvMiwgZG5pLCB0ZWxlZm9ubywgbGljZW5jaWEsIGZlY2hhX2NvbnRyYXRhY2lvbiB9ID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XHJcblxyXG4gICAgaWYgKCFub21icmUgfHwgIWFwZWxsaWRvMSB8fCAhZG5pIHx8ICF0ZWxlZm9ubyB8fCAhbGljZW5jaWEgfHwgIWZlY2hhX2NvbnRyYXRhY2lvbikge1xyXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBtZXNzYWdlOiAnRmFsdGFuIGNhbXBvcyBvYmxpZ2F0b3Jpb3MnIH0sIHsgc3RhdHVzOiA0MDAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY29ubmVjdGlvbiA9IGF3YWl0IG15c3FsLmNyZWF0ZUNvbm5lY3Rpb24oe1xyXG4gICAgICBob3N0OiAnbG9jYWxob3N0JyxcclxuICAgICAgdXNlcjogJ3Jvb3QnLFxyXG4gICAgICBwYXNzd29yZDogJycsXHJcbiAgICAgIGRhdGFiYXNlOiAnbWlydXRhJyxcclxuICAgIH0pO1xyXG5cclxuICAgIGF3YWl0IGNvbm5lY3Rpb24uZXhlY3V0ZShcclxuICAgICAgYElOU0VSVCBJTlRPIGNvbmR1Y3RvcmVzIChub21icmUsIGFwZWxsaWRvMSwgYXBlbGxpZG8yLCBkbmksIHRlbGVmb25vLCBsaWNlbmNpYSwgZmVjaGFfY29udHJhdGFjaW9uKSBWQUxVRVMgKD8sID8sID8sID8sID8sID8sID8pYCxcclxuICAgICAgW25vbWJyZSwgYXBlbGxpZG8xLCBhcGVsbGlkbzIsIGRuaSwgdGVsZWZvbm8sIGxpY2VuY2lhLCBmZWNoYV9jb250cmF0YWNpb25dXHJcbiAgICApO1xyXG5cclxuICAgIGF3YWl0IGNvbm5lY3Rpb24uZW5kKCk7XHJcblxyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgbWVzc2FnZTogJ0NvbmR1Y3RvciBhw7FhZGlkbyBjb3JyZWN0YW1lbnRlJyB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgbWVzc2FnZTogJ0Vycm9yIGFsIGHDsWFkaXIgY29uZHVjdG9yJywgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfSwgeyBzdGF0dXM6IDUwMCB9KTtcclxuICB9XHJcbn1cclxuXHJcbi8vIEFjdHVhbGl6YXIgY29uZHVjdG9yIChQVVQpXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQVVQocmVxdWVzdCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGlkY29uZHVjdG9yZXMsIG5vbWJyZSwgYXBlbGxpZG8xLCBhcGVsbGlkbzIsIGRuaSwgdGVsZWZvbm8sIGxpY2VuY2lhLCBmZWNoYV9jb250cmF0YWNpb24gfSA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xyXG5cclxuICAgIGlmICghaWRjb25kdWN0b3JlcyB8fCAhbm9tYnJlIHx8ICFhcGVsbGlkbzEgfHwgIWRuaSB8fCAhdGVsZWZvbm8gfHwgIWxpY2VuY2lhIHx8ICFmZWNoYV9jb250cmF0YWNpb24pIHtcclxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgbWVzc2FnZTogJ0ZhbHRhbiBjYW1wb3Mgb2JsaWdhdG9yaW9zJyB9LCB7IHN0YXR1czogNDAwIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNvbm5lY3Rpb24gPSBhd2FpdCBteXNxbC5jcmVhdGVDb25uZWN0aW9uKHtcclxuICAgICAgaG9zdDogJ2xvY2FsaG9zdCcsXHJcbiAgICAgIHVzZXI6ICdyb290JyxcclxuICAgICAgcGFzc3dvcmQ6ICcnLFxyXG4gICAgICBkYXRhYmFzZTogJ21pcnV0YScsXHJcbiAgICB9KTtcclxuXHJcbiAgICBhd2FpdCBjb25uZWN0aW9uLmV4ZWN1dGUoXHJcbiAgICAgIGBVUERBVEUgY29uZHVjdG9yZXMgU0VUIG5vbWJyZT0/LCBhcGVsbGlkbzE9PywgYXBlbGxpZG8yPT8sIGRuaT0/LCB0ZWxlZm9ubz0/LCBsaWNlbmNpYT0/LCBmZWNoYV9jb250cmF0YWNpb249PyBXSEVSRSBpZGNvbmR1Y3RvcmVzPT9gLFxyXG4gICAgICBbbm9tYnJlLCBhcGVsbGlkbzEsIGFwZWxsaWRvMiwgZG5pLCB0ZWxlZm9ubywgbGljZW5jaWEsIGZlY2hhX2NvbnRyYXRhY2lvbiwgaWRjb25kdWN0b3Jlc11cclxuICAgICk7XHJcblxyXG4gICAgYXdhaXQgY29ubmVjdGlvbi5lbmQoKTtcclxuXHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBtZXNzYWdlOiAnQ29uZHVjdG9yIGFjdHVhbGl6YWRvIGNvcnJlY3RhbWVudGUnIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBtZXNzYWdlOiAnRXJyb3IgYWwgYWN0dWFsaXphciBjb25kdWN0b3InLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9LCB7IHN0YXR1czogNTAwIH0pO1xyXG4gIH1cclxufVxyXG5cclxuLy8gQm9ycmFyIGNvbmR1Y3RvciAoREVMRVRFKVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gREVMRVRFKHJlcXVlc3QpIHtcclxuICB0cnkge1xyXG4gICAgbGV0IGlkY29uZHVjdG9yZXMgPSBudWxsO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgYm9keSA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xyXG4gICAgICBpZGNvbmR1Y3RvcmVzID0gTnVtYmVyKGJvZHkuaWRjb25kdWN0b3Jlcyk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgbWVzc2FnZTogJ0ZhbHRhIGVsIGlkIGRlbCBjb25kdWN0b3IgbyBlbCBib2R5IG5vIGVzIEpTT04nLCBlcnJvcjogZXJyPy5tZXNzYWdlIH0sIHsgc3RhdHVzOiA0MDAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFpZGNvbmR1Y3RvcmVzIHx8IGlzTmFOKGlkY29uZHVjdG9yZXMpKSB7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IG1lc3NhZ2U6ICdGYWx0YSBlbCBpZCBkZWwgY29uZHVjdG9yIG8gZWwgaWQgbm8gZXMgdsOhbGlkbycgfSwgeyBzdGF0dXM6IDQwMCB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjb25uZWN0aW9uID0gYXdhaXQgbXlzcWwuY3JlYXRlQ29ubmVjdGlvbih7XHJcbiAgICAgIGhvc3Q6ICdsb2NhbGhvc3QnLFxyXG4gICAgICB1c2VyOiAncm9vdCcsXHJcbiAgICAgIHBhc3N3b3JkOiAnJyxcclxuICAgICAgZGF0YWJhc2U6ICdtaXJ1dGEnLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgW3Jlc3VsdF0gPSBhd2FpdCBjb25uZWN0aW9uLmV4ZWN1dGUoXHJcbiAgICAgIGBERUxFVEUgRlJPTSBjb25kdWN0b3JlcyBXSEVSRSBpZGNvbmR1Y3RvcmVzPT9gLFxyXG4gICAgICBbaWRjb25kdWN0b3Jlc11cclxuICAgICk7XHJcblxyXG4gICAgYXdhaXQgY29ubmVjdGlvbi5lbmQoKTtcclxuXHJcbiAgICBpZiAocmVzdWx0LmFmZmVjdGVkUm93cyA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBtZXNzYWdlOiAnTm8gc2UgZW5jb250csOzIGVsIGNvbmR1Y3RvciBwYXJhIGVsaW1pbmFyJyB9LCB7IHN0YXR1czogNDA0IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IG1lc3NhZ2U6ICdDb25kdWN0b3IgZWxpbWluYWRvIGNvcnJlY3RhbWVudGUnIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBtZXNzYWdlOiAnRXJyb3IgYWwgZWxpbWluYXIgY29uZHVjdG9yJywgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfSwgeyBzdGF0dXM6IDUwMCB9KTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsIm15c3FsIiwiR0VUIiwiY29ubmVjdGlvbiIsImNyZWF0ZUNvbm5lY3Rpb24iLCJob3N0IiwidXNlciIsInBhc3N3b3JkIiwiZGF0YWJhc2UiLCJyb3dzIiwiZXhlY3V0ZSIsImVuZCIsImpzb24iLCJQT1NUIiwicmVxdWVzdCIsIm5vbWJyZSIsImFwZWxsaWRvMSIsImFwZWxsaWRvMiIsImRuaSIsInRlbGVmb25vIiwibGljZW5jaWEiLCJmZWNoYV9jb250cmF0YWNpb24iLCJtZXNzYWdlIiwic3RhdHVzIiwiZXJyb3IiLCJQVVQiLCJpZGNvbmR1Y3RvcmVzIiwiREVMRVRFIiwiYm9keSIsIk51bWJlciIsImVyciIsImlzTmFOIiwicmVzdWx0IiwiYWZmZWN0ZWRSb3dzIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/dashboard/conductor/route.js\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/mysql2","vendor-chunks/aws-ssl-profiles","vendor-chunks/iconv-lite","vendor-chunks/long","vendor-chunks/named-placeholders","vendor-chunks/denque","vendor-chunks/is-property","vendor-chunks/lru.min","vendor-chunks/sqlstring","vendor-chunks/seq-queue","vendor-chunks/generate-function","vendor-chunks/safer-buffer"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fdashboard%2Fconductor%2Froute&page=%2Fapi%2Fdashboard%2Fconductor%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fdashboard%2Fconductor%2Froute.js&appDir=C%3A%5Cxampp%5Chtdocs%5CDesarrolo%20servidor%5Cmiruta%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5Cxampp%5Chtdocs%5CDesarrolo%20servidor%5Cmiruta&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();