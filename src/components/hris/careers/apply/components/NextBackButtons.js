import React from 'react'
import {Box, Button} from '@mui/material';
import { applySteps } from '@/utils/steps'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DoneIcon from '@mui/icons-material/Done';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
export default function NextBackButtons({handleBack, handleNext , activeStep}) {
    let values={
        icon: <ArrowForwardIcon />,
        text: 'Next'
    }

    if(activeStep === applySteps.length -1){
        values={
            icon: <DoneIcon />,
            text: 'Submit'    
        }
    }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
        <Button 
            variant="contained"
            disabled={activeStep === 0}
            onClick={()=> handleBack()}
            sx={{ mr: 1 }}
            startIcon={<ArrowBackIcon/>}
        >Previous
        </Button>
        <Box sx={{ flex: '1 1 auto' }} />
        <Button variant="contained" onClick={()=> handleNext()} endIcon={values.icon}>
            {values.text}
        </Button>   
    </Box>
  )
}
