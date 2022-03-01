// Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.
//Puedes usar este array para probar tu función:

const avengers = [
  'Hulk',
  'Thor',
  'IronMan',
  'Captain A.',
  'Spiderman',
  'Captain M.',
];
function findLongestWord(param) {
  let longest = param[0].length;
  let answer = param[0];

  for (let i = 1; i < param.length; i++) {
    let maxLength = param[i].length;

    if (maxLength > longest) {
      answer = param[i];
      longest = maxLength;
    }
  }

  return answer;
}

console.log(findLongestWord(avengers));
