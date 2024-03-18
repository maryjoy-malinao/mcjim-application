import React, { useState } from 'react';
import {Stack, TableRow, TablePagination, TableHead, TableContainer,TableBody ,Table, Paper, TableCell  }from '@mui/material';
import { Button, Popup } from 'semantic-ui-react'

const columns = [
  { id: 'job_title', label: 'Job Title', minWidth: 170 },
  { id: 'job_specialization', label: 'Specialization', minWidth: 100 },
  {
    id: 'job_location',
    label: 'Work Location',
    minWidth: 170,
    align: 'right'
  },
  {
    id: 'status',
    label: 'Status',
    minWidth: 170,
    align: 'right'
  },
  {
    id: 'manage',
    label: 'Manage',
    minWidth: 170,
    align: 'right'
  },
];


export default function JobTable({jobs, handleFormModal, handleActionModal}) {
  const rows = jobs;
      
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }} className='JobTable'>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table" className='JobTable-table'>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.length ? 
               rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.job_title}>
                    {columns.map((column) => {
                      let value = row[column.id];
                      if(column.id === 'manage'){
                        value = ( <Stack direction="row" spacing={2}>
                                    <Popup
                                      trigger={<Button color='orange' icon='toggle on' onClick={()=> handleActionModal('status')}/>}
                                      content='Active'
                                      size='large'
                                    />    
                                    <Popup
                                      trigger={<Button color='orange' icon='edit' onClick={()=> handleFormModal('edit')}/>}
                                      content='Edit'
                                      size='large'
                                    />    
                                    <Popup
                                      trigger={<Button color='orange' icon='trash' onClick={()=> handleActionModal('delete')}/>}
                                      content='Delete'
                                      size='large'
                                    />                       
                                </Stack>);
                      }
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {value}
                        </TableCell>
                        
                      );
                    })}
                  </TableRow>
                );
              })
              : <TableRow>
                    <TableCell align='center' colSpan={columns.length}>No current job post</TableCell>
                </TableRow>
            }
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}