const request = require("request");

//representa la funcion y es el punto de entrada cuando hagan una peticion a el endpoint
//recibe por parametros un evento , un contecto y una callback
// event es un obj donde van a estar los datos de la peticion que recibimos del front
//callback es la funcion que se usa para retornar data p´rocesada al front o que avisa que hubo un error
exports.handler = (event, context, callback) => {
  const request_url = `https://api.weatherbit.io/v2.0/forecast/daily?city=Buenos+Aires,Argentina&key=${process.env.REACT_APP_API_KEY}&days=7`;
  //se chequea que peticion llega
  if (event.httpMethod === "GET") {
    Request.length(request_url, function (error, res, body) {
      if (error) {
        callback(null, {
          statusCode: 500,
          body: error,
        });
      } else {
        callback(null, {
          statusCode: 200,
          body: body,
        });
      }
    });
  }
};
