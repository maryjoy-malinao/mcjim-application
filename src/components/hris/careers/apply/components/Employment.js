import NextBackButtons from './NextBackButtons'
import Button from '@mui/material/Button';
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

import {
  FormGroup,
  Form,
  FormInput,
  FormTextArea
} from 'semantic-ui-react'

const formatDate=(date)=>{
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

export default function Employment({handleBack,handleNext, activeStep, handleOnChange, handleAddForm, handleDeleteForm , employmentInfo}) {
  const blankField =  {
    id: new Date().getTime(),
    applicant_company: '',
    applicant_position: '',
    applicant_salary: '',
    applicant_from: '',
    applicant_to: '',
    applicant_reason: ''
  };
  
  return (
      <div className='Employment'>

          <div className='Employment-buttons'>
            <Button onClick={()=> handleDeleteForm()} size='large' variant="contained"><RemoveIcon/></Button>
            <Button onClick={()=> handleAddForm(blankField)} size='large' variant="contained"><AddIcon/></Button>
          </div>

          <Form size='small' className='Employment-form'>
                {employmentInfo.map((field, index) => (
                    <div key={field.id} className='Employment-container'>
                        <FormGroup widths='equal' >
                            <FormInput
                              label='Company Name'
                              name='applicant_company'
                              value={field.applicant_company}
                              onChange={(e, {name, value}) => handleOnChange(index, {name, value})}
                            />
                            <FormInput
                              label='Position'
                              name='applicant_position'
                              value={field.applicant_position}
                              onChange={(e, {name, value}) => handleOnChange(index, {name, value})}
                            />
                            <FormInput
                              label='Salary'
                              name='applicant_salary'
                              value={field.applicant_salary}
                              onChange={(e, {name, value}) => handleOnChange(index, {name, value})}
                            />
                            <SemanticDatepicker 
                              label="From" 
                              name="applicant_from" 
                              onChange={(e, {name, value}) => {
                                // value = formatDate(value);
                                return handleOnChange(index, {name,value})
                              }}
                              />
                            <SemanticDatepicker 
                              label="To" 
                              name="applicant_to"
                              onChange={(e, {name, value}) => {
                                // value = formatDate(value);
                                return handleOnChange(index, {name,value})
                              }}
                              />
                        </FormGroup>
                        <FormTextArea 
                          label='Reason for leaving' 
                          name='applicant_reason'
                          value={field.applicant_reason}
                          onChange={(e, {name, value}) => handleOnChange(index, {name, value})}
                          style={{ minHeight: 100, maxHeight: 400 }} 
                        />                  
                    </div>               
                ))}         
                <NextBackButtons handleBack={handleBack} handleNext={handleNext} activeStep={activeStep} />     
          </Form>
      </div>
  )
}
