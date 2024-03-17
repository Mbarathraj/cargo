import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];
const stepno = 1

export default function HorizontalStepperWithError() {

  return (
    <Box sx={{ width: '20vw',height:"60vh"}}>
      <Stepper activeStep={stepno} orientation='vertical' sx={{ '& .MuiStepConnector-line': {
           minHeight: '20vh',
         }}}>
        {steps.map((label, index) => {
          const labelProps = {};
          return (
            <Step key={label}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </Box>
  );
}