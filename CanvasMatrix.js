// ldMELOb

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
     * @param{number} r - red channel
     * @param{number} g - green channel
     * @param{number} b - blue channel
     * @param{number} a - alpha channel
     */

    setp(x = 0, y= 0, r = 0, g = 0, b = 0, a = 0) {

        const i = (y * this.canvas.width + x) * 4;
        const rgba = [r, g, b, a];
        for (let e = 0; e < 4; e++) this.data[i+e] = rgba[e];

    }
    
     /**
     * Return the values of a pixel.
     * @param{number} x - X coordinate.
     * @param{number} y - Y coordinate
     */

    getp(x = 0, y= 0) {

        const i = (y * this.canvas.width + x) * 4;
        const rgba = [0, 0, 0, 0];
        for (let e = 0; e < 4; e++) rgba[e] = this.data[i+e];
        return rgba;
        
    }
    
    /**
     * Render pixels
     */
    render() {

        this.ctx.putImageData(this.map, 0, 0);

    }

}
