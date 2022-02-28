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
  let longest = avengers[0].length;
  let answer = avengers[0];

  for (let i = 1; i < avengers.length; i++) {
    let maxLength = avengers[i].length;

    if (maxLength > longest) {
      answer = avengers[i];
      longest = maxLength;
    }
  }

  return answer;
}

console.log(findLongestWord(avengers));
