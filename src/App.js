import * as React from 'react';
import { commerce } from './lib/commerce';
import { ChakraProvider, theme } from '@chakra-ui/react';

// Components Imports
import Navbar from './components/Navbar';
import ProductContainer from './components/ProductContainer';

export const CartItemsContext = React.createContext()


function App() {

  const [cart, setCart] = React.useState({});

  React.useEffect(() => {
    commerce.cart.retrieve()
      .then(res => {
        setCart(res)
      })
  },[]);


  const cartHelperFunctions = {

    deleteItem: (lineItemId) => {
      commerce.cart.remove(lineItemId)
        .then(res => {
          setCart(res.cart)
        })
    },
    addQuanity: (lineItemId, newQuanity) => {
      commerce.cart.update(lineItemId, {quantity: newQuanity})
        .then(res => {
          setCart(res.cart)

        })
    },
    subtractQuanity: (lineItemId, newQuanity) => {

      if (newQuanity === 0) {
        cartHelperFunctions.deleteItem(lineItemId)
      } else {
        commerce.cart.update(lineItemId, {quantity: newQuanity})
          .then(res => {
            setCart(res.cart)
          })
      }

    }
  }

  const addToCart = (productId, variantInfo) => {
    if(variantInfo) {
      commerce.cart.add(productId, 1, variantInfo)
        .then(res => {
          setCart(res.cart)
        });
    } else {
      window.alert('Porfavor seleccione un color.');
    }
  }

  const emptyCart = () => {
    commerce.cart.empty()
      .then(res => {
        setCart({})
      })
  }

  return (
    <ChakraProvider theme={theme}>

      <CartItemsContext.Provider value={cartHelperFunctions}>
        <Navbar
          cart={cart}
          emptyCart={emptyCart}
        />
      </CartItemsContext.Provider>

      <ProductContainer 
        addToCart={addToCart}
      />

    </ChakraProvider>
  );
}

export default App;
