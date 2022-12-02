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
export default function Start() {
  const router = useRouter();
  const [field, setField] = useState("");

  const getLocationAndRedirect = async (location: string | undefined) => {
    
    const navigate = router.push("/home");
    toast.promise(navigate, {
      loading: "Loading",
      success: "Got the data",
      error: "Error when fetching",
    });

    locationService.setLocation(location);
    navigate;
  };

  const locationPermissionHandler = async () => {
    const permission = await locationService.getLocation();
    permission ? getLocationAndRedirect(permission) : toast.error("Permission denied");
  };

  const setInputLocationAndRedirect = (event: any) => {
    locationService.setLocation(field);
    router.push("/home");
  };

  const handleChange = (event) => {
    let { value } = event.target;
    setField(value);
  };

  useEffect(() => {}, [field]);
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
                onClick={locationPermissionHandler}
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
