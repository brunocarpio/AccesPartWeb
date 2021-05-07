import * as React from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import { commerce } from '../lib/commerce';

import ProductCard from './ProductCard';

function ProductContainer(props) {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    commerce.products.list()
      .then(res => {
        setProducts(res.data)
      })
      .catch(err => console.log(err))
  },[]);

  return (
    <>
      <SimpleGrid minChildWidth={'200px'}>
        {products.map(product =>
        <ProductCard
          key={product.id}
          product={product}
          addToCart={props.addToCart}
        />)}
      </SimpleGrid>
    </>
  );
}

export default ProductContainer;
