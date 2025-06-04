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
exports.id = "app/api/dashboard/usuariosdatos/route";
exports.ids = ["app/api/dashboard/usuariosdatos/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fdashboard%2Fusuariosdatos%2Froute&page=%2Fapi%2Fdashboard%2Fusuariosdatos%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fdashboard%2Fusuariosdatos%2Froute.js&appDir=C%3A%5Cxampp%5Chtdocs%5CDesarrolo%20servidor%5Cmiruta%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5Cxampp%5Chtdocs%5CDesarrolo%20servidor%5Cmiruta&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fdashboard%2Fusuariosdatos%2Froute&page=%2Fapi%2Fdashboard%2Fusuariosdatos%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fdashboard%2Fusuariosdatos%2Froute.js&appDir=C%3A%5Cxampp%5Chtdocs%5CDesarrolo%20servidor%5Cmiruta%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5Cxampp%5Chtdocs%5CDesarrolo%20servidor%5Cmiruta&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_xampp_htdocs_Desarrolo_servidor_miruta_src_app_api_dashboard_usuariosdatos_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/dashboard/usuariosdatos/route.js */ \"(rsc)/./src/app/api/dashboard/usuariosdatos/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/dashboard/usuariosdatos/route\",\n        pathname: \"/api/dashboard/usuariosdatos\",\n        filename: \"route\",\n        bundlePath: \"app/api/dashboard/usuariosdatos/route\"\n    },\n    resolvedPagePath: \"C:\\\\xampp\\\\htdocs\\\\Desarrolo servidor\\\\miruta\\\\src\\\\app\\\\api\\\\dashboard\\\\usuariosdatos\\\\route.js\",\n    nextConfigOutput,\n    userland: C_xampp_htdocs_Desarrolo_servidor_miruta_src_app_api_dashboard_usuariosdatos_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZkYXNoYm9hcmQlMkZ1c3Vhcmlvc2RhdG9zJTJGcm91dGUmcGFnZT0lMkZhcGklMkZkYXNoYm9hcmQlMkZ1c3Vhcmlvc2RhdG9zJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGZGFzaGJvYXJkJTJGdXN1YXJpb3NkYXRvcyUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDeGFtcHAlNUNodGRvY3MlNUNEZXNhcnJvbG8lMjBzZXJ2aWRvciU1Q21pcnV0YSU1Q3NyYyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q3hhbXBwJTVDaHRkb2NzJTVDRGVzYXJyb2xvJTIwc2Vydmlkb3IlNUNtaXJ1dGEmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ2dEO0FBQzdIO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFx4YW1wcFxcXFxodGRvY3NcXFxcRGVzYXJyb2xvIHNlcnZpZG9yXFxcXG1pcnV0YVxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxkYXNoYm9hcmRcXFxcdXN1YXJpb3NkYXRvc1xcXFxyb3V0ZS5qc1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvZGFzaGJvYXJkL3VzdWFyaW9zZGF0b3Mvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9kYXNoYm9hcmQvdXN1YXJpb3NkYXRvc1wiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvZGFzaGJvYXJkL3VzdWFyaW9zZGF0b3Mvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFx4YW1wcFxcXFxodGRvY3NcXFxcRGVzYXJyb2xvIHNlcnZpZG9yXFxcXG1pcnV0YVxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxkYXNoYm9hcmRcXFxcdXN1YXJpb3NkYXRvc1xcXFxyb3V0ZS5qc1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fdashboard%2Fusuariosdatos%2Froute&page=%2Fapi%2Fdashboard%2Fusuariosdatos%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fdashboard%2Fusuariosdatos%2Froute.js&appDir=C%3A%5Cxampp%5Chtdocs%5CDesarrolo%20servidor%5Cmiruta%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5Cxampp%5Chtdocs%5CDesarrolo%20servidor%5Cmiruta&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./src/app/api/dashboard/usuariosdatos/route.js":
/*!******************************************************!*\
  !*** ./src/app/api/dashboard/usuariosdatos/route.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DELETE: () => (/* binding */ DELETE),\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST),\n/* harmony export */   PUT: () => (/* binding */ PUT)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mysql2/promise */ \"(rsc)/./node_modules/mysql2/promise.js\");\n\n\nasync function GET() {\n    const connection = await mysql2_promise__WEBPACK_IMPORTED_MODULE_1__.createConnection({\n        host: 'localhost',\n        user: 'root',\n        password: '',\n        database: 'miruta'\n    });\n    const [rows] = await connection.execute(`SELECT idusuarios, nombre, apellido1, apellido2, nombreusuario, email, tipo, verificado FROM usuarios`);\n    await connection.end();\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(rows);\n}\nasync function POST(request) {\n    try {\n        const { nombre, apellido1, apellido2, nombreusuario, email, tipo, verificado } = await request.json();\n        if (!nombre || !apellido1 || !email || !tipo) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                message: 'Faltan campos obligatorios'\n            }, {\n                status: 400\n            });\n        }\n        const connection = await mysql2_promise__WEBPACK_IMPORTED_MODULE_1__.createConnection({\n            host: 'localhost',\n            user: 'root',\n            password: '',\n            database: 'miruta'\n        });\n        await connection.execute(`INSERT INTO usuarios (nombre, apellido1, apellido2, nombreusuario, email, tipo, verificado, password) VALUES (?, ?, ?, ?, ?, ?, ?, '')`, [\n            nombre,\n            apellido1,\n            apellido2,\n            nombreusuario,\n            email,\n            tipo,\n            verificado\n        ]);\n        await connection.end();\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: 'Usuario añadido correctamente'\n        });\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: 'Error al añadir usuario',\n            error: error.message\n        }, {\n            status: 500\n        });\n    }\n}\nasync function PUT(request) {\n    try {\n        const { idusuarios, nombre, apellido1, apellido2, nombreusuario, email, tipo, verificado } = await request.json();\n        if (!idusuarios || !nombre || !apellido1 || !email || !tipo) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                message: 'Faltan campos obligatorios'\n            }, {\n                status: 400\n            });\n        }\n        const connection = await mysql2_promise__WEBPACK_IMPORTED_MODULE_1__.createConnection({\n            host: 'localhost',\n            user: 'root',\n            password: '',\n            database: 'miruta'\n        });\n        await connection.execute(`UPDATE usuarios SET nombre=?, apellido1=?, apellido2=?, nombreusuario=?, email=?, tipo=?, verificado=? WHERE idusuarios=?`, [\n            nombre,\n            apellido1,\n            apellido2,\n            nombreusuario,\n            email,\n            tipo,\n            verificado,\n            idusuarios\n        ]);\n        await connection.end();\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: 'Usuario actualizado correctamente'\n        });\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: 'Error al actualizar usuario',\n            error: error.message\n        }, {\n            status: 500\n        });\n    }\n}\nasync function DELETE(request) {\n    try {\n        let idusuarios = null;\n        try {\n            const body = await request.json();\n            idusuarios = Number(body.idusuarios);\n        } catch (err) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                message: 'Falta el id del usuario o el body no es JSON',\n                error: err?.message\n            }, {\n                status: 400\n            });\n        }\n        if (!idusuarios || isNaN(idusuarios)) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                message: 'Falta el id del usuario o el id no es válido'\n            }, {\n                status: 400\n            });\n        }\n        const connection = await mysql2_promise__WEBPACK_IMPORTED_MODULE_1__.createConnection({\n            host: 'localhost',\n            user: 'root',\n            password: '',\n            database: 'miruta'\n        });\n        const [result] = await connection.execute(`DELETE FROM usuarios WHERE idusuarios=?`, [\n            idusuarios\n        ]);\n        await connection.end();\n        if (result.affectedRows === 0) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                message: 'No se encontró el usuario para eliminar'\n            }, {\n                status: 404\n            });\n        }\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: 'Usuario eliminado correctamente'\n        });\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: 'Error al eliminar usuario',\n            error: error.message\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9kYXNoYm9hcmQvdXN1YXJpb3NkYXRvcy9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBMkM7QUFDUjtBQUU1QixlQUFlRTtJQUNwQixNQUFNQyxhQUFhLE1BQU1GLDREQUFzQixDQUFDO1FBQzlDSSxNQUFNO1FBQ05DLE1BQU07UUFDTkMsVUFBVTtRQUNWQyxVQUFVO0lBQ1o7SUFFQSxNQUFNLENBQUNDLEtBQUssR0FBRyxNQUFNTixXQUFXTyxPQUFPLENBQ3JDLENBQUMscUdBQXFHLENBQUM7SUFHekcsTUFBTVAsV0FBV1EsR0FBRztJQUVwQixPQUFPWCxxREFBWUEsQ0FBQ1ksSUFBSSxDQUFDSDtBQUMzQjtBQUVPLGVBQWVJLEtBQUtDLE9BQU87SUFDaEMsSUFBSTtRQUNGLE1BQU0sRUFBRUMsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRUMsYUFBYSxFQUFFQyxLQUFLLEVBQUVDLElBQUksRUFBRUMsVUFBVSxFQUFFLEdBQUcsTUFBTVAsUUFBUUYsSUFBSTtRQUVuRyxJQUFJLENBQUNHLFVBQVUsQ0FBQ0MsYUFBYSxDQUFDRyxTQUFTLENBQUNDLE1BQU07WUFDNUMsT0FBT3BCLHFEQUFZQSxDQUFDWSxJQUFJLENBQUM7Z0JBQUVVLFNBQVM7WUFBNkIsR0FBRztnQkFBRUMsUUFBUTtZQUFJO1FBQ3BGO1FBRUEsTUFBTXBCLGFBQWEsTUFBTUYsNERBQXNCLENBQUM7WUFDOUNJLE1BQU07WUFDTkMsTUFBTTtZQUNOQyxVQUFVO1lBQ1ZDLFVBQVU7UUFDWjtRQUVBLE1BQU1MLFdBQVdPLE9BQU8sQ0FDdEIsQ0FBQyxzSUFBc0ksQ0FBQyxFQUN4STtZQUFDSztZQUFRQztZQUFXQztZQUFXQztZQUFlQztZQUFPQztZQUFNQztTQUFXO1FBR3hFLE1BQU1sQixXQUFXUSxHQUFHO1FBRXBCLE9BQU9YLHFEQUFZQSxDQUFDWSxJQUFJLENBQUM7WUFBRVUsU0FBUztRQUFnQztJQUN0RSxFQUFFLE9BQU9FLE9BQU87UUFDZCxPQUFPeEIscURBQVlBLENBQUNZLElBQUksQ0FBQztZQUFFVSxTQUFTO1lBQTJCRSxPQUFPQSxNQUFNRixPQUFPO1FBQUMsR0FBRztZQUFFQyxRQUFRO1FBQUk7SUFDdkc7QUFDRjtBQUVPLGVBQWVFLElBQUlYLE9BQU87SUFDL0IsSUFBSTtRQUNGLE1BQU0sRUFBRVksVUFBVSxFQUFFWCxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFQyxhQUFhLEVBQUVDLEtBQUssRUFBRUMsSUFBSSxFQUFFQyxVQUFVLEVBQUUsR0FBRyxNQUFNUCxRQUFRRixJQUFJO1FBRS9HLElBQUksQ0FBQ2MsY0FBYyxDQUFDWCxVQUFVLENBQUNDLGFBQWEsQ0FBQ0csU0FBUyxDQUFDQyxNQUFNO1lBQzNELE9BQU9wQixxREFBWUEsQ0FBQ1ksSUFBSSxDQUFDO2dCQUFFVSxTQUFTO1lBQTZCLEdBQUc7Z0JBQUVDLFFBQVE7WUFBSTtRQUNwRjtRQUVBLE1BQU1wQixhQUFhLE1BQU1GLDREQUFzQixDQUFDO1lBQzlDSSxNQUFNO1lBQ05DLE1BQU07WUFDTkMsVUFBVTtZQUNWQyxVQUFVO1FBQ1o7UUFFQSxNQUFNTCxXQUFXTyxPQUFPLENBQ3RCLENBQUMseUhBQXlILENBQUMsRUFDM0g7WUFBQ0s7WUFBUUM7WUFBV0M7WUFBV0M7WUFBZUM7WUFBT0M7WUFBTUM7WUFBWUs7U0FBVztRQUdwRixNQUFNdkIsV0FBV1EsR0FBRztRQUVwQixPQUFPWCxxREFBWUEsQ0FBQ1ksSUFBSSxDQUFDO1lBQUVVLFNBQVM7UUFBb0M7SUFDMUUsRUFBRSxPQUFPRSxPQUFPO1FBQ2QsT0FBT3hCLHFEQUFZQSxDQUFDWSxJQUFJLENBQUM7WUFBRVUsU0FBUztZQUErQkUsT0FBT0EsTUFBTUYsT0FBTztRQUFDLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQzNHO0FBQ0Y7QUFFTyxlQUFlSSxPQUFPYixPQUFPO0lBQ2xDLElBQUk7UUFDRixJQUFJWSxhQUFhO1FBQ2pCLElBQUk7WUFDRixNQUFNRSxPQUFPLE1BQU1kLFFBQVFGLElBQUk7WUFDL0JjLGFBQWFHLE9BQU9ELEtBQUtGLFVBQVU7UUFDckMsRUFBRSxPQUFPSSxLQUFLO1lBQ1osT0FBTzlCLHFEQUFZQSxDQUFDWSxJQUFJLENBQUM7Z0JBQUVVLFNBQVM7Z0JBQWdERSxPQUFPTSxLQUFLUjtZQUFRLEdBQUc7Z0JBQUVDLFFBQVE7WUFBSTtRQUMzSDtRQUVBLElBQUksQ0FBQ0csY0FBY0ssTUFBTUwsYUFBYTtZQUNwQyxPQUFPMUIscURBQVlBLENBQUNZLElBQUksQ0FBQztnQkFBRVUsU0FBUztZQUErQyxHQUFHO2dCQUFFQyxRQUFRO1lBQUk7UUFDdEc7UUFFQSxNQUFNcEIsYUFBYSxNQUFNRiw0REFBc0IsQ0FBQztZQUM5Q0ksTUFBTTtZQUNOQyxNQUFNO1lBQ05DLFVBQVU7WUFDVkMsVUFBVTtRQUNaO1FBRUEsTUFBTSxDQUFDd0IsT0FBTyxHQUFHLE1BQU03QixXQUFXTyxPQUFPLENBQ3ZDLENBQUMsdUNBQXVDLENBQUMsRUFDekM7WUFBQ2dCO1NBQVc7UUFHZCxNQUFNdkIsV0FBV1EsR0FBRztRQUVwQixJQUFJcUIsT0FBT0MsWUFBWSxLQUFLLEdBQUc7WUFDN0IsT0FBT2pDLHFEQUFZQSxDQUFDWSxJQUFJLENBQUM7Z0JBQUVVLFNBQVM7WUFBMEMsR0FBRztnQkFBRUMsUUFBUTtZQUFJO1FBQ2pHO1FBRUEsT0FBT3ZCLHFEQUFZQSxDQUFDWSxJQUFJLENBQUM7WUFBRVUsU0FBUztRQUFrQztJQUN4RSxFQUFFLE9BQU9FLE9BQU87UUFDZCxPQUFPeEIscURBQVlBLENBQUNZLElBQUksQ0FBQztZQUFFVSxTQUFTO1lBQTZCRSxPQUFPQSxNQUFNRixPQUFPO1FBQUMsR0FBRztZQUFFQyxRQUFRO1FBQUk7SUFDekc7QUFDRiIsInNvdXJjZXMiOlsiQzpcXHhhbXBwXFxodGRvY3NcXERlc2Fycm9sbyBzZXJ2aWRvclxcbWlydXRhXFxzcmNcXGFwcFxcYXBpXFxkYXNoYm9hcmRcXHVzdWFyaW9zZGF0b3NcXHJvdXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJztcclxuaW1wb3J0IG15c3FsIGZyb20gJ215c3FsMi9wcm9taXNlJztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQoKSB7XHJcbiAgY29uc3QgY29ubmVjdGlvbiA9IGF3YWl0IG15c3FsLmNyZWF0ZUNvbm5lY3Rpb24oe1xyXG4gICAgaG9zdDogJ2xvY2FsaG9zdCcsXHJcbiAgICB1c2VyOiAncm9vdCcsXHJcbiAgICBwYXNzd29yZDogJycsXHJcbiAgICBkYXRhYmFzZTogJ21pcnV0YScsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IFtyb3dzXSA9IGF3YWl0IGNvbm5lY3Rpb24uZXhlY3V0ZShcclxuICAgIGBTRUxFQ1QgaWR1c3Vhcmlvcywgbm9tYnJlLCBhcGVsbGlkbzEsIGFwZWxsaWRvMiwgbm9tYnJldXN1YXJpbywgZW1haWwsIHRpcG8sIHZlcmlmaWNhZG8gRlJPTSB1c3Vhcmlvc2BcclxuICApO1xyXG5cclxuICBhd2FpdCBjb25uZWN0aW9uLmVuZCgpO1xyXG5cclxuICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24ocm93cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcXVlc3QpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBub21icmUsIGFwZWxsaWRvMSwgYXBlbGxpZG8yLCBub21icmV1c3VhcmlvLCBlbWFpbCwgdGlwbywgdmVyaWZpY2FkbyB9ID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XHJcblxyXG4gICAgaWYgKCFub21icmUgfHwgIWFwZWxsaWRvMSB8fCAhZW1haWwgfHwgIXRpcG8pIHtcclxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgbWVzc2FnZTogJ0ZhbHRhbiBjYW1wb3Mgb2JsaWdhdG9yaW9zJyB9LCB7IHN0YXR1czogNDAwIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNvbm5lY3Rpb24gPSBhd2FpdCBteXNxbC5jcmVhdGVDb25uZWN0aW9uKHtcclxuICAgICAgaG9zdDogJ2xvY2FsaG9zdCcsXHJcbiAgICAgIHVzZXI6ICdyb290JyxcclxuICAgICAgcGFzc3dvcmQ6ICcnLFxyXG4gICAgICBkYXRhYmFzZTogJ21pcnV0YScsXHJcbiAgICB9KTtcclxuXHJcbiAgICBhd2FpdCBjb25uZWN0aW9uLmV4ZWN1dGUoXHJcbiAgICAgIGBJTlNFUlQgSU5UTyB1c3VhcmlvcyAobm9tYnJlLCBhcGVsbGlkbzEsIGFwZWxsaWRvMiwgbm9tYnJldXN1YXJpbywgZW1haWwsIHRpcG8sIHZlcmlmaWNhZG8sIHBhc3N3b3JkKSBWQUxVRVMgKD8sID8sID8sID8sID8sID8sID8sICcnKWAsXHJcbiAgICAgIFtub21icmUsIGFwZWxsaWRvMSwgYXBlbGxpZG8yLCBub21icmV1c3VhcmlvLCBlbWFpbCwgdGlwbywgdmVyaWZpY2Fkb11cclxuICAgICk7XHJcblxyXG4gICAgYXdhaXQgY29ubmVjdGlvbi5lbmQoKTtcclxuXHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBtZXNzYWdlOiAnVXN1YXJpbyBhw7FhZGlkbyBjb3JyZWN0YW1lbnRlJyB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgbWVzc2FnZTogJ0Vycm9yIGFsIGHDsWFkaXIgdXN1YXJpbycsIGVycm9yOiBlcnJvci5tZXNzYWdlIH0sIHsgc3RhdHVzOiA1MDAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUFVUKHJlcXVlc3QpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBpZHVzdWFyaW9zLCBub21icmUsIGFwZWxsaWRvMSwgYXBlbGxpZG8yLCBub21icmV1c3VhcmlvLCBlbWFpbCwgdGlwbywgdmVyaWZpY2FkbyB9ID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XHJcblxyXG4gICAgaWYgKCFpZHVzdWFyaW9zIHx8ICFub21icmUgfHwgIWFwZWxsaWRvMSB8fCAhZW1haWwgfHwgIXRpcG8pIHtcclxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgbWVzc2FnZTogJ0ZhbHRhbiBjYW1wb3Mgb2JsaWdhdG9yaW9zJyB9LCB7IHN0YXR1czogNDAwIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNvbm5lY3Rpb24gPSBhd2FpdCBteXNxbC5jcmVhdGVDb25uZWN0aW9uKHtcclxuICAgICAgaG9zdDogJ2xvY2FsaG9zdCcsXHJcbiAgICAgIHVzZXI6ICdyb290JyxcclxuICAgICAgcGFzc3dvcmQ6ICcnLFxyXG4gICAgICBkYXRhYmFzZTogJ21pcnV0YScsXHJcbiAgICB9KTtcclxuXHJcbiAgICBhd2FpdCBjb25uZWN0aW9uLmV4ZWN1dGUoXHJcbiAgICAgIGBVUERBVEUgdXN1YXJpb3MgU0VUIG5vbWJyZT0/LCBhcGVsbGlkbzE9PywgYXBlbGxpZG8yPT8sIG5vbWJyZXVzdWFyaW89PywgZW1haWw9PywgdGlwbz0/LCB2ZXJpZmljYWRvPT8gV0hFUkUgaWR1c3Vhcmlvcz0/YCxcclxuICAgICAgW25vbWJyZSwgYXBlbGxpZG8xLCBhcGVsbGlkbzIsIG5vbWJyZXVzdWFyaW8sIGVtYWlsLCB0aXBvLCB2ZXJpZmljYWRvLCBpZHVzdWFyaW9zXVxyXG4gICAgKTtcclxuXHJcbiAgICBhd2FpdCBjb25uZWN0aW9uLmVuZCgpO1xyXG5cclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IG1lc3NhZ2U6ICdVc3VhcmlvIGFjdHVhbGl6YWRvIGNvcnJlY3RhbWVudGUnIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBtZXNzYWdlOiAnRXJyb3IgYWwgYWN0dWFsaXphciB1c3VhcmlvJywgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfSwgeyBzdGF0dXM6IDUwMCB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBERUxFVEUocmVxdWVzdCkge1xyXG4gIHRyeSB7XHJcbiAgICBsZXQgaWR1c3VhcmlvcyA9IG51bGw7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBib2R5ID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XHJcbiAgICAgIGlkdXN1YXJpb3MgPSBOdW1iZXIoYm9keS5pZHVzdWFyaW9zKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBtZXNzYWdlOiAnRmFsdGEgZWwgaWQgZGVsIHVzdWFyaW8gbyBlbCBib2R5IG5vIGVzIEpTT04nLCBlcnJvcjogZXJyPy5tZXNzYWdlIH0sIHsgc3RhdHVzOiA0MDAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFpZHVzdWFyaW9zIHx8IGlzTmFOKGlkdXN1YXJpb3MpKSB7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IG1lc3NhZ2U6ICdGYWx0YSBlbCBpZCBkZWwgdXN1YXJpbyBvIGVsIGlkIG5vIGVzIHbDoWxpZG8nIH0sIHsgc3RhdHVzOiA0MDAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY29ubmVjdGlvbiA9IGF3YWl0IG15c3FsLmNyZWF0ZUNvbm5lY3Rpb24oe1xyXG4gICAgICBob3N0OiAnbG9jYWxob3N0JyxcclxuICAgICAgdXNlcjogJ3Jvb3QnLFxyXG4gICAgICBwYXNzd29yZDogJycsXHJcbiAgICAgIGRhdGFiYXNlOiAnbWlydXRhJyxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IFtyZXN1bHRdID0gYXdhaXQgY29ubmVjdGlvbi5leGVjdXRlKFxyXG4gICAgICBgREVMRVRFIEZST00gdXN1YXJpb3MgV0hFUkUgaWR1c3Vhcmlvcz0/YCxcclxuICAgICAgW2lkdXN1YXJpb3NdXHJcbiAgICApO1xyXG5cclxuICAgIGF3YWl0IGNvbm5lY3Rpb24uZW5kKCk7XHJcblxyXG4gICAgaWYgKHJlc3VsdC5hZmZlY3RlZFJvd3MgPT09IDApIHtcclxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgbWVzc2FnZTogJ05vIHNlIGVuY29udHLDsyBlbCB1c3VhcmlvIHBhcmEgZWxpbWluYXInIH0sIHsgc3RhdHVzOiA0MDQgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgbWVzc2FnZTogJ1VzdWFyaW8gZWxpbWluYWRvIGNvcnJlY3RhbWVudGUnIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBtZXNzYWdlOiAnRXJyb3IgYWwgZWxpbWluYXIgdXN1YXJpbycsIGVycm9yOiBlcnJvci5tZXNzYWdlIH0sIHsgc3RhdHVzOiA1MDAgfSk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJteXNxbCIsIkdFVCIsImNvbm5lY3Rpb24iLCJjcmVhdGVDb25uZWN0aW9uIiwiaG9zdCIsInVzZXIiLCJwYXNzd29yZCIsImRhdGFiYXNlIiwicm93cyIsImV4ZWN1dGUiLCJlbmQiLCJqc29uIiwiUE9TVCIsInJlcXVlc3QiLCJub21icmUiLCJhcGVsbGlkbzEiLCJhcGVsbGlkbzIiLCJub21icmV1c3VhcmlvIiwiZW1haWwiLCJ0aXBvIiwidmVyaWZpY2FkbyIsIm1lc3NhZ2UiLCJzdGF0dXMiLCJlcnJvciIsIlBVVCIsImlkdXN1YXJpb3MiLCJERUxFVEUiLCJib2R5IiwiTnVtYmVyIiwiZXJyIiwiaXNOYU4iLCJyZXN1bHQiLCJhZmZlY3RlZFJvd3MiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/dashboard/usuariosdatos/route.js\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/mysql2","vendor-chunks/iconv-lite","vendor-chunks/aws-ssl-profiles","vendor-chunks/sqlstring","vendor-chunks/seq-queue","vendor-chunks/named-placeholders","vendor-chunks/long","vendor-chunks/safer-buffer","vendor-chunks/lru.min","vendor-chunks/is-property","vendor-chunks/generate-function","vendor-chunks/denque"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fdashboard%2Fusuariosdatos%2Froute&page=%2Fapi%2Fdashboard%2Fusuariosdatos%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fdashboard%2Fusuariosdatos%2Froute.js&appDir=C%3A%5Cxampp%5Chtdocs%5CDesarrolo%20servidor%5Cmiruta%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5Cxampp%5Chtdocs%5CDesarrolo%20servidor%5Cmiruta&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();