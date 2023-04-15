//#region TASK 1

arr = [1, 2, 3, 4, -6, 5, 6, -23]
Array.prototype.min = function() {
    let min = this[0] ;
    this.filter((ele) => {
        if (ele  < min) {
            return min = ele
        }
    })
    return min;
}
console.log(arr.min()) //-23

//#endregion

//#region TASK 2

Array.prototype.customFilter = function (callback) {
    let list = [];
    this.forEach(element => {
        if (callback(element)) {
            list.push(element)
        }
    })
    return list
}
    console.log(arr.customFilter((ele) => ele > 3)) //[ 4, 5, 6 ]

//#endregion

//#region TASK 3

Array.prototype.customFill = function (Value, start , end ) {
    let list = [];
    for (let index = 0 ; index < this.length; index++) {
        if( index >= start && index <= end){
            list.push(Value)
        }
        else {
            list.push(this[index])
        }
    } 
    return list
}
console.log(arr.customFill(0, 2, 6)) // [ 1, 2, 0,   0, 0, 0, 6, -23]

//#endregion