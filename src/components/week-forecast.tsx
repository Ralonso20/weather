import Button from "@mui/material/Button";
import mainStyles from "../styles/mainCard.module.css";
import styles from "../styles/Home.module.css";
import { MouseEvent } from "react";
export const WeekForecast = (props: any) => {
  const { isShown, setIsShown } = props;
  const handleClick = (event: MouseEvent<HTMLButtonElement, Event>) => {
    setIsShown(!isShown);
  };
  return (
    <>
      <main className={styles.main}>
        <div className={mainStyles.card}>
          <Button onClick={(e) => handleClick(e)}>volver</Button>
        </div>
      </main>
    </>
  );
};
