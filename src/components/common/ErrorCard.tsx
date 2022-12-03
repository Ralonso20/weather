import { LoadingButton } from "@mui/lab";
import { Box, Card, Typography } from "@mui/material";
import errorCard from "../../styles/errorCard.module.css";
import styles from "../../styles/Home.module.css";
import styleButton from "../../styles/button.module.css";
import { useRouter } from "next/router";
export default function ErrorCard(props) {
    const router = useRouter();
    const handleClick = () => {
        props.setLoading(true);
        router.push("/").then(() => {
            props.setLoading(false);
        });
    }

  return (
    <div>
      <Box className={styles.main}>
        <Card className={errorCard.ErrorCard}>
          <Typography variant="h4">Error: Lack of data</Typography>
          <LoadingButton className={!props.loading ? `${styleButton.muiButton}` : styleButton.disableBtn} onClick={handleClick} loading={props.loading}>
            Back to start
          </LoadingButton>
        </Card>
      </Box>
    </div>
  );
}
