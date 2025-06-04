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
exports.id = "app/api/dashboard/autobus/route";
exports.ids = ["app/api/dashboard/autobus/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fdashboard%2Fautobus%2Froute&page=%2Fapi%2Fdashboard%2Fautobus%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fdashboard%2Fautobus%2Froute.js&appDir=C%3A%5Cxampp%5Chtdocs%5CDesarrolo%20servidor%5Cmiruta%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5Cxampp%5Chtdocs%5CDesarrolo%20servidor%5Cmiruta&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fdashboard%2Fautobus%2Froute&page=%2Fapi%2Fdashboard%2Fautobus%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fdashboard%2Fautobus%2Froute.js&appDir=C%3A%5Cxampp%5Chtdocs%5CDesarrolo%20servidor%5Cmiruta%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5Cxampp%5Chtdocs%5CDesarrolo%20servidor%5Cmiruta&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_xampp_htdocs_Desarrolo_servidor_miruta_src_app_api_dashboard_autobus_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/dashboard/autobus/route.js */ \"(rsc)/./src/app/api/dashboard/autobus/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/dashboard/autobus/route\",\n        pathname: \"/api/dashboard/autobus\",\n        filename: \"route\",\n        bundlePath: \"app/api/dashboard/autobus/route\"\n    },\n    resolvedPagePath: \"C:\\\\xampp\\\\htdocs\\\\Desarrolo servidor\\\\miruta\\\\src\\\\app\\\\api\\\\dashboard\\\\autobus\\\\route.js\",\n    nextConfigOutput,\n    userland: C_xampp_htdocs_Desarrolo_servidor_miruta_src_app_api_dashboard_autobus_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZkYXNoYm9hcmQlMkZhdXRvYnVzJTJGcm91dGUmcGFnZT0lMkZhcGklMkZkYXNoYm9hcmQlMkZhdXRvYnVzJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGZGFzaGJvYXJkJTJGYXV0b2J1cyUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDeGFtcHAlNUNodGRvY3MlNUNEZXNhcnJvbG8lMjBzZXJ2aWRvciU1Q21pcnV0YSU1Q3NyYyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q3hhbXBwJTVDaHRkb2NzJTVDRGVzYXJyb2xvJTIwc2Vydmlkb3IlNUNtaXJ1dGEmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQzBDO0FBQ3ZIO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFx4YW1wcFxcXFxodGRvY3NcXFxcRGVzYXJyb2xvIHNlcnZpZG9yXFxcXG1pcnV0YVxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxkYXNoYm9hcmRcXFxcYXV0b2J1c1xcXFxyb3V0ZS5qc1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvZGFzaGJvYXJkL2F1dG9idXMvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9kYXNoYm9hcmQvYXV0b2J1c1wiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvZGFzaGJvYXJkL2F1dG9idXMvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFx4YW1wcFxcXFxodGRvY3NcXFxcRGVzYXJyb2xvIHNlcnZpZG9yXFxcXG1pcnV0YVxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxkYXNoYm9hcmRcXFxcYXV0b2J1c1xcXFxyb3V0ZS5qc1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fdashboard%2Fautobus%2Froute&page=%2Fapi%2Fdashboard%2Fautobus%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fdashboard%2Fautobus%2Froute.js&appDir=C%3A%5Cxampp%5Chtdocs%5CDesarrolo%20servidor%5Cmiruta%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5Cxampp%5Chtdocs%5CDesarrolo%20servidor%5Cmiruta&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./src/app/api/dashboard/autobus/route.js":
/*!************************************************!*\
  !*** ./src/app/api/dashboard/autobus/route.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DELETE: () => (/* binding */ DELETE),\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST),\n/* harmony export */   PUT: () => (/* binding */ PUT)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mysql2/promise */ \"(rsc)/./node_modules/mysql2/promise.js\");\n\n\nasync function GET() {\n    const connection = await mysql2_promise__WEBPACK_IMPORTED_MODULE_1__.createConnection({\n        host: 'localhost',\n        user: 'root',\n        password: '',\n        database: 'miruta'\n    });\n    const [rows] = await connection.execute(`SELECT idAutobus, placa, modelo, capacidad, estado FROM autobus`);\n    await connection.end();\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(rows);\n}\nasync function POST(request) {\n    try {\n        const { placa, modelo, capacidad, estado } = await request.json();\n        if (!placa || !modelo || !capacidad || !estado) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                message: 'Faltan campos obligatorios'\n            }, {\n                status: 400\n            });\n        }\n        const connection = await mysql2_promise__WEBPACK_IMPORTED_MODULE_1__.createConnection({\n            host: 'localhost',\n            user: 'root',\n            password: '',\n            database: 'miruta'\n        });\n        await connection.execute(`INSERT INTO autobus (placa, modelo, capacidad, estado) VALUES (?, ?, ?, ?)`, [\n            placa,\n            modelo,\n            capacidad,\n            estado\n        ]);\n        await connection.end();\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: 'Autobús añadido correctamente'\n        });\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: 'Error al añadir autobús',\n            error: error.message\n        }, {\n            status: 500\n        });\n    }\n}\n// Actualizar autobús (PUT)\nasync function PUT(request) {\n    try {\n        const { idAutobus, placa, modelo, capacidad, estado } = await request.json();\n        if (!idAutobus || !placa || !modelo || !capacidad || !estado) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                message: 'Faltan campos obligatorios'\n            }, {\n                status: 400\n            });\n        }\n        const connection = await mysql2_promise__WEBPACK_IMPORTED_MODULE_1__.createConnection({\n            host: 'localhost',\n            user: 'root',\n            password: '',\n            database: 'miruta'\n        });\n        await connection.execute(`UPDATE autobus SET placa=?, modelo=?, capacidad=?, estado=? WHERE idAutobus=?`, [\n            placa,\n            modelo,\n            capacidad,\n            estado,\n            idAutobus\n        ]);\n        await connection.end();\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: 'Autobús actualizado correctamente'\n        });\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: 'Error al actualizar autobús',\n            error: error.message\n        }, {\n            status: 500\n        });\n    }\n}\n// Borrar autobús (DELETE)\nasync function DELETE(request) {\n    try {\n        let idAutobus = null;\n        try {\n            const body = await request.json();\n            idAutobus = Number(body.idAutobus);\n        } catch (err) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                message: 'Falta el id del autobús o el body no es JSON',\n                error: err?.message\n            }, {\n                status: 400\n            });\n        }\n        if (!idAutobus || isNaN(idAutobus)) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                message: 'Falta el id del autobús o el id no es válido'\n            }, {\n                status: 400\n            });\n        }\n        const connection = await mysql2_promise__WEBPACK_IMPORTED_MODULE_1__.createConnection({\n            host: 'localhost',\n            user: 'root',\n            password: '',\n            database: 'miruta'\n        });\n        const [result] = await connection.execute(`DELETE FROM autobus WHERE idAutobus=?`, [\n            idAutobus\n        ]);\n        await connection.end();\n        if (result.affectedRows === 0) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                message: 'No se encontró el autobús para eliminar'\n            }, {\n                status: 404\n            });\n        }\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: 'Autobús eliminado correctamente'\n        });\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: 'Error al eliminar autobús',\n            error: error.message\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9kYXNoYm9hcmQvYXV0b2J1cy9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBMkM7QUFDUjtBQUU1QixlQUFlRTtJQUNwQixNQUFNQyxhQUFhLE1BQU1GLDREQUFzQixDQUFDO1FBQzlDSSxNQUFNO1FBQ05DLE1BQU07UUFDTkMsVUFBVTtRQUNWQyxVQUFVO0lBQ1o7SUFFQSxNQUFNLENBQUNDLEtBQUssR0FBRyxNQUFNTixXQUFXTyxPQUFPLENBQ3JDLENBQUMsK0RBQStELENBQUM7SUFHbkUsTUFBTVAsV0FBV1EsR0FBRztJQUVwQixPQUFPWCxxREFBWUEsQ0FBQ1ksSUFBSSxDQUFDSDtBQUMzQjtBQUVPLGVBQWVJLEtBQUtDLE9BQU87SUFDaEMsSUFBSTtRQUNGLE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsTUFBTSxFQUFFLEdBQUcsTUFBTUosUUFBUUYsSUFBSTtRQUUvRCxJQUFJLENBQUNHLFNBQVMsQ0FBQ0MsVUFBVSxDQUFDQyxhQUFhLENBQUNDLFFBQVE7WUFDOUMsT0FBT2xCLHFEQUFZQSxDQUFDWSxJQUFJLENBQUM7Z0JBQUVPLFNBQVM7WUFBNkIsR0FBRztnQkFBRUMsUUFBUTtZQUFJO1FBQ3BGO1FBRUEsTUFBTWpCLGFBQWEsTUFBTUYsNERBQXNCLENBQUM7WUFDOUNJLE1BQU07WUFDTkMsTUFBTTtZQUNOQyxVQUFVO1lBQ1ZDLFVBQVU7UUFDWjtRQUVBLE1BQU1MLFdBQVdPLE9BQU8sQ0FDdEIsQ0FBQywwRUFBMEUsQ0FBQyxFQUM1RTtZQUFDSztZQUFPQztZQUFRQztZQUFXQztTQUFPO1FBR3BDLE1BQU1mLFdBQVdRLEdBQUc7UUFFcEIsT0FBT1gscURBQVlBLENBQUNZLElBQUksQ0FBQztZQUFFTyxTQUFTO1FBQWdDO0lBQ3RFLEVBQUUsT0FBT0UsT0FBTztRQUNkLE9BQU9yQixxREFBWUEsQ0FBQ1ksSUFBSSxDQUFDO1lBQUVPLFNBQVM7WUFBMkJFLE9BQU9BLE1BQU1GLE9BQU87UUFBQyxHQUFHO1lBQUVDLFFBQVE7UUFBSTtJQUN2RztBQUNGO0FBRUEsMkJBQTJCO0FBQ3BCLGVBQWVFLElBQUlSLE9BQU87SUFDL0IsSUFBSTtRQUNGLE1BQU0sRUFBRVMsU0FBUyxFQUFFUixLQUFLLEVBQUVDLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxNQUFNLEVBQUUsR0FBRyxNQUFNSixRQUFRRixJQUFJO1FBRTFFLElBQUksQ0FBQ1csYUFBYSxDQUFDUixTQUFTLENBQUNDLFVBQVUsQ0FBQ0MsYUFBYSxDQUFDQyxRQUFRO1lBQzVELE9BQU9sQixxREFBWUEsQ0FBQ1ksSUFBSSxDQUFDO2dCQUFFTyxTQUFTO1lBQTZCLEdBQUc7Z0JBQUVDLFFBQVE7WUFBSTtRQUNwRjtRQUVBLE1BQU1qQixhQUFhLE1BQU1GLDREQUFzQixDQUFDO1lBQzlDSSxNQUFNO1lBQ05DLE1BQU07WUFDTkMsVUFBVTtZQUNWQyxVQUFVO1FBQ1o7UUFFQSxNQUFNTCxXQUFXTyxPQUFPLENBQ3RCLENBQUMsNkVBQTZFLENBQUMsRUFDL0U7WUFBQ0s7WUFBT0M7WUFBUUM7WUFBV0M7WUFBUUs7U0FBVTtRQUcvQyxNQUFNcEIsV0FBV1EsR0FBRztRQUVwQixPQUFPWCxxREFBWUEsQ0FBQ1ksSUFBSSxDQUFDO1lBQUVPLFNBQVM7UUFBb0M7SUFDMUUsRUFBRSxPQUFPRSxPQUFPO1FBQ2QsT0FBT3JCLHFEQUFZQSxDQUFDWSxJQUFJLENBQUM7WUFBRU8sU0FBUztZQUErQkUsT0FBT0EsTUFBTUYsT0FBTztRQUFDLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQzNHO0FBQ0Y7QUFFQSwwQkFBMEI7QUFDbkIsZUFBZUksT0FBT1YsT0FBTztJQUNsQyxJQUFJO1FBQ0YsSUFBSVMsWUFBWTtRQUNoQixJQUFJO1lBQ0YsTUFBTUUsT0FBTyxNQUFNWCxRQUFRRixJQUFJO1lBQy9CVyxZQUFZRyxPQUFPRCxLQUFLRixTQUFTO1FBQ25DLEVBQUUsT0FBT0ksS0FBSztZQUNaLE9BQU8zQixxREFBWUEsQ0FBQ1ksSUFBSSxDQUFDO2dCQUFFTyxTQUFTO2dCQUFnREUsT0FBT00sS0FBS1I7WUFBUSxHQUFHO2dCQUFFQyxRQUFRO1lBQUk7UUFDM0g7UUFFQSxJQUFJLENBQUNHLGFBQWFLLE1BQU1MLFlBQVk7WUFDbEMsT0FBT3ZCLHFEQUFZQSxDQUFDWSxJQUFJLENBQUM7Z0JBQUVPLFNBQVM7WUFBK0MsR0FBRztnQkFBRUMsUUFBUTtZQUFJO1FBQ3RHO1FBRUEsTUFBTWpCLGFBQWEsTUFBTUYsNERBQXNCLENBQUM7WUFDOUNJLE1BQU07WUFDTkMsTUFBTTtZQUNOQyxVQUFVO1lBQ1ZDLFVBQVU7UUFDWjtRQUVBLE1BQU0sQ0FBQ3FCLE9BQU8sR0FBRyxNQUFNMUIsV0FBV08sT0FBTyxDQUN2QyxDQUFDLHFDQUFxQyxDQUFDLEVBQ3ZDO1lBQUNhO1NBQVU7UUFHYixNQUFNcEIsV0FBV1EsR0FBRztRQUVwQixJQUFJa0IsT0FBT0MsWUFBWSxLQUFLLEdBQUc7WUFDN0IsT0FBTzlCLHFEQUFZQSxDQUFDWSxJQUFJLENBQUM7Z0JBQUVPLFNBQVM7WUFBMEMsR0FBRztnQkFBRUMsUUFBUTtZQUFJO1FBQ2pHO1FBRUEsT0FBT3BCLHFEQUFZQSxDQUFDWSxJQUFJLENBQUM7WUFBRU8sU0FBUztRQUFrQztJQUN4RSxFQUFFLE9BQU9FLE9BQU87UUFDZCxPQUFPckIscURBQVlBLENBQUNZLElBQUksQ0FBQztZQUFFTyxTQUFTO1lBQTZCRSxPQUFPQSxNQUFNRixPQUFPO1FBQUMsR0FBRztZQUFFQyxRQUFRO1FBQUk7SUFDekc7QUFDRiIsInNvdXJjZXMiOlsiQzpcXHhhbXBwXFxodGRvY3NcXERlc2Fycm9sbyBzZXJ2aWRvclxcbWlydXRhXFxzcmNcXGFwcFxcYXBpXFxkYXNoYm9hcmRcXGF1dG9idXNcXHJvdXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJztcclxuaW1wb3J0IG15c3FsIGZyb20gJ215c3FsMi9wcm9taXNlJztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQoKSB7XHJcbiAgY29uc3QgY29ubmVjdGlvbiA9IGF3YWl0IG15c3FsLmNyZWF0ZUNvbm5lY3Rpb24oe1xyXG4gICAgaG9zdDogJ2xvY2FsaG9zdCcsXHJcbiAgICB1c2VyOiAncm9vdCcsXHJcbiAgICBwYXNzd29yZDogJycsXHJcbiAgICBkYXRhYmFzZTogJ21pcnV0YScsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IFtyb3dzXSA9IGF3YWl0IGNvbm5lY3Rpb24uZXhlY3V0ZShcclxuICAgIGBTRUxFQ1QgaWRBdXRvYnVzLCBwbGFjYSwgbW9kZWxvLCBjYXBhY2lkYWQsIGVzdGFkbyBGUk9NIGF1dG9idXNgXHJcbiAgKTtcclxuXHJcbiAgYXdhaXQgY29ubmVjdGlvbi5lbmQoKTtcclxuXHJcbiAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHJvd3MpO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXF1ZXN0KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgcGxhY2EsIG1vZGVsbywgY2FwYWNpZGFkLCBlc3RhZG8gfSA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xyXG5cclxuICAgIGlmICghcGxhY2EgfHwgIW1vZGVsbyB8fCAhY2FwYWNpZGFkIHx8ICFlc3RhZG8pIHtcclxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgbWVzc2FnZTogJ0ZhbHRhbiBjYW1wb3Mgb2JsaWdhdG9yaW9zJyB9LCB7IHN0YXR1czogNDAwIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNvbm5lY3Rpb24gPSBhd2FpdCBteXNxbC5jcmVhdGVDb25uZWN0aW9uKHtcclxuICAgICAgaG9zdDogJ2xvY2FsaG9zdCcsXHJcbiAgICAgIHVzZXI6ICdyb290JyxcclxuICAgICAgcGFzc3dvcmQ6ICcnLFxyXG4gICAgICBkYXRhYmFzZTogJ21pcnV0YScsXHJcbiAgICB9KTtcclxuXHJcbiAgICBhd2FpdCBjb25uZWN0aW9uLmV4ZWN1dGUoXHJcbiAgICAgIGBJTlNFUlQgSU5UTyBhdXRvYnVzIChwbGFjYSwgbW9kZWxvLCBjYXBhY2lkYWQsIGVzdGFkbykgVkFMVUVTICg/LCA/LCA/LCA/KWAsXHJcbiAgICAgIFtwbGFjYSwgbW9kZWxvLCBjYXBhY2lkYWQsIGVzdGFkb11cclxuICAgICk7XHJcblxyXG4gICAgYXdhaXQgY29ubmVjdGlvbi5lbmQoKTtcclxuXHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBtZXNzYWdlOiAnQXV0b2LDunMgYcOxYWRpZG8gY29ycmVjdGFtZW50ZScgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IG1lc3NhZ2U6ICdFcnJvciBhbCBhw7FhZGlyIGF1dG9iw7pzJywgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfSwgeyBzdGF0dXM6IDUwMCB9KTtcclxuICB9XHJcbn1cclxuXHJcbi8vIEFjdHVhbGl6YXIgYXV0b2LDunMgKFBVVClcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBVVChyZXF1ZXN0KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgaWRBdXRvYnVzLCBwbGFjYSwgbW9kZWxvLCBjYXBhY2lkYWQsIGVzdGFkbyB9ID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XHJcblxyXG4gICAgaWYgKCFpZEF1dG9idXMgfHwgIXBsYWNhIHx8ICFtb2RlbG8gfHwgIWNhcGFjaWRhZCB8fCAhZXN0YWRvKSB7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IG1lc3NhZ2U6ICdGYWx0YW4gY2FtcG9zIG9ibGlnYXRvcmlvcycgfSwgeyBzdGF0dXM6IDQwMCB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjb25uZWN0aW9uID0gYXdhaXQgbXlzcWwuY3JlYXRlQ29ubmVjdGlvbih7XHJcbiAgICAgIGhvc3Q6ICdsb2NhbGhvc3QnLFxyXG4gICAgICB1c2VyOiAncm9vdCcsXHJcbiAgICAgIHBhc3N3b3JkOiAnJyxcclxuICAgICAgZGF0YWJhc2U6ICdtaXJ1dGEnLFxyXG4gICAgfSk7XHJcblxyXG4gICAgYXdhaXQgY29ubmVjdGlvbi5leGVjdXRlKFxyXG4gICAgICBgVVBEQVRFIGF1dG9idXMgU0VUIHBsYWNhPT8sIG1vZGVsbz0/LCBjYXBhY2lkYWQ9PywgZXN0YWRvPT8gV0hFUkUgaWRBdXRvYnVzPT9gLFxyXG4gICAgICBbcGxhY2EsIG1vZGVsbywgY2FwYWNpZGFkLCBlc3RhZG8sIGlkQXV0b2J1c11cclxuICAgICk7XHJcblxyXG4gICAgYXdhaXQgY29ubmVjdGlvbi5lbmQoKTtcclxuXHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBtZXNzYWdlOiAnQXV0b2LDunMgYWN0dWFsaXphZG8gY29ycmVjdGFtZW50ZScgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IG1lc3NhZ2U6ICdFcnJvciBhbCBhY3R1YWxpemFyIGF1dG9iw7pzJywgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfSwgeyBzdGF0dXM6IDUwMCB9KTtcclxuICB9XHJcbn1cclxuXHJcbi8vIEJvcnJhciBhdXRvYsO6cyAoREVMRVRFKVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gREVMRVRFKHJlcXVlc3QpIHtcclxuICB0cnkge1xyXG4gICAgbGV0IGlkQXV0b2J1cyA9IG51bGw7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBib2R5ID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XHJcbiAgICAgIGlkQXV0b2J1cyA9IE51bWJlcihib2R5LmlkQXV0b2J1cyk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgbWVzc2FnZTogJ0ZhbHRhIGVsIGlkIGRlbCBhdXRvYsO6cyBvIGVsIGJvZHkgbm8gZXMgSlNPTicsIGVycm9yOiBlcnI/Lm1lc3NhZ2UgfSwgeyBzdGF0dXM6IDQwMCB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWlkQXV0b2J1cyB8fCBpc05hTihpZEF1dG9idXMpKSB7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IG1lc3NhZ2U6ICdGYWx0YSBlbCBpZCBkZWwgYXV0b2LDunMgbyBlbCBpZCBubyBlcyB2w6FsaWRvJyB9LCB7IHN0YXR1czogNDAwIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNvbm5lY3Rpb24gPSBhd2FpdCBteXNxbC5jcmVhdGVDb25uZWN0aW9uKHtcclxuICAgICAgaG9zdDogJ2xvY2FsaG9zdCcsXHJcbiAgICAgIHVzZXI6ICdyb290JyxcclxuICAgICAgcGFzc3dvcmQ6ICcnLFxyXG4gICAgICBkYXRhYmFzZTogJ21pcnV0YScsXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBbcmVzdWx0XSA9IGF3YWl0IGNvbm5lY3Rpb24uZXhlY3V0ZShcclxuICAgICAgYERFTEVURSBGUk9NIGF1dG9idXMgV0hFUkUgaWRBdXRvYnVzPT9gLFxyXG4gICAgICBbaWRBdXRvYnVzXVxyXG4gICAgKTtcclxuXHJcbiAgICBhd2FpdCBjb25uZWN0aW9uLmVuZCgpO1xyXG5cclxuICAgIGlmIChyZXN1bHQuYWZmZWN0ZWRSb3dzID09PSAwKSB7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IG1lc3NhZ2U6ICdObyBzZSBlbmNvbnRyw7MgZWwgYXV0b2LDunMgcGFyYSBlbGltaW5hcicgfSwgeyBzdGF0dXM6IDQwNCB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBtZXNzYWdlOiAnQXV0b2LDunMgZWxpbWluYWRvIGNvcnJlY3RhbWVudGUnIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBtZXNzYWdlOiAnRXJyb3IgYWwgZWxpbWluYXIgYXV0b2LDunMnLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9LCB7IHN0YXR1czogNTAwIH0pO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwibXlzcWwiLCJHRVQiLCJjb25uZWN0aW9uIiwiY3JlYXRlQ29ubmVjdGlvbiIsImhvc3QiLCJ1c2VyIiwicGFzc3dvcmQiLCJkYXRhYmFzZSIsInJvd3MiLCJleGVjdXRlIiwiZW5kIiwianNvbiIsIlBPU1QiLCJyZXF1ZXN0IiwicGxhY2EiLCJtb2RlbG8iLCJjYXBhY2lkYWQiLCJlc3RhZG8iLCJtZXNzYWdlIiwic3RhdHVzIiwiZXJyb3IiLCJQVVQiLCJpZEF1dG9idXMiLCJERUxFVEUiLCJib2R5IiwiTnVtYmVyIiwiZXJyIiwiaXNOYU4iLCJyZXN1bHQiLCJhZmZlY3RlZFJvd3MiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/dashboard/autobus/route.js\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/mysql2","vendor-chunks/aws-ssl-profiles","vendor-chunks/iconv-lite","vendor-chunks/long","vendor-chunks/named-placeholders","vendor-chunks/denque","vendor-chunks/is-property","vendor-chunks/lru.min","vendor-chunks/sqlstring","vendor-chunks/seq-queue","vendor-chunks/generate-function","vendor-chunks/safer-buffer"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fdashboard%2Fautobus%2Froute&page=%2Fapi%2Fdashboard%2Fautobus%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fdashboard%2Fautobus%2Froute.js&appDir=C%3A%5Cxampp%5Chtdocs%5CDesarrolo%20servidor%5Cmiruta%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5Cxampp%5Chtdocs%5CDesarrolo%20servidor%5Cmiruta&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();