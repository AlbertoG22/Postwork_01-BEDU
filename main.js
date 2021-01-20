//------------------------------------------------ Ejercicio 1 ------------------------------------------------
function deepEqual(data1, data2) {

    //Condicional para descartar datos diferentes
    if (typeof (data1) === typeof (data2)) {

        //Condicional para revisar si son objetos y descartar datos null ya que tambien son de tipo objeto 
        if (typeof (data1) === 'object' && typeof (data2) === 'object' && data1 !== null && data2 !== null) {

            let keysdata1 = Object.keys(data1)
            let keysdata2 = Object.keys(data2)

            //Si son tipo objeto este conficional revisa la longitud de ambos objetos
            if (keysdata1.length === keysdata2.length) {

                //Iterador sobre una lista de propiedades del primer objeto para verificar si el otro objeto contiene todas las propiedades
                for (property of keysdata1) {

                    //Ultimo condicional para verificar si las propiedades contienen los mismos valores
                    if (keysdata2.includes(property)) {

                        //Se utiliza la recursion sobre cada propiedad de los objetos y se comparan
                        result = deepEqual(data1[property], data2[property])

                        //Condicional para romper el for si los valores son diferentes
                        if (!result) {
                            break
                        }

                    } else {
                        return false
                    }

                }
                return result;

            } else {
                return false
            }

        } else if (data1 !== data2) {
            return false;
        } else {
            return true
        }

    } else {
        return false
    }
}

let john = {
    firstName: 'John',
    lastName: 'Doe'
};

console.log("Ejercicio 1");
console.log('Test 1:', deepEqual(1, 1));

console.log('Test 2:', deepEqual(1, '1'));
console.log('Test 3:', deepEqual(john, john));

console.log('Test 4:', deepEqual(john, {
    firstName: 'John',
    lastName: 'Doe'
}));

console.log('Test 5:', deepEqual(john, {
    firstName: 'John'
}));

console.log('Test 6:', deepEqual(john, {
    firstName: 'John',
    lastName: 'Deo'
}));

console.log('Testnull1:', deepEqual(null, null));





//------------------------------------------------ Ejercicio 2 ------------------------------------------------
function chunk(array, size) {
    var newArr = [];

    for (let i = 0; i < array.length; i += size) {
        var segmento = array.slice(i, i + size);
        newArr.push(segmento);
    }
    return newArr;
}
var data = [1, 2, 3, 4, 5, 6, 7, 8]

console.log("Ejercicio 2");
console.log(chunk(data, 3));





//------------------------------------------------ Ejercicio 3 ------------------------------------------------
function frequency(string) {

    let charArray = [];
    let stringObj = {};

    for (let char of string) {
        charArray.push(char);
    }

    charArray = charArray.sort()

    for (let element of charArray) {

        if (Object.keys(stringObj).includes(element)) {
            stringObj[element]++;
        } else {
            stringObj[element] = 1;
        }

    }

    return stringObj;

}
console.log("Ejercicio 3");
console.log('Test 1:', frequency('cccbbbaaa'))

console.log('Test 2:', frequency('www.bedu.org'))

console.log('Test 3:', frequency('john.doe@domain.com'))