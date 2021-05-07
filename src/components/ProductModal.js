import * as React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Image,
  useDisclosure,
  Button,
} from "@chakra-ui/react"

function ProductModal(props) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Image
        rounded={'lg'}
        height={'230'}
        width={'282'}
        objectFit={'cover'}
        src={props.product.media.source}
        cursor={'pointer'}
        onClick={onOpen}
      />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ProductModal;
