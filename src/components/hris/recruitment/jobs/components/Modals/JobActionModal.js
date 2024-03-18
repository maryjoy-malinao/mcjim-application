import React from 'react'
import {
    ModalHeader,
    ModalContent,
    ModalActions,
    Modal,
    Button
  } from 'semantic-ui-react'
export default function JobActionModal({isOpen, handleActionModal, mode}) {
  return (
    <Modal
        size='mini'
        open={isOpen}
        onClose={() => handleActionModal()}
      >
        <ModalHeader>{mode.content.header}</ModalHeader>
        <ModalContent>
          <p>{mode.content.body}</p>
        </ModalContent>
        <ModalActions>
        <Button negative onClick={() => handleActionModal()}>Cancel</Button>
          <Button positive onClick={() => handleActionModal()}>Ok</Button>
        </ModalActions>
      </Modal>
  )
}