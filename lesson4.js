/**
 * lesson4.js
 *
 * Distance Comparison
 * https://www.youtube.com/watch?v=DxmGxkhhluU&index=4&list=PLW3Zl3wyJwWOpdhYedlD-yCB7WQoHf-My
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 08 Jan 2016
 */
"use strict";

const Point = require("./Point"),

    p = new Point(0, -1),
    i = new Point(1, 1),
    c = new Point(2, -1),
    cp = p.subtractPoint(c),
    ip = i.subtractPoint(c),
    lengthSqrCp = cp.lengthSqr,
    lengthSqrIp = ip.lengthSqr;

console.log("Length squared of CP: " + lengthSqrCp);
console.log("Length squared of IP: " + lengthSqrIp);
