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
import * as locationHelper from "../../helpers/userLocation";
import { locationService } from "../../service/location-service";
export default function Start() {

  const getLocation = async () => {
    const location = await locationHelper.validateUserLocation();
    console.log(location);
  }
  
  return (
    <>
      <Box className={`${styles.main}`}>
        <Card className={`${startPage.card}`}>
          <Box component="header" className={`${startPage.header}`}>
            <Typography variant="h4">Clyma</Typography>
          </Box>
          <Divider variant="middle" sx={{width:'100%', margin:'0'}}/>
          <CardContent className={startPage.container}>
            <TextField
              id="outlined-basic"
              label="Enter city name"
              variant="outlined"
              className={startPage.input}
            />
          </CardContent>
          <CardActions className={startPage.container}>
            <Divider variant="middle" className={`${startPage.divider}`}>
              or
            </Divider>
            <Button
              className={`${styleButton.muiButton} ${styleButton.locationButton}`}
              variant="contained"
              onClick={locationService.getLocation}
            >
              Get Device Location
            </Button>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}
