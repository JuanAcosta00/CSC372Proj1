"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkproject_1"] = self["webpackChunkproject_1"] || []).push([["react-syntax-highlighter_languages_refractor_q"],{

/***/ "./node_modules/refractor/lang/q.js":
/*!******************************************!*\
  !*** ./node_modules/refractor/lang/q.js ***!
  \******************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = q\nq.displayName = 'q'\nq.aliases = []\nfunction q(Prism) {\n  Prism.languages.q = {\n    string: /\"(?:\\\\.|[^\"\\\\\\r\\n])*\"/,\n    comment: [\n      // From http://code.kx.com/wiki/Reference/Slash:\n      // When / is following a space (or a right parenthesis, bracket, or brace), it is ignored with the rest of the line.\n      {\n        pattern: /([\\t )\\]}])\\/.*/,\n        lookbehind: true,\n        greedy: true\n      }, // From http://code.kx.com/wiki/Reference/Slash:\n      // A line which has / as its first character and contains at least one other non-whitespace character is a whole-line comment and is ignored entirely.\n      // A / on a line by itself begins a multiline comment which is terminated by the next \\ on a line by itself.\n      // If a / is not matched by a \\, the multiline comment is unterminated and continues to end of file.\n      // The / and \\ must be the first char on the line, but may be followed by any amount of whitespace.\n      {\n        pattern: /(^|\\r?\\n|\\r)\\/[\\t ]*(?:(?:\\r?\\n|\\r)(?:.*(?:\\r?\\n|\\r))*?(?:\\\\(?=[\\t ]*(?:\\r?\\n|\\r))|$)|\\S.*)/,\n        lookbehind: true,\n        greedy: true\n      }, // From http://code.kx.com/wiki/Reference/Slash:\n      // A \\ on a line by itself with no preceding matching / will comment to end of file.\n      {\n        pattern: /^\\\\[\\t ]*(?:\\r?\\n|\\r)[\\s\\S]+/m,\n        greedy: true\n      },\n      {\n        pattern: /^#!.+/m,\n        greedy: true\n      }\n    ],\n    symbol: /`(?::\\S+|[\\w.]*)/,\n    datetime: {\n      pattern: /0N[mdzuvt]|0W[dtz]|\\d{4}\\.\\d\\d(?:m|\\.\\d\\d(?:T(?:\\d\\d(?::\\d\\d(?::\\d\\d(?:[.:]\\d\\d\\d)?)?)?)?)?[dz]?)|\\d\\d:\\d\\d(?::\\d\\d(?:[.:]\\d\\d\\d)?)?[uvt]?/,\n      alias: 'number'\n    },\n    // The negative look-ahead prevents bad highlighting\n    // of verbs 0: and 1:\n    number: /\\b(?![01]:)(?:0[wn]|0W[hj]?|0N[hje]?|0x[\\da-fA-F]+|\\d+\\.?\\d*(?:e[+-]?\\d+)?[hjfeb]?)/,\n    keyword: /\\\\\\w+\\b|\\b(?:abs|acos|aj0?|all|and|any|asc|asin|asof|atan|attr|avgs?|binr?|by|ceiling|cols|cor|cos|count|cov|cross|csv|cut|delete|deltas|desc|dev|differ|distinct|div|do|dsave|ej|enlist|eval|except|exec|exit|exp|fby|fills|first|fkeys|flip|floor|from|get|getenv|group|gtime|hclose|hcount|hdel|hopen|hsym|iasc|identity|idesc|if|ij|in|insert|inter|inv|keys?|last|like|list|ljf?|load|log|lower|lsq|ltime|ltrim|mavg|maxs?|mcount|md5|mdev|med|meta|mins?|mmax|mmin|mmu|mod|msum|neg|next|not|null|or|over|parse|peach|pj|plist|prds?|prev|prior|rand|rank|ratios|raze|read0|read1|reciprocal|reval|reverse|rload|rotate|rsave|rtrim|save|scan|scov|sdev|select|set|setenv|show|signum|sin|sqrt|ssr?|string|sublist|sums?|sv|svar|system|tables|tan|til|trim|txf|type|uj|ungroup|union|update|upper|upsert|value|var|views?|vs|wavg|where|while|within|wj1?|wsum|ww|xasc|xbar|xcols?|xdesc|xexp|xgroup|xkey|xlog|xprev|xrank)\\b/,\n    adverb: {\n      pattern: /['\\/\\\\]:?|\\beach\\b/,\n      alias: 'function'\n    },\n    verb: {\n      pattern: /(?:\\B\\.\\B|\\b[01]:|<[=>]?|>=?|[:+\\-*%,!?_~=|$&#@^]):?/,\n      alias: 'operator'\n    },\n    punctuation: /[(){}\\[\\];.]/\n  }\n}\n\n\n//# sourceURL=webpack://project-1/./node_modules/refractor/lang/q.js?");

/***/ })

}]);