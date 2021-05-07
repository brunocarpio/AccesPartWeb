import * as React from 'react';
import {
  Flex,
  Image,
  Spacer,
} from '@chakra-ui/react';

import logo from '../assets/logo.svg';
import CartModal from './CartModal';

function Navbar(props) {
  return (
    <Flex
      alignItems={'center'}
      boxShadow={'lg'}
      p={4}
      mb={2}
    >
      <Image src={logo} alt={'Acces Part logo.'} height={30} />
      <Spacer />
      <CartModal cart={props.cart} emptyCart={props.emptyCart}/>
    </Flex>
  );
}

export default Navbar;
