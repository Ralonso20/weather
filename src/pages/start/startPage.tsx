import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import startPage from "./startPage.module.css";
import { Box } from "@mui/system";
import styles from "../../styles/Home.module.css";
import styleButton from "../../styles/button.module.css";
import { Divider, TextField } from "@mui/material";
import { locationService } from "../../service/location-service";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import StartBackground from "../../components/startBackground/startBackground";
export default function Start() {
  const router = useRouter();
  const [field, setField] = useState("");

  const getLocationAndRedirect = async () => {
    const promiseLocation = locationService.getLocation();
    promiseLocation
      .then((response) => {
        locationService.setLocation(response);
        router.push("/home");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const setInputLocationAndRedirect = (event: any) => {
    locationService.setLocation(field);
    router.push("/home");
  };

  const handleChange = (event) => {
    let { value } = event.target;
    setField(value);
  };

  useEffect(() => {
    
  }, [field]);
  return (
    <>
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
            />
            <Button
              variant="contained"
              className={styleButton.muiButton}
              onClick={setInputLocationAndRedirect}
            >
              To forecast
            </Button>
          </CardContent>
          <CardActions className={startPage.container}>
            <Divider variant="middle" className={`${startPage.divider}`}>
              or
            </Divider>
            <Button
              className={`${styleButton.muiButton} ${styleButton.locationButton}`}
              variant="contained"
              onClick={getLocationAndRedirect}
            >
              Get Device Location
            </Button>
          </CardActions>
        </Card>
      </Box>
      </StartBackground>
    </>
  );
}
