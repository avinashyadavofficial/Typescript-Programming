"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
fs_1.promises.readFile('sample.txt', 'utf-8')
    .then(function (data) {
    console.log('File content:', data);
})
    .catch(function (err) {
    console.error('Error:', err);
});
