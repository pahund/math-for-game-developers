/**
 * Videos 9/10: Backstabbing (Dot Product)
 *
 * https://www.youtube.com/watch?v=Q9FZllr6-wY
 * https://www.youtube.com/watch?v=HXpSQ7yyu3o
 *
 * @author <a href="https://github.com/pahund">Patrick Hund</a>
 * @since 08 Jan 2016
 */
"use strict";

const Vector = require("./math/Vector"),

    hero = new Vector(3, 0),
    spy = new Vector(-3, 0),
    dotProduct = hero.dotProduct(spy);

console.log("dot product: " + dotProduct);
console.log("is backstab? " + (dotProduct <= -0.5));
