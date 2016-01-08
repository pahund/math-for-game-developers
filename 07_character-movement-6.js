/**
 * Video 7: Character Movement 6 (Adding Vectors)
 *
 * https://www.youtube.com/watch?v=Rcbjmt35PDo
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 08 Jan 2016
 */
"use strict";

const Vector = require("./Vector"),

    r = new Vector(4, 0),
    d = new Vector(0, -5),
    v = r.add(d);

console.log("Pacman's new velocity: (" + v.x + ", " + v.y + ")");
