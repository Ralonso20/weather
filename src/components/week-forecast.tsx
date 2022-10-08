import Button from "@mui/material/Button";
import mainStyles from "../styles/mainCard.module.css";
import styleButton from "../styles/button.module.css";
import { MouseEvent } from "react";
import Typography from "@mui/material/Typography/Typography";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import styleForecast from "../styles/forecastWeather.module.css";
import iconStyle from "../styles/iconStyles.module.css";
import { DataForecast } from "../models/forecast";
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
        <Button
          className={`${styleButton.closeButton} ${styleButton.muiButton}`}
          onClick={(e) => handleClick(e)}
        >
          X
        </Button>
        {forecastData.map((item: DataForecast) => (
          <div className={styleForecast.container}>
            <div className={styleForecast.infoContainer}>
              <Typography variant="h5" sx={{ color: "mediumslateblue" }}>
                {item.day}
              </Typography>
              <Typography variant="h5">{item.text}</Typography>
              <Typography variant="h5">Min {item.getMinTemperature()}° | Max {item.getMaxTemperature()}°</Typography>
            </div>
            <div className={styleForecast.iconContainer}>
              <WbSunnyIcon sx={{ fontSize: "3em" }}></WbSunnyIcon>
              <Typography variant="h5">{item.getDate()}</Typography>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
