import React, { Component } from "react";
import "./App.css";
import Top from "./components/Top.js";
import Bottom from "./components/Bottom.js";

class App extends Component {
  // agregamos el construct y definimos el estado
  constructor(props) {
    super(props);
    this.state = {
      current: {},
      forecast: [],
      location: {},
      isLoaded: false,
    };
  }

  componentDidMount() {
    // se hace el fetch que retorna un obj Promise
    //promesa, de la que vamos a obtener los datos
    fetch(`/.netlify/functions/getWeather`)
      // entonces una vez obtenida la response, la retorne en formato JSON
      .then((result) => result.json())
      // cae en este then y lo recibimos en jsonData, donde etsa la data del clima que quiero manipular
      .then((jsonData) => {
        // guardo el primer obj (el clima del dia de hoy)
        const current = jsonData.data.shift();
        // se guardan los 6 dias restantes
        const forecast = jsonData.data;
        // se arma el location con un obj con los datos que quiero mostrar
        const location = {
          city_name: jsonData.city_name,
          country_code: jsonData.country_code,
          state_code: jsonData.state_code,
        };
        // actualizo el estado y guardando todo lo generado en cada parte del estado del componente
        this.setState({
          current: current,
          forecast: forecast,
          location: location,
          isLoaded: true,
        });
        // otra manera que se puede poner
        // this.setState({current, forecast, location })
      });
  }

  render() {
    const { location, current, forecast, isLoaded } = this.state;
    return isLoaded ? (
      <div className="App">
        <div className="container">
          <Top current={current} location={location} />
          <Bottom forecast={forecast} />
        </div>
      </div>
    ) : (
      <div className="App">Cargando...</div>
    );
  }
}

export default App;
