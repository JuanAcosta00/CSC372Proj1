"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkproject_1"] = self["webpackChunkproject_1"] || []).push([["react-syntax-highlighter_languages_refractor_ada"],{

/***/ "./node_modules/refractor/lang/ada.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/ada.js ***!
  \********************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = ada\nada.displayName = 'ada'\nada.aliases = []\nfunction ada(Prism) {\n  Prism.languages.ada = {\n    comment: /--.*/,\n    string: /\"(?:\"\"|[^\"\\r\\f\\n])*\"/i,\n    number: [\n      {\n        pattern: /\\b\\d(?:_?\\d)*#[\\dA-F](?:_?[\\dA-F])*(?:\\.[\\dA-F](?:_?[\\dA-F])*)?#(?:E[+-]?\\d(?:_?\\d)*)?/i\n      },\n      {\n        pattern: /\\b\\d(?:_?\\d)*(?:\\.\\d(?:_?\\d)*)?(?:E[+-]?\\d(?:_?\\d)*)?\\b/i\n      }\n    ],\n    'attr-name': /\\b'\\w+/i,\n    keyword: /\\b(?:abort|abs|abstract|accept|access|aliased|all|and|array|at|begin|body|case|constant|declare|delay|delta|digits|do|else|new|return|elsif|end|entry|exception|exit|for|function|generic|goto|if|in|interface|is|limited|loop|mod|not|null|of|others|out|overriding|package|pragma|private|procedure|protected|raise|range|record|rem|renames|requeue|reverse|select|separate|some|subtype|synchronized|tagged|task|terminate|then|type|until|use|when|while|with|xor)\\b/i,\n    boolean: /\\b(?:true|false)\\b/i,\n    operator: /<[=>]?|>=?|=>?|:=|\\/=?|\\*\\*?|[&+-]/,\n    punctuation: /\\.\\.?|[,;():]/,\n    char: /'.'/,\n    variable: /\\b[a-z](?:[_a-z\\d])*\\b/i\n  }\n}\n\n\n//# sourceURL=webpack://project-1/./node_modules/refractor/lang/ada.js?");

/***/ })

}]);