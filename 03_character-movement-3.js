/**
 * Video 3: Character Movement 3 (Vector Length)
 *
 * https://www.youtube.com/watch?v=bk-RyG0KR_I
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
