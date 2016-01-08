/**
 * lesson2.js
 *
 * Character Movement 2 (Subtracting Vectors)
 * https://www.youtube.com/watch?v=WNaxtPTMqSo&index=2&list=PLW3Zl3wyJwWOpdhYedlD-yCB7WQoHf-My
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 08 Jan 2016
 */
"use strict";

const Point = require("./Point"),

    p = new Point(0, -1),
    i = new Point(1, 1),
    v = p.subtractPoint(i);

console.log("Subtract points result: (" + v.x + ", " + v.y + ")");
