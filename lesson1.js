/**
 * lesson1.js
 *
 * Character Movement (Points and Vectors)
 * https://www.youtube.com/watch?v=sKCF8A3XGxQ&index=1&list=PLW3Zl3wyJwWOpdhYedlD-yCB7WQoHf-My
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 08 Jan 2016
 */
"use strict";

const Vector = require("./Vector"),
    Point = require("./Point"),

    p = new Point(1, 0),
    v = new Vector(2, 3),
    p2 = p.addVector(v);

console.log("Add vector result: (" + p2.x + ", " + p2.y + ")");
