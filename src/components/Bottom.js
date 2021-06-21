import React from "react";
import Card from "./Card";

const Bottom = (props) => {
  const { forecast } = props;

  return (
    <div className="bottom">
      {/*Usamos map() donde va el código que vamos a repetir*/}
      {forecast.map((dia) => {
        // en dia van a estar cada obj del array
        return <Card dia={dia} key={dia.valid_date} />;
      })}
    </div>
  );
};

export default Bottom;
