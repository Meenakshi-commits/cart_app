import { useState,useEffect } from 'react'
import Navbar from './components/NavBar'
import ProductList from './components/ProductList'
import CartModal from './components/CartModal'
import { getProducts } from './api/products'

const App = () => {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  const [cartModalOpen, setCartModalOpen] = useState(false)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then((res) => res.json())
    .then((data) => setProducts(data));
  }, [])

  const addToCart = (product) => {
    if (cart.find((item) => item.id === product.id)) {
      alert('Product already in cart');
    }
      else{
        setCart([...cart, product])
      
    }
  }

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  }

  const toggleCartModal = () => {
    setCartModalOpen()
  }

  return (
    <div>
      <Navbar cartCount={cart.length} toggleCartModal={toggleCartModal} />
      <ProductList products={products} addToCart={addToCart} />
      {cartModalOpen && (
        <CartModal
          cart={cart}
          removeFromCart={removeFromCart}
          toggleCartModal={toggleCartModal}
        />
      )}
    </div>
  )
}



export default App
