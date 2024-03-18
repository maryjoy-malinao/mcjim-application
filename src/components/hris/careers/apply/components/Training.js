import React from 'react'
import NextBackButtons from './NextBackButtons'
import Button from '@mui/material/Button';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import {
  FormGroup,
  Form,
  FormInput
} from 'semantic-ui-react'

export default function Training({handleBack,handleNext, activeStep, handleOnChange, handleAddForm, handleDeleteForm ,trainingInfo}) {
  const blankField = {
    id: new Date().getTime(),
    applicant_trainingTitle: '',
    applicant_trainingLocation: '',
    applicant_trainingDate: '',
  };

  return (
    <div className='Training'>
      <div className='Training-buttons'>
        <Button onClick={()=> handleDeleteForm()} size='large' variant="contained"><RemoveIcon/></Button>
        <Button onClick={()=> handleAddForm(blankField)} size='large' variant="contained"><AddIcon/></Button>
      </div>
      
      <Form size='small' className='Training-form'>
          {trainingInfo.map((field, index) => (
            <div key={field.id} className='Training-container'>
              <FormGroup widths='equal' >
                  <FormInput
                    label='Course Title'
                    name='applicant_trainingTitle'
                    value={field.applicant_trainingTitle}
                    onChange={(e, {name, value}) => handleOnChange(index, {name, value})}
                  />
                  <FormInput
                    label='Location'
                    name='applicant_trainingLocation'
                    value={field.applicant_trainingLocation}
                    onChange={(e, {name, value}) => handleOnChange(index, {name, value})}
                  />
      
                  <SemanticDatepicker 
                    label="Date" 
                    name="applicant_trainingDate"
                    onChange={(e, {name, value}) => handleOnChange(index, {name, value})}    
                  />

              </FormGroup>
            </div>
          ))}         

          <NextBackButtons handleBack={handleBack} handleNext={handleNext} activeStep={activeStep} />     
      </Form>
    </div>
  )
}
