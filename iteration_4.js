// Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:

const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(param) {
  let sum = 0;

  for (i = 0; i < param.length; i++) {
    sum += param[i];
  }
  return sum / param.length;
}

console.log(average(numbers));
