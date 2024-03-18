import React from 'react'
import {
    ModalHeader,
    ModalContent,
    ModalActions,
    Modal,
    Button
  } from 'semantic-ui-react'
export default function MessageModal({isOpen, handleModal}) {
  return (
    <Modal
        size='mini'
        open={isOpen}
        onClose={() => handleModal()}
      >
        <ModalHeader>Blank Required Field</ModalHeader>
        <ModalContent>
          <p>Please fill all required fields.</p>
        </ModalContent>
        <ModalActions>
          <Button positive onClick={() => handleModal()}>Ok</Button>
        </ModalActions>
      </Modal>
  )
}
