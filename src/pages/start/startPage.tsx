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
export default function Start() {
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
            >
              Get Device Location
            </Button>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}
