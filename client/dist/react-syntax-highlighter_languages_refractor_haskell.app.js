"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkproject_1"] = self["webpackChunkproject_1"] || []).push([["react-syntax-highlighter_languages_refractor_haskell"],{

/***/ "./node_modules/refractor/lang/haskell.js":
/*!************************************************!*\
  !*** ./node_modules/refractor/lang/haskell.js ***!
  \************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = haskell\nhaskell.displayName = 'haskell'\nhaskell.aliases = ['hs']\nfunction haskell(Prism) {\n  Prism.languages.haskell = {\n    comment: {\n      pattern: /(^|[^-!#$%*+=?&@|~.:<>^\\\\\\/])(?:--[^-!#$%*+=?&@|~.:<>^\\\\\\/].*|{-[\\s\\S]*?-})/m,\n      lookbehind: true\n    },\n    char: /'(?:[^\\\\']|\\\\(?:[abfnrtv\\\\\"'&]|\\^[A-Z@[\\]^_]|NUL|SOH|STX|ETX|EOT|ENQ|ACK|BEL|BS|HT|LF|VT|FF|CR|SO|SI|DLE|DC1|DC2|DC3|DC4|NAK|SYN|ETB|CAN|EM|SUB|ESC|FS|GS|RS|US|SP|DEL|\\d+|o[0-7]+|x[0-9a-fA-F]+))'/,\n    string: {\n      pattern: /\"(?:[^\\\\\"]|\\\\(?:[abfnrtv\\\\\"'&]|\\^[A-Z@[\\]^_]|NUL|SOH|STX|ETX|EOT|ENQ|ACK|BEL|BS|HT|LF|VT|FF|CR|SO|SI|DLE|DC1|DC2|DC3|DC4|NAK|SYN|ETB|CAN|EM|SUB|ESC|FS|GS|RS|US|SP|DEL|\\d+|o[0-7]+|x[0-9a-fA-F]+)|\\\\\\s+\\\\)*\"/,\n      greedy: true\n    },\n    keyword: /\\b(?:case|class|data|deriving|do|else|if|in|infixl|infixr|instance|let|module|newtype|of|primitive|then|type|where)\\b/,\n    import_statement: {\n      // The imported or hidden names are not included in this import\n      // statement. This is because we want to highlight those exactly like\n      // we do for the names in the program.\n      pattern: /((?:\\r?\\n|\\r|^)\\s*)import\\s+(?:qualified\\s+)?(?:[A-Z][\\w']*)(?:\\.[A-Z][\\w']*)*(?:\\s+as\\s+(?:[A-Z][_a-zA-Z0-9']*)(?:\\.[A-Z][\\w']*)*)?(?:\\s+hiding\\b)?/m,\n      lookbehind: true,\n      inside: {\n        keyword: /\\b(?:import|qualified|as|hiding)\\b/\n      }\n    },\n    // These are builtin variables only. Constructors are highlighted later as a constant.\n    builtin: /\\b(?:abs|acos|acosh|all|and|any|appendFile|approxRational|asTypeOf|asin|asinh|atan|atan2|atanh|basicIORun|break|catch|ceiling|chr|compare|concat|concatMap|const|cos|cosh|curry|cycle|decodeFloat|denominator|digitToInt|div|divMod|drop|dropWhile|either|elem|encodeFloat|enumFrom|enumFromThen|enumFromThenTo|enumFromTo|error|even|exp|exponent|fail|filter|flip|floatDigits|floatRadix|floatRange|floor|fmap|foldl|foldl1|foldr|foldr1|fromDouble|fromEnum|fromInt|fromInteger|fromIntegral|fromRational|fst|gcd|getChar|getContents|getLine|group|head|id|inRange|index|init|intToDigit|interact|ioError|isAlpha|isAlphaNum|isAscii|isControl|isDenormalized|isDigit|isHexDigit|isIEEE|isInfinite|isLower|isNaN|isNegativeZero|isOctDigit|isPrint|isSpace|isUpper|iterate|last|lcm|length|lex|lexDigits|lexLitChar|lines|log|logBase|lookup|map|mapM|mapM_|max|maxBound|maximum|maybe|min|minBound|minimum|mod|negate|not|notElem|null|numerator|odd|or|ord|otherwise|pack|pi|pred|primExitWith|print|product|properFraction|putChar|putStr|putStrLn|quot|quotRem|range|rangeSize|read|readDec|readFile|readFloat|readHex|readIO|readInt|readList|readLitChar|readLn|readOct|readParen|readSigned|reads|readsPrec|realToFrac|recip|rem|repeat|replicate|return|reverse|round|scaleFloat|scanl|scanl1|scanr|scanr1|seq|sequence|sequence_|show|showChar|showInt|showList|showLitChar|showParen|showSigned|showString|shows|showsPrec|significand|signum|sin|sinh|snd|sort|span|splitAt|sqrt|subtract|succ|sum|tail|take|takeWhile|tan|tanh|threadToIOResult|toEnum|toInt|toInteger|toLower|toRational|toUpper|truncate|uncurry|undefined|unlines|until|unwords|unzip|unzip3|userError|words|writeFile|zip|zip3|zipWith|zipWith3)\\b/,\n    // decimal integers and floating point numbers | octal integers | hexadecimal integers\n    number: /\\b(?:\\d+(?:\\.\\d+)?(?:e[+-]?\\d+)?|0o[0-7]+|0x[0-9a-f]+)\\b/i,\n    // Most of this is needed because of the meaning of a single '.'.\n    // If it stands alone freely, it is the function composition.\n    // It may also be a separator between a module name and an identifier => no\n    // operator. If it comes together with other special characters it is an\n    // operator too.\n    operator: /\\s\\.\\s|[-!#$%*+=?&@|~.:<>^\\\\\\/]*\\.[-!#$%*+=?&@|~.:<>^\\\\\\/]+|[-!#$%*+=?&@|~.:<>^\\\\\\/]+\\.[-!#$%*+=?&@|~.:<>^\\\\\\/]*|[-!#$%*+=?&@|~:<>^\\\\\\/]+|`([A-Z][\\w']*\\.)*[_a-z][\\w']*`/,\n    // In Haskell, nearly everything is a variable, do not highlight these.\n    hvariable: /\\b(?:[A-Z][\\w']*\\.)*[_a-z][\\w']*\\b/,\n    constant: /\\b(?:[A-Z][\\w']*\\.)*[A-Z][\\w']*\\b/,\n    punctuation: /[{}[\\];(),.:]/\n  }\n  Prism.languages.hs = Prism.languages.haskell\n}\n\n\n//# sourceURL=webpack://project-1/./node_modules/refractor/lang/haskell.js?");

/***/ })

}]);