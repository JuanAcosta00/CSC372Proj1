"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkproject_1"] = self["webpackChunkproject_1"] || []).push([["react-syntax-highlighter_languages_refractor_stylus"],{

/***/ "./node_modules/refractor/lang/stylus.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/stylus.js ***!
  \***********************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = stylus\nstylus.displayName = 'stylus'\nstylus.aliases = []\nfunction stylus(Prism) {\n  ;(function(Prism) {\n    var inside = {\n      url: /url\\(([\"']?).*?\\1\\)/i,\n      string: {\n        pattern: /(\"|')(?:(?!\\1)[^\\\\\\r\\n]|\\\\(?:\\r\\n|[\\s\\S]))*\\1/,\n        greedy: true\n      },\n      interpolation: null,\n      // See below\n      func: null,\n      // See below\n      important: /\\B!(?:important|optional)\\b/i,\n      keyword: {\n        pattern: /(^|\\s+)(?:(?:if|else|for|return|unless)(?=\\s+|$)|@[\\w-]+)/,\n        lookbehind: true\n      },\n      hexcode: /#[\\da-f]{3,6}/i,\n      number: /\\b\\d+(?:\\.\\d+)?%?/,\n      boolean: /\\b(?:true|false)\\b/,\n      operator: [\n        // We want non-word chars around \"-\" because it is\n        // accepted in property names.\n        /~|[+!\\/%<>?=]=?|[-:]=|\\*[*=]?|\\.+|&&|\\|\\||\\B-\\B|\\b(?:and|in|is(?: a| defined| not|nt)?|not|or)\\b/\n      ],\n      punctuation: /[{}()\\[\\];:,]/\n    }\n    inside['interpolation'] = {\n      pattern: /\\{[^\\r\\n}:]+\\}/,\n      alias: 'variable',\n      inside: {\n        delimiter: {\n          pattern: /^{|}$/,\n          alias: 'punctuation'\n        },\n        rest: inside\n      }\n    }\n    inside['func'] = {\n      pattern: /[\\w-]+\\([^)]*\\).*/,\n      inside: {\n        function: /^[^(]+/,\n        rest: inside\n      }\n    }\n    Prism.languages.stylus = {\n      comment: {\n        pattern: /(^|[^\\\\])(\\/\\*[\\s\\S]*?\\*\\/|\\/\\/.*)/,\n        lookbehind: true\n      },\n      'atrule-declaration': {\n        pattern: /(^\\s*)@.+/m,\n        lookbehind: true,\n        inside: {\n          atrule: /^@[\\w-]+/,\n          rest: inside\n        }\n      },\n      'variable-declaration': {\n        pattern: /(^[ \\t]*)[\\w$-]+\\s*.?=[ \\t]*(?:(?:\\{[^}]*\\}|.+)|$)/m,\n        lookbehind: true,\n        inside: {\n          variable: /^\\S+/,\n          rest: inside\n        }\n      },\n      statement: {\n        pattern: /(^[ \\t]*)(?:if|else|for|return|unless)[ \\t]+.+/m,\n        lookbehind: true,\n        inside: {\n          keyword: /^\\S+/,\n          rest: inside\n        }\n      },\n      // A property/value pair cannot end with a comma or a brace\n      // It cannot have indented content unless it ended with a semicolon\n      'property-declaration': {\n        pattern: /((?:^|\\{)([ \\t]*))(?:[\\w-]|\\{[^}\\r\\n]+\\})+(?:\\s*:\\s*|[ \\t]+)[^{\\r\\n]*(?:;|[^{\\r\\n,](?=$)(?!(\\r?\\n|\\r)(?:\\{|\\2[ \\t]+)))/m,\n        lookbehind: true,\n        inside: {\n          property: {\n            pattern: /^[^\\s:]+/,\n            inside: {\n              interpolation: inside.interpolation\n            }\n          },\n          rest: inside\n        }\n      },\n      // A selector can contain parentheses only as part of a pseudo-element\n      // It can span multiple lines.\n      // It must end with a comma or an accolade or have indented content.\n      selector: {\n        pattern: /(^[ \\t]*)(?:(?=\\S)(?:[^{}\\r\\n:()]|::?[\\w-]+(?:\\([^)\\r\\n]*\\))?|\\{[^}\\r\\n]+\\})+)(?:(?:\\r?\\n|\\r)(?:\\1(?:(?=\\S)(?:[^{}\\r\\n:()]|::?[\\w-]+(?:\\([^)\\r\\n]*\\))?|\\{[^}\\r\\n]+\\})+)))*(?:,$|\\{|(?=(?:\\r?\\n|\\r)(?:\\{|\\1[ \\t]+)))/m,\n        lookbehind: true,\n        inside: {\n          interpolation: inside.interpolation,\n          punctuation: /[{},]/\n        }\n      },\n      func: inside.func,\n      string: inside.string,\n      interpolation: inside.interpolation,\n      punctuation: /[{}()\\[\\];:.]/\n    }\n  })(Prism)\n}\n\n\n//# sourceURL=webpack://project-1/./node_modules/refractor/lang/stylus.js?");

/***/ })

}]);