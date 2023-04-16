//#region Task one
class Rectangle {
    #width = 0;
    #height = 0;

    constructor(W, H) {
        this.#width = W;
        this.#height = H;
    }

    get dimensions() {
        return `Dimensions of the rectangle : Width= ${this.#width} ,Height= ${this.#height}.`;
    }

    set change_Width(W) {
        if ( Number.isInteger(W) && W>1 )  this.#width = W
        else throw new Error("Error, Width must be Integer and positive value")
    }
    set change_Height(H) {
        if (Number.isInteger(H) && H > 1) this.#height = H;
        else throw new Error("Error, Height must be Integer and positive value")
    }

    // methods
    area(){
        return `Area = ${this.#width * this.#height}`
    }

    perimeter(){
        return `Perimeter = ${2 * (this.#width + this.#height)}`
    }

    draw(symbol){
        for (let i = 0; i < this.#height; i++) {
            console.log( symbol.repeat(this.#width) )
        }
    }
}
//#endregion

//#region Task Two
class Square extends Rectangle {
    constructor(W) {
        super(W,W)
    }
}
//#endregion 