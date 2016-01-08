/**
 * Video 2: Character Movement 2 (Subtracting Vectors)
 *
 * https://www.youtube.com/watch?v=WNaxtPTMqSo
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
