import React from 'react'
import NextBackButtons from './NextBackButtons'
import {
    FormGroup,
    Form,
    FormInput,
  } from 'semantic-ui-react'

export default function Education({handleBack,handleNext, activeStep, handleOnChange, initVal}) {
  return (
    <div className='Education'>
        <Form size='small' className='Education-form'>
            <FormGroup widths='equal'>              
                <FormInput
                    label='Elementary'
                    name="applicant_elemName"
                    value={initVal.applicant_elemName}
                    onChange={(e, {name,  value})=> handleOnChange(e, {name, value})}
                />
                <FormInput
                    label='Address'
                    name="applicant_elemAddress"
                    value={initVal.applicant_elemAddress}
                    onChange={(e, {name,  value})=> handleOnChange(e, {name, value})}
                />
                <FormInput
                    label='Year Graduate'
                    name="applicant_elemYear"
                    value={initVal.applicant_elemYear}
                    onChange={(e, {name,  value})=> handleOnChange(e, {name, value})}
                />
            </FormGroup>  

            <FormGroup widths='equal'>              
                <FormInput
                    label='High School'
                    name="applicant_highName"
                    value={initVal.applicant_highName}
                    onChange={(e, {name,  value})=> handleOnChange(e, {name, value})}
                />
                <FormInput
                    label='Address'
                    name="applicant_highAddress"
                    value={initVal.applicant_highAddress}
                    onChange={(e, {name,  value})=> handleOnChange(e, {name, value})}
                />
                <FormInput
                    label='Year Graduate'
                    name="applicant_highYear"
                    value={initVal.applicant_highYear}
                    onChange={(e, {name,  value})=> handleOnChange(e, {name, value})}
                />
            </FormGroup>  

            <FormGroup widths='equal'>              
                <FormInput
                    label='College'
                    name="applicant_colName"
                    value={initVal.applicant_colName}
                    onChange={(e, {name,  value})=> handleOnChange(e, {name, value})}
                />
                <FormInput
                    label='Address'
                    name="applicant_colAddress"
                    value={initVal.applicant_colAddress}
                    onChange={(e, {name,  value})=> handleOnChange(e, {name, value})}
                />
                <FormInput
                    label='Year Graduate'
                    name="applicant_colYear"
                    value={initVal.applicant_colYear}
                    onChange={(e, {name,  value})=> handleOnChange(e, {name, value})}
                />
            </FormGroup>  

            <NextBackButtons handleBack={handleBack} handleNext={handleNext} activeStep={activeStep} />     
        </Form>
    </div>
  )
}
