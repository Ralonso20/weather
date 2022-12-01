import Button from "@mui/material/Button";
import mainStyles from "../styles/mainCard.module.css";
import styleButton from "../styles/button.module.css";
import { MouseEvent } from "react";
import Typography from "@mui/material/Typography/Typography";
import styleForecast from "../styles/forecastWeather.module.css";
import  { WeatherIcon } from "./weatherIcon";
import { DataForecast } from "../models/forecast";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { IconButton } from "@mui/material";
export const WeekForecast = (props: any) => {
  const { isShown, setIsShown, forecastData } = props;
  const handleClick = (event: MouseEvent<HTMLButtonElement, Event>) => {
    setIsShown(!isShown);
  };
  return (
    <>
      <div
        className={`${mainStyles.card} ${mainStyles.secondCard} ${mainStyles.swingBottom}`}
      >
        <IconButton
          className={`${styleButton.closeButton}`}
          onClick={(e) => handleClick(e)}
        >
          <ArrowBackIcon />
        </IconButton>
        {forecastData.map((item: DataForecast, index) => (
          <div key={index} className={styleForecast.container}>
            <div className={styleForecast.infoContainer}>
              <Typography variant="h5" sx={{ color: "#5352ed" }}>
                {item.day}
              </Typography>
              <Typography variant="h5">{item.text}</Typography>
              <Typography variant="h5">Min {item.getMinTemperature()}° | Max {item.getMaxTemperature()}°</Typography>
            </div>
            <div className={styleForecast.iconContainer}>
              <WeatherIcon weatherstate={item.getText()} sx={{ fontSize: "3em" }}></WeatherIcon>
              <Typography variant="h5">{item.getDate()}</Typography>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
