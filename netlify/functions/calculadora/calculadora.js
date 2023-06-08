// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
const handler = async (event) => {
  try {
    const num1 = parseInt(event.queryStringParameters.num1) || 0
    const num2 = parseInt(event.queryStringParameters.num2) || 0
    const operacion = parseInt(event.queryStringParameters.operacion) || 0

    let resultado = 0
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
      } 

    return {
      statusCode: 200,
      body: JSON.stringify({ message: resultado}),
      
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
