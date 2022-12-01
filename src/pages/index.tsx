import Button from "@mui/material/Button";
import type { NextPage } from "next";
import Head from "next/head";
import { WeekForecast } from "../components/week-forecast";
import styles from "../styles/Home.module.css";
import mainStyles from "../styles/mainCard.module.css";
import { useState, MouseEvent, useEffect } from "react";
import { SearchInput } from "../components/common/search";
import { Typography } from "@mui/material";
import { weatherService } from "../service/weather-service";
import { WeatherClass } from "../models/weather";
import styleButton from "../styles/button.module.css";

const Home: NextPage = () => {
  const [isShown, setIsShown] = useState(false);
  const [data, setData] = useState<Array<WeatherClass>>();
  const handleClick = (event: MouseEvent<HTMLButtonElement, Event>) => {
    setIsShown((current: boolean) => !current);
  };

  useEffect(() => {
    new weatherService()
      .getAll("buenos aires")
      .then((response) => {
        let dataList: Array<any> = [];
        dataList.push(response.data);
        dataList = dataList.map((d) => WeatherClass.createWeather(d));
        setData(dataList);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log("Data traida exitosamente");
      });
  }, []);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={mainStyles.videoContainer}>
        <video autoPlay loop muted>
          <source src="https://assets.codepen.io/3364143/7btrrd.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      {data?.map((item) => (
        <main className={styles.main}>
          {!isShown && (
            <div
              className={`${mainStyles.card} ${mainStyles.mainCard} ${mainStyles.swingBottom}`}
            >
              <h1>clyma</h1>
              <h3>{item.getLocation()}</h3>

              <SearchInput></SearchInput>
              <div className={mainStyles.weatherStateContainer}>
                <Typography
                  variant="h1"
                  className={mainStyles.temperatureIndicator}
                >
                  {item.getTemperature()}°
                </Typography>
                <Typography variant="h4">{item.getWeatherState()}</Typography>
                <Typography variant="h4">Min 11° | Max:16°</Typography>
                <Typography variant="h4">{item.getPubDate()}</Typography>
              </div>
              <div className={mainStyles.tableContainer}>
                <table className={mainStyles.table}>
                  <colgroup>
                    <col className={mainStyles.colRight} />
                    <col className={mainStyles.colLeft} />
                  </colgroup>
                  <div className={mainStyles.rowContainer}>
                    <tr className={mainStyles.tableText}>
                      <td>Humidity</td>
                      <td>{item.getHumidity()}%</td>
                    </tr>
                    <tr className={mainStyles.tableText}>
                      <td>Pressure</td>
                      <td>{item.getPressure()} mB</td>
                    </tr>
                    <tr className={mainStyles.tableText}>
                      <td>Wind/sp</td>
                      <td>{item.getWindSpeed()} km/h</td>
                    </tr>
                  </div>
                </table>
              </div>
              <Button
                onClick={(e) => handleClick(e)}
                variant="contained"
                size="large"
                className={styleButton.muiButton}
              >
                Week forecast
              </Button>
            </div>
          )}
          {isShown && (
            <WeekForecast
              isShown={isShown}
              setIsShown={setIsShown}
              forecastData={item.getDataForecast()}
            ></WeekForecast>
          )}
        </main>
      ))}
    </div>
  );
};

export default Home;
