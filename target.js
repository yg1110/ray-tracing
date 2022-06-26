"use strict";
exports.__esModule = true;
var fs = require("fs");
var width = 400;
var ratio = 16.0 / 9.0;
var height = (width / ratio);
// 랜더링 해주는 함수
var present = function (width, height) {
    var output = '';
    for (var i = 1; i <= width * height; i++) {
        var rgb = [255, 0, 0];
        if (i === width * height)
            output += rgb.join(' ');
        else
            output += rgb.join(' ') + '\n';
    }
    return output;
};
var ppm_header = function (width, height) {
    return "P3\n".concat(width, " ").concat(height, "\n255\n");
};
var header = ppm_header(width, height);
var output = present(width, height);
var filename = 'output.ppm';
fs.writeFile(filename, header, 'utf8', function (error) {
    if (error)
        throw error;
    console.log('write end');
});
fs.writeFile(filename, output, { flag: 'a+' }, function (err) {
    if (err) {
        console.error(err);
        return;
    }
});
