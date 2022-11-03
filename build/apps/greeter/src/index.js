"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const math_1 = require("math");
const formatter_1 = require("formatter");
function greet(name, age) {
    var convertedAge = parseInt(age);
    return `Hello ${(0, formatter_1.format)(name, convertedAge)}. If you were 10 years older you'd be ${(0, math_1.addNumbers)(convertedAge, 10)}`;
}
const express = require('express');
const app = express() ``;
const port = 3000;
// @ts-ignore
app.get('/', (req, res) => {
    res.send('Hello World!');
});
// @ts-ignore
app.get('/greet', (req, res) => {
    console.log("Received /greet call!");
    res.send(greet(req.query.name, req.query.age));
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
