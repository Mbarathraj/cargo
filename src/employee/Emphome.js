import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Empcontent from './Empcontent';
import Pending from './Pending';


function EmployeePage() {
 const [productdetails,setproductdetails] = useState(true);
 console.log(productdetails);
  return (
    <Box sx={{ width:"100vw" }}>
      <Box p={2} width="100vw" sx={{height:"8vh", borderBottom:"1px solid black", display:"flex", alignItems:"center", justifyContent:"space-between"}}>
          <Stack direction={"row"} width="100%" alignItems="center" justifyContent="space-between" > 
            <Box>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1, color:"orangered", fontSize:{xs:20,xl:40} }}>
            Cargo
          </Typography>
          </Box>
          <Box>
          <Button variant='outlined' sx={{color:"black", width:{xs:66,xl:100}, height:{xs:25,xl:40}}}>
            <Typography sx={{fontSize:{xs:7,xl:13}}}>
            Sign Out
            </Typography>
            </Button>
          </Box>
          </Stack>
      </Box>
      <Box sx={{ display: 'flex', height:"92vh"}} >
        <Stack direction="column" spacing={2} sx={{ width: {xl:250,xs:200}, p: 2, borderRight:"1px solid black"}}>
          <Box sx={{ bgcolor: 'background.paper', p: 2, borderBottom:"1px solid black", }}>
            <Button variant="text" sx={{color:"black"}} onClick={() => setproductdetails(true)}>
              <Typography sx={{fontSize:{xs:10,xl:15}}}>
              Product Details
              </Typography>
            </Button>
          </Box>
          <Box sx={{ bgcolor: 'background.paper', p: 2, borderBottom:"1px solid black"  }}>
          <Button variant="text" sx={{color:"black"}} onClick={() => setproductdetails(false)}>
          <Typography sx={{fontSize:{xs:10,xl:15}}} >
              Pending
              </Typography>
            </Button>
          </Box>
        </Stack>
        <Box sx={{ flexGrow: 1, p: 2 }}>
          {productdetails?
            <Box height="95%" width="98%" display="flex" justifyContent="center">
           <Empcontent/>
           </Box>
           :<Pending/>}
        </Box>
      </Box>
    </Box>
  );
}

export default EmployeePage;

