import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Productcontent from "./Productcontent";
import { ArrowBackIos, ArrowBackIosNew, ArrowBackRounded, ArrowBackSharp, BackHand } from "@mui/icons-material";

function Empcontent() {
  const [productcontent, setproductcontent] = useState(false);
  const id = 1234;
  const from = "ind"
  const to = "us"

  return (
    <Box width="100%">
      {productcontent ? (
        <Stack direction="row-reverse" height="100%" zIndex="1" width="100%" sx={{background:"transparent" }}>
        <Box >
          <Button variant="contained" sx={{width:"1vw", right:"0"}} onClick={() => setproductcontent(false)} endIcon={<ArrowBackIos/>}></Button>
        </Box>
        <Productcontent id={id} from={from} to={to}/>
        </Stack>
      ) : (
        <Box
        p={3}
        height="70px"
        width="75vw"
        sx={{
          borderRadius: "8px",
          background: "#e3e5e3",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography sx={{ fontSize: "23px" }}>ID:{id}</Typography>
        <Button
          variant="contained"
          sx={{ width: "50px" }}
          onClick={() => setproductcontent(true)}
        >
          View
        </Button>
      </Box>
      )}
    </Box>
  );
}

export default Empcontent;
