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
} from "@chakra-ui/react"

function ProductModal(props) {
  return (

    <Image
      rounded={'lg'}
      height={'230'}
      width={'282'}
      objectFit={'cover'}
      src={props.product.media.source}
      cursor={'pointer'}
    />
  );
}

export default ProductModal;
