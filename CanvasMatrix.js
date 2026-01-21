// d MELO b

class CanvasMatrix {

    /**
     * Pixels' matrix of Canvas HTML object.
     * @param{number} width - canvas width.
     * @param{number} height - canvas height.
     */

    constructor (width=64, height=64) {

        // Setting canvas
        this.canvas = document.createElement('canvas');
        this.canvas.id = "canvax"
        this.canvas.width = width;
        this.canvas.height = height;
        this.canvas.style.width = width + 'px';
        this.canvas.style.height = height + 'px';

        // Setting data array
        this.ctx = this.canvas.getContext("2d");
        this.map = this.ctx.createImageData(width, height);
        this.data = this.map.data;
    
    }

    /**
     * Change the values of a pixel.
     * @param{number} x - X coordinate.
     * @param{number} y - Y coordinate
     * @param{array} rgba - Formated list [R, G, B, A]
     */

    set(x = 0, y= 0, rgba = [0, 0, 0, 0]) {

        const i = (y * this.canvas.width + x) * 4;

        for (let e = 0; e < 4; e++) this.data[i+e] = rgba[e];

    }

    /**
     * Render pixels
     */

    update() {

        this.ctx.putImageData(this.map, 0, 0);

    }

}
