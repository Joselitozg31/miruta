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
exports.id = "app/api/auth/recover/route";
exports.ids = ["app/api/auth/recover/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2Frecover%2Froute&page=%2Fapi%2Fauth%2Frecover%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Frecover%2Froute.js&appDir=C%3A%5Cxampp%5Chtdocs%5CDesarrolo%20servidor%5Cmiruta%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5Cxampp%5Chtdocs%5CDesarrolo%20servidor%5Cmiruta&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2Frecover%2Froute&page=%2Fapi%2Fauth%2Frecover%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Frecover%2Froute.js&appDir=C%3A%5Cxampp%5Chtdocs%5CDesarrolo%20servidor%5Cmiruta%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5Cxampp%5Chtdocs%5CDesarrolo%20servidor%5Cmiruta&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_xampp_htdocs_Desarrolo_servidor_miruta_src_app_api_auth_recover_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/auth/recover/route.js */ \"(rsc)/./src/app/api/auth/recover/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/recover/route\",\n        pathname: \"/api/auth/recover\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/recover/route\"\n    },\n    resolvedPagePath: \"C:\\\\xampp\\\\htdocs\\\\Desarrolo servidor\\\\miruta\\\\src\\\\app\\\\api\\\\auth\\\\recover\\\\route.js\",\n    nextConfigOutput,\n    userland: C_xampp_htdocs_Desarrolo_servidor_miruta_src_app_api_auth_recover_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGcmVjb3ZlciUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGYXV0aCUyRnJlY292ZXIlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZhdXRoJTJGcmVjb3ZlciUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDeGFtcHAlNUNodGRvY3MlNUNEZXNhcnJvbG8lMjBzZXJ2aWRvciU1Q21pcnV0YSU1Q3NyYyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q3hhbXBwJTVDaHRkb2NzJTVDRGVzYXJyb2xvJTIwc2Vydmlkb3IlNUNtaXJ1dGEmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ3FDO0FBQ2xIO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFx4YW1wcFxcXFxodGRvY3NcXFxcRGVzYXJyb2xvIHNlcnZpZG9yXFxcXG1pcnV0YVxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxhdXRoXFxcXHJlY292ZXJcXFxccm91dGUuanNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2F1dGgvcmVjb3Zlci9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2F1dGgvcmVjb3ZlclwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvYXV0aC9yZWNvdmVyL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxceGFtcHBcXFxcaHRkb2NzXFxcXERlc2Fycm9sbyBzZXJ2aWRvclxcXFxtaXJ1dGFcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcYXV0aFxcXFxyZWNvdmVyXFxcXHJvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2Frecover%2Froute&page=%2Fapi%2Fauth%2Frecover%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Frecover%2Froute.js&appDir=C%3A%5Cxampp%5Chtdocs%5CDesarrolo%20servidor%5Cmiruta%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5Cxampp%5Chtdocs%5CDesarrolo%20servidor%5Cmiruta&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./src/app/api/auth/recover/route.js":
/*!*******************************************!*\
  !*** ./src/app/api/auth/recover/route.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST),\n/* harmony export */   PUT: () => (/* binding */ PUT)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mysql2/promise */ \"(rsc)/./node_modules/mysql2/promise.js\");\n/* harmony import */ var node_mailjet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! node-mailjet */ \"(rsc)/./node_modules/node-mailjet/mailjet.node.js\");\n/* harmony import */ var node_mailjet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(node_mailjet__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n// Usa las variables de entorno correctas para Mailjet\nconst MJ_APIKEY_PUBLIC = process.env.MAILJET_API_KEY;\nconst MJ_APIKEY_PRIVATE = process.env.MAILJET_API_SECRET;\nconst MJ_FROM_EMAIL = process.env.MAILJET_FROM_EMAIL;\nconst MJ_FROM_NAME = process.env.MAILJET_FROM_NAME;\n// Solo inicializa Mailjet si hay claves\nlet mailjetClient = null;\nif (MJ_APIKEY_PUBLIC && MJ_APIKEY_PRIVATE) {\n    mailjetClient = node_mailjet__WEBPACK_IMPORTED_MODULE_2___default().apiConnect(MJ_APIKEY_PUBLIC, MJ_APIKEY_PRIVATE);\n}\n// Utilidad para generar código de 6 dígitos\nfunction generateCode() {\n    return Math.floor(100000 + Math.random() * 900000).toString();\n}\n// POST: Solicitar código de recuperación\nasync function POST(request) {\n    const { email } = await request.json();\n    if (!email) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: 'Email requerido'\n        }, {\n            status: 400\n        });\n    }\n    if (!mailjetClient) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: 'Mailjet API_KEY no configurado en el servidor'\n        }, {\n            status: 500\n        });\n    }\n    let connection;\n    try {\n        connection = await mysql2_promise__WEBPACK_IMPORTED_MODULE_1__.createConnection({\n            host: 'localhost',\n            user: 'root',\n            password: '',\n            database: 'miruta'\n        });\n        // Busca usuario\n        const [rows] = await connection.execute('SELECT idusuarios FROM usuarios WHERE email = ?', [\n            email\n        ]);\n        if (rows.length === 0) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                message: 'No existe usuario con ese email'\n            }, {\n                status: 404\n            });\n        }\n        // Genera código y guárdalo temporalmente en la tabla codigo_recuperacion\n        const code = generateCode();\n        await connection.execute('REPLACE INTO codigo_recuperacion (email, code, created_at) VALUES (?, ?, NOW())', [\n            email,\n            code\n        ]);\n        // Envía el código por Mailjet\n        await mailjetClient.post('send', {\n            version: 'v3.1'\n        }).request({\n            Messages: [\n                {\n                    From: {\n                        Email: MJ_FROM_EMAIL,\n                        Name: MJ_FROM_NAME || \"MiRuta\"\n                    },\n                    To: [\n                        {\n                            Email: email\n                        }\n                    ],\n                    Subject: \"Código de recuperación de contraseña\",\n                    TextPart: `Tu código de recuperación es: ${code}`,\n                    HTMLPart: `<h3>Tu código de recuperación es: <b>${code}</b></h3>`\n                }\n            ]\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: 'Código enviado al correo'\n        });\n    } catch (err) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: 'Error enviando código',\n            error: err.message\n        }, {\n            status: 500\n        });\n    } finally{\n        if (connection) await connection.end();\n    }\n}\n// PUT: Cambiar contraseña usando código\nasync function PUT(request) {\n    const { email, code, newPassword } = await request.json();\n    if (!email || !code || !newPassword) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: 'Faltan datos'\n        }, {\n            status: 400\n        });\n    }\n    // Validación de contraseña segura\n    const specialChars = /[.,\\-¨\\*\\^¿\\?=\\/\\·\"\\$%´`+]/;\n    const hasUppercase = /[A-Z]/;\n    if (newPassword.length < 8 || !hasUppercase.test(newPassword) || !specialChars.test(newPassword)) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: 'La contraseña debe tener al menos 8 caracteres, una mayúscula y un carácter especial (.,-¨*^¿?=)/·\"$%%%´`+)'\n        }, {\n            status: 400\n        });\n    }\n    let connection;\n    try {\n        connection = await mysql2_promise__WEBPACK_IMPORTED_MODULE_1__.createConnection({\n            host: 'localhost',\n            user: 'root',\n            password: '',\n            database: 'miruta'\n        });\n        // Verifica código en la tabla codigo_recuperacion\n        const [rows] = await connection.execute('SELECT code, created_at FROM codigo_recuperacion WHERE email = ?', [\n            email\n        ]);\n        if (rows.length === 0 || rows[0].code !== code) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                message: 'Código incorrecto'\n            }, {\n                status: 400\n            });\n        }\n        // Opcional: verifica expiración (ej: 15 min)\n        const createdAt = new Date(rows[0].created_at);\n        if (Date.now() - createdAt.getTime() > 15 * 60 * 1000) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                message: 'Código expirado'\n            }, {\n                status: 400\n            });\n        }\n        // Cambia la contraseña (encripta con SHA-256)\n        let hash;\n        try {\n            // Siempre usa import dinámico para Next.js API routes (evita require)\n            const crypto = (await Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! crypto */ \"crypto\", 23))).default;\n            hash = crypto.createHash('sha256').update(newPassword).digest('hex');\n        } catch (e) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                message: 'Error en el hash de contraseña',\n                error: e.message\n            }, {\n                status: 500\n            });\n        }\n        // DEBUG: Verifica el hash y el email\n        // console.log('DEBUG HASH:', hash, 'EMAIL:', email);\n        // Actualiza la contraseña solo si el usuario existe y el email es correcto\n        const [updateResult] = await connection.execute('UPDATE usuarios SET password=? WHERE email=?', [\n            hash,\n            email\n        ]);\n        if (updateResult.affectedRows === 0) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                message: 'No se pudo actualizar la contraseña. Usuario no encontrado.'\n            }, {\n                status: 404\n            });\n        }\n        // Borra el código usado\n        await connection.execute('DELETE FROM codigo_recuperacion WHERE email=?', [\n            email\n        ]);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: 'Contraseña cambiada correctamente'\n        });\n    } catch (err) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: 'Error cambiando contraseña',\n            error: err.message\n        }, {\n            status: 500\n        });\n    } finally{\n        if (connection) await connection.end();\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxJQUFJa0M7UUFDSixJQUFJO1lBQ0Ysc0VBQXNFO1lBQ3RFLE1BQU1DLFNBQVMsQ0FBQyxNQUFNLGtIQUFlLEVBQUdDLE9BQU87WUFDL0NGLE9BQU9DLE9BQU9FLFVBQVUsQ0FBQyxVQUFVQyxNQUFNLENBQUNiLGFBQWFjLE1BQU0sQ0FBQztRQUNoRSxFQUFFLE9BQU9DLEdBQUc7WUFDVixPQUFPakUscURBQVlBLENBQUN1QixJQUFJLENBQUM7Z0JBQUVDLFNBQVM7Z0JBQWtDdUIsT0FBT2tCLEVBQUV6QyxPQUFPO1lBQUMsR0FBRztnQkFBRUMsUUFBUTtZQUFJO1FBQzFHO1FBRUEscUNBQXFDO1FBQ3JDLHFEQUFxRDtRQUVyRCwyRUFBMkU7UUFDM0UsTUFBTSxDQUFDeUMsYUFBYSxHQUFHLE1BQU14QyxXQUFXTyxPQUFPLENBQzdDLGdEQUNBO1lBQUMwQjtZQUFNckM7U0FBTTtRQUdmLElBQUk0QyxhQUFhQyxZQUFZLEtBQUssR0FBRztZQUNuQyxPQUFPbkUscURBQVlBLENBQUN1QixJQUFJLENBQUM7Z0JBQUVDLFNBQVM7WUFBOEQsR0FBRztnQkFBRUMsUUFBUTtZQUFJO1FBQ3JIO1FBRUEsd0JBQXdCO1FBQ3hCLE1BQU1DLFdBQVdPLE9BQU8sQ0FDdEIsaURBQ0E7WUFBQ1g7U0FBTTtRQUdULE9BQU90QixxREFBWUEsQ0FBQ3VCLElBQUksQ0FBQztZQUFFQyxTQUFTO1FBQW9DO0lBQzFFLEVBQUUsT0FBT3NCLEtBQUs7UUFDWixPQUFPOUMscURBQVlBLENBQUN1QixJQUFJLENBQUM7WUFBRUMsU0FBUztZQUE4QnVCLE9BQU9ELElBQUl0QixPQUFPO1FBQUMsR0FBRztZQUFFQyxRQUFRO1FBQUk7SUFDeEcsU0FBVTtRQUNSLElBQUlDLFlBQVksTUFBTUEsV0FBV3NCLEdBQUc7SUFDdEM7QUFDRiIsInNvdXJjZXMiOlsiQzpcXHhhbXBwXFxodGRvY3NcXERlc2Fycm9sbyBzZXJ2aWRvclxcbWlydXRhXFxzcmNcXGFwcFxcYXBpXFxhdXRoXFxyZWNvdmVyXFxyb3V0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcic7XHJcbmltcG9ydCBteXNxbCBmcm9tICdteXNxbDIvcHJvbWlzZSc7XHJcbmltcG9ydCBtYWlsamV0IGZyb20gJ25vZGUtbWFpbGpldCc7XHJcblxyXG4vLyBVc2EgbGFzIHZhcmlhYmxlcyBkZSBlbnRvcm5vIGNvcnJlY3RhcyBwYXJhIE1haWxqZXRcclxuY29uc3QgTUpfQVBJS0VZX1BVQkxJQyA9IHByb2Nlc3MuZW52Lk1BSUxKRVRfQVBJX0tFWTtcclxuY29uc3QgTUpfQVBJS0VZX1BSSVZBVEUgPSBwcm9jZXNzLmVudi5NQUlMSkVUX0FQSV9TRUNSRVQ7XHJcbmNvbnN0IE1KX0ZST01fRU1BSUwgPSBwcm9jZXNzLmVudi5NQUlMSkVUX0ZST01fRU1BSUw7XHJcbmNvbnN0IE1KX0ZST01fTkFNRSA9IHByb2Nlc3MuZW52Lk1BSUxKRVRfRlJPTV9OQU1FO1xyXG5cclxuLy8gU29sbyBpbmljaWFsaXphIE1haWxqZXQgc2kgaGF5IGNsYXZlc1xyXG5sZXQgbWFpbGpldENsaWVudCA9IG51bGw7XHJcbmlmIChNSl9BUElLRVlfUFVCTElDICYmIE1KX0FQSUtFWV9QUklWQVRFKSB7XHJcbiAgbWFpbGpldENsaWVudCA9IG1haWxqZXQuYXBpQ29ubmVjdChcclxuICAgIE1KX0FQSUtFWV9QVUJMSUMsXHJcbiAgICBNSl9BUElLRVlfUFJJVkFURVxyXG4gICk7XHJcbn1cclxuXHJcbi8vIFV0aWxpZGFkIHBhcmEgZ2VuZXJhciBjw7NkaWdvIGRlIDYgZMOtZ2l0b3NcclxuZnVuY3Rpb24gZ2VuZXJhdGVDb2RlKCkge1xyXG4gIHJldHVybiBNYXRoLmZsb29yKDEwMDAwMCArIE1hdGgucmFuZG9tKCkgKiA5MDAwMDApLnRvU3RyaW5nKCk7XHJcbn1cclxuXHJcbi8vIFBPU1Q6IFNvbGljaXRhciBjw7NkaWdvIGRlIHJlY3VwZXJhY2nDs25cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxdWVzdCkge1xyXG4gIGNvbnN0IHsgZW1haWwgfSA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xyXG4gIGlmICghZW1haWwpIHtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IG1lc3NhZ2U6ICdFbWFpbCByZXF1ZXJpZG8nIH0sIHsgc3RhdHVzOiA0MDAgfSk7XHJcbiAgfVxyXG5cclxuICBpZiAoIW1haWxqZXRDbGllbnQpIHtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IG1lc3NhZ2U6ICdNYWlsamV0IEFQSV9LRVkgbm8gY29uZmlndXJhZG8gZW4gZWwgc2Vydmlkb3InIH0sIHsgc3RhdHVzOiA1MDAgfSk7XHJcbiAgfVxyXG5cclxuICBsZXQgY29ubmVjdGlvbjtcclxuICB0cnkge1xyXG4gICAgY29ubmVjdGlvbiA9IGF3YWl0IG15c3FsLmNyZWF0ZUNvbm5lY3Rpb24oe1xyXG4gICAgICBob3N0OiAnbG9jYWxob3N0JyxcclxuICAgICAgdXNlcjogJ3Jvb3QnLFxyXG4gICAgICBwYXNzd29yZDogJycsXHJcbiAgICAgIGRhdGFiYXNlOiAnbWlydXRhJyxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEJ1c2NhIHVzdWFyaW9cclxuICAgIGNvbnN0IFtyb3dzXSA9IGF3YWl0IGNvbm5lY3Rpb24uZXhlY3V0ZShcclxuICAgICAgJ1NFTEVDVCBpZHVzdWFyaW9zIEZST00gdXN1YXJpb3MgV0hFUkUgZW1haWwgPSA/JyxcclxuICAgICAgW2VtYWlsXVxyXG4gICAgKTtcclxuICAgIGlmIChyb3dzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBtZXNzYWdlOiAnTm8gZXhpc3RlIHVzdWFyaW8gY29uIGVzZSBlbWFpbCcgfSwgeyBzdGF0dXM6IDQwNCB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBHZW5lcmEgY8OzZGlnbyB5IGd1w6FyZGFsbyB0ZW1wb3JhbG1lbnRlIGVuIGxhIHRhYmxhIGNvZGlnb19yZWN1cGVyYWNpb25cclxuICAgIGNvbnN0IGNvZGUgPSBnZW5lcmF0ZUNvZGUoKTtcclxuXHJcbiAgICBhd2FpdCBjb25uZWN0aW9uLmV4ZWN1dGUoXHJcbiAgICAgICdSRVBMQUNFIElOVE8gY29kaWdvX3JlY3VwZXJhY2lvbiAoZW1haWwsIGNvZGUsIGNyZWF0ZWRfYXQpIFZBTFVFUyAoPywgPywgTk9XKCkpJyxcclxuICAgICAgW2VtYWlsLCBjb2RlXVxyXG4gICAgKTtcclxuXHJcbiAgICAvLyBFbnbDrWEgZWwgY8OzZGlnbyBwb3IgTWFpbGpldFxyXG4gICAgYXdhaXQgbWFpbGpldENsaWVudFxyXG4gICAgICAucG9zdCgnc2VuZCcsIHsgdmVyc2lvbjogJ3YzLjEnIH0pXHJcbiAgICAgIC5yZXF1ZXN0KHtcclxuICAgICAgICBNZXNzYWdlczogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBGcm9tOiB7XHJcbiAgICAgICAgICAgICAgRW1haWw6IE1KX0ZST01fRU1BSUwsXHJcbiAgICAgICAgICAgICAgTmFtZTogTUpfRlJPTV9OQU1FIHx8IFwiTWlSdXRhXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgVG86IFtcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBFbWFpbDogZW1haWxcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFN1YmplY3Q6IFwiQ8OzZGlnbyBkZSByZWN1cGVyYWNpw7NuIGRlIGNvbnRyYXNlw7FhXCIsXHJcbiAgICAgICAgICAgIFRleHRQYXJ0OiBgVHUgY8OzZGlnbyBkZSByZWN1cGVyYWNpw7NuIGVzOiAke2NvZGV9YCxcclxuICAgICAgICAgICAgSFRNTFBhcnQ6IGA8aDM+VHUgY8OzZGlnbyBkZSByZWN1cGVyYWNpw7NuIGVzOiA8Yj4ke2NvZGV9PC9iPjwvaDM+YFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgbWVzc2FnZTogJ0PDs2RpZ28gZW52aWFkbyBhbCBjb3JyZW8nIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgbWVzc2FnZTogJ0Vycm9yIGVudmlhbmRvIGPDs2RpZ28nLCBlcnJvcjogZXJyLm1lc3NhZ2UgfSwgeyBzdGF0dXM6IDUwMCB9KTtcclxuICB9IGZpbmFsbHkge1xyXG4gICAgaWYgKGNvbm5lY3Rpb24pIGF3YWl0IGNvbm5lY3Rpb24uZW5kKCk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBQVVQ6IENhbWJpYXIgY29udHJhc2XDsWEgdXNhbmRvIGPDs2RpZ29cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBVVChyZXF1ZXN0KSB7XHJcbiAgY29uc3QgeyBlbWFpbCwgY29kZSwgbmV3UGFzc3dvcmQgfSA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xyXG4gIGlmICghZW1haWwgfHwgIWNvZGUgfHwgIW5ld1Bhc3N3b3JkKSB7XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBtZXNzYWdlOiAnRmFsdGFuIGRhdG9zJyB9LCB7IHN0YXR1czogNDAwIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gVmFsaWRhY2nDs24gZGUgY29udHJhc2XDsWEgc2VndXJhXHJcbiAgY29uc3Qgc3BlY2lhbENoYXJzID0gL1suLFxcLcKoXFwqXFxewr9cXD89XFwvXFzCt1wiXFwkJcK0YCtdLztcclxuICBjb25zdCBoYXNVcHBlcmNhc2UgPSAvW0EtWl0vO1xyXG4gIGlmIChcclxuICAgIG5ld1Bhc3N3b3JkLmxlbmd0aCA8IDggfHxcclxuICAgICFoYXNVcHBlcmNhc2UudGVzdChuZXdQYXNzd29yZCkgfHxcclxuICAgICFzcGVjaWFsQ2hhcnMudGVzdChuZXdQYXNzd29yZClcclxuICApIHtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7XHJcbiAgICAgIG1lc3NhZ2U6XHJcbiAgICAgICAgJ0xhIGNvbnRyYXNlw7FhIGRlYmUgdGVuZXIgYWwgbWVub3MgOCBjYXJhY3RlcmVzLCB1bmEgbWF5w7pzY3VsYSB5IHVuIGNhcsOhY3RlciBlc3BlY2lhbCAoLiwtwqgqXsK/Pz0pL8K3XCIkJSUlwrRgKyknLCAgICB9LCB7IHN0YXR1czogNDAwIH0pO1xyXG4gIH1cclxuXHJcbiAgbGV0IGNvbm5lY3Rpb247XHJcbiAgdHJ5IHtcclxuICAgIGNvbm5lY3Rpb24gPSBhd2FpdCBteXNxbC5jcmVhdGVDb25uZWN0aW9uKHtcclxuICAgICAgaG9zdDogJ2xvY2FsaG9zdCcsXHJcbiAgICAgIHVzZXI6ICdyb290JyxcclxuICAgICAgcGFzc3dvcmQ6ICcnLFxyXG4gICAgICBkYXRhYmFzZTogJ21pcnV0YScsXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBWZXJpZmljYSBjw7NkaWdvIGVuIGxhIHRhYmxhIGNvZGlnb19yZWN1cGVyYWNpb25cclxuICAgIGNvbnN0IFtyb3dzXSA9IGF3YWl0IGNvbm5lY3Rpb24uZXhlY3V0ZShcclxuICAgICAgJ1NFTEVDVCBjb2RlLCBjcmVhdGVkX2F0IEZST00gY29kaWdvX3JlY3VwZXJhY2lvbiBXSEVSRSBlbWFpbCA9ID8nLFxyXG4gICAgICBbZW1haWxdXHJcbiAgICApO1xyXG4gICAgaWYgKHJvd3MubGVuZ3RoID09PSAwIHx8IHJvd3NbMF0uY29kZSAhPT0gY29kZSkge1xyXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBtZXNzYWdlOiAnQ8OzZGlnbyBpbmNvcnJlY3RvJyB9LCB7IHN0YXR1czogNDAwIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIE9wY2lvbmFsOiB2ZXJpZmljYSBleHBpcmFjacOzbiAoZWo6IDE1IG1pbilcclxuICAgIGNvbnN0IGNyZWF0ZWRBdCA9IG5ldyBEYXRlKHJvd3NbMF0uY3JlYXRlZF9hdCk7XHJcbiAgICBpZiAoRGF0ZS5ub3coKSAtIGNyZWF0ZWRBdC5nZXRUaW1lKCkgPiAxNSAqIDYwICogMTAwMCkge1xyXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBtZXNzYWdlOiAnQ8OzZGlnbyBleHBpcmFkbycgfSwgeyBzdGF0dXM6IDQwMCB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDYW1iaWEgbGEgY29udHJhc2XDsWEgKGVuY3JpcHRhIGNvbiBTSEEtMjU2KVxyXG4gICAgbGV0IGhhc2g7XHJcbiAgICB0cnkge1xyXG4gICAgICAvLyBTaWVtcHJlIHVzYSBpbXBvcnQgZGluw6FtaWNvIHBhcmEgTmV4dC5qcyBBUEkgcm91dGVzIChldml0YSByZXF1aXJlKVxyXG4gICAgICBjb25zdCBjcnlwdG8gPSAoYXdhaXQgaW1wb3J0KCdjcnlwdG8nKSkuZGVmYXVsdDtcclxuICAgICAgaGFzaCA9IGNyeXB0by5jcmVhdGVIYXNoKCdzaGEyNTYnKS51cGRhdGUobmV3UGFzc3dvcmQpLmRpZ2VzdCgnaGV4Jyk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IG1lc3NhZ2U6ICdFcnJvciBlbiBlbCBoYXNoIGRlIGNvbnRyYXNlw7FhJywgZXJyb3I6IGUubWVzc2FnZSB9LCB7IHN0YXR1czogNTAwIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIERFQlVHOiBWZXJpZmljYSBlbCBoYXNoIHkgZWwgZW1haWxcclxuICAgIC8vIGNvbnNvbGUubG9nKCdERUJVRyBIQVNIOicsIGhhc2gsICdFTUFJTDonLCBlbWFpbCk7XHJcblxyXG4gICAgLy8gQWN0dWFsaXphIGxhIGNvbnRyYXNlw7FhIHNvbG8gc2kgZWwgdXN1YXJpbyBleGlzdGUgeSBlbCBlbWFpbCBlcyBjb3JyZWN0b1xyXG4gICAgY29uc3QgW3VwZGF0ZVJlc3VsdF0gPSBhd2FpdCBjb25uZWN0aW9uLmV4ZWN1dGUoXHJcbiAgICAgICdVUERBVEUgdXN1YXJpb3MgU0VUIHBhc3N3b3JkPT8gV0hFUkUgZW1haWw9PycsXHJcbiAgICAgIFtoYXNoLCBlbWFpbF1cclxuICAgICk7XHJcblxyXG4gICAgaWYgKHVwZGF0ZVJlc3VsdC5hZmZlY3RlZFJvd3MgPT09IDApIHtcclxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgbWVzc2FnZTogJ05vIHNlIHB1ZG8gYWN0dWFsaXphciBsYSBjb250cmFzZcOxYS4gVXN1YXJpbyBubyBlbmNvbnRyYWRvLicgfSwgeyBzdGF0dXM6IDQwNCB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBCb3JyYSBlbCBjw7NkaWdvIHVzYWRvXHJcbiAgICBhd2FpdCBjb25uZWN0aW9uLmV4ZWN1dGUoXHJcbiAgICAgICdERUxFVEUgRlJPTSBjb2RpZ29fcmVjdXBlcmFjaW9uIFdIRVJFIGVtYWlsPT8nLFxyXG4gICAgICBbZW1haWxdXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IG1lc3NhZ2U6ICdDb250cmFzZcOxYSBjYW1iaWFkYSBjb3JyZWN0YW1lbnRlJyB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IG1lc3NhZ2U6ICdFcnJvciBjYW1iaWFuZG8gY29udHJhc2XDsWEnLCBlcnJvcjogZXJyLm1lc3NhZ2UgfSwgeyBzdGF0dXM6IDUwMCB9KTtcclxuICB9IGZpbmFsbHkge1xyXG4gICAgaWYgKGNvbm5lY3Rpb24pIGF3YWl0IGNvbm5lY3Rpb24uZW5kKCk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJteXNxbCIsIm1haWxqZXQiLCJNSl9BUElLRVlfUFVCTElDIiwicHJvY2VzcyIsImVudiIsIk1BSUxKRVRfQVBJX0tFWSIsIk1KX0FQSUtFWV9QUklWQVRFIiwiTUFJTEpFVF9BUElfU0VDUkVUIiwiTUpfRlJPTV9FTUFJTCIsIk1BSUxKRVRfRlJPTV9FTUFJTCIsIk1KX0ZST01fTkFNRSIsIk1BSUxKRVRfRlJPTV9OQU1FIiwibWFpbGpldENsaWVudCIsImFwaUNvbm5lY3QiLCJnZW5lcmF0ZUNvZGUiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ0b1N0cmluZyIsIlBPU1QiLCJyZXF1ZXN0IiwiZW1haWwiLCJqc29uIiwibWVzc2FnZSIsInN0YXR1cyIsImNvbm5lY3Rpb24iLCJjcmVhdGVDb25uZWN0aW9uIiwiaG9zdCIsInVzZXIiLCJwYXNzd29yZCIsImRhdGFiYXNlIiwicm93cyIsImV4ZWN1dGUiLCJsZW5ndGgiLCJjb2RlIiwicG9zdCIsInZlcnNpb24iLCJNZXNzYWdlcyIsIkZyb20iLCJFbWFpbCIsIk5hbWUiLCJUbyIsIlN1YmplY3QiLCJUZXh0UGFydCIsIkhUTUxQYXJ0IiwiZXJyIiwiZXJyb3IiLCJlbmQiLCJQVVQiLCJuZXdQYXNzd29yZCIsInNwZWNpYWxDaGFycyIsImhhc1VwcGVyY2FzZSIsInRlc3QiLCJjcmVhdGVkQXQiLCJEYXRlIiwiY3JlYXRlZF9hdCIsIm5vdyIsImdldFRpbWUiLCJoYXNoIiwiY3J5cHRvIiwiZGVmYXVsdCIsImNyZWF0ZUhhc2giLCJ1cGRhdGUiLCJkaWdlc3QiLCJlIiwidXBkYXRlUmVzdWx0IiwiYWZmZWN0ZWRSb3dzIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/recover/route.js\n");

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

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("assert");

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

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("https");

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

/***/ "tty":
/*!**********************!*\
  !*** external "tty" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("tty");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/mysql2","vendor-chunks/aws-ssl-profiles","vendor-chunks/iconv-lite","vendor-chunks/long","vendor-chunks/named-placeholders","vendor-chunks/denque","vendor-chunks/is-property","vendor-chunks/lru.min","vendor-chunks/sqlstring","vendor-chunks/seq-queue","vendor-chunks/generate-function","vendor-chunks/safer-buffer","vendor-chunks/node-mailjet"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2Frecover%2Froute&page=%2Fapi%2Fauth%2Frecover%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Frecover%2Froute.js&appDir=C%3A%5Cxampp%5Chtdocs%5CDesarrolo%20servidor%5Cmiruta%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5Cxampp%5Chtdocs%5CDesarrolo%20servidor%5Cmiruta&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();