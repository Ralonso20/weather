import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import startPage from "./startPage.module.css";
import { Box } from "@mui/system";
import styles from "../styles/Home.module.css";
import styleButton from "../styles/button.module.css";
import { Divider, TextField } from "@mui/material";
import { locationService } from "../service/location-service";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import StartBackground from "../components/startBackground/startBackground";
import toast, { Toaster } from "react-hot-toast";
import { weatherService } from "../service/weather-service";
import LoadingButton from "@mui/lab/LoadingButton";
export default function Start() {
  const router = useRouter();
  const [field, setField] = useState("");
  const [loading, setLoading] = useState(false);
  const [inputError, setInputError] = useState(false);
  const getLocationAndRedirect = async (location: string | undefined) => {
    setLoading(true);
    locationService.setLocation(location);
    getForecastData().then((data) => {redirect();})
    // toast.promise(promise, {
    //   loading: "Loading",
    //   success: "Got the data",
    //   error: "Error when fetching",
    // });
  };

  const locationPermissionHandler = async () => {
    const permission = await locationService.getLocation();
    permission ? getLocationAndRedirect(permission) : false;
  };

  const setInputLocationAndRedirect = async () => {
    setLoading(true);
    locationService.setLocation(field);
    getForecastData().then((data) => {redirect(); setInputError(false)}).catch((error) => {setInputError(true); handleChangeLoading();})
  };

  const handleChange = (event) => {
    let { value } = event.target;
    setField(value);
  };

  useEffect(() => {}, [field]);

  const getForecastData = async() => {
    return await weatherService.gel(locationService.getStorageLocation())
  };

  const redirect = () => {
    router.push("/home").then(() => {
      handleChangeLoading();
    });
  };

  const handleChangeLoading = () => {
    setLoading(false);
  };
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <StartBackground>
        <Box className={`${styles.main}`}>
          <Card className={`${startPage.card}`}>
            <Box component="header" className={`${startPage.header}`}>
              <Typography variant="h4">Clyma</Typography>
            </Box>
            <Divider variant="middle" sx={{ width: "100%", margin: "0" }} />
            <CardContent className={startPage.container}>
              <TextField
                id="outlined-basic"
                label="Location"
                variant="outlined"
                onChange={handleChange}
                name="location"
                value={field}
                fullWidth
                error={inputError}
              />
              <LoadingButton
                variant="contained"
                className={!loading ? `${styleButton.muiButton} ${styleButton.locationButton}` : styleButton.disableBtn}
                onClick={setInputLocationAndRedirect}
                loading={loading}
              >
                To forecast
              </LoadingButton>
            </CardContent>
            <CardActions className={startPage.container}>
              <Divider variant="middle" className={`${startPage.divider}`}>
                or
              </Divider>
              <LoadingButton
                className={!loading ? `${styleButton.muiButton} ${styleButton.locationButton}` : styleButton.disableBtn}
                variant="contained"
                onClick={locationPermissionHandler}
                loading={loading}
              >
                Get Device Location
              </LoadingButton>
            </CardActions>
          </Card>
        </Box>
      </StartBackground>
    </>
  );
}
