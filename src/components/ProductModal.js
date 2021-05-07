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
} from "@chakra-ui/react";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

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
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={props.product.media.source}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
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
