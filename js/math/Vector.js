/**
 * Vector.js
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 08 Jan 2016
 */
"use strict";

class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    get length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    get lengthSqr() {
        return this.x * this.x + this.y * this.y;
    }

    get normalized() {
        return new Vector(this.x / this.length, this.y / this.length);
    }

    add(vector) {
        return new Vector(this.x + vector.x, this.y + vector.y);
    }

    subtract(vector) {
        return new Vector(this.x - vector.x, this.y - vector.y);
    }

    multiply(scale) {
        return new Vector(this.x * scale, this.y * scale);
    }

    divide(scale) {
        return new Vector(this.x / scale, this.y / scale);
    }

    equals(vector) {
        return this.x === vector.x && this.y === vector.y;
    }

    dotProduct(vector) {
        const a = this.normalized,
            b = vector.normalized;
        return a.x * b.x + a.y * b.y;
    }
}

module.exports = Vector;
