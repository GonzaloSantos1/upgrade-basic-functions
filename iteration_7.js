// Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array - comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false. Puedes usar este array para probar tu función:

const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc',
];

function finderName(array, string) {
  if (array.includes(string)) {
    return (
      'true, la posición del string es la número ' + array.indexOf(string)
    );
  } else {
    return false;
  }
}

// i.e:
console.log(finderName(nameFinder, 'Natasha'));
