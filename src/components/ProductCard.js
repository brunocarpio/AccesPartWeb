import * as React from 'react';
import {
  Center,
  useColorModeValue,
  Box,
  Stack,
  Image,
  Text,
  Heading,
  Select,
  Tooltip,
  Icon,
  IconButton,
} from '@chakra-ui/react';
import { MdAddShoppingCart } from 'react-icons/md';


function ProductCard(props) {

  const [options, setOptions] = React.useState([]);
  const [variantInfo, setVariantInfo] = React.useState()

  React.useEffect(() => {        
    let finalOptionArray = props.product.variant_groups[0].options.map(option => {
      let optionInfo = {};

      optionInfo.key = option.name;
      optionInfo.text = option.name;
      optionInfo.value = option.id;

      return optionInfo;
    })

    setOptions(finalOptionArray)
  }, [])

  const handleOption = e => {
    setVariantInfo({[props.product.variant_groups[0].id]: e.target.value});
  }

  const handleButtonAddCart = e => {
    props.addToCart(props.product.id, variantInfo)
  }


  return (
    <Center py={12}>
      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'230px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(${props.product.media.source})`,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}>
          <Image
            rounded={'lg'}
            height={'230'}
            width={'282'}
            objectFit={'cover'}
            src={props.product.media.source}
            cursor={'pointer'}
          />
        </Box>
        <Stack pt={'10'} align={'center'}>
          <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
            AccesPart
          </Text>
          <Stack direction={'row'} align={'center'}>
            <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={'500'}>
              {props.product.name}
            </Heading>
            <Tooltip
              label='Añadir al carrito'
              bg='white'
              placement={'top'}
              color={'gray.800'}
              fontSize={'1.2em'}>
              <IconButton
                aria-label={'Añadir al carrito.'}
                icon={<Icon as={MdAddShoppingCart} w={6} h={6} />}
                variant={'link'}
                onClick={() => handleButtonAddCart()}
              />
            </Tooltip>
          </Stack>
          <Stack direction={'row'} align={'center'}>
            <Text fontWeight={'800'} fontSize={'xl'}>
              S/ {props.product.price.raw}
            </Text>
          </Stack>
          <Select placeholder='seleccionar' onChange={e => handleOption(e)} variant='filled' textTransform='capitalize'>
            {options.map((option) => <option key={option.key} value={option.value}>{option.text}</option>)}
          </Select>
        </Stack>
      </Box>
    </Center>
  );
}

export default ProductCard;
