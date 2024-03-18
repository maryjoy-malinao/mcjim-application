import React from 'react'
import { gender } from '@/utils/selection'
import NextBackButtons from './NextBackButtons'
import {
    FormGroup,
    Form,
    FormSelect,
    FormInput,
    FormTextArea
} from 'semantic-ui-react'

export default function Personal({handleBack,handleNext, activeStep, handleOnChange, initVal}) {
  return (
    <div className='Personal'>
        <Form size='small' className='Personal-form'>
            <FormInput
                label='Applied Position'
                name="applicant_applied"
            />
            <FormGroup widths='equal'>
                <FormInput
                    label='Last Name'
                    name="applicant_last"
                    value={initVal.applicant_last}
                    onChange={(e, {name,  value})=> handleOnChange(e, {name, value})}
                />
                <FormInput
                    label='First Name'
                    name="applicant_first"
                    value={initVal.applicant_first}
                    onChange={(e, {name,  value})=> handleOnChange(e, {name, value})}
                />
                <FormInput
                    label='Middle Name'
                    name="applicant_middle"
                    value={initVal.applicant_middle}
                    onChange={(e, {name,  value})=> handleOnChange(e, {name, value})}
                />
                <FormSelect 
                    label='Gender'
                    options={gender} 
                    name='applicant_gender'
                    value={initVal.applicant_gender}
                    onChange={(e, {name,  value})=> handleOnChange(e, {name, value})}
                />
            </FormGroup>

            <FormGroup widths='equal' className='Personal-textarea'>
                <FormTextArea 
                    label='City Address' 
                    name='applicant_city'
                    value={initVal.applicant_city}
                    onChange={(e, {name,  value})=> handleOnChange(e, {name, value})}
                    style={{ minHeight: 100, maxHeight: 400 }} />
                <FormTextArea 
                    label='Provincial Address' 
                    name='applicant_provincial'
                    value={initVal.applicant_provincial}
                    onChange={(e, {name,  value})=> handleOnChange(e, {name, value})}
                    style={{ minHeight: 100, maxHeight: 400 }} />
            </FormGroup>

            <FormGroup widths='equal'>
                <FormInput
                    label='Mobile Number'
                    name="applicant_mobile"
                    value={initVal.applicant_mobile}
                    onChange={(e, {name,  value})=> handleOnChange(e, {name, value})}
                />
                <FormInput
                    label='Email'
                    name="applicant_email"
                    value={initVal.applicant_email}
                    onChange={(e, {name,  value})=> handleOnChange(e, {name, value})}
                />
                <FormInput
                    label='Expected Salary'
                    name="applicant_salary"
                    value={initVal.applicant_salary}
                    onChange={(e, {name,  value})=> handleOnChange(e, {name, value})}
                />
            </FormGroup>      
            <NextBackButtons handleBack={handleBack} handleNext={handleNext} activeStep={activeStep}/>     
        </Form>
    </div>
  )
}
