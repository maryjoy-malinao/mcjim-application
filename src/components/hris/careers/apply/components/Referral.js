import React from 'react'
import NextBackButtons from './NextBackButtons'
import Button from '@mui/material/Button';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import {
  FormGroup,
  Form,
  FormInput,
} from 'semantic-ui-react'

export default function Referral({handleBack,handleNext, activeStep, handleOnChange, handleAddForm, handleDeleteForm , referralInfo}) {

  const blankField = {
    id: new Date().getTime(),
    applicant_refName: '',
    applicant_refPosition: '',
    applicant_refContact: '',
  };

  return (
    <div className='Referral'>
      <div className='Referral-buttons'>
        <Button onClick={()=> handleDeleteForm()} size='large' variant="contained"><RemoveIcon/></Button>
        <Button onClick={()=> handleAddForm(blankField)} size='large' variant="contained"><AddIcon/></Button>
      </div>
      
      <Form size='small' className='Referral-form'>
          {referralInfo.map((field, index) => (
            <div key={field.id} className='Referral-container'>
              <FormGroup widths='equal' >
                  <FormInput
                    label={`Name #${index+1}`}
                    name='applicant_refName'
                    value={field.applicant_refName}
                    onChange={(e, {name, value}) => handleOnChange(index, {name, value})}
                  />
                  <FormInput
                    label='Work/Position'
                    name='applicant_refPosition'
                    value={field.applicant_refPosition}
                    onChange={(e, {name, value}) => handleOnChange(index, {name, value})}
                  />
                  <FormInput
                    label='Contact #'
                    name='applicant_refContact'
                    value={field.applicant_refContact}
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
