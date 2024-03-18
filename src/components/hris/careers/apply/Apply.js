import  React, { Fragment, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PersonIcon from '@mui/icons-material/Person';
import { applySteps } from '@/utils/steps';
import Personal from './components/Personal';
import Education from './components/Education';
import Employment from './components/Employment';
import Training from './components/Training';
import References from './components/References';
import Referral from './components/Referral';
import MessageModal from '../components/Modals.js/MessageModal';
export default function Apply({jobid}) {
    const [activeStep, setActiveStep] = useState(0);
    const [personalInfo, setPersonal] = useState({}); //This is an obj. this is the values that you retrieve from Personal inputs
    const [educationInfo, setEducation] = useState({});
    const [employmentInfo, setEmployment] = useState([]);
    const [trainingInfo, setTraining] = useState([]);
    const [referencesInfo, setReferences] = useState({});
    const [referralInfo, setReferral] = useState([]);


    const [isEmpty, setIsEmpty] = useState(true);
    const [isModalShow, setIsModalShow] = useState(false);


    useEffect(()=>{
        if(!isEmpty) setActiveStep((prevActiveStep) => prevActiveStep + 1);  
        setIsEmpty(true);
        setIsModalShow(false)
      },[isEmpty])


    // Function to handle onChange events for each steps and retrieve data to be stored in a single object
    const handleOnChange = (i, {name, value})=>{
        switch(activeStep){
            case 0:
                setPersonal({...personalInfo, [name]: value, job_id: jobid});
            break;
            case 1:
                setEducation({...educationInfo, [name]: value});
            break;
            case 2:
                const updateEmployment = [...employmentInfo];
                updateEmployment[i][name] = value;
                setEmployment(updateEmployment);
            break;
            case 3:
                const updateTraining = [...trainingInfo];
                updateTraining[i][name] = value;
                setTraining(updateTraining);
            break;
            case 4:
                setReferences({...referencesInfo, [name]: value});
            break;
            case 5:
                const updateReferral = [...referralInfo];
                updateReferral[i][name] = value;
                setReferral(updateReferral);
            break;
        }
        
    }

    const handleAddForm = (obj)=>{    
        switch(activeStep){
            case 2: 
                setEmployment((prev)=> [...prev, obj]);
            break;
            case 3:
                setTraining((prev)=> [...prev, obj]);
            break;
            case 5:
                setReferral((prev)=> [...prev, obj]);
            break;
        }
    }


    const handleDeleteForm = () => {
        switch(activeStep){
            case 2: 
                if(employmentInfo.length > 0){
                    const deleteEmployment = [...employmentInfo];
                    deleteEmployment.pop();
                    setEmployment(deleteEmployment);
                }
            break;
            case 3:
                if(trainingInfo.length > 0){
                    const deleteTraining = [...trainingInfo];
                    deleteTraining.pop();
                    setTraining(deleteTraining);
                }
            break;
            case 5:
                if(referralInfo.length > 0){
                    const deleteReferral = [...referralInfo];
                    deleteReferral.pop();
                    setTraining(deleteReferral);
                }
            break;
        }
      };
    
    const handleNext = () => {
        switch(activeStep){
            case 0:
                setIsEmpty(Object.values(personalInfo).length !== 10 || Object.values(personalInfo).some(val => val.trim().length === 0));
                setIsModalShow(true);
            break;
            case 1:
                setIsEmpty(Object.values(educationInfo).length !== 9 || Object.values(educationInfo).some(val => val.trim().length === 0));  
                setIsModalShow(true);          
            break;
            case 2:
                setActiveStep((prevActiveStep) => prevActiveStep + 1);  
            break;
            case 3:
                setActiveStep((prevActiveStep) => prevActiveStep + 1);  
            break;
            case 4:
                setIsEmpty(Object.values(referencesInfo).length !== 9 || Object.values(referencesInfo).some(val => val.trim().length === 0));  
                setIsModalShow(true);  
            break;
            case 5:
                setActiveStep((prevActiveStep) => prevActiveStep + 1);  
            break;       
        } 
        
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
      };

    const handleIsShowModal=()=>{
        setIsModalShow(!isModalShow);
    }

  


  let currentStep = <Personal handleBack={handleBack} handleNext={handleNext} activeStep={activeStep} handleOnChange={handleOnChange} initVal={personalInfo}/>

    switch(activeStep){
      case 1:
          currentStep = <Education handleBack={handleBack} handleNext={handleNext} activeStep={activeStep} handleOnChange={handleOnChange} initVal={educationInfo}/>
      break;
      case 2: 
          currentStep = <Employment handleBack={handleBack} handleNext={handleNext} activeStep={activeStep} handleOnChange={handleOnChange} handleAddForm={handleAddForm} handleDeleteForm={handleDeleteForm} employmentInfo={employmentInfo}/>
      break;
      case 3:
          currentStep = <Training handleBack={handleBack} handleNext={handleNext} activeStep={activeStep}  handleOnChange={handleOnChange} handleAddForm={handleAddForm} handleDeleteForm={handleDeleteForm} trainingInfo={trainingInfo}/>
      break;
      case 4:
          currentStep = <References handleBack={handleBack} handleNext={handleNext} activeStep={activeStep} handleOnChange={handleOnChange} initVal={referencesInfo}/>
      break;
      case 5:
          currentStep = <Referral handleBack={handleBack} handleNext={handleNext} activeStep={activeStep} handleOnChange={handleOnChange} handleAddForm={handleAddForm} handleDeleteForm={handleDeleteForm} referralInfo={referralInfo}/>
      break;
    }


  return (
    <div className='Apply'>
        <h1>Apply</h1>
       {isEmpty && <MessageModal isOpen={isModalShow} handleModal={handleIsShowModal}/>}
        <Box sx={{ width: '100%' }}>
 
            <Stepper activeStep={activeStep} className='Apply-stepper'>
            {applySteps.map((step) => {
                return (
                <Step key={step.label}>
                    <StepLabel>{step.label}</StepLabel>
                </Step>
                );
            })}
            </Stepper>

            {/* Check the current step */}
            {activeStep === applySteps.length ? 
            (
            // Show result once all questions from steps have been answered
            <Fragment>
                <Typography sx={{ mt: 2, mb: 1 }}>
                All steps completed - you&apos;re finished
                </Typography>
            </Fragment>
            ) : (
            // Render different UI components based on the current step
            <Fragment>
                {currentStep}        
            </Fragment>
            )}
        </Box>
    </div>
  );
}