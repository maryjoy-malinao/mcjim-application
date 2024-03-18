import { jobTypeOptions, specializationOptions, careerOptions } from '@/utils/selection'
import TinyMCE from './Tinymce'
import {
    ModalHeader,
    ModalDescription,
    ModalContent,
    ModalActions,
    Button,
    Modal,
    FormGroup,
    Form,
    FormSelect,
    FormInput
  } from 'semantic-ui-react'


  export default function JobFormModal({isOpen, handleFormModal, mode, handleOnChange, handleFormBtn}) {
    return (
        <Modal
            onOpen={() => handleFormModal()}
            open={isOpen}
        >
        <ModalHeader>{mode.content.header}</ModalHeader>
        <ModalContent>
            <ModalDescription>
                <Form size='small'>
                    <FormGroup widths='equal'>
                        <FormInput
                            label='Job Title'
                            name="job_title"
                            onChange={(e, {name,  value})=> handleOnChange(e, {name, value})}
                        />
                        <FormInput
                            label='Work Location'
                            name="job_location"
                            onChange={(e, {name,  value})=> handleOnChange(e, {name, value})}
                        />
                    </FormGroup>
                    <TinyMCE handleOnChange={handleOnChange}/>
                    <FormGroup widths='equal'>
                        <FormSelect 
                          fluid 
                          placeholder='Job Type' 
                          name='job_type'
                          options={jobTypeOptions} 
                          onChange={(e, {name,  value})=> handleOnChange(e, {name, value})}
                          />
                        <FormSelect 
                          fluid 
                          placeholder='Specialization' 
                          options={specializationOptions} 
                          name='job_specialization'
                          onChange={(e, {name,  value})=> handleOnChange(e, {name, value})}
                          />
                        <FormSelect 
                          fluid 
                          placeholder='Career Level' 
                          options={careerOptions} 
                          name='job_career'
                          onChange={(e, {name,  value})=> handleOnChange(e, {name, value})}
                          />
                    </FormGroup>
                </Form>
            </ModalDescription>
        </ModalContent>
        <ModalActions>
          <Button color='black' onClick={() => handleFormModal()}>
            Cancel
          </Button>
          <Button
            content={mode.content.btnValue}
            labelPosition='right'
            icon={mode.content.btnIcon}
            onClick={() => handleFormBtn(mode.action)}
            positive
          />
        </ModalActions>
      </Modal>
    )
  }
  