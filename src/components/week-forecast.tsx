import Button from "@mui/material/Button";
import mainStyles from "../styles/mainCard.module.css";
import { MouseEvent } from "react";
export const WeekForecast = (props: any) => {
  const { isShown, setIsShown } = props;
  const handleClick = (event: MouseEvent<HTMLButtonElement, Event>) => {
    setIsShown(!isShown);
  };
  return (
    <>
        <div className={`${mainStyles.card} ${mainStyles.secondCard} ${mainStyles.swingBottom}`}>
          <Button className="closeButton"onClick={(e) => handleClick(e)}>X</Button>
        </div>
    </>
  );
};
