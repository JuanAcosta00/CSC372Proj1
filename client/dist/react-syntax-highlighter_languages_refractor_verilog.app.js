"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkproject_1"] = self["webpackChunkproject_1"] || []).push([["react-syntax-highlighter_languages_refractor_verilog"],{

/***/ "./node_modules/refractor/lang/verilog.js":
/*!************************************************!*\
  !*** ./node_modules/refractor/lang/verilog.js ***!
  \************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = verilog\nverilog.displayName = 'verilog'\nverilog.aliases = []\nfunction verilog(Prism) {\n  Prism.languages.verilog = {\n    comment: /\\/\\/.*|\\/\\*[\\s\\S]*?\\*\\//,\n    string: {\n      pattern: /\"(?:\\\\(?:\\r\\n|[\\s\\S])|[^\"\\\\\\r\\n])*\"/,\n      greedy: true\n    },\n    // support for any kernel function (ex: $display())\n    property: /\\B\\$\\w+\\b/,\n    // support for user defined constants (ex: `define)\n    constant: /\\B`\\w+\\b/,\n    function: /\\w+(?=\\()/,\n    // support for verilog and system verilog keywords\n    keyword: /\\b(?:alias|and|assert|assign|assume|automatic|before|begin|bind|bins|binsof|bit|break|buf|bufif0|bufif1|byte|class|case|casex|casez|cell|chandle|clocking|cmos|config|const|constraint|context|continue|cover|covergroup|coverpoint|cross|deassign|default|defparam|design|disable|dist|do|edge|else|end|endcase|endclass|endclocking|endconfig|endfunction|endgenerate|endgroup|endinterface|endmodule|endpackage|endprimitive|endprogram|endproperty|endspecify|endsequence|endtable|endtask|enum|event|expect|export|extends|extern|final|first_match|for|force|foreach|forever|fork|forkjoin|function|generate|genvar|highz0|highz1|if|iff|ifnone|ignore_bins|illegal_bins|import|incdir|include|initial|inout|input|inside|instance|int|integer|interface|intersect|join|join_any|join_none|large|liblist|library|local|localparam|logic|longint|macromodule|matches|medium|modport|module|nand|negedge|new|nmos|nor|noshowcancelled|not|notif0|notif1|null|or|output|package|packed|parameter|pmos|posedge|primitive|priority|program|property|protected|pull0|pull1|pulldown|pullup|pulsestyle_onevent|pulsestyle_ondetect|pure|rand|randc|randcase|randsequence|rcmos|real|realtime|ref|reg|release|repeat|return|rnmos|rpmos|rtran|rtranif0|rtranif1|scalared|sequence|shortint|shortreal|showcancelled|signed|small|solve|specify|specparam|static|string|strong0|strong1|struct|super|supply0|supply1|table|tagged|task|this|throughout|time|timeprecision|timeunit|tran|tranif0|tranif1|tri|tri0|tri1|triand|trior|trireg|type|typedef|union|unique|unsigned|use|uwire|var|vectored|virtual|void|wait|wait_order|wand|weak0|weak1|while|wildcard|wire|with|within|wor|xnor|xor)\\b/,\n    // bold highlighting for all verilog and system verilog logic blocks\n    important: /\\b(?:always_latch|always_comb|always_ff|always)\\b ?@?/,\n    // support for time ticks, vectors, and real numbers\n    number: /\\B##?\\d+|(?:\\b\\d+)?'[odbh] ?[\\da-fzx_?]+|\\b\\d*[._]?\\d+(?:e[-+]?\\d+)?/i,\n    operator: /[-+{}^~%*\\/?=!<>&|]+/,\n    punctuation: /[[\\];(),.:]/\n  }\n}\n\n\n//# sourceURL=webpack://project-1/./node_modules/refractor/lang/verilog.js?");

/***/ })

}]);