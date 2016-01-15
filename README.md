# Math for Game Developers

Code examples for using mathematics for game development, based on Jorge Rodriguez' [series of videos on YouTube](https://www.youtube.com/playlist?list=PLW3Zl3wyJwWOpdhYedlD-yCB7WQoHf-My).

I took Jorge's C++ code from the videos and ported it to JavaScript (ECMAScript2015). 
You can use the [Vector](js/math/Vector.js) and [Point](js/math/Point.js) modules in your own projects by using a transpiler such as [Babel](http://babeljs.io/).

## Installation

Use the latest version of [Node.js](https://nodejs.org/) for running the code (at least v5.4).

Install using npm:

    npm install

The examples 1-9 you can simply run with Node.js, on the command line, e.g. type:

    node js/01_character-movement.js
    
Examples 11 and onward have graphics, you can run them in your browser by opening the HTML file.

When you make changes to the code of examples 11 and onwart, run npm install afterwards to see your changes in the
browser, this will transpile the code to a webpack bundle.
