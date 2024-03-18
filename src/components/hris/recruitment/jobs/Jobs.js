import React, {  useState } from 'react'
import {Typography}from '@mui/material';
import JobFormModal from './components/Modals/JobFormModal';
import JobTable from './components/Table/JobTable';
import JobActionModal from './components/Modals/JobActionModal';
import { Button } from 'semantic-ui-react'

export default function Jobs() {
  const [formModal, setFormModal] = useState(false); // this is a modal for create and edit. 
  const [actionModal, setActionModal] = useState(false); // this is a modal for status and delete. 
  const [formProps, setFormProps] = useState(null); // To pass the values as a props depending on which button was clicked. Create or Edit
  const [actionProps, setActionProps] = useState(null); // To pass the values as a props depending on which button was clicked. Create or Edit
  const [formValue, setFormValue] = useState(null); //this is an obj. this the values that you Retrieve from inputs within a modal
  const [jobs, setJobs] = useState([]); //Collection of job post

  //handle click for create and edit btn
  const handleFormModal = (action)=>{
    let content={
        header: 'Create New Job Post',
        btnValue: 'Create',
        btnIcon: 'plus'     
    }
    if(action === 'edit'){
        content={
            header: 'Edit Job Post',
            btnValue: 'Edit',
            btnIcon: 'edit outline'
        }
    }
    setFormProps({action: action, content: content})
    setFormModal(!formModal);
  }

  const handleActionModal = (action)=>{
    let content ={
      header: 'Change Status?',
      body:'Are you sure you want to set this job status to Inactive?'
    }

    if(action === 'delete'){
      content ={
        header: 'Delete Job Post?',
        body:'Are you sure you want to delete this job post?'
      }
    }
    setActionProps({action: action, content: content})
    setActionModal(!actionModal);
  }
 
  
  //Retrieve values from inputs within a modal
  const handleOnChange =(e, {name, value})=>{
    setFormValue({...formValue, [name]: value});
  }


  //adding a job to a collection of jobs.    //must change 
  const handleFormBtn = (action) =>{
    setJobs((prevJobs)=> [...prevJobs, formValue]);
    setFormModal(!formModal);
    //pass this value to the api
    //formValue
  }


  return (
    <div className='Jobs'>
      <div className='Jobs-heading'>
        <Typography variant="h5" gutterBottom>Job Openings</Typography>
        <div>
            <Button onClick={()=> handleFormModal('create')} color='orange'>Create New</Button>
        </div>
      </div>
      <JobTable jobs={jobs} handleFormModal={handleFormModal} handleActionModal={handleActionModal}/>
      
      {/* Modal fo Creating and Editing Job Post */}
      {formModal && <JobFormModal mode={formProps} isOpen={formModal} handleFormModal={handleFormModal} handleOnChange={handleOnChange} handleFormBtn={handleFormBtn}/>}
      {actionModal && <JobActionModal isOpen={actionModal} handleActionModal={handleActionModal} mode={actionProps}/>}
    </div>

    
  )
}
