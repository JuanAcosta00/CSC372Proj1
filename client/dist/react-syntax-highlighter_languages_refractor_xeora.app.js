"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkproject_1"] = self["webpackChunkproject_1"] || []).push([["react-syntax-highlighter_languages_refractor_xeora"],{

/***/ "./node_modules/refractor/lang/xeora.js":
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/xeora.js ***!
  \**********************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = xeora\nxeora.displayName = 'xeora'\nxeora.aliases = ['xeoracube']\nfunction xeora(Prism) {\n  ;(function(Prism) {\n    Prism.languages.xeora = Prism.languages.extend('markup', {\n      constant: {\n        pattern: /\\$(?:DomainContents|PageRenderDuration)\\$/,\n        inside: {\n          punctuation: {\n            pattern: /\\$/\n          }\n        }\n      },\n      variable: {\n        pattern: /\\$@?(?:#+|[-+*~=^])?[\\w.]+\\$/,\n        inside: {\n          punctuation: {\n            pattern: /[$.]/\n          },\n          operator: {\n            pattern: /#+|[-+*~=^@]/\n          }\n        }\n      },\n      'function-inline': {\n        pattern: /\\$F:[-\\w.]+\\?[-\\w.]+(?:,(?:\\|?(?:[-#.^+*~]*(?:[\\w+][^$]*)|=(?:[\\S+][^$]*)|@[-#]*(?:\\w+.)[\\w+.]+)?)*)?\\$/,\n        inside: {\n          variable: {\n            pattern: /(?:[,|])@?(?:#+|[-+*~=^])?[\\w.]+/,\n            inside: {\n              punctuation: {\n                pattern: /[,.|]/\n              },\n              operator: {\n                pattern: /#+|[-+*~=^@]/\n              }\n            }\n          },\n          punctuation: {\n            pattern: /\\$\\w:|[$:?.,|]/\n          }\n        },\n        alias: 'function'\n      },\n      'function-block': {\n        pattern: /\\$XF:{[-\\w.]+\\?[-\\w.]+(?:,(?:\\|?(?:[-#.^+*~]*(?:[\\w+][^$]*)|=(?:[\\S+][^$]*)|@[-#]*(?:\\w+.)[\\w+.]+)?)*)?}:XF\\$/,\n        inside: {\n          punctuation: {\n            pattern: /[$:{}?.,|]/\n          }\n        },\n        alias: 'function'\n      },\n      'directive-inline': {\n        pattern: /\\$\\w(?:#\\d+\\+?)?(?:\\[[-\\w.]+])?:[-\\/\\w.]+\\$/,\n        inside: {\n          punctuation: {\n            pattern: /\\$(?:\\w:|C(?:\\[|#\\d))?|[:{[\\]]/,\n            inside: {\n              tag: {\n                pattern: /#\\d/\n              }\n            }\n          }\n        },\n        alias: 'function'\n      },\n      'directive-block-open': {\n        pattern: /\\$\\w+:{|\\$\\w(?:#\\d+\\+?)?(?:\\[[-\\w.]+])?:[-\\w.]+:{(![A-Z]+)?/,\n        inside: {\n          punctuation: {\n            pattern: /\\$(?:\\w:|C(?:\\[|#\\d))?|[:{[\\]]/,\n            inside: {\n              tag: {\n                pattern: /#\\d/\n              }\n            }\n          },\n          attribute: {\n            pattern: /![A-Z]+$/,\n            inside: {\n              punctuation: {\n                pattern: /!/\n              }\n            },\n            alias: 'keyword'\n          }\n        },\n        alias: 'function'\n      },\n      'directive-block-separator': {\n        pattern: /}:[-\\w.]+:{/,\n        inside: {\n          punctuation: {\n            pattern: /[:{}]/\n          }\n        },\n        alias: 'function'\n      },\n      'directive-block-close': {\n        pattern: /}:[-\\w.]+\\$/,\n        inside: {\n          punctuation: {\n            pattern: /[:{}$]/\n          }\n        },\n        alias: 'function'\n      }\n    })\n    Prism.languages.insertBefore(\n      'inside',\n      'punctuation',\n      {\n        variable: Prism.languages.xeora['function-inline'].inside['variable']\n      },\n      Prism.languages.xeora['function-block']\n    )\n    Prism.languages.xeoracube = Prism.languages.xeora\n  })(Prism)\n}\n\n\n//# sourceURL=webpack://project-1/./node_modules/refractor/lang/xeora.js?");

/***/ })

}]);