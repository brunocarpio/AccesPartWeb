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
  Center,
  Text,
  Box,
} from "@chakra-ui/react";
import Carousel from 'react-bootstrap/Carousel';

import 'bootstrap/dist/css/bootstrap.min.css';

function ProductModal(props) {

  const { isOpen, onOpen, onClose } = useDisclosure();

  const carouselItems = [];

  console.log(props.product);
  console.log(carouselItems);

  for (let i = 0; i < props.product.assets.length; i++) {
    carouselItems.push(
      <Carousel.Item key={props.product.assets[i].id}>
        <Image
          rounded={'md'}
          objectFit={'cover'}
          src={props.product.assets[i].url}
          alt=''
        />
        <Carousel.Caption>
          <Box>
            <Text
              textTransform='uppercase'
              fontSize={'lg'}
              fontWeight={'700'}
            >
              {props.product.name}
            </Text>
            <Text
              dangerouslySetInnerHTML={{__html: props.product.description}}
            />
          </Box>
        </Carousel.Caption>
      </Carousel.Item>
    );
  }


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

      <Modal isOpen={isOpen} onClose={onClose} size='xl'>
        <ModalOverlay />

        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <Center>
              <Carousel
                nextLabel={null}
                prevLabel={null}
                fade={true}
              >
                {carouselItems}
              </Carousel>
            </Center>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>

      </Modal>
    </>
  );
}

export default ProductModal;
