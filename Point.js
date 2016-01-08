/**
 * Point.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 08 Jan 2016
 */
"use strict";

const Vector = require("./Vector");

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    addVector(vector) {
        return new Point(this.x + vector.x, this.y + vector.y);
    }

    subtractPoint(point) {
        return new Vector(this.x - point.x, this.y - point.y);
    }
}

module.exports = Point;
