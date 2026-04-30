import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  // Dark mode state
  const [darkMode, setDarkMode] = useState(false)

  // Cart state
  const [cart, setCart] = useState([])

  // Category filter state
  const [selectedCategory, setSelectedCategory] = useState('all')

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  // Function to add item to cart
  const addToCart = (product) => {
    setCart([...cart, product])
  }

  return (
    <div>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark mode.
      </p>

      {/* Dark Mode Toggle */}
      <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      {/* Category Filter */}
      <label>Filter by Category: </label>
      <select onChange={(e) => setSelectedCategory(e.target.value)} value={selectedCategory}>
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      {/* Product List */}
      <ProductList selectedCategory={selectedCategory} addToCart={addToCart} />

      {/* Cart */}
      <Cart cart={cart} />
    </div>
  )
}

export default App