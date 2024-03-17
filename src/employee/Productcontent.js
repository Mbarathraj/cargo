import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ProgressBar from "./ProgressBar";

const Productcontent = (props) => {
  const fromadd = props.from;
  const toadd = props.to;
  const prodid = props.id;
  return (
    <Stack p={1} spacing={4} height="100%" direction={"column"} width="100%">
      <Box>
        <Typography variant="h3">Product details</Typography>
      </Box>
      <Stack direction={"row"} display={"flex"} justifyContent={"space-between"}>
      <Stack spacing={4} p={3}>
        <Box>
          <Typography variant="h6">Order-ID : {prodid}</Typography>
        </Box>
        <Box>
          <Typography variant="h6">Name : {prodid}</Typography>
        </Box>
        <Box>
          <Typography variant="h6">Mobile Number : {prodid}</Typography>
        </Box>
        <Box>
          <Typography variant="h6">From Address : {prodid}</Typography>
        </Box>
        <Box>
          <Typography variant="h6">To Address : {toadd}</Typography>
        </Box>
        <Box>
          <Typography variant="h6">Product Type : {toadd}</Typography>
        </Box>
        <Box>
          <Typography variant="h6">Price : ₹{prodid}</Typography>
        </Box>
      </Stack>
      <Stack>
      <ProgressBar />
      </Stack>
      </Stack>
    </Stack>
  );
};

export default Productcontent;
