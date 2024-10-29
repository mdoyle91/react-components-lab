import "./WeatherForecast.css";

const WeatherForecastItem = (props) => {
  return (
    <div className="weather">
      <h2>{props.weatherForecast.day}</h2>
      <img src={props.weatherForecast.img} alt={props.weatherForecast.imgAlt} />
      <p>
        <span>conditions: {props.weatherForecast.conditions} </span>
      </p>
      <p>
        <span>time: {props.weatherForecast.time} </span>
      </p>
    </div>
  );
};

export default WeatherForecastItem;
