/**
 * lesson3.js
 *
 * Character Movement 3 (Vector Length)
 * https://www.youtube.com/watch?v=bk-RyG0KR_I&index=3&list=PLW3Zl3wyJwWOpdhYedlD-yCB7WQoHf-My
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 08 Jan 2016
 */
"use strict";

const Point = require("./Point"),

    p = new Point(0, -1),
    i = new Point(1, 1),
    v = p.subtractPoint(i),
    length = v.length;

console.log("Length result: " + length);
