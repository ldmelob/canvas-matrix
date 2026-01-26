# CanvasMatrix.js
Abstract HTML Canvas object to 2d matrices.

## Features
* **Easy pixel access:** edit pixels directly by pixels' matrix.
* **Simple and fast:** send pixels' map directly to GPU when update is called.

## How it works
* **CanvasMatrix object:** the CanvasMatrix(width, height) object configures a HTML Canvas object and the pixels' map. Default width and height values are '64px'.
* **Function setp:** the function setp(x, y, r, g, b, a) changes the RGBA value of a pixel. The r, g, b and a values range is from 0 to 255.
* **Function getp:** the function getp(x, y) return a formated array [r, g, b, a] with the actual value of a pixel.
* **Function render:** the function render() render the image data to the screen. Before it, changes are not visible.

