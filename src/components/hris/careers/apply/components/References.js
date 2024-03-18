import React from 'react'
import NextBackButtons from './NextBackButtons'
import {
    FormGroup,
    Form,
    FormInput,
  } from 'semantic-ui-react'

export default function References({handleBack,handleNext, activeStep, handleOnChange, initVal}) {
  return (
    <div className='References'>
        <Form size='small' className='References-form'>
            <FormGroup widths='equal'>              
                <FormInput
                    label='Name #1'
                    name="applicant_name1"
                    value={initVal.applicant_name1}
                    onChange={(e, {name,  value})=> handleOnChange(e, {name, value})}
                />
                <FormInput
                    label='Relationship'
                    name="applicant_relationship1"
                    value={initVal.applicant_relationship1}
                    onChange={(e, {name,  value})=> handleOnChange(e, {name, value})}
                />
                <FormInput
                    label='Contact #'
                    name="applicant_contact1"
                    value={initVal.applicant_contact1}
                    onChange={(e, {name,  value})=> handleOnChange(e, {name, value})}
                />
            </FormGroup>  

            <FormGroup widths='equal'>              
                <FormInput
                    label='Name #2'
                    name="applicant_name2"
                    value={initVal.applicant_name2}
                    onChange={(e, {name,  value})=> handleOnChange(e, {name, value})}
                />
                <FormInput
                    label='Relationship'
                    name="applicant_relationship2"
                    value={initVal.applicant_relationship2}
                    onChange={(e, {name,  value})=> handleOnChange(e, {name, value})}
                />
                <FormInput
                    label='Contact #'
                    name="applicant_contact2"
                    value={initVal.applicant_contact2}
                    onChange={(e, {name,  value})=> handleOnChange(e, {name, value})}
                />
            </FormGroup>   

            <FormGroup widths='equal'>              
                <FormInput
                    label='Name #3'
                    name="applicant_name3"
                    value={initVal.applicant_name3}
                    onChange={(e, {name,  value})=> handleOnChange(e, {name, value})}
                />
                <FormInput
                    label='Relationship'
                    name="applicant_relationship3"
                    value={initVal.applicant_relationship3}
                    onChange={(e, {name,  value})=> handleOnChange(e, {name, value})}
                />
                <FormInput
                    label='Contact #'
                    name="applicant_contact3"
                    value={initVal.applicant_contact3}
                    onChange={(e, {name,  value})=> handleOnChange(e, {name, value})}
                />
            </FormGroup>  

            <NextBackButtons handleBack={handleBack} handleNext={handleNext} activeStep={activeStep} />     
        </Form>
    </div>
  )
}
