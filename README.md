# vector2lib
2D Vector Library for JavaScript.

### Installation

vector2lib requires [node.js](https://nodejs.org/) v4+ to run.

Install this package through npm(NodeJS Package Manager).

```sh
$ npm install @r0neko/vector2lib
```
### Usage

Instantiate the class by importing it.

```js
const Vector2 = require("@r0neko/vector2lib");

let a = new Vector2(123, 456);

console.log(a); // Vector2 { X: 123, Y: 456 }

// basic addition
a.Add(new Vector2(10, 20)); // or a.Add(10, 20);
console.log(a); // Vector2 { X: 133, Y: 476 }
```

You have some basic functions like Add, Multiply, Subtract, Angle, AngleDeg, Distance, DistanceSquared, Length, LengthSquared, Rotate and RotateDegrees.