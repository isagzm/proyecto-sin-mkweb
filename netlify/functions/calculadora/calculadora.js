// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
const handler = async (event) => {
  try {
    function calculadora(operacion, num1, num2) {
      if (operacion === 'suma') {
        return num1 + num2;
      } else if (operacion === 'resta') {
        return num1 - num2;
      } else if (operacion === 'multiplicacion') {
        return num1 * num2;
      } else if (operacion === 'division') {
        if (num2 !== 0) {
          return num1 / num2;
        } else {
          return 'No se puede dividir entre cero';
        }
      } else {
        return 'Operación no válida';
      }
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: calculadora}),
      
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
