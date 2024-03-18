import React from 'react'
import { useRouter } from 'next/router'
import {
    ModalHeader,
    ModalContent,
    ModalActions,
    Modal,
    Button
  } from 'semantic-ui-react'
export default function SubmitModal({isOpen, handleSubmitModal}) {
    const router = useRouter()
  return (
    <Modal
        size='mini'
        open={isOpen}
        onClose={() => handleSubmitModal()}
      >
        <ModalHeader>Form Submitted.+</ModalHeader>
        <ModalContent>
          <p>Your information has been successfully submitted. Thank you for your submission!</p>
        </ModalContent>
        <ModalActions>
          <Button positive onClick={() => router.push(`/careers//`)}>Ok</Button>
        </ModalActions>
      </Modal>
  )
}
