import * as React from 'react';
import {
  Box,
  Image,
  Spacer,
  Heading,
  Text,
  Stack,
  IconButton,
} from '@chakra-ui/react'
import {
  AddIcon,
  MinusIcon,
} from '@chakra-ui/icons';
import { CartItemsContext } from '../App';


function CartItem(props) {
  const helpFnc = React.useContext(CartItemsContext);

  return (
    <Stack
      p={5}
      direction={['column', 'row']}
      shadow='md'
      borderWidth='1px'
      borderRadius='md'
      alignItems='center'
      spacing='15px'
    >
      <Image
        boxSize='80px'
        src={props.item.media.source}
        borderRadius='lg'
        objectFit='cover'
      />
      <Box>
        <Heading
          as='h4'
          size='sm'
          textTransform='uppercase'
          letterSpacing='wide'
          color='teal.600'
        >
          {props.item.name}
        </Heading>
        <Text
          color='gray.500'
          textTransform='uppercase'
          fontSize='sm'
        >
          {props.item.selected_options[0].option_name}
        </Text>
        <Box>
          <IconButton
            aria-label='Disminuir item'
            size='xs'
            variant='outline'
            icon={<MinusIcon />}
            onClick={() => {
              let newQuanity = props.item.quantity - 1;
              helpFnc.subtractQuanity(props.item.id, newQuanity);
            }}
          />
          <Text
            color='gray.500'
            display='inline'
            fontSize='sm'
            mx={2}
          >
            {props.item.quantity} 
          </Text>
          <IconButton
            aria-label='Añadir item'
            size='xs'
            variant='outline'
            icon={<AddIcon />}
            onClick={() => {
              let newQuanity = props.item.quantity + 1;
              helpFnc.addQuanity(props.item.id, newQuanity);
            }}
          />
        </Box>
      </Box>
      <Spacer />
      <Box>
        <Text
          color='gray.500'
          fontSize='sm'
          fontWeight='semibold'
        >
          {props.item.line_total.formatted_with_symbol}
        </Text>
      </Box>
    </Stack>
  );
}

export default CartItem;
