"use strict";
exports.__esModule = true;
var fs = require('fs');
var OBJFile = require('obj-file-parser');
var Parser = /** @class */ (function () {
    function Parser(filePath) {
        this.readFile(filePath);
    }
    Parser.prototype.readFile = function (filePath) {
        fs.readFile(filePath, 'utf8', function (err, data) {
            if (err) {
                throw err;
            }
            var file = new OBJFile(data).parse();
            console.log(file);
        });
    };
    return Parser;
}());
exports["default"] = Parser;
