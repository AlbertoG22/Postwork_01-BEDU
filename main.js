//Ejercicio 2
function chunk(array, size) {
    var newArr = [];

    for (let i = 0; i < array.length; i += size) {
        var segmento = array.slice(i, i + size);
        newArr.push(segmento);
    }
    return newArr;
}
var data = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(chunk(data, 3));