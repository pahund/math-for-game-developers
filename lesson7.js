/**
 * lesson7.js
 *
 * Character Movement 6 (Adding Vectors)
 * https://www.youtube.com/watch?v=Rcbjmt35PDo&index=7&list=PLW3Zl3wyJwWOpdhYedlD-yCB7WQoHf-My
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
