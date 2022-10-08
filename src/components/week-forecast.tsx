import Button from "@mui/material/Button";
import mainStyles from "../styles/mainCard.module.css";
import styleButton from "../styles/button.module.css";
import { MouseEvent } from "react";
import Typography from "@mui/material/Typography/Typography";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import styleForecast from "../styles/forecastWeather.module.css";
import iconStyle from "../styles/iconStyles.module.css"
export const WeekForecast = (props: any) => {
  const { isShown, setIsShown } = props;
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
        <div className={styleForecast.container}>
          <div className={styleForecast.infoContainer}>
            <Typography variant="h5" sx={{color: "mediumslateblue"}}>Sunday</Typography>
            <Typography variant="h5">Clear</Typography>
            <Typography variant="h5">Min 1° | Max 12°</Typography>
          </div>
          <div className={styleForecast.iconContainer}>
            <WbSunnyIcon sx={{fontSize: "3em"}}></WbSunnyIcon>
            <Typography variant="h5">Feb 23</Typography>
          </div>
        </div>
      </div>
    </>
  );
};
