import * as React from 'react';
import {
  Box,
  Spacer,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Icon,
  IconButton,
  Badge,
  useDisclosure,
  Stack,
  Center,
  Text,
} from "@chakra-ui/react"
import { FiShoppingCart } from 'react-icons/fi';

import CartItem from './CartItem';

function CartModal(props) {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef();

  return (
    <>
      <Box ref={finalRef} tabIndex={-1} position='relative'>
        <IconButton
          aria-label='Carrito de compras.'
          icon={<Icon as={FiShoppingCart} w={7} h={7} />}
          variant={'ghost'}
          onClick={onOpen}
        />
        <Badge colorScheme='red' position='absolute' top='-2' right='-2'>
          {props.cart.total_unique_items}
        </Badge>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>AccesPart</ModalHeader>
          <ModalCloseButton />
          {props.cart && props.cart.total_unique_items > 0 ? (
            <>
              <ModalBody>
                <Stack>
                  {props.cart.line_items.map(item => (
                    <CartItem item={item} key={item.id} />
                  ))}
                </Stack>
              </ModalBody>
              <ModalFooter>
                <Button
                  colorScheme="red"
                  variant='outline'
                  mr={3}
                  onClick={() => props.emptyCart()}
                >
                  Vaciar carrito
                </Button>
                <Button
                  colorScheme="blue"
                  variant='ghost'
                  mr={3}
                >
                  Proceder al pago
                </Button>
                <Spacer />
                <Text
                  fontWeight='bold'
                  fontSize='md'
                >
                  {props.cart.subtotal.formatted_with_symbol}
                </Text>
              </ModalFooter>
            </>
          ) : (
            <>
              <ModalBody>
                <Center h='200px'>
                  <Stack align='center'>
                    <Icon as={FiShoppingCart} w={7} h={7} />
                    <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                      No hay items en el carrito
                    </Text>
                  </Stack>
                </Center>
              </ModalBody>
              <ModalFooter>
                <Button colorScheme="green" mr={3} onClick={onClose}>
                  Volver
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default CartModal;
